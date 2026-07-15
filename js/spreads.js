// ============================================================
//  牌陣定義（Spreads）
// ============================================================

const SPREADS = {
  single: {
    name: "單牌占卜",
    description: "每日運勢、簡單是非題，一牌見真章",
    count: 1,
    positions: ["今日啟示"],
    layout: [[0, 0]]  // [col, row] 格狀座標
  },
  three_time: {
    name: "時間之流",
    description: "過去→現在→未來，看清事件的發展脈絡",
    count: 3,
    positions: ["過去", "現在", "未來"],
    layout: [[0,0],[1,0],[2,0]]
  },
  three_advice: {
    name: "現狀與建議",
    description: "現況→挑戰→建議，點出瓶頸並給出對策",
    count: 3,
    positions: ["現況", "挑戰", "建議行動"],
    layout: [[0,0],[1,0],[2,0]]
  },
  relationship: {
    name: "雙人對立牌陣",
    description: "深度解析兩人關係，看見彼此的心境",
    count: 6,
    positions: ["你的外在狀態", "你的內心感受", "對方的外在狀態", "對方的內心感受", "關係的核心", "未來走向"],
    layout: [[0,0],[0,1],[2,0],[2,1],[1,0],[1,1]]
  },
  choice: {
    name: "選擇分流牌陣",
    description: "二選一決策，看清兩條路的優劣與結果",
    count: 5,
    positions: ["問題核心", "選項A的優勢", "選項A的考驗", "選項B的優勢", "選項B的考驗"],
    layout: [[1,1],[0,0],[0,1],[2,0],[2,1]]
  },
  celtic_cross: {
    name: "塞爾特十字",
    description: "最全面的10張牌陣，深度剖析複雜局面",
    count: 10,
    positions: [
      "問題核心", "交叉阻礙", "過去根源",
      "近期過去", "最高可能", "近期未來",
      "自我認知", "外部環境", "潛意識恐懼或希望", "最終結果"
    ],
    layout: [[1,1],[1,1],[0,1],[1,2],[1,0],[2,1],[3,3],[3,2],[3,1],[3,0]]
  }
};

// 根據問題關鍵字自動推薦牌陣
function recommendSpread(question) {
  const q = question;
  const keywords = {
    relationship: ["感情", "愛情", "戀愛", "男友", "女友", "伴侶", "老公", "老婆", "喜歡", "愛", "婚姻", "分手", "在一起", "曖昧", "告白", "相處"],
    choice: ["選擇", "還是", "A還是B", "要不要", "應不應該", "哪個好", "決定", "抉擇", "兩個", "比較"],
    career: ["工作", "事業", "課業", "考試", "升職", "跳槽", "創業", "生意", "求職", "面試", "學業", "成績", "計畫", "專案"],
    daily: ["今天", "今日", "最近", "這週", "運勢", "運氣", "心情", "感覺", "快樂", "開心"],
    complex: ["迷茫", "困惑", "不知道", "複雜", "糾結", "徬徨", "方向", "人生", "未來", "一切"]
  };

  if (keywords.relationship.some(k => q.includes(k))) return SPREADS.relationship;
  if (keywords.choice.some(k => q.includes(k))) return SPREADS.choice;
  if (keywords.complex.some(k => q.includes(k))) return SPREADS.celtic_cross;
  if (keywords.career.some(k => q.includes(k))) return SPREADS.three_time;
  if (keywords.daily.some(k => q.includes(k))) return SPREADS.single;

  // 問題長度判斷：短問題→單牌，長問題→現狀建議
  if (q.length < 15) return SPREADS.single;
  if (q.length < 30) return SPREADS.three_advice;
  return SPREADS.three_time;
}
