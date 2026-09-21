---
layout: default
title: Cult Of Maids — Dota 2 Team
permalink: /team/
lang: en
description: "Cult Of Maids — Dota 2 team founded in 2021. History, achievements, current roster, and player profile links."
lang_alt_url: /ru/team/
date: 2026-09-18
last_modified_at: 2026-09-21
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

<p>The team was founded in 2021 and has remained active ever since, maintaining the same core lineup throughout its entire existence. Over the years, Cult Of Maids has built its own reputation within the community, picking up victories over well-known streamers and strong players from the European ladder. Gradually, the team grew from a regular stack into a collective with its own history, style, and recognizable character. The team has earned $250 in prize money, the unofficial but highly respected title of “Turbo Smurfs,” and, perhaps most importantly, a huge amount of “Respect of the Streets” accumulated throughout its existence. Another notable achievement was winning a turbo tournament, adding an actual tournament title to the team's rather unusual competitive history.</p>

<p>The main defining feature of Cult Of Maids is its unconventional and recognizable approach to drafting. The team has always been willing to experiment with unusual heroes, unexpected combinations, and ideas that may look questionable on paper — at least until they suddenly start working in practice. Combined with a fast, aggressive playstyle and a constant willingness to take fights, this became one of the team's most recognizable traits. There is a certain chaotic confidence to the Cult Of Maids approach: the goal is not only to play standard Dota 2, but to create its own rhythm and make the opponent adapt to it. Overall, this style can inevitably bring to mind the aggressive and distinctive approach once associated with the popular Gaming Gladiators, although Cult Of Maids has developed a recognizable identity of its own over time.</p>

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

<div class="ornament"><span>✦</span></div>
