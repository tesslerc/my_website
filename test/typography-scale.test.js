const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const mobileCss = css.slice(css.indexOf("@media (max-width: 820px)"));

assert.match(css, /--type-label:\s*0\.7rem/, "interactive and section labels should share a readable type token");
assert.match(css, /--type-caption:\s*0\.66rem/, "technical captions should share a readable type token");
assert.match(css, /--type-body-small:\s*0\.88rem/, "supporting copy should have a comfortable reading size");
assert.match(css, /--type-author:\s*0\.8rem/, "publication author lines should have a dedicated readable size");

assert.match(css, /\.eyebrow, \.section-index, \.work-meta, \.system-state, \.trajectory-readout, \.trajectory-controls, \.text-button\s*\{[^}]*font:\s*400 var\(--type-label\)/, "section labels should use the larger label token");
assert.match(css, /\.profile-link\s*\{[^}]*font:\s*400 var\(--type-label\)/, "profile links should be comfortably readable");
assert.match(html, /class="profile-links-label"><span>About me<\/span><\/span>/, "the About me label should have its own orientation wrapper");
assert.match(html, /class="profile-affiliation">Senior Research Scientist @ <strong class="profile-company">NVIDIA<\/strong><\/span>/, "the role should be separated from the About me label");
assert.match(html, /class="profile-link-row">[\s\S]*Scholar[\s\S]*LinkedIn \/ CV[\s\S]*<\/span>/, "the professional links should form a dedicated row");
assert.match(css, /\.profile-links\s*\{[^}]*display:\s*grid[^}]*grid-template-columns:\s*auto\s+minmax\(0,\s*1fr\)/, "the desktop profile panel should use a narrow label column and flexible content column");
assert.match(css, /\.profile-links-label\s*\{[^}]*grid-row:\s*1\s*\/\s*3[^}]*border-right:\s*1px solid var\(--rule\)/, "the desktop label should span both content rows behind a quiet divider");
assert.match(css, /\.profile-links-label > span\s*\{[^}]*writing-mode:\s*vertical-rl[^}]*transform:\s*rotate\(180deg\)/, "the desktop About me label should read bottom to top");
assert.match(css, /\.profile-affiliation\s*\{[^}]*grid-column:\s*2[^}]*grid-row:\s*1/, "the role should occupy the first content row");
assert.match(css, /\.profile-link-row\s*\{[^}]*display:\s*flex[^}]*grid-column:\s*2[^}]*grid-row:\s*2/, "the professional links should occupy the second content row");
assert.match(mobileCss, /\.profile-links-label > span\s*\{[^}]*writing-mode:\s*horizontal-tb[^}]*transform:\s*none/, "mobile should restore normal horizontal reading");
assert.match(css, /\.open-source-note p\s*\{[^}]*font-size:\s*var\(--type-body-small\)/, "the open-source explanation should read as body copy");
assert.match(css, /\.media-kicker\s*\{[^}]*font:\s*400 var\(--type-caption\)/, "media labels should not use the smallest type");
assert.match(css, /\.media-link\s*\{[^}]*font:\s*400 var\(--type-caption\)/, "media links should be readable at a glance");
assert.match(css, /\.publication-group-heading p:last-child\s*\{[^}]*font-size:\s*var\(--type-body-small\)/, "publication group descriptions should read as supporting copy");
assert.match(css, /\.publication-authors\s*\{[^}]*font-size:\s*var\(--type-author\)/, "publication authors should not be tiny metadata");
assert.match(css, /\.publication-summary\s*\{[^}]*font-size:\s*var\(--type-body-small\)/, "publication summaries should be easy to scan");
assert.match(css, /\.publication-meta\s*\{[^}]*font:\s*400 var\(--type-label\)/, "publication metadata should remain legible on desktop");
assert.match(css, /\.publication-links a\s*\{[^}]*font:\s*500 var\(--type-caption\)/, "paper links should remain readable without dominating the row");
assert.match(mobileCss, /\.rail-foot\s*\{[^}]*font:\s*400 0\.55rem\/1\.3/, "the mobile cooking label should not render at seven pixels");

console.log("typography scale checks passed");
