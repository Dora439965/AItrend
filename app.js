let repos = [
  {
    id: "agent-lab",
    name: "agent-lab",
    owner: "open-source-ai",
    description: "一个用于搭建多 Agent 工作流的 TypeScript 框架，内置任务拆解、工具调用和可视化调试。",
    tags: ["Agent", "Coding", "Tool"],
    language: "TypeScript",
    stars: 18420,
    starGrowth: 1280,
    forkGrowth: 214,
    forks: 2106,
    discussion: 92,
    hot: 96,
    reason: "近 24 小时 stars 增长明显，开发者社区集中讨论其可视化 Agent 调试体验。",
    fit: "适合有前端基础、想快速搭一个 Agent 产品原型的用户。",
    difficulty: "进阶",
    stack: ["TypeScript", "Node.js", "React", "LLM API", "Workflow Engine"],
    architecture: "前端可视化编排 + 后端任务调度 + 工具调用适配层。",
    knowledge: ["Agent 任务拆解", "工具调用", "状态管理", "异步队列", "API 鉴权"],
    risk: "需要配置模型 API key，复杂工作流需要一定 TypeScript 基础。",
  },
  {
    id: "rag-starter-kit",
    name: "rag-starter-kit",
    owner: "build-with-llm",
    description: "面向新手的 RAG 知识库模板，包含文件上传、向量检索、引用溯源和本地运行脚本。",
    tags: ["RAG", "Tool"],
    language: "Python",
    stars: 14270,
    starGrowth: 940,
    forkGrowth: 188,
    forks: 1810,
    discussion: 78,
    hot: 91,
    reason: "README 清晰，模板化程度高，被多篇入门教程引用。",
    fit: "适合想做知识库、客服助手或个人资料库的新手。",
    difficulty: "入门",
    stack: ["Python", "FastAPI", "Vector DB", "Embedding", "React"],
    architecture: "文件解析 + 向量索引 + 检索增强生成 + Web 问答界面。",
    knowledge: ["RAG 流程", "向量检索", "文档切分", "引用溯源", "基础后端接口"],
    risk: "向量数据库和 embedding 成本需要提前确认。",
  },
  {
    id: "mcp-browser-tools",
    name: "mcp-browser-tools",
    owner: "toolverse",
    description: "面向 AI coding agent 的浏览器自动化 MCP server，支持页面检查、点击、截图和表单操作。",
    tags: ["MCP", "Agent", "Tool"],
    language: "Go",
    stars: 11820,
    starGrowth: 870,
    forkGrowth: 142,
    forks: 940,
    discussion: 86,
    hot: 88,
    reason: "MCP 生态热度上升，项目被多个 coding agent 工作流收录。",
    fit: "适合想理解工具调用、浏览器自动化和 agent 扩展机制的开发者。",
    difficulty: "进阶",
    stack: ["Go", "MCP", "Browser Automation", "JSON-RPC", "CLI"],
    architecture: "本地 MCP server + 浏览器控制适配器 + agent 工具协议层。",
    knowledge: ["MCP 协议", "浏览器自动化", "本地服务", "权限边界", "进程通信"],
    risk: "需要了解本地服务和浏览器权限配置。",
  },
  {
    id: "image-flow-ui",
    name: "image-flow-ui",
    owner: "creative-ai-kit",
    description: "可视化 AI 图像工作流编辑器，支持多模型节点、批量生成和结果画廊。",
    tags: ["Image", "Tool"],
    language: "JavaScript",
    stars: 9650,
    starGrowth: 610,
    forkGrowth: 96,
    forks: 804,
    discussion: 64,
    hot: 82,
    reason: "适合二次开发成垂直图像工具，近期 release 增加了插件系统。",
    fit: "适合设计师、前端开发者和想做创意 AI 应用的用户。",
    difficulty: "入门到进阶",
    stack: ["JavaScript", "Canvas", "React", "Image API", "Plugin System"],
    architecture: "节点式工作流编辑器 + 图像生成服务 + 插件化模型节点。",
    knowledge: ["Canvas 交互", "图像生成 API", "节点编辑器", "前端状态管理", "插件机制"],
    risk: "部分模型节点依赖第三方服务。",
  },
  {
    id: "tiny-coding-agent",
    name: "tiny-coding-agent",
    owner: "devtoy",
    description: "不足 1000 行代码的 coding agent 教学项目，展示文件读取、修改、测试和命令执行的基本闭环。",
    tags: ["Coding", "Agent"],
    language: "Python",
    stars: 8804,
    starGrowth: 540,
    forkGrowth: 132,
    forks: 1250,
    discussion: 70,
    hot: 80,
    reason: "代码量小，适合学习 AI coding agent 的最小实现。",
    fit: "适合会写简单脚本、想理解 Codex/Claude Code 类工具原理的用户。",
    difficulty: "入门",
    stack: ["Python", "CLI", "LLM API", "File System", "Test Runner"],
    architecture: "命令行交互 + 文件读写工具 + 模型规划循环 + 测试反馈闭环。",
    knowledge: ["AI coding agent 原理", "文件系统操作", "命令执行", "测试驱动修改", "安全边界"],
    risk: "不适合直接用于生产环境。",
  },
  {
    id: "local-llm-router",
    name: "local-llm-router",
    owner: "edge-ai",
    description: "本地和云端模型统一路由层，支持成本控制、fallback、缓存和简单评测。",
    tags: ["Infra", "Model"],
    language: "Rust",
    stars: 7710,
    starGrowth: 420,
    forkGrowth: 76,
    forks: 612,
    discussion: 58,
    hot: 74,
    reason: "模型成本和可用性成为开发者关注点，路由与 fallback 需求升温。",
    fit: "适合后端或基础设施方向开发者。",
    difficulty: "挑战",
    stack: ["Rust", "HTTP Proxy", "LLM Gateway", "Caching", "Observability"],
    architecture: "统一模型网关 + 路由策略 + 缓存层 + fallback 与监控模块。",
    knowledge: ["模型路由", "后端网关", "缓存策略", "可观测性", "并发与性能优化"],
    risk: "Rust 技术门槛较高，新手上手成本偏大。",
  },
];

let news = [
  {
    id: "openai-dev-tools",
    title: "OpenAI 发布新的开发者工具更新，强化多模态与 agent 开发体验",
    source: "Official Blog",
    company: "OpenAI",
    topic: "开发者工具",
    time: "2026-06-05",
    heat: 94,
    summary: "更新聚焦模型调用、工具编排和调试体验，对构建 AI 应用和 coding agent 的开发者影响较大。",
    importance: "这类更新通常会改变开发者构建 agent、RAG 和自动化应用的默认技术选择。",
    relatedRepo: "agent-lab",
  },
  {
    id: "anthropic-coding",
    title: "Anthropic 扩展 AI coding 产品能力，强调长期任务和代码库理解",
    source: "Tech Media",
    company: "Anthropic",
    topic: "产品发布",
    time: "2026-06-04",
    heat: 88,
    summary: "新能力围绕大型代码库上下文、审查和跨文件修改展开，引发开发者社区关注。",
    importance: "AI coding 工具正在从单次补全走向长期协作，对开源项目上手方式有直接影响。",
    relatedRepo: "tiny-coding-agent",
  },
  {
    id: "google-model",
    title: "Google DeepMind 更新 Gemini 系列模型，提升推理与视频理解能力",
    source: "Official Blog",
    company: "Google",
    topic: "模型发布",
    time: "2026-06-03",
    heat: 86,
    summary: "模型更新强化长上下文、多模态输入和复杂任务表现，被开发者用于评估新一代 AI 应用体验。",
    importance: "多模态能力提升会推动图像、视频、教育和办公类 AI 应用更新。",
    relatedRepo: "image-flow-ui",
  },
  {
    id: "meta-open-source",
    title: "Meta 开源生态继续扩张，社区关注本地模型部署和工具链",
    source: "Community Roundup",
    company: "Meta",
    topic: "开源",
    time: "2026-06-02",
    heat: 74,
    summary: "围绕开源模型、推理优化和本地部署的讨论持续升温，多个工具项目获得增长。",
    importance: "本地模型生态增强会降低个人开发者尝试 AI 应用的成本。",
    relatedRepo: "local-llm-router",
  },
  {
    id: "microsoft-agent",
    title: "Microsoft 推进企业级 Agent 工作流，开发者关注工具调用和权限边界",
    source: "Enterprise AI Weekly",
    company: "Microsoft",
    topic: "开发者工具",
    time: "2026-06-01",
    heat: 72,
    summary: "企业场景下的 agent 编排、权限、审计和数据连接能力成为讨论焦点。",
    importance: "这会影响 Agent 框架和 MCP server 的设计方向。",
    relatedRepo: "mcp-browser-tools",
  },
];

const tagSet = ["全部", "Agent", "RAG", "Coding", "MCP", "Image", "Infra", "Tool", "Model"];
let selectedTag = "全部";
let trendRange = "today";
let currentStep = 0;
let generatedRecommendations = [];
// @AI_GENERATED
let beginnerProjects = [];
// @AI_GENERATED: end

// @AI_GENERATED: 近7天热榜数据聚合状态
const DAY_MS = 24 * 60 * 60 * 1000;
let repos7d = [];
let snapshotCache = null; // 缓存已加载的近7天快照，避免重复请求
let isLoading7d = false;
// @AI_GENERATED: end

const repoList = document.querySelector("#repoList");
const trendFilters = document.querySelector("#trendFilters");
const trendSort = document.querySelector("#trendSort");
const newsList = document.querySelector("#newsList");
const companyFilter = document.querySelector("#companyFilter");
const topicFilter = document.querySelector("#topicFilter");
const drawer = document.querySelector("#drawer");
const scrim = document.querySelector("#scrim");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerType = document.querySelector("#drawerType");
const drawerBody = document.querySelector("#drawerBody");
const drawerActions = document.querySelector("#drawerActions");
const toast = document.querySelector("#toast");
const heroCanvas = document.querySelector("#heroCanvas");
const heroVisual = document.querySelector(".hero-visual");
const dataUpdatedAt = document.querySelector("#dataUpdatedAt");
const dataSourceBadge = document.querySelector("#dataSourceBadge");
const dataSourceDetail = document.querySelector("#dataSourceDetail");

// @AI_GENERATED: 收藏功能（localStorage 持久化）
const FAVORITES_KEY = "trendFavorites";

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function isFavorite(repoId) {
  return getFavorites().some((f) => String(f.id) === String(repoId));
}

