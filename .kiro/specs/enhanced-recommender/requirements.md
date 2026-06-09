<!-- @AI_GENERATED -->
# Requirements Document

## Introduction

本文档定义 Enhanced Vibe Coding Recommender 的需求规格。该功能将现有的"项目推荐"模块从仅推荐 10 个热榜项目的简单选取，升级为面向零基础转码/转AI用户的智能推荐引擎。增强后的推荐器将具备更大的项目池、更精准的匹配算法、以及远比现有版本详细的新手入门文档生成能力，成为产品的核心差异化模块。

## Glossary

- **Recommender**: 项目推荐引擎模块，负责采集用户画像、匹配项目、生成入门文档的完整系统
- **Project_Pool**: 预计算的新手友好项目池，由数据管道每日从 GitHub 广泛搜索并筛选产出的静态 JSON 数据
- **User_Profile**: 用户通过问卷采集的背景信息结构，包含技术背景、目标、兴趣、时间预算等维度
- **Beginner_Score**: 项目的新手友好评分，基于 README 质量、安装复杂度、文档完整度、依赖数量等因素计算
- **Match_Engine**: 客户端匹配引擎，根据 User_Profile 与 Project_Pool 中项目属性进行多维度加权评分
- **Onboarding_Doc**: 系统为用户生成的结构化入门文档，包含环境准备、精确命令、排错指南、7天计划等
- **Data_Pipeline**: Node.js 数据采集脚本（update-data.mjs），每日通过 GitHub Actions 运行，输出静态 JSON 文件
- **Questionnaire**: 分步用户画像采集问卷，面向零基础用户设计，使用简单直觉的选项而非技术术语

## Requirements

### Requirement 1: 扩展项目池采集

**User Story:** As a 零基础转码用户, I want 推荐器从 GitHub 广泛搜索适合新手的 AI 项目, so that 我能获得超越热榜范围的、真正适合入门的项目推荐。

#### Acceptance Criteria

1. WHEN the Data_Pipeline executes its daily update, THE Data_Pipeline SHALL search GitHub for beginner-friendly AI projects across at least 15 distinct topic queries beyond the existing trending topics
2. WHEN the Data_Pipeline collects candidate projects, THE Data_Pipeline SHALL filter projects that have a README file exceeding 500 characters, at least 50 stars, and a push date within the last 90 days
3. THE Data_Pipeline SHALL compute a Beginner_Score for each candidate project based on: README length and structure (25%), presence of installation instructions (20%), number of dependencies (15%), issue response rate (15%), documentation language accessibility (15%), and presence of examples or tutorials (10%)
4. WHEN the Data_Pipeline completes scoring, THE Data_Pipeline SHALL retain the top 50 projects ranked by Beginner_Score and output them into the Project_Pool section of the static JSON file
5. THE Data_Pipeline SHALL categorize each project in the Project_Pool with at least one beginner-relevant tag from the set: chatbot, knowledge-base, coding-assistant, image-generation, automation, browser-tool, cli-tool, web-app, api-wrapper, learning-project
6. THE Data_Pipeline SHALL output separate fields for the Project_Pool data: project metadata, Beginner_Score breakdown, estimated setup complexity (low, medium, high), and prerequisite skills list

### Requirement 2: 新手画像采集问卷

**User Story:** As a 零基础用户, I want 用简单直觉的方式告诉系统我的背景和目标, so that 系统能理解我的真实水平并推荐真正匹配的项目。

#### Acceptance Criteria

1. THE Questionnaire SHALL collect user information through exactly 5 sequential steps: background, goal, interest-direction, time-budget, and environment-preference
2. WHEN a user reaches the background step, THE Questionnaire SHALL present non-technical role options including: student, product-manager, designer, marketer, business-analyst, career-changer, hobbyist, and other
3. WHEN a user reaches the goal step, THE Questionnaire SHALL present goal options including: build-a-portfolio-project, understand-AI-tools, automate-personal-workflow, explore-career-change, learn-coding-basics, and build-a-product-idea
4. WHEN a user reaches the interest-direction step, THE Questionnaire SHALL present interest options including: AI-chatbot, knowledge-search, image-creation, code-helper, browser-automation, data-analysis, personal-assistant, and content-creation
5. WHEN a user reaches the time-budget step, THE Questionnaire SHALL present time investment options: 30-minutes-per-day, 1-hour-per-day, half-day-per-week, full-day-per-week, and flexible-long-term
6. WHEN a user reaches the environment-preference step, THE Questionnaire SHALL present environment options: browser-only-no-install, simple-local-setup, docker-comfortable, and any-environment
7. WHEN a user selects any option, THE Questionnaire SHALL display a brief plain-language explanation of what that choice means for the recommendation
8. THE Questionnaire SHALL allow users to navigate backward to any previous step without losing already-selected answers

### Requirement 3: 智能匹配引擎

**User Story:** As a 零基础用户, I want 推荐结果真正匹配我的背景和能力, so that 我不会收到超出我理解范围的项目推荐。

#### Acceptance Criteria

1. WHEN a user completes the Questionnaire, THE Match_Engine SHALL compute a match score for each project in the Project_Pool using weighted factors: setup-complexity-match (30%), interest-alignment (25%), time-budget-feasibility (20%), prerequisite-skill-match (15%), and goal-alignment (10%)
2. WHEN computing setup-complexity-match, THE Match_Engine SHALL map the user environment-preference to project setup complexity and assign score 100 when complexity is at or below user preference, score 50 when one level above, and score 0 when two or more levels above
3. WHEN computing interest-alignment, THE Match_Engine SHALL compare user interest-direction selections against project category tags and assign higher scores for exact matches and partial scores for related categories
4. THE Match_Engine SHALL return the top 3 to 5 projects ranked by match score, each with a minimum match score of 40 out of 100
5. WHEN fewer than 3 projects meet the minimum match score threshold, THE Match_Engine SHALL relax the setup-complexity constraint by one level and recompute scores
6. THE Match_Engine SHALL generate a plain-language recommendation reason for each recommended project explaining why it matches the user profile in terms the user can understand without technical jargon

