---
layout: post
title:  "Pandemic news coverage is falling, but cases keep rising"
date:   2020-09-21 00:09:00 -0500
categories: [ "media-analysis" ]
thumbnail: "attention-top-online.png"
author: "Rahul Bhargava"
---

The Covid-19 pandemic has yielded unprecedented media coverage. Over the last six months, no single topic has taken over online news quite like the coronavirus has. In fact, at its peak in late March, almost 75% of all stories in top U.S. online media sources mentioned coronavirus in some way.

But that attention seems to be waning, according to our recent analysis of 12.5 million national- and state-level news articles collected through [Media Cloud](https://mediacloud.org/). Since its peak in March, media coverage mentioning coronavirus has tapered off while cases continue to rise – a troubling trend as the virus continues to infect and kill. The U.S. is currently [logging](https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html?action=click&module=Top%20Stories&pgtype=Homepage) more than 33,000 cases per day, and the death tally is over 190,000.

![Attention over time](/static/img/posts/attention-top-online-big.jpg)
*Mentions of coronavirus in [87 top U.S. online news sources](https://sources.mediacloud.org/#/collections/186572516) between January and September 2020 (rolling 3-day mean). Explore this data yourself with [Media Cloud Explorer](https://explorer.mediacloud.org/#/queries/search?qs=%255B%257B%2522label%2522%253A%2522coronavirus%2520OR%2520covid%2520or%2520%255C%2522co...%2522%252C%2522q%2522%253A%2522%27coronavirus%2520OR%2520covid%2520OR%2520%255C%2522covid%252019%255C%2522%2520OR%2520%255C%2522covid-19%255C%2522%2520OR%2520covid19%2520OR%2520pandemic%27%2522%252C%2522color%2522%253A%2522%25231f77b4%2522%252C%2522startDate%2522%253A%25222020-01-09%2522%252C%2522endDate%2522%253A%25222020-09-09%2522%252C%2522sources%2522%253A%255B%255D%252C%2522collections%2522%253A%255B186572516%255D%252C%2522searches%2522%253A%255B%255D%257D%255D).*

So by how much, and where, has media coverage of Covid-19 fallen off? And does coverage track incidence rates in states that have had late surges of infections? We set out to measure how attention to this public health crisis has played out in the last six months across every U.S. state.

## State-level media aren’t responding to more recent local outbreaks

While a handful of sources like The New York Times or The Washington Post are the nation’s papers of record, the vast majority of the nation’s papers cover smaller geographic areas. Take the [St. Louis Post-Dispatch](https://www.stltoday.com/) in Missouri or [The Oregonian](https://www.oregonlive.com/) of Portland.

The U.S. has a fairly robust set of media sources like these that cover news at the state and regional level and Media Cloud has a manually curated and reviewed collection of online news sources for each state. In some states these collections are dominated by stories from business sources, like the [St. Louis Business Journal](https://sources.mediacloud.org/#/sources/1255) and the [Kansas City Business Journal](https://sources.mediacloud.org/#/sources/661741) in our [Missouri collection](https://sources.mediacloud.org/#/collections/38381321). In other states, local TV stations produce most of the stories in our database, like [KDXU](https://sources.mediacloud.org/#/sources/663628) in our [Utah collection](https://sources.mediacloud.org/#/collections/38381406). No state collection looks exactly like any other, reflecting the diversity of local news outlets across the U.S and the varying levels of digital transformation that has brought them online or not.

Using this database of stories from these local online news sources, we looked to see how much attention coronavirus received in each state. The search terms we used included <i>coronavirus, Covid-19, Covid and pandemic</i>. Across all states, coronavirus was mentioned in 32% of stories published between February and September. This is lower than the national coverage shown above, but still remarkably high. Moreover, the <b>pattern of coverage was remarkably consistent across states</b>. There was a strong surge of coverage in March, then a slow decline until late May. At that point there was a large across-the-board dip as media attention turned to the killing of George Floyd. Then in June pandemic coverage rose and fell periodically, but overall continued a slow decline.

![Attention by state](/static/img/posts/attention-state-overlay.jpg)
*Each line represents the percentage of coronavirus-related stories published by sources in a state (3-day rolling mean).*

We know the pandemic has spread across states differently, so seeing such uniformity in state-level media coverage over time is quite surprising. It left us curious – if you look at state-level coronavirus incidence and compare it to state-level media coverage, do you see a connection? Are local media sources responding to outbreaks, or trends, with increased or decreased coverage? To do this, we pulled in data on the number of new daily cases per 100,000 people from the [Johns Hopkins tracker](https://coronavirus.jhu.edu/).

<b>Arizona</b>
![Arizona details](/static/img/posts/comparison-AZ.png)
In Arizona, we see a major spike of new cases in July (purple). However, there is no commensurate growth in media coverage (teal) during that same time. There was a massive gap in local coronavirus coverage over the summer – a missed opportunity for Arizona papers to report local stories impacting readers’ lives directly.

<b>Massachusetts</b>
![Massachusetts details](/static/img/posts/comparison-MA.png)
In Massachusetts media, we see a fairly consistent tracking between the percentage of stories about coronavirus (teal) and the daily new cases (purple). Here in Mass, we had [an early “superspreader” event](https://www.wbur.org/commonhealth/2020/08/25/genetic-fingerprints-biogen-superspreader-boston) but rates have fallen consistently since. Local media coverage has reflected that.

Looking across the U.S., you can see that the connection between media coverage and the incidence of new cases of coronavirus varies wildly by state. In states like Arizona, Louisiana, Texas and some others, online media coverage about coronavirus didn’t increase when new cases increased. In other words, <b>online local news was not responding to local coronavirus outbreaks with increased coverage</b>. What are the effects of that coverage gap? Why does the percentage of attention to coronavirus track national levels so closely no matter the state?

![State Map](/static/img/posts/comparison-state-map.jpg)
*A state-by-state map comparing the percent of online news stories mentioning coronavirus (in teal) to the number of daily new cases per 100,000 people (in purple). Both lines present a rolling 3-day mean. Click to zoom in. [Code and data is available on GitHub](https://github.com/rahulbot/US-Coronavirus-State-Media-Coverage).*

## Media responsibility during a pandemic

In a recent [Atlantic article](https://www.theatlantic.com/health/archive/2020/07/it-okay-go-beach/613849/) and [ongoing Twitter thread](https://twitter.com/zeynep/status/1279432888048594944?lang=en), UNC sociologist Zeynep Tufekci calls out editors for their image choices on articles about risky behavior. She points out article after article about risky behaviors featuring shots of beach crowds. This is irresponsible, she says, because science tells us that one of the safest places to be right now is outside. “Enough with the beach-scolding,” she argues.

![beach photo](/static/img/posts/beach-2048x1053.jpg)
*My daughter is safe and sound, chilling at the beach.*

This small example gets at a larger argument about the role and responsibility of media in a pandemic, and towards public health at large. Look at the gap of coverage in Oklahoma, where coronavirus continues its steady rise but media reporting has left it out of the headlines. Is the media doing a disservice to public health? Could this gap even be contributing to sickness and death?

Editorial decisions at papers across the country are driven by subjective judgments about newsworthiness and well-discussed business pressures related to pulling in more readers in a hyper-competitive media landscape. I don’t envy the editors making these calls about how to balance the parallel crises of 2020, but I’m left feeling upset that the summer didn’t see more day-after-day coverage of the pandemic as it spiked. Coronavirus continues to surge around us, and still upends our daily lives, but the news just isn’t covering it as much.

One guess is that editors are reflecting the “coronavirus fatigue” we are all feeling; there is only so much pandemic coverage we can handle. However, reading about [the latest White House pandemic scandal](https://www.washingtonpost.com/us-policy/2020/09/17/usps-trump-coronavirus-amazon-foia/) is very different from reading about [a coronavirus outbreak down the road](https://www.boston.com/news/coronavirus/2020/08/28/covid-19-cases-maine-wedding-big-moose-inn). The former can leave readers feeling disempowered and defeated while latter could spur tangible local activism on a short timeline. Geographically localized outbreaks are an opportunity for smaller newspapers to lead coverage with their local expertise and networks. Northeastern’s [dismissal of 11 students](https://huntnewsnu.com/63154/campus/dismissed-nu-in-students-refunded-tuition-for-spring-semester/) became a national story, and reporters and editors at the campus’s independent newspaper, The Huntington News, were sought out by multiple news outlets. [Recent data](https://knightfoundation.org/articles/local-news-is-more-trusted-than-national-news-but-that-could-change/) also shows local news sources are more trusted than their national counterparts. Local outlets could leverage that trust to pick when the national pandemic response merits attention versus when close-by pandemic rates are critical enough to focus on, selectively working to avoid the coronavirus news fatigue. At least, I hope they can.

## Acknowledgments

Thanks to Aleszu Bajak for editing and data sanity checking help. Also thanks to Emily Ndulue, Ethan Zuckerman, Dennis Jen, and Fernando Bermejo for comments.

*Originally published on the [StoryBench blog](https://www.storybench.org/pandemic-news-coverage-is-falling-but-cases-keep-rising/).*
