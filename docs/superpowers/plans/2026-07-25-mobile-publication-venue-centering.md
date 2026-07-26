# Mobile Publication Venue Centering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Center each venue label against the full mobile publication metadata row while keeping the year left-aligned and links right-aligned.

**Architecture:** Adjust only the existing mobile publication metadata grid. Equal flexible outer tracks hold the year and links around an intrinsic center venue track; targeted alignment and pseudo-element rules ensure the venue text itself is centered.

**Tech Stack:** Static HTML, responsive CSS, Node.js assertion tests

## Global Constraints

- Preserve the existing single-line metadata order: year, venue, links.
- Apply the change only at the existing mobile breakpoint.
- Preserve desktop layout, typography, colors, and horizontal overflow behavior.

---

### Task 1: Center Mobile Publication Venues

**Files:**
- Modify: `test/mobile-structure.test.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: Existing `.publication-meta`, venue span, and `.publication-links` markup.
- Produces: A full-width symmetric mobile metadata grid with a visually centered venue label.

- [ ] **Step 1: Write the failing test**

Add assertions requiring:

```js
assert.match(mobileCss, /\.publication-meta\s*\{[^}]*width:\s*100%[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+auto\s+minmax\(0,\s*1fr\)/);
assert.match(mobileCss, /\.publication-meta > span:not\(\.publication-links\)\s*\{[^}]*justify-self:\s*center/);
assert.match(mobileCss, /\.publication-meta > span:not\(\.publication-links\)::before\s*\{[^}]*display:\s*none/);
assert.match(mobileCss, /\.publication-meta \.publication-links\s*\{[^}]*justify-self:\s*end/);
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run:

```bash
node --test test/mobile-structure.test.js
```

Expected: FAIL because the current mobile grid uses content-sized columns and the venue separator remains part of the centered box.

- [ ] **Step 3: Implement the symmetric mobile grid**

Within `@media (max-width: 820px)`, update the metadata rules to include:

```css
.publication-meta {
  width: 100%;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
}
.publication-meta > span:not(.publication-links) { justify-self: center; }
.publication-meta > span:not(.publication-links)::before { display: none; }
.publication-meta .publication-links { justify-self: end; }
```

Keep the existing single-line, overflow, gap, and link-layout declarations.

- [ ] **Step 4: Run focused and full verification**

Run:

```bash
node --test test/mobile-structure.test.js
node --test test/*.test.js
git diff --check
```

Expected: all tests pass and `git diff --check` returns no output.

- [ ] **Step 5: Commit**

```bash
git add styles.css test/mobile-structure.test.js docs/superpowers/plans/2026-07-25-mobile-publication-venue-centering.md
git commit -m "Center mobile publication venues"
```
