---
title: research
layout: default
---

# Projects, Code

### Program Repair 

**SearchRepair** Extends and uses semantic code search over large repositories of candidate code
bases to produce high-quality bug patches.

*  Paper: 
> Yalin Ke, Kathryn T. Stolee, Claire Le Goues, and Yuriy Brun. Repairing
> Programs with Semantic Code Search. In Automated Software Engineering (ASE),
> 2015, pp. 532-543.Slides: [[.pdf]] [doi | bibtex | github]

- Code:
  - Current:
  - Prototype (associated with the ASE paper, above):

**GenProg** is a collaborative effort between squaresLab, Wes Weimer (at
UVA/UMichigan) and Stephanie Forest (UNM), combining stochastic search methods
like genetic programming with lightweight program analyses to find patches for
real bugs in extant software. The main website provides an overview; a
publication list; demo videos; and source code, benchmarks, workloads, and
experimental reproduction instructions for all GenProg-related research, with
the exception of:
*   GenProg4Java

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



