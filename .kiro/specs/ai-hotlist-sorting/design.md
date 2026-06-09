<!-- @AI_GENERATED -->
# AI热榜"近7天"排序筛选功能 — 开发计划书

## 一、功能概述

为 AI 热榜模块新增"近7天"时间范围的排序与筛选能力。用户点击"近7天"按钮后，系统加载最近7天内所有快照数据，**聚合计算各项目在7天内的累计增长指标**，然后支持按综合热度、Stars增长、Forks增长、讨论度进行排序——排序算法与现有"今日"维度完全一致。

## 二、现状分析

### 2.1 当前数据结构

- `data/current.json` — 最新一次快照，包含 `repositories` 数组
- `data/snapshots/YYYY-MM-DD.json` — 每日历史快照
- 每个 repo 对象包含关键字段：`hot`, `starGrowth`, `forkGrowth`, `discussion`, `stars`, `forks`

### 2.2 当前 hot 评分算法（update-data.mjs）

```
hot = starGrowthScore × 45
    + forkGrowthScore × 25
    + discussionGrowthScore × 20
    + totalScaleScore × 5       ← stars总量权重极小
    + recency/newProjectScore × 5
```

权重分配：Stars增长 45%，Forks增长 25%，讨论度增长 20%，总量 5%，新鲜度 5%。

### 2.3 当前 Bug

- `trendRange` 变量在点击时被更新，但 `getSortedRepos()` 和 `renderRepos()` 从未使用该变量
- 切换时间范围不触发重新渲染

## 三、技术方案

### 3.1 核心逻辑：7天数据聚合

**方案：前端加载多日快照，聚合计算7天累计增长**

```
7天Stars增长 = 当前快照的 stars - 7天前快照的 stars
7天Forks增长 = 当前快照的 forks - 7天前快照的 forks
7天讨论度   = 7天内每日 discussion 增长的累加
7天Hot     = 用与今日相同的权重公式重新计算
```

### 3.2 数据加载策略

1. 页面初始加载 `current.json`（今日数据），保持现有逻辑不变
2. 用户首次点击"近7天"时，异步加载 `data/snapshots/` 目录下最近7天的快照文件
3. 加载后缓存在内存中，后续切换不重复请求

### 3.3 排序算法（与今日完全一致）

| 排序方式 | 今日字段 | 近7天字段（聚合） |
|---------|---------|----------------|
| 综合热度 | `repo.hot` | `repo.hot7d`（重新计算） |
| Stars增长 | `repo.starGrowth` | `repo.starGrowth7d` |
| Forks增长 | `repo.forkGrowth` | `repo.forkGrowth7d` |
| 讨论度 | `repo.discussion` | `repo.discussion7d` |

**7天综合热度计算公式（与现有一致）：**
```
hot7d = normalize(starGrowth7d) × 45
      + normalize(forkGrowth7d) × 25
      + normalize(discussion7d) × 20
      + totalScaleScore × 5
      + recencyScore × 5
```

### 3.4 前端交互流程

```
用户点击"近7天"
  → 设置 trendRange = "7d"
  → 调用 load7DaySnapshots()（如果尚未加载）
  → 计算 repos7d 聚合数据
  → renderRepos() 使用 repos7d 进行排序和渲染
  → 排序切换也使用 repos7d 数据
  
用户点击"今日"
  → 设置 trendRange = "today"
  → renderRepos() 恢复使用当前 repos 数据
```

### 3.5 快照文件加载方式

由于是静态站点（GitHub Pages），无法列出目录文件，采用**按日期推算文件名**的方式：

```javascript
// 从今天向前推7天，逐个尝试加载
const dates = [];
for (let i = 0; i < 7; i++) {
  const d = new Date(Date.now() - i * DAY_MS);
  dates.push(d.toISOString().slice(0, 10));
}
// 并行 fetch，忽略 404
```

## 四、改动范围

| 文件 | 改动内容 |
|------|---------|
| `app.js` | 1. 新增 `load7DaySnapshots()` 函数<br>2. 新增 `compute7DayAggregation()` 聚合函数<br>3. 修改 `getSortedRepos()` 根据 `trendRange` 切换数据源<br>4. 修改时间范围按钮点击处理，触发 `renderRepos()` |
| `index.html` | 无需改动（按钮已存在） |
| `styles.css` | 可选：为加载中状态添加 loading 提示样式 |

## 五、详细任务拆分

### Task 1：修复时间范围切换不渲染的 Bug
- 在 `segmented` 点击事件中，切换 `trendRange` 后调用 `renderRepos()`
- 预计改动：3 行

### Task 2：实现 `load7DaySnapshots()` 快照加载函数
- 按日期推算最近7天的文件名
- 并行 fetch，处理 404 和网络错误
- 缓存已加载数据到 `snapshotCache` 变量
- 返回加载到的快照列表

### Task 3：实现 `compute7DayAggregation()` 聚合计算函数
- 输入：当前 repos + 7天前的快照 repos
- 输出：repos7d 数组（每个 repo 附加 `starGrowth7d`, `forkGrowth7d`, `discussion7d`, `hot7d`）
- 聚合逻辑：当前值 - 7天前的值
- 热度重算用相同的权重公式

### Task 4：修改 `getSortedRepos()` 支持双数据源
- 当 `trendRange === "7d"` 时，使用 `repos7d` 数据和 `hot7d/starGrowth7d/forkGrowth7d/discussion7d` 字段排序
- 当 `trendRange === "today"` 时，保持现有逻辑

### Task 5：修改 `renderRepos()` 显示对应指标
- 当展示7天数据时，卡片指标显示"7天+XX stars"等文案
- 综合热度显示 `hot7d` 值

### Task 6：加载状态提示
- 首次加载7天数据时显示 loading toast
- 加载完成后显示成功提示

## 六、不做的事情

- ❌ 不实现"近30天"功能（用户明确不需要）
- ❌ 不改变数据采集脚本 `update-data.mjs`
- ❌ 不改变现有 hot 评分算法的权重
- ❌ 不影响新闻模块、问卷推荐等其他模块

## 七、测试验证

1. 切换"今日"→"近7天"→"今日"，列表内容和排序应有明显变化
2. 在"近7天"模式下切换排序方式（综合热度/Stars/Forks/讨论度），排序结果正确
3. 在"近7天"模式下切换标签筛选，正确联动
4. 快照文件不足7天时，使用已有快照正常计算（降级处理）
5. 网络错误时显示 toast 提示并保持当前数据不变

## 八、里程碑

| 阶段 | 内容 | 预计工时 |
|------|------|---------|
| P1 | Task 1（修复 Bug）+ Task 4（切换数据源） | 15 min |
| P2 | Task 2（加载快照）+ Task 3（聚合计算） | 30 min |
| P3 | Task 5（UI 适配）+ Task 6（loading 状态） | 15 min |
| 验证 | 本地测试 + 部署验证 | 10 min |
<!-- @AI_GENERATED: end -->
