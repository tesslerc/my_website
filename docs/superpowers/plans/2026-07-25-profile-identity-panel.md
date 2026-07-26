# Profile Identity Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reshape the profile links into a desktop vertical-label identity panel with a horizontal mobile fallback.

**Architecture:** Keep the component framework-free and semantic. Restructure the existing profile navigation into a label, role, and link-row grouping in `index.html`, then use CSS Grid and writing mode in `styles.css` for the responsive presentation.

**Tech Stack:** Static HTML, CSS, Node structural tests.

## Global Constraints

- Preserve the current family-photo and ProtoMotions ordering.
- Preserve Scholar, X, and LinkedIn / CV destinations.
- Keep “Senior Research Scientist @ NVIDIA” accurate.
- Use the existing palette and type tokens.
- Use no JavaScript.

---

### Task 1: Profile identity contract

**Files:**
- Modify: `test/typography-scale.test.js`
- Modify: `test/mobile-structure.test.js`

**Interfaces:**
- Consumes: Existing `profile-links`, `profile-links-label`, `profile-affiliation`, and `profile-link` selectors.
- Produces: Assertions for `profile-link-row`, vertical desktop label behavior, and horizontal mobile behavior.

- [ ] **Step 1: Add failing structural assertions**

Assert that the HTML contains a dedicated `profile-link-row`, the desktop label
uses `writing-mode: vertical-rl` and a 180-degree rotation, and the mobile label
restores horizontal writing with no rotation.

- [ ] **Step 2: Run the focused tests**

Run: `node --test test/typography-scale.test.js test/mobile-structure.test.js`

Expected: FAIL because the dedicated link row and responsive writing-mode rules
do not exist.

### Task 2: Semantic profile grouping

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Existing profile label, role copy, and three external anchors.
- Produces: `.profile-links-label`, `.profile-affiliation`, and `.profile-link-row` siblings inside `.profile-links`.

- [ ] **Step 1: Separate label and role**

Render “About me” inside the label element and render “Senior Research
Scientist @ NVIDIA” as the adjacent role element without the slash.

- [ ] **Step 2: Group links**

Wrap Scholar, X, and LinkedIn / CV in `.profile-link-row`, preserving their
href, target, rel, labels, and arrow marks.

### Task 3: Responsive identity-panel layout

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: The three profile child elements from Task 2 and the existing type tokens.
- Produces: Two-column desktop layout and one-column mobile layout.

- [ ] **Step 1: Build desktop grid**

Use a narrow label column and flexible content column. Span the label across
both content rows, apply a vertical rule, and orient its inner text bottom to
top.

- [ ] **Step 2: Build the right-side rows**

Place the affiliation in row one and the link group in row two. Use IBM Plex
Sans for the role and the existing monospace link treatment below it.

- [ ] **Step 3: Restore horizontal mobile reading**

At `max-width: 820px`, use one content column, remove the vertical rule, restore
horizontal writing mode, and stack label, role, and links. At `max-width:
560px`, keep the links in the existing compact three-column row.

### Task 4: Verification

**Files:**
- No production files

**Interfaces:**
- Consumes: Completed HTML and CSS.
- Produces: Verified responsive profile panel.

- [ ] **Step 1: Run focused tests**

Run: `node --test test/typography-scale.test.js test/mobile-structure.test.js`

Expected: both pass.

- [ ] **Step 2: Run the complete suite**

Run: `node --test test/*.test.js`

Expected: all tests pass.

- [ ] **Step 3: Check the diff**

Run: `git diff --check`

Expected: no whitespace errors.
