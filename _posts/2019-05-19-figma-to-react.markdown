---
layout: post
title:  "Figma SVG to React SVG"
date:   2019-05-19 14:30:00 -0400
categories:
---


In Figma, you can select anything and copy it as SVG using a context menu option.
It's great! I used this feature to get started the interactive illustrations
on the Khan Academy <a href="https://www.khanacademy.org/?country=US" target="_blank">homepage</a>
(currently US-only, unless you use that link).

Sadly, the output isn't JSX, and it embeds images & paths, which adds a lot of
busy work before you can actually start adding interactivity.

I made a tool to turn the output from Figma into JSX, while splitting out the
images and paths. It's a simple tool, but it's already saved me hours.

If this sounds like something that would be useful to you, <a href="https://nettek.ca/figma-svg-to-react-svg/">check it out</a>.
