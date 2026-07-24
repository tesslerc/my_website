const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const groups = [...html.matchAll(/class="publication-group" data-group="([^"]+)"/g)].map((match) => match[1]);
const motionGroup = html.match(/<section class="publication-group" data-group="motion"[\s\S]*?<\/section>/)?.[0] || "";
const learningGroup = html.match(/<section class="publication-group" data-group="learning"[\s\S]*?<\/section>/)?.[0] || "";
const appliedGroup = html.match(/<section class="publication-group" data-group="applied"[\s\S]*?<\/section>/)?.[0] || "";
const articleOrder = (group) => [...group.matchAll(/<article class="publication-item reveal"[\s\S]*?<h3>([^<]+)<\/h3>[\s\S]*?<p class="publication-meta">(\d{4})/g)].map((match) => `${match[2]}:${match[1]}`);

assert.match(
  html.replace(/\s+/g, " "),
  /I build models and open systems that turn motion data into reusable motion priors for robots: a learned System 1 reflex layer for the next few seconds of control\./,
  "hero should carry the working thesis"
);
assert.doesNotMatch(html, /class="intro-strip/, "working statement strip should be removed");
assert.doesNotMatch(css, /\.intro-strip/, "working statement styles should be removed");
assert.deepEqual(groups, ["motion", "learning", "applied"], "archive groups should have a stable semantic order");
assert.equal((html.match(/class="publication-item reveal"/g) || []).length, 26, "archive should contain the selected 26 publications");
assert.doesNotMatch(html, /Deep Reinforcement Learning Works—Now What\?/, "the essay should be removed from the archive");
assert.doesNotMatch(html, /<h3>ProtoMotions: An Open-Source Framework for Humanoid Simulation and Control<\/h3>/, "ProtoMotions should stay in the hero rather than the archive");
assert.doesNotMatch(html, /thumb-open-source/, "the archive should not contain a ProtoMotions thumbnail");
const publicationArticles = html.match(/<article class="publication-item reveal"[^>]*>[\s\S]*?<\/article>/g) || [];
assert.equal(publicationArticles.length, 26, "link coverage should inspect all selected papers");
const plamoArticle = publicationArticles.find((article) => article.includes("PlaMo: Plan and Move in Rich 3D Physical Environments")) || "";
assert.equal(
  publicationArticles.filter((article) => !article.includes('class="publication-links"')).length,
  0,
  "every paper should expose a link row"
);
assert.equal((html.match(/class="publication-links"/g) || []).length, 26, "every paper should have exactly one link row");
assert.equal(
  publicationArticles.filter((article) => !article.includes('>Paper</a>')).length,
  0,
  "every paper should expose a paper link"
);
assert.doesNotMatch(plamoArticle, />Project<\/a>/, "PlaMo should keep only its paper link");
assert.match(motionGroup, /Action Robust Reinforcement Learning and Applications in Continuous Control/, "Action Robust RL should sit with Motion work");
assert.match(motionGroup, /<h3>Kimodo: Scaling Controllable Human Motion Generation<\/h3>[\s\S]*?A scalable kinematic motion model/, "Kimodo's publication entry should identify its kinematic model");
assert.match(motionGroup, /<h3>MaskedManipulator: Versatile Whole-Body Manipulation<\/h3>[\s\S]*?extending spatio-temporal goals into whole-body manipulation/, "MaskedManipulator's publication entry should identify its spatio-temporal manipulation extension");
assert.deepEqual(articleOrder(motionGroup), [
  "2026:GPC: Large-Scale Generative Pretraining for Transferable Motor Control",
  "2026:Kimodo: Scaling Controllable Human Motion Generation",
  "2026:HIL: Hybrid Imitation Learning for Dynamic Athletic Control",
  "2026:Task Tokens: A Flexible Approach to Adapting Behavior Foundation Models",
  "2025:MaskedManipulator: Versatile Whole-Body Manipulation",
  "2025:Emergent Active Perception and Dexterity of Simulated Humanoids from Visual Reinforcement Learning",
  "2024:MaskedMimic: Unified Physics-Based Character Control Through Masked Motion Inpainting",
  "2024:PlaMo: Plan and Move in Rich 3D Physical Environments",
  "2024:HumanoidOlympics: Sports Environments for Physically Simulated Humanoids",
  "2023:CALM: Conditional Adversarial Latent Models for Directable Virtual Characters",
  "2019:Action Robust Reinforcement Learning and Applications in Continuous Control",
], "Motion papers should be ordered newest first");
assert.deepEqual(articleOrder(learningGroup), [
  "2025:Gradient Boosting Reinforcement Learning",
  "2024:Learning to Move Like Professional Counter-Strike Players",
  "2023:Never Worse, Mostly Better: Stable Policy Improvement in Deep Reinforcement Learning",
  "2021:Ensemble Bootstrapping for Q-Learning",
  "2021:Inverse Reinforcement Learning in Contextual MDPs",
  "2020:Reward Tweaking: Maximizing the Total Reward While Planning for Short Horizons",
  "2019:Distributional Policy Optimization: An Alternative Approach for Continuous Control",
  "2019:Reward Constrained Policy Optimization",
  "2019:Language is Power: Representing States Using Natural Language in Reinforcement Learning",
  "2019:Action Assembly: Sparse Imitation Learning for Text Based Games with Combinatorial Action Spaces",
  "2017:A Deep Hierarchical Approach to Lifelong Learning in Minecraft",
], "Learning papers should be ordered newest first");
assert.match(learningGroup, /<h3>A Deep Hierarchical Approach to Lifelong Learning in Minecraft<\/h3>[\s\S]*?Reusable skills enable learning long-horizon tasks/, "the Minecraft paper should foreground reusable skills for long-horizon learning");
assert.match(appliedGroup, /<h3>Implementing Reinforcement Learning Datacenter Congestion Control in NVIDIA NICs<\/h3>[\s\S]*?real time on NVIDIA NIC hardware inside a production datacenter/, "the NIC paper should foreground real-time production deployment");
assert.doesNotMatch(learningGroup, /Action Robust Reinforcement Learning and Applications in Continuous Control/, "Action Robust RL should leave the general learning group");
assert.match(motionGroup, /Task Tokens: A Flexible Approach to Adapting Behavior Foundation Models/, "Task Tokens should sit with Motion work");
assert.doesNotMatch(learningGroup, /Task Tokens: A Flexible Approach to Adapting Behavior Foundation Models/, "Task Tokens should leave the broad learning group");
assert.doesNotMatch(motionGroup, /Learning to Move Like Professional Counter-Strike Players/, "Counter-Strike should leave the Motion group");
assert.match(learningGroup, /Learning to Move Like Professional Counter-Strike Players/, "Counter-Strike should sit with learning work");
assert.match(html, /<span class="publication-group-count">11 papers<\/span>/, "Motion group count should reflect the reclassified papers");
assert.equal((learningGroup.match(/class="publication-item reveal"/g) || []).length, 11, "learning group count should include the merged learning and transfer work");
assert.match(html, /<section class="publication-group" data-group="applied"[\s\S]*?<span class="publication-group-count">4 papers<\/span>/, "applied group count should remain stable");
assert.match(
  html,
  /<h3>PlaMo: Plan and Move in Rich 3D Physical Environments<\/h3>(?:(?!<\/article>)[\s\S])*?<p class="publication-meta">2024<br \/><span>ARXIV PREPRINT<\/span>/,
  "PlaMo should be labeled as an arXiv preprint"
);
assert.match(css, /\.publication-group \{ --group-accent: var\(--coral\)/, "motion group accent should exist");
assert.match(css, /\.publication-group\[data-group="learning"\]/, "learning group accent should exist");
assert.doesNotMatch(css, /data-group="transfer"/, "the former transfer accent should be removed");
assert.match(css, /\.publication-group\[data-group="applied"\]/, "applied group accent should exist");

console.log("archive taxonomy checks passed");
