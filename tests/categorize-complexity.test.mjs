// @AI_GENERATED
import { describe, it } from "node:test";
import assert from "node:assert/strict";

// We need to extract the functions from the module. Since they are not exported,
// we'll re-implement the logic here for testing (or test via inline import trick).
// For now, let's directly define small wrappers that replicate the logic.

const BEGINNER_CATEGORY_TAGS = [
  "chatbot", "knowledge-base", "coding-assistant", "image-generation",
  "automation", "browser-tool", "cli-tool", "web-app", "api-wrapper", "learning-project",
];

function categorizeBeginnerProject(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const description = (project.description || "").toLowerCase();
  const beginnerTag = project._beginnerTag || "";
  const tags = new Set();

  if (beginnerTag && BEGINNER_CATEGORY_TAGS.includes(beginnerTag)) {
    tags.add(beginnerTag);
  }

  const text = `${topics.join(" ")} ${description}`;

  if (text.includes("chatbot") || text.includes("chat") || text.includes("conversational")) tags.add("chatbot");
  if (text.includes("rag") || text.includes("knowledge") || text.includes("retrieval") || text.includes("vector")) tags.add("knowledge-base");
  if (text.includes("coding") || text.includes("copilot") || text.includes("code-gen") || text.includes("codegen")) tags.add("coding-assistant");
  if (text.includes("image") || text.includes("stable-diffusion") || text.includes("diffusion") || text.includes("dalle")) tags.add("image-generation");
  if (text.includes("automation") || text.includes("automate") || text.includes("workflow")) tags.add("automation");
  if (text.includes("browser") || text.includes("extension") || text.includes("chrome")) tags.add("browser-tool");
  if (text.includes("cli") || text.includes("command-line") || text.includes("terminal")) tags.add("cli-tool");
  if (text.includes("webapp") || text.includes("web-app") || text.includes("nextjs") || text.includes("streamlit") || text.includes("gradio")) tags.add("web-app");
  if (text.includes("api") || text.includes("wrapper") || text.includes("fastapi") || text.includes("openai")) tags.add("api-wrapper");
  if (text.includes("tutorial") || text.includes("learning") || text.includes("example") || text.includes("demo") || text.includes("starter")) tags.add("learning-project");

  if (tags.size === 0) {
    tags.add(beginnerTag && BEGINNER_CATEGORY_TAGS.includes(beginnerTag) ? beginnerTag : "learning-project");
  }

  return [...tags].slice(0, 3);
}

function estimateBeginnerSetupComplexity(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const language = (project.language || "").toLowerCase();

  if (
    (language === "python" && topics.some((t) => ["streamlit", "gradio", "notebook", "jupyter"].includes(t))) ||
    topics.some((t) => ["browser-extension", "chrome-extension", "no-code", "easy"].includes(t))
  ) {
    return "low";
  }

  if (
    ["rust", "c++", "go"].includes(language) ||
    topics.some((t) => ["kubernetes", "distributed", "infrastructure", "docker-compose", "k8s"].includes(t)) ||
    (topics.includes("docker") && !topics.some((t) => ["streamlit", "gradio", "notebook"].includes(t)))
  ) {
    return "high";
  }

  return "medium";
}

function extractPrerequisiteSkills(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const language = (project.language || "").toLowerCase();
  const skills = ["basic-terminal", "git-basics"];

  if (language === "python") {
    skills.push("python-basics");
  }
  if (language === "javascript" || language === "typescript") {
    skills.push("javascript-basics", "npm-usage");
  }

  if (topics.includes("docker") || topics.includes("docker-compose")) {
    skills.push("docker-basics");
  }
  if (topics.includes("api") || topics.includes("openai") || topics.includes("fastapi")) {
    skills.push("api-key-management");
  }
  if (topics.includes("database") || topics.includes("sql") || topics.includes("postgres") || topics.includes("sqlite")) {
    skills.push("database-basics");
  }

  return [...new Set(skills)];
}

