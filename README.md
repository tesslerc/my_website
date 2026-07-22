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
- MaskedMimic, Generative Pretrained Controllers, and Kimodo are the primary
  work features, each with a canonical motion video frame.
- ProtoMotions is called out in the hero as the open-source community-facing
  thread.
- The bottom archive contains 28 non-patent research outputs with authors,
  venues/types, one-line summaries, and compact visual thumbnails.
- A real WASM demo can be added later without replacing the video-led project
  stories; the page uses only lightweight reveal motion for now.
- Reduced-motion preferences disable reveal transitions.
