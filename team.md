---
layout: default
title: Team
permalink: /team/
lang: en
lang_alt_url: /ru/team/
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo_png = site.static_files | where: 'path', '/assets/img/cult-of-maids.png' | first %}
    {% if team_logo_png %}
      <img src="{{ '/assets/img/cult-of-maids.png' | relative_url }}" alt="Cult Of Maids emblem" decoding="async">
    {% else %}
      <img src="{{ '/assets/img/cult-of-maids.svg' | relative_url }}" alt="Cult Of Maids emblem" decoding="async">
    {% endif %}
  </div>
  <div>
    <span class="eyebrow">{{ site.data.ui.en.team_eyebrow }}</span>
    <h2 class="section-title">Cult Of Maids</h2>
    <p class="team-subtitle">{{ site.data.ui.en.team_subtitle }}</p>
  </div>
</section>

<p>The team was founded in 2021 and has remained active ever since, maintaining the same core lineup throughout its entire existence. Over the years, Cult Of Maids has built its own reputation within the community, picking up victories over well-known streamers and strong players from the European ladder, while gradually turning from simply a regular stack into a team with its own identity and history. The team has earned $250 in prize winnings, the unofficial but highly respected title of “Turbo Smurfs,” and, perhaps even more importantly, a considerable amount of “Respect of the Streets” along the way. Another notable achievement was winning a turbo tournament, adding an actual trophy to what is otherwise a rather unconventional competitive journey.</p>

<p>The defining trait of Cult Of Maids is its unconventional and recognizable approach to drafting. The team has always been willing to experiment with unusual heroes, unexpected combinations, and ideas that would probably look questionable on paper — until they somehow work in practice. Combined with a fast-paced, aggressive playstyle and a constant willingness to take fights, this has become one of the team's most recognizable characteristics. There is a certain chaotic confidence to the way Cult Of Maids approaches the game: the goal is not simply to play standard Dota, but to create its own rhythm and force the opponent to adapt to it. The overall style can inevitably bring to mind the aggressive and distinctive approach once associated with the popular Gaming Gladiators, although Cult Of Maids has developed its own identity over time.</p>

<section class="team-honors" aria-labelledby="team-honors-title">
  <div class="prize-card">
    <span class="honor-kicker">{{ site.data.ui.en.prize_kicker }}</span>
    <strong>$250</strong>
    <span class="honor-note">{{ site.data.ui.en.prize_note }}</span>
  </div>

  <div class="achievements">
    <div class="achievement"><span>01</span><div><strong>Turbo Tournament Winner</strong><p>A real tournament victory forged in the team's most chaotic format.</p></div></div>
    <div class="achievement"><span>02</span><div><strong>Respect of the Streets</strong><p>A very unofficial title, earned through countless games and memorable wins.</p></div></div>
    <div class="achievement"><span>03</span><div><strong>Turbo Smurfs</strong><p>The team's unofficial competitive reputation — fast games, weird drafts, ruthless tempo.</p></div></div>
    <div class="achievement"><span>04</span><div><strong>Streamer Upsets</strong><p>Victories over recognizable streamers and high-profile opponents from the ladder.</p></div></div>
    <div class="achievement"><span>05</span><div><strong>European Ladder Victories</strong><p>Wins against strong players from the European matchmaking scene.</p></div></div>
    <div class="achievement"><span>06</span><div><strong>Own Draft Identity</strong><p>A signature approach built around unusual heroes, aggressive tempo and improvised combinations.</p></div></div>
  </div>
</section>

<h3 class="roster-title">{{ site.data.ui.en.roster_title }}</h3>
<ul class="roster-cards">
  <li class="member-card featured">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/morui.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/morui.png' | relative_url }}" alt="Morui" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">MO</span>{% endif %}
</div><div><strong>Morui</strong><span>Captain · pos 3/4</span></div><b>01</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/heryn.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/heryn.png' | relative_url }}" alt="Heryn" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">HY</span>{% endif %}
</div><div><strong>Heryn</strong><span>Coach</span></div><b>02</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/pavuk.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/pavuk.png' | relative_url }}" alt="Pavuk" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">PV</span>{% endif %}
</div><div><strong>Pavuk</strong><span>pos 3/4</span></div><b>03</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/mamut-rahal.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/mamut-rahal.png' | relative_url }}" alt="Mamut Rahal" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">MR</span>{% endif %}
</div><div><strong>Mamut Rahal</strong><span>pos 1</span></div><b>04</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/kodeinovi-tsar.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/kodeinovi-tsar.png' | relative_url }}" alt="Kodeinovi Tsar" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">KЦ</span>{% endif %}
</div><div><strong>Kodeinovi Tsar</strong><span>pos 2</span></div><b>05</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/cheburaska.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/cheburaska.png' | relative_url }}" alt="Cheburaska" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">ЧБ</span>{% endif %}
</div><div><strong>Cheburaska</strong><span>pos 5</span></div><b>06</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/prokopchelik.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/prokopchelik.png' | relative_url }}" alt="Prokopchelik" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">ПЧ</span>{% endif %}
</div><div><strong>Prokopchelik</strong><span>pos 6</span></div><b>07</b></li>
</ul>

<div class="ornament"><span>✦</span></div>
