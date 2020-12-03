---
title: What Can AR Do for Climate Change Communication?
date:  2020-12-02 00:09:00 -0500
categories: [ "civic-engagement", "data-literacy", "augmented-reality" ]
thumbnail: ar-climate-thumb.jpg
author: Ballori Ghosh, Rahul Bhargava
---

AR has emerged as a popular approach to interacting with technology - creators are leveraging it for video games, educational experiences, live filters and more. We are motivated by this development to explore how AR is being used for pro-social communication. What can AR offer to things like communicating climate change data? What AR do to help motivate people to take action on personal, collective, or governmental challenges? This blog post shares what we have found so far, and what it suggests for a path forward.

## An Established Technology

Hundreds of millions now have the ability to run AR apps in their pocket; it is an established technology with a vast user base. A dominant form of use has turned out to be in the world of filters, thanks to social media and our collective obsession with selfies! SnapChat and Instagram are perhaps the best example of this. Their platforms have popularized AR filters.

![screenshot of 2 Snapchat filters]({{ site.baseurl }}/static/img/posts/ar-climate-1.jpg)

AR filters such as these are massively popular, but are mostly used for entertainment purposes. In parallel to this growth we've seen rapid development in the tool space for creating these AR experiences - with [Apple's ARKit](https://developer.apple.com/augmented-reality/), [Google’s ARCore](https://developers.google.com/ar), and higher level tools like [Snapchat's Lens Studio](https://lensstudio.snapchat.com), [Facebook’s Spark AR Studio](https://sparkar.facebook.com/ar-studio/), and [others](https://arvrjourney.com/top-10-ar-tools-for-app-development-6dab56a833db). The barrier to creating AR experiences is rapidly falling.


## Current Approaches to Using AR to Fight Climate Change

Having fun with silly selfies is great, but we think there is an under-explored design space here.  Climate change is one of the most pressing challenges of our time. In the US politicians are divided, but the public is not - [survey data shows us](https://www.pewresearch.org/fact-tank/2020/04/21/how-americans-see-climate-change-and-the-environment-in-7-charts/) that the majority of americans believe the government isn't doing enough about climate change, and that it should be a top political priority. Data plays a central role in assessing and communicating the risk and scale of the impacts, but the barriers to effectively communicating climate change with data have been well documented and discussed for years (see [Moser 2010](https://climateaccess.org/system/files/Moser_Communicating%20Climate%20Change.pdf) for a good summary).

People throw every new technology that emerges at climate change, and AR is no exception. We've seen a few patterns in the small set of AR projects that have focused on climate change over the last few years:
* Reflecting on our present conditions
* Imagining the future of our climate
* Designing resilient cities

Here's a quick run down of some of the projects we came across in our survey of work.

### Reflecting on our present conditions

A standard approach of data visualization is to "make visible the invisible". We came across a set of projects that attempt to do this, showcasing the climate change happening around us already.

![Screenshots from the AiR research app]({{ site.baseurl }}/static/img/posts/ar-climate-2.jpg)

We also found a number of academic researchers are investigating how to best use AR to show pollution levels. ["AiR -- An Augmented Reality Application for Visualizing Air Pollution" from Matthews, et al](https://www.researchgate.net/publication/341899389_AiR_--_An_Augmented_Reality_Application_for_Visualizing_Air_Pollution) overlays your view with virtual smog based on local pollution levels. ["Aire: visualize air quality" from Torres, et al last year](https://dl.acm.org/doi/10.1145/3305365.3329869) similarly adds moving virtual pollution particulates on top of a live camera view via AR.

### Imagining the future of our Climate

A standard way to imagine the future is to show it - AR makes that possible by modifying our view of the world around us. Numerous projects we found are using AR to _show_ us the world of the future if no action is taken. The most common approach we saw to this was sea level rise. In fact, we saw so many examples that we're pushed to call sea-level rise AR apps a cliche at this point.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The effects of climate change are altering the world around us. <br><br>See how the ocean could be impacted by 2100 with <a href="https://twitter.com/SnapLensStudio?ref_src=twsrc%5Etfw">@SnapLensStudio</a>’s Waterline Lens on <a href="https://twitter.com/Snapchat?ref_src=twsrc%5Etfw">@Snapchat</a>. <a href="https://twitter.com/hashtag/EarthDay?src=hash&amp;ref_src=twsrc%5Etfw">#EarthDay</a> <a href="https://twitter.com/hashtag/ClimateAction?src=hash&amp;ref_src=twsrc%5Etfw">#ClimateAction</a> <a href="https://t.co/FnWTsylOpR">pic.twitter.com/FnWTsylOpR</a></p>&mdash; UN Environment Programme (@UNEP) <a href="https://twitter.com/UNEP/status/1120373575356231680?ref_src=twsrc%5Etfw">April 22, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Here is a quick sampling of the apps we found that showed sea level rise:
* Snapchat itself [worked with the UN Environment Programme to create a lens](https://wersm.com/new-snapchat-ar-lens-shows-you-what-climate-change-can-do/) in 2019 showing how sea level rise would impact your view of the world by 2100.
* In 2019 the insurance company Hiscox [created an app to predict flood levels](https://www.insurancebusinessmag.com/us/news/catastrophe/hiscox-launches-augmentedreality-app-to-illustrate-flood-threat-189641.aspx) on an AR model of parts of NJ ([available for Android in the Google Play Store](https://play.google.com/store/apps/details?id=com.hiscox.floodplusar&hl=en_US&gl=US)).
* Artist [Justin Brice Guariglia created After Ice](https://www.climatecentral.org/news/app-sea-level-rise-21374) in 2017 to show New York City residents how flooded it would be if the ice caps melt.
* Geospatial educators [included sea level rise in a larger AR app](https://files.eric.ed.gov/fulltext/EJ1111551.pdf) they've used since 2016 introduce students to concepts such as topological maps.
* Journalist Eli Kintisch worked with researchers at MIT and RISD [created the Looking Glass app](https://www.youtube.com/watch?v=PeytXlQBHi8) in 2013 to show New England residents their risk from sea level rise.

### Designing Resilient Cities

In the US at least, due to the lack of national action on climate change, cities have become a central organizing unit for our response. This has led to large, well-funded efforts like the [Resilient Cities Network](https://resilientcitiesnetwork.org). Accordingly, we saw a number of AR apps that focused on climate-proofing the city.

![Screenshot of Earthwatch's app]({{ site.baseurl }}/static/img/posts/ar-climate-3.jpg)

Earthwatch Europe took an approach similar to SimCity in building an AR app that [allows uses to try build a "climate proof" city](https://vrnation.tv/earthwatch-europe-ar-app-visualizes-a-climate-proof-city/) by altering the makeup of land use, water supply, drainage, and more. The Klikovand task force worked with others to build [an AR app that allows users to place green terrain](https://www.larapp.dk) in their built environment to provoke conversation about long-term climate resilience and day-to-day public works decisions. Artist Juan Carlos Gallo and others [created an AR-connected mural in Miami](https://www.miamiherald.com/news/local/environment/article198488639.html) to warn about climate change danger to localities.

## An Opportunity for Evaluation and Impact

After exploring this space of climate change AR experiences, we are excited because we believe it has a lot of potential. We offer this blog post as a call to arms to study and explore the opportunity more! For instance, **we saw little study of what people take away from these experiences** - no assessment of whether their feeling of risk has increased, or if they are more motivated to support some policy, or even to share the message of warning with their friends. We are left feeling that there is more we can try out here.

We need to experiment and study more. Perhaps AR can actually be an effective tool to help us communicate and motivate action to the dire threats of climate change that are all around us. We just don't know yet. Our next steps on this project are to audit the rapid prototyping tools we mentioned earlier to see what their design affordances are.

![A screenshot of using Snapchat's Lens Studio - Ballori's new look]({{ site.baseurl }}/static/img/posts/ar-climate-4.jpg)

After that we're hoping to build a simple experiment to study how people respond to AR experiences that are built around climate change data. Our key questions involve comparing AR experiences to other techniques like flat data visualization, infographics, or journalism-like narratives. We want to investigate question such as:
* Does AR communicate the threat more effectively?
* Are participants more motivated to act on a threat after an AR experience?

Drop us a line if you have a project we can learn from, or feel free to reach out if you'd like to collaborate with us.