### Requirement 4: 详细入门文档生成

**User Story:** As a 零基础用户, I want 获得一份假设我什么都不懂的详细入门指南, so that 我能独立完成从安装到运行到修改的全过程而不卡住。

#### Acceptance Criteria

1. WHEN a user selects a recommended project, THE Recommender SHALL generate an Onboarding_Doc containing all of the following sections: project-overview, why-it-fits-you, environment-setup, step-by-step-installation, first-run-guide, directory-structure-explanation, key-concepts, first-modification-suggestion, common-errors-and-fixes, 7-day-practice-plan, and portfolio-display-ideas
2. WHEN generating the environment-setup section, THE Onboarding_Doc SHALL include exact terminal commands for the user operating system, expected output descriptions for each command, and explicit version numbers for required tools
3. WHEN generating the step-by-step-installation section, THE Onboarding_Doc SHALL list each command on a separate line with a preceding explanation of what the command does and a following description of expected success output
4. WHEN generating the common-errors-and-fixes section, THE Onboarding_Doc SHALL include at least 5 common errors a beginner would encounter with the specific project, each accompanied by the exact error message text, the cause explanation, and the fix command or steps
5. WHEN generating the 7-day-practice-plan section, THE Onboarding_Doc SHALL provide daily goals that assume no more than the time-budget the user specified in the Questionnaire, with each day building incrementally on the previous day
6. THE Onboarding_Doc SHALL use plain language with Chinese as the primary language, define every technical term on first use, and avoid assuming any prior programming knowledge
7. THE Onboarding_Doc SHALL include a copy-to-clipboard button and an export-as-markdown button in the preview interface

### Requirement 5: 项目池数据结构与更新

**User Story:** As a 系统维护者, I want 项目池数据在每日管道中自动更新并保持结构一致, so that 前端推荐器始终使用最新且格式正确的数据。

#### Acceptance Criteria

1. THE Data_Pipeline SHALL output the Project_Pool as a dedicated array field named "beginnerProjects" within the existing current.json file structure
2. WHEN the Data_Pipeline generates the beginnerProjects array, THE Data_Pipeline SHALL include for each project: id, name, owner, url, description, descriptionZh, category-tags, language, stars, Beginner_Score, setup-complexity, prerequisite-skills, estimated-first-run-time, has-chinese-docs, has-examples-folder, and last-updated timestamp
3. WHEN a previously included project has not been pushed to within 90 days, THE Data_Pipeline SHALL remove that project from the Project_Pool in the next update cycle
4. WHEN the GitHub API returns an error during Project_Pool collection, THE Data_Pipeline SHALL retain the previous snapshot Project_Pool data rather than outputting an empty beginnerProjects array
5. THE Data_Pipeline SHALL ensure the beginnerProjects array contains between 30 and 50 projects after each successful update

### Requirement 6: 前端推荐器交互体验

**User Story:** As a 零基础用户, I want 推荐器界面简洁直觉且有引导感, so that 我不会因为界面复杂而放弃使用推荐功能。

#### Acceptance Criteria

1. THE Recommender SHALL display a prominent entry point in the page navigation with the label "找到适合你的第一个 AI 项目" that is visually distinct from other navigation items
2. WHEN a user clicks the recommender entry point, THE Recommender SHALL display the Questionnaire with a progress indicator showing the current step number and total steps
3. WHEN the Match_Engine returns results, THE Recommender SHALL display each recommended project as a card containing: project name, one-sentence Chinese description, match-score percentage, difficulty-badge, estimated-first-run-time, and a "为什么适合我" expandable section
4. WHEN a user clicks the "为什么适合我" section, THE Recommender SHALL expand an explanation panel showing the match reasoning in plain Chinese without technical jargon
5. WHEN a user clicks "生成入门指南" on a recommended project card, THE Recommender SHALL display the Onboarding_Doc in a right-side drawer panel with section navigation
6. WHILE the Onboarding_Doc drawer is open, THE Recommender SHALL display a sticky top bar with copy-full-document and export-markdown action buttons
7. IF a user navigates away from the Questionnaire before completion, THEN THE Recommender SHALL preserve the partially completed answers for the duration of the browser session

### Requirement 7: 推荐质量保障

**User Story:** As a 产品负责人, I want 推荐结果的质量可验证且可持续改善, so that 用户获得的推荐始终是高质量且相关的。

#### Acceptance Criteria

1. THE Data_Pipeline SHALL log the Beginner_Score calculation breakdown for each project in the pipeline output for debugging purposes
2. WHEN a project in the Project_Pool has a Beginner_Score below 40, THE Data_Pipeline SHALL exclude that project from the final beginnerProjects output
3. THE Match_Engine SHALL include the match-score breakdown by factor in the recommendation result data structure for transparency
4. WHEN a user clicks "不适合我" on a recommended project, THE Recommender SHALL record the dismissal in browser local storage and exclude that project from future recommendation sessions
5. THE Recommender SHALL display the data generation timestamp on the recommendation results panel so users know how recent the project information is

<!-- @AI_GENERATED: end -->
