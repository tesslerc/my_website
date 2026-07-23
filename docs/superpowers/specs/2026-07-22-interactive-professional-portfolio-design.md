---
title: Interactive professional portfolio design
date: 2026-07-22
status: approved-for-build
---

# Interactive professional portfolio design

## Product thesis

The site should make Chen Tessler's expertise legible before a visitor reads a
publication list. It opens with a thesis and a portrait slot, then uses the
rest of the page to foreground three current systems: MaskedMimic, Generative
Pretrained Controllers, and Kimodo. It also frames open-source research —
especially ProtoMotions — as a way to empower the community to build quickly.
The central thread is learning reusable motion priors and solving near-short
horizon control problems.

The target audience is a technical collaborator, hiring manager, or researcher
who needs a fast sense of scope and taste. The page's single job is to turn that
first impression into a credible reason to explore the featured work or start a
conversation.

## Direction

The visual language is a quiet midnight control room: deep navy surfaces,
warm-white type, coral as the active thread, and a pale cyan trace for measured
motion. It is intentionally not a generic neon-tech dashboard; the palette is
small, the interface is editorial, and the bold gestures are the portrait frame
and project signal cards.

- Deep field: `#08111f`
- Raised panel: `#102035`
- Warm text: `#f2eee6`
- Muted text: `#91a1b4`
- Actuator coral: `#ff6b4a`
- Motion cyan: `#87d9df`
- Soft rule: `rgba(242, 238, 230, 0.16)`

Typography pairs Syne for the large thesis statement, IBM Plex Sans for
explanatory copy, and IBM Plex Mono for labels, state readouts, and metadata.
The type system is expressive in the hero and deliberately plain everywhere
else so the motion remains the signature.

## Structure

```text
┌ fixed rail: CHEN / sections / availability ┐
│ thesis + current thread   │ portrait slot         │
├─────────────────────────────────────────────────┤
│ reusable priors → near-short horizon → open source│
├─────────────────────────────────────────────────┤
│ MaskedMimic / GPC / Kimodo + motion videos        │
├─────────────────────────────────────────────────┤
│ short about + full publication archive            │
└─────────────────────────────────────────────────┘
```

The fixed rail collapses into a compact top bar on small screens. The rail
wordmark uses the supplied square avatar as a small square icon; the hero
portrait frame keeps the supplied 4:3 family photo intact and can be swapped
for a formal portrait later. Project features carry the narrative without
pretending to be a finished interactive demo. A small animated “Now cooking” rail status
keeps the site alive while the complete non-patent research list preserves the
broader record.

## Motion and accessibility

Motion is concentrated in small scroll reveals, a restrained “Now cooking” rail
indicator, native video controls, and color-only project hover states. There is
no pretend control demo before the WASM build exists. The portrait placeholder
has an accessible role and text label. `prefers-reduced-motion` removes the
reveal and cooking animations. All external links use descriptive text and safe
target behavior.

## Archive taxonomy and hero copy

The separate “Working statement” strip is removed. Its idea is folded into the
hero lede so the first viewport carries the complete thesis: models and open
systems turn motion data into reusable priors that serve as a learned System 1,
a reflex layer for near-short-horizon control.

The publication archive remains fully expanded but is divided into three
semantic groups: Motion, Learning, and Applied. Each group has a small heading,
count, and description. A restrained group accent is used on that heading, its
rule, and publication metadata; the existing thumbnail variation remains
intact so the archive reads as an editorial index rather than a dashboard.

Group accents are coral for Motion, cyan for Learning, and muted ochre for
Applied. The archive keeps the selected 26 non-patent outputs visible.
ProtoMotions is intentionally emphasized in the hero as the open-source
community thread, without duplicating it in the publication archive. Each paper
gets a compact link row with a verified Paper destination and optional Project
or Code destinations.

## Featured-work research threads

The three featured cards remain visually unchanged at rest. MaskedMimic adds one
native “Research path” disclosure beneath its content. Opening it reveals a quiet
three-node path from MaskedMimic to MaskedManipulator and an open next direction.
GPC and Kimodo stay self-contained until their own concrete research lineages are
clear enough to show. Only one disclosure can be open, and the path stacks
vertically on mobile.

## Acceptance criteria

1. A visitor can understand the professional focus within the first viewport.
2. The three primary works are the dominant content after the hero.
3. The portrait slot is visible, accessible, and easy to replace with the final image.
4. Each primary work has a video treatment that can be swapped for local assets.
5. The publication archive shows the non-patent research record with authors,
   one-line summaries, and small visuals without relying on an external archive.
6. The page is responsive, usable with reduced motion, and does not require a
   build step or server-side runtime.
7. The site can be opened directly as `index.html` and backed up in git.
