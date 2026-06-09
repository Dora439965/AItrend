// @AI_GENERATED: Match Engine unit tests
import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Since app.js is a browser script with DOM references, we extract and test the pure functions.
// We re-declare the logic here for testing purposes.

const COMPLEXITY_LEVELS = ["low", "medium", "high"];

const ENVIRONMENT_TO_MAX_COMPLEXITY = {
  "browser-only-no-install": "low",
  "simple-local-setup": "medium",
  "docker-comfortable": "high",
  "any-environment": "high",
};

const INTEREST_TO_CATEGORY_MAP = {
  "AI-chatbot": ["chatbot"],
  "knowledge-search": ["knowledge-base"],
  "image-creation": ["image-generation"],
  "code-helper": ["coding-assistant"],
  "browser-automation": ["browser-tool"],
  "data-analysis": ["cli-tool", "api-wrapper"],
  "personal-assistant": ["chatbot", "automation"],
  "content-creation": ["image-generation", "web-app"],
};

const RELATED_CATEGORIES = {
  "chatbot": ["automation", "api-wrapper"],
  "knowledge-base": ["chatbot", "learning-project"],
  "image-generation": ["web-app"],
  "coding-assistant": ["cli-tool", "learning-project"],
  "browser-tool": ["automation", "cli-tool"],
  "cli-tool": ["api-wrapper", "automation"],
  "api-wrapper": ["cli-tool", "web-app"],
  "automation": ["cli-tool", "browser-tool"],
  "web-app": ["api-wrapper", "chatbot"],
  "learning-project": ["api-wrapper", "cli-tool"],
};

const TIME_BUDGET_TO_MINUTES = {
  "30-minutes-per-day": 30,
  "1-hour-per-day": 60,
  "half-day-per-week": 120,
  "full-day-per-week": 240,
  "flexible-long-term": 999,
};

const BACKGROUND_TO_SKILLS = {
  "student": ["basic-terminal", "git-basics"],
  "product-manager": ["basic-web-browsing"],
  "designer": ["basic-web-browsing", "basic-html"],
  "marketer": ["basic-web-browsing"],
  "business-analyst": ["basic-terminal", "basic-sql"],
  "career-changer": ["basic-terminal"],
  "hobbyist": ["basic-web-browsing"],
  "other": ["basic-web-browsing"],
};

const GOAL_TO_CATEGORIES = {
  "build-a-portfolio-project": ["web-app", "chatbot"],
  "understand-AI-tools": ["learning-project", "api-wrapper"],
  "automate-personal-workflow": ["automation", "cli-tool", "browser-tool"],
  "explore-career-change": ["learning-project", "web-app"],
  "learn-coding-basics": ["learning-project", "cli-tool"],
  "build-a-product-idea": ["web-app", "chatbot", "automation"],
};

function computeSetupComplexityMatch(environmentPreference, projectComplexity) {
  const maxAllowed = ENVIRONMENT_TO_MAX_COMPLEXITY[environmentPreference] || "low";
  const userLevel = COMPLEXITY_LEVELS.indexOf(maxAllowed);
  const projectLevel = COMPLEXITY_LEVELS.indexOf(projectComplexity);
  if (projectLevel < 0 || userLevel < 0) return 100;
  const diff = projectLevel - userLevel;
  if (diff <= 0) return 100;
  if (diff === 1) return 50;
  return 0;
}

function computeInterestAlignment(interestDirections, categoryTags) {
  if (!interestDirections || interestDirections.length === 0) return 0;
  const projectTags = categoryTags || [];
  let totalScore = 0;
  for (const interest of interestDirections) {
    const exactCategories = INTEREST_TO_CATEGORY_MAP[interest] || [];
    let bestScore = 0;
    for (const cat of exactCategories) {
      if (projectTags.includes(cat)) {
        bestScore = 100;
        break;
      }
      const relatedCats = RELATED_CATEGORIES[cat] || [];
      for (const related of relatedCats) {
        if (projectTags.includes(related) && bestScore < 60) {
          bestScore = 60;
        }
      }
    }
    totalScore += bestScore;
  }
  return Math.round(totalScore / interestDirections.length);
}

