# AI Trend & Coding Discovery — 项目说明文件

## 一、项目概述

AI Trend & Coding Discovery 是一个 AI 趋势追踪与个性化推荐平台，每日自动采集 GitHub 热门 AI 开源项目和行业新闻动态，提供多维度排序筛选，并根据用户画像智能匹配适合的开源项目，生成个性化入门指南。

**项目地址：** https://github.com/Dora439965/AItrend  
**在线访问：** https://Dora439965.github.io/AItrend/  
**技术栈：** 纯前端（HTML/CSS/JavaScript） + Node.js 数据采集脚本 + GitHub Actions 自动化  

---

## 二、核心功能模块

### 2.1 AI 热榜模块

- 每日展示近期最火热的 GitHub AI 开源项目（最多 40 个）
- 支持 **综合热度 / Stars 增长 / Forks 增长 / 讨论度** 四种排序方式
- 支持 **今日 / 近 7 天** 时间维度切换
- 支持 **9 类标签筛选**：全部、Agent、RAG、Coding、MCP、Image、Infra、Tool、Model
- 每个项目展示中文简介（百度翻译 API 自动翻译）、增长数据、标签分类
- 提供"查看详情"、"生成上手建议"、"适合我吗"、"收藏"等交互功能

### 2.2 AI 新闻模块

- 每日展示近 7 天内 AI 行业重要新闻动态（约 20 条）
- 支持按 **公司**（OpenAI、Anthropic、Google、Meta、Microsoft 等）筛选
- 支持按 **主题**（模型发布、开发者工具、开源、产品发布、政策与安全）筛选
- 新闻标题自动翻译为中文
- 提供"查看详情"、"打开原文"、"稍后阅读"等功能

### 2.3 新手推荐模块

- 通过 **5 步用户画像问卷** 收集用户背景、目标、兴趣方向、时间预算、环境偏好
- 每一步支持"其他"选项并允许用户手动输入自定义需求
- 基于匹配算法从 50+ 项目池中推荐 TOP 3-5 最适合的项目
- 生成个性化匹配报告（匹配度百分比 + 原因分析）
- 生成详细入门指南（环境准备 → 首次运行 → 7 天实践计划）

### 2.4 热榜 ↔ 新手推荐联动

- 热榜中点击"适合我吗"按钮 → 跳转至新手推荐模块
- 用户完成画像问卷后 → 生成该项目的个性化匹配报告
- 匹配报告中可直接"生成完整上手文档"

---

## 三、数据采集与处理管道

### 3.1 数据来源

#### 3.1.1 热榜项目（GitHub Search API）

调用 `https://api.github.com/search/repositories`，采用 4 种搜索策略：

| 策略 | 搜索条件 | 排序方式 | 目的 |
|------|---------|---------|------|
| 头部经典 | `topic:{keyword} pushed:>30天前 stars:>500` | stars 降序 | 保留行业标杆项目 |
| 近期活跃 | `topic:{keyword} pushed:>7天内 stars:>100` | updated 排序 | 发现近期有变化的项目 |
| 新星发现 | `topic:{keyword} created:>90天内 stars:>50` | stars 降序 | 找到近 3 个月新出现的项目 |
| 本周新增 | `topic:ai/llm/ai-agent created:>7天内 stars:>10~20` | stars 降序 | 发现本周刚冒出来的项目 |

**覆盖的 Topic 关键词（11 个）：**
- `artificial-intelligence`
- `llm`
- `ai-agent`
- `rag`
- `mcp`
- `machine-learning`
- `generative-ai`
- `openai`
- `claude`
- `cursor`
- `coding-agent`

共约 35 组搜索请求，去重后得到 200-300 个候选项目。

#### 3.1.2 AI 新闻（RSS 订阅）

**官方博客 RSS（3 个）：**

| 来源 | URL |
|------|-----|
| OpenAI 官方新闻 | `https://openai.com/news/rss.xml` |
| Google AI 博客 | `https://blog.google/technology/ai/rss/` |
| Microsoft AI 博客 | `https://blogs.microsoft.com/ai/feed/` |

**Google News RSS 搜索（11 组）：**

