// ============================================================
//  UI 控制器（App）
// ============================================================

// ── 階段常數 ──
const PHASE = {
  WELCOME: 'welcome',
  INPUT: 'input',
  SPREAD_CONFIRM: 'spread_confirm',
  SHUFFLE: 'shuffle',
  READING: 'reading',
  RESULT: 'result'
};

let currentPhase = PHASE.WELCOME;
let revealedCards = 0;
let totalCards = 0;

// ── DOM 捷徑 ──
const $ = id => document.getElementById(id);

// ══ 星光粒子系統 ══
function initStarfield() {
  const canvas = $('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createStar() {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.3 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: 1
    };
  }

  function init() {
    resize();
    stars = Array.from({ length: 200 }, createStar);
    window.addEventListener('resize', resize);
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    stars.forEach(s => {
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha > 1 || s.alpha < 0.1) s.twinkleDir *= -1;
      s.y -= s.speed;
      if (s.y < 0) { s.y = h; s.x = Math.random() * w; }

      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#c9a84c';
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }

  init();
  animate();
}

// ══ 分類選擇狀態 ══
let currentCategory = null;

// ══ 牌背 SVG ══
function getCardBackSVG() {
  return `
    <defs>
      <radialGradient id="back_grad" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:#3d1a6b"/>
        <stop offset="100%" style="stop-color:#1a0533"/>
      </radialGradient>
      <pattern id="back_pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" 
              fill="none" stroke="rgba(201,168,76,0.2)" stroke-width="0.5"/>
      </pattern>
    </defs>
    <rect width="100" height="160" rx="8" fill="url(#back_grad)"/>
    <rect width="100" height="160" rx="8" fill="url(#back_pattern)"/>
    <rect x="5" y="5" width="90" height="150" rx="6" fill="none" stroke="rgba(201,168,76,0.5)" stroke-width="1.5"/>
    <rect x="10" y="10" width="80" height="140" rx="4" fill="none" stroke="rgba(201,168,76,0.25)" stroke-width="1"/>
    <text x="50" y="88" text-anchor="middle" font-size="22" fill="rgba(201,168,76,0.7)">✦</text>
  `;
}

// ══ 相位切換 ══
function showPhase(phase) {
  document.querySelectorAll('.phase').forEach(el => el.classList.remove('active'));
  const el = $(phase);
  if (el) {
    el.classList.add('active');
    currentPhase = phase;
  }
}

// ══ 歡迎動畫 ──
function initWelcome() {
  setTimeout(() => {
    $('welcome-tagline').style.opacity = '1';
    $('welcome-tagline').style.transform = 'translateY(0)';
  }, 800);
  setTimeout(() => {
    $('start-btn').style.opacity = '1';
    $('start-btn').style.transform = 'translateY(0)';
  }, 1600);
}

// ══ 分類選擇 ══
function startDivination() {
  showPhase('phase-category');
}

function selectCategory(btn) {
  currentCategory = {
    key: btn.dataset.category,
    name: btn.querySelector('.cat-name').textContent,
    icon: btn.dataset.icon,
    placeholder: btn.dataset.placeholder,
    examples: JSON.parse(btn.dataset.examples || '[]')
  };

  // 更新輸入頁面
  const badge = $('selected-category-badge');
  badge.textContent = currentCategory.icon + ' ' + currentCategory.name;

  const title = $('input-phase-title');
  title.textContent = `關於${currentCategory.name}，你想問什麼？`;

  const sub = $('input-phase-subtitle');
  sub.textContent = '說得越具體，塔羅就能看得越深';

  const textarea = $('question-input');
  textarea.placeholder = currentCategory.placeholder;
  textarea.value = '';

  // 動態範例按鈕
  const examplesEl = $('question-examples');
  examplesEl.innerHTML = '';
  currentCategory.examples.forEach(ex => {
    const chip = document.createElement('button');
    chip.className = 'example-chip';
    chip.textContent = ex;
    chip.onclick = () => {
      textarea.value = ex;
      textarea.focus();
    };
    examplesEl.appendChild(chip);
  });

  // 加入選中動畫
  btn.style.transform = 'scale(0.96)';
  setTimeout(() => {
    btn.style.transform = '';
    showPhase('phase-input');
    setTimeout(() => textarea.focus(), 350);
  }, 180);
}

function handleQuestionSubmit() {
  const q = $('question-input').value.trim();
  if (q.length < 3) {
    shakeElement($('question-input'));
    showToast('請說出你心中的問題 🌙');
    return;
  }

  const spread = engine.setQuestion(q);
  showSpreadRecommendation(spread, q);
}

