# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Astro-based website for the squaresLab research group (Software QUality in Real and Evolving Systems) at Carnegie Mellon University.

## Build and Serve

```bash
npm install       # install dependencies
npm run dev       # serve locally at localhost:4321
npm run build     # build to dist/
```

## Deployment

Push to the `update` branch. GitHub Actions builds and deploys to GitHub Pages automatically. Never push directly to `master`.

## Architecture

- **Framework:** Astro 4+ with TypeScript, Tailwind CSS, Preact (for interactive islands)
- **BibTeX pipeline:** `src/lib/publications.ts` parses `_bibliography/publications.bib` at build time using @retorquere/bibtex-parser. Extracts custom fields (project, code, data, tool, video, etc.) and scans `public/materials/` for PDFs/slides by key naming convention.
- **Content Collections:** `src/content/team/` (one .md per person) and `src/content/projects/` (one .md per research area), both with Zod schema validation in `src/content.config.ts`.
- **Interactive filtering:** `src/components/PublicationFilter.tsx` is a Preact island on the publications page providing search, topic, and year filtering with URL query parameters.

## Adding Publications

1. Add BibTeX entry to `_bibliography/publications.bib`
2. Place materials in `public/materials/` using BibTeX key as filename prefix:
   - `KEY.pdf`, `KEY.slides.pdf`, `KEY.slides.pptx`, `KEY.slides.key`, `KEY.slides.odp`, `KEY.poster.pdf`
3. For external resources, add fields to the BibTeX entry: `code`, `data`, `tool`, `results`, `website`, `video`
4. Add a `project` field with comma-separated tags to include on the research page (e.g., `project = {robots,develop}`)

## Key Files

- `src/lib/publications.ts` -- BibTeX parsing pipeline
- `src/lib/types.ts` -- Publication type definitions
- `src/content.config.ts` -- Zod schemas for team and projects
- `src/components/PublicationFilter.tsx` -- Interactive publication filter (Preact island)
- `src/components/PublicationEntry.astro` -- Static publication entry component
- `src/data/highlights.yaml` -- Manual highlights (awards, talks, etc.)
- `tailwind.config.mjs` -- Design tokens (colors, fonts, spacing)

## Design System

Colors defined in `tailwind.config.mjs`:
- Nav/footer: `slate-nav` (#2C3E50)
- Accent: `red-cmu` (#C0392B)
- Hero backgrounds: `gray-hero` (#F5F6FA) to `gray-hero-end` (#DCDDE1)
- Text: `gray-secondary` (#636E72)

System font stack, no external font dependencies.
