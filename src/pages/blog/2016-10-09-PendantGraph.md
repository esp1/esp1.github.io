---
layout: "../../layouts/BlogPost.astro"
title: "PendantGraph"
description: "Lorem ipsum dolor sit amet"
pubDate: "2016-10-09"
thumbnailImage: "pendantgraph-thumb.png"
heroImage: "pendantgraph.png"
---

This is a pendant-style drawing robot I made and displayed at the Charlotte Mini Maker Faire in 2016. A whiteboard marker is placed in a 3D printed pen holder that is suspended by some ball chain. The ball chains are draped over two small stepper motors affixed to the top corners of the whiteboard, and an Arduino microcontroller turns the stepper motors to move the marker and draw a picture.

![](../../public/assets/pendantgraph.png)

Ever since I first saw these kinds of drawing robots online years ago I had wanted to build one. I found some very nice 3D models for the pen holder here on Thingiverse. I was using different stepper motors though, so I modeled my own gears for the ball chain. Software also exists for these kinds of drawing robots, but again since I was using a different kind of stepper motor, I couldn’t use that software directly. Plus, I wanted to try writing the software myself anyway – so I did.

Currently the code only draws a single picture: a crown that is the logo for the city of Charlotte where I live. The robot also does not currently have a way to lift the marker off of the whiteboard, so it has to draw the entire picture in one continuous stroke.