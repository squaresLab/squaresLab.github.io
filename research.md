---
title: Research
layout: default
permalink: /research/
---

# Research

Here we loosely organize our research efforts by subject. If you can't find
something or think we've forgotten anything, make sure you also consult the
publications list, and consider contacting us directly or filing an issue with
this page at
[https://github.com/squaresLab/squaresLab.github.io](https://github.com/squaresLab/squaresLab.github.io).

---

## Program Transformation and Repair

The error repair process in software systems is, historically, a
resource-consuming task that relies heavily on manual developer effort.  We have
created and analyzed existing automatic program repair approaches to improve
their performance and quality of created patches; this work has produced
frameworks and toolsets for automatic program transformation and repair, as well
as datasets for its evaluation. You might be looking for:

#### Heuristic transformation and repair

* [Comby](https://comby.dev/): a lightweight, declarative way to change code
      across many languages. ([Watch the StrangeLoop
      talk!](https://www.youtube.com/watch?v=JMZLBB_BFNg))
* [Darjeeling](https://github.com/squaresLab/Darjeeling): a
        framework for language-agnostic search-based/heuristic program repair.
        If you want something GenProg-like but significantly more modern, this
        is your cup of tea.
* [Semantic Crash
      Bucketing](https://github.com/squaresLab/SemanticCrashBucketing): fuzz
      test triage via program transformaiton.  
* [GenProg4Java](https://github.com/squaresLab/genprog4java): 
      a framework for heuristic program repair for Java programs; a generally
      faithful reproduction of the original GenProg4C technique (below).
* [GenProg](https://squareslab.github.io/genprog-code): 
	    stochastic search methods like genetic programming, combined with
	    lightweight program analyses, to find patches for bugs in extant
	    software.  The GenProg website covers most GenProg-related
	    research and prior results. If you want to run _new_ experiments,
	    you may want to _start_ with Darjeeling and/or BugZoo.

#### Static and semantic repair

* [FootPatch](https://github.com/squaresLab/footpatch): static
    repair of heap-based violations, extending Facebook's Infer toolset.
* [S3 and JFix](https://xuanbachle.github.io/semanticsrepair/): semantics-based
    repair for Java programs

### Datasets and experimental frameworks

* [BugZoo](https://github.com/squaresLab/BugZoo): an active
	    effort to support controlled experiments on buggy C programs,
	    particularly for program repair; it supports the reproduction, in a
	    modern environment, of a number of scenarios from existing datasets,
	    including <a href="https://repairbenchmarks.cs.umass.edu">ManyBugs</a>.
* [ManyBugs and IntroClass](http://repairbenchmarks.cs.umass.edu/): 
  benchmarks and results intended to support evaluations of
	    program repair research. We recommend BugZoo for new ManyBugs
  experiments

**Program Repair Related Publications:**
{% bibliography --query @*[project~=repair] %}

## Robotics Software QA/Bug Testing
Robotics and autonomous systems are becoming increasingly prevalent. These
systems present new quality assurance challenges, which we both study and attempt to
address via new testing and analysis techniques.

**Related Publications**
{% bibliography --query @*[project~=robots] %}

## Understanding Develop[ment/er] Practices

Software developers work on difficult problems in complex software situations.
Tools that reduce the complexity of software development can improve both 
the quality of the developed software and reduce the time required to 
create the software.  To produce tools that are useful to developers, it is
important to understand current software development practices. We
study developers and the software they produce to understand both the current
state of software quality and which factors affect software quality.

**Related Publications:**
{% bibliography --query @*[project~=develop] %}

## AI / Search-based Software Engineering

We are broadly interested in applying AI methods, including search-based
approaches, to improve software engineering. In particular, we
investigate applying these approaches to self-adaptive systems to enable complex
software systems to autonomously respond to changes in their environments more
effectively; this category also includes smaller projects employing
these approaches that don't fit neatly elsewhere.

**Related Publications:**
{% bibliography --query @*[project~=ai-sbe] %}
