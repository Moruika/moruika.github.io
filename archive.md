---
layout: default
title: Archive
permalink: /archive/
lang: en
description: "Photo archive of Cult Of Maids: portraits of every player, reserve and coach, with a full-size lightbox."
last_modified_at: 2026-10-12
lang_alt_url: /ru/archive/
section_label: "ARCHIVE / 06"
---
<section class="archive-people-head">
  <div><span class="eyebrow">CULT OF MAIDS</span><h1 class="section-title">Archive</h1></div>
  <span class="archive-people-count">{% assign roster_total = site.data.roster | size %}{% if roster_total < 10 %}0{% endif %}{{ roster_total }} <small>Team</small></span>
</section>
<section class="archive-people-wall" aria-label="Team photographs">
{% for member in site.data.roster %}
  {% assign dname = member.name %}{% assign alias = member.alias_en %}
  {% if member.name == 'Morui' %}{% assign avatar_path = '/assets/img/morui-avatar-512.webp' %}{% else %}{% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}{% endif %}
  <figure class="archive-portrait">
    <button type="button" class="gallery-open" data-lightbox-src="{{ avatar_path | relative_url }}" data-lightbox-alt="{{ dname }}">
      <img src="{{ avatar_path | relative_url }}" alt="Portrait of {{ dname }}" width="512" height="512" loading="lazy" decoding="async">
      <figcaption><span>{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span><strong>{{ dname }}</strong>{% if alias != blank %}<em class="archive-epithet">{{ alias }}</em>{% endif %}</figcaption>
    </button>
  </figure>
{% endfor %}
</section>
<dialog class="lightbox"><button class="lightbox-close" aria-label="Close image">×</button><img class="lightbox-image" alt=""></dialog>
