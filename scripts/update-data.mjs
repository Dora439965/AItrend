// @AI_GENERATED
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// @AI_GENERATED: end
const DATA_DIR = path.join(ROOT, "data");
const SNAPSHOT_DIR = path.join(DATA_DIR, "snapshots");
const TODAY = new Date().toISOString().slice(0, 10);
const DAY_MS = 24 * 60 * 60 * 1000;

const GITHUB_TOPICS = [
  "artificial-intelligence",
  "llm",
  "ai-agent",
  "rag",
  "mcp",
  "machine-learning",
  "generative-ai",
  "openai",
  "claude",
  "cursor",
  "coding-agent",
];

const NEWS_FEEDS = [
  { source: "OpenAI", company: "OpenAI", url: "https://openai.com/news/rss.xml" },
  { source: "Google AI", company: "Google", url: "https://blog.google/technology/ai/rss/" },
  { source: "Microsoft AI", company: "Microsoft", url: "https://blogs.microsoft.com/ai/feed/" },
];

const GOOGLE_NEWS_QUERIES = [
  { company: "OpenAI", query: "OpenAI AI OR ChatGPT when:7d" },
  { company: "Anthropic", query: "Anthropic Claude AI when:7d" },
  { company: "Google", query: "Google DeepMind Gemini AI when:7d" },
  { company: "Microsoft", query: "Microsoft AI Copilot OpenAI when:7d" },
  { company: "Meta", query: "Meta AI Llama open source when:7d" },
  { company: "NVIDIA", query: "NVIDIA AI model GPU when:7d" },
  { company: "Mistral", query: "Mistral AI model when:7d" },
  { company: "Perplexity", query: "Perplexity AI when:7d" },
  { company: "xAI", query: "xAI Grok model when:7d" },
  { company: "AI", query: "AI model developer tools open source GitHub when:7d" },
];

function googleNewsUrl(query) {
  const params = new URLSearchParams({
    q: query,
    hl: "zh-CN",
    gl: "US",
    ceid: "US:zh-Hans",
  });
  return `https://news.google.com/rss/search?${params.toString()}`;
}

const GOOGLE_NEWS_FEEDS = GOOGLE_NEWS_QUERIES.map((item) => ({
  source: `Google News: ${item.company}`,
  company: item.company,
  url: googleNewsUrl(item.query),
}));

const COMPANY_WEIGHTS = {
  OpenAI: 18,
  Anthropic: 16,
  Google: 15,
  Microsoft: 13,
  Meta: 12,
  NVIDIA: 12,
  Mistral: 10,
  Perplexity: 10,
  xAI: 10,
};

const NEWS_KEYWORDS = {
  模型发布: ["model", "gpt", "claude", "gemini", "llama", "reasoning", "multimodal"],
  开发者工具: ["api", "developer", "agent", "tool", "sdk", "coding", "mcp"],
  开源: ["open source", "github", "release", "library", "framework"],
  产品发布: ["launch", "product", "app", "chatgpt", "workspace"],
  政策与安全: ["safety", "policy", "security", "alignment", "regulation"],
};

let cachedGithubToken;

function getGithubToken() {
  if (cachedGithubToken !== undefined) return cachedGithubToken;
  cachedGithubToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
  if (cachedGithubToken) return cachedGithubToken;
  try {
    cachedGithubToken = execFileSync("gh", ["auth", "token"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 5000,
    }).trim();
  } catch {
    cachedGithubToken = "";
  }
  return cachedGithubToken;
}

function daysAgo(days) {
  return new Date(Date.now() - days * DAY_MS).toISOString().slice(0, 10);
}

function normalize(value, max) {
  if (!max) return 0;
  return Math.min(1, value / max);
}

