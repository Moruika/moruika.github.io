---
layout: default
title: Команда
permalink: /ru/team/
lang: ru
lang_alt_url: /team/
---

<section class="team-hero">
  <div class="team-emblem">
    {% assign team_logo_png = site.static_files | where: 'path', '/assets/img/cult-of-maids.png' | first %}
    {% if team_logo_png %}
      <img src="{{ '/assets/img/cult-of-maids.png' | relative_url }}" alt="Эмблема Cult Of Maids" decoding="async">
    {% else %}
      <img src="{{ '/assets/img/cult-of-maids.svg' | relative_url }}" alt="Эмблема Cult Of Maids" decoding="async">
    {% endif %}
  </div>
  <div>
    <span class="eyebrow">{{ site.data.ui.ru.team_eyebrow }}</span>
    <h2 class="section-title">Cult Of Maids</h2>
    <p class="team-subtitle">{{ site.data.ui.ru.team_subtitle }}</p>
  </div>
</section>

<p>Команда была основана в 2021 году и с тех пор остаётся активной, сохраняя один и тот же основной состав на протяжении всего своего существования. За эти годы Cult Of Maids успела заработать собственную репутацию в сообществе, одержав победы над известными стримерами и сильными игроками европейского ладдера. Постепенно команда превратилась из обычного стака в коллектив со своей собственной историей, стилем и узнаваемым характером. На счету команды $250 призовых, неофициальное, но весьма почётное звание «турбосмурфов» и, что особенно важно, огромное количество «респекта улиц», накопленного за всё время существования. Ещё одним заметным достижением стала победа в турбо-турнире, благодаря которой к весьма необычной соревновательной истории команды добавился уже вполне настоящий турнирный титул.</p>

<p>Главная отличительная черта Cult Of Maids — нестандартный и узнаваемый подход к драфтам. Команда всегда была готова экспериментировать с необычными героями, неожиданными сочетаниями и идеями, которые на бумаге могут выглядеть сомнительно — по крайней мере до тех пор, пока они внезапно не начинают работать на практике. В сочетании с быстрым, агрессивным стилем игры и постоянной готовностью принимать драки это стало одной из наиболее узнаваемых черт команды. В подходе Cult Of Maids есть определённая доля хаотичной уверенности: задача заключается не только в том, чтобы играть в стандартную Dota 2, но и в том, чтобы создавать собственный ритм игры и заставлять соперника подстраиваться под него. В целом такой стиль неизбежно может напомнить агрессивный и самобытный подход, который когда-то ассоциировался с популярной Gaming Gladiators, хотя со временем Cult Of Maids сформировала собственную узнаваемую идентичность.</p>

<section class="team-honors" aria-labelledby="team-honors-title">
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
<ul class="roster-cards">
  <li class="member-card featured">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/morui.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/morui.png' | relative_url }}" alt="Morui" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">MO</span>{% endif %}
</div><div><strong>Morui</strong><span>Капитан · поз. 3/4</span></div><b>01</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/heryn.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/heryn.png' | relative_url }}" alt="Heryn" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">HY</span>{% endif %}
</div><div><strong>Heryn</strong><span>Коуч</span></div><b>02</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/pavuk.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/pavuk.png' | relative_url }}" alt="Pavuk" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">PV</span>{% endif %}
</div><div><strong>Pavuk</strong><span>поз. 3/4</span></div><b>03</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/mamut-rahal.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/mamut-rahal.png' | relative_url }}" alt="Mamut Rahal" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">MR</span>{% endif %}
</div><div><strong>Mamut Rahal</strong><span>поз. 1</span></div><b>04</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/kodeinovi-tsar.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/kodeinovi-tsar.png' | relative_url }}" alt="Kodeinovi Tsar" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">KЦ</span>{% endif %}
</div><div><strong>Kodeinovi Tsar</strong><span>поз. 2</span></div><b>05</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/cheburaska.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/cheburaska.png' | relative_url }}" alt="Cheburaska" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">ЧБ</span>{% endif %}
</div><div><strong>Cheburaska</strong><span>поз. 5</span></div><b>06</b></li>
  <li class="member-card">{% assign avatar_file = site.static_files | where: 'path', '/assets/img/roster/prokopchelik.png' | first %}
<div class="member-avatar">
  {% if avatar_file %}<img src="{{ '/assets/img/roster/prokopchelik.png' | relative_url }}" alt="Prokopchelik" loading="lazy" decoding="async">{% else %}<span class="member-avatar-fallback" aria-hidden="true">ПЧ</span>{% endif %}
</div><div><strong>Prokopchelik</strong><span>поз. 6</span></div><b>07</b></li>
</ul>

<div class="ornament"><span>✦</span></div>
