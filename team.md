---
layout: default
title: Cult Of Maids — Dota 2 Team
permalink: /team/
lang: en
description: "Cult Of Maids — Dota 2 team founded in 2021. History, achievements, and current roster."
lang_alt_url: /ru/team/
date: 2026-09-18
last_modified_at: 2026-10-12
section_label: "TEAM / 03"
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo = site.static_files | where: 'path', '/assets/img/cult-of-maids.webp' | first %}
    {% if team_logo %}
      <picture>
        <source srcset="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" type="image/webp">
        <img src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" alt="Cult Of Maids emblem" width="122" height="122" decoding="async">
      </picture>
    {% else %}
      <img src="{{ '/assets/img/cult-of-maids.svg' | relative_url }}" alt="Cult Of Maids emblem" width="122" height="122" decoding="async">
    {% endif %}
  </div>
  <div>
    <span class="eyebrow">{{ site.data.ui.en.team_eyebrow }}</span>
    <h1 class="section-title">Cult Of Maids</h1>
    <p class="team-subtitle">{{ site.data.ui.en.team_subtitle }}</p>
    {% include team-years.html %}
  </div>
</section>

{% include last-match.html %}



<p>Cult Of Maids began during the COVID era as a small group playing whatever was available. In time, Dota 2 became the centre of gravity. Casual matches grew rituals, tournaments and a shared goal that the team does not always describe in the same words.</p>

<p>Cult Of Maids was never interested in looking like a finished competitive formula. The team tests unusual heroes, strange combinations and decisions that only make sense after the fight. Sometimes it is calculation. Sometimes it is tradition whose origin no one remembers.</p>

<p>The team page keeps the practical side in one place: the documented achievements, current roster, and player positions. Informal achievements such as the “street respect” title stay here too because they are part of the team’s own history, even when they are not formal tournament records.</p>
{% include achievements.html %}

<h2 class="roster-title">{{ site.data.ui.en.roster_title }}</h2>
{% include roster.html %}

{% include team-jsonld.html %}
