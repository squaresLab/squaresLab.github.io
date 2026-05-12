# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Astro-based website for the squaresLab research group at Carnegie Mellon University. The lab focuses on Software QUality in Real and Evolving Systems. Led by Professor Claire Le Goues.

## Build and Serve

```bash
npm install       # install dependencies
npm run dev       # serve locally at localhost:4321
npm run build     # build to dist/
```

Requires Node.js 20+.

## Deployment

Push to the `update` branch. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages automatically. The workflow uses artifact-based Pages deployment. The GitHub Pages Source setting must be set to "GitHub Actions" (not "Deploy from a branch"). Never push directly to `master`.

## Architecture

**Framework:** Astro 5 with TypeScript, Tailwind CSS, Preact (for the publication filter island).

**BibTeX pipeline:** `src/lib/publications.ts` parses `_bibliography/publications.bib` at build time using `@retorquere/bibtex-parser`. It extracts custom fields (`project`, `code`, `data`, `tool`, `video`, `results`, `website`) and scans `public/materials/` for PDFs and slides by BibTeX key naming convention. The `getPublications()` function returns a typed `Publication[]` array sorted by year descending. Types are in `src/lib/types.ts`.

**Content Collections:** Defined in `src/content.config.ts` with Zod schema validation.
- `src/content/team/` -- one `.md` file per person (current members and alumni)
- `src/content/projects/` -- one `.md` file per research area

**Interactive island:** `src/components/PublicationFilter.tsx` is a Preact component on `/publications` providing client-side search and filtering by topic/year. It reads URL query parameters (`?topic=TAG&year=YEAR&q=SEARCH`) so filtered views are linkable from other pages.

**Highlights:** `src/lib/highlights.ts` merges manual entries from `src/data/highlights.yaml` with auto-generated entries from recent publications.

## Adding Publications

1. Add a BibTeX entry to `_bibliography/publications.bib` at the top of the file (after the `References` header)
2. Place materials in `public/materials/` using the BibTeX key as filename prefix. The pipeline auto-discovers these files:
   - `KEY.pdf`, `KEY.slides.pdf`, `KEY.slides.pptx`, `KEY.slides.key`, `KEY.slides.odp`, `KEY.poster.pdf`
3. For external resources, add fields to the BibTeX entry: `code`, `data`, `tool`, `results`, `website`, `video`
4. Add a `project` field with comma-separated tags to appear on the research page. Current tags: `heuristic-repair`, `static-repair`, `llm-repair`, `robots`, `security`, `ai`, `transform-testing`, `benchmarks`, `sbse`, `develop`
5. Use `{Le Goues}` or `{Le~Goues}` in BibTeX author fields to preserve multi-word surnames
6. Verify with `npx tsx scripts/test-bib.ts` to check parsing

## Adding Team Members

Create `src/content/team/firstname-lastname.md`:

```yaml
---
name: Full Name
website: https://...              # optional
photo: /img/team/filename.jpg     # optional, falls back to initials
role: phd                         # faculty | postdoc | phd | masters | undergrad | visitor
status: current                   # current | alumni
researchArea: Topic Name          # optional
startYear: 2024
endYear: 2025                     # required for alumni
firstPosition: "Job Title, Org"   # optional, for alumni (first position after leaving)
sortOrder: 1                      # optional, for controlling display order
---
Optional markdown bio. Use for co-advisor notes (e.g., "Joint with Name.")
```

Photos go in `public/img/team/`. Square crops work best. Members without photos show initials with a red ring border.

The team page groups current members by role (faculty, postdoc, PhD, other) and alumni by role (postdoc, PhD, masters, undergrad, visitor) in a collapsible section.

## Editing Research Areas

Edit files in `src/content/projects/`. Each has:
- `tag` -- matches the `project` field in BibTeX entries for auto-filtering
- `shortDescription` -- one line, shown on the research card
- `tools` -- array of `{name, url?}` shown as pills in the expanded card
- `sortOrder` -- controls display order

The research page auto-populates publications per project from the BibTeX pipeline.

## Pages and Components

**Pages** (`src/pages/`):
- `index.astro` -- Homepage: hero, team preview, recent publications, research area cards, highlights (in that order)
- `publications.astro` -- All publications with Preact filter island
- `research.astro` -- Expandable research area cards with filtered publications
- `team.astro` -- Team members by role, photo carousel, collapsible alumni

**Components** (`src/components/`):
- `Nav.astro` -- Site navigation with logo, links, GitHub icon, mobile hamburger
- `Footer.astro` -- Site footer
- `BaseLayout.astro` (`src/layouts/`) -- HTML shell used by all pages
- `PublicationEntry.astro` -- Static publication entry (used on homepage/research page)
- `PublicationFilter.tsx` -- Interactive Preact island (used on publications page only)
- `ResearchCard.astro` -- Expandable research area card
- `TeamMember.astro` -- Team member card with avatar/photo support

**Data files** (`src/data/`):
- `highlights.yaml` -- Manual highlights (awards, talks, news)
- `photos.yaml` -- Lab group photos for the team page carousel

## Design System

Colors defined in `tailwind.config.mjs`:
- Nav/footer background: `slate-nav` (#2C3E50)
- Primary accent: `red-cmu` (#C0392B) -- used in borders, dividers, avatar rings, links, CTAs
- Hero backgrounds: gradient from `gray-hero` (#F5F6FA) to `gray-hero-end` (#DCDDE1)
- Body text: `slate-nav` (#2C3E50)
- Secondary text: `gray-secondary` (#636E72)
- Subtle borders: `gray-subtle` (#DCDDE1)

System font stack, no external font dependencies. Max content width: `max-w-content` (900px).

Logo files are in `public/img/SquaresLogo*`. The small version appears in the nav bar, the larger version in the homepage hero, and the 16/32px versions serve as favicons.

## Useful Scripts

- `npx tsx scripts/test-bib.ts` -- verify BibTeX parsing, show count, first entry, years, topics
- `npx tsx scripts/analyze-tags.ts` -- show tag distribution, untagged papers, and papers per tag

## Cross-referencing with CV

Claire's CV is symlinked at `cv/` (gitignored). The CV has its own `legoues.bib` and `legoues-cv.tex`. When adding new publications, add entries to both `_bibliography/publications.bib` (lab website) and `cv/legoues.bib` (CV). The CV bib uses different keys and does not use `project` tags. The CV tex file manually lists entries by key in `\nocite{}` within `\begin{refsection}` blocks, organized by type (Journal, Conference, Short, Workshop, Non-Refereed, Tutorials).

Papers by lab members where Claire is not a co-author belong on the lab website but not the CV.

## Notes

- Multi-word surnames in BibTeX need braces: `{Le Goues}` or `{Le~Goues}`
- The `firstPosition` field on alumni records their first position after leaving, not necessarily their current one
- Paulo Canelas is listed as `visitor` with `current` status (honorary member, Chris Timperley's student)
- Missing PDFs are documented in `docs/missing-pdfs.md`
- The `docs/` and `cv/` directories are gitignored and not deployed
- DBLP query for cross-referencing: `https://dblp.org/search/publ?q=author%3Aclaire_le_goues&format=json&h=1000`
