---
layout: default
title: Archive
permalink: /archive/
lang: en
description: "Visual archive of Morui / Moruika: profile imagery, Cult Of Maids, roster material, project fragments, and creative media."
lang_alt_url: /ru/archive/
date: 2026-10-07
last_modified_at: 2026-10-07
section_label: "ARCHIVE / 06"
---
<section class="archive-hero"><div><span class="eyebrow">MEDIA ARCHIVE // OPEN</span><h1 class="section-title">Archive</h1><p class="lede">A visual index for images and fragments connected to Morui / Moruika, the team, and the projects. This section is intentionally built to grow.</p></div><div class="archive-counter"><span>STORED</span><strong>09</strong><small>VISIBLE ITEMS</small></div></section>
<div class="archive-filters" role="toolbar" aria-label="Filter archive"><button class="archive-filter is-active" data-archive-filter="all">All</button><button class="archive-filter" data-archive-filter="identity">Identity</button><button class="archive-filter" data-archive-filter="team">Team</button><button class="archive-filter" data-archive-filter="roster">Roster</button></div>
<section class="gallery-grid archive-grid" aria-label="Visual archive">
<figure class="gallery-card archive-item archive-item-feature" data-archive-tags="identity"><button class="gallery-open" data-lightbox-src="{{ '/assets/img/profile-banner.webp' | relative_url }}" data-lightbox-alt="Morui / Moruika profile banner"><img src="{{ '/assets/img/profile-banner-1280.webp' | relative_url }}" alt="Morui / Moruika profile banner" width="1280" height="512" loading="eager"><figcaption><strong>Morui / Moruika</strong><span>Identity · profile banner</span></figcaption></button></figure>
<figure class="gallery-card archive-item" data-archive-tags="identity"><button class="gallery-open" data-lightbox-src="{{ '/assets/img/morui-avatar-512.webp' | relative_url }}" data-lightbox-alt="Morui / Moruika avatar"><img src="{{ '/assets/img/morui-avatar.webp' | relative_url }}" alt="Morui / Moruika avatar" width="512" height="512" loading="lazy"><figcaption><strong>Morui</strong><span>Identity · avatar</span></figcaption></button></figure>
<figure class="gallery-card archive-item" data-archive-tags="team"><button class="gallery-open" data-lightbox-src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" data-lightbox-alt="Cult Of Maids emblem"><img src="{{ '/assets/img/cult-of-maids.webp' | relative_url }}" alt="Cult Of Maids emblem" width="512" height="512" loading="lazy"><figcaption><strong>Cult Of Maids</strong><span>Team · emblem</span></figcaption></button></figure>
{% assign archive_members = "morui|Morui;cheburaska|Cheburaska;heryn|Heryn;kodeinovi-tsar|Kodeinovi Tsar;rapunzel|Rapunzel;slanets|Slanets" | split: ";" %}
{% for item in archive_members %}{% assign bits = item | split: "|" %}<figure class="gallery-card archive-item" data-archive-tags="roster"><button class="gallery-open" data-lightbox-src="{{ '/assets/img/roster/' | append: bits[0] | append: '.webp' | relative_url }}" data-lightbox-alt="{{ bits[1] }} — Cult Of Maids roster"><img src="{{ '/assets/img/roster/' | append: bits[0] | append: '.webp' | relative_url }}" alt="{{ bits[1] }} — Cult Of Maids roster" width="512" height="512" loading="lazy"><figcaption><strong>{{ bits[1] }}</strong><span>Roster · Cult Of Maids</span></figcaption></button></figure>{% endfor %}
</section>
<dialog class="lightbox"><button class="lightbox-close" aria-label="Close image">×</button><img class="lightbox-image" alt=""></dialog>
<section class="archive-next"><span class="eyebrow">NEXT</span><h2>This is only the first layer.</h2><p>Project artwork, music covers, screenshots, old experiments, and future visual material can be added here without turning the page into a generic gallery.</p><a href="{{ '/projects/' | relative_url }}">Connect media to projects →</a></section>
