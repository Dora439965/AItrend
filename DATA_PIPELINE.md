# 数据采集与评分模型

## 运行方式

```bash
npm run update:data
```

也可以直接运行：

```bash
node scripts/update-data.mjs
```

建议配置 GitHub token，避免未认证 API 的低频率限制。脚本按以下顺序读取 token：

1. `GITHUB_TOKEN`
2. `GH_TOKEN`
3. 本机 GitHub CLI：`gh auth token`

如果已经通过 `gh auth login` 登录过 GitHub CLI，不需要额外配置环境变量。

```bash
GITHUB_TOKEN=your_token npm run update:data
```

不要把 token 写入仓库文件或提交到 Git。

## 输出文件

脚本会写入：

- `data/current.json`：前端默认读取的最新数据。
- `data/snapshots/YYYY-MM-DD.json`：每日快照，用于后续计算 stars/forks 增长。

如果 GitHub 和 RSS 都抓取失败，脚本会停止并避免覆盖已有快照。

## 中文摘要

脚本会为 GitHub 项目简介和新闻摘要写入中文字段：

- `descriptionZh`
- `summaryZh`

当前版本使用本地规则进行基础中文化和术语替换，不依赖外部翻译 API。页面会优先展示中文摘要，并在详情中保留英文原文。后续如果接入 LLM 翻译服务，可以直接替换这两个字段的生成逻辑。

## GitHub 项目采集

当前按多个 AI 相关 topic 分批查询 GitHub Search API，再按 repository id 去重。

综合热度采用增长优先模型，主要目的是发现最近正在变热的新项目，而不是按历史总量排行。

当前权重：

- 45% stars 增长
- 25% forks 增长
- 20% 讨论度增长代理值，当前用 open issues 增长 + forks 增长的少量代理
- 5% stars/forks 总量规模
- 5% 最近活跃度或新项目冷启动信号

使用的原始信号包括：

- stars 相对上一快照增长
- forks 相对上一快照增长
- open issues 增长
- 最近 push 时间
- created 时间，用于新项目冷启动

热度分 `hot` 范围为 1-100。

第一份快照没有历史增长数据，因此只用少量总量信号和新项目活跃度做冷启动。第二份快照开始会优先基于上一天的 `data/snapshots/YYYY-MM-DD.json` 计算 stars/forks/讨论度增长。同一天内多次刷新不会互相覆盖增长基准，避免刚刷新后增长全部归零。

热榜默认过滤掉没有 stars/forks/讨论度增长的老项目。若增长项目不足 10 个，只补充最近 180 天创建、最近 7 天仍活跃的项目，避免 TensorFlow、PyTorch 这类历史总量很大的老项目因为总量优势进入“今日热榜”。

## 新闻采集

当前通过 RSS/XML 抓取新闻源。数据源采用“官方 RSS + Google News RSS 查询”的混合策略：

- 官方 RSS：优先用于 OpenAI、Google、Microsoft 等有稳定 feed 的来源。
- Google News RSS：作为主要兜底来源，按公司和 AI 主题查询过去 7 天新闻。

随后进行：

- 标题归一化去重
- 公司优先级评分
- 主题识别
- 官方来源加权
- 发布时间新鲜度评分

新闻热度 `heat` 范围为 1-100。

## 当前接入的新闻源

- OpenAI RSS
- Google AI RSS
- Microsoft AI RSS
- Google News RSS：OpenAI、Anthropic、Google DeepMind、Microsoft、Meta、NVIDIA、Mistral、Perplexity、xAI、AI 开源/开发者工具等查询

如果某个 RSS 源返回 404 或临时不可用，脚本会跳过该源并继续使用其它来源。若当次 GitHub 或新闻其中一类数据源完全失败，会沿用上一份快照中的对应数据，避免把页面覆盖成空状态。
