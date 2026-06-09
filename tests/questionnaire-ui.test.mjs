// @AI_GENERATED: Unit tests for Beginner Questionnaire UI (Task 3.2)
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { createContext, runInContext } from 'node:vm';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appCode = readFileSync(resolve(__dirname, '..', 'app.js'), 'utf8');

function createBrowserContext() {
  const mockElement = () => ({
    addEventListener: () => {},
    classList: { toggle: () => {}, add: () => {}, remove: () => {} },
    textContent: '',
    innerHTML: '',
    style: { width: '', setProperty: () => {} },
    getBoundingClientRect: () => ({ width: 100, height: 100, left: 0, top: 0 }),
    setAttribute: () => {},
    getAttribute: () => null,
    querySelectorAll: () => [],
    value: 'hot',
    disabled: false,
  });
  return {
    document: {
      querySelector: () => mockElement(),
      querySelectorAll: () => [],
      addEventListener: () => {},
    },
    window: { devicePixelRatio: 1, addEventListener: () => {}, setTimeout: () => {} },
    navigator: { clipboard: { writeText: async () => true } },
    sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    fetch: async () => ({ ok: false }),
    requestAnimationFrame: () => {},
    console,
    Math, Array, Number, String, Object, JSON, Promise, Error,
    setTimeout: () => {}, clearTimeout: () => {},
    parseInt, parseFloat, isNaN, isFinite, undefined, null: null,
    Infinity, NaN,
  };
}

function loadApp() {
  const ctx = createBrowserContext();
  // Only run the definition code, skip initApp execution
  const codeWithoutInit = appCode.replace(/initApp\(\);?\s*$/, '');
  // Create full script that also provides a helper to re-read the internal state
  const script = codeWithoutInit + `
    this.renderBeginnerQuestionnaireStep = renderBeginnerQuestionnaireStep;
    this.handleBeginnerOptionClick = handleBeginnerOptionClick;
    this.navigateBeginnerStep = navigateBeginnerStep;
    this.saveQuestionnaireAnswer = saveQuestionnaireAnswer;
    this.isQuestionnaireComplete = isQuestionnaireComplete;
    this.BEGINNER_STEPS = BEGINNER_STEPS;
    this.BEGINNER_QUESTIONNAIRE_OPTIONS = BEGINNER_QUESTIONNAIRE_OPTIONS;
    this.getState = function() { return beginnerQuestionnaireState; };
    this.setState = function(s) { beginnerQuestionnaireState = s; };
  `;
  const context = createContext(ctx);
  runInContext(script, context);
  return ctx;
}

describe('renderBeginnerQuestionnaireStep', () => {
  test('renders step 0 (background) with correct options', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(0);
    
    assert.ok(html.includes('beginner-progress'), 'should have progress bar');
    assert.ok(html.includes('步骤 1 / 5'), 'should show step 1 of 5');
    assert.ok(html.includes('你的背景'), 'should show background step label');
    assert.ok(html.includes('data-beginner-option="student"'), 'should have student option');
    assert.ok(html.includes('data-beginner-option="product-manager"'), 'should have product-manager option');
    assert.ok(html.includes('data-beginner-option="designer"'), 'should have designer option');
    assert.ok(html.includes('data-beginner-option="hobbyist"'), 'should have hobbyist option');
    assert.ok(html.includes('data-beginner-option="other"'), 'should have other option');
  });

  test('renders step 1 (goal) with correct options', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(1);
    
    assert.ok(html.includes('步骤 2 / 5'), 'should show step 2 of 5');
    assert.ok(html.includes('你想做什么'), 'should show goal step label');
    assert.ok(html.includes('data-beginner-option="build-a-portfolio-project"'));
    assert.ok(html.includes('data-beginner-option="understand-AI-tools"'));
    assert.ok(html.includes('data-beginner-option="automate-personal-workflow"'));
  });

  test('renders step 2 (interestDirections) as multi-select with hint', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(2);
    
    assert.ok(html.includes('步骤 3 / 5'), 'should show step 3 of 5');
    assert.ok(html.includes('感兴趣的方向'), 'should show interest step label');
    assert.ok(html.includes('data-beginner-option="AI-chatbot"'));
    assert.ok(html.includes('data-beginner-option="knowledge-search"'));
    assert.ok(html.includes('可多选'), 'should show multi-select hint');
  });

  test('renders step 3 (timeBudget) with correct options', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(3);
    
    assert.ok(html.includes('步骤 4 / 5'));
    assert.ok(html.includes('可投入时间'));
    assert.ok(html.includes('data-beginner-option="30-minutes-per-day"'));
    assert.ok(html.includes('data-beginner-option="1-hour-per-day"'));
    assert.ok(html.includes('data-beginner-option="flexible-long-term"'));
  });

  test('renders step 4 (environmentPreference) with "生成推荐" button', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(4);
    
    assert.ok(html.includes('步骤 5 / 5'));
    assert.ok(html.includes('运行环境偏好'));
    assert.ok(html.includes('data-beginner-option="browser-only-no-install"'));
    assert.ok(html.includes('生成推荐'), 'last step should show "生成推荐" button');
  });

  test('shows prev button disabled on step 0', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(0);
    assert.ok(html.includes('disabled'), 'prev button should be disabled on step 0');
  });

  test('shows prev button enabled on step > 0', () => {
    const ctx = loadApp();
    const html = ctx.renderBeginnerQuestionnaireStep(2);
    // The prev button should NOT have disabled attribute
    const prevBtnMatch = html.match(/data-beginner-nav="prev"[^>]*/);
    assert.ok(prevBtnMatch, 'should have prev button');
    // On step 2, prev should not be disabled
    assert.ok(!prevBtnMatch[0].includes('disabled'), 'prev button should not be disabled on step 2');
  });

  test('shows explanation when option is selected (single-select)', () => {
    const ctx = loadApp();
    // Simulate selecting an option
    ctx.saveQuestionnaireAnswer(0, 'student');
    const html = ctx.renderBeginnerQuestionnaireStep(0);
    assert.ok(html.includes('在校学生或应届毕业生'), 'should show explanation for selected option');
    assert.ok(html.includes('beginner-option-active'), 'should mark selected option as active');
  });

  test('shows selected items for multi-select (interestDirections)', () => {
    const ctx = loadApp();
    ctx.saveQuestionnaireAnswer(2, ['AI-chatbot', 'knowledge-search']);
    const html = ctx.renderBeginnerQuestionnaireStep(2);
    assert.ok(html.includes('已选择'), 'should show "已选择" for multi-select');
    assert.ok(html.includes('AI 聊天机器人'), 'should show selected item label');
    assert.ok(html.includes('知识搜索/问答'), 'should show second selected item label');
  });

  test('progress bar width increases per step', () => {
    const ctx = loadApp();
    const html0 = ctx.renderBeginnerQuestionnaireStep(0);
    const html4 = ctx.renderBeginnerQuestionnaireStep(4);
    assert.ok(html0.includes('width: 20%'), 'step 0 should be 20%');
    assert.ok(html4.includes('width: 100%'), 'step 4 should be 100%');
  });
});

