---
title: Projects
layout: default
permalink: /projects/
---

# Projects, Code

Here we list our research efforts by subject, linking to code and data
associated with various projects/papers.  We are consolidating to this site
incrementally; you may also have luck on [Claire's research
page](http://clairelegoues.com/research) or by contacting us. If you can't find
something or think we've forgotten anything, please contact us directly or file
an issue with this page.

---

## Program Repair

#### SearchRepair
SearchRepair extends and uses semantic code search over large repositories of
candidate code bases to produce high-quality bug patches.

**Publications:**
- {% reference KeSearchRepair2015 %}

#### GenProg
GenProg combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [GenProg website](https://squareslab.github.io/genprog-code)
covers most GenProg-related research, with links to the various GitHub
repositories, results, and reproduction instructions.

**Related squaresLab Publications:**
- {% reference OliveiraCrossover2016 %}
- {% reference LeGouesManyBugs2015 %}
- {% reference SmithOverfitting2015 %}

---

## Benchmarks and tools for empirical evaluations

Many of our projects involve running analyses or tools on real code, often
containing bugs.  We therefore have several datasets, benchmarks, and pieces of
infrastructure to support reproducible experiments, including:

#### RepairBox
[RepairBox](https://github.com/squaresLab/RepairBox) is an ongoing effort to
provide a series of controlled environments for performing experiments on buggy
C programs, particularly for program repair; it supports a number of bug
scenarios from existing datasets, including ManyBugs.  We are especially working
to transition as many of the ManyBugs scenarios as possible to be reproducible
in modern environments (no
more relying on Fedora 13!), primarily through the use of Docker.

#### ManyBugs and IntroClass
ManyBugs and IntroClass are benchmarks intended to support evaluations of
program repair research. More info at the [repairbenchmarks
site](http://repairbenchmarks.cs.umass.edu/).

**Publications:**
- {% reference LeGouesManyBugs2015 %}

---

## Repository Mining

The projects in this category deal with mining the history of a large number of
popular repositories to increase the quality of different attributes desired by
developers, such as [understanding of bug
repairs](https://github.com/squaresLab/MSRChallenge2016) or [maximizing code
contribution quality](https://github.com/squaresLab/MSR-challenge-2017).

**Publications:**
- {% reference SotoMSRChallenge2018 %}
- {% reference AfzalMSRChallenge2018 %}
- {% reference SotoMSRChallenge2017 %}
- {% reference KerryExceptions2016 %}
- {% reference SotoMSRChallenge2016 %}
