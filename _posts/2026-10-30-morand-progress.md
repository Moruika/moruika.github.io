---
title: "Morand: from the first prototype to 0.9"
description: "A Morand development recap: settlements, NPC routines, factions, story, survival and night lighting, up to version 0.9."
lang: en
lang_alt_url: /ru/blog/2026/10/30/morand-progress/
category: "Devlog"
last_modified_at: 2026-10-30
section_label: "BLOG / POST"
permalink: /blog/2026/10/30/morand-progress/
---

Morand has changed considerably since the [first project post]({{ '/blog/2026/10/21/morand/' | relative_url }}). Development has reached **0.9**. The basic survival loop now sits within a world of settlements, daily routines, factions and story leads. Here are the main changes from the early prototype to the current build.

## A world with places to go

The early world mainly provided resources: forests, rocks, bushes and ruins with loot. Its geography now draws on Morand's map and lore, with towns, villages, camps, industrial sites, stations, port facilities and research outposts. Roads, railways and a ferry connect its locations.

Several generator revisions made settlements more compact and gave their buildings clearer roles: homes, workshops, warehouses, infirmaries and temples. Other passes addressed buildings on water or roads, overlapping objects and inaccessible entrances. The procedural world still needs work, but travelling through it now offers more landmarks and reasons to explore.

## Buildings and daily life

You can walk into interiors without a separate loading screen. Roofs reveal furnished rooms, and walls block melee attacks and shots. Residents use those rooms too: they enter, stay inside and leave again.

Version 0.8 improved NPC jobs and routines. Residents tend crops, repair things, sort scrap and handle freight or railway work. They return home at night, while some jobs take place indoors. People pause to work instead of constantly switching destinations, and interaction hints show their current activity.

<figure>
  <a href="{{ '/assets/images/blog/morand-progress/resident-interior.png' | relative_url }}"><img src="{{ '/assets/images/blog/morand-progress/resident-interior.png' | relative_url }}" alt="An exposed furnished house interior in the Survivors' Camp, with characters inside and a snowy yard outside" width="1920" height="1080" loading="lazy" style="max-width:100%;height:auto"></a>
  <figcaption>Version 0.8: a house in the Survivors' Camp. Both players and residents can use interiors.</figcaption>
</figure>

## Relationships and stories

Factions now have relationships and player reputation. Actions can affect their attitude and trading terms; nearby living witnesses matter when determining the consequences of a killing. This is still short of a full investigation or rumour-spreading system.

Doctors and pharmacists treat wounds, bleeding, infection and radiation. Treatment has a quoted price; declining or lacking the money leaves the character's condition unchanged.

Leaders, local notes and quest chains give locations more history. One chain, **Letters Between Sisters**, follows Pavunya and Kherin and offers a reconciliation. Some information and locations are revealed through exploration and conversations. I'll leave the endings for players to discover.

## Survival and NPC behaviour

Food, water, crafting, equipment and health for individual body parts remain the foundation. Injuries and carrying weight now have a stronger effect on movement. Leg injuries, bleeding, infection and excess weight make travel harder; a badly injured leg or an excessive load prevents running.

Pathfinding, collisions between people and animals, obstacle avoidance and combat behaviour have received further work. People also react to a raised weapon: put it away before talking. A personal confrontation should not automatically start a war with an entire faction.

## PDA, conversations and visuals

The PDA map received a revised background and corrected marker alignment. Conversations handle longer replies more comfortably. Useful rumours are separated from everyday chatter: leads record their source, place, time and reliability, and can be marked as followed up.

Buildings, props, character sets and animations have been updated, with more attention to readable environments, interiors and local atmosphere. Art work continues; some prepared images are still previews rather than assets used in the game.

## What 0.9 adds

The latest release concentrates on improving the foundation:

- **Night lighting.** Stronger NPC flashlights, street lights and fires, additional lights around inhabited yards, and lamps, candles and stove light indoors. Street lighting runs from evening until morning.
- **Wider entrances.** Physical doorways are wider and furniture stays clear of them. Entrances were checked for all 26 represented above-ground building types.
- **Population in large locations.** Large camps populate more of their inhabited areas, with additional defenders and revised hostile garrisons.
- **Loading and companions.** Fixes address skipped population attempts at the activity limit, duplicate residents and companion restoration.
- **Less repetitive decoration.** Fewer Lunatic leaflets and removal of a disputed decorative stand.

<figure>
  <a href="{{ '/assets/images/blog/morand-progress/lesnaya-night.png' | relative_url }}"><img src="{{ '/assets/images/blog/morand-progress/lesnaya-night.png' | relative_url }}" alt="Lesnaya village at night, with lamps lighting yards and building fronts while darkness remains between houses" width="1920" height="1080" loading="lazy" style="max-width:100%;height:auto"></a>
  <figcaption>Version 0.9: Lesnaya after the lighting changes. Both images in this post are unpainted gameplay captures; click for full size.</figcaption>
</figure>

## Next

Morand is still in development. The 0.9 release report records 17 passing QA scenarios; external playtesting, art refinement and performance work during world traversal remain ahead. The new **Wintering** story chain has been postponed to a later stage and is not included in this release.

Follow the project on the [Morand page]({{ '/projects/morand/' | relative_url }}) and in the [game repository](https://github.com/Moruika/Morand).
