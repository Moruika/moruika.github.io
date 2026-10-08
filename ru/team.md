---

layout: default
title: Cult Of Maids — команда Dota 2
permalink: /ru/team/
lang: ru
description: "Cult Of Maids — команда по Dota 2, основанная в 2021 году. История, достижения и текущий состав."
lang_alt_url: /team/
date: 2026-09-18
last_modified_at: 2026-09-25
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
  </div>
</section>

{% include last-match.html %}


<section class="team-overview"><div><span class="eyebrow">ДОСЬЕ КОМАНДЫ // 2021—СЕЙЧАС</span><p class="team-lede">Cult Of Maids — команда по Dota 2 с постоянным ядром, гибкими ролями и намеренно неформальной идентичностью. Здесь собраны соревновательная история, изменения состава и краткий фон игроков.</p></div><div class="team-overview-facts"><span><b>2021</b> основана</span><span><b>5</b> в основе</span><span><b>1</b> победа в турбо</span></div></section>
{% include achievements.html %}

{% include team-history.html %}

{% include roster.html %}

{% include team-jsonld.html %}
