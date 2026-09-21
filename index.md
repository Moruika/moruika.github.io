---
layout: default
title: Архив
permalink: /ru/archive/
lang: ru
description: "Визуальный архив Morui / Moruika — галерея, изображения команды, клипы и медиафрагменты."
lang_alt_url: /archive/
date: 2026-09-21
last_modified_at: 2026-09-21
---

<h1 class="section-title">{{ site.data.ui.ru.archive_title }}</h1>
<p class="lede">Спокойное место для фотографий, клипов, старых скриншотов, арта, игровых моментов и всего, что хочется оставить в архиве.</p>

<section class="archive-section">
  <div class="archive-section-head"><span class="eyebrow">ВИЗУАЛ // 01</span><h2>{{ site.data.ui.ru.archive_gallery }}</h2><p>{{ site.data.ui.ru.archive_gallery_note }}</p></div>
  <div class="gallery-grid">
    {% for item in site.data.gallery %}
    <figure class="gallery-card">
      <a href="{{ item.image | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ item.image | relative_url }}" alt="{{ item.title_ru }}" width="{{ item.width }}" height="{{ item.height }}" loading="lazy" decoding="async">
      </a>
      <figcaption><strong>{{ item.title_ru }}</strong><span>{{ item.note_ru }}</span></figcaption>
    </figure>
    {% endfor %}
  </div>
</section>

<section class="archive-section">
  <div class="archive-section-head"><span class="eyebrow">ВИДЕО // 02</span><h2>{{ site.data.ui.ru.archive_clips }}</h2><p>{{ site.data.ui.ru.archive_clips_note }}</p></div>
  {% if site.data.clips.size > 0 %}
    <div class="clip-grid">
      {% for clip in site.data.clips %}<a class="clip-card" href="{{ clip.url }}" target="_blank" rel="noopener noreferrer"><span>{{ clip.platform }}</span><strong>{{ clip.title }}</strong><small>{{ clip.note_ru }}</small></a>{% endfor %}
    </div>
  {% else %}
    <div class="clip-empty"><span>REC // 00</span><strong>Клипы пока не добавлены.</strong><p>Добавь первую запись в <code>_data/clips.yml</code>.</p></div>
  {% endif %}
</section>

<div class="ornament"><span>✦</span></div>
