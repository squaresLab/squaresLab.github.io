# squaresLab.github.io

Website for the squaresLab research group at Carnegie Mellon University.

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:4321
npm run build   # Build to dist/
```

## Adding a publication

1. Add a BibTeX entry to `_bibliography/publications.bib`
2. Drop materials in `public/materials/` named `KEY.pdf`, `KEY.slides.pdf`, etc.
3. Push to the `update` branch. GitHub Actions deploys automatically.

## Adding a team member

Create a file in `src/content/team/firstname-lastname.md`:

```yaml
---
name: Your Name
website: https://your-site.com
role: phd
status: current
researchArea: Your Area
startYear: 2024
---
Optional bio here.
```

## Editing research areas

Edit files in `src/content/projects/`. Each has a `tag` field that matches the `project` field in BibTeX entries.

## Deployment

Push to `update`. GitHub Actions builds and deploys to GitHub Pages automatically.
