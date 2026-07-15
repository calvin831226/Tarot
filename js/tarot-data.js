// ============================================================
//  78 張偉特塔羅牌完整資料庫（中文解義）
// ============================================================

const TAROT_DECK = [
  // ── 大阿爾克那（Major Arcana）0–21 ──
  {
    id: 0, name: "愚者", arcana: "major", number: "0",
    keywords: ["新開始", "自由", "冒險", "天真"],
    upright: "新的旅程即將展開，帶著純真與勇氣踏入未知。此刻的你充滿無限可能，不要被過去束縛。",
    reversed: "魯莽行事，缺乏準備。提醒自己在跳躍前先觀察腳下，避免衝動帶來的後悔。",
    symbol: "fool"
  },
  {
    id: 1, name: "魔術師", arcana: "major", number: "I",
    keywords: ["意志力", "技巧", "創造", "行動"],
    upright: "你擁有實現目標所需的一切資源。集中意志，將潛能轉化為現實，時機已到。",
    reversed: "才能未被善用，可能有欺騙或自我懷疑的傾向。重新審視自己的真實意圖。",
    symbol: "magician"
  },
  {
    id: 2, name: "女祭司", arcana: "major", number: "II",
    keywords: ["直覺", "神秘", "內在智慧", "等待"],
    upright: "相信你的直覺與潛意識。此刻不適合急於行動，靜下心來聆聽內心深處的聲音。",
    reversed: "壓抑直覺，過度依賴外部意見。試著回歸自我，找回與內心的連結。",
    symbol: "high_priestess"
  },
  {
    id: 3, name: "女皇", arcana: "major", number: "III",
    keywords: ["豐盛", "母性", "創造力", "自然"],
    upright: "豐收的季節到來，感情與事業都充滿生機。用愛與耐心滋養你的計畫與關係。",
    reversed: "創意受阻，可能過度依賴他人或忽視自我需求。學習先愛自己。",
    symbol: "empress"
  },
  {
    id: 4, name: "皇帝", arcana: "major", number: "IV",
    keywords: ["權威", "穩定", "結構", "領導"],
    upright: "建立規則與秩序帶來安全感。透過紀律與規劃，你能穩固地達成目標。",
    reversed: "過於僵化或獨裁，可能感到被控制或缺乏彈性。學習在規則中保留彈性。",
    symbol: "emperor"
  },
  {
    id: 5, name: "教皇", arcana: "major", number: "V",
    keywords: ["傳統", "信仰", "指引", "習俗"],
    upright: "尋求精神指引或傳統智慧的幫助。值得信賴的導師或機構能為你提供方向。",
    reversed: "質疑傳統束縛，尋找屬於自己的真理。打破規則有時是必要的成長。",
    symbol: "hierophant"
  },
  {
    id: 6, name: "戀人", arcana: "major", number: "VI",
    keywords: ["愛情", "選擇", "結合", "價值觀"],
    upright: "面臨重要的選擇，需要依照內心真正的價值觀決定。感情關係中充滿連結與和諧。",
    reversed: "關係失衡或面臨艱難抉擇。誠實面對自己的感受，才能做出正確決定。",
    symbol: "lovers"
  },
  {
    id: 7, name: "戰車", arcana: "major", number: "VII",
    keywords: ["勝利", "意志力", "控制", "前進"],
    upright: "透過強大的意志力克服障礙，勝利在望。保持方向，不被情緒左右，全力衝刺。",
    reversed: "失去控制或方向，力量被分散。停下來重整旗鼓，找回你的核心動力。",
    symbol: "chariot"
  },
  {
    id: 8, name: "力量", arcana: "major", number: "VIII",
    keywords: ["勇氣", "耐心", "內在力量", "溫柔"],
    upright: "真正的力量來自溫柔與耐心，而非蠻力。以愛與理解馴服內心的恐懼與衝動。",
    reversed: "缺乏自信或自我懷疑。記住，你比你想像的更強大，相信自己的內在力量。",
    symbol: "strength"
  },
  {
    id: 9, name: "隱士", arcana: "major", number: "IX",
    keywords: ["獨處", "內省", "智慧", "尋求"],
    upright: "現在需要一段獨處與自我反思的時光。退後一步，用智慧之光照亮前行的道路。",
    reversed: "過度孤立或拒絕接受他人的幫助。適當地開放自己，不要讓孤獨變成囚籠。",
    symbol: "hermit"
  },
  {
    id: 10, name: "命運之輪", arcana: "major", number: "X",
    keywords: ["命運", "轉折", "機遇", "循環"],
    upright: "生命的轉折點已到，好運氣正在靠近。順應命運的流動，把握這個改變的機會。",
    reversed: "運氣欠佳或感覺被命運捉弄。記住，低谷之後必然是轉機，保持耐心。",
    symbol: "wheel"
  },
  {
    id: 11, name: "正義", arcana: "major", number: "XI",
    keywords: ["公平", "真相", "因果", "平衡"],
    upright: "追求公平與真相，做出符合道德的決定。你的行為將帶來相應的後果，誠實最重要。",
    reversed: "不公平的處境或逃避責任。面對真相，承擔自己行為的後果。",
    symbol: "justice"
  },
  {
    id: 12, name: "倒吊人", arcana: "major", number: "XII",
    keywords: ["暫停", "犧牲", "新視角", "等待"],
    upright: "暫停所有行動，換個角度看問題。有時候主動放棄控制，反而能看到全新的可能性。",
    reversed: "無謂的自我犧牲或猶豫不決。停止拖延，是時候採取行動了。",
    symbol: "hanged_man"
  },
  {
    id: 13, name: "死神", arcana: "major", number: "XIII",
    keywords: ["結束", "轉化", "蛻變", "新生"],
    upright: "某個階段正在結束，為新的開始騰出空間。放下舊有的執著，才能擁抱蛻變後的新生。",
    reversed: "抗拒改變或無法放下過去。變化是不可避免的，學習優雅地放手。",
    symbol: "death"
  },
  {
    id: 14, name: "節制", arcana: "major", number: "XIV",
    keywords: ["平衡", "耐心", "調和", "中庸"],
    upright: "找到生活中的平衡點，耐心地調和各種衝突的力量。慢工出細活，穩步前進。",
    reversed: "失衡與過度，可能在某方面走極端。找回中庸之道，恢復和諧。",
    symbol: "temperance"
  },
  {
    id: 15, name: "惡魔", arcana: "major", number: "XV",
    keywords: ["束縛", "物質", "陰影", "依賴"],
    upright: "你可能被某種依賴或執念所束縛。看清那些限制你的枷鎖，你其實有能力掙脫。",
    reversed: "開始脫離束縛，從依賴中解放。即使緩慢，前進的勇氣值得肯定。",
    symbol: "devil"
  },
  {
    id: 16, name: "塔", arcana: "major", number: "XVI",
    keywords: ["突變", "震撼", "崩塌", "啟示"],
    upright: "突如其來的變化將打破舊有的結構。雖然過程痛苦，但這是清除虛假根基的必要震撼。",
    reversed: "雖然避開了危機，但舊問題仍未解決。不要逃避必要的改變。",
    symbol: "tower"
  },
  {
    id: 17, name: "星星", arcana: "major", number: "XVII",
    keywords: ["希望", "療癒", "啟發", "平靜"],
    upright: "在黑暗後，希望之光重現。相信未來，讓自己的傷口在平靜中慢慢癒合。",
    reversed: "感到絕望或缺乏信心。別放棄，星光依然存在，只是暫時被烏雲遮蔽。",
    symbol: "star"
  },
  {
    id: 18, name: "月亮", arcana: "major", number: "XVIII",
    keywords: ["幻覺", "恐懼", "潛意識", "不確定"],
    upright: "事情可能不如表面所見，潛意識的恐懼在作祟。保持清醒，不要讓幻覺誤導你的判斷。",
    reversed: "迷霧逐漸散去，真相即將浮現。你開始能夠理性地面對曾經的恐懼。",
    symbol: "moon"
  },
  {
    id: 19, name: "太陽", arcana: "major", number: "XIX",
    keywords: ["成功", "喜悅", "活力", "清晰"],
    upright: "光明正大，充滿活力與喜悅。你的努力將帶來豐碩的成果，享受生命的美好。",
    reversed: "快樂受到遮蔽，過度樂觀或缺乏清醒。保持真實，喜悅很快就會回來。",
    symbol: "sun"
  },
  {
    id: 20, name: "審判", arcana: "major", number: "XX",
    keywords: ["覺醒", "更新", "召喚", "評估"],
    upright: "一次重要的覺醒與自我評估。聆聽內心的呼喚，是時候做出影響深遠的決定了。",
    reversed: "自我審判過嚴或逃避人生的重要課題。給自己寬恕，從失敗中學習成長。",
    symbol: "judgement"
  },
  {
    id: 21, name: "世界", arcana: "major", number: "XXI",
    keywords: ["完成", "整合", "成就", "圓滿"],
    upright: "一個重要的階段圓滿完成，你已達到整合與平衡的境界。慶祝這份成就，準備迎接下一程。",
    reversed: "未竟之事或尋求捷徑。放慢腳步，確保所有細節都已妥善處理再前進。",
    symbol: "world"
  },

  // ── 小阿爾克那：權杖（Wands）──
  {
    id: 22, name: "權杖一", arcana: "wands", number: "A",
    keywords: ["靈感", "新創意", "潛力", "起點"],
    upright: "一個充滿潛力的新開始，創意與熱情的火花被點燃。把握這股衝勁，付諸行動。",
    reversed: "創意受阻或缺乏動力。找回你的熱情，從小步驟開始重新啟動。",
    symbol: "wand"
  },
  {
    id: 23, name: "權杖二", arcana: "wands", number: "2",
    keywords: ["計畫", "展望", "決策", "世界觀"],
    upright: "站在人生的岔路口，思考長遠的目標。你有能力看得更遠，做出大膽的選擇。",
    reversed: "計畫受阻或害怕踏出舒適圈。鼓起勇氣，擁抱未知的可能性。",
    symbol: "wand"
  },
  {
    id: 24, name: "權杖三", arcana: "wands", number: "3",
    keywords: ["擴展", "預見", "機遇", "成長"],
    upright: "第一批努力的成果正在顯現，更大的擴展機遇即將到來。繼續放眼遠方。",
    reversed: "擴展計畫受挫，可能遭遇延誤。重新評估策略，調整方向後再出發。",
    symbol: "wand"
  },
  {
    id: 25, name: "權杖四", arcana: "wands", number: "4",
    keywords: ["慶祝", "家庭", "穩定", "里程碑"],
    upright: "值得慶祝的成就與穩定的根基。享受當下的喜悅，與重要的人分享這份成功。",
    reversed: "家庭不和諧或慶祝被推遲。尋找問題根源，努力重建和諧的關係。",
    symbol: "wand"
  },
  {
    id: 26, name: "權杖五", arcana: "wands", number: "5",
    keywords: ["競爭", "衝突", "挑戰", "磨練"],
    upright: "面對激烈的競爭與挑戰，這是磨練自己的機會。在衝突中找到自己的立場。",
    reversed: "避免不必要的爭鬥，尋找妥協的方式。和平解決衝突比贏得爭論更重要。",
    symbol: "wand"
  },
  {
    id: 27, name: "權杖六", arcana: "wands", number: "6",
    keywords: ["勝利", "認可", "自信", "領先"],
    upright: "你的努力獲得認可與勝利，公眾的讚揚使你充滿自信。享受這份應得的榮耀。",
    reversed: "勝利被延遲或缺乏認可。不依賴他人的讚美找到自我價值感。",
    symbol: "wand"
  },
  {
    id: 28, name: "權杖七", arcana: "wands", number: "7",
    keywords: ["堅持", "捍衛", "逆境", "立場"],
    upright: "在逆境中堅守自己的立場，面對挑戰時展現勇氣。你的努力值得被保護。",
    reversed: "感到不堪重負，可能放棄立場。重新評估哪些才是真正值得堅守的。",
    symbol: "wand"
  },
  {
    id: 29, name: "權杖八", arcana: "wands", number: "8",
    keywords: ["速度", "行動", "消息", "加速"],
    upright: "事情快速進展，好消息即將到來。此時適合快速行動，抓住稍縱即逝的機會。",
    reversed: "延誤或溝通不順暢，速度受阻。耐心等待，檢視是否有什麼被忽略了。",
    symbol: "wand"
  },
  {
    id: 30, name: "權杖九", arcana: "wands", number: "9",
    keywords: ["韌性", "防衛", "堅持", "接近終點"],
    upright: "雖然疲憊，但終點已在望。憑著堅韌的意志再撐一下，成功就在眼前。",
    reversed: "過度防衛或偏執，身心俱疲。適當地放下防備，接受他人的幫助。",
    symbol: "wand"
  },
  {
    id: 31, name: "權杖十", arcana: "wands", number: "10",
    keywords: ["重擔", "責任", "壓力", "完成"],
    upright: "承受著沉重的責任與壓力，但終點已近。完成後記得學會委派與分擔。",
    reversed: "被壓垮的負擔，無法承受的壓力。是時候放下一些，向他人求助。",
    symbol: "wand"
  },
  {
    id: 32, name: "權杖侍從", arcana: "wands", number: "Page",
    keywords: ["熱情", "探索", "消息", "新想法"],
    upright: "充滿熱情與好奇心，準備探索新的可能性。一個令人興奮的消息可能即將到來。",
    reversed: "缺乏方向感或急於求成。先培養基礎技能再衝刺，穩紮穩打。",
    symbol: "wand"
  },
  {
    id: 33, name: "權杖騎士", arcana: "wands", number: "Knight",
    keywords: ["冒險", "衝勁", "魅力", "行動力"],
    upright: "充滿活力地追求目標，帶著熱情與魅力衝向前方。行動力是你最大的資產。",
    reversed: "衝動魯莽，缺乏計畫。先停下來想清楚方向，再全力以赴。",
    symbol: "wand"
  },
  {
    id: 34, name: "權杖王后", arcana: "wands", number: "Queen",
    keywords: ["自信", "獨立", "熱情", "魅力"],
    upright: "充滿魅力、熱情與自信，你的能量感染著周圍的人。相信自己的直覺與創造力。",
    reversed: "自我懷疑或情緒化，可能展現出強勢的一面。找回內在的溫暖與自信。",
    symbol: "wand"
  },
  {
    id: 35, name: "權杖國王", arcana: "wands", number: "King",
    keywords: ["領導力", "遠見", "影響力", "創業"],
    upright: "以遠見和熱情領導他人，你有能力將願景化為現實。發揮你的影響力與魅力。",
    reversed: "專制或衝動，可能難以聆聽他人意見。培養耐心與包容，才是真正的領袖。",
    symbol: "wand"
  },

  // ── 小阿爾克那：聖杯（Cups）──
  {
    id: 36, name: "聖杯一", arcana: "cups", number: "A",
    keywords: ["新愛情", "情感流動", "直覺", "靈性"],
    upright: "情感的新開始，心門敞開迎接愛與喜悅。直覺與靈性的力量正在覺醒。",
    reversed: "情感受阻或壓抑，難以表達內心。慢慢敞開心扉，允許自己感受。",
    symbol: "cup"
  },
  {
    id: 37, name: "聖杯二", arcana: "cups", number: "2",
    keywords: ["夥伴關係", "吸引力", "連結", "合作"],
    upright: "深厚的情感連結與和諧的夥伴關係。兩人之間有著強烈的相互吸引與理解。",
    reversed: "關係失衡或溝通不良，可能有分歧。誠實溝通是修復關係的關鍵。",
    symbol: "cup"
  },
  {
    id: 38, name: "聖杯三", arcana: "cups", number: "3",
    keywords: ["慶祝", "友誼", "社群", "歡樂"],
    upright: "與摯友一同慶祝，充滿歡笑與溫暖。珍惜這段美好的社群關係與友誼。",
    reversed: "社交過度或朋友間有摩擦。檢視關係的品質，不要流於表面的熱鬧。",
    symbol: "cup"
  },
  {
    id: 39, name: "聖杯四", arcana: "cups", number: "4",
    keywords: ["冷漠", "沉思", "錯失機會", "內省"],
    upright: "過度沉浸在內心世界，可能錯失眼前的機會。抬起頭來，看看周遭的禮物。",
    reversed: "從冷漠中甦醒，開始對生活重燃興趣。把握這股新動力，積極行動。",
    symbol: "cup"
  },
  {
    id: 40, name: "聖杯五", arcana: "cups", number: "5",
    keywords: ["失落", "悲傷", "後悔", "轉化"],
    upright: "面對失落與悲傷是必要的，讓自己充分感受。但別忘了，仍有兩杯沒有倒覆。",
    reversed: "從悲傷中走出，開始接受失去。你已經準備好放下，繼續前行了。",
    symbol: "cup"
  },
  {
    id: 41, name: "聖杯六", arcana: "cups", number: "6",
    keywords: ["童年", "懷舊", "純真", "禮物"],
    upright: "美好的童年記憶與純真的快樂。可能有來自過去的禮物或久違的重逢。",
    reversed: "活在過去的回憶中，難以前進。學習從懷舊中找到力量，而非被它困住。",
    symbol: "cup"
  },
  {
    id: 42, name: "聖杯七", arcana: "cups", number: "7",
    keywords: ["幻想", "選擇", "夢想", "欲望"],
    upright: "面對眾多選擇與誘人的幻想，需要清醒地辨別哪些才是真實可行的。",
    reversed: "從幻覺中清醒，開始務實地追求目標。明確的行動勝過無盡的幻想。",
    symbol: "cup"
  },
  {
    id: 43, name: "聖杯八", arcana: "cups", number: "8",
    keywords: ["離開", "尋求", "失望", "成長"],
    upright: "雖然難捨，但你已感受到這段關係或處境無法繼續滋養你。是時候離開，尋找更深的意義。",
    reversed: "害怕離開的勇氣，或回頭尋找你放棄的東西。再想清楚，也許還有值得珍視的。",
    symbol: "cup"
  },
  {
    id: 44, name: "聖杯九", arcana: "cups", number: "9",
    keywords: ["滿足", "心願實現", "幸福", "感恩"],
    upright: "心願成真，充滿滿足感與幸福。感恩此刻所擁有的一切，享受豐盛的當下。",
    reversed: "表面的滿足掩蓋著內心的空虛。重新思考什麼才是真正讓你快樂的事。",
    symbol: "cup"
  },
  {
    id: 45, name: "聖杯十", arcana: "cups", number: "10",
    keywords: ["圓滿", "幸福家庭", "愛的完成", "和諧"],
    upright: "情感的完美圓滿與家庭的幸福和諧。你所渴望的愛與歸屬已然到來。",
    reversed: "家庭失和或理想破滅。尋找問題的根源，用溝通與愛重建和諧。",
    symbol: "cup"
  },
  {
    id: 46, name: "聖杯侍從", arcana: "cups", number: "Page",
    keywords: ["直覺", "創意訊息", "情感探索", "夢想"],
    upright: "直覺力增強，可能收到令你驚喜的情感消息。對創意與夢想保持開放的心。",
    reversed: "情緒化或不成熟的感情表達。學習以更成熟的方式表達你的感受。",
    symbol: "cup"
  },
  {
    id: 47, name: "聖杯騎士", arcana: "cups", number: "Knight",
    keywords: ["浪漫", "魅力", "追求", "情感冒險"],
    upright: "以浪漫與真誠追求你心所向，帶著情感的熱忱勇敢前進。也許有追求者出現。",
    reversed: "情感不穩定或逃避承諾。建立可靠的情感根基，比短暫的浪漫更重要。",
    symbol: "cup"
  },
  {
    id: 48, name: "聖杯王后", arcana: "cups", number: "Queen",
    keywords: ["同理心", "情感智慧", "療癒", "直覺"],
    upright: "你擁有深刻的同理心與情感智慧。透過傾聽與理解，你能療癒自己與周圍的人。",
    reversed: "情緒化或過度敏感，可能容易受傷。建立健康的情感界限，保護自己的能量。",
    symbol: "cup"
  },
  {
    id: 49, name: "聖杯國王", arcana: "cups", number: "King",
    keywords: ["情感成熟", "智慧", "慈悲", "平衡"],
    upright: "以成熟與智慧駕馭情感，在理性與感性之間取得美好的平衡。你是值得依靠的定心之人。",
    reversed: "情感操控或逃避感受。誠實面對自己的感受，才能建立真實的連結。",
    symbol: "cup"
  },

  // ── 小阿爾克那：寶劍（Swords）──
  {
    id: 50, name: "寶劍一", arcana: "swords", number: "A",
    keywords: ["真相", "清晰", "突破", "決斷"],
    upright: "清晰的思維斬斷迷霧，真相大白。用理性與決斷力突破困境，做出明智的選擇。",
    reversed: "思維混亂或說謊。停止自我欺騙，以誠實的態度面對現實。",
    symbol: "sword"
  },
  {
    id: 51, name: "寶劍二", arcana: "swords", number: "2",
    keywords: ["僵局", "猶豫", "選擇困難", "平衡"],
    upright: "面臨困難的決定，暫時陷入僵局。蒙住雙眼反而能讓你依靠直覺做出選擇。",
    reversed: "資訊超載，難以決斷。收集所需資訊後，相信自己做出選擇的能力。",
    symbol: "sword"
  },
  {
    id: 52, name: "寶劍三", arcana: "swords", number: "3",
    keywords: ["心碎", "悲傷", "失去", "傷痛"],
    upright: "心碎與痛苦是難免的，允許自己悲傷。在傷口中，往往藏著最深刻的成長契機。",
    reversed: "從傷痛中走出，開始放下與原諒。療癒需要時間，但你已踏上了康復之路。",
    symbol: "sword"
  },
  {
    id: 53, name: "寶劍四", arcana: "swords", number: "4",
    keywords: ["休息", "恢復", "靜思", "暫停"],
    upright: "你需要休息與靜養，讓身心充電。暫時從忙碌中抽離，才能以更好的狀態重返戰場。",
    reversed: "強迫自己休息或無法放鬆。尋找真正讓你感到平靜的方式，給自己許可放慢腳步。",
    symbol: "sword"
  },
  {
    id: 54, name: "寶劍五", arcana: "swords", number: "5",
    keywords: ["衝突", "失敗", "代價", "空洞勝利"],
    upright: "即使贏了，也可能是空洞的勝利。思考衝突的代價，有時妥協才是真正的智慧。",
    reversed: "從敗中學習，過去的衝突正在平息。原諒自己與他人，找回和諧。",
    symbol: "sword"
  },
  {
    id: 55, name: "寶劍六", arcana: "swords", number: "6",
    keywords: ["過渡", "離去", "康復", "前行"],
    upright: "離開困境，駛向平靜的水域。雖然傷痕猶在，但你正在走向更好的未來。",
    reversed: "被困在過去，難以前行。你有力量跨越這道關卡，只需踏出那一步。",
    symbol: "sword"
  },
  {
    id: 56, name: "寶劍七", arcana: "swords", number: "7",
    keywords: ["謀略", "欺騙", "策略", "獨行"],
    upright: "需要策略與謀略，但要注意自己的行為是否誠實。獨行可能是必要的，但別欺騙自己。",
    reversed: "良心發現，回頭走正路。誠實雖然難，但比欺騙帶來的後果要好得多。",
    symbol: "sword"
  },
  {
    id: 57, name: "寶劍八", arcana: "swords", number: "8",
    keywords: ["束縛", "受困", "自限", "無助"],
    upright: "你感覺被困住，但其實繩索是可以掙脫的。限制你的是自己的信念，而非現實。",
    reversed: "開始從自我設限中解放。你比你想像的更有能力，相信自己能找到出路。",
    symbol: "sword"
  },
  {
    id: 58, name: "寶劍九", arcana: "swords", number: "9",
    keywords: ["焦慮", "噩夢", "憂慮", "黑暗"],
    upright: "焦慮與恐懼在深夜中放大，但大多數的恐懼只存在於想像中。與信任的人分享你的憂慮。",
    reversed: "從焦慮的深淵中走出。問題並沒有你想像的那麼嚴重，黎明終究會到來。",
    symbol: "sword"
  },
  {
    id: 59, name: "寶劍十", arcana: "swords", number: "10",
    keywords: ["結局", "失敗", "傷痛", "黎明前最黑暗"],
    upright: "一段痛苦的結束，但也是新生的黎明。接受這個終點，它會為更好的開始清出空間。",
    reversed: "緩慢地從谷底爬起，最壞的時刻已過。相信自己有能力重新站起來。",
    symbol: "sword"
  },
  {
    id: 60, name: "寶劍侍從", arcana: "swords", number: "Page",
    keywords: ["好奇", "學習", "敏銳", "消息"],
    upright: "充滿好奇心與學習的渴望，敏銳地觀察周遭的一切。新的想法或消息即將到來。",
    reversed: "八卦或言語傷人，可能傳播錯誤的消息。在說話前先確認事實。",
    symbol: "sword"
  },
  {
    id: 61, name: "寶劍騎士", arcana: "swords", number: "Knight",
    keywords: ["行動", "衝動", "果斷", "風馳電掣"],
    upright: "以迅雷不及掩耳的速度衝向目標，果斷行動。但速度之餘，也需保持清醒的頭腦。",
    reversed: "衝動魯莽，可能在沒有計畫的情況下行事。先想後做，避免日後後悔。",
    symbol: "sword"
  },
  {
    id: 62, name: "寶劍王后", arcana: "swords", number: "Queen",
    keywords: ["獨立", "直接", "智慧", "清醒"],
    upright: "以清醒的頭腦與獨立的思考面對現實，不允許情緒蒙蔽判斷。你的智慧是你的盔甲。",
    reversed: "冷漠或刻薄，可能用言語傷人。在追求真理的同時，也不忘保持慈悲之心。",
    symbol: "sword"
  },
  {
    id: 63, name: "寶劍國王", arcana: "swords", number: "King",
    keywords: ["理性", "權威", "公正", "決策"],
    upright: "以理性、公正與權威做出決策，你是值得信賴的仲裁者。堅守原則，不被情緒左右。",
    reversed: "濫用權威或冷酷無情。智慧的領導者懂得兼顧理性與人情味。",
    symbol: "sword"
  },

  // ── 小阿爾克那：錢幣（Pentacles）──
  {
    id: 64, name: "錢幣一", arcana: "pentacles", number: "A",
    keywords: ["繁榮", "財富", "新機遇", "物質"],
    upright: "物質與財務的新機會到來。這是打下穩固根基的好時機，抓住這份豐盛的禮物。",
    reversed: "財務機會受阻或決策失誤。謹慎評估風險，不要把雞蛋放在同一個籃子裡。",
    symbol: "pentacle"
  },
  {
    id: 65, name: "錢幣二", arcana: "pentacles", number: "2",
    keywords: ["平衡", "彈性", "多工", "適應"],
    upright: "在多項事務之間靈活周旋，保持動態的平衡。你有能力同時應對多種挑戰。",
    reversed: "難以平衡各方需求，感到不知所措。列出優先順序，一次專注做好一件事。",
    symbol: "pentacle"
  },
  {
    id: 66, name: "錢幣三", arcana: "pentacles", number: "3",
    keywords: ["合作", "技能", "學習", "成就"],
    upright: "與他人合作共創成就，你的技能在團隊中大放異彩。持續學習讓你的價值不斷提升。",
    reversed: "合作不順暢，技能被忽視。尋找能欣賞你才能的環境，或改善溝通方式。",
    symbol: "pentacle"
  },
  {
    id: 67, name: "錢幣四", arcana: "pentacles", number: "4",
    keywords: ["保守", "安全感", "控制", "穩固"],
    upright: "謹慎地守護你的資源，安全感是重要的。但也要注意不要因過度保守而錯失機會。",
    reversed: "財務不穩定或過度節儉。找到儲蓄與享樂之間的健康平衡點。",
    symbol: "pentacle"
  },
  {
    id: 68, name: "錢幣五", arcana: "pentacles", number: "5",
    keywords: ["困難", "貧乏", "孤立", "逆境"],
    upright: "正在經歷財務或物質上的困難，但幫助就在身旁。別因驕傲而拒絕伸出的援手。",
    reversed: "從困境中逐漸復甦，物質狀況正在改善。一步一步地重建你的穩定根基。",
    symbol: "pentacle"
  },
  {
    id: 69, name: "錢幣六", arcana: "pentacles", number: "6",
    keywords: ["慷慨", "給予", "接受", "公平"],
    upright: "慷慨地給予或優雅地接受，能量的流動創造豐盛。在施與受之間找到平衡。",
    reversed: "施予有附帶條件，或接受帶來依賴。確保你的慷慨是出於真心，而非操控。",
    symbol: "pentacle"
  },
  {
    id: 70, name: "錢幣七", arcana: "pentacles", number: "7",
    keywords: ["評估", "耐心", "長期投資", "成果"],
    upright: "努力已久，是時候評估成果了。長期的投資與耐心正在醞釀豐收，繼續堅持。",
    reversed: "對成果感到不滿意或缺乏耐心。重新評估你的投入策略，調整目標與期望。",
    symbol: "pentacle"
  },
  {
    id: 71, name: "錢幣八", arcana: "pentacles", number: "8",
    keywords: ["勤勞", "技藝精進", "專注", "學徒"],
    upright: "專注地磨練你的技藝，每一分努力都在累積成大師的資本。持續精進，成功指日可待。",
    reversed: "缺乏動力或追求劣質捷徑。回歸基本功，誠實地工作才能建立真正的技能。",
    symbol: "pentacle"
  },
  {
    id: 72, name: "錢幣九", arcana: "pentacles", number: "9",
    keywords: ["豐盛", "獨立", "自給自足", "成就"],
    upright: "你已達到財務獨立與物質豐盛的境界。享受你辛苦打拼換來的成果，犒賞自己。",
    reversed: "過度依賴物質或追求表面繁榮。真正的豐盛來自內心的富足，而非外在的炫耀。",
    symbol: "pentacle"
  },
  {
    id: 73, name: "錢幣十", arcana: "pentacles", number: "10",
    keywords: ["財富傳承", "家族", "穩定", "長久"],
    upright: "建立長久的財富與家族傳承，你的努力惠及下一代。穩定且豐盛的基礎已然成形。",
    reversed: "家族衝突或財務不穩定，可能有遺產糾紛。溝通與協商才能維護共同的利益。",
    symbol: "pentacle"
  },
  {
    id: 74, name: "錢幣侍從", arcana: "pentacles", number: "Page",
    keywords: ["學習", "機會", "實際", "新技能"],
    upright: "投入學習新技能，為未來的財務機會打好基礎。踏實且認真的態度是你最大的資本。",
    reversed: "缺乏專注或追求捷徑。老老實實地學習，紮實的基礎比什麼都重要。",
    symbol: "pentacle"
  },
  {
    id: 75, name: "錢幣騎士", arcana: "pentacles", number: "Knight",
    keywords: ["努力", "可靠", "穩定", "勤勞"],
    upright: "穩健、可靠地朝目標前進，雖然速度不快，但每一步都踏實。你的努力終將獲得回報。",
    reversed: "停滯不前或過度保守，缺乏行動力。適當地冒險，才能突破現狀。",
    symbol: "pentacle"
  },
  {
    id: 76, name: "錢幣王后", arcana: "pentacles", number: "Queen",
    keywords: ["實際", "滋養", "豐盛", "財務智慧"],
    upright: "你有能力打造舒適且豐盛的環境，照顧自己與所愛的人。財務智慧與實際的行動力是你的天賦。",
    reversed: "過度物質化或忽視情感需求。確保你在照顧他人的同時，也照顧好自己。",
    symbol: "pentacle"
  },
  {
    id: 77, name: "錢幣國王", arcana: "pentacles", number: "King",
    keywords: ["財務掌控", "成功", "安全", "商業"],
    upright: "透過穩健的策略與財務智慧達到成功，你是可靠的支柱。你的實際能力創造了持久的安全感。",
    reversed: "過度物質主義或濫用財富。記住，真正的成功包括財務以外的人際關係與內心滿足。",
    symbol: "pentacle"
  }
];

// 隨機抽取指定張數的牌（含正逆位）
function drawCards(count) {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    isReversed: Math.random() < 0.3  // 30% 機率逆位
  }));
}
