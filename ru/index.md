---
layout: default
title: Morui — Кирилл Виноградов
permalink: /ru/
lang: ru
description: "Официальный сайт Кирилла Виноградова (Morui): художника, разработчика игр, музыканта, игрока Dota 2, стримера и автора проектов."
lang_alt_url: /
section_label: "ИНФО / 01"
date: 2026-09-21
last_modified_at: 2026-10-11
---

<section class="command-hero command-hero-wide">
  <div class="command-copy">
    <span class="eyebrow">MORUI // ЛИЧНЫЙ ХАБ</span>
    <h2 class="hero-title">Всё только<br><em>начинается.</em></h2>
    <p class="lede">Растущий архив творческих работ, разработки игр, музыки и соревновательной игры в Dota 2.</p>
    
    <div class="command-actions">
      <a class="action-primary" href="{{ '/ru/projects/' | relative_url }}">Смотреть проекты →</a>
      <a class="action-secondary" href="{{ '/ru/team/' | relative_url }}">Открыть команду</a>
    </div>
  </div>
</section>

<section class="hub-grid" aria-label="Разделы сайта">
  <a class="hub-card hub-card-large" href="{{ '/ru/projects/' | relative_url }}">
    <span class="hub-index">01 / РАБОТА</span><strong>Проекты</strong><p>Текущая работа, законченные эксперименты, отложенные идеи и долгие творческие направления.</p><span class="hub-arrow">↗</span>
  </a>
  <a class="hub-card" href="{{ '/ru/team/' | relative_url }}">
    <span class="hub-index">02 / СОРЕВНОВАНИЯ</span><strong>Cult Of Maids</strong><p>Команда по Dota 2, основанная в 2021 году: свой стиль, история, состав и достижения.</p><span class="hub-arrow">↗</span>
  </a>
  <a class="hub-card" href="{{ '/ru/archive/' | relative_url }}">
    <span class="hub-index">03 / МЕДИА</span><strong>Архив</strong><p>Растущий визуальный архив: портреты, материалы команды, изображения проектов и фрагменты.</p><span class="hub-arrow">↗</span>
  </a>
  <a class="hub-card" href="{{ '/ru/blog/' | relative_url }}">
    <span class="hub-index">04 / ЗАМЕТКИ</span><strong>Заметки</strong><p>Журналы разработки, запуски, эксперименты и изменения, которые стоит сохранить.</p><span class="hub-arrow">↗</span>
  </a>
  <a class="hub-card" href="{{ '/ru/links/' | relative_url }}">
    <span class="hub-index">05 / ВНЕ САЙТА</span><strong>Официальные ссылки</strong><p>Прямые переходы к площадкам, где продолжаются проекты, стримы, музыка и игровые профили.</p><span class="hub-arrow">↗</span>
  </a>
</section>

{% include last-match.html %}

<section class="now-panel">
  <div class="now-head"><span class="eyebrow">СЕЙЧАС // ТЕКУЩИЙ СИГНАЛ</span><span>ОБНОВЛЕНО {{ page.last_modified_at | date: '%d.%m.%Y' }}</span></div>
  <div class="now-body">
    <h2>Что происходит сейчас</h2>
    <div class="now-list">
      <div><b>01</b><span>Разработка Zombex:RE и расширение его мира.</span></div>
      <div><b>02</b><span>Наполнение архива сайта и документирование прежних творческих работ.</span></div>
      <div><b>03</b><span>Работа на стыке музыки, визуального направления, программирования и игр.</span></div>
    </div>
  </div>
</section>

<section class="principles-grid" aria-label="Принципы работы">
  <div class="principles-intro"><span class="eyebrow">ПОДХОД К РАБОТЕ</span><h2>Собирать, экспериментировать, сохранять нить.</h2><p>Сайт показывает не только готовый результат, но и то, как разные направления остаются связанными, не превращаясь в один и тот же проект.</p></div>
  <article><b>01</b><h3>Работать сразу в нескольких средах</h3><p>Визуал, код, музыка и разработка игры могут поддерживать одну идею с разных сторон.</p></article>
  <article><b>02</b><h3>Оставлять место экспериментам</h3><p>Паузы и нестандартные решения тоже являются частью архива, а не тем, что нужно скрывать.</p></article>
  <article><b>03</b><h3>Фиксировать то, что остаётся</h3><p>Заметки, скриншоты, черновики и старые материалы сохраняют контекст и не дают работе исчезнуть бесследно.</p></article>
</section>

<section class="about-original">
  <div class="about-heading"><span class="eyebrow">О ПРОФИЛЕ</span><h2>Разные направления — один архив</h2></div>
  <p class="lede"><strong>Кирилл Виноградов</strong> — художник, разработчик игр, музыкант, соревновательный игрок Dota 2, стример и автор проектов. Сайт собирает основные творческие и технические направления, не пытаясь представить их единым завершённым портфолио.</p>
  <p>Работа охватывает графический дизайн, рисунок, музыку, программирование, эксперименты с аппаратной частью и разработку игр. Одни проекты завершены, другие остаются прототипами, надолго уходят на паузу или возвращаются в новом виде. Архив сохраняет контекст, эксперименты и ход работы.</p>
  <p><strong>Zombex:RE</strong> — долгосрочный игровой проект на Unity. Его визуальное направление, мир и технический прототип развиваются параллельно. Подробнее — на странице <a href="{{ '/ru/projects/' | relative_url }}">проектов</a>.</p>
  <p><strong>Cult Of Maids</strong>, основанная в 2021 году, — самый продолжительный командный проект: состав по Dota 2, построенный вокруг совместной игры и нестандартного стиля. На <a href="{{ '/ru/team/' | relative_url }}">странице команды</a> собраны состав, достижения и история.</p>
  <p>Техническое направление включает Python и C++, а также C# и Java, в том числе для разработки на Unity. Опыт администрирования Minecraft-серверов и игровых сообществ дополняет практическую сторону: поддержку проектов, модерацию и организацию процессов.</p>
  <p>Отдельные обновления публикуются в <a href="{{ '/ru/blog/' | relative_url }}">блоге</a>; внешние площадки и игровые профили собраны на странице <a href="{{ '/ru/links/' | relative_url }}">ссылок</a>, а <a href="{{ '/ru/archive/' | relative_url }}">архив</a> сохраняет визуальные материалы и фрагменты текущих и прежних работ.</p>
</section>
