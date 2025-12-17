---
title: CSS Reset 
date: 2025-12-17
category: webdev
tags:
  - css, react
excerpt: CSS snippet for CSS reset.
---

## CSS Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  overflow-wrap: break-word;
  word-break: break-word;
}
#__next, #root {
  isolation: isolate;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  border: none;
  background: none;
  cursor: pointer;
}
```
