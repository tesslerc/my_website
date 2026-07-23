const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const mobileCss = css.slice(css.indexOf("@media (max-width: 820px)"));

assert.match(html, /class="portrait-card reveal"/, "the hero should contain the family portrait");
assert.match(html, /class="open-source-note"/, "the hero should contain the open-source note");
assert.match(mobileCss, /\.hero-copy\s*\{[^}]*display:\s*contents/, "mobile hero copy should expose its children to the hero grid");
assert.match(mobileCss, /\.hero-lede\s*\{[^}]*grid-row:\s*2/, "mobile hero lede should appear before the portrait");
assert.match(mobileCss, /\.profile-links\s*\{[^}]*grid-column:\s*1[^}]*grid-row:\s*3/, "mobile profile links should follow the lede");
assert.match(mobileCss, /\.portrait-card\s*\{[^}]*grid-row:\s*4/, "mobile portrait should appear before ProtoMotions");
assert.match(mobileCss, /\.open-source-note\s*\{[^}]*grid-row:\s*5/, "mobile ProtoMotions note should follow the portrait and profile links");

assert.match(mobileCss, /\.project-content\s*\{[^}]*grid-row:\s*1/, "mobile project explanation should come first");
assert.match(mobileCss, /\.project-media\s*\{[^}]*grid-row:\s*2/, "mobile project video should follow the explanation");

assert.match(mobileCss, /\.publication-item\s*\{[^}]*grid-template-columns:\s*3\.4rem\s+minmax\(0,\s*1fr\)/, "mobile publications should use a compact thumbnail column");
assert.match(mobileCss, /\.publication-thumb\s*\{[^}]*width:\s*3\.4rem[^}]*aspect-ratio:\s*1/, "mobile publication marks should be small squares");
assert.match(mobileCss, /\.publication-copy\s*\{[^}]*display:\s*contents/, "publication copy children should participate in the compact mobile row");
assert.match(mobileCss, /\.publication-copy h3\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*1/, "mobile paper title should sit beside its mark");
assert.match(mobileCss, /\.publication-authors\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/, "mobile authors should span below the title row");
assert.match(mobileCss, /\.publication-summary\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/, "mobile summary should span below the title row");

console.log("mobile structure checks passed");
