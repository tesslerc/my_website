const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

assert.ok(fs.existsSync("assets/avatar.png"), "the top-left avatar asset should be present");
assert.match(html, /class="wordmark-avatar"[^>]*src="assets\/avatar\.png"/, "the wordmark should use the avatar asset");
assert.match(html, /class="wordmark-avatar"[^>]*alt="[^"]+"/, "the avatar should have accessible alternative text");
assert.match(css, /\.wordmark-avatar\s*\{[^}]*aspect-ratio:\s*1/, "the avatar should remain square in the wordmark");
assert.match(css, /\.wordmark-avatar\s*\{[^}]*object-fit:\s*cover/, "the avatar should crop cleanly as an icon");
assert.doesNotMatch(css, /\.wordmark-mark\s*\{[^}]*border-radius:\s*50%/, "the avatar icon should use a square frame");

console.log("portfolio avatar checks passed");
