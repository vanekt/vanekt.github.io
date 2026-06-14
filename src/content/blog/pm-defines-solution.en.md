---
title: "When a PM defines the solution"
date: 2026-04-27
description: "Early in my career I spent a week on a widget that could've been done in a day — because the PM baked the solution into the task instead of the problem."
tags: ["Engineering"]
lang: en
urlSlug: pm-defines-solution
draft: false
---

Early in my career I got a task to build an embeddable widget for a third-party site that essentially duplicated an existing screen in our app, with a couple of minor differences. One constraint: no iframes.

I asked why, but the PM didn't really explain, just repeated that it was a requirement. I warned him that without an iframe it would take significantly longer. He said okay, and I got started.

Without an iframe, isolating a widget on someone else's page turned out to be genuinely hard. I had to duplicate part of the functionality, manage styles separately, make sure nothing conflicted in either direction. After a week of work the widget was about halfway done.

The PM came by, asked how it was going and when it would be ready. I explained the situation, he seemed surprised, asked if there was any way to speed things up. I said the fastest path I could see was to use an iframe after all. He thought about it and agreed. I built the iframe version in one day.

A couple of weeks later the client changed their mind about the widget entirely. It was committed to git and never touched again.

When a task has the implementation baked in, responsibility shifts back to whoever wrote it. The developer did what they were told, the result isn't right, so who's at fault? And people who can solve problems independently are usually valued precisely for that ability. Take it away, and it's not clear why you'd hire a technical specialist if you're making the technical decisions yourself.
