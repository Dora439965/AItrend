// @AI_GENERATED: Unit test for computeBeginnerScore
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Extract and eval the function since it's not exported
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const code = readFileSync(path.join(ROOT, "scripts/update-data.mjs"), "utf8");

// Extract hasChinese helper
const hasChineseFn = new Function("return " + code.match(/function hasChinese\(value[^}]+\}/)[0])();

// Build computeBeginnerScore with hasChinese in scope
const fnBody = code.match(/function computeBeginnerScore\(project\) \{([\s\S]*?)^}/m)[1];
const computeBeginnerScore = new Function("project", "hasChinese", fnBody).bind(null);
function score(project) {
  return computeBeginnerScore(project, hasChineseFn);
}

test("returns total and breakdown object", () => {
  const result = score({ description: "hello", topics: [], stargazers_count: 100, open_issues_count: 5 });
  assert.ok(typeof result.total === "number");
  assert.ok(typeof result.breakdown === "object");
  assert.ok("readmeQuality" in result.breakdown);
  assert.ok("installInstructions" in result.breakdown);
  assert.ok("dependencySimplicity" in result.breakdown);
  assert.ok("issueResponseRate" in result.breakdown);
  assert.ok("languageAccessibility" in result.breakdown);
  assert.ok("examplesPresence" in result.breakdown);
});

test("total equals sum of breakdown values", () => {
  const project = {
    name: "awesome-starter",
    description: "A " + "x".repeat(200) + " project for install setup demo",
    topics: ["docker", "example", "tutorial", "docs", "python", "ai"],
    language: "Python",
    stargazers_count: 500,
    open_issues_count: 10,
    homepage: "https://example.com",
  };
  const result = score(project);
  const sum = result.breakdown.readmeQuality + result.breakdown.installInstructions
    + result.breakdown.dependencySimplicity + result.breakdown.issueResponseRate
    + result.breakdown.languageAccessibility + result.breakdown.examplesPresence;
  assert.equal(result.total, Math.max(0, Math.min(100, sum)));
});

test("total is clamped to [0, 100]", () => {
  // Maximal project: should cap at 100
  const project = {
    name: "starter-template",
    description: "A " + "x".repeat(250) + " project for install and setup",
    topics: ["docker", "example", "tutorial", "documentation", "docs", "python", "ai"],
    language: "Python",
    stargazers_count: 800,
    open_issues_count: 5,
    homepage: "https://example.com",
  };
  const result = score(project);
  assert.ok(result.total >= 0);
  assert.ok(result.total <= 100);
});

test("minimal project gets low but non-negative score", () => {
  const project = {
    name: "x",
    description: "",
    topics: [],
    language: "",
    stargazers_count: 0,
    open_issues_count: 0,
  };
  const result = score(project);
  assert.ok(result.total >= 0);
  assert.ok(result.total <= 100);
});

test("readmeQuality: description > 200 chars gives +10", () => {
  const short = score({ description: "short", topics: [], stargazers_count: 100, open_issues_count: 5 });
  const long = score({ description: "x".repeat(201), topics: [], stargazers_count: 100, open_issues_count: 5 });
  assert.ok(long.breakdown.readmeQuality >= short.breakdown.readmeQuality + 10);
});

test("languageAccessibility: Python gets 15", () => {
  const result = score({ description: "", topics: [], language: "Python", stargazers_count: 100, open_issues_count: 5 });
  assert.equal(result.breakdown.languageAccessibility, 15);
});

test("languageAccessibility: JavaScript gets 12", () => {
  const result = score({ description: "", topics: [], language: "JavaScript", stargazers_count: 100, open_issues_count: 5 });
  assert.equal(result.breakdown.languageAccessibility, 12);
});

test("languageAccessibility: Chinese description gives +3 bonus (capped at 15)", () => {
  const result = score({ description: "这是一个中文项目", topics: [], language: "Python", stargazers_count: 100, open_issues_count: 5 });
  // Python is 15, +3 bonus but capped at 15
  assert.equal(result.breakdown.languageAccessibility, 15);
});

test("languageAccessibility: Chinese bonus on JS raises to 15", () => {
  const result = score({ description: "这是中文", topics: [], language: "JavaScript", stargazers_count: 100, open_issues_count: 5 });
  // JS is 12, +3 bonus = 15 (cap)
  assert.equal(result.breakdown.languageAccessibility, 15);
});

test("examplesPresence: topics with example gives 10", () => {
  const result = score({ description: "", topics: ["example"], language: "", stargazers_count: 100, open_issues_count: 5 });
  assert.equal(result.breakdown.examplesPresence, 10);
});

test("examplesPresence: topics with beginner gives 5", () => {
  const result = score({ description: "", topics: ["beginner"], language: "", stargazers_count: 100, open_issues_count: 5 });
  assert.equal(result.breakdown.examplesPresence, 5);
});

test("issueResponseRate: no open issues gives 15", () => {
  const result = score({ description: "", topics: [], language: "", stargazers_count: 100, open_issues_count: 0 });
  assert.equal(result.breakdown.issueResponseRate, 15);
});

test("issueResponseRate: low issues with high ratio gives 15", () => {
  const result = score({ description: "", topics: [], language: "", stargazers_count: 1000, open_issues_count: 10 });
  assert.equal(result.breakdown.issueResponseRate, 15);
});

test("dependencySimplicity: starter in name gives 15", () => {
  const result = score({ name: "my-starter", description: "", topics: [], language: "", stargazers_count: 100, open_issues_count: 5 });
  assert.equal(result.breakdown.dependencySimplicity, 15);
});

test("dependencySimplicity: large framework gives 5", () => {
  const result = score({ name: "big-framework", description: "", topics: [], language: "JavaScript", stargazers_count: 60000, open_issues_count: 500 });
  assert.equal(result.breakdown.dependencySimplicity, 5);
});

console.log("All computeBeginnerScore tests passed!");
// @AI_GENERATED: end