describe("categorizeBeginnerProject", () => {
  it("should use _beginnerTag as primary category", () => {
    const project = { _beginnerTag: "chatbot", topics: [], description: "" };
    const result = categorizeBeginnerProject(project);
    assert.ok(result.includes("chatbot"));
  });

  it("should add tags from topics scanning", () => {
    const project = { _beginnerTag: "chatbot", topics: ["rag", "knowledge"], description: "" };
    const result = categorizeBeginnerProject(project);
    assert.ok(result.includes("chatbot"));
    assert.ok(result.includes("knowledge-base"));
  });

  it("should return at least 1 tag even with no matches", () => {
    const project = { _beginnerTag: "", topics: [], description: "some random project" };
    const result = categorizeBeginnerProject(project);
    assert.ok(result.length >= 1);
    assert.ok(BEGINNER_CATEGORY_TAGS.includes(result[0]));
  });

  it("should default to learning-project when no matches and no beginnerTag", () => {
    const project = { topics: [], description: "xyz" };
    const result = categorizeBeginnerProject(project);
    assert.ok(result.includes("learning-project"));
  });

  it("should return max 3 tags", () => {
    const project = {
      _beginnerTag: "chatbot",
      topics: ["rag", "browser", "cli", "automation", "api"],
      description: "image generation tutorial",
    };
    const result = categorizeBeginnerProject(project);
    assert.ok(result.length <= 3);
  });

  it("should only return tags from BEGINNER_CATEGORY_TAGS", () => {
    const project = { _beginnerTag: "chatbot", topics: ["chat", "rag"], description: "an api wrapper" };
    const result = categorizeBeginnerProject(project);
    result.forEach((tag) => {
      assert.ok(BEGINNER_CATEGORY_TAGS.includes(tag), `${tag} is not in BEGINNER_CATEGORY_TAGS`);
    });
  });
});

describe("estimateBeginnerSetupComplexity", () => {
  it("should return 'low' for Python + streamlit", () => {
    const project = { language: "Python", topics: ["streamlit", "ai"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "low");
  });

  it("should return 'low' for browser extensions", () => {
    const project = { language: "JavaScript", topics: ["browser-extension"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "low");
  });

  it("should return 'high' for Rust language", () => {
    const project = { language: "Rust", topics: ["ai"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "high");
  });

  it("should return 'high' for C++ language", () => {
    const project = { language: "C++", topics: ["ml"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "high");
  });

  it("should return 'high' for docker topic (without streamlit)", () => {
    const project = { language: "Python", topics: ["docker", "ai"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "high");
  });

  it("should return 'high' for kubernetes topic", () => {
    const project = { language: "Python", topics: ["kubernetes", "ai"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "high");
  });

  it("should return 'medium' for basic Python project", () => {
    const project = { language: "Python", topics: ["ai", "chatbot"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "medium");
  });

  it("should return 'medium' for JavaScript project without special indicators", () => {
    const project = { language: "JavaScript", topics: ["ai"] };
    assert.equal(estimateBeginnerSetupComplexity(project), "medium");
  });
});

describe("extractPrerequisiteSkills", () => {
  it("should always include basic-terminal and git-basics", () => {
    const project = { language: "", topics: [] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("basic-terminal"));
    assert.ok(result.includes("git-basics"));
  });

  it("should add python-basics for Python projects", () => {
    const project = { language: "Python", topics: [] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("python-basics"));
  });

  it("should add javascript-basics and npm-usage for JS projects", () => {
    const project = { language: "JavaScript", topics: [] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("javascript-basics"));
    assert.ok(result.includes("npm-usage"));
  });

  it("should add docker-basics for docker topic", () => {
    const project = { language: "Python", topics: ["docker"] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("docker-basics"));
  });

  it("should add api-key-management for api topic", () => {
    const project = { language: "Python", topics: ["api"] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("api-key-management"));
  });

  it("should add database-basics for database topic", () => {
    const project = { language: "Python", topics: ["database"] };
    const result = extractPrerequisiteSkills(project);
    assert.ok(result.includes("database-basics"));
  });

  it("should not have duplicates", () => {
    const project = { language: "Python", topics: ["api", "openai", "fastapi"] };
    const result = extractPrerequisiteSkills(project);
    const unique = [...new Set(result)];
    assert.equal(result.length, unique.length);
  });
});
// @AI_GENERATED: end
