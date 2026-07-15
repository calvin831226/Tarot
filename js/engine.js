// ============================================================
//  占卜引擎（Engine）：解牌、分析、生成文本
// ============================================================

class TarotEngine {
  constructor() {
    this.currentSpread = null;
    this.drawnCards = [];
    this.question = '';
  }

  setQuestion(q) {
    this.question = q;
    this.currentSpread = recommendSpread(q);
    return this.currentSpread;
  }

  drawCards() {
    this.drawnCards = drawCards(this.currentSpread.count);
    return this.drawnCards;
  }

  getCardInterpretation(index) {
    const card = this.drawnCards[index];
    const position = this.currentSpread.positions[index];
    const interpretation = card.isReversed ? card.reversed : card.upright;
    return { card, position, interpretation };
  }

  // 生成單牌解析段落
  generateCardReading(index) {
    const { card, position, interpretation } = this.getCardInterpretation(index);
    const orientation = card.isReversed ? "逆位" : "正位";
    const arcanaLabel = this.getArcanaLabel(card.arcana);

    return {
      title: `${position}：${card.name}（${orientation}）`,
      arcana: arcanaLabel,
      keywords: card.keywords,
      interpretation,
      number: card.number,
      isReversed: card.isReversed
    };
  }

  getArcanaLabel(arcana) {
    const labels = {
      major: "大阿爾克那",
      wands: "權杖牌組",
      cups: "聖杯牌組",
      swords: "寶劍牌組",
      pentacles: "錢幣牌組"
    };
    return labels[arcana] || arcana;
  }

  // 生成綜合分析
  generateOverallReading() {
    const cards = this.drawnCards;
    const spread = this.currentSpread;

    // 分析牌組分佈
    const arcanaCounts = { major: 0, wands: 0, cups: 0, swords: 0, pentacles: 0 };
    let reversedCount = 0;
    cards.forEach(c => {
      arcanaCounts[c.arcana]++;
      if (c.isReversed) reversedCount++;
    });

    const dominantArcana = Object.entries(arcanaCounts)
      .filter(([k]) => k !== 'major')
      .sort((a, b) => b[1] - a[1])[0];

    const majorCount = arcanaCounts.major;
    const reversedRatio = reversedCount / cards.length;

    let energyAnalysis = this.analyzeEnergy(arcanaCounts, majorCount, reversedRatio, cards.length);
    let actionGuide = this.generateActionGuide(cards, spread.name);

    return { energyAnalysis, actionGuide };
  }

  analyzeEnergy(counts, majorCount, reversedRatio, total) {
    let analysis = [];

    if (majorCount >= Math.ceil(total / 2)) {
      analysis.push("這次占卜出現了大量**大阿爾克那**牌，顯示你正面臨人生中的重要轉折點，命運的力量正在運作，請認真看待這次的占卜訊息。");
    }

    const energyMap = {
      wands: "**火元素（熱情與行動力）**的能量主導著這次牌陣，提示你需要以積極的行動去推動改變",
      cups: "**水元素（情感與直覺）**的能量流貫整個牌陣，情感面向是目前最需要關注的核心",
      swords: "**風元素（思維與溝通）**的能量突出，說明這個問題主要需要清晰的思考與誠實的溝通",
      pentacles: "**土元素（物質與實際）**的能量佔主導，提醒你從現實、具體的角度來應對這個問題"
    };

    const dominant = Object.entries(counts)
      .filter(([k]) => k !== 'major')
      .sort((a,b)=>b[1]-a[1])[0];

    if (dominant && dominant[1] > 0 && energyMap[dominant[0]]) {
      analysis.push(energyMap[dominant[0]] + "。");
    }

    if (reversedRatio >= 0.5) {
      analysis.push("此次牌陣中逆位牌比例偏高，說明目前有許多**內在的阻礙或能量的滯留**。這是一個向內探索、清理舊模式的絕佳時機。");
    } else if (reversedRatio === 0) {
      analysis.push("所有牌皆為正位，能量流動順暢，表示你**與自身的力量相連**，方向基本正確，只需繼續前進。");
    }

    return analysis.join("\n\n");
  }

  generateActionGuide(cards, spreadName) {
    const lastCard = cards[cards.length - 1];
    const baseGuide = lastCard.isReversed ? lastCard.reversed : lastCard.upright;

    const guides = {
      "單牌占卜": `今日的塔羅訊息提醒你：${baseGuide} 記住，每一天都是新的可能性，你的態度決定了這一天的質量。`,
      "時間之流": `從時間的脈絡來看，事情正在朝一個方向流動。最後一張牌代表的未來是：${baseGuide} 未來並非固定不變，你今天的選擇正在塑造它。`,
      "現狀與建議": `建議行動的核心是：${baseGuide} 不要等待完美的時機，從今天就開始做一件小事吧。`,
      "雙人對立牌陣": `這段關係的走向牌提示：${baseGuide} 真實的溝通永遠是改善關係最有效的方式。`,
      "選擇分流牌陣": `在做決定之前，給自己一個深呼吸的空間，傾聽內心真正的聲音。無論哪個選擇，你的態度才是決定結果的關鍵。`,
      "塞爾特十字": `這次深度解讀的最終結果牌指出：${baseGuide} 複雜的局面往往源於我們內心的複雜。靜下心來，一步一步地面對。`
    };

    return guides[spreadName] || `塔羅提示：${baseGuide}`;
  }
}

const engine = new TarotEngine();
