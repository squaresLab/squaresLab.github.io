---
title: Research
layout: default
permalink: /research/
---

# Research

Here we list our research efforts by subject, linked to the section in the
publication page that further links to the materials (code, slides, etc.)
associated with each project. If you can't find something or think
we've forgotten anything, please contact us directly or file an issue with this
page at [https://github.com/squaresLab/squaresLab.github.io](https://github.com/squaresLab/squaresLab.github.io).

---

## Program Repair
#### SearchRepair
SearchRepair extends and uses semantic code search over large repositories of
candidate code bases to produce high-quality bug patches.

**Related Publications:**
- [The ManyBugs and IntroClass Benchmarks for Automated Repair of C Programs](/publications/#KeSearchRepair2015)

#### GenProg
GenProg combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [GenProg website](https://squareslab.github.io/genprog-code)
covers most GenProg-related research, with links to the various GitHub
repositories, results, and reproduction instructions.

**Related Publications:**
- [Improved Crossover Operators for Genetic Programming for Program Repair](/publications/#OliveiraCrossover2016)
- [The ManyBugs and IntroClass Benchmarks for Automated Repair of C Programs](/publications/#LeGouesManyBugs2015)
- [Is the Cure Worse than the Disease?  Overfitting in Automated Program Repair](/publications/#SmithOverfitting2015)
- [Using a Probabilistic Model to Predict Bug Fixes](/publications/#SotoProbabilistic2018)
- [Common Statement Kind Changes to Inform Automatic Program Repair](/publications/#SotoMSRChallenge2018)

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

**Related Publications:**
- [The ManyBugs and IntroClass Benchmarks for Automated Repair of C Programs](/publications/#LeGouesManyBugs2015)


## Tools for Humans
**Related Publications:**
- [A Study on the Use of IDE Features for Debugging](/publications/#AfzalMSRChallenge2018)
- [A Deeper Look into Bug Fixes: Patterns, Replacements, Deletions, and Additions](/publications/#SotoMSRChallenge2016)

## Robotics Software QA/Bug Testing
## AI/Search-Based Software Engineering
The environment in which software systems run are constantly changing.
The maintenance efforts on these systems would be significantly reduced if
software was able to automatically adapt to its environment.


**Related Publications:**
- [Managing Uncertainty in Self-Adaptive Systems with Plan Resue and Stochastic Search](/publications/#KinneerManaging2018)
- [SASS: Self-adaptation Using Stochastic Search](/publications/#CokerSASS2015)


## Understanding Development Practices

#### Java Sandbox

We have investigated the challenges of using the Java Sandbox in an
application. This work motivates possible improvements to the Java Sandbox and
discusses the architectural constraint the Java Sandbox is used to enforce in
practice.

**Related Publications:**
- [Evaluating the Flexibility of the Java Sandbox](/publications/#CokerEvaluating2015)


**Related Publications:**
- [Analyzing the Impact of Social Attributes on Commit Integration Success](/publications/#SotoMSRChallenge2017)
- [Examining Programmer Practices for Locally Handling Exceptions](/publications/#KerryExceptions2016)
