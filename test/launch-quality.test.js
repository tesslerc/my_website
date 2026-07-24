const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");

assert.match(html, /<link rel="icon" href="assets\/avatar\.png" type="image\/png" \/>/, "the site should expose the avatar as its favicon");
assert.match(html, /<link rel="canonical" href="https:\/\/chen-tessler\.com\/" \/>/, "the site should declare its canonical domain");
assert.match(html, /<meta property="og:title" content="Chen Tessler \| Motion priors for System 1 control" \/>/, "shared pages should have the current thesis as their title");
assert.match(html, /<meta property="og:description" content="Chen Tessler is a Senior Research Scientist at NVIDIA working on motion generation, control, learning, and open-source robotics systems\." \/>/, "shared pages should have a concise professional description");
assert.match(html, /<meta property="og:type" content="website" \/>/, "shared pages should declare their type");
assert.match(html, /<meta property="og:url" content="https:\/\/chen-tessler\.com\/" \/>/, "shared pages should declare their canonical URL");
assert.match(html, /<meta property="og:image" content="https:\/\/chen-tessler\.com\/assets\/social-preview\.jpg" \/>/, "shared pages should use a dedicated preview image");
assert.match(html, /<meta property="og:image:width" content="1200" \/>/, "the share image should declare its width");
assert.match(html, /<meta property="og:image:height" content="630" \/>/, "the share image should declare its height");
assert.match(html, /<meta name="twitter:card" content="summary_large_image" \/>/, "X should use a large share card");
assert.match(html, /<meta name="twitter:image" content="https:\/\/chen-tessler\.com\/assets\/social-preview\.jpg" \/>/, "X should use the dedicated preview image");
assert.match(html, /<video class="project-video" autoplay muted loop playsinline preload="none"/, "featured videos should avoid eager media downloads");
assert.match(script, /function initProjectVideos()/, "video behavior should have a dedicated initializer");
assert.match(script, /new IntersectionObserver/, "videos should be managed near the viewport");
assert.match(script, /document\.addEventListener\("visibilitychange"/, "videos should pause when the document is hidden");
assert.match(script, /prefersReducedMotion\.matches/, "video autoplay should respect reduced-motion preferences");
assert.match(script, /video\.pause\(\)/, "video lifecycle should pause media when it is not active");
assert.match(script, /video\.play\(\)/, "video lifecycle should resume media near the viewport");

assert.ok(fs.existsSync("assets/social-preview.jpg"), "the dedicated social preview should be committed locally");
const preview = fs.statSync("assets/social-preview.jpg");
assert.ok(preview.size > 1000, "the social preview should contain real image data");

console.log("launch quality checks passed");
