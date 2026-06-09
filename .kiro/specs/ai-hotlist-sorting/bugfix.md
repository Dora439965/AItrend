<!-- @AI_GENERATED -->
# Bugfix Requirements Document

## Introduction

AI热榜功能存在排序和时间范围筛选方面的缺陷。当前页面虽然提供了"综合热度/Stars增长/Forks增长/讨论度"排序选项和"今日/近7天/近30天"时间范围切换按钮，但存在以下问题：

1. 切换时间范围（今日/近7天/近30天）时，列表不会重新渲染，`trendRange` 变量虽然被更新，但未被 `getSortedRepos()` 使用
2. 排序切换后的视觉反馈不完善，当前高亮的排序指标（metric）只在渲染时一次性生效，缺少对排序状态变化的即时响应

这导致用户无法按照"近7天最火热GitHub项目"进行查看，也无法通过时间范围+排序方式的组合对数据进行有效筛选。

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN 用户点击"近7天"时间范围按钮 THEN 系统仅更新 `trendRange` 变量并显示 Toast 提示，但不重新渲染项目列表，列表内容保持不变

1.2 WHEN 用户点击"近30天"时间范围按钮 THEN 系统同样仅更新变量，不对列表做任何过滤或排序调整

1.3 WHEN `getSortedRepos()` 执行排序时 THEN 系统完全忽略 `trendRange` 变量，无论用户选择了哪个时间范围，始终返回相同的排序结果

1.4 WHEN 用户切换排序方式（如从"综合热度"切换到"Stars增长"） THEN 系统正确地对列表排序，但缺少对时间范围的联动考虑，未根据所选时间范围过滤数据

### Expected Behavior (Correct)

2.1 WHEN 用户点击"近7天"时间范围按钮 THEN 系统 SHALL 根据近7天的数据对项目列表进行重新排序并渲染，展示近7天内热度最高的项目

2.2 WHEN 用户点击"近30天"时间范围按钮 THEN 系统 SHALL 根据近30天的数据对项目列表进行重新排序并渲染

2.3 WHEN `getSortedRepos()` 执行时 THEN 系统 SHALL 同时考虑当前选中的时间范围（`trendRange`）和排序方式（`trendSort.value`），返回基于对应时间范围的正确排序结果

2.4 WHEN 用户组合使用时间范围和排序方式（如"近7天" + "Stars增长"） THEN 系统 SHALL 展示在该时间范围内按 Stars 增长排序的项目列表

### Unchanged Behavior (Regression Prevention)

3.1 WHEN 用户选择"今日"时间范围且切换不同排序方式（综合热度/Stars增长/Forks增长/讨论度） THEN 系统 SHALL CONTINUE TO 根据对应字段（hot/starGrowth/forkGrowth/discussion）正确排序并渲染列表

3.2 WHEN 用户在标签筛选栏点击某个类型标签（如 Agent、RAG 等） THEN 系统 SHALL CONTINUE TO 按标签过滤项目，且与排序方式和时间范围正确联动

3.3 WHEN 用户点击"查看详情"按钮 THEN 系统 SHALL CONTINUE TO 正常弹出抽屉面板展示项目详细信息

3.4 WHEN 数据从 `data/current.json` 加载成功 THEN 系统 SHALL CONTINUE TO 正确解析 repositories 数组中的 hot、starGrowth、forkGrowth、discussion 字段并用于排序
<!-- @AI_GENERATED: end -->