function computeTimeBudgetFeasibility(timeBudget, estimatedFirstRunMinutes) {
  const maxMinutes = TIME_BUDGET_TO_MINUTES[timeBudget];
  if (maxMinutes === undefined) return 100;
  if (estimatedFirstRunMinutes <= maxMinutes) return 100;
  if (estimatedFirstRunMinutes <= maxMinutes * 2) return 50;
  return 0;
}

function computePrerequisiteSkillMatch(background, prerequisiteSkills) {
  if (!prerequisiteSkills || prerequisiteSkills.length === 0) return 100;
  const userSkills = BACKGROUND_TO_SKILLS[background] || ["basic-web-browsing"];
  let matched = 0;
  for (const skill of prerequisiteSkills) {
    if (userSkills.includes(skill)) {
      matched++;
    }
  }
  return Math.round((matched / prerequisiteSkills.length) * 100);
}

function computeGoalAlignment(goal, categoryTags) {
  const preferredTags = GOAL_TO_CATEGORIES[goal] || [];
  const projectTags = categoryTags || [];
  for (const tag of preferredTags) {
    if (projectTags.includes(tag)) return 100;
  }
  return 0;
}

function generateMatchReasonText(userProfile, project, breakdown) {
  const parts = [];
  if (breakdown.setupComplexityMatch >= 80) {
    parts.push("这个项目的安装难度适合你当前的环境偏好");
  }
  if (breakdown.interestAlignment >= 80) {
    const interests = userProfile.interestDirections || [];
    const interestLabel = interests.length > 0 ? interests[0].replace(/-/g, " ") : "AI 相关方向";
    parts.push(`方向与你感兴趣的 ${interestLabel} 相关`);
  } else if (breakdown.interestAlignment >= 50) {
    parts.push("方向与你的兴趣有一定关联");
  }
  if (breakdown.timeBudgetFeasibility >= 80) {
    parts.push("预计首次运行时间在你的时间预算内");
  }
  if (breakdown.prerequisiteSkillMatch >= 80) {
    parts.push("项目所需技能与你的背景匹配");
  }
  if (breakdown.goalAlignment >= 80) {
    parts.push("项目类型与你的学习目标一致");
  }
  if (parts.length === 0) {
    parts.push("这个项目综合评估后与你的背景和目标有一定匹配");
  }
  return parts.join("，") + "。";
}

function computeMatchScore(userProfile, project) {
  const setupComplexityMatch = computeSetupComplexityMatch(
    userProfile.environmentPreference, project.setupComplexity
  );
  const interestAlignment = computeInterestAlignment(
    userProfile.interestDirections, project.categoryTags
  );
  const timeBudgetFeasibility = computeTimeBudgetFeasibility(
    userProfile.timeBudget, project.estimatedFirstRunMinutes
  );
  const prerequisiteSkillMatch = computePrerequisiteSkillMatch(
    userProfile.background, project.prerequisiteSkills
  );
  const goalAlignment = computeGoalAlignment(
    userProfile.goal, project.categoryTags
  );

  const total = Math.round(
    setupComplexityMatch * 0.30
    + interestAlignment * 0.25
    + timeBudgetFeasibility * 0.20
    + prerequisiteSkillMatch * 0.15
    + goalAlignment * 0.10
  );

  const breakdown = { setupComplexityMatch, interestAlignment, timeBudgetFeasibility, prerequisiteSkillMatch, goalAlignment };
  const reason = generateMatchReasonText(userProfile, project, breakdown);

  return { total, breakdown, reason };
}

// ──────────── Tests ────────────

describe("computeSetupComplexityMatch", () => {
  it("returns 100 when project complexity at or below user preference", () => {
    assert.equal(computeSetupComplexityMatch("simple-local-setup", "low"), 100);
    assert.equal(computeSetupComplexityMatch("simple-local-setup", "medium"), 100);
    assert.equal(computeSetupComplexityMatch("docker-comfortable", "low"), 100);
    assert.equal(computeSetupComplexityMatch("docker-comfortable", "medium"), 100);
    assert.equal(computeSetupComplexityMatch("docker-comfortable", "high"), 100);
    assert.equal(computeSetupComplexityMatch("any-environment", "high"), 100);
  });

  it("returns 50 when project complexity is one level above", () => {
    assert.equal(computeSetupComplexityMatch("browser-only-no-install", "medium"), 50);
    assert.equal(computeSetupComplexityMatch("simple-local-setup", "high"), 50);
  });

  it("returns 0 when project complexity is two or more levels above", () => {
    assert.equal(computeSetupComplexityMatch("browser-only-no-install", "high"), 0);
  });
});

