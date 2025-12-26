---
title: Killing A Running Server
date: 2025-12-15
category: webdev
tags: [unix]
excerpt: How to kill a running local server.
---

To kill the running server:

```bash
sudo lsof -wni tcp:4000
```

This command outputs some text, including the process' PID.

```bash
sudo kill -9 PID
```
