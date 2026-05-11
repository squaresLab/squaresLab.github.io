import { parse } from '@retorquere/bibtex-parser';
import type { Entry, Creator } from '@retorquere/bibtex-parser';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { Publication, PublicationMaterials } from './types';

const PROJECT_ROOT = join(import.meta.dirname, '..', '..');

const MONTH_MAP: Record<string, number> = {
  january: 1, jan: 1,
  february: 2, feb: 2,
  march: 3, mar: 3,
  april: 4, apr: 4,
  may: 5,
  june: 6, jun: 6,
  july: 7, jul: 7,
  august: 8, aug: 8,
  september: 9, sep: 9, sept: 9,
  october: 10, oct: 10,
  november: 11, nov: 11,
  december: 12, dec: 12,
};

/**
 * Strip the Jekyll front matter and header from the .bib file content.
 * The file starts with "---\n---\nReferences\n==========\n" before
 * the actual BibTeX entries.
 */
function stripFrontMatter(content: string): string {
  // Remove YAML front matter (--- ... ---)
  const fmPattern = /^---[\s\S]*?---\s*/;
  let cleaned = content.replace(fmPattern, '');

  // Remove the "References\n==========" header if present
  cleaned = cleaned.replace(/^References\s*=+\s*/i, '');

  return cleaned;
}

/**
 * Format a Creator object into a display string like "FirstName LastName".
 */
function formatCreator(creator: Creator): string {
  if (creator.name) {
    return cleanLatex(creator.name);
  }

  const parts: string[] = [];
  if (creator.firstName) {
    parts.push(cleanLatex(creator.firstName));
  }
  if (creator.prefix) {
    parts.push(cleanLatex(creator.prefix));
  }
  if (creator.lastName) {
    parts.push(cleanLatex(creator.lastName));
  }
  if (creator.suffix) {
    parts.push(cleanLatex(creator.suffix));
  }
  return parts.join(' ');
}

/**
 * Clean residual LaTeX markup from a string.
 * Handles tildes used as non-breaking spaces, leftover braces, and
 * common command artifacts.
 */
function cleanLatex(text: string): string {
  let cleaned = text;

  // Replace ~ with space (non-breaking space in LaTeX)
  cleaned = cleaned.replace(/~/g, ' ');

  // Remove leftover curly braces
  cleaned = cleaned.replace(/[{}]/g, '');

  // Remove common LaTeX commands that might leak through
  cleaned = cleaned.replace(/\\[a-zA-Z]+\s*/g, '');

  // Collapse multiple spaces
  cleaned = cleaned.replace(/\s+/g, ' ');

  return cleaned.trim();
}

/**
 * Parse a month string or number into a numeric month (1-12).
 */
function parseMonth(value: string | undefined): number | undefined {
  if (!value) return undefined;

  const trimmed = value.trim().toLowerCase();

  // Try direct number
  const num = parseInt(trimmed, 10);
  if (!isNaN(num) && num >= 1 && num <= 12) return num;

  // Try month name lookup
  return MONTH_MAP[trimmed];
}

/**
 * Extract the original BibTeX entry from the raw file content for a given key.
 * Looks for @type{key, and captures everything up to the matching closing brace.
 */