function toggleFavorite(repoId) {
  const repo = repos.find((r) => String(r.id) === String(repoId));
  if (!repo) return false;
  let favorites = getFavorites();
  const exists = favorites.some((f) => String(f.id) === String(repoId));
  if (exists) {
    favorites = favorites.filter((f) => String(f.id) !== String(repoId));
  } else {
    favorites.push({
      id: repo.id,
      name: repo.name,
      owner: repo.owner,
      url: repo.url || `https://github.com/${repo.owner}/${repo.name}`,
    });
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch { /* ignore */ }
  return !exists;
}

function renderFavorites() {
  const container = document.querySelector("#favoritesList");
  if (!container) return;
  const favorites = getFavorites();
  if (!favorites.length) {
    container.innerHTML = `<p class="favorites-empty">还没有收藏项目，点击热榜卡片上的「收藏」按钮试试。</p>`;
    return;
  }
  container.innerHTML = favorites
    .map(
      (f) => `
        <div class="favorite-item">
          <a href="${f.url}" target="_blank" rel="noopener" class="favorite-link">${f.owner}/${f.name}</a>
          <button class="favorite-remove" data-action="unfavorite" data-repo="${f.id}" title="取消收藏">×</button>
        </div>
      `
    )
    .join("");
}
// @AI_GENERATED: end

// @AI_GENERATED: 稍后阅读功能（localStorage 持久化）
const READ_LATER_KEY = "newsReadLater";

function getReadLaterList() {
  try {
    const raw = localStorage.getItem(READ_LATER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function isReadLater(newsId) {
  return getReadLaterList().some((item) => item.id === newsId);
}

function toggleReadLater(newsId) {
  const newsItem = news.find((n) => n.id === newsId);
  if (!newsItem) return false;
  let list = getReadLaterList();
  const exists = list.some((item) => item.id === newsId);
  if (exists) {
    list = list.filter((item) => item.id !== newsId);
  } else {
    list.push({
      id: newsItem.id,
      title: newsItem.title,
      url: newsItem.url || "",
      company: newsItem.company,
      time: newsItem.time,
    });
  }
  try {
    localStorage.setItem(READ_LATER_KEY, JSON.stringify(list));
  } catch { /* ignore */ }
  return !exists;
}

function renderReadLater() {
  const container = document.querySelector("#readLaterList");
  if (!container) return;
  const list = getReadLaterList();
  if (!list.length) {
    container.innerHTML = `<p class="favorites-empty">还没有标记稍后阅读，点击新闻卡片上的「稍后阅读」按钮试试。</p>`;
    return;
  }
  container.innerHTML = list
    .map(
      (item) => `
        <div class="favorite-item">
          <a href="${item.url}" target="_blank" rel="noopener" class="favorite-link" title="${item.title}">${item.title.slice(0, 40)}${item.title.length > 40 ? "…" : ""}</a>
          <button class="favorite-remove" data-news-action="unread-later" data-news="${item.id}" title="移除">×</button>
        </div>
      `
    )
    .join("");
}
// @AI_GENERATED: end

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

function formatDateTime(value) {
  if (!value) return "未知";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "未知";
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function normalizeSnapshotRepository(repo) {
  return {
    ...repo,
    id: String(repo.id),
    url: repo.url || `https://github.com/${repo.owner}/${repo.name}`,
    descriptionZh: repo.descriptionZh || repo.description,
    tags: repo.tags?.length ? repo.tags : ["Tool"],
    language: repo.language || "Unknown",
    starGrowth: repo.starGrowth ?? 0,
    forkGrowth: repo.forkGrowth ?? 0,
    discussion: repo.discussion ?? 0,
    hot: repo.hot ?? 1,
    fit: repo.fit || "适合作为趋势观察、源码学习或二次开发候选项目。",
    difficulty: repo.difficulty || "入门到进阶",
    stack: repo.stack?.length ? repo.stack : [repo.language || "Unknown"],
    architecture: repo.architecture || "核心库/服务模块 + 示例应用 + 配置与运行脚本。",
    knowledge: repo.knowledge?.length ? repo.knowledge : ["GitHub 工作流", "README 阅读", "本地环境配置"],
    risk: repo.risk || "真实可运行性需结合 README、依赖版本和 API Key 要求确认。",
  };
}

function normalizeSnapshotNews(item) {
  return {
    ...item,
    id: item.id || item.url || item.title,
    summaryZh: item.summaryZh || item.summary,
    company: item.company || "AI",
    topic: item.topic || "AI 产品与应用",
    time: item.time || item.publishedAt?.slice(0, 10) || "",
    heat: item.heat || 1,
    importance: item.importance || "该新闻可能影响 AI 产品、开发者生态或开源项目方向。",
  };
}

function repoUrl(repo) {
  return repo?.url || `https://github.com/${repo?.owner}/${repo?.name}`;
}

function repoDescription(repo) {
  return repo.descriptionZh || repo.description;
}

function newsSummary(item) {
  return item.summaryZh || item.summary;
}

async function copyText(value) {
  if (!value) return false;
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}

async function loadSnapshotData() {
  try {
    const response = await fetch(`./data/current.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`snapshot ${response.status}`);
    const snapshot = await response.json();
    if (Array.isArray(snapshot.repositories) && snapshot.repositories.length) {
      repos = snapshot.repositories.map(normalizeSnapshotRepository);
    }
    if (Array.isArray(snapshot.news) && snapshot.news.length) {
      news = snapshot.news.map(normalizeSnapshotNews);
    }
    // @AI_GENERATED
    if (Array.isArray(snapshot.beginnerProjects) && snapshot.beginnerProjects.length) {
      beginnerProjects = snapshot.beginnerProjects;
    }
    // @AI_GENERATED: end
    if (dataUpdatedAt) dataUpdatedAt.textContent = `更新至 ${formatDateTime(snapshot.generatedAt)}`;
    if (dataSourceBadge) {
      dataSourceBadge.textContent = "真实快照";
      dataSourceBadge.className = "source-badge is-live";
    }
    if (dataSourceDetail) {
      dataSourceDetail.textContent = `当前使用真实数据快照：${repos.length} 个 GitHub 项目，${news.length} 条新闻。生成时间：${formatDateTime(snapshot.generatedAt)}。`;
    }
    showToast("已加载最新数据快照");
  } catch (error) {
    console.warn("Using bundled demo data:", error.message);
    if (dataUpdatedAt) dataUpdatedAt.textContent = "使用演示数据";
    if (dataSourceBadge) {
      dataSourceBadge.textContent = "演示数据";
      dataSourceBadge.className = "source-badge is-demo";
    }
    if (dataSourceDetail) {
      dataSourceDetail.textContent = "当前未读取到 data/current.json，页面正在使用内置 mock 数据。请运行 npm run update:data 生成真实快照。";
    }
  }
}

function initHeroCanvas() {
  if (!heroCanvas) return;
  const ctx = heroCanvas.getContext("2d");
  const interaction = {
    active: false,
    x: 0.5,
    y: 0.5,
    intensity: 0,
  };
  const particles = Array.from({ length: 88 }, (_, index) => {
    const isCoreCluster = index < 8;
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.22 + Math.random() * 0.28;
    const gridColumns = 10;
    const gridRows = 8;
    const gridIndex = index - 8;
    const column = gridIndex % gridColumns;
    const row = Math.floor(gridIndex / gridColumns) % gridRows;
    const gridX = (column + 0.5 + (Math.random() - 0.5) * 0.68) / gridColumns;
    const gridY = (row + 0.58 + (Math.random() - 0.5) * 0.66) / gridRows;
    return {
      baseX: isCoreCluster ? 0.5 + Math.cos(angle) * radius : gridX,
      baseY: isCoreCluster ? 0.54 + Math.sin(angle) * radius * 0.72 : gridY,
      phase: Math.random() * Math.PI * 2,
      speed: 0.0018 + Math.random() * 0.0024,
      size: index % 7 === 0 ? 2.4 : 1.35,
      cluster: isCoreCluster,
    };
  });

  function setPointerPosition(event) {
    if (!heroVisual) return;
    const rect = heroVisual.getBoundingClientRect();
    interaction.x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    interaction.y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
    const tiltX = (interaction.x - 0.5) * 16;
    const tiltY = (0.5 - interaction.y) * 12;
    heroVisual.style.setProperty("--pointer-x", String(interaction.x * 100));
    heroVisual.style.setProperty("--pointer-y", String(interaction.y * 100));
    heroVisual.style.setProperty("--tilt-x", tiltX.toFixed(2));
    heroVisual.style.setProperty("--tilt-y", tiltY.toFixed(2));
  }

  function setInteraction(active) {
    interaction.active = active;
    heroVisual?.classList.toggle("is-core-active", active);
    if (!active && heroVisual) {
      heroVisual.style.setProperty("--tilt-x", "0");
      heroVisual.style.setProperty("--tilt-y", "0");
      heroVisual.style.setProperty("--pointer-x", "50");
      heroVisual.style.setProperty("--pointer-y", "48");
    }
  }

  if (heroVisual) {
    heroVisual.addEventListener("pointerenter", (event) => {
      setPointerPosition(event);
      setInteraction(true);
    });
    heroVisual.addEventListener("pointermove", setPointerPosition);
    heroVisual.addEventListener("pointerleave", () => setInteraction(false));
    heroVisual.addEventListener("focusin", () => setInteraction(true));
    heroVisual.addEventListener("focusout", () => setInteraction(false));
  }

  function resize() {
    const rect = heroCanvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    heroCanvas.width = Math.max(1, Math.floor(rect.width * scale));
    heroCanvas.height = Math.max(1, Math.floor(rect.height * scale));
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function draw(time) {
    const width = heroCanvas.clientWidth;
    const height = heroCanvas.clientHeight;
    ctx.clearRect(0, 0, width, height);
    interaction.intensity += ((interaction.active ? 1 : 0) - interaction.intensity) * 0.08;
    const pull = interaction.intensity;
    const centerX = width * (0.5 + (interaction.x - 0.5) * 0.12);
    const centerY = height * (0.48 + (interaction.y - 0.5) * 0.12);

    const points = particles.map((particle) => {
      const drift = Math.sin(time * particle.speed + particle.phase);
      const orbit = Math.cos(time * particle.speed * 0.8 + particle.phase);
      const driftRange = particle.cluster ? 14 : 22;
      const orbitRange = particle.cluster ? 12 : 18;
      const baseX = particle.baseX * width + drift * (driftRange + pull * 10);
      const baseY = particle.baseY * height + orbit * (orbitRange + pull * 8);
      const distanceToCore = Math.hypot(baseX - centerX, baseY - centerY);
      const attraction = pull * Math.max(0, 1 - distanceToCore / Math.max(width, height)) * 0.34;
      return {
        x: baseX + (centerX - baseX) * attraction,
        y: baseY + (centerY - baseY) * attraction,
        size: particle.size + pull * 0.45,
      };
    });

    const linkDistance = 122 + pull * 50;
    ctx.lineWidth = 1 + pull * 0.42;
    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const distance = Math.hypot(dx, dy);
        if (distance < linkDistance) {
          const alpha = (1 - distance / linkDistance) * (0.24 + pull * 0.2);
          ctx.strokeStyle = `rgba(57, 213, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }

    if (pull > 0.02) {
      const pulse = (Math.sin(time * 0.004) + 1) / 2;
      const rings = [
        { radius: 72 + pulse * 12, alpha: 0.36 },
        { radius: 104 + (1 - pulse) * 16, alpha: 0.22 },
        { radius: 138 + pulse * 18, alpha: 0.14 },
      ];
      rings.forEach((ring) => {
        ctx.strokeStyle = `rgba(57, 213, 255, ${ring.alpha * pull})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.fillStyle = `rgba(122, 92, 255, ${0.12 * pull})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 88, 0, Math.PI * 2);
      ctx.fill();
    }

    points.forEach((point, index) => {
      ctx.fillStyle = index % 5 === 0 ? `rgba(122, 92, 255, ${0.92 + pull * 0.08})` : `rgba(57, 213, 255, ${0.82 + pull * 0.12})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

function renderTrendFilters() {
  trendFilters.innerHTML = tagSet
    .map((tag) => `<button class="chip ${tag === selectedTag ? "active" : ""}" data-tag="${tag}">${tag}</button>`)
    .join("");
}

// @AI_GENERATED: 近7天热榜 — 加载快照、聚合计算

function normalizeValue(value, max) {
  if (!max || max <= 0) return 0;
  return Math.min(1, Math.max(0, value / max));
}

// 加载最近7天的快照文件（按日期推算文件名，静态站点无法列目录）
async function load7DaySnapshots() {
  if (snapshotCache) return snapshotCache;
  const baseDate = new Date();
  const dates = [];
  for (let i = 0; i < 7; i += 1) {
    const d = new Date(baseDate.getTime() - i * DAY_MS);
    dates.push(d.toISOString().slice(0, 10));
  }
  const results = await Promise.all(
    dates.map(async (date) => {
      try {
        const res = await fetch(`./data/snapshots/${date}.json?ts=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return null;
        return await res.json();
      } catch {
        return null;
      }
    })
  );
  // 按日期降序：results[0] 是最新一天
  snapshotCache = results.filter(Boolean);
  return snapshotCache;
}

// 聚合最近7天的累计增长，并用与"今日"一致的权重重新计算综合热度
function compute7DayAggregation(snapshots) {
  // 最新快照作为基准；若快照不足，回退到当前 current.json 的 repos
  const latest = snapshots[0];
  const oldest = snapshots[snapshots.length - 1] || latest;
  const baseRepos = latest?.repositories?.length
    ? latest.repositories.map(normalizeSnapshotRepository)
    : repos;
  // 只有存在 2 份及以上不同日期快照时，才用"当前 - 最早"得到7天累计增长；
  // 否则没有真实历史区间，退化为当日增长字段
  const hasHistory = snapshots.length >= 2;
  const oldestById = new Map((oldest?.repositories || []).map((r) => [String(r.id), r]));

  // 先算出每个项目的7天累计增长
  const enriched = baseRepos.map((repo) => {
    const past = hasHistory ? oldestById.get(String(repo.id)) : null;
    // 当前 stars/forks 减去7天前的 stars/forks；无历史则退化为当日增长
    const starGrowth7d = past
      ? Math.max(0, (repo.stars ?? 0) - (past.stars ?? repo.stars ?? 0))
      : repo.starGrowth ?? 0;
    const forkGrowth7d = past
      ? Math.max(0, (repo.forks ?? 0) - (past.forks ?? repo.forks ?? 0))
      : repo.forkGrowth ?? 0;
    // 讨论度：累加7天内每份快照的 discussion 增长代理值
    let discussion7d = 0;
    snapshots.forEach((snap) => {
      const item = (snap.repositories || []).find((r) => String(r.id) === String(repo.id));
      if (item) discussion7d += item.discussion ?? 0;
    });
    if (!snapshots.length) discussion7d = repo.discussion ?? 0;
    return { repo, starGrowth7d, forkGrowth7d, discussion7d };
  });

  // 归一化所需的最大值
  const maxStarGrowth = Math.max(...enriched.map((e) => e.starGrowth7d), 1);
  const maxForkGrowth = Math.max(...enriched.map((e) => e.forkGrowth7d), 1);
  const maxDiscussion = Math.max(...enriched.map((e) => e.discussion7d), 1);
  const maxStars = Math.max(...enriched.map((e) => e.repo.stars ?? 0), 1);
  const maxForks = Math.max(...enriched.map((e) => e.repo.forks ?? 0), 1);

  return enriched
    .map(({ repo, starGrowth7d, forkGrowth7d, discussion7d }) => {
      const starGrowthScore = normalizeValue(starGrowth7d, maxStarGrowth);
      const forkGrowthScore = normalizeValue(forkGrowth7d, maxForkGrowth);
      const discussionScore = normalizeValue(discussion7d, maxDiscussion);
      // 总量得分：stars 占 65%、forks 占 35%，整体仅占 5% 权重
      const totalScaleScore =
        normalizeValue(Math.log1p(repo.stars ?? 0), Math.log1p(maxStars)) * 0.65 +
        normalizeValue(Math.log1p(repo.forks ?? 0), Math.log1p(maxForks)) * 0.35;
      // 新鲜度：7天内有 push 视为活跃
      let recencyScore = 0;
      if (repo.pushedAt) {
        const ageDays = Math.max(1, (Date.now() - new Date(repo.pushedAt).getTime()) / DAY_MS);
        recencyScore = Math.min(1, 7 / ageDays);
      }
      // 权重与"今日"一致：stars 45 / forks 25 / 讨论 20 / 总量 5 / 新鲜度 5
      const hot7d = Math.max(
        1,
        Math.min(
          100,
          Math.round(
            starGrowthScore * 45 +
              forkGrowthScore * 25 +
              discussionScore * 20 +
              totalScaleScore * 5 +
              recencyScore * 5
          )
        )
      );
      return { ...repo, starGrowth7d, forkGrowth7d, discussion7d, hot7d };
    })
    .sort((a, b) => b.hot7d - a.hot7d);
}

// 进入近7天模式：加载快照 -> 聚合 -> 渲染
async function activate7DayTrend() {
  if (isLoading7d) return;
  if (repos7d.length) {
    renderRepos();
    return;
  }
  isLoading7d = true;
  showToast("正在加载近 7 天热榜数据…");
  try {
    const snapshots = await load7DaySnapshots();
    repos7d = compute7DayAggregation(snapshots);
    renderRepos();
    showToast(`已按近 7 天热度计算 ${repos7d.length} 个项目`);
  } catch (error) {
    console.warn("Failed to load 7-day trend:", error.message);
    showToast("近 7 天数据加载失败，已保持当前视图");
    trendRange = "today";
    renderRepos();
  } finally {
    isLoading7d = false;
  }
}
// @AI_GENERATED: end

function getSortedRepos() {
  const sort = trendSort.value;
  // @AI_GENERATED: 近7天模式使用聚合后的数据源与对应字段
  if (trendRange === "7d") {
    return repos7d
      .filter((repo) => selectedTag === "全部" || repo.tags.includes(selectedTag))
      .sort((a, b) => {
        if (sort === "stars") return b.starGrowth7d - a.starGrowth7d;
        if (sort === "forks") return b.forkGrowth7d - a.forkGrowth7d;
        if (sort === "discussion") return b.discussion7d - a.discussion7d;
        return b.hot7d - a.hot7d;
      });
  }
  // @AI_GENERATED: end
  return repos
    .filter((repo) => selectedTag === "全部" || repo.tags.includes(selectedTag))
    .sort((a, b) => {
      if (sort === "stars") return b.starGrowth - a.starGrowth;
      if (sort === "forks") return b.forkGrowth - a.forkGrowth;
      if (sort === "discussion") return b.discussion - a.discussion;
      return b.hot - a.hot;
    });
}

function renderRepos() {
  const items = getSortedRepos();
  const activeSort = trendSort.value;
  if (!items.length) {
    repoList.innerHTML = `<div class="repo-card"><p>当前筛选没有结果。</p><button class="small-button" id="clearTrendFilter">清除筛选</button></div>`;
    return;
  }

  // @AI_GENERATED: 根据时间范围选择展示的指标字段与文案
  const is7d = trendRange === "7d";
  const metricLabel = is7d ? "近7天" : "";

  repoList.innerHTML = items
    .map(
      (repo, index) => {
        const hotVal = is7d ? repo.hot7d : repo.hot;
        const starVal = is7d ? repo.starGrowth7d : repo.starGrowth;
        const forkVal = is7d ? repo.forkGrowth7d : repo.forkGrowth;
        const discussionVal = is7d ? repo.discussion7d : repo.discussion;
        return `
        <article class="repo-card" data-repo="${repo.id}">
          <div class="card-top">
            <div class="title-line">
              <span class="rank">${index + 1}</span>
              <div>
                <h3>${repo.owner}/${repo.name}</h3>
                <p>${repoDescription(repo)}</p>
              </div>
            </div>
            <button class="small-button" data-action="details" data-repo="${repo.id}">查看详情</button>
          </div>
          <div class="metric-row">
            <span class="metric ${activeSort === "hot" ? "metric-hot-active" : ""}">Hot ${hotVal}</span>
            <span class="metric ${activeSort === "stars" ? "metric-stars-active" : ""}">${metricLabel}+${starVal} stars</span>
            <span class="metric ${activeSort === "forks" ? "metric-forks-active" : ""}">${metricLabel}+${forkVal} forks</span>
            <span class="metric ${activeSort === "discussion" ? "metric-discussion-active" : ""}">讨论度 ${discussionVal}</span>
            <span class="metric">${repo.language}</span>
          </div>
          <div class="tag-row">${repo.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="action-row">
            <button class="small-button" data-action="doc" data-repo="${repo.id}">生成上手建议</button>
            <button class="small-button" data-action="fit" data-repo="${repo.id}">适合我吗</button>
            <button class="small-button ${isFavorite(repo.id) ? "is-favorited" : ""}" data-action="save" data-repo="${repo.id}">${isFavorite(repo.id) ? "★ 已收藏" : "☆ 收藏"}</button>
          </div>
        </article>
      `;
      }
    )
    .join("");
  // @AI_GENERATED: end
}

function renderNews() {
  const company = companyFilter.value;
  const topic = topicFilter.value;
  const items = news.filter((item) => (company === "all" || item.company === company) && (topic === "all" || item.topic === topic));
  if (!items.length) {
    newsList.innerHTML = `<article class="news-card"><p>当前筛选没有新闻结果，请调整公司或主题。</p></article>`;
    return;
  }
  newsList.innerHTML = items
    .map(
      (item) => `
        <article class="news-card" data-news="${item.id}">
          <div class="card-top">
            <div>
              <h3>${item.title}</h3>
              <p>${newsSummary(item)}</p>
            </div>
            <button class="small-button" data-news-action="details" data-news="${item.id}">查看详情</button>
          </div>
          <div class="metric-row">
            <span class="metric hot">讨论度 ${item.heat}</span>
            <span class="metric">${item.company}</span>
            <span class="metric">${item.topic}</span>
            <span class="metric">${item.time}</span>
          </div>
          <div class="action-row">
            <button class="small-button" data-news-action="source" data-url="${item.url || ""}">打开原文</button>
            <button class="small-button ${isReadLater(item.id) ? "is-favorited" : ""}" data-news-action="save" data-news="${item.id}">${isReadLater(item.id) ? "★ 已标记" : "☆ 稍后阅读"}</button>
          </div>
        </article>
      `
    )
    .join("");
}

function openDrawer(type, title, body, actions = "") {
  drawerType.textContent = type;
  drawerTitle.textContent = title;
  drawerBody.innerHTML = body;
  drawerActions.innerHTML = actions;
  scrim.classList.remove("hidden");
  drawer.classList.remove("hidden");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawer.classList.add("hidden");
  scrim.classList.add("hidden");
  drawer.setAttribute("aria-hidden", "true");
}

function repoDetail(repo) {
  return `
    <section class="drawer-section">
      <h3>项目简介</h3>
      <p>${repoDescription(repo)}</p>
      ${repo.descriptionZh && repo.descriptionZh !== repo.description ? `<p class="original-text">原文：${repo.description}</p>` : ""}
    </section>
    <section class="drawer-section">
      <h3>为什么热门</h3>
      <p>${repo.reason}</p>
      <div class="metric-row">
        <span class="metric hot">Hot ${repo.hot}</span>
        <span class="metric up">+${repo.starGrowth} stars</span>
        <span class="metric">${formatNumber(repo.stars)} total stars</span>
        <span class="metric">${formatNumber(repo.forks)} forks</span>
      </div>
    </section>
        <section class="drawer-section">
      <h3>适合人群</h3>
      <p>${repo.fit}</p>
    </section>
    <section class="drawer-section">
      <h3>项目难度与技术栈</h3>
      <div class="metric-row">
        <span class="metric hot">难度 ${repo.difficulty}</span>
        ${repo.stack.map((item) => `<span class="metric">${item}</span>`).join("")}
      </div>
    </section>
    <section class="drawer-section">
      <h3>架构与专业知识</h3>
      <p>${repo.architecture}</p>
      <div class="tag-row">${repo.knowledge.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    </section>
    <section class="drawer-section">
      <h3>风险提示</h3>
      <p>${repo.risk}</p>
    </section>
  `;
}

function documentFor(repo) {
  return `# ${repo.owner}/${repo.name} 上手说明

## 1. 项目是什么
${repoDescription(repo)}

## 2. 为什么适合你
${repo.fit}

## 3. 环境准备
- 准备 Git、Node.js 或 Python，具体取决于项目技术栈：${repo.language}
- 阅读 README 的 Quick Start 和 examples
- 如项目依赖模型服务，提前准备 API Key

## 4. 项目难度与专业知识
- 难度：${repo.difficulty}
- 技术栈：${repo.stack.join("、")}
- 架构：${repo.architecture}
- 会涉及的知识：${repo.knowledge.join("、")}

## 5. 第一次运行
1. 克隆项目仓库
2. 安装依赖
3. 复制环境变量示例文件
4. 启动本地开发服务
5. 打开示例页面或运行 demo 命令

## 6. 第一次建议修改
先改一个低风险功能：调整提示词、替换默认模型、增加一个输入字段，或新增一个简单工具调用。

## 7. 7 天实践计划
Day 1: 跑通项目并记录依赖
Day 2: 阅读入口文件和核心模块
Day 3: 修改一个小功能
Day 4: 增加一个自定义场景
Day 5: 整理 README 和截图
Day 6: 部署或录制演示
Day 7: 写一篇复盘，说明你改了什么

## 8. 注意事项
${repo.risk}`;
}

function documentPreviewFor(repo) {
  const runSteps = ["克隆项目仓库", "安装依赖并检查版本", "复制环境变量示例文件", "启动本地开发服务", "打开示例页面或运行 demo 命令"];
  const plan = [
    ["Day 1", "跑通项目并记录依赖"],
    ["Day 2", "阅读入口文件和核心模块"],
    ["Day 3", "修改一个小功能"],
    ["Day 4", "增加一个自定义场景"],
    ["Day 5", "整理 README 和截图"],
    ["Day 6", "部署或录制演示"],
    ["Day 7", "写一篇复盘，说明你改了什么"],
  ];

  return `
    <article class="doc-report">
      <header class="doc-hero">
        <p class="eyebrow">Generated onboarding guide</p>
        <h3>${repo.owner}/${repo.name}</h3>
        <p>${repoDescription(repo)}</p>
        <div class="metric-row">
          <span class="metric hot">难度 ${repo.difficulty}</span>
          <span class="metric">${repo.language}</span>
          <span class="metric up">预计 1-7 天上手</span>
        </div>
      </header>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>01</span>
          <h4>为什么适合你</h4>
        </div>
        <p>${repo.fit}</p>
      </section>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>02</span>
          <h4>技术栈与架构</h4>
        </div>
        <p>${repo.architecture}</p>
        <div class="doc-chip-grid">${repo.stack.map((item) => `<span>${item}</span>`).join("")}</div>
      </section>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>03</span>
          <h4>你会接触到的专业知识</h4>
        </div>
        <div class="doc-chip-grid">${repo.knowledge.map((item) => `<span>${item}</span>`).join("")}</div>
      </section>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>04</span>
          <h4>第一次运行路线</h4>
        </div>
        <ol class="doc-steps">
          ${runSteps.map((step) => `<li><strong>${step}</strong><p>先按 README 的最小路径执行，遇到不确定配置时优先保留默认值。</p></li>`).join("")}
        </ol>
      </section>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>05</span>
          <h4>第一次建议修改</h4>
        </div>
        <p>先改一个低风险功能：调整提示词、替换默认模型、增加一个输入字段，或新增一个简单工具调用。目标不是一次改完，而是建立“改动 -> 运行 -> 验证”的闭环。</p>
      </section>

      <section class="doc-card">
        <div class="doc-card-head">
          <span>06</span>
          <h4>7 天实践计划</h4>
        </div>
        <div class="doc-timeline">
          ${plan.map(([day, text]) => `<div><strong>${day}</strong><p>${text}</p></div>`).join("")}
        </div>
      </section>

      <section class="doc-card doc-warning">
        <div class="doc-card-head">
          <span>!</span>
          <h4>注意事项</h4>
        </div>
        <p>${repo.risk}</p>
      </section>
    </article>
  `;
}

function openRepo(repoId) {
  const repo = repos.find((item) => item.id === repoId);
  const url = repoUrl(repo);
  openDrawer(
    "项目详情",
    `${repo.owner}/${repo.name}`,
    repoDetail(repo),
    `
      <button class="primary-button" data-drawer-action="doc" data-repo="${repo.id}">生成上手文档</button>
      <button class="secondary-button" data-drawer-action="copy-link" data-url="${url}">复制 GitHub 链接</button>
      <button class="secondary-button" data-drawer-action="compare">加入推荐对比</button>
    `
  );
}

function openNews(newsId) {
  const item = news.find((entry) => entry.id === newsId);
  openDrawer(
    "新闻详情",
    item.title,
    `
      <section class="drawer-section">
        <h3>摘要</h3>
        <p>${newsSummary(item)}</p>
        ${item.summaryZh && item.summaryZh !== item.summary ? `<p class="original-text">原文：${item.summary}</p>` : ""}
      </section>
      <section class="drawer-section">
        <h3>为什么重要</h3>
        <p>${item.importance}</p>
      </section>
      <section class="drawer-section">
        <h3>来源与标签</h3>
        <div class="metric-row">
          <span class="metric">${item.source}</span>
          <span class="metric">${item.company}</span>
          <span class="metric">${item.topic}</span>
          <span class="metric">${item.time}</span>
        </div>
      </section>
    `,
    `
      <button class="primary-button" data-drawer-action="source" data-url="${item.url || ""}">打开原文</button>
    `
  );
}

function openDoc(repoId) {
  const repo = repos.find((item) => item.id === repoId);
  openDrawer(
    "上手文档预览",
    `${repo.name} 上手说明`,
    documentPreviewFor(repo),
    `
      <button class="primary-button" data-drawer-action="copy-doc" data-repo="${repo.id}">复制文档</button>
      <button class="secondary-button" data-drawer-action="regen-doc" data-repo="${repo.id}">重新生成</button>
    `
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.setTimeout(() => toast.classList.add("hidden"), 1800);
}

// @AI_GENERATED
function updateStep() {
  document.querySelectorAll(".wizard-step").forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.step) === currentStep);
  });
  const stepText = document.querySelector("#stepText");
  if (stepText) stepText.textContent = `步骤 ${currentStep + 1} / 5`;
  const progressBar = document.querySelector("#progressBar");
  if (progressBar) progressBar.style.width = `${(currentStep + 1) * 20}%`;
  const prevStep = document.querySelector("#prevStep");
  if (prevStep) prevStep.disabled = currentStep === 0;
  const nextStep = document.querySelector("#nextStep");
  if (nextStep) nextStep.textContent = currentStep === 4 ? "生成推荐" : "下一步";
}
// @AI_GENERATED: end

function generateRecommendations() {
  generatedRecommendations = [repos[1], repos[4], repos[0]];
  document.querySelector("#emptyReco")?.classList.add("hidden");
  const recoList = document.querySelector("#recommendationList");
  if (!recoList) return;
  recoList.innerHTML = generatedRecommendations
    .map(
      (repo, index) => `
        <article class="reco-card">
          <div class="card-top">
            <div>
              <h3>${repo.owner}/${repo.name}</h3>
              <p>${repoDescription(repo)}</p>
            </div>
            <span class="metric hot">匹配 ${94 - index * 6}</span>
          </div>
          <div class="drawer-section">
            <h3>为什么适合你</h3>
            <p>${repo.fit}</p>
          </div>
          <div class="metric-row">
            <span class="metric hot">难度 ${repo.difficulty}</span>
            ${repo.stack.slice(0, 4).map((item) => `<span class="metric">${item}</span>`).join("")}
          </div>
          <div class="drawer-section">
            <h3>会涉及的专业知识</h3>
            <p>${repo.architecture}</p>
            <div class="tag-row">${repo.knowledge.slice(0, 5).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
          </div>
          <div class="action-row">
            <button class="small-button" data-action="details" data-repo="${repo.id}">查看详情</button>
            <button class="small-button" data-action="doc" data-repo="${repo.id}">生成上手文档</button>
            <button class="small-button" data-action="dismiss">不喜欢这个</button>
          </div>
        </article>
      `
    )
    .join("");
  showToast("已生成 3 个推荐项目");
}

function setActiveSection(target) {
  document.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.target === target));
  document.querySelectorAll(".page-section").forEach((section) => section.classList.toggle("active-section", section.id === target));
  const heroBottom = document.querySelector(".hero-strip").getBoundingClientRect().bottom + window.scrollY;
  if (window.scrollY > heroBottom - 80) {
    window.scrollTo({ top: heroBottom + 24, behavior: "smooth" });
  }
}

document.addEventListener("click", async (event) => {
  const chip = event.target.closest(".chip");
  if (chip) {
    selectedTag = chip.dataset.tag;
    renderTrendFilters();
    renderRepos();
    return;
  }

  const nav = event.target.closest(".nav-tab");
  if (nav) {
    setActiveSection(nav.dataset.target);
    return;
  }

  const jump = event.target.closest("[data-jump]");
  if (jump) {
    setActiveSection(jump.dataset.jump);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "details") openRepo(actionButton.dataset.repo);
    if (action === "doc") openDoc(actionButton.dataset.repo);
    if (action === "fit") {
      setActiveSection("recommender");
      showToast("已把该项目加入推荐上下文");
    }
    // @AI_GENERATED
    if (action === "save") {
      const added = toggleFavorite(actionButton.dataset.repo);
      renderRepos();
      renderFavorites();
      showToast(added ? "已加入收藏" : "已取消收藏");
    }
    if (action === "unfavorite") {
      toggleFavorite(actionButton.dataset.repo);
      renderRepos();
      renderFavorites();
      showToast("已取消收藏");
    }
    // @AI_GENERATED: end
    if (action === "dismiss") {
      actionButton.closest(".reco-card").remove();
      showToast("已移除该推荐");
    }
    return;
  }

  const newsAction = event.target.closest("[data-news-action]");
  if (newsAction) {
    const action = newsAction.dataset.newsAction;
    if (action === "details") openNews(newsAction.dataset.news);
    if (action === "related") {
      if (newsAction.dataset.repo) openRepo(newsAction.dataset.repo);
      else showToast("当前新闻暂无关联项目");
    }
    // @AI_GENERATED
    if (action === "source") {
      const url = newsAction.dataset.url;
      if (url) {
        window.open(url, "_blank", "noopener");
      } else {
        showToast("该新闻暂无原文链接");
      }
    }
    // @AI_GENERATED: end
    // @AI_GENERATED
    if (action === "save") {
      const added = toggleReadLater(newsAction.dataset.news);
      renderNews();
      renderReadLater();
      showToast(added ? "已加入稍后阅读" : "已取消稍后阅读");
    }
    if (action === "unread-later") {
      toggleReadLater(newsAction.dataset.news);
      renderNews();
      renderReadLater();
      showToast("已从稍后阅读移除");
    }
    // @AI_GENERATED: end
    return;
  }

  // @AI_GENERATED: Beginner Recommender Event Handling (Task 7.3)
  const beginnerOption = event.target.closest("[data-beginner-option]");
  if (beginnerOption) {
    const field = beginnerOption.dataset.beginnerField;
    const optionId = beginnerOption.dataset.beginnerOption;
    handleBeginnerOptionClick(field, optionId);
    const container = document.querySelector("#beginnerWizardContainer");
    if (container) {
      container.innerHTML = renderBeginnerQuestionnaireStep(beginnerQuestionnaireState.currentStep);
    }
    return;
  }

  const beginnerNav = event.target.closest("[data-beginner-nav]");
  if (beginnerNav) {
    const direction = beginnerNav.dataset.beginnerNav;
    const totalSteps = BEGINNER_STEPS.length;
    const currentBeginnerStep = beginnerQuestionnaireState.currentStep;

    if (direction === "next" && currentBeginnerStep === totalSteps - 1) {
      // Last step: run match engine if questionnaire is complete
      if (isQuestionnaireComplete()) {
        const userProfile = buildUserProfile();
        // @AI_GENERATED
        // 如果 beginnerProjects 为空（API 限流或首次运行），回退使用热榜数据
        let pool = beginnerProjects;
        if (!pool || pool.length === 0) {
          pool = repos.map(repo => ({
            id: repo.id,
            name: repo.name,
            owner: repo.owner,
            url: repo.url || `https://github.com/${repo.owner}/${repo.name}`,
            description: repo.description || "",
            descriptionZh: repo.descriptionZh || repo.description || "",
            categoryTags: (repo.tags || []).map(t => t.toLowerCase()),
            language: repo.language || "Unknown",
            stars: repo.stars || 0,
            beginnerScore: 50,
            setupComplexity: repo.difficulty === "入门" ? "low" : repo.difficulty === "挑战" ? "high" : "medium",
            prerequisiteSkills: ["basic-terminal", "git-basics"],
            estimatedFirstRunMinutes: repo.difficulty === "入门" ? 30 : repo.difficulty === "挑战" ? 90 : 45,
            hasChineseDocs: !!(repo.descriptionZh),
            hasExamplesFolder: false,
            lastUpdated: new Date().toISOString(),
            topics: repo.tags || [],
            forks: repo.forks || 0,
            openIssues: 0,
          }));
          // 回退数据也写入全局，供后续"生成入门指南"查找
          beginnerProjects = pool;
        }
        const results = runMatchEngine(userProfile, pool);
        // @AI_GENERATED: end
        renderBeginnerResults(results);
        showToast(`已匹配 ${results.length} 个推荐项目`);
      } else {
        showToast("请完成所有问卷步骤后再生成推荐");
      }
    } else {
      navigateBeginnerStep(direction);
      const container = document.querySelector("#beginnerWizardContainer");
      if (container) {
        container.innerHTML = renderBeginnerQuestionnaireStep(beginnerQuestionnaireState.currentStep);
      }
    }
    return;
  }

  const beginnerAction = event.target.closest("[data-beginner-action]");
  if (beginnerAction) {
    const action = beginnerAction.dataset.beginnerAction;
    const projectId = beginnerAction.dataset.projectId;

    if (action === "why-fit") {
      const panel = document.querySelector(`#whyFit-${projectId}`);
      if (panel) {
        panel.style.display = panel.style.display === "none" ? "block" : "none";
      }
    }

    if (action === "generate-doc") {
      const project = beginnerProjects.find(p => String(p.id) === String(projectId));
      if (project) {
        const userProfile = buildUserProfile();
        openBeginnerDocDrawer(project, userProfile);
      } else {
        showToast("未找到该项目数据");
      }
    }

    if (action === "dismiss") {
      dismissProject(projectId);
      const card = beginnerAction.closest(".beginner-match-card");
      if (card) card.remove();
      showToast("已标记为不适合，后续不再推荐");
    }
    return;
  }

  const resetBeginner = event.target.closest("#resetBeginnerProfile");
  if (resetBeginner) {
    resetBeginnerQuestionnaire();
    const container = document.querySelector("#beginnerWizardContainer");
    if (container) {
      container.innerHTML = renderBeginnerQuestionnaireStep(0);
    }
    // Clear results
    const resultList = document.querySelector("#beginnerRecommendationList");
    if (resultList) resultList.innerHTML = "";
    const emptyEl = document.querySelector("#beginnerEmptyReco");
    if (emptyEl) emptyEl.classList.remove("hidden");
    showToast("画像已重置");
    return;
  }
  // @AI_GENERATED: end

  const drawerAction = event.target.closest("[data-drawer-action]");
  if (drawerAction) {
    const action = drawerAction.dataset.drawerAction;
    if (action === "doc") openDoc(drawerAction.dataset.repo);
    if (action === "related") {
      if (drawerAction.dataset.repo) openRepo(drawerAction.dataset.repo);
      else showToast("当前新闻暂无关联项目");
    }
    if (action === "copy-doc") showToast("已复制 Markdown 文档");
    if (action === "regen-doc") showToast("已按当前画像重新生成");
    if (action === "copy-link") {
      const url = drawerAction.dataset.url;
      const copied = await copyText(url);
      showToast(copied ? `已复制：${url}` : `GitHub 链接：${url}`);
    }
    if (action === "compare") showToast("已加入推荐对比");
    // @AI_GENERATED
    if (action === "source") {
      const url = drawerAction.dataset.url;
      if (url) {
        window.open(url, "_blank", "noopener");
      } else {
        showToast("该新闻暂无原文链接");
      }
    }
    // @AI_GENERATED: end
    // @AI_GENERATED: Beginner doc drawer actions (Task 7.3)
    if (action === "copy-beginner-doc") {
      if (window._currentBeginnerDoc) {
        const copied = await copyOnboardingDocToClipboard(window._currentBeginnerDoc);
        showToast(copied ? "已复制入门指南全文" : "复制失败，请手动选择文本");
      } else {
        showToast("暂无文档可复制");
      }
    }
    if (action === "open-github") {
      const url = drawerAction.dataset.url;
      if (url) {
        window.open(url, "_blank", "noopener");
      } else {
        showToast("暂无 GitHub 链接");
      }
    }
    // @AI_GENERATED: end
  }
});

