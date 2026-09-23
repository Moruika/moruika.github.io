---
layout: default
title: Блог
permalink: /ru/blog/
lang: ru
description: "Записи Morui / Moruika об играх, разработке, творчестве, сайте и текущих проектах."
lang_alt_url: /blog/
section_label: "БЛОГ / 04"
date: 2026-09-23
last_modified_at: 2026-09-23
---

{% assign ru_posts = site.posts | where: "lang", "ru" %}
<section class="blog-hero">
  <div>
    <span class="eyebrow">ЗАПИСКИ // {{ ru_posts.size }}</span>
    <h1 class="section-title">Блог</h1>
    <p class="lede">Короткие заметки о запуске, разработке, играх, экспериментах и изменениях, которые хочется сохранить в архиве.</p>
  </div>
  <div class="blog-stats">
    <div><span>ЗАПИСИ</span><strong>{% if ru_posts.size < 10 %}0{% endif %}{{ ru_posts.size }}</strong></div>
    <div><span>ФОРМАТ</span><strong>ДЕВЛОГ</strong></div>
    <a href="{{ '/feed.xml' | relative_url }}">RSS / ЛЕНТА ↗</a>
  </div>
</section>

{% if ru_posts.size > 0 %}
  {% assign latest_post = ru_posts.first %}
  <article class="blog-latest">
    <div class="blog-latest-mark">01</div>
    <div>
      <span class="post-label">{{ latest_post.category | default: 'ЗАПИСКА' }}</span>
      <h2><a href="{{ latest_post.url | relative_url }}">{{ latest_post.title }}</a></h2>
      {% if latest_post.description %}<p>{{ latest_post.description }}</p>{% endif %}
    </div>
    <time datetime="{{ latest_post.date | date_to_xmlschema }}">{{ latest_post.date | date: "%-d.%m.%Y" }}</time>
  </article>

  <section class="blog-archive" aria-label="Все записи блога">
    <div class="blog-archive-head"><span>ВСЕ ЗАПИСИ</span><span>{% if ru_posts.size < 10 %}0{% endif %}{{ ru_posts.size }}</span></div>
    <ul class="post-list">
      {% for post in ru_posts offset:1 %}
      <li>
        <span class="post-date">{{ post.date | date: "%-d.%m.%Y" }}</span>
        <div>
          <span class="post-label">{{ post.category | default: 'ЗАПИСКА' }}</span>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
    {% if ru_posts.size == 1 %}
      <p class="blog-archive-empty">Первая запись уже наверху. Новые заметки будут собираться здесь по мере роста архива.</p>
    {% endif %}
  </section>
{% else %}
  <section class="blog-empty">
    <strong>Записей пока нет.</strong>
    <p>Архив готов для заметок о разработке, обновлениях проектов, играх и других коротких записей.</p>
  </section>
{% endif %}

<p class="blog-note">English posts are published in the English section.</p>
