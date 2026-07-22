const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const groups = [...html.matchAll(/class="publication-group" data-group="([^"]+)"/g)].map((match) => match[1]);

assert.match(
  html.replace(/\s+/g, " "),
  /I build models and open systems that turn experience into reusable motion priors — by learning a useful motion once, reusing it where the horizon is short, and making the next few seconds count\./,
  "hero should carry the working thesis"
);
assert.doesNotMatch(html, /class="intro-strip/, "working statement strip should be removed");
assert.doesNotMatch(css, /\.intro-strip/, "working statement styles should be removed");
assert.deepEqual(groups, ["motion", "control", "transfer", "applied"], "archive groups should have a stable semantic order");
assert.equal((html.match(/class="publication-item reveal"/g) || []).length, 28, "archive should retain all 28 publications");
assert.equal((html.match(/thumb-open-source/g) || []).length, 1, "ProtoMotions should have one thumbnail");
assert.match(css, /\.publication-group \{ --group-accent: var\(--coral\)/, "motion group accent should exist");
assert.match(css, /\.publication-group\[data-group="applied"\]/, "applied group accent should exist");

console.log("archive taxonomy checks passed");
