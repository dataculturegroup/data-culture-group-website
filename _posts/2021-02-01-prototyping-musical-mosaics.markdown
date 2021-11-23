---
title: "Musical Mosaics: a computational design prototype"
date:  2021-02-01 00:09:00 -0500
categories: [ "design", "visualization", "software" ]
thumbnail: musical-mosaics-thumb.png
author: Rahul Bhargava, Emily Bhargava
---

Computational generative design is a fascinating space available to those with access to coding skills and prototyping machines such as laser cutters and 3d printers. But what happens at the intersections of simple computational design and traditional craft disciplines? We were interested to explore this, starting with a series of mosaic pieces based on data extracted from songs.

Using simple software I created a tool that would translate the audio volume of song over time into a radial design to inspire the creation of a mosaic mirror frame. The height of each bar indicates the volume of the song at that point in time (mapped radially from top around the circle). A simple mapping, but enough to evoke reflection about the composition and feelings the song evokes as a listener.

![screenshot showing design]({{ site.baseurl }}/static/img/posts/moscaic-tool-screenshot.jpg)
*A screenshot of the web-based design tool being used for Joni Mitchell's "Blue"*

![screenshot showing design]({{ site.baseurl }}/static/img/posts/mosaic-blue.jpg)
*Mosaic made based on the data from Joni Mitchell's "Blue"*

The computer-generated designs inspired Emily’s hand-crafted design. Building on top of frames created on a ShopBot via CAD design tools, she laid out the mosaic with pieces of glass. This traditional form dates back thousands of years but is still a vibrant global practice.

![under construction mirrors]({{ site.baseurl }}/static/img/posts/mosaics-under-construction.jpg)
*Three different song-based mosaics under construction - “Red Red Wine”, “Somewhere Over the Rainbow”, and “It’s Not Easy Being Green”*

This is work in progress. The aesthetic of these pieces lends itself to appreciation in its basic form as a mirror, but with the awareness of the data visualization embedded within it prompts reflection about the song and introspection about the viewers' experience of that song and their relationship to it. This first simple data-based mapping to inspire mosaic design is intriguing enough to spark further discussions of how we can reflect music in mosaics, perhaps based on more complicated algorithmic analysis.

## Related Links
* [The code is available on GitHub](https://github.com/rahulbot/music-mosaic-designer)
