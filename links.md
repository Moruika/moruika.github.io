---
layout: default
title: Блог
permalink: /ru/blog/
lang: ru
description: "Записи Morui / Moruika об играх, разработке, творчестве, сайте и текущих проектах."
lang_alt_url: /blog/
date: 2026-09-18
---

<h1 class="section-title">Блог</h1>

{% assign ru_posts = site.posts | where: "lang", "ru" %}
{% if ru_posts.size > 0 %}
<ul class="post-list">
  {% for post in ru_posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%-d.%m.%Y" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>{{ site.data.ui.ru.blog_empty }}</p>
{% endif %}

<p class="blog-note">{{ site.data.ui.ru.blog_note }}</p>