document.querySelectorAll(".segmented").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    group.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    // @AI_GENERATED: 时间范围切换联动列表渲染
    if (group.dataset.group === "trend-range") {
      trendRange = button.dataset.value;
      if (trendRange === "7d") {
        activate7DayTrend();
      } else {
        renderRepos();
        showToast(`已切换到 ${button.textContent}`);
      }
      return;
    }
    // @AI_GENERATED: end
    showToast(`已切换到 ${button.textContent}`);
  });
});

document.querySelectorAll(".option-grid").forEach((grid) => {
  grid.addEventListener("click", (event) => {
    const choice = event.target.closest(".choice");
    if (!choice) return;
    if (!grid.classList.contains("multi")) grid.querySelectorAll(".choice").forEach((item) => item.classList.remove("active"));
    choice.classList.toggle("active");
  });
});

trendSort.addEventListener("change", () => {
  renderRepos();
});
companyFilter.addEventListener("change", renderNews);
topicFilter.addEventListener("change", renderNews);
document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
scrim.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});
document.querySelector("#refreshBtn").addEventListener("click", () => showToast("已刷新模拟数据"));
// @AI_GENERATED
document.querySelector("#prevStep")?.addEventListener("click", () => {
  currentStep = Math.max(0, currentStep - 1);
  updateStep();
});
document.querySelector("#nextStep")?.addEventListener("click", () => {
  if (currentStep < 4) {
    currentStep += 1;
    updateStep();
  } else {
    generateRecommendations();
  }
});
document.querySelector("#resetProfile")?.addEventListener("click", () => {
  currentStep = 0;
  updateStep();
  document.querySelector("#recommendationList").innerHTML = "";
  document.querySelector("#emptyReco")?.classList.remove("hidden");
  showToast("画像已重置");
});
// @AI_GENERATED: end