describe('handleBeginnerOptionClick', () => {
  test('single-select sets value correctly', () => {
    const ctx = loadApp();
    ctx.handleBeginnerOptionClick('background', 'designer');
    assert.equal(ctx.getState().answers.background, 'designer');
  });

  test('single-select deselects when clicking same option', () => {
    const ctx = loadApp();
    ctx.handleBeginnerOptionClick('background', 'designer');
    ctx.handleBeginnerOptionClick('background', 'designer');
    assert.equal(ctx.getState().answers.background, null);
  });

  test('single-select switches value when clicking different option', () => {
    const ctx = loadApp();
    ctx.handleBeginnerOptionClick('background', 'designer');
    ctx.handleBeginnerOptionClick('background', 'student');
    assert.equal(ctx.getState().answers.background, 'student');
  });

  test('multi-select adds to array', () => {
    const ctx = loadApp();
    ctx.handleBeginnerOptionClick('interestDirections', 'AI-chatbot');
    ctx.handleBeginnerOptionClick('interestDirections', 'knowledge-search');
    const result = ctx.getState().answers.interestDirections;
    assert.equal(JSON.stringify(result), JSON.stringify(['AI-chatbot', 'knowledge-search']));
  });

  test('multi-select removes on second click', () => {
    const ctx = loadApp();
    ctx.handleBeginnerOptionClick('interestDirections', 'AI-chatbot');
    ctx.handleBeginnerOptionClick('interestDirections', 'knowledge-search');
    ctx.handleBeginnerOptionClick('interestDirections', 'AI-chatbot');
    const result = ctx.getState().answers.interestDirections;
    assert.equal(JSON.stringify(result), JSON.stringify(['knowledge-search']));
  });
});

describe('navigateBeginnerStep', () => {
  test('next increments step', () => {
    const ctx = loadApp();
    ctx.getState().currentStep = 0;
    ctx.navigateBeginnerStep('next');
    assert.equal(ctx.getState().currentStep, 1);
  });

  test('prev decrements step', () => {
    const ctx = loadApp();
    ctx.getState().currentStep = 2;
    ctx.navigateBeginnerStep('prev');
    assert.equal(ctx.getState().currentStep, 1);
  });

  test('prev does not go below 0', () => {
    const ctx = loadApp();
    ctx.getState().currentStep = 0;
    ctx.navigateBeginnerStep('prev');
    assert.equal(ctx.getState().currentStep, 0);
  });

  test('next does not go above 4', () => {
    const ctx = loadApp();
    ctx.getState().currentStep = 4;
    ctx.navigateBeginnerStep('next');
    assert.equal(ctx.getState().currentStep, 4);
  });

  test('backward navigation preserves previously selected answers', () => {
    const ctx = loadApp();
    // Set answers on steps 0, 1, 2
    ctx.saveQuestionnaireAnswer(0, 'student');
    ctx.saveQuestionnaireAnswer(1, 'build-a-portfolio-project');
    ctx.saveQuestionnaireAnswer(2, ['AI-chatbot', 'image-creation']);
    
    // Navigate backward
    ctx.getState().currentStep = 2;
    ctx.navigateBeginnerStep('prev');
    ctx.navigateBeginnerStep('prev');
    
    // All answers should still be intact
    const state = ctx.getState();
    assert.equal(state.answers.background, 'student');
    assert.equal(state.answers.goal, 'build-a-portfolio-project');
    assert.equal(JSON.stringify(state.answers.interestDirections), JSON.stringify(['AI-chatbot', 'image-creation']));
  });
});
// @AI_GENERATED: end
