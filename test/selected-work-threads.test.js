const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

const projectCards = html.match(/<article class="project-card[\s\S]*?<\/article>/g) || [];
const threads = html.match(/<details class="project-thread"[\s\S]*?<\/details>/g) || [];
const gpcCard = projectCards.find((card) => card.includes("project-gpc"));
const kimodoCard = projectCards.find((card) => card.includes("project-kimodo"));

assert.equal(projectCards.length, 3, "selected work should retain three featured systems");
assert.equal(threads.length, 1, "only the concrete MaskedMimic lineage should expose a research thread");
assert.equal((html.match(/<summary><span>Research path/g) || []).length, 1, "the research thread should have a clear disclosure control");
assert.doesNotMatch(html, /Trace the thread/, "thread controls should use direct interaction language");
assert.equal((html.match(/class="project-thread-node/g) || []).length, 3, "the research thread should have three path nodes");
assert.match(html, /MaskedMimic[\s\S]*MaskedManipulator/, "the motion-prior thread should connect MaskedMimic to MaskedManipulator");
assert.ok(gpcCard, "GPC should retain a featured work card");
assert.ok(kimodoCard, "Kimodo should retain a featured work card");
assert.doesNotMatch(gpcCard, /class="project-thread"/, "GPC should not expose a research path");
assert.doesNotMatch(kimodoCard, /class="project-thread"/, "Kimodo should not expose a research path");
assert.match(html, /class="project-thread-node project-thread-next"[\s\S]*New control modes, robots, scene awareness/, "the path should point to the next MaskedMimic directions");
assert.match(html, /New control modes, robots, scene awareness<\/strong><p>The same motion prior can extend to new forms of control and interaction\./, "the next direction should explain how the thread expands");
assert.match(script, /addEventListener\("toggle"/, "thread disclosures should coordinate through native details toggles");
assert.match(script, /card\.addEventListener\("click"/, "the threaded card should open from its surface");
assert.match(script, /event\.target\.closest\("a, button, video, summary, input, select, textarea"\)/, "card clicks should preserve native media and link controls while allowing thread-body collapse");
assert.doesNotMatch(script, /\.project-thread"\)\) return/, "thread-body clicks should remain available to collapse the card");
assert.match(script, /thread\.open = !thread\.open/, "card clicks should toggle the research path");
assert.match(css, /\.project-thread\s*\{[^}]*grid-column:\s*1 \/ -1/, "thread detail should span the featured card");
assert.match(css, /\.project-thread-node\s*\+\s*\.project-thread-node::before/, "thread nodes should read as a connected path");
assert.match(css, /\.project-thread-chevron/, "thread control should use a visible expansion chevron");
assert.match(css, /#work-maskedmimic\s*\{[^}]*cursor:\s*pointer/, "the threaded card should signal that it is clickable");
assert.match(css, /#work-maskedmimic \.project-thread-body\s*\{[^}]*cursor:\s*pointer/, "the expanded thread body should signal that it collapses on click");
assert.doesNotMatch(css, /#work-maskedmimic \.project-thread-body\s*\{[^}]*cursor:\s*default/, "the expanded thread body should not look inert");
assert.match(css, /\.project-masked\s*\{[^}]*--signal-one-x/, "MaskedMimic should have its own signal variation");
assert.match(css, /\.project-gpc\s*\{[^}]*--signal-one-x/, "GPC should have its own signal variation");
assert.match(css, /\.project-kimodo\s*\{[^}]*--signal-one-x/, "Kimodo should have its own signal variation");
assert.match(css, /\.project-signal i:nth-of-type\(1\)[^}]*transform: translate/, "signal dots should use positional offsets");

console.log("selected work thread checks passed");
