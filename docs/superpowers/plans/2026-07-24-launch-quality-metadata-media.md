# Launch-quality metadata and media Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add professional social metadata and resilient, viewport-aware featured videos without changing the site's visual language.

**Architecture:** Keep the site framework-free. Add static metadata and a local SVG preview asset in `index.html`, then centralize featured-video lifecycle behavior in `script.js` using existing browser APIs. Preserve existing CSS aspect-ratio and reduced-motion rules, adding only the minimum fallback state needed.

**Tech Stack:** Static HTML, CSS, browser JavaScript, Node's built-in test runner.

## Global Constraints

- Preserve autoplay, loop, muted, inline playback, and no controls for normal-motion users.
- Use local assets only for the share preview and video poster frames.
- Do not add external runtime dependencies.
- Respect `prefers-reduced-motion` and hidden-document state.

### Task 1: Contract tests for metadata and media lifecycle

**Files:**
- Create: `test/launch-quality.test.js`

- [ ] **Step 1: Write failing assertions** for canonical/share metadata, favicon, local SVG preview, video `preload="none"`, and script hooks for viewport observation, visibility changes, and reduced-motion handling.
- [ ] **Step 2: Run `node --test test/launch-quality.test.js`** and confirm it fails because the new contract is not present.

### Task 2: Professional sharing metadata

**Files:**
- Modify: `index.html` head
- Create: `assets/social-preview.svg`

- [ ] **Step 1: Add the local favicon, canonical URL, Open Graph fields, and Twitter card fields.**
- [ ] **Step 2: Create the 1200×630 dark editorial SVG preview** with Chen Tessler's name and the current thesis.
- [ ] **Step 3: Run `node --test test/launch-quality.test.js`** and confirm the metadata assertions pass.

### Task 3: Resilient featured video lifecycle

**Files:**
- Modify: `index.html` featured video tags
- Modify: `script.js`
- Modify: `styles.css` only if a fallback state needs a visual rule

- [ ] **Step 1: Change featured videos to `preload="none"` while retaining posters and normal autoplay attributes.**
- [ ] **Step 2: Add an `IntersectionObserver` that loads and plays videos near the viewport and pauses them after leaving it.**
- [ ] **Step 3: Pause all featured videos on `visibilitychange` and restore only videos that were previously playing.**
- [ ] **Step 4: Keep reduced-motion videos paused and posters visible.**
- [ ] **Step 5: Run the launch-quality test and all existing tests.**

### Task 4: Final verification

**Files:**
- No new files

- [ ] **Step 1: Run `node --test test/*.test.js`.**
- [ ] **Step 2: Inspect `git diff --check` and the complete diff.**
- [ ] **Step 3: Confirm no unrelated files changed.**