function showSpreadRecommendation(spread, question) {
  showPhase('phase-spread-confirm');

  $('spread-name').textContent = spread.name;
  $('spread-description').textContent = spread.description;
  $('spread-count').textContent = `抽 ${spread.count} 張牌`;

  // 顯示使用者問題
  $('confirm-question-text').textContent = `「${question}」`;

  // 展示所有可選牌陣
  const allSpreadsEl = $('all-spreads');
  allSpreadsEl.innerHTML = '';
  Object.entries(SPREADS).forEach(([key, s]) => {
    const btn = document.createElement('button');
    btn.className = `spread-option${s === spread ? ' active' : ''}`;
    btn.innerHTML = `<span class="spread-option-name">${s.name}</span><span class="spread-option-desc">${s.description}</span>`;
    btn.onclick = () => {
      document.querySelectorAll('.spread-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      engine.currentSpread = s;
      $('spread-name').textContent = s.name;
      $('spread-description').textContent = s.description;
      $('spread-count').textContent = `抽 ${s.count} 張牌`;
    };
    allSpreadsEl.appendChild(btn);
  });
}

function confirmSpread() {
  showPhase('phase-shuffle');
  startShuffleAnimation();
}

// ══ 第二階段：洗牌動畫 ══
function startShuffleAnimation() {
  const container = $('shuffle-cards');
  container.innerHTML = '';

  // 生成洗牌動畫卡片
  for (let i = 0; i < 7; i++) {
    const card = document.createElement('div');
    card.className = 'shuffle-card';
    card.style.animationDelay = `${i * 0.15}s`;
    card.innerHTML = `<svg viewBox="0 0 100 160" width="80" height="128">${getCardBackSVG()}</svg>`;
    container.appendChild(card);
  }

  $('shuffle-instruction').style.opacity = '0';
  setTimeout(() => {
    $('shuffle-instruction').style.opacity = '1';
  }, 1500);
}

function beginReading() {
  showPhase('phase-reading');
  engine.drawCards();
  renderCardGrid();
}

// ══ 第三階段：翻牌解讀 ══
function renderCardGrid() {
  const spread = engine.currentSpread;
  const cards = engine.drawnCards;
  totalCards = cards.length;
  revealedCards = 0;

  $('spread-title-display').textContent = spread.name;
  $('cards-remaining').textContent = `點擊牌面逐一翻開（0 / ${totalCards}）`;

  const grid = $('card-grid');
  grid.innerHTML = '';

  // 依牌陣排版
  const layout = spread.layout;
  let maxCol = Math.max(...layout.map(([c]) => c));
  let maxRow = Math.max(...layout.map(([, r]) => r));

  // 特殊處理塔牌（交叉牌）
  if (spread.name === "塞爾特十字") {
    renderCelticCross(grid, cards, spread);
    return;
  }

  // 一般排版
  const cols = maxCol + 1;
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  cards.forEach((card, i) => {
    const [col, row] = layout[i];
    const cardEl = createCardElement(i, card, spread.positions[i]);
    cardEl.style.gridColumn = col + 1;
    cardEl.style.gridRow = row + 1;
    grid.appendChild(cardEl);
  });
}

function renderCelticCross(grid, cards, spread) {
  grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
  grid.style.gridTemplateRows = 'repeat(4, auto)';

  const placements = [
    { col: 3, row: 2 }, { col: 3, row: 2, cross: true },
    { col: 2, row: 2 }, { col: 3, row: 3 }, { col: 3, row: 1 }, { col: 4, row: 2 },
    { col: 6, row: 4 }, { col: 6, row: 3 }, { col: 6, row: 2 }, { col: 6, row: 1 }
  ];

  cards.forEach((card, i) => {
    const p = placements[i];
    const cardEl = createCardElement(i, card, spread.positions[i]);
    cardEl.style.gridColumn = p.col;
    cardEl.style.gridRow = p.row;
    if (p.cross) {
      cardEl.style.transform += ' rotate(90deg)';
      cardEl.style.zIndex = '2';
    }
    grid.appendChild(cardEl);
  });
}

function createCardElement(index, card, position) {
  const wrapper = document.createElement('div');
  wrapper.className = 'card-slot';
  wrapper.dataset.index = index;

  wrapper.innerHTML = `
    <div class="card-position-label">${position}</div>
    <div class="card-flip-container" id="flip-${index}">
      <div class="card-inner">
        <div class="card-face card-back">
          <svg viewBox="0 0 100 160" width="90" height="144">${getCardBackSVG()}</svg>
        </div>
        <div class="card-face card-front">
          <svg viewBox="0 0 100 160" width="90" height="144" class="${card.isReversed ? 'reversed' : ''}">
            ${getCardSVGContent(card)}
          </svg>
        </div>
      </div>
    </div>
  `;

  wrapper.querySelector('.card-flip-container').addEventListener('click', () => revealCard(index, wrapper));
  return wrapper;
}

function revealCard(index, wrapper) {
  const flipContainer = wrapper.querySelector('.card-flip-container');
  if (flipContainer.classList.contains('flipped')) return;

  flipContainer.classList.add('flipped');
  revealedCards++;
  $('cards-remaining').textContent = `點擊牌面逐一翻開（${revealedCards} / ${totalCards}）`;

  // 顯示解析面板
  setTimeout(() => {
    showCardReading(index);
  }, 350);
}

function showCardReading(index) {
  const reading = engine.generateCardReading(index);
  const panel = $('reading-panel');

  panel.innerHTML = `
    <div class="reading-card-info">
      <div class="reading-position">${reading.title}</div>
      <div class="reading-arcana">${reading.arcana}</div>
      <div class="reading-keywords">
        ${reading.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
      </div>
      <div class="reading-text">${reading.interpretation}</div>
    </div>
  `;

  panel.classList.add('panel-flash');
  setTimeout(() => panel.classList.remove('panel-flash'), 600);

  // 當所有牌翻完時，直接顯示按鈕
  if (revealedCards === totalCards) {
    showFinalResultBtn();
  }
}

function showFinalResultBtn() {
  // 清除舊按鈕防止重複
  const existingBtns = document.querySelectorAll('.show-result-btn-class');
  existingBtns.forEach(btn => btn.remove());

  // 1. 在牌格下方的按鈕
  const actions = $('reading-actions');
  actions.innerHTML = '';
  const btn1 = document.createElement('button');
  btn1.className = 'btn-primary pulse-glow show-result-btn-class';
  btn1.innerHTML = '✨ 查看完整占卜結論';
  btn1.onclick = showResult;
  btn1.style.opacity = '1';
  btn1.style.transform = 'none';
  actions.appendChild(btn1);

  // 2. 同步在解析面板底部顯示按鈕 (方便手機直立式閱讀完直接點擊)
  const panel = $('reading-panel');
  const btn2 = document.createElement('button');
  btn2.className = 'btn-primary pulse-glow show-result-btn-class';
  btn2.style.marginTop = '1.5rem';
  btn2.style.width = '100%';
  btn2.style.justifyContent = 'center';
  btn2.innerHTML = '✨ 查看完整占卜結論';
  btn2.onclick = showResult;
  btn2.style.opacity = '1';
  btn2.style.transform = 'none';
  panel.appendChild(btn2);
}

// ══ 第四階段：完整結論 ══
function showResult() {
  showPhase('phase-result');

  const { energyAnalysis, actionGuide } = engine.generateOverallReading();
  const spread = engine.currentSpread;
  const cards = engine.drawnCards;

  // 牌面摘要
  const cardsSummary = $('result-cards-summary');
  cardsSummary.innerHTML = cards.map((card, i) => `
    <div class="result-card-item">
      <div class="result-card-mini">
        <svg viewBox="0 0 100 160" width="55" height="88" class="${card.isReversed ? 'reversed' : ''}">
          ${getCardSVGContent(card)}
        </svg>
      </div>
      <div class="result-card-label">
        <div class="result-position">${spread.positions[i]}</div>
        <div class="result-card-name">${card.name}（${card.isReversed ? '逆' : '正'}）</div>
      </div>
    </div>
  `).join('');

  // 能量分析
  $('energy-analysis').innerHTML = formatMarkdown(energyAnalysis);

  // 行動指引
  $('action-guide').innerHTML = formatMarkdown(actionGuide);
}

// ══ 工具函式 ══
function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>').replace(/$/, '</p>');
}

function shakeElement(el) {
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

function showToast(msg) {
  let toast = $('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function resetAll() {
  engine.currentSpread = null;
  engine.drawnCards = [];
  engine.question = '';
  revealedCards = 0;
  totalCards = 0;
  currentCategory = null;
  $('question-input').value = '';
  $('reading-actions').innerHTML = '';
  showPhase('phase-category');
}

// ══ 初始化 ══
document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  showPhase('phase-welcome');
  initWelcome();

  // Enter 鍵提交問題
  $('question-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuestionSubmit();
    }
  });
});
