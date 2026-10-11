const assert = require("node:assert/strict");
const test = require("node:test");
const vm = require("node:vm");
const fs = require("node:fs");

const context = { window: {} };
vm.runInNewContext(fs.readFileSync("chatgpt-ideas.js", "utf8"), context);
const catalog = context.window.ChatGPTVideoIdeas;

test("keeps Daxton's transition first and credits him", () => {
  assert.equal(catalog.ideas[0].id, "chatgpt-daxton-class-to-tetons");
  assert.match(catalog.ideas[0].title, /Daxton's Idea/);
  assert.match(catalog.ideas[0].desc, /Original transition concept by Daxton/);
});

test("every generated idea is complete and executable", () => {
  assert.equal(catalog.category, "CHATGPT'S VIDEO IDEAS");
  assert.equal(catalog.ideas.length, 16);
  for (const idea of catalog.ideas) {
    assert.ok(idea.id && idea.title && idea.desc && idea.ref);
    assert.ok(idea.scenes.length >= 5, `${idea.title} needs at least five scenes`);
    assert.ok(idea.scenes.every(scene => scene.id && scene.what && scene.p.length === 5));
  }
});

test("new concepts use grounded travel language", () => {
  const text = catalog.ideas.slice(1).map(idea => `${idea.title} ${idea.desc} ${idea.scenes.map(s => s.what).join(" ")}`).join(" ");
  for (const detail of ["thirty-six hours", "Split gas", "Not glamorous", "Nobody Felt Ready"]) {
    assert.match(text, new RegExp(detail, "i"));
  }
});

test("journey-start batch covers packing, driving, and stops", () => {
  const titles = catalog.ideas.slice(5, 9).map(idea => idea.title);
  assert.deepEqual([...titles], [
    "Trunk Tetris: The Road Trip Draft",
    "The Things Everyone Says Before Leaving",
    "Everyone Gets a Road Trip Job",
    "Gas Station Pit Crew"
  ]);
});

test("receipt concept discloses costs without exposing payment details", () => {
  const receiptIdea = catalog.ideas.find(idea => idea.id === "chatgpt-receipts-to-tetons");
  const script = receiptIdea.scenes.map(scene => scene.what).join(" ");
  assert.match(script, /cost per person/i);
  assert.match(script, /Never show card numbers or personal details/i);
});

test("repeated-stop concept explicitly protects driver attention", () => {
  const idea = catalog.ideas.find(item => item.id === "chatgpt-one-second-every-stop");
  const script = idea.scenes.map(scene => scene.what).join(" ");
  assert.match(script, /passengers record/i);
  assert.match(script, /Never ask the driver to film or perform/i);
});

test("each recurring batch adds five complete ideas", () => {
  const batch = catalog.ideas.slice(-5);
  assert.equal(batch.length, 5);
  assert.ok(batch.every(idea => idea.scenes.length >= 5));
  assert.equal(new Set(batch.map(idea => idea.id)).size, 5);
});