// @AI_GENERATED: Beginner Questionnaire State Management & Data Persistence
const BEGINNER_QUESTIONNAIRE_OPTIONS = {
  background: [
    { id: "student", label: "学生", explanation: "在校学生或应届毕业生" },
    { id: "product-manager", label: "产品经理", explanation: "负责产品设计和需求的非技术岗" },
    { id: "designer", label: "设计师", explanation: "UI/UX 设计或视觉设计" },
    { id: "marketer", label: "运营/市场", explanation: "做增长、内容或营销的岗位" },
    { id: "business-analyst", label: "数据分析", explanation: "日常用 Excel/SQL 但没写过代码" },
    { id: "career-changer", label: "想转码", explanation: "其他行业想转技术岗" },
    { id: "hobbyist", label: "兴趣探索", explanation: "纯好奇想试试" },
    { id: "other", label: "其他", explanation: "以上都不太准确" },
  ],
  goal: [
    { id: "build-a-portfolio-project", label: "做一个作品集项目", explanation: "能展示给面试官或朋友看的东西" },
    { id: "understand-AI-tools", label: "理解 AI 工具原理", explanation: "知道 ChatGPT/Cursor 底层在做什么" },
    { id: "automate-personal-workflow", label: "自动化日常工作", explanation: "减少重复劳动，提高效率" },
    { id: "explore-career-change", label: "探索转行可能性", explanation: "看看技术岗日常是什么样的" },
    { id: "learn-coding-basics", label: "学编程基础", explanation: "从零开始学写代码" },
    { id: "build-a-product-idea", label: "验证产品想法", explanation: "想做个小产品看看有没有人用" },
  ],
  interestDirections: [
    { id: "AI-chatbot", label: "AI 聊天机器人" },
    { id: "knowledge-search", label: "知识搜索/问答" },
    { id: "image-creation", label: "AI 图像创作" },
    { id: "code-helper", label: "AI 编程助手" },
    { id: "browser-automation", label: "浏览器自动化" },
    { id: "data-analysis", label: "数据分析" },
    { id: "personal-assistant", label: "个人 AI 助理" },
    { id: "content-creation", label: "内容创作工具" },
  ],
  timeBudget: [
    { id: "30-minutes-per-day", label: "每天 30 分钟", explanation: "碎片时间学习" },
    { id: "1-hour-per-day", label: "每天 1 小时", explanation: "固定学习时间" },
    { id: "half-day-per-week", label: "每周半天", explanation: "周末集中学一次" },
    { id: "full-day-per-week", label: "每周一整天", explanation: "认真投入时间" },
    { id: "flexible-long-term", label: "不限时间", explanation: "长期持续学习" },
  ],
  environmentPreference: [
    { id: "browser-only-no-install", label: "只用浏览器", explanation: "不想在电脑装任何东西" },
    { id: "simple-local-setup", label: "简单本地安装", explanation: "装一两个软件可以接受" },
    { id: "docker-comfortable", label: "Docker 可接受", explanation: "知道 Docker 是什么或愿意学" },
    { id: "any-environment", label: "都可以", explanation: "不在意复杂度" },
  ],
};

