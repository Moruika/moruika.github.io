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



<p>Cult Of Maids began during the COVID era as a small group playing whatever was available on PC. There was no polished structure at the start: people gathered for games, tried different titles and gradually returned to Dota 2 more often than anything else. Over time, casual matches grew into tournaments, familiar roles, internal traditions and a shared ambition to see how far the team could go.</p>

<p>The shift towards a more serious approach did not erase the group’s original character. Cult Of Maids still values experimentation, unusual hero choices and strategies that can look questionable until they work. The roster has its own language of nicknames, match stories and running jokes; some are rooted in genuine achievements, others survive because nobody can remember the original context anymore.</p>

<p>Today, the project is about more than queueing together. The team keeps developing its roster, learning to coordinate more consistently and preparing for stronger competition, while also preserving the humour that made the group recognisable in the first place. Ambition and nonsense coexist here quite comfortably: one day the discussion is about roles and tournament preparation, the next it is about an impossible hook or a new title invented after a single match.</p>

<p>This page brings the practical record together: the current roster, player positions and documented achievements. Informal honours such as “street respect” remain part of the story too. They may not belong in an official tournament database, but they explain the team at least as well as a win-loss record can.</p>
{% include achievements.html %}

<h2 class="roster-title">{{ site.data.ui.en.roster_title }}</h2>
{% include roster.html %}

{% include team-jsonld.html %}
