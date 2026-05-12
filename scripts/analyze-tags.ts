import { getPublications } from '../src/lib/publications.ts';

const pubs = getPublications();

const tagCounts = new Map<string, number>();
const untagged: string[] = [];
const tagPapers = new Map<string, string[]>();

for (const p of pubs) {
  if (p.projects.length === 0) {
    untagged.push(`${p.key} (${p.year}): ${p.title}`);
  }
  for (const t of p.projects) {
    tagCounts.set(t, (tagCounts.get(t) || 0) + 1);
    if (!tagPapers.has(t)) tagPapers.set(t, []);
    tagPapers.get(t)!.push(`${p.key} (${p.year}): ${p.title}`);
  }
}

console.log('=== Tag Distribution ===');
for (const [tag, count] of [...tagCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${tag}: ${count}`);
}

console.log(`\n=== Untagged Papers (${untagged.length}) ===`);
for (const u of untagged) console.log(`  ${u}`);

console.log('\n=== Papers per Tag ===');
for (const [tag, papers] of [...tagPapers.entries()].sort()) {
  console.log(`\n--- ${tag} (${papers.length}) ---`);
  for (const p of papers) console.log(`  ${p}`);
}
