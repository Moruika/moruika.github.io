---

layout: default
title: Cult Of Maids — Dota 2 Team
permalink: /team/
lang: en
description: "Cult Of Maids — Dota 2 team founded in 2021. History, achievements, and current roster."
lang_alt_url: /ru/team/
date: 2026-09-18
last_modified_at: 2026-09-25
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
  </div>
</section>

{% include last-match.html %}


<section class="team-overview"><div><span class="eyebrow">TEAM FILE // 2021—NOW</span><p class="team-lede">Cult Of Maids is a Dota 2 team built around a long-running core, flexible roles and an intentionally informal identity. This page keeps the competitive record, roster changes and player background in one place.</p></div><div class="team-overview-facts"><span><b>2021</b> founded</span><span><b>5</b> active core</span><span><b>1</b> turbo title</span></div></section>
{% include achievements.html %}

{% include team-history.html %}

{% include roster.html %}

{% include team-jsonld.html %}
