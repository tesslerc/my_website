const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("script.js", "utf8");
assert.match(html, /video-panel-labels[^>]*><span>Recovery<\/span><span>Scene interaction<\/span><span>Teleoperation<\/span>/);
const cues = [...html.matchAll(/<span data-start="([^"]+)"[^>]*>([^<]+)<\/span>/g)];
assert.deepEqual(cues.map((cue) => cue[2]), ["Robust tracking", "Steering", "Stylized steering"]);

// Exercise the real initializer with both frame callbacks and the event fallback.
for (const supportsFrameCallback of [false, true]) {
  const labels = cues.map((cue) => ({ dataset: { start: cue[1] }, hidden: false }));
  const events = {};
  let frameCallback;
  const video = {
    currentTime: 0,
    addEventListener: (name, callback) => { events[name] = callback; },
  };
  if (supportsFrameCallback) video.requestVideoFrameCallback = (callback) => { frameCallback = callback; };
  const frame = { querySelector: () => video, querySelectorAll: () => labels };
  vm.runInNewContext(script, {
    window: { matchMedia: () => ({ matches: true }) },
    document: {
      querySelector: () => null,
      querySelectorAll: (selector) => selector === "[data-video-segments]" ? [frame] : [],
    },
  });
  const active = () => labels.findIndex((label) => !label.hidden);
  assert.equal(active(), 0, "the poster should show the first segment label");
  for (const [time, expected] of [[9, 0], [9.033334, 1], [16, 1], [16.033334, 2], [24, 2], [0, 0]]) {
    video.currentTime = time;
    if (supportsFrameCallback) frameCallback(0, { mediaTime: time });
    else events.timeupdate();
    assert.equal(active(), expected, `correct label at ${time}s, including loop reset`);
    assert.equal(labels.filter((label) => !label.hidden).length, 1);
  }
  video.currentTime = 18;
  events.seeking();
  assert.equal(active(), 2, "seeking should update the label even while paused");
  video.currentTime = 0;
  events.emptied();
  assert.equal(active(), 0, "reloading should restore the initial label");
}

console.log("video label checks passed");
