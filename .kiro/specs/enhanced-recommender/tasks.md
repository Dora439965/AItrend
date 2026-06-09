<!-- @AI_GENERATED -->
# Implementation Plan: Enhanced Vibe Coding Recommender

## Overview

本实现计划将增强推荐器分为两个主要阶段：首先扩展数据管道以采集和评分新手友好项目，然后构建客户端问卷、匹配引擎和入门文档生成器。采用增量开发方式，数据管道优先（确保有真实数据可测试），随后是客户端核心逻辑，最后是 UI 集成与交互完善。

## Tasks

- [x] 1. 数据管道：新手项目搜索与评分
  - [x] 1.1 添加 Beginner 搜索查询配置与项目采集函数
    - 在 `scripts/update-data.mjs` 中新增 `BEGINNER_SEARCH_QUERIES` 常量（15+ 查询）
    - 新增 `BEGINNER_CATEGORY_TAGS` 常量
    - 实现 `fetchBeginnerProjects()` 异步函数，执行多查询搜索并去重
    - 实现候选项目过滤：README > 500 chars, stars >= 50, push date within 90 days
    - 遵循现有 `fetchGithubRepositories()` 的 API 调用模式与错误处理
    - _Requirements: 1.1, 1.2_

  - [x] 1.2 实现 Beginner_Score 计算函数
    - 实现 `computeBeginnerScore(project)` 返回 `{ total, breakdown }`
    - 实现各维度评分：readmeQuality(0-25), installInstructions(0-20), dependencySimplicity(0-15), issueResponseRate(0-15), languageAccessibility(0-15), examplesPresence(0-10)
    - 确保 total = sum(breakdown), 值域 [0, 100]
    - _Requirements: 1.3, 7.1_

  - [x] 1.3 实现项目分类与复杂度评估函数
    - 实现 `categorizeProject(project)` 从 topics/description 推断 category tags
    - 实现 `estimateSetupComplexity(project)` 返回 "low"|"medium"|"high"
    - 实现 `extractPrerequisiteSkills(project)` 返回技能列表
    - 确保每个项目至少获得一个有效 category tag
    - _Requirements: 1.5, 1.6, 5.2_

  - [x] 1.4 实现项目池构建与输出集成
    - 实现 `buildBeginnerProjectPool(rawProjects)` 排序取 top-50，过滤 score < 40
    - 确保输出 30-50 个项目，不足时合并上一快照数据
    - 将 `beginnerProjects` 数组写入 `data/current.json` 输出结构
    - 在 `main()` 中并行调用 `fetchBeginnerProjects` 与现有采集逻辑
    - 实现错误降级：API 失败时保留前一快照数据
    - _Requirements: 1.4, 5.1, 5.3, 5.4, 5.5, 7.2_

  - [ ]* 1.5 编写数据管道属性测试
    - **Property 1: Beginner project filter correctness**
    - **Property 2: Beginner_Score bounded and breakdown sum invariant**
    - **Property 3: Project pool output size and ordering**
    - **Property 4: Category tag assignment completeness**
    - **Property 5: Output schema structural completeness**
    - 安装 fast-check 作为 dev dependency
    - 使用 Node.js 内置 test runner (`node --test`)
    - 测试文件位于 `tests/pipeline.properties.test.mjs`
    - **Validates: Requirements 1.2, 1.3, 1.4, 1.5, 1.6, 5.2, 5.3, 5.5, 7.2**

- [x] 2. Checkpoint - 数据管道验证
  - Ensure all tests pass, ask the user if questions arise.
  - 验证 `node scripts/update-data.mjs` 能正确输出含 `beginnerProjects` 的 JSON

- [x] 3. 客户端：问卷组件
  - [x] 3.1 实现问卷状态管理与数据持久化
    - 在 `app.js` 中新增 `questionnaireState` 对象与相关常量
    - 实现 `initQuestionnaire()` 初始化函数
    - 实现 `saveQuestionnaireAnswer(step, value)` 写入 sessionStorage
    - 实现 `restoreQuestionnaireFromSession()` 从 sessionStorage 恢复
    - 实现 `buildUserProfile()` 从问卷答案构建 UserProfile 对象
    - 问卷 5 步：background, goal, interest-direction, time-budget, environment-preference
    - _Requirements: 2.1, 2.8, 6.7_

  - [x] 3.2 实现问卷 UI 渲染与交互
    - 实现 `renderQuestionnaireStep(step)` 渲染当前步骤选项
    - 每步包含正确的选项集（按 Requirements 2.2-2.6 定义）
    - 实现进度指示器显示当前步骤/总步骤
    - 实现选项选择后显示简单解释文案（Req 2.7）
    - 实现前进/后退导航，后退不丢失已选答案
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 6.2_

  - [ ]* 3.3 编写问卷属性测试
    - **Property 6: Questionnaire state preservation on backward navigation**
    - 测试文件位于 `tests/questionnaire.properties.test.mjs`
    - **Validates: Requirements 2.8, 6.7**