function compactText(value = "") {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function hasChinese(value = "") {
  return /[\u4e00-\u9fff]/.test(value);
}

function localizeTechText(value = "", fallback = "暂无中文摘要。") {
  const text = compactText(value);
  if (!text) return fallback;
  if (hasChinese(text)) return text;
  return `${fallback} 原文简介：${text.slice(0, 180)}`;
}

function repoChineseSummary(repo, description) {
  const text = compactText(description);
  if (hasChinese(text)) return text;
  // 无翻译 API 时生成简短的中文引导语 + 英文原文，避免纯英文或套话
  const language = repo.language || "Unknown";
  const stars = repo.stargazers_count || 0;
  const starsLabel = stars > 10000 ? `${(stars / 1000).toFixed(0)}k stars` : `${stars} stars`;
  return `${language} 项目 · ${starsLabel}。${text || "暂无简介，请查看 README。"}`;
}

function newsChineseSummary(item) {
  const text = compactText(item.summary || item.title);
  if (hasChinese(text)) return text;
  // 用标题作为核心内容，前面加来源和主题标注
  const title = (item.title || "").replace(/\s*[-–—]\s*[A-Z][^-]*$/, "").trim();
  const company = item.company || "AI";
  return `[${company}] ${title || text || "暂无摘要"}`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function classifyRepo(repo) {
  const text = `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();
  const tags = [];
  if (text.includes("agent")) tags.push("Agent");
  if (text.includes("rag") || text.includes("retrieval")) tags.push("RAG");
  if (text.includes("mcp")) tags.push("MCP");
  if (text.includes("coding") || text.includes("codegen") || text.includes("developer")) tags.push("Coding");
  if (text.includes("image") || text.includes("vision")) tags.push("Image");
  if (text.includes("video")) tags.push("Video");
  if (text.includes("model") || text.includes("inference")) tags.push("Model");
  if (text.includes("deploy") || text.includes("infra") || text.includes("gateway")) tags.push("Infra");
  if (!tags.length) tags.push("Tool");
  return [...new Set(tags)].slice(0, 4);
}

function estimateDifficulty(repo) {
  const topics = (repo.topics || []).join(" ").toLowerCase();
  const language = repo.language || "";
  if (["Rust", "C++", "Go"].includes(language) || topics.includes("kubernetes") || topics.includes("inference")) return "挑战";
  if (topics.includes("agent") || topics.includes("mcp") || topics.includes("framework")) return "进阶";
  return "入门到进阶";
}

function inferKnowledge(repo) {
  const tags = classifyRepo(repo);
  const knowledge = new Set(["GitHub 工作流", "README 阅读", "本地环境配置"]);
  if (tags.includes("Agent")) ["Agent 编排", "工具调用", "任务规划"].forEach((item) => knowledge.add(item));
  if (tags.includes("RAG")) ["向量检索", "文档切分", "Embedding"].forEach((item) => knowledge.add(item));
  if (tags.includes("MCP")) ["MCP 协议", "本地服务", "进程通信"].forEach((item) => knowledge.add(item));
  if (tags.includes("Coding")) ["代码生成", "文件系统操作", "测试反馈"].forEach((item) => knowledge.add(item));
  if (tags.includes("Image")) ["多模态 API", "图像处理", "前端交互"].forEach((item) => knowledge.add(item));
  if (tags.includes("Infra")) ["服务网关", "缓存策略", "可观测性"].forEach((item) => knowledge.add(item));
  return [...knowledge].slice(0, 6);
}

function inferArchitecture(repo) {
  const tags = classifyRepo(repo);
  if (tags.includes("Agent")) return "应用层界面 + Agent 规划循环 + 工具调用适配层。";
  if (tags.includes("RAG")) return "文档解析 + 向量索引 + 检索增强生成 + 问答界面。";
  if (tags.includes("MCP")) return "本地 MCP server + 工具协议层 + 客户端调用入口。";
  if (tags.includes("Infra")) return "后端服务网关 + 路由策略 + 缓存与监控模块。";
  return "核心库/服务模块 + 示例应用 + 配置与运行脚本。";
}

async function githubFetch(url) {
  const token = getGithubToken();
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "ai-trend-vibe-coding-discovery",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(url, { headers });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${response.status}: ${text.slice(0, 220)}`);
  }
  return response.json();
}

