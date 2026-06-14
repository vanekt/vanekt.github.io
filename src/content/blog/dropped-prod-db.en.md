---
title: "I dropped a production database"
date: 2026-05-04
description: "A war story from early in my career: I dropped a production database in the middle of a workday. What happened, how I fixed it, and what changed after."
tags: ["Engineering"]
lang: en
urlSlug: dropped-prod-db
draft: false
---

Have you ever dropped a production database? I have. 😂

This was years ago, back when I was a PHP developer at a cashback service called Kopikot, Bonusway's Russian-market product. Near the end of the day I finished a big feature that had been dragging on for a while, shipped it, and picked up the next task to read through and think about. While I was at it, I decided to refresh my local database. The project had no migrations, so the only way to keep local data current was to grab a fresh dump from prod.

I SSHed in, created the dump, opened phpMyAdmin, and dropped the database to replace it with the fresh dump. Except I was on the wrong browser tab. I dropped production.

I immediately messaged the CTO that something bad had happened and I was fixing it. He asked if it was under control. I said I was already working on the restore.

Fortunately the dump was fresh, no data was lost, and the service came back up. The restore took about 15-20 minutes. Very long minutes. And it was not my finest moment.

There were no consequences. The CTO just wrote back to be more careful next time.

After that I started double-checking before any destructive database operation. And we finally set up a separate user with restricted permissions who physically couldn't drop prod.
