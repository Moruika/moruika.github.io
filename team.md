---
layout: default
title: Cult Of Maids — Dota 2 Team
permalink: /team/
lang: en
description: "Cult Of Maids — Dota 2 team founded in 2021. History, achievements, current roster, and player profile links."
lang_alt_url: /ru/team/
date: 2026-09-18
last_modified_at: 2026-09-21
section_label: "TEAM / 02"
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo = site.static_files | where: 'path', '/assets/img/cult-of-maids.webp' | first %}
    {% if team_logo %}
      <picture>
        <source srcset="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" type="image/webp">
        <img src="{{ '/assets/img/cult-of-maids.jpg' | relative_url }}" alt="Cult Of Maids emblem" width="122" height="122" decoding="async">
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


<section class="team-facts" aria-label="Team facts">
  <div><span>FOUNDED</span><strong>2021</strong></div>
  <div><span>FORMAT</span><strong>Dota 2</strong></div>
  <div><span>PRIZE MONEY</span><strong>$250</strong></div>
  <div><span>STATUS</span><strong>Active</strong></div>
</section>

<p>From the start, Cult Of Maids has been less about following a fixed competitive formula and more about finding a style that works for the group. The team experiments with unusual heroes, unexpected combinations, fast engagements, and drafts that are chosen around the players rather than a rigid template.</p>

<p>The team page keeps the practical side in one place: the documented achievements, current roster, player positions, and external profile links. Informal achievements such as the “street respect” title stay here too because they are part of the team’s own history, even when they are not formal tournament records.</p>
<section class="team-honors" aria-label="Team achievements">
  <div class="prize-card">
    <span class="honor-kicker">{{ site.data.ui.en.prize_kicker }}</span>
    <strong>$250</strong>
    <span class="honor-note">{{ site.data.ui.en.prize_note }}</span>
  </div>

  <div class="achievements">
    <div class="achievement"><span>01</span><div><strong>Turbo Tournament Winner</strong><p>A real tournament victory earned in the team's most chaotic format.</p></div></div>
    <div class="achievement"><span>02</span><div><strong>Respect of the Streets</strong><p>A highly unofficial title earned through countless games and memorable wins.</p></div></div>
    <div class="achievement"><span>03</span><div><strong>Turbo Smurfs</strong><p>The team's unofficial reputation: fast games, strange drafts, and relentless tempo.</p></div></div>
    <div class="achievement"><span>04</span><div><strong>Wins Over Streamers</strong><p>Victories over recognizable streamers and notable ladder opponents.</p></div></div>
    <div class="achievement"><span>05</span><div><strong>European Ladder Wins</strong><p>Wins over strong players from the European matchmaking scene.</p></div></div>
    <div class="achievement"><span>06</span><div><strong>Own Draft Style</strong><p>A recognizable approach built around unusual heroes, aggressive tempo, and improvised combinations.</p></div></div>
  </div>
</section>

<h3 class="roster-title">{{ site.data.ui.en.roster_title }}</h3>
{% include roster.html %}

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"SportsTeam",
  "name":"Cult Of Maids",
  "sport":"Dota 2",
  "foundingDate":"2021",
  "url":"{{ page.url | absolute_url }}",
  "member":[
        {"@type":"Person","name":"Morui"},
        {"@type":"Person","name":"Heryn"},
        {"@type":"Person","name":"Pavuk"},
        {"@type":"Person","name":"Mamut Rahal"},
        {"@type":"Person","name":"Kodeinovi Tsar"},
        {"@type":"Person","name":"Cheburaska"},
        {"@type":"Person","name":"Prokopchelik"},
        {"@type":"Person","name":"Slanets"},
        {"@type":"Person","name":"Pozivnoi 200"},
        {"@type":"Person","name":"Rapunzel"}
  ]
}
</script>

<div class="ornament" data-end-label="END OF PAGE"><span>✦</span></div>
