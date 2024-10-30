---
title: "Pre-print: Testing Generative AI for Source Audits in Student-Produced Local News"
date: 2024-08-15 00:09:00 -0500
categories: [ "journalism", "ai", "publications" ]
thumbnail: aejmc-scope-thumb.png
author: Rahul Bhargava
---

We recently shared new work at the [AEJMC 2024 conference](https://community.aejmc.org/conference/home) on prototyping an AI-assisted audit of gender representation via quotes in [The Scope](https://thescopeboston.org). We've published it as an [under-construction pre-print](https://osf.io/preprints/socarxiv/7hc2d) to share the work and find related research to collaborate with.

Working with student journalists at The Scope, we tested ChatGPT to audit quoted speakers’ gender and social status in their articles. Quote extraction and attribution is not an off-the-shelf task that has already been solved by NLP researchers, so we turned to ChatGPT. This approach not only helped us identify the types of voices being amplified—often diverse and non-elite—but also allowed us to consider the potential of AI in making source audits more accessible for smaller newsrooms.

Our method combined AI-powered quote extraction with manual validation over a two-phases process (extraction and disambiguation). One prompt extracted quotes, associated speaker attribution, and any pronoun used to describe them. The second clustered names in each story to identify unique speakers.

![chart showing quotes speakers by pronoun used]({{ site.baseurl }}/static/img/posts/aejmc-scope-chart.jpg)
*Women were quoted more than men, perhaps due to the prevelance of female writers.*

While the results were promising, it raised important questions for us about about using AI tools in content audits. Using generative AI, especially in smaller, community-focused settings, prompts us to think about the biases AI may carry, its environmental impact, and the risks of potentially “mainstreaming” perspectives encoded in AI’s training data that may not align with local values.

We're left excited about generative AI tools' potential for transforming media audits, yet also cautious and critical. As AI tools become more embedded in newsrooms, we must navigate issues like intellectual property, energy usage, and the AI’s role in representing local voices. Our study serves as a first step in both a practical experiment and a call for broader discussions on responsible uses of AI in community journalism.