| 搜索关键词 | 对应公司/方向 |
|-----------|-------------|
| `OpenAI AI OR ChatGPT when:7d` | OpenAI |
| `Anthropic Claude AI when:7d` | Anthropic |
| `Google DeepMind Gemini AI when:7d` | Google |
| `Microsoft AI Copilot OpenAI when:7d` | Microsoft |
| `Meta AI Llama open source when:7d` | Meta |
| `NVIDIA AI model GPU when:7d` | NVIDIA |
| `Mistral AI model when:7d` | Mistral |
| `Perplexity AI when:7d` | Perplexity |
| `xAI Grok model when:7d` | xAI |
| `AI model developer tools open source GitHub when:7d` | 开发者工具 |

所有 Google News 搜索限中文界面（`hl=zh-CN&gl=US&ceid=US:zh-Hans`），取近 7 天数据。

#### 3.1.3 新手推荐项目（GitHub Search API）

16 组面向新手友好的搜索查询：

| 搜索条件示例 | 方向 |
|------------|------|
| `topic:chatbot language:python stars:>50` | 聊天机器人 |
| `topic:rag topic:tutorial stars:>50` | RAG 教程 |
| `topic:ai-assistant topic:beginner stars:>50` | AI 助手入门 |
| `topic:stable-diffusion topic:webui stars:>100` | 图像生成 |
| `topic:automation topic:ai language:python stars:>50` | 自动化 |
| `topic:browser-extension topic:ai stars:>50` | 浏览器扩展 |
| `topic:cli topic:ai language:python stars:>50` | 命令行工具 |
| `topic:nextjs topic:ai stars:>100` | Web 应用 |
| `topic:openai topic:wrapper stars:>50` | API 封装 |
| `topic:tutorial topic:machine-learning stars:>100` | ML 教程 |
| `topic:langchain topic:example stars:>50` | LangChain 示例 |
| `topic:streamlit topic:ai stars:>50` | Streamlit 应用 |
| `topic:fastapi topic:ai stars:>50` | FastAPI 应用 |
| `topic:mcp topic:tool stars:>30` | MCP 工具 |
| `topic:agent topic:starter stars:>50` | Agent 入门 |
| `topic:huggingface topic:demo stars:>50` | HuggingFace 演示 |

每组取 30 条，按 stars 排序。

#### 3.1.4 中文翻译（百度翻译 API）

| 配置项 | 值 |
|--------|---|
| 接口地址 | `https://fanyi-api.baidu.com/api/trans/vip/translate` |
| 翻译方向 | 英文 → 中文 |
| 频率限制 | 每次请求间隔 1.1 秒（免费标准版限 1 次/秒） |
| 翻译对象 | 热榜项目 description + 新闻 title |
| 存储字段 | `descriptionZh`（项目）、`summaryZh`（新闻） |
| 认证方式 | APP ID + MD5 签名 |

---

### 3.2 数据处理流程

```
1. 并行请求所有数据源（GitHub API × 35 + RSS × 14 + 新手项目 × 16）
       ↓
2. 去重（按 GitHub repo ID 去重）
       ↓
3. 读取前一天快照，计算增长差值
   - starGrowth = 今天 stars - 昨天 stars
   - forkGrowth = 今天 forks - 昨天 forks
   - discussion = openIssues 变化量（代理讨论活跃度）
       ↓
4. 过滤零增长项目（starGrowth > 0 || forkGrowth > 0）
   - 新项目例外：创建 ≤ 45 天 且 stars ≥ 200 可免增长进入
       ↓
5. 计算综合热度分数（0-100 分），排序取 top 40
       ↓
6. 新闻去重（按标题相似度）、评分、排序取 top 20
       ↓
7. 新手项目评分（beginnerScore），过滤 < 40 分，取 top 50
       ↓
8. 调用百度翻译 API 批量翻译英文描述和标题
       ↓
9. 写入 data/snapshots/YYYY-MM-DD.json + data/current.json
       ↓
10. Git commit + push（通过 GitHub Actions 自动完成）
```

---

## 四、评分算法

### 4.1 热榜综合热度评分（Hot Score）

```
hot = starGrowthScore × 35%
    + forkGrowthScore × 20%
    + discussionGrowthScore × 15%
    + relativeGrowthRate × 15%
    + max(recencyScore, newProjectScore) × 10%
    + totalScaleScore × 5%
```

