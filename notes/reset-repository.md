---
title: Resetting A Repository
date: 2025-12-17
category: tools
tags:
  - unix
excerpt: How to reset a git repository.
---

## Existing git repository

If `if (!repository)`, clone it:

```bash
git clone <remote repository>
cd <repository>
```

To check the remote url of the repo:

```bash
git remote -v
```

## Resetting git repo

Remove all git history:

```bash
rm -rf .git
```

Reinitialize git:

```bash
git init
```

## Reconnect Repo to GitHub

Get and copy the repo's url:

```bash
git remote add origin <remote-repository-url>
```

There should be at least one file to commit.

```bash
git commit -m "Reset repository"
```

## Force `push` to GitHub

```bash
git push --force origin main
```

Replace `main` withh the branch name if it's different.