const BEGINNER_STEPS = ["background", "goal", "interestDirections", "timeBudget", "environmentPreference"];
const SESSION_KEY = "beginnerQuestionnaireState";

let beginnerQuestionnaireState = {
  currentStep: 0,
  answers: {
    background: null,
    goal: null,
    interestDirections: [],
    timeBudget: null,
    environmentPreference: null,
  },
};

function initBeginnerQuestionnaire() {
  restoreQuestionnaireFromSession();
}

function saveQuestionnaireAnswer(step, value) {
  const field = BEGINNER_STEPS[step];
  beginnerQuestionnaireState.answers[field] = value;
  beginnerQuestionnaireState.currentStep = step;
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(beginnerQuestionnaireState));
  } catch { /* sessionStorage unavailable, continue without persistence */ }
}

function restoreQuestionnaireFromSession() {
  try {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.answers) {
        beginnerQuestionnaireState = parsed;
      }
    }
  } catch { /* sessionStorage unavailable */ }
}

function resetBeginnerQuestionnaire() {
  beginnerQuestionnaireState = {
    currentStep: 0,
    answers: { background: null, goal: null, interestDirections: [], timeBudget: null, environmentPreference: null },
  };
  try { sessionStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
}

function buildUserProfile() {
  const { answers } = beginnerQuestionnaireState;
  return {
    background: answers.background,
    goal: answers.goal,
    interestDirections: answers.interestDirections || [],
    timeBudget: answers.timeBudget,
    environmentPreference: answers.environmentPreference,
  };
}

function isQuestionnaireComplete() {
  const { answers } = beginnerQuestionnaireState;
  return answers.background && answers.goal && answers.interestDirections.length > 0
    && answers.timeBudget && answers.environmentPreference;
}
// @AI_GENERATED: end

// @AI_GENERATED: Beginner Questionnaire UI Rendering & Interaction (Task 3.2)
const BEGINNER_STEP_LABELS = ["你的背景", "你想做什么", "感兴趣的方向", "可投入时间", "运行环境偏好"];

function renderBeginnerQuestionnaireStep(step) {
  const field = BEGINNER_STEPS[step];
  const options = BEGINNER_QUESTIONNAIRE_OPTIONS[field];
  const currentAnswer = beginnerQuestionnaireState.answers[field];
  const isMulti = field === "interestDirections";
  const totalSteps = BEGINNER_STEPS.length;
  const progressPercent = ((step + 1) / totalSteps) * 100;

  // Build progress indicator HTML
  const progressHtml = `
    <div class="beginner-progress">
      <div class="beginner-progress-bar" style="width: ${progressPercent}%"></div>
    </div>
    <p class="beginner-step-text">步骤 ${step + 1} / ${totalSteps}：${BEGINNER_STEP_LABELS[step]}</p>
  `;

  // Build option buttons HTML
  const optionsHtml = options.map((option) => {
    let isActive = false;
    if (isMulti) {
      isActive = Array.isArray(currentAnswer) && currentAnswer.includes(option.id);
    } else {
      isActive = currentAnswer === option.id;
    }
    const activeClass = isActive ? "beginner-option-active" : "";
    return `<button class="beginner-option ${activeClass}" data-beginner-option="${option.id}" data-beginner-field="${field}">
      <span class="beginner-option-label">${option.label}</span>
    </button>`;
  }).join("");

  // Build explanation text for selected option(s)
  let explanationHtml = "";
  if (isMulti) {
    if (Array.isArray(currentAnswer) && currentAnswer.length > 0) {
      const selectedExplanations = currentAnswer
        .map((id) => options.find((o) => o.id === id))
        .filter(Boolean)
        .map((o) => o.label)
        .join("、");
      explanationHtml = `<p class="beginner-explanation">已选择：${selectedExplanations}</p>`;
    } else {
      explanationHtml = `<p class="beginner-explanation beginner-explanation-hint">可多选，选择你感兴趣的方向</p>`;
    }
  } else {
    if (currentAnswer) {
      const selectedOption = options.find((o) => o.id === currentAnswer);
      if (selectedOption && selectedOption.explanation) {
        explanationHtml = `<p class="beginner-explanation">${selectedOption.explanation}</p>`;
      }
    }
  }

  // Build navigation buttons
  const prevDisabled = step === 0 ? "disabled" : "";
  const nextLabel = step === totalSteps - 1 ? "生成推荐" : "下一步";
  const navHtml = `
    <div class="beginner-nav">
      <button class="beginner-nav-btn beginner-prev-btn" data-beginner-nav="prev" ${prevDisabled}>上一步</button>
      <button class="beginner-nav-btn beginner-next-btn" data-beginner-nav="next">${nextLabel}</button>
    </div>
  `;

  // Combine all parts
  return `
    <div class="beginner-questionnaire-step">
      ${progressHtml}
      <div class="beginner-options-grid">
        ${optionsHtml}
      </div>
      ${explanationHtml}
      ${navHtml}
    </div>
  `;
}

function handleBeginnerOptionClick(field, optionId) {
  const step = BEGINNER_STEPS.indexOf(field);
  if (step === -1) return;

  const isMulti = field === "interestDirections";

  if (isMulti) {
    let current = beginnerQuestionnaireState.answers[field];
    if (!Array.isArray(current)) current = [];
    if (current.includes(optionId)) {
      current = current.filter((id) => id !== optionId);
    } else {
      current = [...current, optionId];
    }
    saveQuestionnaireAnswer(step, current);
  } else {
    // Single-select: clicking the same option deselects, clicking another selects it
    const currentValue = beginnerQuestionnaireState.answers[field];
    if (currentValue === optionId) {
      saveQuestionnaireAnswer(step, null);
    } else {
      saveQuestionnaireAnswer(step, optionId);
    }
  }
}

function navigateBeginnerStep(direction) {
  const totalSteps = BEGINNER_STEPS.length;
  const current = beginnerQuestionnaireState.currentStep;

  if (direction === "prev") {
    if (current > 0) {
      beginnerQuestionnaireState.currentStep = current - 1;
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(beginnerQuestionnaireState));
      } catch { /* ignore */ }
    }
  } else if (direction === "next") {
    if (current < totalSteps - 1) {
      beginnerQuestionnaireState.currentStep = current + 1;
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(beginnerQuestionnaireState));
      } catch { /* ignore */ }
    }
    // If at last step, caller should check isQuestionnaireComplete() and trigger matching
  }
}
// @AI_GENERATED: end

// @AI_GENERATED: Match_Engine 核心评分逻辑
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

// @AI_GENERATED
function generateMatchReasonText(userProfile, project, breakdown) {
  const backgroundLabels = {
    "student": "学生", "product-manager": "产品经理", "designer": "设计师",
    "marketer": "运营/市场人员", "business-analyst": "数据分析师", "career-changer": "转码者",
    "hobbyist": "兴趣探索者", "other": "新手用户",
  };
  const goalLabels = {
    "build-a-portfolio-project": "做一个可展示的作品集项目",
    "understand-AI-tools": "理解 AI 工具的底层原理",
    "automate-personal-workflow": "自动化日常重复工作",
    "explore-career-change": "探索转行技术岗的可能性",
    "learn-coding-basics": "从零开始学编程",
    "build-a-product-idea": "快速验证一个产品想法",
  };
  const envLabels = {
    "browser-only-no-install": "只用浏览器、不想装任何软件",
    "simple-local-setup": "可以做简单的本地安装",
    "docker-comfortable": "能接受 Docker 环境",
    "any-environment": "不在意环境复杂度",
  };
  const timeBudgetLabels = {
    "30-minutes-per-day": "每天 30 分钟",
    "1-hour-per-day": "每天 1 小时",
    "half-day-per-week": "每周集中半天",
    "full-day-per-week": "每周投入一整天",
    "flexible-long-term": "弹性时间、长期学习",
  };
  const interestLabels = {
    "AI-chatbot": "AI 聊天机器人", "knowledge-search": "知识搜索/问答",
    "image-creation": "AI 图像创作", "code-helper": "AI 编程助手",
    "browser-automation": "浏览器自动化", "data-analysis": "数据分析",
    "personal-assistant": "个人 AI 助理", "content-creation": "内容创作工具",
  };

  const userName = backgroundLabels[userProfile.background] || "你";
  const userGoal = goalLabels[userProfile.goal] || "探索 AI 项目";
  const projectName = `${project.owner}/${project.name}`;
  const lang = project.language || "Unknown";
  const complexity = project.setupComplexity === "low" ? "低" : project.setupComplexity === "medium" ? "中等" : "较高";
  const complexityDesc = project.setupComplexity === "low" ? "只需几步简单命令即可运行" : project.setupComplexity === "medium" ? "需要安装语言环境和依赖包" : "涉及多个服务组件或编译步骤";
  const runTime = project.estimatedFirstRunMinutes || 45;
  const userTime = timeBudgetLabels[userProfile.timeBudget] || "有限时间";
  const userEnv = envLabels[userProfile.environmentPreference] || "你偏好的环境";
  const interests = (userProfile.interestDirections || []).map(i => interestLabels[i] || i).join("、") || "AI 方向";
  const tags = (project.categoryTags || []).join("、") || "通用工具";
  const projectDesc = project.descriptionZh || project.description || "";
  const stars = project.stars ? `${(project.stars / 1000).toFixed(1)}k` : "未知";
  const skills = (project.prerequisiteSkills || []).join("、") || "基本终端操作";
  const topics = (project.topics || []).slice(0, 5).join("、");

  const sections = [];

  // Section 1: 你是谁 + 你想做什么
  sections.push(`**📌 你的画像**\n你是一名${userName}，目标是「${userGoal}」。你对「${interests}」方向感兴趣，计划投入${userTime}，偏好${userEnv}。`);

  // Section 2: 这个项目是什么
  sections.push(`**📦 关于 ${projectName}**\n这是一个 ${stars} stars 的 ${lang} 项目，属于「${tags}」方向。${projectDesc ? `项目简介：${projectDesc.slice(0, 120)}` : ""}${topics ? `\n关键标签：${topics}` : ""}`);

  // Section 3: 为什么匹配
  const matchPoints = [];

  if (breakdown.setupComplexityMatch >= 80) {
    matchPoints.push(`✅ **环境匹配**：项目安装复杂度${complexity}（${complexityDesc}），完全符合你「${userEnv}」的偏好`);
  } else if (breakdown.setupComplexityMatch >= 50) {
    matchPoints.push(`⚠️ **环境略高**：项目安装复杂度${complexity}（${complexityDesc}），比你的偏好高一级，但入门指南会帮你逐步配置`);
  } else {
    matchPoints.push(`⚠️ **环境挑战**：项目安装复杂度${complexity}（${complexityDesc}），建议先通过入门指南学习基本命令行操作`);
  }

  if (breakdown.interestAlignment >= 80) {
    matchPoints.push(`✅ **方向吻合**：项目方向「${tags}」与你感兴趣的「${interests}」高度匹配`);
  } else if (breakdown.interestAlignment >= 50) {
    matchPoints.push(`✅ **方向相关**：项目方向「${tags}」与你关注的「${interests}」有交叉，适合作为学习切入点`);
  } else {
    matchPoints.push(`ℹ️ **方向参考**：虽然不完全对口，但项目的实践方式对理解 AI 应用开发很有帮助`);
  }

  if (breakdown.timeBudgetFeasibility >= 80) {
    matchPoints.push(`✅ **时间可行**：首次运行约 ${runTime} 分钟，在你${userTime}的预算内完全可以完成`);
  } else if (breakdown.timeBudgetFeasibility >= 50) {
    matchPoints.push(`⚠️ **时间偏紧**：首次运行约 ${runTime} 分钟，可能需要比${userTime}稍多的时间，建议分两次完成`);
  } else {
    matchPoints.push(`⚠️ **时间较长**：首次运行约 ${runTime} 分钟，建议在周末或空闲时间集中完成初始配置`);
  }

  if (breakdown.goalAlignment >= 80) {
    matchPoints.push(`✅ **目标一致**：这个项目非常适合用来${userGoal}，完成后可以直接作为成果展示`);
  } else if (breakdown.goalAlignment > 0) {
    matchPoints.push(`ℹ️ **目标参考**：虽然不是你目标的最直接路径，但掌握后对${userGoal}会有帮助`);
  }

  if (breakdown.prerequisiteSkillMatch >= 80) {
    matchPoints.push(`✅ **技能匹配**：项目所需的基础技能（${skills}）与你的背景匹配`);
  } else if (breakdown.prerequisiteSkillMatch >= 50) {
    matchPoints.push(`⚠️ **需要学习**：项目需要掌握「${skills}」，部分对你来说是新知识，入门指南中会逐步引导`);
  } else {
    matchPoints.push(`⚠️ **前置技能**：项目需要「${skills}」，建议先跟着入门指南的环境准备部分打好基础`);
  }

  sections.push(`**🎯 匹配分析**\n${matchPoints.join("\n")}`);

  // Section 4: 建议的上手路径
  const suggestions = [];
  if (project.setupComplexity === "low") {
    suggestions.push("直接按 README 运行 → 观察效果 → 修改一个参数看变化");
  } else {
    suggestions.push("先花 10 分钟阅读 README → 配好环境 → 跑通示例 → 再尝试修改");
  }
  if (userProfile.goal === "build-a-portfolio-project") {
    suggestions.push("运行成功后截图记录 → 改一个功能 → 写一段说明 → 部署或录屏展示");
  } else if (userProfile.goal === "understand-AI-tools") {
    suggestions.push("运行后阅读核心代码 → 画出数据流向 → 写一篇理解笔记");
  } else if (userProfile.goal === "automate-personal-workflow") {
    suggestions.push("跑通后想一个自己的使用场景 → 把示例数据换成自己的 → 验证效果");
  }

  sections.push(`**🛤️ 建议上手路径**\n${suggestions.map(s => `• ${s}`).join("\n")}`);

  return sections.join("\n\n");
}
// @AI_GENERATED: end

