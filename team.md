---

layout: default
title: Cult Of Maids — Dota 2 Team
permalink: /team/
lang: en
description: "Cult Of Maids — Dota 2 team founded in 2021. History, achievements, and current roster."
image: "/assets/img/cult-of-maids.jpg"
image_alt: "Cult Of Maids emblem"
lang_alt_url: /ru/team/
date: 2026-09-18
last_modified_at: 2026-09-25
section_label: "TEAM / 03"
image_width: 244
image_height: 244
image_type: "image/jpeg"
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



<p>From the start, Cult Of Maids has been less about following a fixed competitive formula and more about finding a style that works for the group. The team experiments with unusual heroes, unexpected combinations, fast engagements, and drafts that are chosen around the players rather than a rigid template.</p>

<p>The team page keeps the practical side in one place: the documented achievements, current roster, and player positions. Informal achievements such as the “street respect” title stay here too because they are part of the team’s own history, even when they are not formal tournament records.</p>
{% include achievements.html %}

<h3 class="roster-title">{{ site.data.ui.en.roster_title }}</h3>
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

