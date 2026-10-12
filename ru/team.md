---
layout: default
title: Cult Of Maids — команда Dota 2
permalink: /ru/team/
lang: ru
description: "Cult Of Maids — команда по Dota 2, основанная в 2021 году. История, достижения и текущий состав."
lang_alt_url: /team/
date: 2026-09-18
last_modified_at: 2026-10-12
section_label: "КОМАНДА / 03"
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo = site.static_files | where: 'path', '/assets/img/cult-of-maids.webp' | first %}
    {% if team_logo %}
      <picture>
        <source srcset="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" type="image/webp">
        <img src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" alt="Эмблема Cult Of Maids" width="122" height="122" decoding="async">
      </picture>
    {% else %}
      <img src="{{ '/assets/img/cult-of-maids.svg' | relative_url }}" alt="Эмблема Cult Of Maids" width="122" height="122" decoding="async">
    {% endif %}
  </div>
  <div>
    <span class="eyebrow">{{ site.data.ui.ru.team_eyebrow }}</span>
    <h1 class="section-title">Cult Of Maids</h1>
    <p class="team-subtitle">{{ site.data.ui.ru.team_subtitle }}</p>
    {% include team-years.html %}
  </div>
</section>

{% include last-match.html %}



<p>Cult Of Maids появилась во времена COVID-19 как небольшая компания, которая играла во всё подряд на ПК. В начале не было ни строгой структуры, ни большого плана: люди собирались ради игр, пробовали разные проекты и постепенно всё чаще возвращались в Dota 2. Обычные матчи со временем превратились в турниры, привычные роли, внутренние традиции и общую амбицию проверить, насколько далеко команда сможет зайти.</p>

<p>Более серьёзный подход не отменил первоначальный характер коллектива. Cult Of Maids по-прежнему любит эксперименты, необычные пики и стратегии, которые выглядят сомнительно до тех пор, пока внезапно не срабатывают. У ростера есть собственный язык прозвищ, историй из матчей и постоянных шуток: часть из них выросла из реальных игровых эпизодов, а часть живёт потому, что исходный контекст уже никто не помнит.</p>

<p>Сейчас проект — это не только совместный поиск матчей. Команда продолжает развивать состав, учится стабильнее взаимодействовать и готовится к более серьёзным соперникам, стараясь при этом сохранить юмор, благодаря которому её вообще можно узнать. Амбиции и абсурд здесь спокойно уживаются: сегодня обсуждают роли и подготовку к турнирам, а завтра — невозможный хук или новый титул, придуманный после одной игры.</p>

<p>На этой странице собрана практическая часть истории: текущий состав, позиции игроков и зафиксированные достижения. Неформальные награды вроде «респекта улиц» тоже остаются в летописи. Возможно, им не место в официальной турнирной базе, но они объясняют команду не хуже, чем таблица побед и поражений.</p>
{% include achievements.html %}

<h2 class="roster-title">{{ site.data.ui.ru.roster_title }}</h2>
{% include roster.html %}

{% include team-jsonld.html %}
