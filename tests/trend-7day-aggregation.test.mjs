// @AI_GENERATED: 近7天热榜聚合逻辑单元测试
import { describe, it } from "node:test";
import assert from "node:assert/strict";

// app.js 是依赖 DOM 的浏览器脚本，这里按项目惯例重新声明纯逻辑用于测试。

function normalizeValue(value, max) {
  if (!max || max <= 0) return 0;
  return Math.min(1, Math.max(0, value / max));
}

// 复刻 app.js 中 compute7DayAggregation 的核心逻辑（去除 DOM/全局依赖）
function compute7DayAggregation(snapshots, fallbackRepos = []) {
  const latest = snapshots[0];
  const oldest = snapshots[snapshots.length - 1] || latest;
  const baseRepos = latest?.repositories?.length ? latest.repositories : fallbackRepos;
  const hasHistory = snapshots.length >= 2;
  const oldestById = new Map((oldest?.repositories || []).map((r) => [String(r.id), r]));

  const enriched = baseRepos.map((repo) => {
    const past = hasHistory ? oldestById.get(String(repo.id)) : null;
    const starGrowth7d = past
      ? Math.max(0, (repo.stars ?? 0) - (past.stars ?? repo.stars ?? 0))
      : repo.starGrowth ?? 0;
    const forkGrowth7d = past
      ? Math.max(0, (repo.forks ?? 0) - (past.forks ?? repo.forks ?? 0))
      : repo.forkGrowth ?? 0;
    let discussion7d = 0;
    snapshots.forEach((snap) => {
      const item = (snap.repositories || []).find((r) => String(r.id) === String(repo.id));
      if (item) discussion7d += item.discussion ?? 0;
    });
    if (!snapshots.length) discussion7d = repo.discussion ?? 0;
    return { repo, starGrowth7d, forkGrowth7d, discussion7d };
  });

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
      const totalScaleScore =
        normalizeValue(Math.log1p(repo.stars ?? 0), Math.log1p(maxStars)) * 0.65 +
        normalizeValue(Math.log1p(repo.forks ?? 0), Math.log1p(maxForks)) * 0.35;
      const hot7d = Math.max(
        1,
        Math.min(
          100,
          Math.round(
            starGrowthScore * 45 +
              forkGrowthScore * 25 +
              discussionScore * 20 +
              totalScaleScore * 5
          )
        )
      );
      return { ...repo, starGrowth7d, forkGrowth7d, discussion7d, hot7d };
    })
    .sort((a, b) => b.hot7d - a.hot7d);
}

describe("近7天热榜聚合", () => {
  const snapshots = [
    // results[0] 最新一天
    {
      date: "2026-06-09",
      repositories: [
        { id: 1, name: "alpha", stars: 1200, forks: 300, discussion: 10, starGrowth: 50, forkGrowth: 5 },
        { id: 2, name: "beta", stars: 5000, forks: 800, discussion: 2, starGrowth: 5, forkGrowth: 1 },
      ],
    },
    {
      date: "2026-06-08",
      repositories: [
        { id: 1, name: "alpha", stars: 1100, forks: 280, discussion: 8 },
        { id: 2, name: "beta", stars: 4990, forks: 798, discussion: 1 },
      ],
    },
    {
      date: "2026-06-03",
      repositories: [
        { id: 1, name: "alpha", stars: 800, forks: 200, discussion: 5 },
        { id: 2, name: "beta", stars: 4950, forks: 790, discussion: 1 },
      ],
    },
  ];

  it("用当前快照减去最早快照得到7天累计增长", () => {
    const result = compute7DayAggregation(snapshots);
    const alpha = result.find((r) => r.id === 1);
    const beta = result.find((r) => r.id === 2);
    // alpha: 1200 - 800 = 400 stars, 300 - 200 = 100 forks
    assert.equal(alpha.starGrowth7d, 400);
    assert.equal(alpha.forkGrowth7d, 100);
    // beta: 5000 - 4950 = 50 stars, 800 - 790 = 10 forks
    assert.equal(beta.starGrowth7d, 50);
    assert.equal(beta.forkGrowth7d, 10);
  });

  it("讨论度为7天内每份快照 discussion 的累加", () => {
    const result = compute7DayAggregation(snapshots);
    const alpha = result.find((r) => r.id === 1);
    // 10 + 8 + 5 = 23
    assert.equal(alpha.discussion7d, 23);
  });

  it("增长更猛的项目综合热度更高（总量大但增长慢的排后面）", () => {
    const result = compute7DayAggregation(snapshots);
    // alpha 增长远超 beta，尽管 beta 总 stars 更多，alpha 应排第一
    assert.equal(result[0].id, 1);
    assert.ok(result[0].hot7d > result[1].hot7d);
  });

  it("无历史快照时降级使用当日增长字段", () => {
    const single = [
      {
        date: "2026-06-09",
        repositories: [
          { id: 1, name: "alpha", stars: 1200, forks: 300, discussion: 10, starGrowth: 50, forkGrowth: 5 },
        ],
      },
    ];
    const result = compute7DayAggregation(single);
    // 仅一份快照时，oldest === latest，stars 差为 0，退化为当日 starGrowth
    assert.equal(result[0].starGrowth7d, 50);
    assert.equal(result[0].forkGrowth7d, 5);
  });

  it("hot7d 始终落在 1-100 区间", () => {
    const result = compute7DayAggregation(snapshots);
    result.forEach((r) => {
      assert.ok(r.hot7d >= 1 && r.hot7d <= 100);
    });
  });
});
