---
title: "Laya: one more System One model"
date: 2026-09-23
description: "A few days after Jev shipped, an open-source alternative called Laya showed up. Comparing the two System One models on speed, accuracy, context size, and the authorship dispute around Laya."
tags: ["AI"]
lang: en
urlSlug: laya-vs-jev
cover: laya-vs-jev.webp
draft: false
---

Just a couple of days after Jev shipped, it turned out it wasn't alone in its category. Another System One model showed up, Laya from ConvAI Innovations, and this one is open source. You can download it from Hugging Face for free and run it yourself.

A quick reminder of what this class of models is. They don't generate text and they don't hand back JSON, they produce a typed decision in a single pass, along with a confidence number for it. Think rating how critical a bug is the moment the ticket gets created, filtering out spam and toxic comments, or deciding in a support chatbot whether it can answer from the knowledge base itself or it's time to pull in a human, anywhere you need one specific answer instead of a wall of random text.

Everything below is a breakdown based on public material: docs, articles, other people's examples, and numbers from comparison writeups.

## What they have in common

Both work on the same principle: you give the model context and a question, and you get back one of three things:

- yes/no with a probability;
- a pick from a predefined list of options, with a probability distribution across all of them right away;
- a number on a scale, say bug severity from 0 to 5.

Same working principle, no text, no reasoning, just the bare answer.

## Where they differ

Jev is API only, every request goes to the provider's server and back, which is 230 to 280 ms on a decent connection, but can be a lot more when the network is bad. Laya runs locally, on a server or on a laptop, weighs about 1 GB, and can return an answer in 30 to 40 ms. That's a 6 to 7 times difference.

You pay for that speed and privacy with accuracy and context size. Laya's limit is only 512 tokens against roughly 4000 for Jev, a long ticket or email just won't fit in whole.

On accuracy, Laya holds up fine on simple binary splits, but the more options there are to pick from, the worse it gets: with 50 to 100 of them and no fine-tuning, it guesses right about 42% of the time, while Jev is around 87% on the same data.

One more difference, and one of the main ones, is confidentiality. Every request to Jev goes to another company's servers. With Laya the request stays inside your own network, nothing leaves it. For closed corporate applications where data can't go outside at all, the choice between Jev and Laya comes down to this one point, and the rest stops mattering.

## The debates around Laya

The dispute over authorship explains how Laya appeared so fast. The developer Nandakishor M. says he published a paper on RLCD, the mathematical approach these models are built on, back in early 2025. When TypeSafe AI released Jev as a closed paid product without crediting that work, he put Laya together in a couple of days and posted it on Hugging Face as a free alternative. The project quickly picked up thousands of stars on GitHub, and on Reddit, mostly in r/LocalLLaMA, a discussion flared up about who borrowed what from whom.

As for which model to pick, the community has already settled into two camps, and both make sense in their own way. Some go with Laya for independence and privacy, the typical argument being that it's better to run a model locally than to send customer emails or invoices into someone else's cloud. Others point out that without fine-tuning Laya is noticeably behind on accuracy and runs into the context limit, so for production here and now Jev looks more reliable, unless you bring the local model in as a temporary solution and fine-tune it on your own data over time.

Either way, this class had only one closed implementation not long ago, and now there's an open one too. You can look inside it and rework it for yourself, instead of just calling an API blind.

## Bottom line

Three days passed between the Jev and Laya releases. It's quite possible more models of this class show up soon, maybe from big companies too. Curious to see where all of this goes.
