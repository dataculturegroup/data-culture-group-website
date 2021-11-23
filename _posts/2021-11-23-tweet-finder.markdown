---
title: Finding Tweets in Online News
date: 2021-11-23 00:09:00 -0500
categories: [ "media-analysis", "software" ]
thumbnail: tweetfinder-thumb.jpg
author: Rahul Bhargava, Dina Zemlyanker
---

The use of embedded content from Twitter, YouTube, TikTok, and other platforms has grown to become a norm in online news content. When these platforms emerged journalists employed existing industry norms to treat them like traditional sources - content that needed verification, vetting, and review that was often associated with breaking news ([Hermida, 2012](https://doi.org/10.1080/17512786.2012.667269), [Vis 2013](https://doi.org/10.1080/21670811.2012.741316)). In the time since it’s early years, Twitter has become a major platform used by journalists and politicians alike. This has led to a pivot in research work to instead address Twitter as a platform of authority, where news is being made ([Molyneux 2021](https://doi.org/10.1080/1369118X.2021.1874037)).

News shapes how readers perceive the world. Social media, specifically Twitter, is used in news media and that plays into that formation of world-views. Understanding the flow of information is vital for interrogating evolving news norms and the emerging media ecosystem that ties news sources, social media platforms, and people together. This is critically important for research domains such as misinformation and hate speech, where social media has been found to carry an outsize impact on controversial perspectives achieving normalization via amplification in traditional news.

Research to understand the evolution and current practice of using tweets in online news relies on large scale automated analysis to discover embedded tweets, and mentions of tweets, in articles. A typical quantitative news analysis project will involve stages such as web-based article collection, removal of non-content HTML, addition of metadata such as date and author, sentence and word-based tokenization, and storage in some system for easy querying and retrieval. Finding embedded tweets, and mentions of tweets, can be considered a specialized content extraction task, one which various studies and datasets have already undertaken ([Gruppi 2021](http://arxiv.org/abs/2102.04567)).

![screenshot of Twitter's embed-a-tweet page]({{ site.baseurl }}/static/img/posts/tweetfinder-embed-screenshot.jpg)
*The official instructions for embedding a tweet*

Performing the technical task of locating embedded content accurately is thus critical for making accurate research conclusions about Twitter’s role in online news, and connections to these active research areas. As journalistic digital practices evolve, the technical approaches to embedding tweets have diverged from just following [Twitter’s guidelines](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview). After reviewing existing state of the art, we found significant amounts of content was missed. That experience motivated the creation of `tweetfinder` - a new library to extract embedded tweets and mentions of twitter from online news content. [Learn more on the `tweetfinder` homepage](https://tweet-finder.readthedocs.io/en/latest/). In this blog post we document the ways in which existing technologies fail to capture the full range of approaches to embedding tweets in online news, review approaches we take in `tweetfinder`, and showcase initial comparative results.

## Functionality

`tweetfinder` is a Python package that parses HTML content for embedded tweets and mentions of twitter. Users can provide a URL or raw HTML text as input, and it provides convenience methods to return lists of those two types of references it finds. These two types of processing merit separate discussion.

At a high level, any URL passed in is first downloaded via the `requests` library (with a user-configurable timeout). If the user passes in raw HTML as the input instead of a URL, this step is skipped. The HTML content is then passed through the `readability` library to remove HTML content that isn’t related to the core article content itself.

### Finding Embedded Tweets

Twitter’s official documentation offers a “supported” approach to embedding tweets in web content - namely inserting it via a `<blockquote class=”twitter-tweet”>` tag. The current library most-often used for finding tweets in webpages, `goose` simply checks for that approach ([source code](https://github.com/grangier/python-`goose`/blob/master/tests/extractors/tweets.py)). We found that not all websites follow these guidelines, and hypothesized that prior work relying on this method of counting embedded tweets could be undercounting. An example can be seen in articles on the Guardian, where class attributes on blockquotes are random-looking strings such as "dcr-i43ppq". In addition, evolving norms of web-app development have led to some news sites taking an approach of rendering their HTML content via client-side Javascript. This means checking the raw HTML of a webpage outside of a web browser hides any tweets embedded via Javascript commands. To find those, one must run the page source through running a browser. An example can be seen in articles from Fox News, where embedded tweets are only seen after the page is rendered in a browser. These findings informed our approach to iterating on past solutions.

First, we take a multi-pronged heuristic approach to building a pipeline to locate embedded tweets. Our pipeline begins with the HTML (parsed with the `BeautifulSoup` library), because `readability` removes tags we need as signals such as blockquotes. We process the HTML tree using the following heuristics to locate any embedded tweets:

* Check all `blockquote` nodes for a class of “twitter-tweet” (the officially supported approach)
* Check all `blockquote` nodes for a child `a` node linking to twitter.com (because sometimes organizations don’t include the class attribute)
* Check all `div` nodes with a class attribute of “embed-twitter” (a pattern we saw on CNN and other major US news sites)
* Check any `div` nodes with a class attribute of “twitter-tweet-rendered” and extract the tweet from any child `iframe` node (a pattern we saw on a few Javascript-rendered websites)

Second, we provide examples of how to pre-process a URL through a browser so any Javascript is able to run fully. These utilize the `selenium` library to render URL content in a headless browser, wait a few seconds for it to fully load, and then extract HTML from the browser before shutting it down. While computationally expensive, this approach does ensure more complete results.

Note that the above heuristic approach could be accurately criticized as brittle; a cat-and-mouse game with online publishers who constantly tweak their content management systems. We anticipate it will need continual iteration to keep up with patterns employed by news producers large and small. Wider adoption of this library and/or approach by the research community would assuage this concern due to many eyes monitoring the evolving norms and patterns.

### Finding Mentions of Twitter

A second key functionality for researchers is to find mentions of tweets in news. Mentions of tweets, or paraphrases of Twitter content, are another approach news media takes to integrating social media content into their news stories. Existing work takes the approach of building libraries of phrases and keywords and checking content against them ([Rony 2018](http://arxiv.org/abs/1810.13078), [Molyneux 2020](https://doi.org/10.1080/1369118X.2021.1874037)). `tweetfinder` integrates prior keyword lists and expands them to allow users to locate these types of mentions of twitter content in news online.

This functionality is built on the content extracted via `readability`, which we further process to remove all HTML tags. We then process this text-only content to perform a simple find function against every phrase on our keyword list. Note that these lists are user-configurable. We include phrase sets from prior work, and our own list. A clear limitation is that this approach currently only works for English language content; `tweetfinder` uses `cld2` to detect the content language and raises an error if the user attempts to list mentions on non-English language articles.

## Results

To characterize and evaluate performance we assessed against three different corpora:
1. 2021 manual: A set of 41 articles we hand-picked and manually reviewed to identify the
ids of all embedded tweets
2. 2021 random: A set of 500 random articles from 2021
3. 2020 relevant: A set of 1000 random “relevant” articles from 2020; ones that contained the word “tweet”, “tweeted”, or “twitter”

Each of those corpora were pulled from the Media Cloud database of news stories from national US media sources ([Roberts 2021](https://ojs.aaai.org/index.php/ICWSM/article/view/18127)). These datasets are available in the [tweetfinder/test/fixtures` folder of our software repository](https://github.com/dataculturegroup/Tweet-Finder/tree/main/tweetfinder/test/fixtures).

### Embedded Tweets

In our literature review we found the standard library for extracting embedded tweets was `goose`; it was either cited directly in each paper referenced here, or we contacted the authors and they indicated that they used it. This sets up a clear comparison for evaluating embedded tweets. As discussed previously, `goose` analyzes HTML for the Twitter-recommended pattern of embedding via `<blockquote>` HTML elements classed `twitter-tweet`.

With the 2021 manual corpus we can do a more detailed evaluation of precision and recall of the two libraries at the tweet level. We manually reviewed each story and annotated them with the ids of the specific tweets they contained.

| Library | Tweets Found | Precision | Recall |
|---|---|---|---|
| manual reivew | 40 | 1 | 1 |
| `tweetfinder` | 26 | 0.925 | 0.694 |
| `tweetfinder` (with Javascript) | 37 | 0.946 | 0.972 |
| `goose` | 22 | 0.956 | 0.611 |

*Table 1: Performance against small manually coded corpus*

Unsurprisingly precision is high for all three automated approaches; there are not many elements that look like embedded tweets that are not actually embedded tweets. Recall varies far more. This small corpus shows processing the Javascript is critical for finding a higher percentage of the total embedded tweets (ie. `tweetfinder` with Javascript). This table omits a “`goose` (with Javascript)” option because executing the Javascript replaces the blockquote element with an iframe, leaving `goose` unable to detect embedded tweets at all.

With this assessment of library performance in hand, we can turn towards characterizing the total number of embedded tweets found in each corpus we created. Table 2 compares the performance of each approach on this “in the wild” data.

| Library | 2021 manual | 2021 random | 2020 relevant |
|---|---|---|---|
| `tweetfinder` | 26 | 24 | 601 |
| `tweetfinder` (with Javascript) | 37 | 28 | 844 |
| `goose` | 22 | 22 | 469 |

*Table 2: Total embedded tweets found by corpus*

In each of these corpora we see `tweetfinder` outperforming `goose`, with or without Javascript. The simple heuristics included, while perhaps brittle, are successfully finding closer to the true number of embedded tweets as a reader would see them. It is particularly worth highlighting the 2020 relevant results, which were selected to more likely include such content. On this corpus of stories, `tweetfinder` finds more finds 28% more embedded tweets than `goose`, and `tweetfinder` (with Javascript) finds 80% more. This is a significant and notable difference that impacts any research based on embedded tweets in news articles online.

### Mentions of Tweets

In addition to finding embedded tweets, to support research on the prominence and influence of Twitter in news, `tweetfinder` also supports finding “mentions” of Twitter or tweets. This support is limited to English in our initial release, but could be adapted to support other languages; users can easily create and use phrase lists of their own to extend existing capabilities.

This feature does not lend itself to evaluation in the same manner as finding embedded tweets, because the software is simply finding predetermined strings in text. In lieu of that, we include below some characterization of the quantity of mentions found in each of our corpora with each of the sets of phrases included.

Building on prior published work in the domain of computational journalism, we include three separate lists of phrases in this initial release:

1. **Basic**: A short list of basic phrases associated with Twitter generated by the us (examples: “tweeted”, “in a tweet”)
2. **Rony 2018**: A list shared by the authors [in their paper](http://arxiv.org/abs/1810.13078) (examples: “posted on Twitter”, “tweet sent”, “wrong on twitter”)
3. **Molyneux 2020**: A short list shared by authors [in their paper](https://doi.org/10.1080/1369118X.2021.1874037) (examples: “retweet”, “according to a tweet”)

In Table 3 we include a characterization of the behavior of each of the libraries against the three corpora described above.

| Corpus | Total mentions | Basic | Rony 2018 | Molyneux 2020 |
|---|---|---|---|---|
| 2021 Manual | 61 | 53 | 60 | 1 |
| 2021 Random | 37 | 35 | 37 | 1 |
| 2020 Relevant | 936 | 768 | 935 | 44 |

*Table 3: Mentions of Tweets Found in each corpus by phrase set*

One can see that the very short “Basic” list finds a significant portion of the mentions that are included in the far longer Rony 2018 list. This suggests that the majority of journalists use only a small set of phrases when mentioning twitter content in articles.

## Conclusion

This type of infrastructure work is critical to help accurately describe how users and events on Twitter are spilling over into more mainstream news coverage. If deployed at scale, this capability to find content more robustly could help identify types of news stories and track their predominance over time. For example consider the “Twitter listicle” type of story - a short piece made up of a dozen or so embedded tweets about the same topic. Are these stories more common on digital native media sources vs. traditional print news? Has their frequency of use changed over time? Or consider how often tweets are mentioned a number of times in a news story. Is that frequency higher in news publications from states whose politicians are more active on Twitter? These types of questions are important to understanding the still emerging interplay between online news and Twitter, a platform heavily favored by journalists and politicians alike. We hope `tweetfinder` contributes to our ability to understand this.
