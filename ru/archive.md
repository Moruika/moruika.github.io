---
layout: default
title: Архив
permalink: /ru/archive/
lang: ru
description: "Фотографии участников Cult Of Maids и команды Morui / Moruika."
lang_alt_url: /archive/
date: 2026-10-08
last_modified_at: 2026-10-08
section_label: "АРХИВ / 06"
---
<section class="archive-hero archive-people-hero">
  <div>
    <span class="eyebrow">CULT OF MAIDS // СОСТАВ</span>
    <h1 class="section-title">Архив</h1>
  </div>
  <div class="archive-counter"><span>СОСТАВ</span><strong>{{ site.data.roster.size }}</strong><small>УЧАСТНИКОВ</small></div>
</section>

<section class="archive-people-grid" aria-label="Участники Cult Of Maids">
{% for member in site.data.roster %}
  {% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}
  <figure class="archive-person">
    <button class="gallery-open" data-lightbox-src="{{ avatar_path | relative_url }}" data-lightbox-alt="{{ member.name }} — Cult Of Maids">
      <img src="{{ avatar_path | relative_url }}" alt="{{ member.name }} — Cult Of Maids" width="512" height="512" loading="lazy" decoding="async">
      <figcaption><strong>{{ member.name }}</strong><span>Cult Of Maids</span></figcaption>
    </button>
  </figure>
{% endfor %}
</section>

<dialog class="lightbox"><button class="lightbox-close" aria-label="Закрыть изображение">×</button><img class="lightbox-image" alt=""></dialog>
