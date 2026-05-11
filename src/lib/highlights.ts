import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { getPublications } from './publications';

interface Highlight {
  date: string;
  type: 'publication' | 'award' | 'talk' | 'news' | 'grant' | 'person';
  title: string;
  description?: string;
  link?: string;
}

export function getHighlights(limit = 5): Highlight[] {
  // Load manual highlights
  const highlightsPath = join(import.meta.dirname, '..', 'data', 'highlights.yaml');
  let manual: Highlight[] = [];
  try {
    const raw = readFileSync(highlightsPath, 'utf-8');
    const parsed = yaml.load(raw);
    if (Array.isArray(parsed)) {
      manual = parsed as Highlight[];
    }
  } catch {
    // File might be empty or only comments
  }

  // Generate publication highlights from recent papers
  const pubs = getPublications();
  const pubHighlights: Highlight[] = pubs.slice(0, 10).map((pub) => ({
    date: `${pub.year}-${String(pub.month || 1).padStart(2, '0')}-01`,
    type: 'publication' as const,
    title: pub.title,
    description: pub.venue ? `${pub.venue} ${pub.year}` : String(pub.year),
    link: pub.materials.pdf || (pub.doi ? `https://doi.org/${pub.doi}` : undefined),
  }));

  // Merge and sort by date descending
  const all = [...manual, ...pubHighlights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return all.slice(0, limit);
}
