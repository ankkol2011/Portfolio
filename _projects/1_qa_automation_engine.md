---
layout: page
title: "QA Automation Engine"
description: "ML pipeline to automate and prioritize test cases for failure detection, saving 4 hours per week in manual QA effort."
importance: 1
category: GenAI, ML
proprietary: true
---

## The Problem

Manual QA workflows were spending time on test cases without enough prioritization around likely failures. The team needed a way to surface higher-risk test cases earlier and reduce repetitive manual testing effort.

## Key Decisions

**Graph-based access with Neo4j.** I used Neo4j to model relationships in the testing workflow so relevant test cases could be accessed quickly. This made the system better suited to connected QA data than a flat lookup model.

**Cached test-case selection.** I cached the right amount of test-case data so the automation could stay responsive without slowing the wider system. The tradeoff was keeping enough context close to the pipeline while avoiding unnecessary load.

**ML-driven prioritization.** The pipeline used ML to prioritize test cases and detect likely failures before they escalated. This shifted QA effort toward the cases most likely to matter instead of treating every test with the same urgency.

## Results

| Metric | Outcome |
| --- | --- |
| Manual QA effort saved | 4 hours per week |

## What I Learned

Useful AI automation is not only about model quality. It also depends on fitting the model into the workflow, retrieving the right context quickly, and keeping the system fast enough for everyday use.

---

*[Built at Aptiv. Source code is proprietary.]*
