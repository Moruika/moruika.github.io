---
layout: default
title: Archive
permalink: /archive/
lang: en
description: "Visual archive of Morui / Moruika — gallery images, team material, clips, and media fragments."
lang_alt_url: /ru/archive/
section_label: "ARCHIVE / 07"
date: 2026-09-21
last_modified_at: 2026-09-21
---

<h1 class="section-title">Archive</h1>
<p class="lede">A quieter place for images, old screenshots, team material, art, game moments, and things that are worth keeping even when they are no longer current.</p>

<section class="archive-section">
  <div class="archive-section-head"><span class="eyebrow">VISUAL // 01</span><h2>{{ site.data.ui.en.archive_gallery }}</h2><p>{{ site.data.ui.en.archive_gallery_note }}</p></div>
  <div class="gallery-grid">
    {% for item in site.data.gallery %}
    <figure class="gallery-card">
      <button class="gallery-open" type="button" data-lightbox-src="{{ item.image | relative_url }}" data-lightbox-alt="{{ item.title_en }}" aria-label="Open {{ item.title_en }}">
        <img src="{{ item.image | relative_url }}" alt="{{ item.title_en }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
      </button>
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
    <div class="clip-empty"><span>REC // 00</span><strong>No clips have been added yet.</strong><p>Add the first entry to <code>_data/clips.yml</code>.</p></div>
  {% endif %}
</section>

<dialog class="lightbox" aria-label="Image preview">
  <button class="lightbox-close" type="button" aria-label="Close image preview">×</button>
  <img class="lightbox-image" alt="">
</dialog>

<div class="ornament" data-end-label="END OF PAGE"><span>✦</span></div>