describe("computeInterestAlignment", () => {
  it("returns 100 for exact category match", () => {
    assert.equal(computeInterestAlignment(["AI-chatbot"], ["chatbot"]), 100);
    assert.equal(computeInterestAlignment(["image-creation"], ["image-generation"]), 100);
  });

  it("returns 60 for related category match", () => {
    // AI-chatbot maps to chatbot, chatbot is related to automation
    assert.equal(computeInterestAlignment(["AI-chatbot"], ["automation"]), 60);
  });

  it("returns 0 when no match at all", () => {
    assert.equal(computeInterestAlignment(["AI-chatbot"], ["image-generation"]), 0);
  });

  it("averages scores across multiple interests", () => {
    // AI-chatbot -> chatbot (exact match 100), image-creation -> image-generation (no match with "chatbot")
    const score = computeInterestAlignment(["AI-chatbot", "image-creation"], ["chatbot"]);
    // AI-chatbot: chatbot exact match = 100
    // image-creation: image-generation not in ["chatbot"], related: web-app not in ["chatbot"] = 0
    assert.equal(score, 50); // (100 + 0) / 2
  });

  it("returns 0 for empty interestDirections", () => {
    assert.equal(computeInterestAlignment([], ["chatbot"]), 0);
  });
});

describe("computeTimeBudgetFeasibility", () => {
  it("returns 100 when estimatedFirstRunMinutes within budget", () => {
    assert.equal(computeTimeBudgetFeasibility("30-minutes-per-day", 20), 100);
    assert.equal(computeTimeBudgetFeasibility("1-hour-per-day", 60), 100);
  });

  it("returns 50 when estimatedFirstRunMinutes within 2x budget", () => {
    assert.equal(computeTimeBudgetFeasibility("30-minutes-per-day", 45), 50);
    assert.equal(computeTimeBudgetFeasibility("1-hour-per-day", 100), 50);
  });

  it("returns 0 when estimatedFirstRunMinutes exceeds 2x budget", () => {
    assert.equal(computeTimeBudgetFeasibility("30-minutes-per-day", 61), 0);
    assert.equal(computeTimeBudgetFeasibility("1-hour-per-day", 121), 0);
  });

  it("flexible-long-term always returns 100 for reasonable times", () => {
    assert.equal(computeTimeBudgetFeasibility("flexible-long-term", 500), 100);
  });
});

describe("computePrerequisiteSkillMatch", () => {
  it("returns 100 when project has no prerequisite skills", () => {
    assert.equal(computePrerequisiteSkillMatch("student", []), 100);
  });

  it("returns 100 when user has all required skills", () => {
    assert.equal(computePrerequisiteSkillMatch("student", ["basic-terminal", "git-basics"]), 100);
  });

  it("returns 50 when user has half the required skills", () => {
    assert.equal(computePrerequisiteSkillMatch("student", ["basic-terminal", "basic-web-browsing"]), 50);
  });

  it("returns 0 when user has none of the required skills", () => {
    assert.equal(computePrerequisiteSkillMatch("hobbyist", ["basic-terminal", "git-basics"]), 0);
  });
});

describe("computeGoalAlignment", () => {
  it("returns 100 when project tags overlap with goal categories", () => {
    assert.equal(computeGoalAlignment("build-a-portfolio-project", ["web-app", "cli-tool"]), 100);
    assert.equal(computeGoalAlignment("automate-personal-workflow", ["automation"]), 100);
  });

  it("returns 0 when no overlap", () => {
    assert.equal(computeGoalAlignment("build-a-portfolio-project", ["learning-project"]), 0);
  });
});

