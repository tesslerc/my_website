const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const mobileCss = css.slice(css.indexOf("@media (max-width: 820px)"));

assert.match(html, /class="portrait-card reveal"/, "the hero should contain the family portrait");
assert.match(html, /class="open-source-note"/, "the hero should contain the open-source note");
assert.match(mobileCss, /\.hero-copy\s*\{[^}]*display:\s*contents/, "mobile hero copy should expose its children to the hero grid");
assert.match(mobileCss, /\.hero-lede\s*\{[^}]*grid-row:\s*2/, "mobile hero lede should appear before the portrait");
assert.match(mobileCss, /\.profile-links\s*\{[^}]*grid-column:\s*1[^}]*grid-row:\s*4/, "mobile profile links should follow the family portrait");
assert.match(mobileCss, /\.profile-links\s*\{[^}]*width:\s*100%[^}]*max-width:\s*none[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(2rem,\s*0\.55fr\)\s+minmax\(0,\s*1\.45fr\)/, "mobile profile links should use the full width with room for LinkedIn / CV");
assert.match(mobileCss, /\.profile-links-label\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/, "mobile About me label should occupy its own row");
assert.match(mobileCss, /\.profile-link\s*\{[^}]*display:\s*inline-flex[^}]*white-space:\s*nowrap/, "mobile profile links should keep each label on one line");
assert.match(mobileCss, /\.portrait-card\s*\{[^}]*grid-row:\s*3/, "mobile portrait should appear before the About me links");
assert.match(mobileCss, /\.open-source-note\s*\{[^}]*grid-row:\s*5/, "mobile ProtoMotions note should follow the portrait and profile links");
assert.match(mobileCss, /\.open-source-note\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+minmax\(0,\s*1fr\)/, "mobile ProtoMotions actions should share a compact two-column row");
assert.match(mobileCss, /\.open-source-copy\s*\{[^}]*grid-column:\s*1\s*\/\s*-1[^}]*grid-row:\s*1/, "mobile ProtoMotions copy should span above its actions");
assert.match(mobileCss, /\.open-source-impact\s*\{[^}]*grid-column:\s*1[^}]*grid-row:\s*2[^}]*align-self:\s*center/, "mobile stars should be vertically centered in the action row");
assert.match(mobileCss, /\.open-source-note > a:not\(\.open-source-impact\)\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*2[^}]*align-self:\s*center/, "mobile framework link should sit beside the stars");
assert.match(mobileCss, /\.rail-foot\s*\{[^}]*display:\s*flex[^}]*position:\s*absolute[^}]*top:[^}]*gap:\s*0\.55rem[^}]*align-items:\s*center/, "mobile header should show the cooking animation centered with breathing room");
assert.match(mobileCss, /\.cooking-indicator\s*\{[^}]*width:\s*0\.62rem[^}]*height:\s*0\.62rem/, "mobile cooking animation should be scaled to the compact header");
assert.doesNotMatch(mobileCss, /scroll-motion/, "the removed scroll-motion styles should not remain in mobile CSS");

assert.match(mobileCss, /\.project-content\s*\{[^}]*grid-row:\s*1/, "mobile project explanation should come first");
assert.match(mobileCss, /\.project-media\s*\{[^}]*grid-row:\s*2/, "mobile project video should follow the explanation");

assert.match(mobileCss, /\.publication-item\s*\{[^}]*grid-template-columns:\s*3\.4rem\s+minmax\(0,\s*1fr\)/, "mobile publications should use a compact thumbnail column");
assert.match(mobileCss, /\.publication-thumb\s*\{[^}]*width:\s*3\.4rem[^}]*aspect-ratio:\s*1/, "mobile publication marks should be small squares");
assert.match(mobileCss, /\.publication-copy\s*\{[^}]*display:\s*contents/, "publication copy children should participate in the compact mobile row");
assert.match(mobileCss, /\.publication-copy h3\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*1/, "mobile paper title should sit beside its mark");
assert.match(mobileCss, /\.publication-authors\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/, "mobile authors should span below the title row");
assert.match(mobileCss, /\.publication-summary\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/, "mobile summary should span below the title row");

console.log("mobile structure checks passed");
