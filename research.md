---
title: Research
layout: default
permalink: /research/
---

# Research

Here we list our research efforts by subject, linked to the section in the
publication page that further links to the materials associated with each
project. If you can't find something or think we've forgotten anything, please
contact us directly or file an issue with this page at
[https://github.com/squaresLab/squaresLab.github.io](https://github.com/squaresLab/squaresLab.github.io).

---

## Program Repair
The error repair process in software systems is, historically,
a resource-consuming task that relies heavily on manual developer effort.
Automatic program repair approaches enable the repair of software with 
minimum human interaction mitigating the burden on developers.
We have created and analyzed existing automatic program repair approaches
to improve their performance and quality of created patches.
This includes sub-areas such as:

#### GenProg
GenProg combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [GenProg website](https://squareslab.github.io/genprog-code)
covers most GenProg-related research, with links to the various GitHub
repositories, results, and reproduction instructions.

#### SearchRepair
SearchRepair extends and uses semantic code search over large repositories of
candidate code bases to produce high-quality bug patches.

#### RepairBox
[RepairBox](https://github.com/squaresLab/RepairBox) is an ongoing effort to
provide a series of controlled environments for performing experiments on buggy
C programs, particularly for program repair; it supports a number of bug
scenarios from existing datasets, including ManyBugs.  We are especially working
to transition as many of the ManyBugs scenarios as possible to be reproducible
in modern environments (no
more relying on Fedora 13!), primarily through the use of Docker.

#### Improving Patch Quality
A problem 
automatic program repair approaches commonly suffer is
generating low-quality patches which overfit
to one program specification as described by the guiding
test suite, thus
not generalizing to an independent oracle evaluation.
Our work proposes a set of mechanisms to
incentivize the creation
of high-quality patches.

**Program Repair Related Publications:**
{% bibliography --query @*[project~=repair] %}

#### ManyBugs and IntroClass
ManyBugs and IntroClass are benchmarks intended to support evaluations of
program repair research. More info at the [repairbenchmarks
site](http://repairbenchmarks.cs.umass.edu/).

**Related Publications:**
- [The ManyBugs and IntroClass Benchmarks for Automated Repair of C Programs](/publications/#LeGouesManyBugs2015)

## Robotics Software QA/Bug Testing
Robotics and autonomous systems are becoming increasingly prevalent. These systems present new quality assurance challenges. 

**Related Publications**
{% bibliography --query @*[project~=robots] %}

## Understanding Develop[ment/er] Practices
Software developers work on difficult problems in complex software situations.
Tools that reduce the complexity of software development can improve both 
the quality of the developed software and reduce the time required to 
create the software.  To produce tools that are useful to developers, it is
important to understand current software development practices. Our group 
studies developers and produced software to understand both the current
state of software quality and which factors affect software quality. We then 
produce tools to advance the current state of software quality.

**Related Publications:**
{% bibliography --query @*[project~=develop] %}

## AI / Search-based Software Engineering
We are broadly interested in applying AI methods, including search-based
approaches, to improve the engineering of software. In particular, we
investigate applying these approaches to self-adaptive systems to enable complex
software systems to autonomously respond to changes in their environments more
effectively, although this category also includes smaller projects employing
these approaches that don't fit neatly into other projects.

**Related Publications:**
{% bibliography --query @*[project~=ai-sbe] %}
