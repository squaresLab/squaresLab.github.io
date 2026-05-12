# squaresLab.github.io

Website for the squaresLab research group at Carnegie Mellon University.

## Quick start

```bash
npm install         # first time only
npm run dev         # start dev server at localhost:4321
npm run build       # build to dist/ (to check for errors before pushing)
```

Push to the `update` branch. GitHub Actions builds and deploys automatically. Do not push to `master`.

## Adding a publication

1. Add a BibTeX entry to `_bibliography/publications.bib` (add new entries at the top of the file, after the `References` header).

2. Drop materials in `public/materials/` using your BibTeX key as the filename. The site auto-discovers these by naming convention:
   - `KEY.pdf` -- paper PDF
   - `KEY.slides.pdf` -- slides (PDF)
   - `KEY.slides.pptx` -- slides (PowerPoint)
   - `KEY.slides.key` -- slides (Keynote)
   - `KEY.slides.odp` -- slides (OpenOffice)
   - `KEY.poster.pdf` -- poster

3. For links to external resources, add fields to the BibTeX entry:
   - `code = {https://github.com/...}` -- link to code
   - `data = {https://...}` -- link to data
   - `tool = {https://...}` -- link to a tool
   - `results = {https://...}` -- link to results
   - `website = {https://...}` -- link to a project website
   - `video = {https://youtu.be/...}` -- link to a talk video

4. Add a `project` field so your paper appears on the research page. Use comma-separated tags:
   ```bibtex
   project = {llm-repair,ai}
   ```
   Available tags: `heuristic-repair`, `static-repair`, `llm-repair`, `robots`, `security`, `ai`, `transform-testing`, `benchmarks`, `sbse`, `develop`

5. For multi-word last names, use braces: `Claire {Le Goues}` or `Claire {Le~Goues}`.

6. Push to `update`.

### Example BibTeX entry

```bibtex
@inproceedings{yourkey2025,
  author = {Your Name and Claire {Le Goues} and Co Author},
  title = {Your Paper Title},
  booktitle = {Proceedings of the Conference (CONF)},
  year = {2025},
  pages = {1--12},
  doi = {10.1234/example},
  project = {ai,llm-repair},
  code = {https://github.com/squaresLab/your-tool}
}
```

## Updating your team member info

Edit your file in `src/content/team/firstname-lastname.md`. The frontmatter fields:

```yaml
---
name: Your Name
website: https://your-site.com       # optional
photo: /img/team/your-name.jpg       # optional (see below)
role: phd                            # faculty | postdoc | phd | masters | undergrad | visitor
status: current                      # current | alumni
researchArea: Your Area              # optional
startYear: 2024
---
Optional bio. Use for co-advisor notes (e.g., "Joint with Advisor Name.")
```

### Adding your photo

1. Drop a headshot in `public/img/team/` (any common format: jpg, png, etc.). Square crops work best.
2. Add `photo: /img/team/your-filename.jpg` to your frontmatter.

If you don't add a photo, your initials will be shown instead.

## Adding a new team member

Create `src/content/team/firstname-lastname.md` following the format above.

## Adding a highlight

To add a lab highlight (award, talk, grant, new member, etc.) to the homepage, add an entry to `src/data/highlights.yaml`:

```yaml
- date: 2025-06-15
  type: award          # award | talk | news | grant | person
  title: "Best Paper Award at ICSE 2025"
  description: "Optional one-line detail"
  link: "https://..."  # optional
```

Recent publications are auto-added to the highlights feed. You only need to manually add non-publication highlights.

## Adding lab group photos

1. Drop the photo in `public/img/`
2. Add an entry to `src/data/photos.yaml`:
   ```yaml
   - src: /img/your-photo.jpg
     alt: Description of the photo
   ```

Photos appear in the carousel on the team page.

## Editing research areas

Edit files in `src/content/projects/`. Each has a `tag` field that matches the `project` field in BibTeX entries. Publications are auto-populated from the BibTeX file based on tag matching.
