# Chen Tessler — professional portfolio

A framework-free interactive portfolio focused on motion generation, control,
robotics, and reinforcement learning.

## Run locally

Open `index.html` directly in a browser, or serve the folder for a more realistic
local environment:

```bash
python3 -m http.server 4173
```

Then visit <http://localhost:4173>.

## Current state

- The hero uses `assets/portrait-family.jpg` in a 4:3 image frame; replace that
  asset if a formal portrait is preferred later.
- The top-left rail wordmark uses `assets/avatar.png` as a compact square icon.
- MaskedMimic, Generative Pretrained Controllers, and Kimodo are the primary
  work features, each with a canonical motion video frame.
- ProtoMotions is called out in the hero as the open-source community-facing
  thread.
- The hero carries the complete working thesis: motion priors for System 1
  control, with a learned reflex layer for the next few seconds for robots.
- The bottom archive contains 26 non-patent research outputs with authors,
  venues/types, one-line summaries, compact visual thumbnails, and verified
  Paper / Project / Code links where available. They are grouped into Motion,
  Learning, and Applied, each with a restrained accent color.
- MaskedMimic can open an inline research thread. The native disclosure path
  keeps the first view focused while showing its concrete extension into
  MaskedManipulator and future directions; GPC and Kimodo stay self-contained.
- A real WASM demo can be added later without replacing the video-led project
  stories; the page uses lightweight reveal motion.
- Reduced-motion preferences disable reveal transitions.

## Before pushing

- Refresh the ProtoMotions star snapshot in `index.html` (`data-github-stars-fallback`)
  before each website push. It is the offline/mobile-safe value shown until the live
  GitHub request completes. Update the matching expectation in
  `test/hero-layout.test.js` at the same time. The current snapshot was checked on
  2026-07-23 and is `2.1k` stars.