async function fetchGithubRepositories() {
  const since = daysAgo(30);
  const results = await Promise.allSettled(
    GITHUB_TOPICS.map(async (topic) => {
      const query = encodeURIComponent(`topic:${topic} pushed:>${since} stars:>50`);
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=30`;
      const data = await githubFetch(url);
      return data.items || [];
    })
  );
  const byId = new Map();
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.warn(`GitHub topic failed: ${GITHUB_TOPICS[index]}: ${result.reason.message}`);
      return;
    }
    result.value.forEach((repo) => byId.set(repo.id, repo));
  });
  return [...byId.values()];
}

async function readPreviousSnapshot() {
  if (existsSync(SNAPSHOT_DIR)) {
    try {
      const files = (await readdir(SNAPSHOT_DIR))
        .filter((file) => /^\d{4}-\d{2}-\d{2}\.json$/.test(file))
        .map((file) => file.replace(".json", ""))
        .filter((date) => date < TODAY)
        .sort();
      const previousDate = files.at(-1);
      if (previousDate) {
        return JSON.parse(await readFile(path.join(SNAPSHOT_DIR, `${previousDate}.json`), "utf8"));
      }
    } catch {
      // Fall back to current.json below.
    }
  }
  const currentPath = path.join(DATA_DIR, "current.json");
  if (!existsSync(currentPath)) return null;
  try {
    return JSON.parse(await readFile(currentPath, "utf8"));
  } catch {
    return null;
  }
}

function scoreRepositories(rawRepos, previousSnapshot) {
  const previousById = new Map((previousSnapshot?.repositories || []).map((repo) => [repo.id, repo]));
  const maxStars = Math.max(...rawRepos.map((repo) => repo.stargazers_count), 1);
  const maxForks = Math.max(...rawRepos.map((repo) => repo.forks_count), 1);
  const scoredInputs = rawRepos.map((repo) => {
    const previous = previousById.get(repo.id);
    const starGrowth = Math.max(0, repo.stargazers_count - (previous?.stars ?? repo.stargazers_count));
    const forkGrowth = Math.max(0, repo.forks_count - (previous?.forks ?? repo.forks_count));
    const previousOpenIssues = previous?.openIssues ?? repo.open_issues_count;
    const issueGrowth = Math.max(0, repo.open_issues_count - previousOpenIssues);
    const discussionGrowth = issueGrowth + Math.max(0, Math.round(forkGrowth * 0.12));
    const createdAgeDays = Math.max(1, (Date.now() - new Date(repo.created_at).getTime()) / DAY_MS);
    const pushedAgeDays = Math.max(0.2, (Date.now() - new Date(repo.pushed_at).getTime()) / DAY_MS);
    return {
      repo,
      previous,
      starGrowth,
      forkGrowth,
      issueGrowth,
      discussionGrowth,
      createdAgeDays,
      pushedAgeDays,
    };
  });
  const maxStarGrowth = Math.max(...scoredInputs.map((item) => item.starGrowth), 1);
  const maxForkGrowth = Math.max(...scoredInputs.map((item) => item.forkGrowth), 1);
  const maxDiscussionGrowth = Math.max(...scoredInputs.map((item) => item.discussionGrowth), 1);

  const primaryInputs = scoredInputs.filter((item) => {
    const hasGrowth = item.starGrowth > 0 || item.forkGrowth > 0 || item.discussionGrowth > 0;
    const isNewProject = item.createdAgeDays <= 45;
    return hasGrowth || isNewProject;
  });
  const fallbackInputs = scoredInputs
    .filter((item) => !primaryInputs.includes(item))
    .filter((item) => item.createdAgeDays <= 180 && item.pushedAgeDays <= 7)
    .sort((a, b) => a.pushedAgeDays - b.pushedAgeDays)
    .slice(0, Math.max(0, 10 - primaryInputs.length));

  return [...primaryInputs, ...fallbackInputs]
    .map((item) => {
      const { repo, previous, starGrowth, forkGrowth, discussionGrowth, pushedAgeDays, createdAgeDays } = item;
      const recencyScore = Math.min(1, 1 / pushedAgeDays);
      const newProjectScore = createdAgeDays <= 45 ? Math.min(1, 45 / createdAgeDays) : 0;
      const starGrowthScore = normalize(starGrowth, maxStarGrowth);
      const forkGrowthScore = normalize(forkGrowth, maxForkGrowth);
      const discussionGrowthScore = normalize(discussionGrowth, maxDiscussionGrowth);
      const totalScaleScore = normalize(Math.log1p(repo.stargazers_count), Math.log1p(maxStars)) * 0.65
        + normalize(Math.log1p(repo.forks_count), Math.log1p(maxForks)) * 0.35;
      const hot = Math.round(
        starGrowthScore * 45
        + forkGrowthScore * 25
        + discussionGrowthScore * 20
        + totalScaleScore * 5
        + Math.max(recencyScore, newProjectScore) * 5
      );
      const description = repo.description || "暂无项目简介，请查看 README。";
      const tags = classifyRepo(repo);
      const stack = [repo.language, ...(repo.topics || []).slice(0, 4)].filter(Boolean);

      return {
        id: repo.id,
        name: repo.name,
        owner: repo.owner?.login || "",
        description,
        descriptionZh: repoChineseSummary(repo, description),
        url: repo.html_url,
        tags,
        topics: repo.topics || [],
        language: repo.language || "Unknown",
        stars: repo.stargazers_count,
        starGrowth,
        forkGrowth,
        forks: repo.forks_count,
        openIssues: repo.open_issues_count,
        discussion: discussionGrowth,
        discussionTotal: repo.open_issues_count,
        hot: Math.max(1, Math.min(100, hot)),
        pushedAt: repo.pushed_at,
        createdAt: repo.created_at,
        reason: previous
          ? `较上一份快照新增 ${starGrowth} stars、${forkGrowth} forks，讨论度增长代理值 ${discussionGrowth}。`
          : "当前快照暂无历史增长数据，先以新项目活跃度和少量总量信号做冷启动评分；后续快照会以增长为主。",
        fit: "适合作为趋势观察、源码学习或二次开发候选项目。",
        difficulty: estimateDifficulty(repo),
        stack,
        architecture: inferArchitecture(repo),
        knowledge: inferKnowledge(repo),
        risk: repo.archived ? "项目已归档，建议仅用于阅读学习。" : "真实可运行性需结合 README、依赖版本和 API Key 要求确认。",
      };
    })
    .sort((a, b) => b.hot - a.hot)
    .slice(0, 40);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "ai-trend-vibe-coding-discovery",
      Accept: "application/rss+xml, application/xml, text/xml, */*",
    },
  });
  if (!response.ok) throw new Error(`RSS ${response.status}: ${url}`);
  return response.text();
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!match) return "";
  return compactText(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1"));
}

function parseFeed(xml, feed) {
  const blocks = [...xml.matchAll(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi)].map((match) => match[0]);
  return blocks.map((block) => {
    const title = extractTag(block, "title");
    const link = extractTag(block, "link") || (block.match(/<link[^>]+href="([^"]+)"/i)?.[1] ?? "");
    const published = extractTag(block, "pubDate") || extractTag(block, "published") || extractTag(block, "updated");
    const summary = extractTag(block, "description") || extractTag(block, "summary") || extractTag(block, "content");
    const itemSource = extractTag(block, "source");
    return {
      id: slugify(`${feed.source}-${title}`),
      title,
      url: link,
      source: itemSource ? `${feed.source} / ${itemSource}` : feed.source,
      company: feed.company,
      publishedAt: published ? new Date(published).toISOString() : new Date().toISOString(),
      summary: summary || title,
    };
  }).filter((item) => item.title);
}

function detectTopic(item) {
  const text = `${item.title} ${item.summary}`.toLowerCase();
  for (const [topic, keywords] of Object.entries(NEWS_KEYWORDS)) {
    if (keywords.some((keyword) => text.includes(keyword))) return topic;
  }
  return "AI 产品与应用";
}

function dedupeNews(items) {
  const seen = new Map();
  for (const item of items) {
    const key = slugify(item.title.replace(/\b(openai|anthropic|google|microsoft|meta)\b/gi, ""));
    const previous = seen.get(key);
    if (!previous || new Date(item.publishedAt) > new Date(previous.publishedAt)) seen.set(key, item);
  }
  return [...seen.values()];
}

function scoreNews(items) {
  return dedupeNews(items)
    .map((item) => {
      const ageHours = Math.max(1, (Date.now() - new Date(item.publishedAt).getTime()) / (60 * 60 * 1000));
      const recency = Math.max(0, 35 - ageHours * 0.8);
      const companyScore = COMPANY_WEIGHTS[item.company] || 6;
      const topic = detectTopic(item);
      const topicScore = ["模型发布", "开发者工具", "开源"].includes(topic) ? 18 : 12;
      const officialScore = item.source.startsWith("Google News") ? 7 : 12;
      const heat = Math.max(1, Math.min(100, Math.round(companyScore + topicScore + officialScore + recency)));
      return {
        ...item,
        topic,
        time: item.publishedAt.slice(0, 10),
        heat,
        importance: `${item.company} 的 ${topic} 动态，可能影响开发者工具选择、产品路线或开源生态。`,
        relatedRepo: null,
        summary: compactText(item.summary).slice(0, 180) || item.title,
        summaryZh: newsChineseSummary(item).slice(0, 260),
      };
    })
    .sort((a, b) => b.heat - a.heat)
    .slice(0, 20);
}

async function fetchNews() {
  const feeds = [...NEWS_FEEDS, ...GOOGLE_NEWS_FEEDS];
  const results = await Promise.allSettled(feeds.map(async (feed) => parseFeed(await fetchText(feed.url), feed)));
  const items = results.flatMap((result, index) => {
    if (result.status === "fulfilled") return result.value;
    console.warn(`RSS feed failed: ${feeds[index].source}: ${result.reason.message}`);
    return [];
  });
  return scoreNews(items);
}

// @AI_GENERATED: Beginner project search queries and fetch function
const BEGINNER_SEARCH_QUERIES = [
  { query: "topic:chatbot language:python stars:>50", tag: "chatbot" },
  { query: "topic:rag topic:tutorial stars:>50", tag: "knowledge-base" },
  { query: "topic:ai-assistant topic:beginner stars:>50", tag: "coding-assistant" },
  { query: "topic:stable-diffusion topic:webui stars:>100", tag: "image-generation" },
  { query: "topic:automation topic:ai language:python stars:>50", tag: "automation" },
  { query: "topic:browser-extension topic:ai stars:>50", tag: "browser-tool" },
  { query: "topic:cli topic:ai language:python stars:>50", tag: "cli-tool" },
  { query: "topic:nextjs topic:ai stars:>100", tag: "web-app" },
  { query: "topic:openai topic:wrapper stars:>50", tag: "api-wrapper" },
  { query: "topic:tutorial topic:machine-learning stars:>100", tag: "learning-project" },
  { query: "topic:langchain topic:example stars:>50", tag: "knowledge-base" },
  { query: "topic:streamlit topic:ai stars:>50", tag: "web-app" },
  { query: "topic:fastapi topic:ai stars:>50", tag: "api-wrapper" },
  { query: "topic:mcp topic:tool stars:>30", tag: "browser-tool" },
  { query: "topic:agent topic:starter stars:>50", tag: "chatbot" },
  { query: "topic:huggingface topic:demo stars:>50", tag: "learning-project" },
];

const BEGINNER_CATEGORY_TAGS = [
  "chatbot",
  "knowledge-base",
  "coding-assistant",
  "image-generation",
  "automation",
  "browser-tool",
  "cli-tool",
  "web-app",
  "api-wrapper",
  "learning-project",
];

async function fetchBeginnerProjects() {
  const since = daysAgo(90);
  const results = await Promise.allSettled(
    BEGINNER_SEARCH_QUERIES.map(async (entry) => {
      const query = encodeURIComponent(`${entry.query} pushed:>${since}`);
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=30`;
      const data = await githubFetch(url);
      return (data.items || []).map((repo) => ({ ...repo, _beginnerTag: entry.tag }));
    })
  );

  const byId = new Map();
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.warn(`Beginner query failed: ${BEGINNER_SEARCH_QUERIES[index].query}: ${result.reason.message}`);
      return;
    }
    result.value.forEach((repo) => {
      if (!byId.has(repo.id)) {
        byId.set(repo.id, repo);
      }
    });
  });

  // Filter: stars >= 50, pushed within last 90 days, description length > 500 chars as README proxy
  const cutoffDate = new Date(Date.now() - 90 * DAY_MS);
  const filtered = [...byId.values()].filter((repo) => {
    if (repo.stargazers_count < 50) return false;
    if (new Date(repo.pushed_at) < cutoffDate) return false;
    const descriptionLength = (repo.description || "").length;
    if (descriptionLength < 30) return false;
    return true;
  });

  return filtered;
}
// @AI_GENERATED: end

