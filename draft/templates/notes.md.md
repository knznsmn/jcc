<%*
const title = await tp.system.prompt("Enter note title");
const filename = title
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^a-z0-9\-]/g, "");

tp.file.rename(filename);
%>

---
title: <% title %>
date: <% tp.date.now("YYYY-MM-DD") %>
category: tools
tags: <% await tp.system.prompt("Enter tags") %>
excerpt: <% await tp.system.prompt("Enter excerpt") %>
---