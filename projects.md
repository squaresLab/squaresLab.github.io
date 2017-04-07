---
title: Projects and code
layout: default
---

# Projects, Code

Here we list our research efforts by subject, linking to code and data
associated with projects and papers (which you can also see on our [publication
list](pubs.html).  If you can't find something or think we've forgotten
anything, please contact us directly or file an issue with this page.

### Program Repair 

**SearchRepair** Extends and uses semantic code search over large repositories of candidate code
bases to produce high-quality bug patches.

*  Paper: 
> Yalin Ke, Kathryn T. Stolee, Claire Le Goues, and Yuriy Brun. Repairing
> Programs with Semantic Code Search. In Automated Software Engineering (ASE),
> 2015, pp. 532-543.  Slides: [[.pdf]] [doi | bibtex | github]

- Code:
  - Current:
  - Prototype (associated with the ASE'15 paper):

**GenProg** combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [main website](http://genprog.cs.virginia.edu) covers most
GenProg-related research, with the exception of:
*   GenProg4Java, a framework for heuristic, generate-and-validate repair on
Java programs, with especial support for integration with the Defects4J
dataset.  Implements a Java-oriented version of GenProg, with support for several
other search heuristics and mutation sets.  

### (Other) Search-Based Software Engineering efforts


### Benchmarks and tools for empirical evaluations

Many of our projects involve running analyses or tools on real code, often
containing bugs.  We therefore have several datasets, benchmarks, and pieces of
infrastructure to support reproducible experiments, including:

**RepairBox** is an ongoing effort to provide a series of controlled
environments for performing experiments on buggy C programs, particularly for
program repair; it supports a number of bug scenarios from existing datasets,
including ManyBugs.  We are especially working to transition as many of the
ManyBugs scenarios as possible to be reproducible in modern environments (no
more relying on Fedora 13!), primarily through the use of Docker.  

**ManyBugs and IntroClass** are benchmarks intended to support evaluations of
program repair research. 


A recent use of the latter established (interesting!)
limits and challenges in existing state-of-the-art automated patch generation
(see paper and project site).