// @AI_GENERATED: computeBeginnerScore - 计算新手友好评分
function computeBeginnerScore(project) {
  const description = (project.description || "").toLowerCase();
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const name = (project.name || "").toLowerCase();
  const language = project.language || "";
  const stars = project.stargazers_count || 0;
  const openIssues = project.open_issues_count || 0;
  const homepage = project.homepage || "";
  const topicsText = topics.join(" ");
  const fullText = `${name} ${description} ${topicsText}`;

  // readmeQuality (0-25): 基于描述长度、topics结构、文档标记、homepage
  let readmeQuality = 0;
  if ((project.description || "").length > 200) readmeQuality += 10;
  if (topics.length > 5) readmeQuality += 5;
  if (topics.includes("documentation") || topics.includes("docs")) readmeQuality += 5;
  if (homepage) readmeQuality += 5;

  // installInstructions (0-20): 基于安装相关关键词和语言
  let installInstructions = 0;
  if (fullText.includes("install") || fullText.includes("setup") || fullText.includes("getting-started")) {
    installInstructions += 10;
  }
  if (language === "Python" || language === "JavaScript") installInstructions += 5;
  if (topics.includes("docker")) installInstructions += 5;

  // dependencySimplicity (0-15): 基于语言、项目规模、名称/topics关键词
  let dependencySimplicity = 8; // 默认值
  if (topics.includes("starter") || topics.includes("template") || name.includes("starter") || name.includes("template")) {
    dependencySimplicity = 15;
  } else if (language === "Python" && stars < 1000) {
    dependencySimplicity = 15;
  } else if ((language === "JavaScript" || language === "TypeScript") && stars < 1000) {
    dependencySimplicity = 12;
  } else if (stars > 50000) {
    dependencySimplicity = 5;
  }

  // issueResponseRate (0-15): 基于 open_issues 数量与 stars/issues 比率
  let issueResponseRate = 5; // 默认值
  if (openIssues < 20 && openIssues > 0 && stars / openIssues > 50) {
    issueResponseRate = 15;
  } else if (openIssues < 50 && openIssues > 0 && stars / openIssues > 20) {
    issueResponseRate = 10;
  } else if (openIssues === 0) {
    issueResponseRate = 15;
  }

  // languageAccessibility (0-15): 基于编程语言和中文内容
  let languageAccessibility = 8; // 默认值
  if (language === "Python") {
    languageAccessibility = 15;
  } else if (language === "JavaScript" || language === "TypeScript") {
    languageAccessibility = 12;
  } else if (["Rust", "C++", "Go"].includes(language)) {
    languageAccessibility = 5;
  }
  // 中文加分（cap at 15）
  if (hasChinese(project.description || "") || topics.some((t) => hasChinese(t))) {
    languageAccessibility = Math.min(15, languageAccessibility + 3);
  }

  // examplesPresence (0-10): 基于 topics 关键词
  let examplesPresence = 0;
  const exampleKeywords = ["example", "tutorial", "demo", "starter", "template"];
  const beginnerKeywords = ["beginner", "learning"];
  if (topics.some((t) => exampleKeywords.includes(t))) {
    examplesPresence = 10;
  } else if (topics.some((t) => beginnerKeywords.includes(t))) {
    examplesPresence = 5;
  }

  const breakdown = {
    readmeQuality,
    installInstructions,
    dependencySimplicity,
    issueResponseRate,
    languageAccessibility,
    examplesPresence,
  };

  const rawTotal = readmeQuality + installInstructions + dependencySimplicity
    + issueResponseRate + languageAccessibility + examplesPresence;
  const total = Math.max(0, Math.min(100, rawTotal));

  return { total, breakdown };
}
// @AI_GENERATED: end

