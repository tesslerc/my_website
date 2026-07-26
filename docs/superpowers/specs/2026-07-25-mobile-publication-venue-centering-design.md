# Mobile Publication Venue Centering

## Goal

On mobile, center each publication venue against the full publication metadata row rather than within the space left between the year and links.

## Design

- Keep the metadata on one line in the existing order: year, venue, links.
- Make the metadata row span the full publication-card width.
- Use three grid tracks: `minmax(0, 1fr) auto minmax(0, 1fr)`.
- Anchor the year to the left and the links to the right.
- Place the venue in the fixed center track.
- Remove the venue's leading separator from its measured box so the venue text itself, not the venue-plus-separator pair, is centered.
- Preserve the existing compact typography, colors, and desktop layout.

## Responsive Behavior

The change applies only at the existing mobile breakpoint. Long link groups remain right-aligned and may use the row's existing horizontal overflow behavior if necessary.

## Verification

Extend the mobile structure regression test to require equal outer tracks, a full-width metadata row, a centered venue item, right-aligned links, and a suppressed venue separator.
