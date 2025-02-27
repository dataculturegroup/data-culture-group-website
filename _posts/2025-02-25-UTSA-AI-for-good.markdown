---
title:  "AI for Good: Five Key Principles for the Pro-Social Sector"
date:   2025-02-25 20:00:00 -0600
categories: [ "ai", "journalism", "civic-engagement" ]
thumbnail: "utsa-data-for-good-thumb.jpg"
author: Rahul Bhargava
---

Artificial Intelligence (AI) is reshaping industries across the board, but its impact in the pro-social sector is worth digging into more to understand emerging norms and challenges. Our typical examples stem from years of work on "civic tech", "public interest tech", "data science for good", and related efforts. Most of these focus on challenges like [species conservation](https://www.wildme.org/#/wildbook), [disease outbreak surveillance](https://promedmail.org), [deforestation tracking](https://www.globalforestwatch.org/). Who doesn't want to save threatened zebras? I describe these as **accepted good**: problems that most people agree need to be solved. 

But there are problems less people agree are for the common good. What about AI projects that support for gender equity? Or projects working against surveillance capitalism? Digital protections for trans people? Not everyone agrees that these are projects that support the _common_ good (though I do). These could be collectively called **AI for _contested_ good**, and that's the concept I want to dig into. Specifically, what are some key principles and methods to use when designing AI projects that support work on _contested good_ in the pro-social sector.

This post introduces that thinking and some related examples. This line of thinking stems from an invited talk I gave recently at the [UTSA MATRIX consortium's AI Spring School](https://ai.utsa.edu/ai-spring-school-2024/), which offered an opportunity for me to spend a little more time conceptualizing and formalizing thoughts about these issues for the highly technical audience.

![selfie from the stage showing my face in the corner and the audience in the room]({{ site.baseurl }}/static/img/posts/utsa-data-for-good-selfie.jpg)
*I took a quick selfie from the stage while the audience was doing a quick chat about projects they would describe as "AI for good"*

---

### 1. Center Underserved Issues

**Instead of focusing on well-studied and understood problems, turn your attention to innovate in neglected areas. This presents an opportunity for significant social impact.**

This is particularly relevant in the context of feminicide, where mainstream institutions fail to collect and analyze data effectively. As Catherine D’Ignazio reminds us in ["Counting Feminicide"](https://mitpress.mit.edu/9780262048873/counting-feminicide/), *“What isn't counted doesn't count.”* Over the last few years she's been working with groups that create “counterdata” on feminicide to fill gaps in official records on gender-related killings of women, girls (cisgender and transgender). The work of these civil society groups to produce datasets about this violence supports advocating for policy, enforcement, and garnering public attention.

Producing this data is hard, both logistically and in regard to the human toll. Global groups struggle to create datasets of gender-related killings with ill-fitting tech. This creates significant data gaps and emotional trauma. As [one partner noted](https://mitpressonpubpub.mitpress.mit.edu/pub/cf-chap3/release/2#nwzl6xiaacr), 
<quote>It is not easy to read ten cases of feminicide and put them on a table, disaggregate them, have to put a name, age, circumstances and all that detail, without it affecting you emotionally.</quote> 

In response, I'm part of the [the Counterdata Network](https://counterdatanetwork.org/) that works with groups to create bespoke machine learning classifiers that score news stories, cluster them by events, and deliver via email/web. Over 30 groups use them daily to monitor human rights and civil rights violations via news reports. We co-designed the system to help, basically replacing google news alerts with a custom-built open-source data pipeline. The network is growing across multiple topics: feminicide, criminalization of pregnancy, business human rights violations, and more.

This type of work emphasizes the need to look for issues that are systematically ignored and listen to voices that are unheard or silenced. Innovate in neglected areas with higher potential for social impact.

### 2. Build With, Not For

**Technology should not be imposed on communities but co-created with them to ensure relevance, impact, and empowerment. This participatory approach contrasts with the traditional top-down model of technology deployment.**

I first heard this phrase “build with, not for” from Catherine Bracy during her time at Code for America. She used it to emphasize the idea of co-creating technologies with government and community, instead of creating top-down solutions. As technologists, even our language is embedded with the opposite approach – consider the ideas of “deploying” vs. integrating” tools.

One response to challenges around Individualized Education Programs (IEPs) in the U.S. present a good government-related example to learn from. IEPs are plans created by public schools to offer special education services to children in need of more specialized care. They are created collaboratively across the school system, teachers, and parents. These legally mandated plans are in use for around 8 million students across the US. However, many parents struggle to understand the services their child is offered in their complex IEP.

The [AI-EP](https://aiep.org/) team used interviews to identify common concerns parents had about IEPs. Through interviews, the team identified key challenges and built an AI-powered translation engine and chatbot to help parents navigate complex documents in a personalized way. The features include translation, question answering, and more. This creates a new AI-supported method for helping parents understand a complex document that is written in legal language using complex terms.

Projects like this remind us to focus on participatory design and iterative solution that integrate feedback from the impacted community. Co-creation ensures relevance, impact, and empowerment.

### 3. Study Up

**AI can be a powerful tool for interrogating power structures, flipping traditional methods to focus on the culture of power rather than the culture of the powerless.**

Anthropologist [Laura Nader’s concept of *“studying up”*](https://archive.org/details/ERIC_ED065375) is essential here—using AI to investigate those with authority rather than those affected by their decisions.  She argued that the methods of traditionally anthropology, which typically studied groups with less power in social structures, should instead be flipped to study mechanism of power like colonization. [Chelsea Barabas' work on bringing this idea to algorithmic fairness](https://web.archive.org/web/20200719100331/https://medium.com/swlh/studying-up-reorienting-the-field-of-algorithmic-fairness-around-issues-of-power-9968bfbacf8b) has been highly influential on my thinking here.

A striking recent example is the [Landlord Tech Watch](https://landlordtechwatch.org/) project. Landlords increasingly rely on automated screening tools that use criminal records, eviction histories, and credit scores to assess tenants—often reinforcing racial and economic discrimination. By simulating tenant reports, this project demonstrated how these technologies embed bias and provided advocacy groups with concrete evidence for policy change ([So, 2022](https://doi.org/10.1080/10511482.2022.2113815)). They are studying the tools of those with power in the rental market to understand disparate impacts and work to fight against them.

This line of work studying up in AI systems identifies that we should prioritize identifying and interrogating power structures so that we can then flip traditional research methods to challenge systemic biases. We can leverage advanced AI tools to investigate those with power.

### 4. Look for Quick Wins

**Does every problem need a complex AI solution? Often, small, targeted interventions offer more sustainable impact than complex, resource-intensive projects.** 

Journalists are often at the cutting edge of leveraging new technologies, and considering the ethical implications for their field… genAI is no exception. Their work serves as a model for building small, targeted, interventions that offer quick wins with lightweight AI integrations.

One compelling example is [the *Eva* chatbot](https://ijnet.org/en/story/how-ai-chatbot-amplifying-stories-women-caught-paraguays-drug-trade) developed by the Paraguayan news outlet [El Surtidor](https://elsurtidor.com/). Paraguay has many women in prison, or awaiting sentencing, for drug smuggling. The team wanted to open a door into the taboo issue, so they trained an AI chatbot based on interviews with women awaiting sentencing for international trafficking. Readers could interact with the bot to ask quesitons about their cases, how they got caught, and more (with appropriate guardrails). It quickly reached more than 15,000 interactions with the public. *Eva* helps reframe the public narrative around drug-related crimes by challenging stereotypes and stigma.

Quick-turn projects with tightly defined use-cases like this help us consider what kind of new stories with social impact we can create, focusing on lightweight, adaptable solutions that offer immediate impact. How can AI help you make impact on a small but well defined idea?

### 5. Consider Hidden Risks

**GenAI technologies are built to look magical, and often produce good-looking results at first pass. Scholars are adopting them to support media research, without fully considering the very real [social](https://news.cornell.edu/stories/2023/04/study-uncovers-social-cost-using-ai-conversations), [financial](https://www.nytimes.com/2024/09/27/technology/openai-chatgpt-investors-funding.html), and [ecological impacts](https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/).**

More and more often I’m seeing genAI used for computational tasks that are well solved with regular ML: entity extraction, geographic ID, etc. There are a set of already defined problems that we don’t need genAI for. Ongoing work by academics and journalists are uncovering the [true costs of the massive investment in LLMs](https://dl.acm.org/doi/abs/10.1145/3442188.3445922). Like [Bitcoin](https://www.texastribune.org/2024/07/10/texas-bitcoin-mine-noise-power-grid-cryptocurrency/), with genAI there’s a very real future where we have blackouts because of computational power usage.

An example is a recent study I worked on with a team from [The Scope](https://thescopeboston.org/).  We wanted to analyze articles in the hyper-local news source to assess content diversity via geography, topic, and quotes. We could have used genAI for all of this, as others have, but for [geography](https://hub.docker.com/r/rahulbot/cliff-clavin) and [entities](https://hub.docker.com/r/rahulbot/news-entity-server) we used existing off-the-shelf solutions because they are well validated, produce reproduceable results, are free to deploy and use, and our open source (I've helped build both). However, without well-performing and easy to use existing solutions for quotes, we decided to try the genAI black box. We iterated on prompts against a manually coded list of quotes and ended up using ChatGPT v3.5, which was easy to integrate with, and cost little ($6 total). Quote extraction and attribution (via pronouns) worked well in the end, allowing us to do gender-based analysis. That was only possible at scale thanks to ChatGPT. In the end we were able to do a cross-sectional analysis along those three dimensions of content to help the editors audit their own content, and plan for any changes with that data in mind.

Our work on that study shows how genAI integrations should be carefully designed to only be used where necessary. That can help reduce areas where results are not easily reproducible and justify work towards algorithmic interpretability to mitigate unintended consequences. Companies creating LLMs are deliberately obfuscating the hidden power and [environmental costs]((https://generative-ai-newsroom.com/the-often-overlooked-water-footprint-of-ai-models-46991e3094b6)), and [don't have a history](https://www.niemanlab.org/2021/09/well-this-puts-a-nail-in-the-news-video-on-facebook-coffin/) of being good partners to the media industry.

---

The five principles outlined here—centering underserved issues, building with communities, studying up, looking for quick wins, and considering hidden risks—are foundational for using AI responsibly in the pro-social sector. If you're interested in AI’s role in social impact work, I encourage you to explore these principles in your own projects. These kind of approaches and examples can help ensure that we model how AI technologies might serve as a tool for empowerment, rather than perpetuating existing inequalities.


