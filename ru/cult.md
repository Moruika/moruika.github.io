---
layout: default
title: Последователи культа
permalink: /ru/cult/
lang: ru
description: "Подписчики и люди, поддержавшие Cult Of Maids — публичный список сообщества Morui / Moruika."
lang_alt_url: /cult/
date: 2026-09-21
last_modified_at: 2026-09-21
section_label: "КУЛЬТ / 07"
---

<section class="cult-hero">
  <div>
    <span class="eyebrow">{{ site.data.ui.ru.cult_kicker }}</span>
    <h1 class="section-title">{{ site.data.ui.ru.cult_title }}</h1>
    <p class="cult-intro">{{ site.data.ui.ru.cult_intro }}</p>
  </div>
  <div class="cult-seal"><img src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" alt="Эмблема Cult Of Maids" width="180" height="180" decoding="async"></div>
</section>

<div class="cult-ledger">
  <div class="cult-ledger-head">
    <div><span class="honor-kicker">ПУБЛИЧНЫЙ РЕЕСТР</span><strong>{% assign supporter_count = site.data.supporters | size %}{% if supporter_count < 10 %}0{% endif %}{{ supporter_count }}</strong></div>
    <span>{{ site.data.ui.ru.cult_edit_note }}</span>
  </div>

  {% if site.data.supporters.size > 0 %}
    <ol class="supporter-list">
      {% for person in site.data.supporters %}
        <li class="supporter-row">
          <span class="supporter-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
          <strong>{{ person.name }}</strong>
          <span class="supporter-kind">{{ person.kind | default: 'SUP' }}</span>
          {% if person.url != blank %}<a href="{{ person.url }}" target="_blank" rel="noopener noreferrer">↗</a>{% endif %}
        </li>
      {% endfor %}
    </ol>
  {% else %}
    <div class="cult-empty">
      <strong>{{ site.data.ui.ru.cult_empty_title }}</strong>
      <p>{{ site.data.ui.ru.cult_empty_note }}</p>
    </div>
  {% endif %}
</div>

