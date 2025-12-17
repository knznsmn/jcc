---
title: Setting Up Linux
date: 2025-12-15
category: tools
tags: [unix]
excerpt: Setting Up Debian/Ubuntu Linux for development.
---

## Which distro though

There are several Linux distributions that I find fascinating (at least among those I’ve tried):

- LMDE
- Linux Mint
- Elementary OS
- Ubuntu Budgie
- KDE Neon

They all function in essentially the same way though.

## Update the system

```bash
sudo apt update && sudo apt full-upgrade -y
```

Install some packages for later steps:

```bash
sudo apt update && sudo apt install -y software-properties-common
```

Install Nvidia driver

```bash
sudo apt install nvidia-driver
```

Install firewall:

```bash
sudo apt update && sudo apt install -y ufw && sudo ufw default deny incoming && sudo ufw default allow outgoing && sudo ufw allow ssh && sudo ufw limit ssh && sudo ufw allow from 127.0.0.1 to any port 3000 && sudo ufw allow from 127.0.0.1 to any port 8000 && sudo ufw allow from 127.0.0.1 to any port 5173 && sudo ufw allow from ::1 to any port 3000 && sudo ufw allow from ::1 to any port 8000 && sudo ufw allow from ::1 to any port 5173 && sudo ufw enable
```

Verify the rules:

```bash
sudo ufw status verbose
```

## Install the tools

```bash
sudo apt update && sudo apt install -y build-essential git python3 python3-pip lua5.4 default-jdk wget curl
```

Install neovim:

```bash
sudo add-apt-repository ppa:neovim-ppa/unstable && sudo apt update && sudo apt install -y neovim
```

Make `nvim` the default vim:

```bash
sudo update-alternatives --install /usr/bin/vi vi /usr/bin/nvim 60 && sudo update-alternatives --install /usr/bin/vim vim /usr/bin/nvim 60 && sudo update-alternatives --set vi /usr/bin/nvim && sudo update-alternatives --set vim /usr/bin/nvim
```

Download a nerd font:

```bash
wget -O /tmp/JetBrainsMono.zip https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/JetBrainsMono.zip && unzip /tmp/JetBrainsMono.zip -d /tmp/JetBrainsMono && sudo mkdir -p /usr/share/fonts/truetype/JetBrainsMono && sudo cp /tmp/JetBrainsMono/*.ttf /usr/share/fonts/truetype/JetBrainsMono/ && sudo fc-cache -fv && rm -rf /tmp/JetBrainsMono /tmp/JetBrainsMono.zip
```

Install NvChad:

```bash
git clone https://github.com/NvChad/starter ~/.config/nvim && nvim
```

Install `oh-my-bash`:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```

Install `node`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm install 24 && node -v && npm -v
```

Install `code`:

```bash
wget -O /tmp/vscode.deb https://update.code.visualstudio.com/latest/linux-deb-x64/stable && sudo dpkg -i /tmp/vscode.deb && sudo apt -f install -y && rm /tmp/vscode.deb
```

Install Obsidian:

```bash
wget -O /tmp/obsidian.deb "$(wget -qO- https://api.github.com/repos/obsidianmd/obsidian-releases/releases/latest | grep 'browser_download_url.*deb"' | cut -d '"' -f 4)" && sudo dpkg -i /tmp/obsidian.deb && sudo apt -f install -y && rm /tmp/obsidian.deb
```

Install Firefox:

```bash
sudo snap remove firefox --purge && sudo mkdir -p /etc/apt/keyrings && wget -qO- https://packages.mozilla.org/apt/repo-signing-key.gpg | sudo tee /etc/apt/keyrings/mozilla.asc > /dev/null && echo "deb [signed-by=/etc/apt/keyrings/mozilla.asc] https://packages.mozilla.org/apt/ mozilla main" | sudo tee /etc/apt/sources.list.d/mozilla.list > /dev/null && echo -e "Package: *\nPin: origin packages.mozilla.org\nPin-Priority: 1001" | sudo tee /etc/apt/preferences.d/mozilla.pref > /dev/null && sudo apt update && sudo apt install -y firefox
```

Install Brave browser:

```bash
wget -O brave.deb https://github.com/brave/brave-browser/releases/latest/download/brave-browser_amd64.deb && sudo dpkg -i brave.deb || sudo apt -f install -y && rm -f brave.deb
```




## Configurations

Disable `grub` delay

```bash
sudo vim /etc/default/grub
```

## Troubleshooting Common Issues

Broken `libdvd-pkg`:

```bash
sudo dpkg-reconfigure libdvd-pkg
```