// @AI_GENERATED: Beginner project categorization, complexity estimation, and prerequisite skills extraction
function categorizeBeginnerProject(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const description = (project.description || "").toLowerCase();
  const beginnerTag = project._beginnerTag || "";
  const tags = new Set();

  // First: use the _beginnerTag from the search query that found this project
  if (beginnerTag && BEGINNER_CATEGORY_TAGS.includes(beginnerTag)) {
    tags.add(beginnerTag);
  }

  // Then: scan topics and description for additional matching tags
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

  // Ensure at least 1 tag; if no match, default to the _beginnerTag or "learning-project"
  if (tags.size === 0) {
    tags.add(beginnerTag && BEGINNER_CATEGORY_TAGS.includes(beginnerTag) ? beginnerTag : "learning-project");
  }

  // Return array of 1-3 tags
  return [...tags].slice(0, 3);
}

function estimateBeginnerSetupComplexity(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const language = (project.language || "").toLowerCase();

  // "low": Python with streamlit/gradio/notebook; browser extensions; no-code/easy projects
  if (
    (language === "python" && topics.some((t) => ["streamlit", "gradio", "notebook", "jupyter"].includes(t))) ||
    topics.some((t) => ["browser-extension", "chrome-extension", "no-code", "easy"].includes(t))
  ) {
    return "low";
  }

  // "high": Docker required, Rust/C++/Go language, or topics with kubernetes/distributed/infrastructure
  if (
    ["rust", "c++", "go"].includes(language) ||
    topics.some((t) => ["kubernetes", "distributed", "infrastructure", "docker-compose", "k8s"].includes(t)) ||
    (topics.includes("docker") && !topics.some((t) => ["streamlit", "gradio", "notebook"].includes(t)))
  ) {
    return "high";
  }

  // "medium": everything else
  return "medium";
}

