---
layout: default
title: Cult Of Maids — команда Dota 2
permalink: /ru/team/
lang: ru
description: "Cult Of Maids — команда по Dota 2, основанная в 2021 году. История, достижения и текущий состав."
lang_alt_url: /team/
date: 2026-09-18
last_modified_at: 2026-09-21
section_label: "КОМАНДА / 03"
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo = site.static_files | where: 'path', '/assets/img/cult-of-maids.webp' | first %}
    {% if team_logo %}
      <picture>
        <source srcset="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" type="image/webp">
        <img src="{{ '/assets/img/cult-of-maids.jpg' | relative_url }}" alt="Эмблема Cult Of Maids" width="122" height="122" decoding="async">
      </picture>
    {% else %}
      <img src="{{ '/assets/img/cult-of-maids.svg' | relative_url }}" alt="Эмблема Cult Of Maids" width="122" height="122" decoding="async">
    {% endif %}
  </div>
  <div>
    <span class="eyebrow">{{ site.data.ui.ru.team_eyebrow }}</span>
    <h1 class="section-title">Cult Of Maids</h1>
    <p class="team-subtitle">{{ site.data.ui.ru.team_subtitle }}</p>
  </div>
</section>



<p>С самого начала Cult Of Maids была не столько про следование готовой соревновательной формуле, сколько про поиск собственного стиля. Команда экспериментирует с необычными героями, неожиданными сочетаниями, быстрыми драками и драфтами, которые строятся вокруг игроков, а не жёсткого шаблона.</p>

<p>Страница команды собирает практическую часть в одном месте: зафиксированные достижения, текущий состав и позиции игроков. Неформальные достижения вроде «респекта улиц» тоже остаются здесь, потому что являются частью истории команды, даже если не относятся к официальной турнирной статистике.</p>
{% include achievements.html %}

<h3 class="roster-title">{{ site.data.ui.ru.roster_title }}</h3>
{% include roster.html %}

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"SportsTeam",
  "@id":"{{ page.url | absolute_url }}#team",
  "name":"Cult Of Maids",
  "sport":"Dota 2",
  "foundingDate":"2021",
  "url":"{{ page.url | absolute_url }}",
  "logo":"{{ '/assets/img/cult-of-maids.webp' | absolute_url }}",
  "member":[
        {"@id":"{{ site.author.url | append: '#person' }}"}{% for member in site.data.roster %}{% unless member.name == "Morui" %},
        {"@type":"Person","name":"{{ member.name }}"}{% endunless %}{% endfor %}
  ]
}
</script>

