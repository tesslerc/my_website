---
title: Interactive professional portfolio design
date: 2026-07-22
status: approved-for-build
---

# Interactive professional portfolio design

## Product thesis

The site should make Chen Tessler's expertise legible before a visitor reads a
publication list. It opens with a live, low-fi control visualization and uses
the rest of the page to explain the work behind it: generating motion,
controlling behavior, and making learning useful in physical systems.

The target audience is a technical collaborator, hiring manager, or researcher
who needs a fast sense of scope and taste. The page's single job is to turn that
first impression into a credible reason to explore the selected work or start a
conversation.

## Direction

The visual language is a quiet midnight control room: deep navy surfaces,
warm-white type, coral as the active actuator, and a pale cyan trace for
measured motion. It is intentionally not a generic neon-tech dashboard; the
palette is small, the interface is editorial, and the one bold gesture is the
trajectory field.

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
│ thesis + role statement   │ live trajectory field │
├─────────────────────────────────────────────────┤
│ focus tabs: motion / control / learning         │
├─────────────────────────────────────────────────┤
│ selected work: four research artifacts          │
├─────────────────────────────────────────────────┤
│ short about + links + contact                   │
└─────────────────────────────────────────────────┘
```

The fixed rail collapses into a compact top bar on small screens. The hero
trajectory field is a canvas with a keyboard-operable setpoint control and a
reset action. Pointer movement changes the target, while an explicit hint and
textual state readout explain what is happening. The focus tabs alter the
supporting copy and the small system diagram, keeping the page interactive
without requiring a framework or remote data.

## Motion and accessibility

Motion is concentrated in the hero field, where it explains the subject. Scroll
reveals are short opacity/translate transitions only. All controls have visible
focus states, semantic labels, and text equivalents. `prefers-reduced-motion`
stops the animated trace and preserves the visualization as a static diagram.
The canvas is decorative in the semantic tree; the control readout and buttons
carry the meaning for screen-reader and keyboard users.

## Acceptance criteria

1. A visitor can understand the professional focus within the first viewport.
2. The hero interaction responds to pointer and keyboard input and has a reset.
3. Focus tabs update content without a page reload.
4. Research work is scannable by title, venue/year, and one-sentence relevance.
5. The page is responsive, usable with reduced motion, and does not require a
   build step or server-side runtime.
6. The site can be opened directly as `index.html` and backed up in git.