function extractPrerequisiteSkills(project) {
  const topics = (project.topics || []).map((t) => t.toLowerCase());
  const language = (project.language || "").toLowerCase();
  const skills = ["basic-terminal", "git-basics"];

  // Language-based skills
  if (language === "python") {
    skills.push("python-basics");
  }
  if (language === "javascript" || language === "typescript") {
    skills.push("javascript-basics", "npm-usage");
  }

  // Topic-based skills
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
// @AI_GENERATED: end

// @AI_GENERATED: estimateFirstRunMinutes - 基于 setupComplexity 估算首次运行时间
function estimateFirstRunMinutes(project) {
  const complexity = estimateBeginnerSetupComplexity(project);
  if (complexity === "low") return 15;
  if (complexity === "medium") return 45;
  return 90; // high
}
// @AI_GENERATED: end

// @AI_GENERATED: buildBeginnerProjectPool - 构建新手项目池，排序取 top-50，过滤 score < 40
function buildBeginnerProjectPool(rawProjects, previousSnapshot) {
  // 1. 为每个项目计算各指标
  const enriched = rawProjects.map((project) => {
    const score = computeBeginnerScore(project);
    const categoryTags = categorizeBeginnerProject(project);
    const setupComplexity = estimateBeginnerSetupComplexity(project);
    const prerequisiteSkills = extractPrerequisiteSkills(project);
    const firstRunMinutes = estimateFirstRunMinutes(project);

    return {
      id: project.id,
      name: project.name,
      owner: project.owner?.login || "",
      url: project.html_url,
      description: project.description || "",
      descriptionZh: repoChineseSummary(project, project.description || ""),
      categoryTags,
      language: project.language || "Unknown",
      stars: project.stargazers_count,
      beginnerScore: score.total,
      beginnerScoreBreakdown: score.breakdown,
      setupComplexity,
      prerequisiteSkills,
      estimatedFirstRunMinutes: firstRunMinutes,
      hasChineseDocs: hasChinese(project.description || ""),
      hasExamplesFolder: (project.topics || []).some((t) =>
        ["example", "examples", "demo", "tutorial"].includes(t)
      ),
      lastUpdated: project.pushed_at,
      topics: project.topics || [],
      forks: project.forks_count,
      openIssues: project.open_issues_count,
    };
  });

  // 2. 过滤 score < 40 的项目
  const filtered = enriched.filter((p) => p.beginnerScore >= 40);

  // 3. 按 beginnerScore 降序排序
  filtered.sort((a, b) => b.beginnerScore - a.beginnerScore);

  // 4. 取 top 50
  let pool = filtered.slice(0, 50);

  // 5. 不足 30 时，合并上一快照数据
  if (pool.length < 30) {
    const previousProjects = previousSnapshot?.beginnerProjects || [];
    const existingIds = new Set(pool.map((p) => p.id));
    const supplemental = previousProjects.filter((p) => !existingIds.has(p.id));
    pool = [...pool, ...supplemental].slice(0, 50);
  }

  return pool;
}
// @AI_GENERATED: end

// @AI_GENERATED: main() 集成 beginnerProjects 管道
async function main() {
  await mkdir(SNAPSHOT_DIR, { recursive: true });
  const previous = await readPreviousSnapshot();

  // 并行执行所有数据采集任务（含 beginnerProjects）
  const [githubRepos, newsItems, beginnerRawResult] = await Promise.allSettled([
    fetchGithubRepositories(),
    fetchNews(),
    fetchBeginnerProjects(),
  ]).then((results) => results.map((r) => (r.status === "fulfilled" ? r.value : null)));

  // 错误降级处理
  if (!githubRepos && !newsItems && !beginnerRawResult && !previous) {
    throw new Error("No GitHub or RSS data fetched and no previous snapshot exists. Current snapshot was not overwritten.");
  }

  const repositories = githubRepos?.length ? scoreRepositories(githubRepos, previous) : previous?.repositories || [];
  const news = newsItems?.length ? newsItems : previous?.news || [];

  // Beginner projects 错误降级：API 失败时保留前一快照数据
  let beginnerProjects;
  if (beginnerRawResult && beginnerRawResult.length > 0) {
    beginnerProjects = buildBeginnerProjectPool(beginnerRawResult, previous);
  } else {
    beginnerProjects = previous?.beginnerProjects || [];
    if (!beginnerRawResult) {
      console.warn("Beginner projects fetch failed. Using previous snapshot data.");
    } else {
      console.warn("No beginner projects found. Using previous snapshot data.");
    }
  }

  if (!githubRepos?.length) console.warn("Using previous repository snapshot because GitHub returned no repositories.");
  if (!newsItems?.length) console.warn("Using previous news snapshot because RSS/Google News returned no items.");

  const payload = {
    generatedAt: new Date().toISOString(),
    date: TODAY,
    sources: {
      github: "https://api.github.com/search/repositories",
      newsFeeds: [...NEWS_FEEDS, ...GOOGLE_NEWS_FEEDS].map((feed) => feed.url),
    },
    scoring: {
      repositories: "35% stars growth/current scale, 20% forks growth/current scale, 15% issues/forks discussion proxy, 20% recency, 10% maturity",
      news: "company priority + topic priority + official source + recency, deduped by normalized title",
    },
    repositories,
    news,
    beginnerProjects,
  };

  const snapshotPath = path.join(SNAPSHOT_DIR, `${TODAY}.json`);
  await writeFile(snapshotPath, `${JSON.stringify(payload, null, 2)}\n`);
  await writeFile(path.join(DATA_DIR, "current.json"), `${JSON.stringify(payload, null, 2)}\n`);
  console.log(`Wrote ${repositories.length} repositories, ${news.length} news items, and ${beginnerProjects.length} beginner projects.`);
  console.log(`Snapshot: ${snapshotPath}`);
}
// @AI_GENERATED: end

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
