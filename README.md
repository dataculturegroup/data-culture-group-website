Data Culture Group Website
==========================

The homepage for the Data Culture Group at Northeastern University's College of Arts, Media and Design.

### Install & Configuration

1. Fork this repository
2. Edit site settings inside file of `_config.yml`
3. Edit your projects at file of `projects.md`, `_data/projects.json` and inside path of `_project/` _(for detail project)_.
4. Edit about yourself inside file of `about.md`

### How to Use?

**a. Add new Category**

All categories saved inside path of `category/`, you can see the existed categories.

**b. Add new Posts**

* All posts based on markdown syntax _(please googling)_. allowed extensions is `*.markdown` or `*.md`.
* This files can found at the path of `_posts/`.
* and the name of files are following `<date:%Y-%m-%d>-<slug>.<extension>`, for example:

```
2013-09-23-welcome-to-jekyll.md

# or

2013-09-23-welcome-to-jekyll.markdown
```

Inside the file of it,

```
---
layout: post                          # (require) default post layout
title: "Your Title"                   # (require) a string title
date: 2016-04-20 19:51:02 +0700       # (require) a post date
categories: [python, django]          # (custom) some categories, but makesure these categories already exists inside path of `category/`
tags: [foo, bar]                      # (custom) tags only for meta `property="article:tag"`
image: Broadcast_Mail.png             # (custom) image only for meta `property="og:image"`, save your image inside path of `static/img/_posts`
---

# your content post with markdown syntax goes here...
```


## Installing in your local

```
bundle install
jekyll serve
```

## Credits

The website is built on top of the ["My Stack Problems" Jekyll template](https://github.com/agusmakmun/agusmakmun.github.io) created by Agus Makmun.