function computeMatchScore(userProfile, project) {
  const setupComplexityMatch = computeSetupComplexityMatch(
    userProfile.environmentPreference,
    project.setupComplexity
  );
  const interestAlignment = computeInterestAlignment(
    userProfile.interestDirections,
    project.categoryTags
  );
  const timeBudgetFeasibility = computeTimeBudgetFeasibility(
    userProfile.timeBudget,
    project.estimatedFirstRunMinutes
  );
  const prerequisiteSkillMatch = computePrerequisiteSkillMatch(
    userProfile.background,
    project.prerequisiteSkills
  );
  const goalAlignment = computeGoalAlignment(
    userProfile.goal,
    project.categoryTags
  );

  const total = Math.round(
    setupComplexityMatch * 0.30
    + interestAlignment * 0.25
    + timeBudgetFeasibility * 0.20
    + prerequisiteSkillMatch * 0.15
    + goalAlignment * 0.10
  );

  const breakdown = {
    setupComplexityMatch,
    interestAlignment,
    timeBudgetFeasibility,
    prerequisiteSkillMatch,
    goalAlignment,
  };

  const reason = generateMatchReasonText(userProfile, project, breakdown);

  return { total, breakdown, reason };
}
// @AI_GENERATED: end

// @AI_GENERATED: Match_Engine 匹配结果生成与降级逻辑
const DISMISSED_KEY = "beginnerDismissedProjects";