| 维度 | 权重 | 计算方式 |
|------|------|---------|
| Stars 增长 | 35% | 归一化（当前增长 / 所有候选中最大增长） |
| Forks 增长 | 20% | 归一化 |
| 讨论度增长 | 15% | 归一化（openIssues 变化量） |
| 相对增长率 | 15% | `min(1, starGrowth / totalStars × 10)` — 小项目增长快能获得更高分 |
| 新鲜度/新项目 | 10% | 近期有 push = 活跃；创建 ≤ 90 天 = 新项目加分 |
| 总量（stars+forks） | 5% | 对数归一化，权重极小 |

**设计理念：** Stars 总量只占 5%，确保新兴小项目（增长率高）能与头部大项目竞争上榜。

### 4.2 新闻热度评分（News Heat）

```
heat = companyScore + topicScore + officialScore + recencyScore
```

| 维度 | 规则 |
|------|------|
| 公司权重 | OpenAI/Anthropic/Google 最高，Meta/Microsoft 次之，其他较低 |
| 主题权重 | 模型发布/开发者工具/开源 > 其他主题 |
| 来源加分 | 官方博客 > Google News 聚合 |
| 新鲜度 | 发布时间越近分数越高，按小时衰减 |

### 4.3 新手推荐匹配评分（Match Score）

```
matchScore = setupComplexityMatch × 30%
           + interestAlignment × 25%
           + timeBudgetFeasibility × 20%
           + prerequisiteSkillMatch × 15%
           + goalAlignment × 10%
```

| 维度 | 权重 | 说明 |
|------|------|------|
| 环境兼容性 | 30% | 用户环境偏好 vs 项目 setup 复杂度 |
| 兴趣对齐 | 25% | 用户兴趣方向 vs 项目分类标签 |
| 时间可行性 | 20% | 用户时间预算 vs 项目预估上手时间 |
| 技能匹配 | 15% | 用户背景推断技能 vs 项目前置要求 |
| 目标对齐 | 10% | 用户目标 vs 项目适合的目标类型 |

---

## 五、近 7 天热榜聚合逻辑

当用户切换到"近 7 天"时间维度时：

1. 前端异步加载 `data/snapshots/` 下最近 7 天的快照文件
2. 计算 7 天累计增长：
   - `starGrowth7d = 最新快照 stars - 7 天前快照 stars`
   - `forkGrowth7d = 最新快照 forks - 7 天前快照 forks`
   - `discussion7d = 7 天内每日 discussion 增量累加`
3. 用与"今日"完全一致的权重公式重新计算 `hot7d`
4. 按 `hot7d` 排序渲染列表

---

## 六、快照数据结构

每日生成的 `data/snapshots/YYYY-MM-DD.json` 文件结构：

```json
{
  "generatedAt": "2026-06-12T01:00:00.000Z",
  "date": "2026-06-12",
  "sources": {
    "github": "https://api.github.com/search/repositories",
    "newsFeeds": ["https://openai.com/news/rss.xml", "..."]
  },
  "scoring": {
    "repositories": "35% stars growth, 20% forks growth, 15% discussion, 15% relative growth, 10% recency, 5% scale",
    "news": "company + topic + source + recency"
  },
  "repositories": [
    {
      "id": 1024554267,
      "name": "hermes-agent",
      "owner": "NousResearch",
      "description": "The agent that grows with you",
      "descriptionZh": "与你一起成长的 Agent",
      "url": "https://github.com/NousResearch/hermes-agent",
      "tags": ["Agent"],
      "topics": ["ai", "ai-agent", "llm", "..."],
      "language": "Python",
      "stars": 190000,
      "starGrowth": 1022,
      "forkGrowth": 308,
      "forks": 32500,
      "openIssues": 19800,
      "discussion": 37,
      "discussionTotal": 19800,
      "hot": 100,
      "pushedAt": "2026-06-12T01:00:00Z",
      "createdAt": "2025-07-22T22:22:28Z",
      "reason": "较上一份快照新增 1022 stars、308 forks，讨论度增长 37。",
      "fit": "适合作为趋势观察、源码学习或二次开发候选项目。",
      "difficulty": "进阶",
      "stack": ["Python", "ai", "ai-agent"],
      "architecture": "应用层界面 + Agent 规划循环 + 工具调用适配层。",
      "knowledge": ["Agent 编排", "工具调用", "任务规划"],
      "risk": "真实可运行性需结合 README、依赖版本和 API Key 要求确认。"
    }
  ],
  "news": [
    {
      "id": "google-news-openai-...",
      "title": "OpenAI files for IPO...",
      "url": "https://news.google.com/...",
      "source": "Google News: OpenAI / Reuters",
      "company": "OpenAI",
      "publishedAt": "2026-06-12T03:00:00.000Z",
      "summary": "...",
      "summaryZh": "OpenAI 提交 IPO 申请...",
      "topic": "AI 产品与应用",
      "time": "2026-06-12",
      "heat": 75,
      "importance": "OpenAI 动态，可能影响开发者工具选择和产品路线。",
      "relatedRepo": null
    }
  ],
  "beginnerProjects": [
    {
      "id": 123456,
      "name": "project-name",
      "owner": "owner",
      "url": "https://github.com/owner/project-name",
      "description": "...",
      "descriptionZh": "...",
      "categoryTags": ["chatbot", "learning-project"],
      "language": "Python",
      "stars": 2500,
      "beginnerScore": 78,
      "setupComplexity": "low",
      "prerequisiteSkills": ["basic-terminal", "git-basics"],
      "estimatedFirstRunMinutes": 30,
      "hasChineseDocs": true,
      "hasExamplesFolder": true,
      "lastUpdated": "2026-06-11T..."
    }
  ]
}
```