function extractBibtexEntry(rawContent: string, key: string): string {
  // Match @type{key (case-insensitive for the entry type)
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(@\\w+\\s*\\{\\s*${escapedKey}\\s*,)`, 'i');
  const match = rawContent.match(pattern);
  if (!match || match.index === undefined) return '';

  const start = match.index;
  let depth = 0;
  let end = start;

  for (let i = start; i < rawContent.length; i++) {
    if (rawContent[i] === '{') depth++;
    if (rawContent[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }

  return rawContent.slice(start, end).trim();
}

/**
 * Scan the materials directory for files matching the given key.
 * Returns a PublicationMaterials object with paths relative to the site root.
 */
function scanMaterials(
  key: string,
  materialsFiles: Set<string>
): PublicationMaterials {
  const materials: PublicationMaterials = {};

  const checks: [string, keyof PublicationMaterials][] = [
    [`${key}.pdf`, 'pdf'],
    [`${key}.slides.pdf`, 'slidesPdf'],
    [`${key}.slides.pptx`, 'slidesPptx'],
    [`${key}.slides.key`, 'slidesKey'],
    [`${key}.slides.odp`, 'slidesOdp'],
    [`${key}.poster.pdf`, 'posterPdf'],
  ];

  for (const [filename, field] of checks) {
    if (materialsFiles.has(filename)) {
      materials[field] = `/materials/${filename}`;
    }
  }

  return materials;
}

/**
 * Format a simple citation string from an entry's data.
 * Format: Authors. "Title." Venue, Year.
 */
function formatCitation(
  authors: string[],
  title: string,
  venue: string | undefined,
  year: number
): string {
  const authorStr = authors.length > 0 ? authors.join(', ') : 'Unknown';
  const parts = [authorStr + '.', `"${title}."`];
  if (venue) {
    parts.push(venue + ',');
  }
  parts.push(String(year) + '.');
  return parts.join(' ');
}

/**
 * Parse the BibTeX file and return an array of Publication objects
 * sorted by year descending, then month descending.
 */
export function getPublications(): Publication[] {
  const bibPath = join(PROJECT_ROOT, '_bibliography', 'publications.bib');
  const rawContent = readFileSync(bibPath, 'utf-8');
  const cleanedContent = stripFrontMatter(rawContent);

  // Parse with sentence-casing disabled to preserve original titles
  const library = parse(cleanedContent, {
    english: false,
    sentenceCase: false,
    unsupported: 'ignore',
  });

  if (library.errors.length > 0) {
    console.warn(
      `BibTeX parser warnings: ${library.errors.length} error(s) encountered`
    );
    for (const err of library.errors.slice(0, 5)) {
      console.warn(`  - ${err.error}`);
    }
  }

  // Build materials file index
  const materialsDir = join(PROJECT_ROOT, 'public', 'materials');
  let materialsFiles = new Set<string>();
  if (existsSync(materialsDir)) {
    try {
      materialsFiles = new Set(readdirSync(materialsDir));
    } catch {
      // Directory not readable; proceed with empty set
    }
  }

  const publications: Publication[] = [];

  for (const entry of library.entries) {
    // Skip non-standard entry types like @proceedings (editor-only entries)
    // that don't have authors
    const fields = entry.fields;

    // Extract authors
    const authors = extractAuthors(entry);

    // Extract title
    const title = cleanLatex(
      typeof fields.title === 'string' ? fields.title : ''
    );

    // Extract year
    const yearStr = typeof fields.year === 'string' ? fields.year : '';
    const year = parseInt(yearStr, 10);
    if (isNaN(year)) continue; // Skip entries without a valid year

    // Extract month
    const monthStr = typeof fields.month === 'string' ? fields.month : undefined;
    const month = parseMonth(monthStr);

    // Determine venue from venue field, booktitle, journal, or series
    const venue = getStringField(fields, 'venue')
      || getStringField(fields, 'booktitle')
      || getStringField(fields, 'journal')
      || getStringField(fields, 'series');

    // Extract custom fields
    const projectStr = getStringField(fields, 'project') || '';
    const projects = projectStr
      ? projectStr.split(',').map(p => p.trim()).filter(Boolean)
      : [];

    const doi = getStringField(fields, 'doi');
    const code = getStringField(fields, 'code');
    const data = getStringField(fields, 'data');
    const tool = getStringField(fields, 'tool');
    const results = getStringField(fields, 'results');
    const website = getStringField(fields, 'website');
    const video = getStringField(fields, 'video')
      || getStringField(fields, 'talk');

    // Scan materials
    const materials = scanMaterials(entry.key, materialsFiles);

    // Get original BibTeX
    const bibtex = extractBibtexEntry(rawContent, entry.key);

    // Format citation
    const formattedCitation = formatCitation(authors, title, venue, year);

    publications.push({
      key: entry.key,
      type: entry.type,
      title,
      authors,
      year,
      month,
      venue: venue ? cleanLatex(venue) : undefined,
      doi,
      projects,
      code,
      data,
      tool,
      results,
      website,
      video,
      materials,
      formattedCitation,
      bibtex,
    });
  }

  // Sort by year descending, then month descending
  publications.sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    const aMonth = a.month ?? 0;
    const bMonth = b.month ?? 0;
    return bMonth - aMonth;
  });

  return publications;
}

/**
 * Extract author names from an entry. The parser provides structured
 * Creator objects when it can parse the author field, but some entries
 * may have the author field as a plain string at runtime.
 */
function extractAuthors(entry: Entry): string[] {
  const authorField = entry.fields.author as Creator[] | string | undefined;

  if (!authorField) return [];

  // The parser returns Creator[] for the author field
  if (Array.isArray(authorField)) {
    return authorField.map(formatCreator).filter(Boolean);
  }

  // Fallback: plain string, split on " and "
  if (typeof authorField === 'string') {
    return authorField
      .split(/\s+and\s+/i)
      .map((name: string) => cleanLatex(name.trim()))
      .filter(Boolean);
  }

  return [];
}

/**
 * Safely extract a string field value from the entry's fields map.
 */
function getStringField(
  fields: Entry['fields'],
  name: string
): string | undefined {
  const val = fields[name];
  if (typeof val === 'string' && val.trim()) {
    return val.trim();
  }
  return undefined;
}
