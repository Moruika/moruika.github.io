---
layout: default
title: Followers of the Cult
permalink: /cult/
lang: en
description: "Public supporter and follower archive for Cult Of Maids and Morui."
lang_alt_url: /ru/cult/
section_label: "CULT / 07"
date: 2026-09-21
last_modified_at: 2026-10-12
---

<section class="cult-hero">
  <div>
    <span class="eyebrow">{{ site.data.ui.en.cult_kicker }}</span>
    <h1 class="section-title">{{ site.data.ui.en.cult_title }}</h1>
    <p class="cult-intro">A ledger of names that remain close to Cult Of Maids. Some supported the team openly; others preferred the shadows. An entry is only a trace, never the whole story.</p>
  </div>
  <div class="cult-seal"><img src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" alt="Cult Of Maids emblem" width="180" height="180" decoding="async"></div>
</section>

<div class="cult-ledger">
  <div class="cult-ledger-head">
    <div><span class="honor-kicker">MAIN SPONSOR · PUBLIC ROSTER</span><strong>{% assign supporter_count = site.data.supporters | size %}{% if supporter_count < 10 %}0{% endif %}{{ supporter_count }}</strong></div>
    <span>{{ site.data.ui.en.cult_edit_note }}</span>
  </div>
  {% if site.data.supporters.size > 0 %}
    <ol class="supporter-list">
      {% for person in site.data.supporters %}
        <li class="supporter-row">
          <span class="supporter-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
          <strong>{{ person.name }}</strong>
          <span class="supporter-kind">{{ person.kind | default: 'SUP' }}</span>
        </li>
      {% endfor %}
    </ol>
  {% else %}
    <div class="cult-empty">
      <strong>{{ site.data.ui.en.cult_empty_title }}</strong>
      <p>{{ site.data.ui.en.cult_empty_note }}</p>
    </div>
  {% endif %}
</div>

{% include guestbook.html %}
