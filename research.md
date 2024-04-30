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

## Program Transformation and Repair

The error repair process in software systems is, historically, a
resource-consuming task that relies heavily on manual developer effort.  We have
created and analyzed existing automatic program repair approaches to improve
their performance and quality of created patches; this work has produced
frameworks and toolsets for automatic program transformation and repair, as well
as datasets for its evaluation. You might be looking for:

#### Heuristic transformation and repair

* [PolyglotPiranha](https://github.com/uber/piranha): an expressive and polyglot code transformation toolset designed for automating large-scale refactorings
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
* SearchRepair and SOS repair: SearchRepair extends and uses semantic code search over large repositories of
candidate code bases to produce high-quality bug patches.

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


#### Datasets and experimental frameworks

* [BugZoo](https://github.com/squaresLab/BugZoo): an active
	    effort to support controlled experiments on buggy C programs,
	    particularly for program repair; it supports the reproduction, in a
	    modern environment, of a number of scenarios from existing datasets,
	    including <a href="https://repairbenchmarks.cs.umass.edu">ManyBugs</a>.
* [ManyBugs and IntroClass](http://repairbenchmarks.cs.umass.edu/): 
  benchmarks and results intended to support evaluations of
	    program repair research. We recommend BugZoo for new ManyBugs
  experiments

**Related Publications:**

{% bibliography --query @*[project~=benchmarks] %}


## Tools for Humans
**Related Publications:**
- [A Study on the Use of IDE Features for Debugging](/publications/#AfzalMSRChallenge2018)
- [A Deeper Look into Bug Fixes: Patterns, Replacements, Deletions, and Additions](/publications/#SotoMSRChallenge2016)

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

#### Selected Developer Studies

* [Framework Debugging](https://squareslab.github.io/materials/CokerQualitative2019.pdf): an investigation into the challenges of debugging framework application problems. One important finding was that in framework debugging, developers have a difficult time determining the correct way to implement a fix.
* [Social Attributes on Commit Integration](https://squareslab.github.io/materials/AfzalMSRChallenge2018.pdf): a quick investigation on how the GitHub social attributes of developers can be used to predict if a commit will be accepted or not.
*  [Prioritizing Exceptions with Behavior Metrics](https://squareslab.github.io/materials/CokerBehavior2017.pdf): a study performed in collaboration with [ABB Inc.](https://new.abb.com) that recommended which exception to fix based on the next actions that users took with the tool after an exception occurred.
* [Java Sandbox](https://squareslab.github.io/materials/CokerEvaluating2015.pdf): an investigation into the security implications of how the Java sandbox is used in open source projects.
  
**Related Publications:**
{% bibliography --query @*[project~=develop] %}

## AI / Search-based Software Engineering

We are broadly interested in applying AI methods, including search-based
approaches, to improve software engineering. In particular, we
investigate applying these approaches to self-adaptive systems to enable complex
software systems to autonomously respond to changes in their environments more
effectively; this category also includes smaller projects employing
these approaches that don't fit neatly elsewhere.

#### Selected AI/Search-based Studies

* [Plan Reuse for Self-Adaptive Systems](https://squareslab.github.io/materials/KinneerManaging2018.pdf): as systems become more complex, these systems will automatically adapt to changes in the environment. However, it will be impossible to encode all possible environment changes into the self-adaptive system. Thus, we wanted to know if self-adaptive systems can reuse previously created plans to help plan for a new change. The answer was yes in certain cases.
* [Stochastic search in self-adaptive systems](https://squareslab.github.io/materials/CokerSASS2015.pdf): a position paper that discusses possible future applications of stochastic search techniques to self-adaptive systems.
* [Decompiled Identifier Renaming
  Engine (DIRE)](https://squareslab.github.io/materials/LacomisDIRE2019.pdf):
  decompilers can reconstruct much of the information that is lost during
  compilation, but unfortunately meaningful variable names are discarded. DIRE
  uses neural networks trained on code written by developers to automatically
  generate meaningful identifier names.

**Related Publications:**
{% bibliography --query @*[project~=ai-sbe] %}
