---
title: Setting Up Git
date: 2025-12-15
category: tools
tags: [unix]
excerpt: Setting Up Git in Linux/MacOS.
---
## Install Git

Update the system

```bash
sudo apt update
sudo apt full-upgrade
```

Install Git

```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

Verify version

```bash
git --version
```

## Setup Git

```bash
git config --global user.name "knznsmn"
git config --global user.email mail@jccesar.com
```

Change the default branch for git:

```bash
git config --global init.defaultBranch main
```

Set default branch reconciliation behavior to merging.

```bash
git config --global pull.rebase false
```

To verify that things are working properly:

```bash
git config --get user.name
git config --get user.email
```

Ignore .DS_Store files:

```bash
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## Create an SSH key

Check if an ed25529 algorithm key is already installed:

```bash
ls ~/.ssh/id_ed25519.pub
```

To create a new SSH key:

```bash
ssh-keygen -t ed25519
```

Copy the SSH key:

```bash
cat ~/.ssh/id_ed25519.pub
```

To test the key:

```bash
ssh -T git@github.com
```