describe("computeMatchScore", () => {
  it("returns correct weighted total", () => {
    const userProfile = {
      background: "student",
      goal: "build-a-portfolio-project",
      interestDirections: ["AI-chatbot"],
      timeBudget: "1-hour-per-day",
      environmentPreference: "simple-local-setup",
    };
    const project = {
      setupComplexity: "low",
      categoryTags: ["chatbot"],
      estimatedFirstRunMinutes: 30,
      prerequisiteSkills: ["basic-terminal", "git-basics"],
    };

    const result = computeMatchScore(userProfile, project);

    // setup: low <= medium => 100
    // interest: AI-chatbot -> chatbot exact match => 100
    // time: 30 <= 60 => 100
    // prereq: student has basic-terminal + git-basics => 100
    // goal: chatbot in [web-app, chatbot] => 100
    // total: 100*0.30 + 100*0.25 + 100*0.20 + 100*0.15 + 100*0.10 = 100
    assert.equal(result.total, 100);
    assert.equal(result.breakdown.setupComplexityMatch, 100);
    assert.equal(result.breakdown.interestAlignment, 100);
    assert.equal(result.breakdown.timeBudgetFeasibility, 100);
    assert.equal(result.breakdown.prerequisiteSkillMatch, 100);
    assert.equal(result.breakdown.goalAlignment, 100);
  });

  it("returns a non-empty Chinese reason string", () => {
    const userProfile = {
      background: "hobbyist",
      goal: "learn-coding-basics",
      interestDirections: ["data-analysis"],
      timeBudget: "30-minutes-per-day",
      environmentPreference: "browser-only-no-install",
    };
    const project = {
      setupComplexity: "high",
      categoryTags: ["image-generation"],
      estimatedFirstRunMinutes: 120,
      prerequisiteSkills: ["basic-terminal", "docker"],
    };

    const result = computeMatchScore(userProfile, project);
    assert.ok(result.reason.length > 0);
    // Should contain Chinese characters
    assert.ok(/[\u4e00-\u9fff]/.test(result.reason));
  });

  it("total is in range [0, 100]", () => {
    const userProfile = {
      background: "other",
      goal: "learn-coding-basics",
      interestDirections: ["browser-automation"],
      timeBudget: "flexible-long-term",
      environmentPreference: "any-environment",
    };
    const project = {
      setupComplexity: "medium",
      categoryTags: ["web-app"],
      estimatedFirstRunMinutes: 45,
      prerequisiteSkills: [],
    };

    const result = computeMatchScore(userProfile, project);
    assert.ok(result.total >= 0 && result.total <= 100);
  });

  it("weighted sum matches manual calculation", () => {
    const userProfile = {
      background: "designer",
      goal: "understand-AI-tools",
      interestDirections: ["knowledge-search"],
      timeBudget: "half-day-per-week",
      environmentPreference: "browser-only-no-install",
    };
    const project = {
      setupComplexity: "medium",
      categoryTags: ["knowledge-base"],
      estimatedFirstRunMinutes: 90,
      prerequisiteSkills: ["basic-web-browsing", "basic-terminal"],
    };

    const result = computeMatchScore(userProfile, project);

    // setup: medium, user max = low. diff = 1 => 50
    // interest: knowledge-search -> knowledge-base, exact match => 100
    // time: 90 <= 120 => 100
    // prereq: designer has [basic-web-browsing, basic-html]. Required: [basic-web-browsing, basic-terminal]. Match 1/2 => 50
    // goal: understand-AI-tools -> [learning-project, api-wrapper]. project has [knowledge-base]. No overlap => 0
    // total: 50*0.30 + 100*0.25 + 100*0.20 + 50*0.15 + 0*0.10 = 15 + 25 + 20 + 7.5 + 0 = 67.5 => 68
    assert.equal(result.breakdown.setupComplexityMatch, 50);
    assert.equal(result.breakdown.interestAlignment, 100);
    assert.equal(result.breakdown.timeBudgetFeasibility, 100);
    assert.equal(result.breakdown.prerequisiteSkillMatch, 50);
    assert.equal(result.breakdown.goalAlignment, 0);
    assert.equal(result.total, 68);
  });
});
// @AI_GENERATED: end
