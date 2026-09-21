---
layout: default
title: Archive
permalink: /archive/
lang: en
description: "Morui / Moruika visual archive — gallery, team imagery, short clips, and media fragments."
lang_alt_url: /ru/archive/
date: 2026-09-21
last_modified_at: 2026-09-21
---

<h1 class="section-title">{{ site.data.ui.en.archive_title }}</h1>
<p class="lede">A low-pressure space for images, clips, old screenshots, sketches, match moments, and anything else that belongs to the archive.</p>

<section class="archive-section">
  <div class="archive-section-head"><span class="eyebrow">VISUAL // 01</span><h2>{{ site.data.ui.en.archive_gallery }}</h2><p>{{ site.data.ui.en.archive_gallery_note }}</p></div>
  <div class="gallery-grid">
    {% for item in site.data.gallery %}
    <figure class="gallery-card">
      <a href="{{ item.image | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ item.image | relative_url }}" alt="{{ item.title_en }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
      </a>
      <figcaption><strong>{{ item.title_en }}</strong><span>{{ item.note_en }}</span></figcaption>
    </figure>
    {% endfor %}
  </div>
</section>

<section class="archive-section">
  <div class="archive-section-head"><span class="eyebrow">VIDEO // 02</span><h2>{{ site.data.ui.en.archive_clips }}</h2><p>{{ site.data.ui.en.archive_clips_note }}</p></div>
  {% if site.data.clips.size > 0 %}
    <div class="clip-grid">
      {% for clip in site.data.clips %}<a class="clip-card" href="{{ clip.url }}" target="_blank" rel="noopener noreferrer"><span>{{ clip.platform }}</span><strong>{{ clip.title }}</strong><small>{{ clip.note_en }}</small></a>{% endfor %}
    </div>
  {% else %}
    <div class="clip-empty"><span>REC // 00</span><strong>No clips logged yet.</strong><p>Add your first entry to <code>_data/clips.yml</code>.</p></div>
  {% endif %}
</section>

<div class="ornament"><span>✦</span></div>
