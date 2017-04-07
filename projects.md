---
title: Projects and code
layout: default
---

# Projects, Code

Here we list our research efforts by subject, linking to code and data
associated with various projects/papers.  As of April 2017, we still consolidating to this site;
you may also have luck on [Claire's research page](http://clairelegoues.com/research) or by contacting us. If you can't find something or think
we've forgotten anything, please contact us directly or file an issue with this
page.

### Program Repair 

**SearchRepair** Extends and uses semantic code search over large repositories of candidate code
bases to produce high-quality bug patches.

*  Paper: 
> Yalin Ke, Kathryn T. Stolee, Claire Le Goues, and Yuriy Brun. [Repairing
> Programs with Semantic Code Search](http://www.cs.cmu.edu/~clegoues/docs/searchRepair-ase15.pdf). In
> Automated Software Engineering (ASE),  2015, pp. 532-543.  Slides: [[[.pdf](http://www.cs.cmu.edu/~clegoues/docs/slides/ase15-clg-presentation-forpdf.pdf)]] [[doi](http://dx.doi.org/10.1109/ASE.2015.60) | [bibtex](http://www.cs.cmu.edu/~clegoues/docs/bib/ke15ase.bib)]

- Code: _Contact us if you'd like to extend SearchRepair; we can point you to our better prototype._
  - Prototype from the ASE'15 paper: [https://github.com/ProgramRepair/SearchRepair](https://github.com/ProgramRepair/SearchRepair)

**GenProg** combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [main website](http://genprog.cs.virginia.edu) covers most
GenProg-related research; a transition to GitHub is in the works as of April, 2017.

{% comment %}
, with the exception of:
*   GenProg4Java, a framework for heuristic, generate-and-validate repair on
Java programs, with especial support for integration with the Defects4J
dataset.  Implements a Java-oriented version of GenProg, with support for several
other search heuristics and mutation sets.  
{% endcomment %}

### Benchmarks and tools for empirical evaluations

Many of our projects involve running analyses or tools on real code, often
containing bugs.  We therefore have several datasets, benchmarks, and pieces of
infrastructure to support reproducible experiments, including:

**RepairBox.** [RepairBox](https://github.com/squaresLab/RepairBox) is an ongoing effort to provide a series of controlled
environments for performing experiments on buggy C programs, particularly for
program repair; it supports a number of bug scenarios from existing datasets,
including ManyBugs.  We are especially working to transition as many of the
ManyBugs scenarios as possible to be reproducible in modern environments (no
more relying on Fedora 13!), primarily through the use of Docker.  

**ManyBugs and IntroClass** are benchmarks intended to support evaluations of
program repair research. More info at the [repairbenchmarks site](http://repairbenchmarks.cs.umass.edu/).



