---
title: Using Valgrind
date: 2026-01-03
category: programming
tags: [c]
excerpt: Using valgrind to analyze memories.
---

Valgrind is a memory error detector, it says so.

To install:

```bash
sudo apt install valgrind
```

Compile source:

```bash
cc -g -O0 -Wall -Werror -Wextra main.c
```

Then run it via valgrind:

```bash
valgrind --leak-check=full --track-origins=yes ./a.out 
```
