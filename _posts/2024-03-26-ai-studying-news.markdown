---
title: "How can AI help us study the news? Here are my experiments with LLM-based query generation."
date: 2024-03-26 00:09:00 -0500
categories: [ "journalism", "ai", "media-analysis" ]
thumbnail: ai-study-1-thumbnail.jpg
author: Rahul Bhargava
---

To understand politics, economics, events and health communication in the news, researchers study large sets of articles from online news sources. [Media Cloud](https://mediacloud.org/), a project that I co-lead, holds a historical archive of over 1.5 billion stories from over 100,000 sources and has been used to study [police violence](https://ijoc.org/index.php/ijoc/article/view/8782), [influence of pre-print academic papers](https://websci23.webscience.org/best-paper-websci23-awarded/), [political propaganda](https://global.oup.com/academic/product/network-propaganda-9780190923631?cc=us&lang=en) and [numerous other topics](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C22&q=%22mediacloud.org%22&btnG=).

![screenshot of chat with Google Gemini]({{ site.baseurl }}/static/img/posts/ai-study-1.png)

A challenging part of these kinds of projects is selecting the right set of news stories about the topic being studied and finding the signal in the noise of billions of articles. Recent developments in AI made me wonder if large language models, or LLMs, with chat-based interfaces could help make this easier — could AI change how we perform media research in the short term?
(Spoiler alert: probably not massively, but maybe in limited ways.)

## AI as a question generation tool
The constant drum of marketing hype about AI has led to a broad range of uses focused on answering questions, as the main integrations are with web search engines. In contrast, I’m particularly interested in how AI might help us craft better questions, an area that is under-explored and quite concrete.

I have a concept of a question I want to ask about news coverage and keywords that might pull out relevant articles. The large language model has some embedded understanding of how my topic of interest is written about in the news because it has been fed the entire internet. The hypothesis here is that I can pull out some latent information that the LLM has but I might not think of, then, have it express that to me in the form of a query I can use in Media Cloud. There is no concern with synthesized data because I’m taking the question generated to use another database of news stories.

Most large archives of news (a.k.a corpora) support some form of boolean search, allowing you to combine keywords using “AND” and “OR” statements to pull out articles that match your query. Another approach often taken is to teach machine classifiers how to find the stories you care about. Both are approaches that often require specialized knowledge.
The goal here is to see if LLMs can generate a boolean query string for me that helps narrow in on news stories that use those terms. This could help me (a) avoid having to learn arcane boolean query syntax, and (b) include terms or euphemisms I might not know about.

## Context: Finding news about feminicide
One specific related project I work on is the technology for the [Data Against Feminicide](http://datoscontrafeminicidio.net/) collaborative led by Catherine D’Ignazio’s Data + Feminism Lab at MIT. Co-designed with activist groups monitoring feminicide across the globe, our technology scours news articles. It searches for stories about gender-related killings of cisgender and transgender women and girls based on keyword queries. One of the primary sources is the [Media Cloud online news archive](https://search.mediacloud.org/). Then, it passes those through bespoke trained models co-created with the groups. Finally, it sends high-scoring results to the groups via email and a web-based dashboard. Think of it as high-powered, highly relevant, Google news alerts with global coverage.

![screenshot of Media Cloud web-based search interface]({{ site.baseurl }}/static/img/posts/ai-study-2-mc.png)

Writing boolean search queries for this system is very complex, leading to this query + model approach I just described. Here’s a sample Spanish language query developed with one group:

> (asesinato OR homicidio OR femicidio OR feminicidio OR asesina OR muerta OR muerte OR mata OR dispara OR balea OR apuñala OR golpea OR estrangula OR "sin vida" OR cuerpo* OR cadaver* OR restos) AND (mujer* OR niña* OR "una joven" OR "una adolescente" OR chica* OR prostituta OR "trabajadora sexual" OR "mujer trans" OR transgénero OR "hombre vestido de mujer")

With queries like this, the system pulls stories from [Media Cloud’s online news archive](https://search.mediacloud.org/), [Wayback Machine’s news archive](https://archive.org/details/mediacloud) and [Newscatcher](https://www.newscatcherapi.com/). Could we generate something similar with tools like ChatGPT? The promise of easier onboarding and better queries was enough motivation for me to experiment.

My initial prompt to both wasn’t particularly complex, and I tried to use generic terms. I described our system and need, and asked it to generate queries that might help:

_I have a large ElasticSearch database full of over the extracted text of more than 1 billion online news stories. I want to find stories about feminicide, events where a woman was killed due to her gender. Provide a few boolean keywords queries I could use to pull just stories about these types of events._

## ChatGPT produced generic results
ChatGPT v3.5 is the latest free-to-use model from OpenAI. The first results weren’t in the right format (it gave me JSON), so I had to specify that I wanted boolean search strings, and then I got some potentially useful results:

> (femicide OR "woman killed" OR "gender-based violence") "gender-based violence" (femicide OR "woman killed" OR "violence against women" OR "gender violence")

These are on topic, but aren’t particularly good based on our experience building these queries. The issue of feminicide is seldom reported in such direct language. So, I asked it build queries that might include keywords that are “indicators of events;” the results were slightly better:

> (homicide AND woman) OR (killed AND gender) OR ("dead woman" AND crime) OR ("murdered female" OR "assaulted woman") (perpetrator AND female) OR ("investigation of gender-based crime") OR ("suspect in femicide") OR ("law enforcement and violence against women") (protest OR "community demands justice" OR "rally against violence") (domestic violence OR "intimate partner violence" OR "relationship-related crime")

Still not great, but potentially more useful.

## Gemini showed more contextual understanding
I tried the same query in Google’s free Gemini tool, speculating that perhaps a search engine giant might generate more useful searches. Gemini suggested a “**multi-pronged approach** that focuses on identifying **patterns and indicators** of feminicide” (emphasis from Gemini). These included:

* Victim-focused keywords: “woman killed” OR “girl killed”; “female victim” OR “she/her murdered”; “honor killing” OR “dowry death” (in relevant contexts)
* Contextual keywords: “gender-based violence” OR “misogyny” (use cautiously), “stalking” OR “harassment” (preceding victim keywords)
* Exclusion keywords: “accident” OR “suicide”, “self-defense” OR “justified homicide”

The first intriguing result in the accompanying text is that it has a clear concept of what feminicide is and the social context around its reporting. It reminded me that the task is hard because of “underreporting” and lack of use of the term, “ambiguity” related to reporting on other types of killings and “sensitivity” to replicating negative stereotypes of women. While each is contestable, it showed a surprising attempt to contextualize the task assigned.

It also advised paying attention to the health of research staff, collaborating with institutional partners with domain expertise and recognizing underreporting. That’s a shockingly solid list of contextually appropriate caveats to include in automated results. Our team focuses on all of those. Perhaps Gemini was trained on data including research papers from the Data Against Feminicide team?

## Can we let AI write the queries?
After a few hours spent iterating on approaches, I’m not ready to part ways with my colleagues’ expertise in constructing boolean queries. That said, the tools did help lay out the field of coverage (Gemini’s “multi-pronged” approach), gave little tips that helped to learn (the syntax examples from both) and created reasonable first drafts of queries. **I am convinced that building an onramp that allows Gemini to suggest draft queries at the start of a project relying on boolean queries would be useful**. This is especially true in learning settings, where I use Media Cloud’s web-based search tools with students in communications, journalism, marketing and others.

As an engineer by training, I’m not a fan of the phrase “prompt engineering;” writing prompts doesn’t feel like designing and building something with machines. In this case, spending more time developing this prompt didn’t prove especially useful. I wonder if trying it with a topic I know less well would reveal better reflections. Additionally, colleagues have suggested that inputting a known good query and asking it to adapt or iterate on that to improve it might yield good results.

Consider this piece a work in progress, surfacing ideas for experiments for another day. Overall, the longer conversations with the chat-based AI felt like talking to a middle schooler obsessed with Pokemon, dinosaurs, etc. There was deep domain knowledge but little capability to synthesize it with what I wanted from the interaction.

I think learners of various types are certainly capable of writing something like the first simple prompt to describe the topic they are interested in. In fact, it would likely benefit from having to describe what is and what is not part of the content they are looking for as they develop projects on media attention.

![cute looking robot on wheels moving through stacks of newspapers on its left and right (AI generated image)]({{ site.baseurl }}/static/img/posts/ai-study-3-robot.png)

This approach to having AI generate queries for research shows promise for novices learning to use tools like Media Cloud for querying to find stories about human rights violations or other topics. More broadly, the idea of using new chat-based LLM interfaces to help structure questions or brainstorm is one I’m very engaged with. In both my research and teaching, I see that as a contextually appropriate use that learners benefit from.

Related work in research and data analysis is already showing how LLMs can help automate data extraction and transformation. I found early evidence that ChatGPT can do quote extraction and attribution far more effectively compared to existing libraries.

Pew researchers are using ChatGPT for a variety of research tasks, validating automated results against human results and seeing good performance on repetitive analysis tasks. Their most recent example automated the [extraction of names of guests featured on podcasts from transcripts](https://www.pewresearch.org/short-reads/2024/02/06/how-we-used-large-language-models-to-identify-guests-on-popular-podcasts/).

What have you tried? Please drop me a note and share any learnings or examples.

_Thanks to Catherine D’Ignazio, Daniel Kornhauser, Peter Whiting, Paige Gulley, Helena Suárez Val and Kevin Zheng for early feedback on this experiment and post._

_Originally published at [https://www.storybench.org](https://www.storybench.org/how-can-ai-help-us-study-the-news-here-are-my-experiments-with-llm-based-query-generation/) on March 26, 2024._