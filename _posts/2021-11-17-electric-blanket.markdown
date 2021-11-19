---
title: A Portable Electic Warming Blanket
date: 2021-11-17 00:09:00 -0500
categories: [ "design", "hardware", "disability" ]
thumbnail: alex-blanket-thumb.jpg
author: Rahul Bhargava
---

My brother-in-law Alex has been in a wheelchair since an accident a few years ago. Being tinkerers, we've had fun brainstorming assistive technologies that might fill various needs that have come up for him. Early on this involved digging into products that exist already, but more recently we've been talking about making our own. Assistive technologies are hard - the needs are hyper-specific to individuals, the environments they need to work in are varied challenging, and the requirements for repeatability and robustness are grueling. All that given, he recently pushed me take on a half-finished project that could transform his experience outdoors in New England winters - an portable electric warming blanket.

![view of a table from above with scattered electronics parts and wires]({{ site.baseurl }}/static/img/posts/alex-blanket-table.jpg)
*The portable warming blanket under construction in my workshop*

## Some Context

Quadriplegic people often have circulation problems in their extremities ([more details](https://www.christopherreeve.org/blog/life-after-paralysis/poor-circulation-in-the-extremities)). This is a major concern for folks that live in New England and want to be outside in the winter! Improvements in fabrics and battery technologies has helped, with companies selling off-the-shelf heated clothing accessories; we have multiple heated vests in my family that get worn most of the winter. However, these don't really address the specific needs of this community.

Two years ago Alex worked with a talented team of MIT undergraduates to design and build a custom portable heated blanket for him to use outdoors when he is in his motorized wheelchair. They did some great work researching options, identifying components, building a blanket, and iterating with him... but didn't quite get it working right in the time they had. Alex brought this under-construction project to my workshop to see if we could finish it up and get it working!

![internal of blanket on table showing orange heating pads]({{ site.baseurl }}/static/img/posts/alex-blanket-heat-pads.jpg)
*The heating pads are wired inside a 2-layer blanket, closed up with velcro*

## Getting It Working

The MIT team had a good design for the project overall, but had a few components they hadn't quite selected right:
* The Arduino Uno they had picked as the brain was a bit physically bit for what was required.
* The heating elements weren't all wired the same - some were in pairs while some where wired in quads. This created current irregularities and uneven heating.
* The control box didn't have an easy way for Alex to switch heating levels.
* The wiring wasn't weather proofed for snow and light rain.
* The circuit required two batteries - one for the blanket (at 12V) and one for Arduino (at USB 3.3V).

![circuit design diagem]({{ site.baseurl }}/static/img/posts/alex-blanket-circuit-diagram.jpg)
*The circuit itself is fairly simple, but it required a lot of wiring*

Luckily, I have some experience with heating components - a few years ago I built a pair of heated earmuffs for my wife as a birthday present. After digging around my workshop I laid out a new circuit with scrap parts I had here. I found an old RFduino that could be a smaller brain, a push button that Alex could use, and properly sized wires for the current (among other things). It's a joy to use up old parts I've had lying around just waiting for a project!

![blanket on Alex's with small controller on top]({{ site.baseurl }}/static/img/posts/alex-blanket-controller.jpg)
*The closed up blanket and controller box*

Knowing Alex enjoys the cold months outdoors, I added in some weatherproof wires and stuck the controller in a waterproof housing too. Add in some hot-glue to hold it all together and we had a functioning blanket! You can check out [the full parts list, circuit schematic, and code on GitHub](https://github.com/dataculturegroup/warming-blanket).

## Field Testing

![man in wheelchair with blanket on top of him]({{ site.baseurl }}/static/img/posts/alex-blanket-chair.jpg)
*Alex with the blanket, ready for an outing!*

With the newly wired blanket working, Alex took it up to Maine for a trip to test it out in the wild. The overall results are promising - it held together, didn't electrocute anyone, and kept him warm! We need to redo some of the wires and things to make it easier to use and position on his lap, but overall this little project was a success!
