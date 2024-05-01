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

We try to be reasonably thorough, but note that this page does not attempt list every paper squaresLab has ever published; see [publications](/publications) for a complete list.

## Program Transformation and Repair

The error repair process in software systems is, historically, a
resource-consuming task that relies heavily on manual developer effort.  We have
created and analyzed automatic program repair approaches to improve
their performance and quality of created patches.  We also develop approaches to
automate other types of transformation, including API updates and migration. This work has produced
frameworks and toolsets for automatic program transformation and repair, as well
as datasets for its evaluation. You might be looking for:

{% capture transform_text %} 

We have developed a number of frameworks and toolsets for automatic program transformation
and repair. 

* [PolyglotPiranha](https://github.com/uber/piranha): an expressive and polyglot code transformation toolset designed for automating large-scale refactorings
* [Comby](https://comby.dev/): a lightweight, declarative way to change code
      across many languages. ([Watch the StrangeLoop
      talk!](https://www.youtube.com/watch?v=JMZLBB_BFNg))
* [Darjeeling](https://github.com/squaresLab/Darjeeling): a
        framework for language-agnostic search-based/heuristic program repair.
        If you want something GenProg-like but significantly more modern, this
        is your cup of tea.
* [GenProg4Java](https://github.com/squaresLab/genprog4java): 
      a framework for heuristic program repair for Java programs; a generally
      faithful reproduction of the original GenProg4C technique (below).
* [GenProg](https://squareslab.github.io/genprog-code): 
	    stochastic search methods like genetic programming, combined with
	    lightweight program analyses, to find patches for bugs in extant
	    software.  The GenProg website covers most GenProg-related
	    research and prior results. If you want to run _new_ experiments,
	    you'll want to _start_ with Darjeeling and/or BugZoo.  This stuff is old.
{% endcapture %}

{% capture semantic_text %}
* [FootPatch](https://github.com/squaresLab/footpatch): static
    repair of heap-based violations, extending Facebook's Infer toolset.
* [S3 and JFix](https://xuanbachle.github.io/semanticsrepair/): semantics-based
    repair for Java programs.
* [Static repair of framework directive violations](/publications/#coker21framefix)
*  [SOSrepair](/publications/AfzalSOSRepair19) (and its predecessor, [SearchRepair](/publications/#KeSearchRepair2015)) SearchRepair and SOSRepair extend and use semantic code search over large repositories of candidate code bases to produce high-quality bug patches.
* [Crayons](/publications/#cruz22crayons), statically repairing locking API violations in the Linux kernel.

**Related Publications:**

{% bibliography --query @*[project~=static-repair] %}

{% endcapture %}


{% capture eval_text %}
We have developed frameworks and datasets for evaluating program repair, and conducted empirical evaluations of repair along a number of axes. Datasets include:

* [PreciseBugCollector](https://github.com/SophieHYe/PreciseBugs): second place at ASE Challenge 2023! An extremely large dataset of security vulnerabilities, with associated metadata. 
* [ArduBugs](https://github.com/squaresLab/ArduBugs): a dataset of robostics-specific bugs in the Ardu* ecosystem. 
* [BugZoo](https://github.com/squaresLab/BugZoo): an active
	    effort to support controlled experiments on buggy C programs,
	    particularly for program repair; it supports the reproduction, in a
	    modern environment, of a number of scenarios from existing datasets,
	    including [ManyBugs](https://repairbenchmarks.cs.umass.edu).
* [ManyBugs and IntroClass](http://repairbenchmarks.cs.umass.edu/): 
  benchmarks and results intended to support evaluations of
	    program repair research. We recommend BugZoo for new ManyBugs
  experiments.

**Related Publications:**
{% bibliography --query @*[project~=benchmarks] %}

{% endcapture %}

{% capture genprog_text %}
GenProg combines stochastic search methods like genetic programming with
lightweight program analyses to find patches for real bugs in extant
software. The [GenProg website](https://squareslab.github.io/genprog-code)
covers most GenProg-related research, with links to the various GitHub
repositories, results, and reproduction instructions, as well as a historical
list of largely GenProg-specific papers (through about 2016).

Papers specific to GP-based repair are listed under search-based softwre engineering, below

{% endcapture %}

{% capture other_transformation %}

Transformation has many uses in software engineering developer tooling, and many problems are amenable to a repair-like approach.  We have explored transformation for  [API migration (SOAR)](/publications/#SOAR21) and [API upgrades (MELT)](/publications/#RamosMLMMG23), and for [transpilation (BatFix)](/publications/#batfix). We have also [improved static analysis via program transformation](/publications/#icse2020transform) and used it to [triage fuzz tests](https://github.com/squaresLab/SemanticCrashBucketing).  Beyond triage, we have an ongoing body of work for general-purpose transformation in the context of fuzz and mutation testing:

{% bibliography --query @*[project~=transform-testing] %}

{% endcapture %}

{% capture all_repair %}
For completeness, the following publications are those that either (a) overview repair generally (CACM articles and the like) or (b) (the majority) propose new or substantially augmented program repair techniques.  (This omits specific studies of SBSE operators like crossover; see the SBSE section). 

{% bibliography --query @*[project~=new-repair] %}

{% endcapture %}


<div id="accordion">
  
  <div class="card">
    <div class="card-header" id="headingTransform">
      <h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapseTransform" aria-expanded="true" aria-controls="collapseTransform">
          Heuristic transformation and repair generally
        </button></h5>
    </div> <!-- transform header  -->
   <div id="collapseTransform" class="collapse" aria-labelledby="headingTransform" data-parent="#accordion">
      <div class="card-body">{{ transform_text | markdownify }}</div>
    </div> <!-- collapse transform -->
  </div>

  <div class="card">
    <div class="card-header" id="headingSemantic">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse"
    data-target="#collapseSemantic" aria-expanded="true" aria-controls="collapseSemantic">
        Static and semantic repair
        </button></h5>
    </div><!-- semantic header -->
   <div id="collapseSemantic" class="collapse" aria-labelledby="headingSemantic" data-parent="#accordion">
      <div class="card-body">{{ semantic_text | markdownify }}</div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingEval">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse"
    data-target="#collapseEval" aria-expanded="true" aria-controls="collapseEval">
        Datasets, experimental frameworks, and evaluations
        </button>
      </h5>
    </div>
   <div id="collapseEval" class="collapse" aria-labelledby="headingEval" data-parent="#accordion">
      <div class="card-body">
      {{ eval_text | markdownify }}
      </div> 
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingOtherTransform">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse"
    data-target="#collapseOtherTransform" aria-expanded="true" aria-controls="collapseOtherTransform">
      Transformation beyond repair
        </button>
      </h5>
    </div>
   <div id="collapseOtherTransform" class="collapse" aria-labelledby="headingOtherTransform" data-parent="#accordion">
      <div class="card-body">
        {{ other_transformation | markdownify }}
      </div> 
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingGenProg">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse"
    data-target="#collapseGenProg" aria-expanded="true" aria-controls="collapseGenProg">
      GenProg
        </button>
      </h5>
    </div>
   <div id="collapseGenProg" class="collapse" aria-labelledby="headingGenProg" data-parent="#accordion">
      <div class="card-body">{{ genprog_text | markdownify }} </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header" id="headingRepair">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse"
    data-target="#collapseRepair" aria-expanded="true" aria-controls="collapseRepair">
          All new repair techniques
        </button>
      </h5>
    </div>
   <div id="collapseRepair" class="collapse" aria-labelledby="headingRepair" data-parent="#accordion">
      <div class="card-body">{{ all_repair | markdownify }}</div>
   </div>
</div>
</div>


## Search-based software engineering

{% capture sbse_papers %}

{% bibliography --query @*[project~=sbse] %}

{% endcapture %}


Our interest in applying AI to software engineering started with search-based techniques.  Much of our work in this space has been repair-specific, though we have also looked at the application of GP and related search-based approaches for self-adaptive systems and knowledge reuse at the model level. Relevant publications (for both code and models/plans, excluding those that are proposing new APR approaches) include:


<div id="sbseAccordian">

  <div class="card">
    <div class="card-header" id="headingSBSE">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseSBSE" aria-expanded="true" aria-controls="collapseSBSE">
          Search-based Software Engineering publications
        </button>
      </h5>
    </div>
    <div id="collapseSBSE" class="collapse" aria-labelledby="headingSBSE" data-parent="#sbseAccordian">
      <div class="card-body">{{ sbse_papers | markdownify }}</div>
    </div>
  </div>

</div>

## SE for Robotics 


{% capture robot_papers %}

{% bibliography --query @*[project~=robots] %}

{% endcapture %}

<!-- fixme: add robot workshop report -->
Robotics and autonomous systems are becoming increasingly prevalent. These
systems present new quality assurance challenges, which we both study and attempt to
address via new testing and analysis techniques.

<div id="robotAccordian">

  <div class="card">
    <div class="card-header" id="headingRobot">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseRobot" aria-expanded="true" aria-controls="collapseRobot">
          SE for robotics publications
        </button>
      </h5>
    </div>
    <div id="collapseRobot" class="collapse" aria-labelledby="headingRobot" data-parent="#robotAccordian">
      <div class="card-body">{{ robot_papers | markdownify }}</div>
    </div>
  </div>

</div>


## Tools for Humans
**Related Publications:**
- [A Study on the Use of IDE Features for Debugging](/publications/#AfzalMSRChallenge2018)
- [A Deeper Look into Bug Fixes: Patterns, Replacements, Deletions, and Additions](/publications/#SotoMSRChallenge2016)


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
