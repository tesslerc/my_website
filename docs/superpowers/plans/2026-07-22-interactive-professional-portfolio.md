# Interactive Professional Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a lightweight static portfolio that foregrounds Chen Tessler's reusable motion-prior work, with MaskedMimic, Generative Pretrained Controllers, Kimodo, and open-source ProtoMotions as the primary story.

**Architecture:** A framework-free page splits responsibilities across semantic HTML, a tokenized stylesheet, and one small browser-only reveal controller. The hero includes a replaceable portrait slot and an open-source status note; featured work uses canonical motion videos, with a complete non-patent research archive at the bottom. No server, build tool, or package install is required.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Canvas 2D, Google Fonts with local fallbacks.

## Global Constraints

- Keep the page openable directly as `index.html`.
- Use the midnight control-room palette from the design spec.
- Use real project videos now; reserve any future interactive experience for a WASM build without presenting a placeholder demo.
- Keep controls keyboard operable with visible focus states.
- Make the layout responsive without a framework.
- Avoid inventing unverifiable biography or publication metadata.

### Task 1: Create semantic page structure

**Files:**
- Create: `index.html`

**Interfaces:**
- Provides `.portrait-placeholder`, `.project-card`, `.project-video`, `.publication-item`, and `#year` hooks consumed by the page and `script.js`.

- [ ] **Step 1: Add the document shell and accessible navigation.**

  Create a semantic `header`, `main`, sections for hero/focus/about/publications, and a footer. Use descriptive labels for external video/project links and keep each publication's authors, venue, summary, and visual thumbnail together.

- [ ] **Step 2: Add the live hero controls and fallback copy.**

  Include the thesis, current-work thread, portrait placeholder, and accessible text that makes the intended image replacement obvious.

- [ ] **Step 3: Add the three featured work cards and canonical motion videos.**

  Make MaskedMimic, Generative Pretrained Controllers, and Kimodo the dominant content after the hero. Use a consistent media treatment and make room for later local asset swaps.

- [ ] **Step 4: Add the non-patent research archive.**

  List the current Scholar record without patents, including authors, one-line summaries, venues/types, and small visual thumbnails. Include ProtoMotions as an open-source research output and deduplicate preprint/conference versions.

### Task 2: Build the visual system and responsive layout

**Files:**
- Create: `styles.css`

**Interfaces:**
- Styles the semantic hooks in `index.html` and the state classes toggled by `script.js`, including `.is-active`, `.is-visible`, and `.reduced-motion`.

- [ ] **Step 1: Define tokens, type, and global reset.**

  Define the midnight, raised-panel, warm text, muted text, coral, cyan, and rule colors as custom properties. Load Syne, IBM Plex Sans, and IBM Plex Mono with fallbacks and set a readable type scale.

- [ ] **Step 2: Implement desktop composition.**

  Use a fixed left rail, a two-column hero, a portrait frame, a constrained content column, editorial rules, and quiet signal treatments. Keep the project cards as the dominant visual language.

- [ ] **Step 3: Implement responsive and reduced-motion behavior.**

  Collapse the rail into a top bar under 820px, stack the hero, keep touch targets at least 44px, and disable nonessential transforms/animation under `prefers-reduced-motion`.

### Task 3: Add interaction behavior

**Files:**
- Create: `script.js`

**Interfaces:**
- `initReveals()` owns progressive section reveals and honors the reduced-motion preference.

- [ ] **Step 1: Implement restrained page reveals.**

  Add an IntersectionObserver for `.reveal` elements, mark elements visible once, and make all elements visible immediately when reduced motion is requested or IntersectionObserver is unavailable.

- [ ] **Step 2: Keep the page behavior restrained until WASM exists.**

  Keep the project cards and publication archive semantic and readable without click handlers or fake controls; native video controls are the only project interaction.

- [ ] **Step 3: Populate the footer year.**

  Set `#year` from the browser's current date so the footer stays current.

### Task 4: Verify and back up

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Add run instructions and interaction notes.**

  Document direct-open usage, project video sources, the open-source ProtoMotions thread, and the future WASM extension point.

- [ ] **Step 2: Run static checks.**

  Run `python3 - <<'PY' ...` to parse the HTML, assert required hooks, and compile the JavaScript with `node --check script.js`; run `git diff --check`.

- [ ] **Step 3: Inspect the local page.**

  Start a local server with `python3 -m http.server 4173`, load the page, and verify console-free interaction, responsive layout, video frames, publication wrapping, hover stability, and reduced-motion fallback.

- [ ] **Step 4: Commit the implementation.**

  Run `git add index.html styles.css script.js README.md && git commit -m "feat: build interactive robotics portfolio"` after checks pass.
