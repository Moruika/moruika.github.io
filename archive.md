---
layout: default
title: Archive
permalink: /archive/
lang: en
description: "Photo archive of Cult Of Maids team members."
lang_alt_url: /ru/archive/
date: 2026-10-08
last_modified_at: 2026-10-08
section_label: "ARCHIVE / 06"
---
<section class="archive-people-hero">
  <div><span class="eyebrow">CULT OF MAIDS // ARCHIVE</span><h1 class="section-title">Archive</h1></div>
</section>
<section class="archive-people-grid archive-photo-wall" aria-label="Cult Of Maids team photographs">
{% for member in site.data.roster %}
  {% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}
  <figure class="archive-person {% if member.status == 'core' %}archive-core{% elsif member.status == 'reserve' %}archive-reserve{% else %}archive-staff{% endif %}">
    <button class="gallery-open" data-lightbox-src="{{ avatar_path | relative_url }}" data-lightbox-alt="{{ member.name }} — Cult Of Maids">
      <span class="archive-photo"><img src="{{ avatar_path | relative_url }}" alt="{{ member.name }} — Cult Of Maids" width="512" height="512" loading="lazy" decoding="async"></span>
      <figcaption><span class="archive-number">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span><strong>{{ member.name }}</strong><span>{% if member.status == 'core' %}CORE{% elsif member.status == 'reserve' %}RESERVE{% else %}STAFF{% endif %}</span></figcaption>
    </button>
  </figure>
{% endfor %}
</section>
<dialog class="lightbox"><button class="lightbox-close" aria-label="Close image">×</button><img class="lightbox-image" alt=""></dialog>