function getDismissedProjects() {
  try {
    const raw = localStorage.getItem(DISMISSED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function dismissProject(projectId) {
  const dismissed = getDismissedProjects();
  if (!dismissed.includes(String(projectId))) {
    dismissed.push(String(projectId));
    try { localStorage.setItem(DISMISSED_KEY, JSON.stringify(dismissed)); } catch {}
  }
}

function runMatchEngine(userProfile, projectPool) {
  const dismissed = getDismissedProjects();

  // Filter out dismissed projects
  const candidates = (projectPool || []).filter(p => !dismissed.includes(String(p.id)));

  // Score all candidates
  const scored = candidates.map(project => ({
    project,
    ...computeMatchScore(userProfile, project),
  }));

  // Filter by minimum score threshold
  const passing = scored.filter(item => item.total >= 20);

  // Sort descending by total score
  passing.sort((a, b) => b.total - a.total);

  // Return top 5 if at least 3 pass
  if (passing.length >= 3) {
    return passing.slice(0, 5);
  }

  // If fewer than 3, try relaxation
  return relaxAndRerun(userProfile, candidates);
}

function relaxAndRerun(userProfile, candidates) {
  // Relax: upgrade user's environment preference by one level
  const relaxedProfile = { ...userProfile };
  const levels = ["browser-only-no-install", "simple-local-setup", "docker-comfortable", "any-environment"];
  const currentIndex = levels.indexOf(relaxedProfile.environmentPreference);
  if (currentIndex >= 0 && currentIndex < levels.length - 1) {
    relaxedProfile.environmentPreference = levels[currentIndex + 1];
  } else {
    relaxedProfile.environmentPreference = "any-environment";
  }

  const scored = candidates.map(project => ({
    project,
    ...computeMatchScore(relaxedProfile, project),
  }));

  const passing = scored.filter(item => item.total >= 40);
  passing.sort((a, b) => b.total - a.total);

  // Return whatever we have (even if less than 3 after relaxation)
  return passing.slice(0, 5);
}

function generateMatchReason(userProfile, project, breakdown) {
  return generateMatchReasonText(userProfile, project, breakdown);
}
// @AI_GENERATED: end

// @AI_GENERATED: Onboarding_Doc 模板生成逻辑（Task 6.1）
function generateOverviewSection(project) {
  const difficultyLabel = project.setupComplexity === "low" ? "入门" : project.setupComplexity === "medium" ? "适中" : "较高";
  const desc = project.descriptionZh || project.description || "一个值得探索的开源项目";
  return (
    `## 项目是什么\n\n` +
    `${desc}\n\n` +
    `**GitHub 地址**：${project.url || `https://github.com/${project.owner}/${project.name}`}\n` +
    `**主要语言**：${project.language || "Unknown"}\n` +
    `**Stars**：${project.stars || 0}\n` +
    `**难度**：${difficultyLabel}`
  );
}

function generateWhyItFitsSection(project, userProfile) {
  const goalMap = {
    "build-a-portfolio-project": "构建一个可展示的作品集项目",
    "understand-AI-tools": "理解 AI 工具的工作原理",
    "automate-personal-workflow": "自动化个人工作流",
    "explore-career-change": "探索转行可能性",
    "learn-coding-basics": "学习编程基础",
    "build-a-product-idea": "实现一个产品想法",
  };
  const interestMap = {
    "AI-chatbot": "AI 聊天机器人（Chatbot，能对话的 AI 程序）",
    "knowledge-search": "知识检索（Knowledge Search，从文档中找答案）",
    "image-creation": "AI 图像生成（Image Generation，用 AI 创作图片）",
    "code-helper": "代码助手（Code Helper，辅助编程的 AI 工具）",
    "browser-automation": "浏览器自动化（Browser Automation，让程序操作网页）",
    "data-analysis": "数据分析（Data Analysis，从数据中提取洞察）",
    "personal-assistant": "个人助手（Personal Assistant，帮你处理日常事务的 AI）",
    "content-creation": "内容创作（Content Creation，用 AI 辅助写作或设计）",
  };
  const userGoal = goalMap[userProfile.goal] || "探索 AI 项目";
  const userInterest = interestMap[userProfile.interestDirection] || "AI 相关方向";
  const tags = (project.categoryTags || []).join("、") || "通用";

  return (
    `## 为什么这个项目适合你\n\n` +
    `根据你的目标「${userGoal}」和兴趣方向「${userInterest}」，这个项目与你的需求高度匹配。\n\n` +
    `**项目方向**：${tags}\n` +
    `**难度匹配**：该项目安装复杂度为「${project.setupComplexity === "low" ? "低" : project.setupComplexity === "medium" ? "中等" : "较高"}」，` +
    `适合${project.setupComplexity === "low" ? "零基础用户直接上手" : project.setupComplexity === "medium" ? "有基本命令行经验的用户" : "有一定开发经验的用户"}。\n` +
    `**预计首次运行时间**：约 ${project.estimatedFirstRunMinutes || 30} 分钟`
  );
}

function generateEnvironmentSetupSection(project) {
  const lang = (project.language || "").toLowerCase();
  let setupCommands = "";

  if (lang === "python") {
    setupCommands =
      `### 安装 Python（解释型编程语言，用于运行该项目）\n\n` +
      `1. 访问 https://www.python.org/downloads/ 下载最新版 Python（建议 3.10 以上）\n` +
      `2. 安装时勾选 "Add Python to PATH"（将 Python 加入系统路径，让命令行可以识别）\n` +
      `3. 验证安装：\n` +
      `\`\`\`bash\npython --version\n# 预期输出：Python 3.10.x 或更高版本\n\`\`\`\n\n` +
      `### 安装 pip（Python 的包管理工具，用于安装项目依赖）\n\n` +
      `pip 通常随 Python 一起安装，验证：\n` +
      `\`\`\`bash\npip --version\n# 预期输出：pip 23.x 或更高版本\n\`\`\`\n\n`;
  } else if (lang === "javascript" || lang === "typescript") {
    setupCommands =
      `### 安装 Node.js（JavaScript 运行环境，让你在命令行运行 JS 代码）\n\n` +
      `1. 访问 https://nodejs.org/ 下载 LTS（长期支持）版本（建议 18 以上）\n` +
      `2. 安装完成后验证：\n` +
      `\`\`\`bash\nnode --version\n# 预期输出：v18.x.x 或更高版本\n\`\`\`\n\n` +
      `### 安装 npm（Node.js 的包管理工具，随 Node.js 自动安装）\n\n` +
      `\`\`\`bash\nnpm --version\n# 预期输出：9.x 或更高版本\n\`\`\`\n\n`;
  } else if (lang === "go") {
    setupCommands =
      `### 安装 Go（编译型编程语言，运行速度快）\n\n` +
      `1. 访问 https://go.dev/dl/ 下载最新版 Go（建议 1.21 以上）\n` +
      `2. 验证安装：\n` +
      `\`\`\`bash\ngo version\n# 预期输出：go1.21.x 或更高版本\n\`\`\`\n\n`;
  } else if (lang === "rust") {
    setupCommands =
      `### 安装 Rust（系统级编程语言，高性能）\n\n` +
      `1. 使用 rustup 安装（Rust 官方安装工具）：\n` +
      `\`\`\`bash\ncurl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n\`\`\`\n` +
      `2. 验证安装：\n` +
      `\`\`\`bash\nrustc --version\n# 预期输出：rustc 1.70.x 或更高版本\n\`\`\`\n\n`;
  } else {
    setupCommands =
      `### 安装项目语言环境（${project.language || "Unknown"}）\n\n` +
      `请参考该项目 README 中的环境要求说明，安装对应语言的运行环境。\n\n`;
  }

  return (
    `## 环境准备\n\n` +
    `以下是运行该项目需要的工具。请按顺序安装，每一步都有验证命令。\n\n` +
    `### 安装 Git（版本控制工具，用于下载项目代码）\n\n` +
    `\`\`\`bash\ngit --version\n# 如果未安装，访问 https://git-scm.com/downloads 下载安装\n# 预期输出：git version 2.x.x\n\`\`\`\n\n` +
    setupCommands +
    `### 安装代码编辑器\n\n` +
    `推荐使用 VS Code（免费、跨平台、插件丰富）：https://code.visualstudio.com/`
  );
}

function generateInstallationSection(project) {
  const lang = (project.language || "").toLowerCase();
  const repoUrl = project.url || `https://github.com/${project.owner}/${project.name}`;
  let installCommands = "";

  if (lang === "python") {
    installCommands =
      `\`\`\`bash\n# 第四步：创建虚拟环境（Virtual Environment，隔离项目依赖，避免和其他项目冲突）\npython -m venv venv\n# 预期：当前目录出现 venv 文件夹\n\`\`\`\n\n` +
      `\`\`\`bash\n# 第五步：激活虚拟环境\n# Windows:\nvenv\\Scripts\\activate\n# macOS/Linux:\nsource venv/bin/activate\n# 预期：命令行提示符前出现 (venv) 标记\n\`\`\`\n\n` +
      `\`\`\`bash\n# 第六步：安装项目依赖\npip install -r requirements.txt\n# 预期：大量包被下载安装，最终显示 Successfully installed ...\n\`\`\``;
  } else if (lang === "javascript" || lang === "typescript") {
    installCommands =
      `\`\`\`bash\n# 第四步：安装项目依赖（npm install 会读取 package.json 并下载所有需要的库）\nnpm install\n# 预期：出现 node_modules 文件夹，终端显示 added xxx packages\n\`\`\``;
  } else if (lang === "go") {
    installCommands =
      `\`\`\`bash\n# 第四步：下载项目依赖\ngo mod download\n# 预期：终端显示依赖下载信息\n\`\`\``;
  } else if (lang === "rust") {
    installCommands =
      `\`\`\`bash\n# 第四步：编译项目（首次编译会自动下载依赖）\ncargo build\n# 预期：终端显示 Compiling ... 最终显示 Finished\n\`\`\``;
  } else {
    installCommands = `\`\`\`bash\n# 第四步：安装依赖（请参考项目 README 中的具体命令）\n\`\`\``;
  }

  return (
    `## 一步步安装\n\n` +
    `以下每条命令都有解释，请按顺序执行。\n\n` +
    `\`\`\`bash\n# 第一步：克隆项目（Clone，将远程代码下载到本地）\ngit clone ${repoUrl}\n# 预期：终端显示 Cloning into '${project.name}'... 随后出现进度条\n\`\`\`\n\n` +
    `\`\`\`bash\n# 第二步：进入项目目录\ncd ${project.name}\n# 预期：命令行路径变为 .../${project.name}\n\`\`\`\n\n` +
    `\`\`\`bash\n# 第三步：查看项目文件（确认下载成功）\nls\n# 预期：看到 README.md 和其他项目文件\n\`\`\`\n\n` +
    installCommands
  );
}

function generateFirstRunSection(project) {
  const lang = (project.language || "").toLowerCase();
  let runCommand = "";

  if (lang === "python") {
    runCommand =
      `\`\`\`bash\n# 启动项目（具体命令请以 README 为准）\npython main.py\n# 或\npython app.py\n# 或\npython -m ${project.name.replace(/-/g, "_")}\n\`\`\``;
  } else if (lang === "javascript" || lang === "typescript") {
    runCommand =
      `\`\`\`bash\n# 启动项目\nnpm start\n# 或\nnpm run dev\n# 预期：终端显示服务启动信息，通常是一个本地 URL 如 http://localhost:3000\n\`\`\``;
  } else if (lang === "go") {
    runCommand = `\`\`\`bash\n# 运行项目\ngo run .\n# 预期：程序启动并输出运行信息\n\`\`\``;
  } else if (lang === "rust") {
    runCommand = `\`\`\`bash\n# 运行项目\ncargo run\n# 预期：编译后程序启动\n\`\`\``;
  } else {
    runCommand = `\`\`\`bash\n# 请参考 README 中的启动命令\n\`\`\``;
  }

  return (
    `## 第一次运行\n\n` +
    `在安装步骤完成后，运行以下命令启动项目：\n\n` +
    runCommand + `\n\n` +
    `**运行成功的标志**：\n` +
    `- 终端没有红色错误信息\n` +
    `- 如果是 Web 应用（网页程序），浏览器打开后能看到界面\n` +
    `- 如果是 CLI（命令行界面）工具，能看到帮助信息或运行结果\n\n` +
    `**如果遇到错误**：\n` +
    `1. 仔细阅读错误信息的最后几行\n` +
    `2. 检查是否遗漏了环境准备步骤\n` +
    `3. 参考下方「常见错误与解决」部分`
  );
}

function generateDirectorySection(project) {
  const lang = (project.language || "").toLowerCase();
  let structure = "";

  if (lang === "python") {
    structure =
      `\`\`\`\n${project.name}/\n` +
      `├── README.md          # 项目说明文档（必读）\n` +
      `├── requirements.txt   # 依赖列表（Python 项目的包清单）\n` +
      `├── main.py / app.py   # 入口文件（程序从这里开始执行）\n` +
      `├── src/ 或 ${project.name.replace(/-/g, "_")}/  # 核心源码目录\n` +
      `├── tests/             # 测试文件（验证代码正确性）\n` +
      `├── examples/          # 示例代码（学习用法的好起点）\n` +
      `├── .env.example       # 环境变量模板（API Key 等配置）\n` +
      `└── docs/              # 补充文档\n\`\`\``;
  } else if (lang === "javascript" || lang === "typescript") {
    structure =
      `\`\`\`\n${project.name}/\n` +
      `├── README.md          # 项目说明文档（必读）\n` +
      `├── package.json       # 依赖和脚本配置（Node.js 项目的核心配置文件）\n` +
      `├── src/               # 核心源码目录\n` +
      `│   ├── index.ts/js    # 入口文件\n` +
      `│   └── ...            # 其他模块\n` +
      `├── tests/             # 测试文件\n` +
      `├── examples/          # 示例代码\n` +
      `├── .env.example       # 环境变量模板\n` +
      `└── dist/              # 编译输出（运行 build 后生成）\n\`\`\``;
  } else {
    structure =
      `\`\`\`\n${project.name}/\n` +
      `├── README.md          # 项目说明文档（必读）\n` +
      `├── src/               # 核心源码目录\n` +
      `├── tests/             # 测试文件\n` +
      `├── examples/          # 示例代码\n` +
      `├── docs/              # 补充文档\n` +
      `└── config/            # 配置文件\n\`\`\``;
  }

  return (
    `## 目录结构说明\n\n` +
    `了解项目目录结构能帮助你快速找到关键文件。以下是典型结构：\n\n` +
    structure + `\n\n` +
    `**新手建议**：先看 README.md，再看入口文件，最后看 examples/ 目录中的示例。`
  );
}

function generateKeyConceptsSection(project) {
  const tags = project.categoryTags || [];
  const concepts = [];

  if (tags.includes("chatbot") || tags.includes("knowledge-base")) {
    concepts.push(
      "- **Prompt（提示词）**：发送给 AI 模型的输入文本，决定 AI 的回答方向",
      "- **API Key（接口密钥）**：访问 AI 服务的身份凭证，类似密码",
      "- **Token（令牌）**：AI 处理文本的基本单位，影响调用成本"
    );
  }
  if (tags.includes("knowledge-base")) {
    concepts.push(
      "- **RAG（检索增强生成）**：先从文档中找到相关内容，再让 AI 基于这些内容回答",
      "- **Embedding（向量嵌入）**：将文本转为数字向量，使计算机能比较文本相似度",
      "- **Vector Database（向量数据库）**：专门存储和检索向量的数据库"
    );
  }
  if (tags.includes("coding-assistant")) {
    concepts.push(
      "- **Agent（智能体）**：能自主规划和执行任务的 AI 程序",
      "- **Tool Calling（工具调用）**：AI 调用外部工具（如读文件、执行命令）来完成任务",
      "- **Context（上下文）**：AI 在一次对话中能「看到」的信息范围"
    );
  }
  if (tags.includes("image-generation")) {
    concepts.push(
      "- **Diffusion Model（扩散模型）**：通过逐步去噪生成图像的 AI 模型",
      "- **Prompt（提示词）**：描述你想生成什么图像的文字说明",
      "- **Checkpoint（检查点）**：模型的权重文件，决定生成风格"
    );
  }
  if (tags.includes("automation") || tags.includes("browser-tool")) {
    concepts.push(
      "- **自动化（Automation）**：让程序代替人执行重复性操作",
      "- **DOM（文档对象模型）**：浏览器中网页的结构化表示",
      "- **Headless Browser（无头浏览器）**：没有界面的浏览器，用于自动化操作网页"
    );
  }
  if (tags.includes("cli-tool") || tags.includes("api-wrapper")) {
    concepts.push(
      "- **CLI（命令行界面）**：通过文本命令操作程序的方式",
      "- **API（应用程序接口）**：程序之间通信的约定和方法",
      "- **JSON（数据交换格式）**：一种轻量级的数据格式，用于程序间传递信息"
    );
  }

  if (concepts.length < 3) {
    concepts.push(
      "- **Repository（仓库）**：存放项目代码的地方，通常在 GitHub 上",
      "- **Dependency（依赖）**：项目运行所需的其他软件包",
      "- **Environment Variable（环境变量）**：存储配置信息（如密钥）的安全方式",
      "- **README**：项目的说明书，包含安装和使用指南",
      "- **CLI（命令行界面）**：通过文本命令操作程序的方式"
    );
  }

  return `## 核心概念\n\n以下是理解和使用该项目需要了解的关键概念：\n\n${concepts.join("\n")}`;
}

function generateFirstModSection(project) {
  const lang = (project.language || "").toLowerCase();
  let suggestion = "";

  if (lang === "python") {
    suggestion =
      `**建议首次修改**：\n\n` +
      `1. 找到项目的配置文件或主入口文件\n` +
      `2. 尝试修改一个输出文本（如欢迎语、提示词模板）\n` +
      `3. 保存后重新运行，观察变化\n\n` +
      `**具体例子**：如果项目有 prompt（提示词），试着改几个字看 AI 回答的变化。`;
  } else if (lang === "javascript" || lang === "typescript") {
    suggestion =
      `**建议首次修改**：\n\n` +
      `1. 找到页面文本或配置常量\n` +
      `2. 修改一段显示文本或默认参数\n` +
      `3. 保存后刷新页面或重启服务，观察变化\n\n` +
      `**具体例子**：修改页面标题、按钮文字、或 API 请求的参数。`;
  } else {
    suggestion =
      `**建议首次修改**：\n\n` +
      `1. 阅读入口文件，找到配置或输出相关的代码\n` +
      `2. 修改一个字符串常量或配置项\n` +
      `3. 重新编译/运行，验证修改生效\n\n` +
      `**具体例子**：改一个日志输出、调整一个数值参数、或添加一行注释。`;
  }

  return (
    `## 第一次修改建议\n\n` +
    `目标不是一步做出完美功能，而是建立「修改 → 运行 → 看到效果」的信心循环。\n\n` +
    suggestion + `\n\n` +
    `**修改原则**：\n` +
    `- 一次只改一个地方\n` +
    `- 改之前先备份（或用 Git 提交当前版本）\n` +
    `- 改完立即运行验证`
  );
}

function generateCommonErrorsSection(project) {
  const lang = (project.language || "").toLowerCase();
  const errors = [];

  if (lang === "python") {
    errors.push(
      {
        errorMessage: "ModuleNotFoundError: No module named 'xxx'",
        cause: "缺少项目依赖包。可能是没有执行 pip install，或者虚拟环境（Virtual Environment）没有激活。",
        fix: "执行 `pip install -r requirements.txt`，并确保已激活虚拟环境（命令行前有 (venv) 标记）。",
      },
      {
        errorMessage: "PermissionError: [Errno 13] Permission denied",
        cause: "当前用户没有文件或目录的访问权限，常见于 Linux/macOS 系统。",
        fix: "使用 `chmod +x 文件名` 添加执行权限，或用 `sudo` 提升权限（谨慎使用）。",
      },
      {
        errorMessage: "ERROR: pip's dependency resolver does not currently support...",
        cause: "pip 版本冲突（Dependency Conflict），多个包要求不同版本的同一依赖。",
        fix: "尝试 `pip install --upgrade pip` 更新 pip，或创建全新虚拟环境重新安装。",
      },
      {
        errorMessage: "KeyError: 'API_KEY' 或 'OPENAI_API_KEY'",
        cause: "缺少 API 密钥配置。项目需要调用外部 AI 服务，但没有找到对应的密钥。",
        fix: "复制 `.env.example` 为 `.env`，填入你的 API Key。获取方式参见对应平台官方文档。",
      },
      {
        errorMessage: "OSError: [Errno 48] Address already in use",
        cause: "端口被占用（Port Conflict），另一个程序正在使用相同的网络端口。",
        fix: "关闭占用端口的程序，或在启动命令中指定其他端口（如 `--port 8001`）。",
      },
      {
        errorMessage: "SyntaxError: invalid syntax",
        cause: "Python 版本不兼容，项目可能需要 Python 3.8+ 而你使用了更旧的版本。",
        fix: "执行 `python --version` 检查版本，如低于要求请升级 Python。",
      }
    );
  } else if (lang === "javascript" || lang === "typescript") {
    errors.push(
      {
        errorMessage: "Error: Cannot find module 'xxx'",
        cause: "依赖未安装或 node_modules 损坏。",
        fix: "删除 node_modules 文件夹后重新执行 `npm install`。",
      },
      {
        errorMessage: "TypeError: Cannot read properties of undefined",
        cause: "代码试图访问一个不存在的对象属性，可能是配置文件缺少某个字段。",
        fix: "检查 .env 文件和配置文件是否完整，对照 .env.example 补全缺失项。",
      },
      {
        errorMessage: "EACCES: permission denied, access '/usr/local/lib/node_modules'",
        cause: "npm 全局安装时权限不足（常见于 macOS/Linux）。",
        fix: "使用 `npx` 代替全局安装，或配置 npm 前缀目录：`npm config set prefix ~/.npm-global`。",
      },
      {
        errorMessage: "Error: ENOENT: no such file or directory, open '.env'",
        cause: "项目需要 .env 配置文件但该文件不存在。",
        fix: "执行 `cp .env.example .env`，然后编辑 .env 填入必要的配置值。",
      },
      {
        errorMessage: "SyntaxError: Unexpected token '<' 或 Build failed",
        cause: "构建（Build）失败，可能是 Node.js 版本不兼容或依赖版本冲突。",
        fix: "检查 package.json 中 engines 字段要求的 Node 版本，使用 nvm（Node 版本管理器）切换到正确版本。",
      },
      {
        errorMessage: "FATAL ERROR: Reached heap limit Allocation failed",
        cause: "内存不足，项目的构建过程需要更多内存。",
        fix: "使用 `export NODE_OPTIONS=\"--max-old-space-size=4096\"` 增加 Node.js 可用内存。",
      }
    );
  } else if (lang === "go") {
    errors.push(
      {
        errorMessage: "go: module not found",
        cause: "Go 模块依赖（Module）未下载。",
        fix: "执行 `go mod download` 或 `go mod tidy` 下载缺失的依赖。",
      },
      {
        errorMessage: "cannot find package",
        cause: "Go 工作区配置不正确，或 GOPATH 设置有问题。",
        fix: "确认项目根目录有 go.mod 文件，使用 `go mod tidy` 整理依赖。",
      },
      {
        errorMessage: "permission denied",
        cause: "编译或运行时权限不足。",
        fix: "使用 `chmod +x` 或以适当权限运行命令。",
      },
      {
        errorMessage: "bind: address already in use",
        cause: "端口被其他程序占用。",
        fix: "使用 `lsof -i :端口号` 查找占用进程，关闭后重试或更换端口。",
      },
      {
        errorMessage: "missing go.sum entry",
        cause: "go.sum 校验文件不完整，依赖版本记录缺失。",
        fix: "执行 `go mod tidy` 重新生成 go.sum 文件。",
      }
    );
  } else {
    errors.push(
      {
        errorMessage: "Command not found / 找不到命令",
        cause: "对应的工具或语言环境未安装，或未添加到系统 PATH（路径）。",
        fix: "按照「环境准备」章节重新安装并验证相关工具。",
      },
      {
        errorMessage: "Permission denied / 权限被拒绝",
        cause: "当前用户对文件或目录没有操作权限。",
        fix: "检查文件权限，必要时使用 chmod 修改或以管理员身份运行。",
      },
      {
        errorMessage: "Port already in use / 端口已被占用",
        cause: "另一个程序正在使用项目需要的网络端口。",
        fix: "关闭占用程序或修改项目配置中的端口号。",
      },
      {
        errorMessage: "Connection refused / 连接被拒绝",
        cause: "项目依赖的服务（数据库、API）未启动或地址配置错误。",
        fix: "确认所有依赖服务已启动，检查配置文件中的地址和端口。",
      },
      {
        errorMessage: "Out of memory / 内存不足",
        cause: "系统可用内存不足以运行该项目。",
        fix: "关闭不需要的程序释放内存，或在配置中减小处理规模。",
      }
    );
  }

  const errorsContent = errors
    .map(
      (err, i) =>
        `### 错误 ${i + 1}\n\n` +
        `**错误信息**：\`${err.errorMessage}\`\n\n` +
        `**原因**：${err.cause}\n\n` +
        `**解决方法**：${err.fix}`
    )
    .join("\n\n");

  return `## 常见错误与解决\n\n以下是新手使用该项目最常遇到的问题：\n\n${errorsContent}`;
}

function generateSevenDayPlanSection(project, userProfile) {
  const timeBudgetMinutes = {
    "30-minutes-per-day": 30,
    "1-hour-per-day": 60,
    "half-day-per-week": 35,
    "full-day-per-week": 70,
    "flexible-long-term": 60,
  }[userProfile.timeBudget] || 60;

  const timeBudgetLabel = {
    "30-minutes-per-day": "每天 30 分钟",
    "1-hour-per-day": "每天 1 小时",
    "half-day-per-week": "每周半天（分摊约每天 35 分钟）",
    "full-day-per-week": "每周一整天（分摊约每天 70 分钟）",
    "flexible-long-term": "弹性时间（约每天 1 小时）",
  }[userProfile.timeBudget] || "每天 1 小时";

  const plan = [
    {
      day: 1,
      title: "环境搭建与项目运行",
      tasks: "安装所需工具，克隆项目，成功运行一次",
      goal: "看到项目正常启动的画面或输出",
    },
    {
      day: 2,
      title: "阅读文档与目录探索",
      tasks: "通读 README，浏览项目目录结构，标记入口文件",
      goal: "能说出项目的主要功能和文件组织方式",
    },
    {
      day: 3,
      title: "理解核心流程",
      tasks: "从入口文件出发，跟踪一次完整的请求/执行流程",
      goal: "能画出简单的数据流向图",
    },
    {
      day: 4,
      title: "第一次修改",
      tasks: "选择一个低风险改动（文本、配置项），修改并验证",
      goal: "成功让修改生效，建立信心",
    },
    {
      day: 5,
      title: "功能扩展尝试",
      tasks: "基于第四天的经验，尝试一个稍大的改动或新功能",
      goal: "新功能可运行，即使不完美",
    },
    {
      day: 6,
      title: "整理与记录",
      tasks: "整理修改内容，写 README 补充或截图记录",
      goal: "能向他人解释你做了什么改动",
    },
    {
      day: 7,
      title: "复盘与展示准备",
      tasks: "回顾整周学习，制作简要演示（截图或短视频）",
      goal: "有一份可展示的学习成果",
    },
  ];

  const planContent = plan
    .map(
      (item) =>
        `### Day ${item.day}：${item.title}（约 ${timeBudgetMinutes} 分钟）\n\n` +
        `**任务**：${item.tasks}\n` +
        `**目标**：${item.goal}`
    )
    .join("\n\n");

  return (
    `## 7 天实践计划\n\n` +
    `根据你的时间预算「${timeBudgetLabel}」制定，每天任务量控制在 ${timeBudgetMinutes} 分钟以内。\n` +
    `每天循序渐进，后一天建立在前一天的基础上。\n\n` +
    planContent
  );
}

function generatePortfolioSection(project) {
  const tags = project.categoryTags || [];
  const ideas = [];

  if (tags.includes("chatbot") || tags.includes("knowledge-base")) {
    ideas.push(
      "- **个人知识助手**：基于该项目，构建一个针对特定领域（如你的专业或兴趣）的问答助手",
      "- **客服 Demo**：改造为简单的自动客服，展示你对 AI 对话系统的理解"
    );
  }
  if (tags.includes("image-generation")) {
    ideas.push(
      "- **风格化图像工具**：利用项目生成特定风格的图像，制作展示页面",
      "- **批量处理工作流**：展示如何用 AI 批量处理图像任务"
    );
  }
  if (tags.includes("coding-assistant") || tags.includes("automation")) {
    ideas.push(
      "- **自动化脚本集合**：基于项目封装几个实用的自动化小工具",
      "- **工作流演示**：录制一段使用 AI 辅助完成实际任务的视频"
    );
  }
  if (tags.includes("web-app") || tags.includes("cli-tool") || tags.includes("api-wrapper")) {
    ideas.push(
      "- **增强版 Demo**：在原项目基础上添加新功能，部署后分享链接",
      "- **使用教程**：撰写一篇从安装到使用的中文教程文章"
    );
  }

  ideas.push(
    "- **学习复盘文章**：记录你的上手过程，包括踩坑和解决思路，发布到技术社区",
    "- **改进贡献**：如果发现文档错误或小 Bug，提交 Pull Request（代码贡献请求）展示协作能力"
  );

  return (
    `## 作品集展示创意\n\n` +
    `完成 7 天实践后，你可以基于该项目制作以下展示内容：\n\n` +
    ideas.join("\n") + `\n\n` +
    `**展示建议**：\n` +
    `- 在 GitHub 上 Fork（复制）该项目，在你的版本上做修改\n` +
    `- 写一段 README 说明你做了哪些改动和为什么\n` +
    `- 截图或录屏展示运行效果`
  );
}

function generateOnboardingDoc(project, userProfile) {
  const timeBudgetLabel = {
    "30-minutes-per-day": "每天 30 分钟",
    "1-hour-per-day": "每天 1 小时",
    "half-day-per-week": "每周半天",
    "full-day-per-week": "每周一整天",
    "flexible-long-term": "弹性时间",
  }[userProfile.timeBudget] || "每天 1 小时";

  return {
    projectName: `${project.owner}/${project.name}`,
    sections: {
      overview: generateOverviewSection(project),
      whyItFitsYou: generateWhyItFitsSection(project, userProfile),
      environmentSetup: generateEnvironmentSetupSection(project),
      stepByStepInstallation: generateInstallationSection(project),
      firstRunGuide: generateFirstRunSection(project),
      directoryStructure: generateDirectorySection(project),
      keyConcepts: generateKeyConceptsSection(project),
      firstModification: generateFirstModSection(project),
      commonErrors: generateCommonErrorsSection(project),
      sevenDayPlan: generateSevenDayPlanSection(project, userProfile),
      portfolioIdeas: generatePortfolioSection(project),
    },
    generatedAt: new Date().toISOString(),
    userTimeBudget: timeBudgetLabel,
  };
}
// @AI_GENERATED: end

// @AI_GENERATED
function exportOnboardingDocAsMarkdown(doc) {
  const sections = doc.sections;
  const parts = [
    `# ${doc.projectName} 入门指南\n`,
    `> 生成时间：${new Date(doc.generatedAt).toLocaleString("zh-CN")}\n> 时间预算：${doc.userTimeBudget}\n`,
    sections.overview,
    sections.whyItFitsYou,
    sections.environmentSetup,
    sections.stepByStepInstallation,
    sections.firstRunGuide,
    sections.directoryStructure,
    sections.keyConcepts,
    sections.firstModification,
    sections.commonErrors,
    sections.sevenDayPlan,
    sections.portfolioIdeas,
  ];
  return parts.join("\n\n---\n\n");
}
// @AI_GENERATED: end

// @AI_GENERATED
async function copyOnboardingDocToClipboard(doc) {
  const markdown = exportOnboardingDocAsMarkdown(doc);
  try {
    await navigator.clipboard.writeText(markdown);
    return true;
  } catch {
    // Fallback for older browsers
    try {
      const textarea = document.createElement("textarea");
      textarea.value = markdown;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}
// @AI_GENERATED: end

// @AI_GENERATED: Beginner Recommender UI Integration (Task 7.3)
function initBeginnerRecommenderUI() {
  const container = document.querySelector("#beginnerWizardContainer");
  if (!container) return;

  // Render first step or restore from session
  const step = beginnerQuestionnaireState.currentStep;
  container.innerHTML = renderBeginnerQuestionnaireStep(step);

  // Show data timestamp if available
  const timestampEl = document.querySelector("#beginnerDataTimestamp");
  if (timestampEl && beginnerProjects.length > 0) {
    timestampEl.textContent = `项目数据包含 ${beginnerProjects.length} 个新手友好项目`;
  }
}

function renderBeginnerResults(results) {
  const container = document.querySelector("#beginnerRecommendationList");
  const emptyEl = document.querySelector("#beginnerEmptyReco");
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `<p class="beginner-explanation">暂无匹配项目，请调整问卷答案后重试。</p>`;
    return;
  }

  if (emptyEl) emptyEl.classList.add("hidden");

  container.innerHTML = results.map(item => `
    <article class="beginner-match-card" data-beginner-project="${item.project.id}">
      <div class="card-top">
        <div>
          <h3>${item.project.owner}/${item.project.name}</h3>
          <p>${item.project.descriptionZh || item.project.description}</p>
        </div>
        <span class="beginner-match-score">匹配 ${item.total}%</span>
      </div>
      <div class="metric-row">
        <span class="metric hot">难度 ${item.project.setupComplexity === "low" ? "入门" : item.project.setupComplexity === "medium" ? "适中" : "较高"}</span>
        <span class="metric">${item.project.language}</span>
        <span class="metric up">约 ${item.project.estimatedFirstRunMinutes} 分钟上手</span>
      </div>
      <div class="beginner-expand-panel" id="whyFit-${item.project.id}" style="display:none;">
        <div class="why-fit-content">${item.reason.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</div>
      </div>
      <div class="action-row">
        <button class="small-button" data-beginner-action="why-fit" data-project-id="${item.project.id}">为什么适合我</button>
        <button class="small-button" data-beginner-action="generate-doc" data-project-id="${item.project.id}">生成入门指南</button>
        <button class="small-button" data-beginner-action="dismiss" data-project-id="${item.project.id}">不适合我</button>
      </div>
    </article>
  `).join("");

  // Show data generation timestamp
  const tsEl = document.querySelector("#beginnerDataTimestamp");
  if (tsEl) {
    tsEl.textContent = `数据生成时间：${formatDateTime(new Date().toISOString())} · 包含 ${beginnerProjects.length} 个项目`;
  }
}

// @AI_GENERATED
function renderOnboardingDocHtml(doc, project) {
  const difficultyLabel = project.setupComplexity === "low" ? "入门" : project.setupComplexity === "medium" ? "适中" : "较高";
  const sections = doc.sections;

  // Convert markdown-like section content to HTML
  function md2html(text) {
    if (!text) return "";
    return text
      .replace(/^### (.+)$/gm, '<h4 class="onboard-h4">$1</h4>')
      .replace(/^## (.+)$/gm, '<h3 class="onboard-h3">$1</h3>')
      .replace(/^> (.+)$/gm, '<blockquote class="onboard-quote">$1</blockquote>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code class="onboard-code">$1</code>')
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="onboard-pre"><code>$2</code></pre>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="onboard-list">$&</ul>')
      .replace(/\n\n/g, '</p><p class="onboard-p">')
      .replace(/\n/g, '<br>')
      ;
  }

  const sectionData = [
    { icon: "📋", title: "项目概览", content: sections.overview },
    { icon: "🎯", title: "为什么适合你", content: sections.whyItFitsYou },
    { icon: "⚙️", title: "环境准备", content: sections.environmentSetup },
    { icon: "📦", title: "一步步安装", content: sections.stepByStepInstallation },
    { icon: "🚀", title: "第一次运行", content: sections.firstRunGuide },
    { icon: "📁", title: "目录结构", content: sections.directoryStructure },
    { icon: "💡", title: "核心概念", content: sections.keyConcepts },
    { icon: "✏️", title: "第一次修改", content: sections.firstModification },
    { icon: "🐛", title: "常见错误与解决", content: sections.commonErrors },
    { icon: "📅", title: "7 天实践计划", content: sections.sevenDayPlan },
    { icon: "🏆", title: "作品集展示", content: sections.portfolioIdeas },
  ];

  const navHtml = sectionData.map((s, i) => 
    `<a class="onboard-nav-item" href="#onboard-section-${i}">${s.icon} ${s.title}</a>`
  ).join("");

  const sectionsHtml = sectionData.map((s, i) => `
    <section class="onboard-section" id="onboard-section-${i}">
      <div class="onboard-section-header">
        <span class="onboard-section-icon">${s.icon}</span>
        <span class="onboard-section-num">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="onboard-section-body">
        <p class="onboard-p">${md2html(s.content)}</p>
      </div>
    </section>
  `).join("");

  return `
    <article class="onboard-doc">
      <header class="onboard-header">
        <div class="onboard-header-meta">
          <span class="metric hot">难度 ${difficultyLabel}</span>
          <span class="metric">${project.language}</span>
          <span class="metric up">约 ${project.estimatedFirstRunMinutes || 45} 分钟上手</span>
          <span class="metric">时间预算：${doc.userTimeBudget}</span>
        </div>
        <p class="onboard-header-desc">${project.descriptionZh || project.description}</p>
      </header>
      <nav class="onboard-nav">${navHtml}</nav>
      <div class="onboard-sections">${sectionsHtml}</div>
    </article>
  `;
}

function openBeginnerDocDrawer(project, userProfile) {
  const doc = generateOnboardingDoc(project, userProfile);
  const htmlContent = renderOnboardingDocHtml(doc, project);

  openDrawer(
    "入门指南",
    `${project.owner}/${project.name}`,
    htmlContent,
    `
      <button class="primary-button" data-drawer-action="copy-beginner-doc">复制 Markdown</button>
      <button class="secondary-button" data-drawer-action="open-github" data-url="${project.url || `https://github.com/${project.owner}/${project.name}`}">打开 GitHub</button>
    `
  );

  window._currentBeginnerDoc = doc;
}
// @AI_GENERATED: end

async function initApp() {
  await loadSnapshotData();
  renderTrendFilters();
  renderRepos();
  renderNews();
  updateStep();
  initHeroCanvas();
  initBeginnerQuestionnaire();
  // @AI_GENERATED
  initBeginnerRecommenderUI();
  renderFavorites();
  renderReadLater();
  // @AI_GENERATED: end
}

initApp();