---

## 七、自动化运维

### 7.1 GitHub Actions 配置

文件路径：`.github/workflows/update-data.yml`

| 配置项 | 值 |
|--------|---|
| 触发条件 | 每天 UTC 01:00（北京时间 09:00）+ 手动触发 |
| 运行环境 | ubuntu-latest + Node.js 20 |
| 环境变量 | `GITHUB_TOKEN`（自动）、`BAIDU_TRANSLATE_APPID`、`BAIDU_TRANSLATE_SECRET` |
| 产出 | 更新 `data/current.json` + `data/snapshots/YYYY-MM-DD.json` |
| 提交方式 | 自动 commit + pull --rebase + push |

### 7.2 GitHub Pages 部署

- 部署源：`main` 分支根目录
- 入口文件：`index.html`
- 无构建步骤，纯静态文件直接 serve

---

## 八、项目文件结构

```
├── index.html                    # 主页面
├── app.js                        # 前端逻辑（渲染、排序、交互、匹配算法）
├── styles.css                    # 样式
├── data/
│   ├── current.json              # 最新数据（页面加载使用）
│   └── snapshots/
│       ├── 2026-06-06.json       # 每日快照（用于历史对比和 7 天聚合）
│       ├── 2026-06-07.json
│       └── ...
├── scripts/
│   ├── update-data.mjs           # 数据采集 + 评分 + 翻译脚本
│   └── serve.mjs                 # 本地开发服务器
├── tests/
│   ├── trend-7day-aggregation.test.mjs
│   ├── match-engine.test.mjs
│   ├── categorize-complexity.test.mjs
│   └── questionnaire-ui.test.mjs
├── .github/workflows/
│   └── update-data.yml           # GitHub Actions 定时任务
├── package.json
└── PROJECT_SPEC.md               # 本文件
```

---

## 九、本地开发

```bash
# 启动本地服务器
npm run dev
# 访问 http://127.0.0.1:4175/

# 手动更新数据（需设置环境变量）
$env:BAIDU_TRANSLATE_APPID="你的APPID"
$env:BAIDU_TRANSLATE_SECRET="你的密钥"
$env:GITHUB_TOKEN="你的GitHub token"
node scripts/update-data.mjs

# 运行测试
node --test "tests/*.test.mjs"
```

---

## 十、技术决策记录

| 决策 | 原因 |
|------|------|
| 纯前端静态站点 | 零服务器成本，GitHub Pages 免费托管 |
| 数据采集放在 CI 而非前端 | 避免 API Key 暴露，利用 GitHub Actions 的独立 IP 避免限流 |
| 多策略搜索而非单一排序 | 解决"头部项目霸榜"问题，让新项目有机会展示 |
| 相对增长率纳入评分 | 让 500 stars 涨 50 的小项目比 18 万 stars 涨 500 的大项目排名更高 |
| 百度翻译而非 Google Translate | 免费额度充足（5 万字符/月），国内访问稳定 |
| 快照式数据存储 | 支持历史对比、7 天聚合、趋势分析 |
| 用户画像存 sessionStorage | 页面刷新不丢失，关闭标签页自动清除 |
