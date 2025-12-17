---
title: CSS Base Style
date: 2025-12-17
category: webdev
tags: [css]
excerpt: Variable-based, CSS style.
---

```css
:root {
  --color-primary: #1d4ed8;
  --color-primary-light: #3b82f6;
  --color-primary-dark: #1e40af;

  --color-secondary: #f59e0b;
  --color-secondary-light: #fcd34d;
  --color-secondary-dark: #b45309;

  --color-white: #ffffff;
  --color-gray-100: #f3f4f6;
  --color-gray-300: #d1d5db;
  --color-gray-500: #6b7280;
  --color-gray-700: #374151;
  --color-gray-900: #111827;

  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;

  --bg-primary: var(--color-white);
  --bg-secondary: var(--color-gray-100);

  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-700);
  --text-inverse: var(--color-white);

  --border-color: var(--color-gray-300);

  --link-color: var(--color-primary);
  --link-hover: var(--color-primary-light);
  --link-active: var(--color-primary-dark);
  --link-visited: var(--color-secondary-dark);
  --link-focus: var(--color-primary-light);

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  --font-base: 16px;
  --font-small: 0.875rem;
  --font-medium: 1rem;
  --font-large: 1.25rem;
  --font-xlarge: 2rem;

  --line-height-base: 1.6;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-gray-900);
    --bg-secondary: var(--color-gray-700);
    --text-primary: var(--color-white);
    --text-secondary: var(--color-gray-300);
    --text-inverse: var(--color-gray-900);
    --border-color: var(--color-gray-500);

    --link-color: var(--color-primary-light);
    --link-hover: var(--color-primary);
    --link-active: var(--color-primary-dark);
    --link-visited: var(--color-secondary-light);
    --link-focus: var(--color-primary);
  }
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  font-size: var(--font-base);
  line-height: var(--line-height-base);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0 0 var(--space-md) 0;
  color: var(--text-primary);
  font-weight: 600;
}

p {
  margin: 0 0 var(--space-md) 0;
  color: var(--text-secondary);
  line-height: var(--line-height-base);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: var(--space-sm);
  border-radius: 4px;
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: color 0.2s ease, text-decoration 0.2s ease;
}

a:hover {
  color: var(--link-hover);
  text-decoration: underline;
}

a:active {
  color: var(--link-active);
}

a:visited {
  color: var(--link-visited);
}

a:focus {
  outline: 2px solid var(--link-focus);
  outline-offset: 2px;
}

button {
  background-color: var(--color-primary);
  color: var(--text-inverse);
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: var(--color-primary-light);
}

button:active {
  background-color: var(--color-primary-dark);
}

#__next, #root {
  isolation: isolate;
}

```
