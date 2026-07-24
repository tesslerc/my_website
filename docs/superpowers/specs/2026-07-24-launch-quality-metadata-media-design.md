# Launch-quality metadata and media design

## Goal

Make the portfolio present a deliberate professional identity when shared and
make its video-led featured work reliable on slow, mobile, hidden-tab, and
reduced-motion contexts.

## Design

The document head will expose a consistent title, description, canonical URL,
theme color, favicon, Open Graph metadata, and Twitter card metadata. The share
image will be a local SVG using the existing dark editorial palette, the site
thesis, and Chen Tessler's name; it will not depend on a remote screenshot or
third-party service.

Featured videos will retain autoplay, looping, muted playback, inline playback,
and no controls for the normal experience. They will use their existing local
poster frames and `preload="none"`, begin playback only while near the viewport,
pause when outside it or when the document is hidden, and remain paused for
users who prefer reduced motion. Video boxes keep their 16:9 aspect ratio so
loading cannot shift the page.

## Boundaries

- No visual redesign of the page or new background animation.
- No external runtime dependency for metadata or media playback.
- Existing local videos, posters, and mobile layout remain in place.
- The GitHub stars request remains independent from video initialization.

## Verification

- Node checks assert all required head metadata and local assets.
- Node checks assert video lifecycle hooks, reduced-motion handling, and
  viewport observation are present.
- Existing structural tests continue to pass.
