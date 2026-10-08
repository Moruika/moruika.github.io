---
layout: default
title: Архив
permalink: /ru/archive/
lang: ru
description: "Фотографический архив участников Cult Of Maids."
lang_alt_url: /archive/
date: 2026-10-08
last_modified_at: 2026-10-08
section_label: "АРХИВ / 06"
---
<section class="archive-people-hero">
  <div><span class="eyebrow">CULT OF MAIDS</span><h1 class="section-title">Архив</h1></div>
  <span class="archive-count">{% assign archive_count = site.data.roster | size %}{% if archive_count < 10 %}0{% endif %}{{ archive_count }} / 10</span>
</section>
<section class="archive-people-grid archive-photo-wall" aria-label="Фотографии участников Cult Of Maids">
{% for member in site.data.roster %}
  {% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}
  <figure class="archive-person {% if member.status == 'core' %}archive-core{% elsif member.status == 'reserve' %}archive-reserve{% else %}archive-staff{% endif %}">
    <button class="gallery-open" data-lightbox-src="{{ avatar_path | relative_url }}" data-lightbox-alt="{{ member.name }} — Cult Of Maids">
      <span class="archive-photo"><img src="{{ avatar_path | relative_url }}" alt="{{ member.name }} — Cult Of Maids" width="512" height="512" loading="lazy" decoding="async"></span>
      <figcaption><span class="archive-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span><strong>{{ member.name }}</strong><span>{% if member.status == 'core' %}ОСНОВА{% elsif member.status == 'reserve' %}РЕЗЕРВ{% else %}ШТАБ{% endif %}</span></figcaption>
    </button>
  </figure>
{% endfor %}
</section>
<dialog class="lightbox"><button class="lightbox-close" aria-label="Закрыть изображение">×</button><img class="lightbox-image" alt=""></dialog>
