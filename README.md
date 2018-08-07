### Status
[![Build Status](https://travis-ci.org/squaresLab/squaresLab.github.io.svg?branch=update)](https://travis-ci.org/squaresLab/squaresLab.github.io)

## Adding your paper to the squaresLab site

Adding your paper is now easy! Just drop a BibTeX entry in
`_bibliography/publications.bib` on the `update` branch and Travis will take
care of the rest. If you have a PDF of the paper, slides, or a poster just drop
them in the `materials` directory, naming them `key.pdf`, `key.slides.pdf`, and
`key.poster.pdf` respectively. Jekyll-Scholar will automatically pick these up
and add the appropriate links. Note: The site is refreshed every few minutes, so
you may have to wait to see your changes.

Code, data, tools, and results should be served from a non-GitHub server. You
can add links to these by adding `code`, `data`, `tools`, or `results` fields to
the BibTeX entries.

**NOTE**: Updates should be pushed to `update` and not `master`. GitHub serves
the website from `master` and that branch is updated automatically.

## Inserting a reference on a page

It is also possible to insert a reference on a page using the `reference` Liquid
tag. For an example, see SearchRepair on the Projects page. The format of the
tag is `{% reference key %}`.
