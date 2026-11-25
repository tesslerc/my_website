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
  work features. The MaskedMimic research thread features Metatron hardware
  footage; GPC features Robo-GPC hardware footage, and Kimodo retains its own
  motion video. Video labels distinguish each extension from its anchor work.
- ProtoMotions is called out in the hero as the open-source community-facing
  thread.
- The hero carries the complete working thesis: motion priors for System 1
  control, with a learned reflex layer for the next few seconds for robots.
- The bottom archive contains 28 non-patent research outputs with authors,
  venues/types, one-line summaries, compact visual thumbnails, and verified
  Paper / Project / Code links where available. They are grouped into Motion,
  Learning, and Applied, each with a restrained accent color.
- MaskedMimic can open an inline research thread. The native disclosure path
  keeps the first view focused while showing its concrete extensions into
  MaskedManipulator and Metatron. GPC has its own two-node thread leading to
  Robo-GPC; Kimodo stays self-contained. Metatron links to its arXiv paper,
  public project page, and ProtoMotions code; Robo-GPC remains link-free.
- A real WASM demo can be added later without replacing the video-led project
  stories; the page uses lightweight reveal motion.
- Reduced-motion preferences disable reveal transitions.

## Metatron featured video

`assets/metatron-hardware.mp4` combines three real G1 demonstrations side by
side in a single 960×540 (16:9) video: joystick steering, sitting, and kitchen
teleoperation. The steering and teleoperation clips use the updated (Nov 2026)
policy. The card labels the footage as Metatron, and its project link points to
the public Metatron website at https://research.nvidia.com/labs/par/projects/metatron/.

Source clips from the Metatron site deployment:

- `hero-nov26-steering.mp4`: full 12-second clip, crop `360:608:0:16`.
- `hero-v4-sitting.mp4`: crop `512:864:0:20`.
- `hero-nov26-back-kitchen-v2.mp4`: seconds 8–20, crop `360:608:0:16`. Keeps
  the walk to the counter, the turn, and the reach for the cup.

Each crop is scaled to 320×540, then horizontally stacked. The montage runs
12 seconds at source playback speed; the 5.5-second sitting clip repeats to
fill it. This is a demonstration montage, not a timing comparison.
Encoding is H.264, yuv420p, CRF 23, fast-start, without audio. The poster is taken
at 2 seconds. Existing viewport playback and reduced-motion handling apply.
The previous MaskedMimic assets are retained for easy restoration.
HTML overlays label each panel: Steering, Scene interaction, and Teleoperation.

## Robo-GPC featured video

`assets/robogpc-hardware.mp4` is a 24-second, 960×540 hardware montage using
three supplementary clips, with source playback speed preserved:

- `cartwheel-fall-recovery.mp4`: full 9.03-second sequence, crop
  `1600:900:320:140` from the 1920×1080 source. Keeps the pull, fall, and recovery.
- `steering-standard.mp4`: seconds 4–11, crop `3072:1728:192:120`
  from the 3840×2160 source. Shows standing up and walking under steering control.
- `steering-squatting.mp4`: seconds 4–12, crop `3328:1872:512:120`
  from the 3840×2160 source. Shows the adapted squatting locomotion style.

Each segment is scaled to 960×540 and 30 fps, then concatenated. Encoding is
H.264, yuv420p, CRF 23, fast-start, without audio. The poster is taken at
8 seconds. The previous GPC assets are retained for easy restoration.
The top-right HTML label follows media time: Robust tracking (0–9.033 s),
Steering (9.033–16.033 s), then Stylized steering. Labels reset on looping and
remain visible on the reduced-motion poster without modifying the video files.

Copy is based on the supplied `GPC_ROBO.pdf`: a discrete generative motor prior
adapted through lightweight CoLA layers while preserving compliant responses
and recovery. Avoid implying autonomous navigation, zero-shot task adaptation,
or onboard inference; the reported hardware experiments use an external GPU.
Only the supplied title and author list are used in the public-facing entry,
with `2026 / PREPRINT` and no paper or project link.

## Before pushing

- Refresh the ProtoMotions star snapshot in `index.html` (`data-github-stars-fallback`)
  before each website push. It is the offline/mobile-safe value shown until the live
  GitHub request completes. Update the matching expectation in
  `test/hero-layout.test.js` at the same time. The current snapshot was checked on
  2026-11-01 and is `2.5k` stars (2,459 at the time of checking).
