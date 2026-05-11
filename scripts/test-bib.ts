import { getPublications } from '../src/lib/publications.ts';

async function main() {
  const pubs = getPublications();
  console.log(`Parsed ${pubs.length} publications`);
  console.log(`First: ${pubs[0].title} (${pubs[0].year})`);
  console.log(`Authors: ${pubs[0].authors.join(', ')}`);
  console.log(`Projects: ${pubs[0].projects.join(', ')}`);
  console.log(`Materials: ${JSON.stringify(pubs[0].materials)}`);
  console.log(`\nYears: ${[...new Set(pubs.map(p => p.year))].sort().reverse().join(', ')}`);
  console.log(`Topics: ${[...new Set(pubs.flatMap(p => p.projects))].sort().join(', ')}`);
}

main().catch(console.error);