- [x] 4. 客户端：匹配引擎
  - [x] 4.1 实现 Match_Engine 核心评分逻辑
    - 实现 `computeMatchScore(userProfile, project)` 返回 `{ total, breakdown, reason }`
    - 实现 setupComplexityMatch 映射逻辑（at-or-below=100, one-above=50, two-above=0）
    - 实现 interestAlignment 计算（exact=100, related=60, none=0）
    - 实现 timeBudgetFeasibility 计算（基于 estimatedFirstRunMinutes）
    - 实现 prerequisiteSkillMatch 计算（基于背景推断已有技能）
    - 实现 goalAlignment 计算（目标到类别映射）
    - 加权求和：setup×0.30 + interest×0.25 + time×0.20 + prereq×0.15 + goal×0.10
    - _Requirements: 3.1, 3.2, 3.3, 7.3_

  - [x] 4.2 实现匹配结果生成与降级逻辑
    - 实现 `runMatchEngine(userProfile, projectPool)` 返回 top 3-5 结果
    - 过滤 matchScore < 40 的项目
    - 实现 `relaxAndRerun()` 当结果 < 3 时放松 setupComplexity 约束
    - 实现 `generateMatchReason(userProfile, project, breakdown)` 生成中文匹配原因
    - 实现已 dismiss 项目排除（从 localStorage 读取）
    - _Requirements: 3.4, 3.5, 3.6, 7.4_

  - [ ]* 4.3 编写匹配引擎属性测试
    - **Property 7: Match score weighted sum invariant**
    - **Property 8: Setup complexity match mapping correctness**
    - **Property 9: Interest alignment monotonicity**
    - **Property 10: Match result set constraints**
    - **Property 11: Match reason is non-empty Chinese without jargon**
    - **Property 15: Dismissal exclusion persistence**
    - 测试文件位于 `tests/matchengine.properties.test.mjs`
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 7.3, 7.4**

- [x] 5. Checkpoint - 匹配引擎验证
  - Ensure all tests pass, ask the user if questions arise.
  - 验证问卷完成后能正确产出匹配结果

- [x] 6. 客户端：入门文档生成器
  - [x] 6.1 实现 Onboarding_Doc 模板生成逻辑
    - 实现 `generateOnboardingDoc(project, userProfile)` 返回完整文档结构
    - 生成 11 个必需 section：overview, whyItFitsYou, environmentSetup, stepByStepInstallation, firstRunGuide, directoryStructure, keyConcepts, firstModification, commonErrors, sevenDayPlan, portfolioIdeas
    - commonErrors 至少 5 条，每条含 errorMessage, cause, fix
    - sevenDayPlan 7 天计划，每天时间不超过用户 timeBudget
    - 全部使用中文，首次出现的技术术语配有解释
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 6.2 实现文档导出与复制功能
    - 实现 `exportOnboardingDocAsMarkdown(doc)` 生成 Markdown 字符串
    - 实现 `copyOnboardingDocToClipboard(doc)` 使用 Clipboard API + fallback
    - _Requirements: 4.7_

  - [ ]* 6.3 编写入门文档属性测试
    - **Property 12: Onboarding document structural completeness**
    - **Property 13: Common errors section minimum count**
    - **Property 14: Seven-day plan time budget adherence**
    - 测试文件位于 `tests/onboarding.properties.test.mjs`
    - **Validates: Requirements 4.1, 4.4, 4.5**

- [x] 7. 前端 UI 集成与交互
  - [x] 7.1 添加推荐器入口与 HTML 结构
    - 在 `index.html` 中添加推荐器 section 容器与导航入口
    - 导航入口标签为 "找到适合你的第一个 AI 项目"，视觉突出
    - 添加问卷容器、结果面板、文档 drawer 的 HTML 骨架
    - _Requirements: 6.1, 6.2_

  - [x] 7.2 添加推荐器样式
    - 在 `styles.css` 中添加问卷步骤样式、进度指示器样式
    - 添加项目卡片样式：名称、描述、匹配分、难度 badge、首次运行时间
    - 添加文档 drawer 样式：右侧滑出面板、section 导航、顶部操作栏
    - 添加 "为什么适合我" 可展开面板样式
    - _Requirements: 6.3, 6.4, 6.5, 6.6_

  - [x] 7.3 集成事件处理与完整交互流程
    - 在 `app.js` 的事件委托中新增推荐器相关事件处理
    - 加载 `beginnerProjects` 数据到全局变量（在 `loadSnapshotData()` 中）
    - 实现推荐结果卡片渲染与 "为什么适合我" 展开逻辑
    - 实现 "生成入门指南" 按钮触发 drawer 面板展示
    - 实现 drawer 顶部固定操作栏（复制全文、导出 Markdown）
    - 实现 "不适合我" dismiss 功能（写入 localStorage）
    - 显示数据生成时间戳
    - _Requirements: 6.3, 6.4, 6.5, 6.6, 7.4, 7.5_

- [x] 8. Final checkpoint - 全功能验证
  - Ensure all tests pass, ask the user if questions arise.
  - 验证完整流程：数据加载 → 问卷 → 匹配 → 文档生成 → 导出

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- 所有新增代码需要 `@AI_GENERATED` 标记
- 数据管道代码在 `scripts/update-data.mjs` 中扩展，遵循现有 ESM 模式
- 客户端代码在 `app.js` 中新增，遵循现有事件委托模式
- 属性测试使用 fast-check 库 + Node.js 内置 test runner
- 测试文件位于 `tests/` 目录
- 文档生成完全基于模板 + 元数据，无需 LLM 调用

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["1.4"] },
    { "id": 3, "tasks": ["1.5", "3.1"] },
    { "id": 4, "tasks": ["3.2", "4.1"] },
    { "id": 5, "tasks": ["3.3", "4.2"] },
    { "id": 6, "tasks": ["4.3", "6.1"] },
    { "id": 7, "tasks": ["6.2", "6.3"] },
    { "id": 8, "tasks": ["7.1"] },
    { "id": 9, "tasks": ["7.2"] },
    { "id": 10, "tasks": ["7.3"] }
  ]
}
```

<!-- @AI_GENERATED: end -->
