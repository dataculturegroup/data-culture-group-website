---
title: ACH Keynote on "Civic Jugaad - Reclaiming Digital Innovation for Social Good"
date: 2025-08-01 09:00:00 -0600
categories: [ "ai", "civic-engagement", "journalism", "design" ]
thumbnail: "ach-jugaad-thumb.png"
author: Rahul Bhargava
---

*The following is a condensed write-up of a keynote talk I gave at the ACH 2025 conference (Association for Computers and the Humanities)*

I grew up as an 80s kid watching MacGyver use some duct-tape to save a city from destruction. Frequent visits to India shows me real-world street equivalents, where this kind of hacked-together solution has a name: *jugaad* (pronounced "jugaar"). Jugaad is the Indian culture of improvised problem solving. This can range from repurposing a motorcycle to run an irrigation pump to mashing an air-conditioning unit into a wall it was never designed for. Looking back, it is obvious that these experiences played not small part in my decision to study engineering in college.

![a motorcycle driving a water pump]({{ site.baseurl }}/static/img/posts/ach-jugaad-1-bike.jpg)
*Jugaad in action in India.*

The term was briefly taken [seized on by business innovators](https://www.wiley.com/en-ca/shop/general-introductory-business-management/jugaad-innovation-think-frugal-be-flexible-generate-breakthrough-growth-p-9781118249741) in the late 2010s, confusingly tied to both orientalism and politics of self-emancipation, and then faded again in the 2020s under criticism as "shortcuts". However, I believe this jugaad mindset has something urgent for those of working in digital humanities, public interest tech, and journalism right now. [Big Tech is consolidating and concentrating power](https://www.techpolicy.press/the-consequences-of-big-techs-unchecked-consolidation-of-power/) and resources in the hands of the few, using "innovation" to describe tired attention-based monetization strategies. In parallel, the current U.S. regime is [attacking universities](https://www.npr.org/2025/04/25/nx-s1-5375033/trump-federal-grants-cuts-universities-could-mean) and their [funding](https://www.nature.com/articles/d41586-025-01749-x) [streams](https://www.insidehighered.com/news/government/politics-elections/2025/04/14/draconian-layoffs-grant-terminations-come-neh). We live in disorienting times for those like, who grew up with relatively stable patterns of public investment in knowledge for the common good. 

Local needs, contexts, and constraints drive jugaad-style innovation; those operating under harsh situations figure out a way to make things work. They connect people, amplify resistance, build with not for, and study systems of power. I want to tease those four points to structure my argument about the "civic jugaad" we need right now, bringing the improvisational, community-rooted ethos of jugaad into digital humanities and public interest technology practice.


## 1. Connect people

**Facism and authoritarianism [thrives on isolation and "othering."](https://secularhumanism.org/2003/03/fascism-anyone/) One small counter-move is building tools that cross boundaries instead of reinforcing them.**

Journalists are at the forefront here, constantly connecting their readers to each other via the stories they choose to highlight. A lightweight example from my own work on interactive journalism is [**Our Cup**](https://www.ourcup.info), a static website I rebuild for every World Cup that recommends matches to watch based on the largest local immigrant populations in your area, then connects you to food, music, and news from those communities. It's genuinely a "quick and dirty" project, deployed as a static site on GitHub Pages. There's little infrastructure and no grant funds, just an attempt to use a shared cultural moment to reduce distance between neighbors.

![collage: screenshot of chatbot, logo, team who built tech]({{ site.baseurl }}/static/img/posts/ach-jugaad-2-surtidor.png)
*El Surtidor built a chatbot letting readers interact wth a women in prinson.*

A more inspiring and ambitious example comes from **El Surtidor**, a Paraguayan news outlet that [built a chatbot named Eva](https://restofworld.org/2025/paraguay-ai-chatbot-eva-social-justice/) out of hours of interviews with a woman awaiting sentencing for international drug trafficking. With Eva they [are trying to open up public conversation](https://ijnet.org/en/story/how-ai-chatbot-amplifying-stories-women-caught-paraguays-drug-trade) on a stigmatized issue: women incarcerated for smuggling. It has logged more than 15,000 interactions with the public, all built on a modest $5,000 grant. The team even considered a WhatsApp bot before landing on something cheaper to build and maintain. That's the jugaad approach in action: focus on the local context, and just make it work with what you have.

The key lessons for practicing civic jugaad to connect people?
 1. Design for local contexts, where the problems at hand and resources are well understood.
 2. Make it work – if you have multiple approaches, just use the least complex options.


## 2. Amplify resistance

**There are groups around you already fighting against marginalization they experience. [You can innovate with](https://www.pih.org/article/pihs-mission-statement-explained) groups in neglected areas to create higher potential for social impact.**

Some of the most important public interest technology happens in areas mainstream institutions have simply neglected. My good friend and colleague Catherine D'Ignazio's research with anti-feminicide activist groups is a good example. Official records systematically undercount gender-related killings of women and girls, so activist groups around the world build their own "counterdata" to fill the gap. Our [**Counterdata Network**](http://dataculture.northeastern.edu/projects/counterdata-network.html) grew directly out of watching that struggle: we build bespoke, lightweight machine-learning classifiers, in consultation and collaboration with each group, that score and cluster news stories and deliver alerts by email or web dashboard. It's essentially a custom-built replacement for Google News Alerts, tuned to each community's specific needs. Over the last five years almost 50 groups have used it regularly to monitor human rights and civil rights violations.

![collage: two screenshots of web-based systems and system diagram]({{ site.baseurl }}/static/img/posts/ach-jugaad-3-counterdata.png)
*System diagram and screenshot of Data Against Feminicides tool created by the Counterdata Network.*

A smaller-scale version of the same instinct is a [**local protest mapping tool**](https://dataculture.northeastern.edu/local-protest-map/) I built so newsrooms can see and embed maps of nearby demonstrations in their coverage. Many are criticizing the coverage of mass protests in response to Trump's destruction of long-standing government programs as underwhelming. This website helps local journalists create compelling visuals to discuss incidents and patterns of resistance, perhaps pushing back on episodic vs. systemic framing issues so often encountered in this type of reporting.

The key lessons for practicing civic jugaad to amplify resistance?
 1. Rely on and respond to problem statements the local community has developed. 
 2. Build by putting together existing pieces.


## 3. Build with, not for

**Digital tools for the public good can't be built with standard deploy-oriented mindsets. Co-creation gives us the best chance at relevance, impact, and empowerment**

I first heard the phrase "build with, not for" from [Catherine Bracy](https://en.wikipedia.org/wiki/Catherine_Bracy) during her time at Code for America. It has stuck with me ever since, in part because it focuses on the language technologists use. We talk about "deploying" solutions, as if communities were terrain to be occupied rather than partners in the work. [Recent research on "AI for good" partnerships](https://doi.org/10.1145/3687009) bears this out: funders' agendas routinely override community needs, technical metrics don't align with social goals, project don't meet expectations of the target audience, and technology gets centered ahead of the actual social.

One counterexample in the same space is my Northeastern colleagues' [**AI-EP project**](https://burnes.northeastern.edu/projects/ai-ep/). They brought together school systems, students, researchers, and parents to identify points of confusion around their children's Individualized Education Programs (IEPs). These are legally mandated documents detailing education supports their children can receive, but are often dense and hard to understand. Only after hearing those concerns did the team build a translation engine and chatbot to answer parents' specific questions. It's a small pilot, still iterating, but it's a model for sequencing: listen first, build second.

![collage: team of tech builders, venn diagram of needs from community, screenshot of tool]({{ site.baseurl }}/static/img/posts/ach-jugaad-4-ai-iep.png)
*The AI-IEP team and some of the artifacts they created.*

An off-screen example comes from my own work on creating participatory [**data murals**](https://dataculture.northeastern.edu/projects/data-murals.html) I've helped communities paint in public spaces with my wife, [Emily Bhargava](https://connectionlab.org). Data is increasingly front and center in civic participation, but spreadsheets and charts aren't universally accessible forms; the materials and forms of data change who is able to work with it. Borrowing from rhetorical power of community art, and related participatory processes, we facilitate communities finding a story in the data about them, designing a visual to tell that data story, and painting it together in a local setting as a public mural. This builds on the longstanding power of murals to impact public conversation and policy. Similar ideas are in my recent [Community Data book](https://www.communitydatabook.com).

The key lessons for practicing civic jugaad to build with, not for?
 1. Engage people with participatory design methods and distributed ownership of tools and processes.
 2. Iteratively learn through real work experimentation, while acknowledging the potential for harms.


## 4. Study systems of power

**Communities trying to use technology for civic good are often subject to the power structures those contain. Peeling back to the layers can present opportunities to reclaim power.**

The last principle borrows a phrase from anthropology: "studying up." [Anthropologist Laura Nader argued back in 1972](https://archive.org/details/ERIC_ED065375) for turning ethnographic attention toward the culture of power and affluence, rather than only studying the powerless. In technology research, that means training our tools on owners, corporations, and institutions instead of only on the communities affected by their technologies.

A wonderful example from my colleague Wonyoung So is [**Landlord Tech Watch**](https://dusp.mit.edu/projects/landlord-tech-watch): the team [builds simulated tenant screening reports](https://www.tandfonline.com/doi/pdf/10.1080/10511482.2022.2113815) to reverse-engineer how algorithmic scoring systems embed racial bias into rental decisions. These systems, relying on criminal records, eviction histories, and credit scores, disproportionately exclude people of color as tenants. Their findings have directly supported tenants' rights advocacy and a 2024 legal settlement with a major screening vendor. 

![collage: screenshots of two websites the landlord tech watch team created]({{ site.baseurl }}/static/img/posts/ach-jugaad-5-landlord.png)
*The Landlord Tech Watch team created explanatory websites to show their findings.*

With another research hat one I'm co-PI of the [**Media Cloud**](https://www.mediacloud.org) project, which offers a [directory of global online news sources](https://search.mediacloud.org/directory) and a [searchable index](http://search.mediacloud.org) of almost 2 billion stories. Our tooling [operates as public data infrastructure](https://ojs.aaai.org/index.php/ICWSM/article/view/42778), supporting study of media narratives pushed out by various parties. It allows anyone to dig into media framing and shifts over time.

The key lessons for practicing civic jugaad to study systems of power?
 1. Identify any existing oppressive power structures around your innovation and work to dismantle them.
 2. Think about how your methods can help other "study up."


## Civic jugaad as a response 

I offer this concept of "civic jugaad" as a hopefully helpful way to think about aligning your/our work to respond to the challenge of the moment (summer 2025).  This is a model that western research settings can learn from. We're not going to out-resource the platforms consolidating power around us, and we can't wait for research funding to return to its old levels. But we can borrow from a tradition built for exactly this kind of scarcity: pay close attention to local needs and constraints, connect rather than isolate, amplify what's been neglected, build alongside the people affected, and turn our tools toward studying power rather than only the powerless.

Civic jugaad is still very much a work in progress; more provocation than framework at this point. But if any of these examples resonate with your own work, please reach out and let me know.

![slide from presentation]({{ site.baseurl }}/static/img/posts/ach-jugaad-6-diagram.png)
*Context, needs, and constraints drive jugaad innovation.*
