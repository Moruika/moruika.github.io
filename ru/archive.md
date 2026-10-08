---
layout: default
title: Архив
permalink: /ru/archive/
lang: ru
description: "Фотографии участников Cult Of Maids."
lang_alt_url: /archive/
section_label: "АРХИВ / 06"
---
<section class="archive-people-head">
  <div><span class="eyebrow">CULT OF MAIDS</span><h1 class="section-title">Архив</h1></div>
  <span class="archive-people-count">{{ site.data.roster | size | prepend: '0' }} <small>Состав</small></span>
</section>
<section class="archive-people-wall" aria-label="Фотографии состава">
{% for member in site.data.roster %}
  {% assign avatar_path = '/assets/img/roster/' | append: member.avatar | append: '.webp' %}
  <figure class="archive-portrait">
    <button class="gallery-open" data-lightbox-src="{{ avatar_path | relative_url }}" data-lightbox-alt="{{ member.name }}">
      <img src="{{ avatar_path | relative_url }}" alt="{{ member.name }}" width="512" height="512" loading="lazy" decoding="async">
      <figcaption><span>{{ forloop.index | prepend: '0' }}</span><strong>{{ member.name }}</strong></figcaption>
    </button>
  </figure>
{% endfor %}
</section>
<dialog class="lightbox"><button class="lightbox-close" aria-label="Закрыть изображение">×</button><img class="lightbox-image" alt=""></dialog>
