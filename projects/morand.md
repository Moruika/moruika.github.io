---
layout: default
title: Morand — Post-Apocalyptic Survival Game
permalink: /projects/morand/
redirect_from:
  - /projects/zombex-re/
lang: en
description: "Morand is a top-down post-apocalyptic survival game by Morui, built in Godot 4. Open-source prototype in active development."
lang_alt_url: /ru/projects/morand/
section_label: "PROJECT / MORAND"
project_schema: "VideoGame"
project_name: "Morand"
project_engine: "Godot"
project_genre: "Survival"
project_platform: "PC"
date: 2026-10-21
last_modified_at: 2026-10-21
---

<section class="project-detail-hero">
  <div class="project-detail-mark">{% include brand-icon.html icon='morand' %}</div>
  <div>
    <span class="eyebrow">PROJECT // IN DEVELOPMENT</span>
    <h1 class="section-title">Morand</h1>
    <p class="lede">A top-down post-apocalyptic survival game built in Godot. Scavenge, survive the day-night cycle, keep every part of your body alive, and stay away from the infected.</p>
  </div>
</section>

<div class="project-detail-meta" aria-label="Project facts">
  <div><span>STATUS</span><strong>Prototype / in development</strong></div>
  <div><span>ENGINE</span><strong>Godot 4 · GDScript</strong></div>
  <div><span>GENRE</span><strong>Survival · top-down 2D</strong></div>
  <div><span>SOURCE</span><strong><a href="https://github.com/Moruika/Morand" target="_blank" rel="noopener noreferrer">GitHub · MIT</a></strong></div>
</div>

<section class="project-detail-section">
  <h2>About the project</h2>
  <p>Morand (formerly <em>Zombex:RE</em>) is an independent survival game set after a catastrophe. The player starts in the middle of a large procedurally generated world and has to gather, craft and explore to make it to the next day. The project is open source and lives on GitHub.</p>
  <p>It is still a prototype: systems are being built one by one and tuned before the world is filled with enemies again. This page documents what already exists.</p>
</section>

<section class="project-detail-section">
  <h2>What is already in the prototype</h2>
  <ul>
    <li><strong>A seeded world</strong> with grass, forests, rocks, bushes and ruined buildings. Doors of abandoned houses tell short stories; crates inside hold loot.</li>
    <li><strong>Day and night.</strong> A full in-game day lasts ten real minutes; the colour of the world follows the clock.</li>
    <li><strong>Gathering and crafting:</strong> berries, apples, herbs, fibre, wood and stone; a campfire for cooking and boiling water; a workbench for tools and a spear. Bushes and trees grow back.</li>
    <li><strong>Water matters.</strong> Dirty water has to be boiled, filtered or treated with iodine tablets.</li>
    <li><strong>Body-part health.</strong> Head, torso, arms and legs are tracked separately. Wounded arms hit weaker; bandages and medkits are applied to a chosen part. Hunger, thirst and radiation wear the body down evenly.</li>
    <li><strong>Survival-horror inventory:</strong> a grid backpack, eight equipment slots (helmet, vest, pants, boots, two weapons, knife, backpack) and a live 3D model of the character that changes with the gear. Armour reduces damage by up to 70%.</li>
    <li><strong>Exploration:</strong> a minimap with a short-range radar and a full-screen map with persistent fog of war. Radioactive rifts are scattered across the map, and an emergency airdrop lands every three in-game days.</li>
    <li><strong>The infected:</strong> walkers, fast and fragile runners, and slow heavy brutes. They hunt by sound: running is heard from far away, standing still almost not at all, and the night sharpens their senses. They are switched off for now while the world is being tuned.</li>
    <li><strong>One life.</strong> The game saves automatically; death ends the run and deletes the save.</li>
  </ul>
</section>

<section class="project-detail-section">
  <h2>Connection to the wider universe</h2>
  <p>The same fictional setting also appears in the manga <em>Life and Sufferings of Kirik</em> and the light novel <em>Chronicles of Pavuk</em>. These works explore the world through different characters and formats rather than serving as simple copies of the game.</p>
</section>

<div class="project-note">
  <span>STATUS NOTE</span>
  <p>No public release date is stated because the project is still a prototype. Progress is posted in the <a href="{{ '/blog/' | relative_url }}">blog</a>.</p>
</div>

<nav class="project-detail-links" aria-label="Related pages">
  <a href="{{ '/projects/' | relative_url }}">← Back to projects</a>
  <a href="https://github.com/Moruika/Morand" target="_blank" rel="noopener noreferrer">Source on GitHub ↗</a>
  <a href="{{ '/blog/2026/10/21/morand/' | relative_url }}">Development notes →</a>
</nav>
