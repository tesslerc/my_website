# Profile identity panel design

## Goal

Replace the inline “About me / Senior Research Scientist @ NVIDIA” treatment
with a compact editorial identity panel that separates the label, role, and
professional links.

## Desktop and tablet layout

The panel uses two columns. “About me” occupies the narrow left column, reads
from bottom to top, and is separated from the content by a quiet vertical rule.
The right column contains two rows:

1. “Senior Research Scientist @ NVIDIA,” with NVIDIA retaining its green accent.
2. Scholar, X, and LinkedIn / CV as one compact link row.

The panel has no background or enclosing box. Its structure comes from the
vertical rule, spacing, typography, and alignment already used elsewhere in the
site.

## Mobile layout

At the existing mobile breakpoint, “About me” returns to horizontal text. The
role sits below it, followed by the three links on one compact row. This avoids
making the profile block taller merely to accommodate a vertical label.

## Constraints

- Preserve the current family-photo and ProtoMotions ordering.
- Preserve all existing destinations and accessible navigation labels.
- Keep the role accurate as “Senior Research Scientist @ NVIDIA.”
- Do not introduce new colors, fonts, animation, or JavaScript.
- Build on the current typography pass without changing the hero hierarchy.

## Verification

Structural tests confirm the three-part HTML grouping, desktop vertical label,
two-row desktop grid, mobile horizontal fallback, and compact mobile link row.
