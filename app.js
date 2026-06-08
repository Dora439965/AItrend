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

function getSortedRepos() {
  const sort = trendSort.value;
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

  repoList.innerHTML = items
    .map(
      (repo, index) => `
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
            <span class="metric ${activeSort === "hot" ? "metric-hot-active" : ""}">Hot ${repo.hot}</span>
            <span class="metric ${activeSort === "stars" ? "metric-stars-active" : ""}">+${repo.starGrowth} stars</span>
            <span class="metric ${activeSort === "forks" ? "metric-forks-active" : ""}">+${repo.forkGrowth} forks</span>
            <span class="metric ${activeSort === "discussion" ? "metric-discussion-active" : ""}">讨论度 ${repo.discussion}</span>
            <span class="metric">${repo.language}</span>
          </div>
          <div class="tag-row">${repo.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="action-row">
            <button class="small-button" data-action="doc" data-repo="${repo.id}">生成上手建议</button>
            <button class="small-button" data-action="fit" data-repo="${repo.id}">适合我吗</button>
            <button class="small-button" data-action="save">收藏</button>
          </div>
        </article>
      `
    )
    .join("");
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
            <button class="small-button" data-news-action="source">打开原文</button>
            <button class="small-button" data-news-action="related" data-repo="${item.relatedRepo || ""}">相关项目</button>
            <button class="small-button" data-news-action="save">稍后阅读</button>
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
      <button class="primary-button" data-drawer-action="related" data-repo="${item.relatedRepo}">查看相关项目</button>
      <button class="secondary-button" data-drawer-action="source">打开原文</button>
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

function updateStep() {
  document.querySelectorAll(".wizard-step").forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.step) === currentStep);
  });
  document.querySelector("#stepText").textContent = `步骤 ${currentStep + 1} / 5`;
  document.querySelector("#progressBar").style.width = `${(currentStep + 1) * 20}%`;
  document.querySelector("#prevStep").disabled = currentStep === 0;
  document.querySelector("#nextStep").textContent = currentStep === 4 ? "生成推荐" : "下一步";
}

function generateRecommendations() {
  generatedRecommendations = [repos[1], repos[4], repos[0]];
  document.querySelector("#emptyReco").classList.add("hidden");
  document.querySelector("#recommendationList").innerHTML = generatedRecommendations
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
    if (action === "save") showToast("已收藏到本次会话");
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
    if (action === "source") showToast("Demo 中使用模拟来源链接");
    if (action === "save") showToast("已加入稍后阅读");
    return;
  }

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
    if (action === "source") showToast("Demo 中使用模拟来源链接");
  }
});

document.querySelectorAll(".segmented").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    group.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (group.dataset.group === "trend-range") trendRange = button.dataset.value;
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
document.querySelector("#prevStep").addEventListener("click", () => {
  currentStep = Math.max(0, currentStep - 1);
  updateStep();
});
document.querySelector("#nextStep").addEventListener("click", () => {
  if (currentStep < 4) {
    currentStep += 1;
    updateStep();
  } else {
    generateRecommendations();
  }
});
document.querySelector("#resetProfile").addEventListener("click", () => {
  currentStep = 0;
  updateStep();
  document.querySelector("#recommendationList").innerHTML = "";
  document.querySelector("#emptyReco").classList.remove("hidden");
  showToast("画像已重置");
});

async function initApp() {
  await loadSnapshotData();
  renderTrendFilters();
  renderRepos();
  renderNews();
  updateStep();
  initHeroCanvas();
}

initApp();
