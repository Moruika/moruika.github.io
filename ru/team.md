---
layout: default
title: Cult Of Maids — команда Dota 2
permalink: /ru/team/
lang: ru
description: "Cult Of Maids — команда по Dota 2, основанная в 2021 году. История, достижения, текущий состав и ссылки на профили игроков."
lang_alt_url: /team/
date: 2026-09-18
last_modified_at: 2026-09-21
section_label: "КОМАНДА / 02"
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


<section class="team-facts" aria-label="Факты о команде">
  <div><span>ОСНОВАНА</span><strong>2021</strong></div>
  <div><span>ФОРМАТ</span><strong>Dota 2</strong></div>
  <div><span>ПРИЗОВЫЕ</span><strong>$250</strong></div>
  <div><span>СТАТУС</span><strong>Активна</strong></div>
</section>

<p>С самого начала Cult Of Maids была не столько про следование готовой соревновательной формуле, сколько про поиск собственного стиля. Команда экспериментирует с необычными героями, неожиданными сочетаниями, быстрыми драками и драфтами, которые строятся вокруг игроков, а не жёсткого шаблона.</p>

<p>Страница команды собирает практическую часть в одном месте: зафиксированные достижения, текущий состав, позиции игроков и внешние профили. Неформальные достижения вроде «респекта улиц» тоже остаются здесь, потому что являются частью истории команды, даже если не относятся к официальной турнирной статистике.</p>
<section class="team-honors" aria-label="Достижения команды">
  <div class="prize-card">
    <span class="honor-kicker">{{ site.data.ui.ru.prize_kicker }}</span>
    <strong>$250</strong>
    <span class="honor-note">{{ site.data.ui.ru.prize_note }}</span>
  </div>

  <div class="achievements">
    <div class="achievement"><span>01</span><div><strong>Победитель турбо-турнира</strong><p>Настоящая победа в турнире, добытая в самом хаотичном формате команды.</p></div></div>
    <div class="achievement"><span>02</span><div><strong>Респект улиц</strong><p>Максимально неофициальный титул, заработанный множеством игр и запоминающихся побед.</p></div></div>
    <div class="achievement"><span>03</span><div><strong>Турбосмурфы</strong><p>Неофициальная репутация команды: быстрые игры, странные драфты и беспощадный темп.</p></div></div>
    <div class="achievement"><span>04</span><div><strong>Победы над стримерами</strong><p>Победы над узнаваемыми стримерами и заметными соперниками ладдера.</p></div></div>
    <div class="achievement"><span>05</span><div><strong>Победы на европейском ладдере</strong><p>Победы над сильными игроками европейского матчмейкинга.</p></div></div>
    <div class="achievement"><span>06</span><div><strong>Собственный стиль драфта</strong><p>Узнаваемый подход с необычными героями, агрессивным темпом и импровизированными сочетаниями.</p></div></div>
  </div>
</section>

<h3 class="roster-title">{{ site.data.ui.ru.roster_title }}</h3>
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
