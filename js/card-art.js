// ============================================================
//  華麗塔羅牌 SVG 插畫系統 v3 (Mystical Ornate Edition)
//  每張牌擁有高度細緻的古典巴洛克邊框、星塵效果、極致光影與高精細象徵物
// ============================================================

// ── 華麗黃金裝飾邊框 ──
function cardFrame(color1, color2, accent) {
  const uniqId = `grad_${color1.replace('#','')}_${color2.replace('#','')}`;
  return `
  <defs>
    <!-- 背景漸層 -->
    <linearGradient id="bg_${uniqId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${color1}"/>
      <stop offset="60%" stop-color="${color2}"/>
      <stop offset="100%" stop-color="#05010d"/>
    </linearGradient>
    <!-- 金色漸層 -->
    <linearGradient id="gold_grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe699"/>
      <stop offset="30%" stop-color="#d4af37"/>
      <stop offset="70%" stop-color="#aa7c11"/>
      <stop offset="100%" stop-color="#ffe699"/>
    </linearGradient>
    <!-- 放射光暈 -->
    <radialGradient id="halo_${uniqId}" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="rgba(255,230,150,0.18)"/>
      <stop offset="50%" stop-color="rgba(200,100,255,0.05)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
    </radialGradient>
    <!-- 陰影與發光濾鏡 -->
    <filter id="glow_heavy" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <!-- 背景與核心發光 -->
  <rect width="100" height="160" rx="7" fill="url(#bg_${uniqId})"/>
  <rect width="100" height="160" rx="7" fill="url(#halo_${uniqId})"/>
  
  <!-- 星光背景效果 -->
  <g opacity="0.35">
    <circle cx="15" cy="30" r="0.4" fill="#fff"/>
    <circle cx="85" cy="45" r="0.6" fill="#fff"/>
    <circle cx="25" cy="110" r="0.5" fill="#fff"/>
    <circle cx="75" cy="120" r="0.4" fill="#fff"/>
    <circle cx="50" cy="25" r="0.5" fill="#fff"/>
    <circle cx="12" cy="85" r="0.7" fill="#fff"/>
    <circle cx="88" cy="95" r="0.4" fill="#fff"/>
  </g>
  
  <!-- 雙重巴洛克外框 -->
  <rect x="4" y="4" width="92" height="152" rx="5" fill="none" stroke="url(#gold_grad)" stroke-width="1.2" opacity="0.85"/>
  <rect x="7" y="7" width="86" height="146" rx="3.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.5" opacity="0.4"/>
  
  <!-- 華麗角落裝飾 -->
  <g fill="url(#gold_grad)" opacity="0.9">
    <!-- 左上 -->
    <path d="M4,4 L16,4 L16,5 Q10,5 9,10 L9,16 L8,16 L8,8 L4,4 Z"/>
    <circle cx="12" cy="12" r="1" opacity="0.8"/>
    <!-- 右上 -->
    <path d="M96,4 L84,4 L84,5 Q90,5 91,10 L91,16 L92,16 L92,8 L96,4 Z"/>
    <circle cx="88" cy="12" r="1" opacity="0.8"/>
    <!-- 左下 -->
    <path d="M4,156 L16,156 L16,155 Q10,155 9,150 L9,144 L8,144 L8,152 L4,156 Z"/>
    <circle cx="12" cy="148" r="1" opacity="0.8"/>
    <!-- 右下 -->
    <path d="M96,156 L84,156 L84,155 Q90,155 91,150 L91,144 L92,144 L92,152 L96,156 Z"/>
    <circle cx="88" cy="148" r="1" opacity="0.8"/>
  </g>

  <!-- 邊緣蕾絲花邊點綴 -->
  <g stroke="url(#gold_grad)" stroke-width="0.4" fill="none" opacity="0.3">
    <path d="M10,25 C12,30 8,35 10,40 C12,45 8,50 10,55 C12,60 8,65 10,70" />
    <path d="M90,25 C88,30 92,35 90,40 C88,45 92,50 90,55 C88,60 92,65 90,70" />
    <path d="M10,90 C12,95 8,100 10,105 C12,110 8,115 10,120 C12,125 8,130 10,135" />
    <path d="M90,90 C88,95 92,100 90,105 C88,110 92,115 90,120 C88,125 92,130 90,135" />
  </g>
  `;
}

// ── 華麗五芒星 (錢幣) ──
function drawPentacle(cx, cy, r, color, fill='none', opacity=1) {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI * 2 * i / 5) - Math.PI / 2;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const starPath = `M${pts[0]} L${pts[2]} L${pts[4]} L${pts[1]} L${pts[3]} Z`;
  return `
    <g opacity="${opacity}">
      <!-- 外發光與圓環 -->
      <circle cx="${cx}" cy="${cy}" r="${r+2.5}" fill="none" stroke="${color}" stroke-width="1.2" filter="url(#glow_heavy)" opacity="0.4"/>
      <circle cx="${cx}" cy="${cy}" r="${r+1}" fill="rgba(20, 40, 20, 0.4)" stroke="${color}" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="${r-2}" fill="none" stroke="${color}" stroke-width="0.5" stroke-dasharray="1.5,1"/>
      <!-- 五芒星 -->
      <path d="${starPath}" fill="${fill}" stroke="${color}" stroke-width="1" stroke-linejoin="round"/>
      <!-- 中心亮點 -->
      <circle cx="${cx}" cy="${cy}" r="1.5" fill="${color}"/>
    </g>
  `;
}

// ── 華麗聖杯 ──
function drawCup(cx, cy, scale=1, color='#c9e8ff') {
  return `
    <g transform="translate(${cx},${cy}) scale(${scale})" filter="url(#glow_heavy)" opacity="0.95">
      <!-- 流動之水效果 -->
      <path d="M-12,-17 Q0,-24 12,-17 C16,-5 12,5 0,8 C-12,5 -16,-5 -12,-17 Z" fill="rgba(100,200,255,0.3)"/>
      <path d="M-8,-19 Q0,-23 8,-19" stroke="#ffffff" stroke-width="0.6" fill="none" opacity="0.6"/>
      <!-- 杯身雕刻 -->
      <path d="M-14,-15 C-15,-2 -11,10 -4,16 L4,16 C11,10 15,-2 14,-15 Z" fill="none" stroke="${color}" stroke-width="1.2"/>
      <ellipse cx="0" cy="-15" rx="14" ry="3.5" fill="none" stroke="${color}" stroke-width="1"/>
      <path d="M-7,-10 Q0,-5 7,-10" stroke="${color}" stroke-width="0.6" fill="none"/>
      <!-- 杯底與十字底座 -->
      <path d="M-3,16 L-3,25 C-3,28 -6,30 -9,31 L9,31 C6,30 3,28 3,25 L3,16 Z" fill="none" stroke="${color}" stroke-width="1"/>
      <line x1="-6" y1="22" x2="6" y2="22" stroke="${color}" stroke-width="0.8"/>
      <!-- 天使翅膀浮雕 -->
      <path d="M0,0 Q-8,-6 -12,0" stroke="${color}" stroke-width="0.5" fill="none"/>
      <path d="M0,0 Q8,-6 12,0" stroke="${color}" stroke-width="0.5" fill="none"/>
    </g>
  `;
}

// ── 華麗寶劍 ──
function drawSword(cx, cy, angle=0, color='#d4d4f0') {
  return `
    <g transform="translate(${cx},${cy}) rotate(${angle})" opacity="0.95">
      <!-- 劍身光暈 -->
      <path d="M-2.5,-38 L0,-43 L2.5,-38 L2.5,10 L-2.5,10 Z" fill="rgba(255,255,255,0.12)" filter="url(#glow_heavy)"/>
      <!-- 劍刃 -->
      <path d="M0,-41 L2.5,-36 L2,12 L-2,12 L-2.5,-36 Z" fill="#ffffff" stroke="${color}" stroke-width="0.8"/>
      <line x1="0" y1="-36" x2="0" y2="12" stroke="${color}" stroke-width="0.5"/>
      <!-- 華麗護手 (翼狀) -->
      <path d="M-13,12 C-8,10 -3,12 0,14 C3,12 8,10 13,12 C10,16 6,17 0,16 C-6,17 -10,16 -13,12 Z" fill="none" stroke="${color}" stroke-width="1"/>
      <circle cx="-13" cy="12" r="1.2" fill="${color}"/>
      <circle cx="13" cy="12" r="1.2" fill="${color}"/>
      <!-- 劍柄與配重飾品 -->
      <rect x="-2" y="16" width="4" height="12" rx="1.5" fill="none" stroke="${color}" stroke-width="0.9"/>
      <circle cx="0" cy="30" r="3" fill="none" stroke="${color}" stroke-width="1"/>
      <circle cx="0" cy="30" r="1" fill="${color}"/>
    </g>
  `;
}

// ── 華麗權杖 ──
function drawWand(cx, cy, color='#ffb86c') {
  return `
    <g transform="translate(${cx},${cy})" opacity="0.95">
      <!-- 權杖本體 (木紋細節與金屬箍) -->
      <rect x="-2.5" y="-36" width="5" height="72" rx="2" fill="none" stroke="${color}" stroke-width="0.9"/>
      <line x1="0" y1="-36" x2="0" y2="36" stroke="rgba(255,255,255,0.3)" stroke-width="0.6"/>
      <!-- 金屬裝飾箍 -->
      <rect x="-3" y="-18" width="6" height="3" fill="${color}"/>
      <rect x="-3" y="18" width="6" height="3" fill="${color}"/>
      <!-- 頂部華麗水晶寶石 -->
      <g filter="url(#glow_heavy)">
        <polygon points="0,-48 -7,-40 0,-32 7,-40" fill="none" stroke="${color}" stroke-width="1"/>
        <circle cx="0" cy="-40" r="3.5" fill="rgba(255,184,108,0.4)" stroke="${color}" stroke-width="0.6"/>
        <line x1="0" y1="-48" x2="0" y2="-32" stroke="${color}" stroke-width="0.5"/>
        <line x1="-7" y1="-40" x2="7" y2="-40" stroke="${color}" stroke-width="0.5"/>
      </g>
      <!-- 纏繞嫩葉 -->
      <path d="M-2.5,-10 Q-8,-14 -4,-20 Q-2,-14 -2.5,-10" fill="${color}" opacity="0.8"/>
      <path d="M2.5,10 Q8,6 4,0 Q2,6 2.5,10" fill="${color}" opacity="0.8"/>
      <!-- 火焰光圈 -->
      <circle cx="0" cy="-40" r="10" fill="none" stroke="${color}" stroke-dasharray="2,3" stroke-width="0.5" opacity="0.4"/>
    </g>
  `;
}

// ── 符號形狀工具 ──
function starShape(cx, cy, r1, r2, pts, fill, opacity=1) {
  const arr = [];
  for (let i = 0; i < pts * 2; i++) {
    const a = (Math.PI * i / pts) - Math.PI / 2;
    const r = i % 2 === 0 ? r1 : r2;
    arr.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return `<polygon points="${arr.join(' ')}" fill="${fill}" opacity="${opacity}"/>`;
}

function crescent(cx, cy, r, color, opacity=1) {
  return `
    <path d="M${cx},${cy-r} A${r},${r} 0 1,1 ${cx},${cy+r} A${r*0.7},${r*0.7} 0 1,0 ${cx},${cy-r}"
          fill="${color}" opacity="${opacity}"/>`;
}

// ══════════════════════════════════════════════
//  22張大阿爾克那極致雕琢
// ══════════════════════════════════════════════
const MAJOR_ART = {
  // 0 愚者
  fool: () => `
    ${cardFrame('#0e365c','#041226','#ffd700')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600" letter-spacing="1">0</text>
    
    <!-- 耀眼太陽 -->
    <circle cx="82" cy="35" r="9" fill="rgba(255,240,180,0.2)" filter="url(#glow_heavy)"/>
    ${starShape(82, 35, 12, 6, 12, 'url(#gold_grad)', 0.9)}
    <circle cx="82" cy="35" r="4" fill="#ffffff"/>

    <!-- 風捲線條 -->
    <path d="M15,60 C30,50 45,70 60,55 C70,45 80,60 90,50" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.8" stroke-dasharray="3,3"/>

    <!-- 險峻山崖 -->
    <path d="M0,120 L25,82 C30,76 38,78 43,84 L52,98 L68,82 C72,78 78,79 82,85 L100,110 L100,160 L0,160 Z" fill="#061224" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <path d="M0,125 L20,95 L40,115 L65,90 L85,120" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.6"/>

    <!-- 旅人剪影與背包 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="35" cy="65" r="6" /> <!-- 頭 -->
      <path d="M35,71 L32,92 M32,92 L22,115 M32,92 L42,115 M35,74 L25,82 M35,74 L48,82" stroke-linecap="round"/>
      <!-- 包袱棒 -->
      <line x1="44" y1="78" x2="60" y2="62" stroke-width="0.9" opacity="0.8"/>
      <!-- 魔法背囊 -->
      <polygon points="60,62 65,58 63,53 57,55 58,60" fill="rgba(212,175,55,0.2)"/>
    </g>

    <!-- 忠誠的小白狗 -->
    <path d="M14,95 C16,92 20,92 22,96 L25,102 C26,105 23,108 20,108 C17,108 15,104 14,95 Z" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <circle cx="21" cy="98" r="0.8" fill="url(#gold_grad)"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">愚者</text>
  `,

  // I 魔術師
  magician: () => `
    ${cardFrame('#420a59','#190226','#e0a0ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">I</text>
    
    <!-- 無限大符號 ∞ -->
    <path d="M36,34 Q41,29 46,34 Q51,39 56,34 Q61,29 66,34 Q61,39 56,34 Q51,29 46,34 Z" 
          fill="none" stroke="url(#gold_grad)" stroke-width="1.3" filter="url(#glow_heavy)"/>

    <!-- 魔法陣背景 -->
    <circle cx="50" cy="70" r="28" fill="none" stroke="rgba(224,160,255,0.12)" stroke-width="0.8" stroke-dasharray="2,2"/>
    <circle cx="50" cy="70" r="25" fill="none" stroke="rgba(224,160,255,0.08)" stroke-width="0.5"/>

    <!-- 魔術師人物軀幹 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="55" r="7.5"/>
      <path d="M50,62.5 L50,90 M40,70 Q50,71 60,68 M50,90 L42,112 M50,90 L58,112"/>
      <!-- 指向天空的手杖 -->
      <line x1="60" y1="68" x2="68" y2="44" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="68" cy="44" r="1.5" fill="url(#gold_grad)"/>
    </g>

    <!-- 祭壇/供桌 -->
    <rect x="22" y="112" width="56" height="4" rx="2" fill="none" stroke="url(#gold_grad)" stroke-width="1"/>
    
    <!-- 聖杯與寶劍 (桌上四元素) -->
    <g transform="translate(30, 100) scale(0.3)">${drawCup(0,0,1,'#ffd700')}</g>
    <g transform="translate(68, 100) scale(0.3)">${drawSword(0,0,0,'#ffd700')}</g>
    
    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">魔術師</text>
  `,

  // II 女祭司
  high_priestess: () => `
    ${cardFrame('#061c38','#020b18','#80d8ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">II</text>
    
    <!-- 雙柱 B (黑) & J (白) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <!-- B 柱 -->
      <rect x="15" y="45" width="8" height="75" rx="1" fill="#040912"/>
      <text x="19" y="85" text-anchor="middle" font-size="8" font-family="Cinzel" fill="url(#gold_grad)" font-weight="bold">B</text>
      <!-- J 柱 -->
      <rect x="77" y="45" width="8" height="75" rx="1" fill="rgba(255,255,255,0.06)"/>
      <text x="81" y="85" text-anchor="middle" font-size="8" font-family="Cinzel" fill="url(#gold_grad)" font-weight="bold">J</text>
      <!-- 柱頭雕花 -->
      <path d="M12,45 L26,45 M15,48 L23,48 M74,45 L88,45 M77,48 L85,48"/>
    </g>

    <!-- 石榴帷幕背景 -->
    <path d="M23,55 Q50,48 77,55" fill="none" stroke="rgba(201,168,76,0.3)" stroke-width="0.7"/>
    <circle cx="35" cy="53" r="1.5" fill="url(#gold_grad)" opacity="0.6"/>
    <circle cx="50" cy="51" r="1.5" fill="url(#gold_grad)" opacity="0.6"/>
    <circle cx="65" cy="53" r="1.5" fill="url(#gold_grad)" opacity="0.6"/>

    <!-- 女祭司本體與月亮冠 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="62" r="7"/>
      <path d="M44,69 Q50,71 56,69 M44,69 L42,108 M56,69 L58,108"/>
      <!-- 三重月亮冠 -->
      <circle cx="50" cy="51" r="2.5"/>
      <path d="M44,51 Q47,54 50,51 Q53,54 56,51" />
      <!-- 胸前十字架 -->
      <path d="M50,72 L50,82 M45,77 L55,77" stroke-width="1"/>
      <!-- 手持 TORA 卷軸 -->
      <rect x="42" y="86" width="16" height="8" rx="1" fill="rgba(0,0,0,0.4)" stroke-width="0.8"/>
      <text x="50" y="92" text-anchor="middle" font-size="5" fill="url(#gold_grad)" font-family="Cinzel" font-weight="bold">TORA</text>
    </g>

    <!-- 腳下彎月 -->
    ${crescent(50, 120, 10, 'url(#gold_grad)', 0.95)}

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">女祭司</text>
  `,

  // III 女皇
  empress: () => `
    ${cardFrame('#103316','#051408','#a3e280')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">III</text>
    
    <!-- 十二顆星頭冠 -->
    <g opacity="0.85">
      <ellipse cx="50" cy="46" rx="9" ry="2.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.7"/>
      ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(a => {
        const r = 46;
        const rad = a * Math.PI / 180;
        return `<circle cx="${50+9*Math.cos(rad)}" cy="${46+2.5*Math.sin(rad)}" r="0.8" fill="#fff"/>`;
      }).join('')}
    </g>

    <!-- 女皇寶座與靠墊 -->
    <path d="M30,70 C30,55 70,55 70,70 L73,115 L27,115 Z" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.6"/>

    <!-- 女皇本體 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="57" r="7"/>
      <path d="M44,64 L41,105 Q50,110 59,105 L56,64"/>
      <!-- 金色權杖 -->
      <line x1="57" y1="65" x2="68" y2="44" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="68" cy="44" r="2" fill="url(#gold_grad)"/>
    </g>

    <!-- 桃心盾牌 (金星符號 ♀) -->
    <g transform="translate(24, 98) scale(0.9)" stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <path d="M10,2 C10,2 6,-2 2,2 C-2,6 2,12 10,18 C18,12 22,6 18,2 C14,-2 10,2 10,2 Z" fill="rgba(212,175,55,0.15)"/>
      <line x1="10" y1="18" x2="10" y2="24"/>
      <line x1="6" y1="21" x2="14" y2="21"/>
    </g>

    <!-- 茂密麥田 -->
    <path d="M10,125 Q20,115 30,122 M25,125 Q35,112 45,120 M40,125 Q50,115 60,123 M55,125 Q68,110 80,120 M75,125 Q85,115 90,122" 
          fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">女皇</text>
  `,

  // IV 皇帝
  emperor: () => `
    ${cardFrame('#450c0c','#1c0404','#ffa500')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">IV</text>
    
    <!-- 斑駁的荒涼紅山背景 -->
    <path d="M0,85 L20,60 L45,75 L70,55 L100,75 L100,120 L0,120 Z" fill="rgba(100,20,20,0.3)" stroke="none"/>
    <path d="M0,85 L20,60 M70,55 L100,75" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>

    <!-- 雄偉牡羊石雕寶座 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <rect x="25" y="65" width="50" height="60" rx="2" fill="rgba(0,0,0,0.5)"/>
      <!-- 左牡羊頭 -->
      <circle cx="25" cy="65" r="4"/>
      <path d="M22,65 A3,3 0 1,0 28,65" stroke-width="0.7"/>
      <!-- 右牡羊頭 -->
      <circle cx="75" cy="65" r="4"/>
      <path d="M72,65 A3,3 0 1,0 78,65" stroke-width="0.7"/>
    </g>

    <!-- 皇帝本體 (身披紅袍、內穿鎖子甲) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="56" r="6.5"/>
      <path d="M44,62.5 L42,105 Q50,110 58,105 L56,62.5"/>
      <!-- 皇冠 -->
      <polygon points="45,49 50,44 55,49 53,51 47,51" fill="url(#gold_grad)"/>
      <!-- 金球與安卡權杖 (Ankh) -->
      <line x1="60" y1="75" x2="68" y2="55" stroke-width="1.3"/>
      <circle cx="68" cy="52" r="3" stroke-width="1"/>
      <line x1="65" y1="55" x2="71" y2="55"/>
      <!-- 左手持金球 -->
      <circle cx="34" cy="72" r="2.5" fill="url(#gold_grad)"/>
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">皇帝</text>
  `,

  // V 教皇
  hierophant: () => `
    ${cardFrame('#280d42','#0f031c','#c0a0e0')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">V</text>
    
    <!-- 三重冕 (Triple Crown) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <ellipse cx="50" cy="38" rx="8" ry="2"/>
      <ellipse cx="50" cy="34" rx="6" ry="1.8"/>
      <ellipse cx="50" cy="30" rx="4" ry="1.5"/>
      <line x1="50" y1="28" x2="50" y2="25"/>
    </g>

    <!-- 三重十字聖杖 -->
    <g stroke="url(#gold_grad)" stroke-width="1" fill="none">
      <line x1="28" y1="48" x2="28" y2="105"/>
      <!-- 三橫杠 -->
      <line x1="23" y1="54" x2="33" y2="54"/>
      <line x1="24" y1="60" x2="32" y2="60"/>
      <line x1="25" y1="66" x2="31" y2="66"/>
    </g>

    <!-- 教皇主體 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="53" r="7"/>
      <path d="M44,60 C40,75 42,105 44,115 L56,115 C58,105 60,75 56,60 Z" fill="rgba(255,255,255,0.03)"/>
      <!-- 右手祝福手勢 -->
      <path d="M57,58 L63,48 M60,54 L65,49" stroke-linecap="round"/>
    </g>

    <!-- 底部交疊雙鑰匙 (金與銀) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none" opacity="0.8">
      <!-- 鑰匙1 -->
      <circle cx="44" cy="125" r="3"/>
      <line x1="44" y1="128" x2="54" y2="118"/>
      <path d="M52,120 L55,123 L53,125"/>
      <!-- 鑰匙2 -->
      <circle cx="56" cy="125" r="3"/>
      <line x1="56" y1="128" x2="46" y2="118"/>
      <path d="M48,120 L45,123 L47,125"/>
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">教皇</text>
  `,

  // VI 戀人
  lovers: () => `
    ${cardFrame('#3d0620','#1a010c','#ffb6c1')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">VI</text>
    
    <!-- 耀眼太陽 (純白光圈) -->
    <circle cx="50" cy="40" r="16" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>
    ${starShape(50, 40, 18, 9, 16, 'url(#gold_grad)', 0.4)}

    <!-- 天使翼與祈福之手 -->
    <path d="M22,35 Q35,22 50,45 Q65,22 78,35 C70,45 60,42 50,55 C40,42 30,45 22,35 Z" 
          fill="rgba(255,200,220,0.12)" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <circle cx="50" cy="38" r="4" fill="url(#gold_grad)"/>

    <!-- 善惡雙樹 -->
    <!-- 智慧蘋果樹 (蛇纏繞) -->
    <g stroke="url(#gold_grad)" stroke-width="0.8" fill="none">
      <path d="M20,75 L20,115 M20,85 C14,80 12,90 20,95 M20,90 C26,85 28,95 20,100" />
      <circle cx="16" cy="84" r="1.5" fill="#ff4d4d"/>
      <circle cx="24" cy="94" r="1.5" fill="#ff4d4d"/>
      <!-- 蛇 -->
      <path d="M20,110 Q24,105 20,100 Q16,95 20,90" stroke="#70e070" stroke-width="0.6"/>
    </g>
    <!-- 生命樹 (火焰葉) -->
    <g stroke="url(#gold_grad)" stroke-width="0.8" fill="none">
      <path d="M80,75 L80,115 M80,85 Q86,80 80,95 Q74,80 80,85" />
      <circle cx="80" cy="80" r="1.2" fill="#ff9933"/>
      <circle cx="76" cy="90" r="1.2" fill="#ff9933"/>
      <circle cx="84" cy="90" r="1.2" fill="#ff9933"/>
    </g>

    <!-- 戀人 (亞當與夏娃) -->
    <g stroke="url(#gold_grad)" stroke-width="1" fill="none">
      <!-- 夏娃 (女) -->
      <circle cx="36" cy="78" r="5.5"/>
      <path d="M36,83.5 L34,112 M36,86 L30,95 M36,86 L42,95" stroke-linecap="round"/>
      <!-- 亞當 (男) -->
      <circle cx="64" cy="78" r="5.5"/>
      <path d="M64,83.5 L66,112 M64,86 L58,95 M64,86 L70,95" stroke-linecap="round"/>
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">戀人</text>
  `,

  // VII 戰車
  chariot: () => `
    ${cardFrame('#061c47','#020b1f','#80c0ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">VII</text>
    
    <!-- 星空篷頂 -->
    <path d="M24,40 Q50,30 76,40 L76,55 Q50,45 24,55 Z" fill="rgba(128,192,255,0.15)" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <circle cx="38" cy="46" r="0.8" fill="#fff"/>
    <circle cx="50" cy="43" r="0.8" fill="#fff"/>
    <circle cx="62" cy="46" r="0.8" fill="#fff"/>

    <!-- 戰士本體 (雙肩月牙) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="57" r="6"/>
      <path d="M44,63 L44,80 L56,80 L56,63 Z" fill="rgba(255,255,255,0.05)"/>
      <!-- 肩甲月牙 -->
      ${crescent(42, 63, 3, 'url(#gold_grad)', 0.8)}
      ${crescent(58, 63, 3, 'url(#gold_grad)', 0.8)}
    </g>

    <!-- 戰車前盾與雙翼 (Winged Globe) -->
    <rect x="34" y="80" width="32" height="22" rx="2" fill="none" stroke="url(#gold_grad)" stroke-width="1"/>
    <!-- 圓盾與翼 -->
    <circle cx="50" cy="91" r="4.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <path d="M38,91 Q50,86 62,91" stroke="url(#gold_grad)" stroke-width="0.8" fill="none"/>
    <line x1="50" y1="88" x2="50" y2="94" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <!-- 雙人面獅身像 (Sphinx) - 黑與白 -->
    <!-- 黑 Sphinx -->
    <path d="M22,102 C18,102 12,112 12,125 L30,125 C30,115 26,102 22,102 Z" fill="#040812" stroke="url(#gold_grad)" stroke-width="0.9"/>
    <circle cx="21" cy="107" r="2.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <!-- 白 Sphinx -->
    <path d="M78,102 C82,102 88,112 88,125 L70,125 C70,115 74,102 78,102 Z" fill="rgba(255,255,255,0.1)" stroke="url(#gold_grad)" stroke-width="0.9"/>
    <circle cx="79" cy="107" r="2.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">戰車</text>
  `,

  // VIII 力量
  strength: () => `
    ${cardFrame('#472605','#1f1002','#ffbf00')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">VIII</text>
    
    <!-- 頭頂無限大符號 -->
    <path d="M38,34 Q43,29 46,34 Q51,39 56,34 Q61,29 66,34 Q61,39 56,34 Q51,29 46,34 Z" 
          fill="none" stroke="url(#gold_grad)" stroke-width="1.2" filter="url(#glow_heavy)"/>

    <!-- 溫柔的少女 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="38" cy="54" r="6"/>
      <path d="M38,60 C36,70 34,95 32,108 M38,64 L28,74 M38,64 Q46,65 52,60" stroke-linecap="round"/>
    </g>

    <!-- 威猛的紅獅 (被少女輕撫) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <!-- 獅頭 -->
      <path d="M54,64 C50,68 48,78 54,82 C60,86 66,80 68,76 C70,72 68,64 54,64 Z" fill="rgba(200,100,50,0.15)"/>
      <circle cx="60" cy="72" r="1" fill="url(#gold_grad)"/>
      <!-- 獅鬃與尾巴 -->
      <path d="M50,68 C46,62 42,75 52,80 M68,76 C75,72 82,85 86,95 L84,115" stroke-width="0.8"/>
      <!-- 少女手中的花環纏繞獅頭 -->
      <path d="M38,68 C43,72 48,74 54,72" stroke="#a0e070" stroke-dasharray="1.5,1.5" stroke-width="0.8"/>
      <circle cx="43" cy="71" r="1" fill="#ff80a0"/>
      <circle cx="49" cy="73" r="1" fill="#ff80a0"/>
    </g>

    <!-- 遠景山丘 -->
    <path d="M0,130 Q30,115 60,125 Q80,130 100,120 L100,160 L0,160 Z" fill="#140b03" stroke="url(#gold_grad)" stroke-width="0.6"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">力量</text>
  `,

  // IX 隱士
  hermit: () => `
    ${cardFrame('#121226','#060612','#e8c078')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">IX</text>
    
    <!-- 耀眼的六芒星燈籠 (大光效) -->
    <g transform="translate(68, 52)">
      <circle cx="0" cy="0" r="14" fill="rgba(255,230,150,0.15)" filter="url(#glow_heavy)"/>
      <!-- 六芒星 -->
      ${starShape(0, 0, 8, 3.5, 6, '#ffffff', 0.95)}
      <!-- 燈籠框 -->
      <circle cx="0" cy="0" r="9" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
      <line x1="0" y1="9" x2="0" y2="18" stroke="url(#gold_grad)" stroke-width="0.8"/>
    </g>

    <!-- 隱士本體 (身披厚重長袍) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="42" cy="56" r="6"/>
      <!-- 長袍兜帽與身形 -->
      <path d="M38,50 C38,50 35,58 35,66 Q30,85 30,115 L52,115 Q50,85 47,62 Z" fill="rgba(255,255,255,0.03)"/>
      <path d="M38,62 C34,65 37,78 40,82" stroke-width="0.8"/>
      <!-- 黃金手杖 -->
      <line x1="28" y1="65" x2="20" y2="120" stroke-width="1.3" stroke-linecap="round"/>
    </g>

    <!-- 孤獨冰山 -->
    <path d="M0,135 L30,110 L45,122 L70,105 L100,128 L100,160 L0,160 Z" fill="#080814" stroke="url(#gold_grad)" stroke-width="0.7"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">隱士</text>
  `,

  // X 命運之輪
  wheel: () => `
    ${cardFrame('#16073b','#08021c','#d490ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">X</text>
    
    <!-- 巨輪 (極致複雜線條，包含鍊金符號) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <circle cx="50" cy="75" r="30" filter="url(#glow_heavy)" opacity="0.85"/>
      <circle cx="50" cy="75" r="24"/>
      <circle cx="50" cy="75" r="8"/>
      <!-- 輪輻 -->
      <line x1="50" y1="45" x2="50" y2="105"/>
      <line x1="20" y1="75" x2="80" y2="75"/>
      <line x1="29" y1="54" x2="71" y2="96"/>
      <line x1="71" y1="54" x2="29" y2="96"/>
      
      <!-- 輪上神秘字符 -->
      <text x="50" y="53" text-anchor="middle" font-size="6" fill="#fff" font-family="Cinzel" font-weight="bold">T</text>
      <text x="71" y="77" text-anchor="middle" font-size="6" fill="#fff" font-family="Cinzel" font-weight="bold">A</text>
      <text x="50" y="102" text-anchor="middle" font-size="6" fill="#fff" font-family="Cinzel" font-weight="bold">R</text>
      <text x="29" y="77" text-anchor="middle" font-size="6" fill="#fff" font-family="Cinzel" font-weight="bold">O</text>
    </g>

    <!-- 頂端守護人面獅身像 (Sphinx with Sword) -->
    <g transform="translate(50, 40) scale(0.85)" stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <path d="M-8,5 L-12,5 -15,10 -15,18 L15,18 C15,10 12,5 8,5 Z" fill="#0c0424"/>
      <circle cx="0" cy="2" r="3.5"/>
      <!-- 垂直巨劍 -->
      <line x1="0" y1="-8" x2="0" y2="4" stroke-width="1.1"/>
      <line x1="-3" y1="-5" x2="3" y2="-5"/>
    </g>

    <!-- 爬升的阿努比斯 (Anubis) 與 降落的提豐 (Typhon 蛇) -->
    <path d="M80,85 C82,80 84,70 78,65 C74,60 76,55 78,50" stroke="#ff8080" stroke-width="0.8" fill="none"/>
    <path d="M20,65 C16,70 18,80 22,85 C26,90 22,100 18,105" stroke="#70e070" stroke-width="0.8" fill="none"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">命運之輪</text>
  `,

  // XI 正義
  justice: () => `
    ${cardFrame('#332103','#140d01','#eec563')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XI</text>
    
    <!-- 後方雙神柱 -->
    <rect x="16" y="42" width="7" height="82" fill="rgba(255,255,255,0.03)" stroke="url(#gold_grad)" stroke-width="0.7" opacity="0.5"/>
    <rect x="77" y="42" width="7" height="82" fill="rgba(255,255,255,0.03)" stroke="url(#gold_grad)" stroke-width="0.7" opacity="0.5"/>

    <!-- 天平秤 (完美對稱平衡) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <line x1="28" y1="72" x2="72" y2="72" stroke-width="1.3" filter="url(#glow_heavy)"/>
      <line x1="50" y1="60" x2="50" y2="72"/>
      <!-- 左秤盤 -->
      <line x1="28" y1="72" x2="22" y2="85"/>
      <line x1="28" y1="72" x2="34" y2="85"/>
      <path d="M20,85 Q28,88 36,85" />
      <!-- 右秤盤 -->
      <line x1="72" y1="72" x2="66" y2="85"/>
      <line x1="72" y1="72" x2="78" y2="85"/>
      <path d="M64,85 Q72,88 80,85" />
    </g>

    <!-- 正義寶劍 (直立) -->
    <g transform="translate(50, 72)">
      ${drawSword(0, 0, 0, 'url(#gold_grad)')}
    </g>

    <!-- 莊嚴的皇冠 -->
    <path d="M42,48 L42,54 L45,51 L50,56 L55,51 L58,54 L58,48 Z" fill="url(#gold_grad)"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">正義</text>
  `,

  // XII 倒吊人
  hanged_man: () => `
    ${cardFrame('#062615','#020f08','#5fe0a0')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XII</text>
    
    <!-- 生命之木樹架 (有綠葉長出) -->
    <g stroke="url(#gold_grad)" stroke-width="1.5" fill="none">
      <line x1="50" y1="36" x2="50" y2="105" opacity="0.6"/>
      <line x1="26" y1="36" x2="74" y2="36" stroke-width="2"/>
      <!-- 綠芽葉片 -->
      <path d="M30,36 C28,30 35,28 32,36 M68,36 C66,30 73,28 70,36" stroke-width="0.8"/>
    </g>

    <!-- 倒吊人本體 -->
    <!-- 頭部金黃色聖光暈 (大智慧) -->
    <circle cx="50" cy="100" r="14" fill="rgba(255,230,150,0.18)" filter="url(#glow_heavy)"/>
    ${starShape(50, 100, 11, 5, 8, 'url(#gold_grad)', 0.5)}

    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="100" r="5.5"/>
      <!-- 身軀與反十字雙腿 -->
      <path d="M50,94.5 L50,75 M46,80 L54,80" />
      <!-- 三角形左腿與直立右腿 -->
      <path d="M50,75 L42,62 L50,62 L50,50" />
      <path d="M50,75 L58,58" />
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">倒吊人</text>
  `,

  // XIII 死神
  death: () => `
    ${cardFrame('#0f0f1c','#06060c','#8585ad')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XIII</text>
    
    <!-- 遠景地平線的神秘雙塔與朝陽 (象徵重生) -->
    <path d="M0,95 Q50,70 100,95" fill="none" stroke="rgba(255,200,100,0.3)" stroke-width="0.8"/>
    ${starShape(50, 92, 10, 5, 12, 'url(#gold_grad)', 0.6)}
    <!-- 雙塔 -->
    <rect x="25" y="80" width="4" height="20" fill="#06060c" stroke="url(#gold_grad)" stroke-width="0.5"/>
    <rect x="71" y="80" width="4" height="20" fill="#06060c" stroke="url(#gold_grad)" stroke-width="0.5"/>

    <!-- 死神騎士 (黑甲骷髏騎白馬) -->
    <!-- 白馬簡影 -->
    <path d="M12,115 C20,95 38,90 48,102 C52,106 50,118 42,122" fill="rgba(255,255,255,0.06)" stroke="url(#gold_grad)" stroke-width="1.1"/>
    <!-- 骷髏騎士 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="34" cy="72" r="5.5"/>
      <!-- 盔甲與骨架 -->
      <path d="M34,77.5 L36,95 M30,85 L44,82" />
      <!-- 手持黑底白薔薇旗幟 -->
      <line x1="42" y1="50" x2="42" y2="115" stroke-width="1.3"/>
      <polygon points="42,50 68,58 42,66" fill="rgba(0,0,0,0.5)" stroke-width="0.8"/>
      <!-- 白薔薇符號 -->
      <circle cx="50" cy="58" r="3" fill="none" stroke="url(#gold_grad)" stroke-width="0.7"/>
      <path d="M48,58 Q50,56 52,58 Q50,60 48,58" fill="url(#gold_grad)"/>
    </g>

    <!-- 倒伏在地的國王皇冠 -->
    <path d="M8,135 L16,135 L12,130 Z" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">死神</text>
  `,

  // XIV 節制
  temperance: () => `
    ${cardFrame('#04203b','#010b1a','#7ac5f0')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XIV</text>
    
    <!-- 天使神聖羽翼 -->
    <path d="M50,42 Q30,22 15,35 Q8,48 24,54 Q38,50 50,62 Q62,50 76,54 Q92,48 85,35 Q70,22 50,42 Z" 
          fill="rgba(122,197,240,0.12)" stroke="url(#gold_grad)" stroke-width="0.9" filter="url(#glow_heavy)"/>

    <!-- 天使本體 (胸前三角形與正方形) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="55" r="6"/>
      <path d="M44,61 C42,75 43,105 45,115 L55,115 C57,105 58,75 56,61 Z" />
      <!-- 胸口幾何印記 -->
      <rect x="47" y="68" width="6" height="6" />
      <polygon points="50,68 47,74 53,74" fill="url(#gold_grad)"/>
    </g>

    <!-- 兩只金聖杯互倒流動之水 (生命能量之源) -->
    <g transform="translate(32, 75) scale(0.4)">${drawCup(0,0,1,'url(#gold_grad)')}</g>
    <g transform="translate(68, 75) scale(0.4)">${drawCup(0,0,1,'url(#gold_grad)')}</g>
    <!-- 水流弧線 -->
    <path d="M36,75 Q50,68 64,75" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-dasharray="2,1.5"/>

    <!-- 腳下一隻踏入水中，一隻立於土上 -->
    <path d="M12,122 Q50,112 88,122" stroke="url(#gold_grad)" stroke-width="0.8" fill="none"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">節制</text>
  `,

  // XV 惡魔
  devil: () => `
    ${cardFrame('#360505','#170101','#ff4a4a')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XV</text>
    
    <!-- 逆五芒星 (Inverted Pentagram) -->
    <g transform="translate(50, 36) scale(0.8)">
      <circle cx="0" cy="0" r="8" fill="none" stroke="#ff4a4a" stroke-width="0.8" filter="url(#glow_heavy)"/>
      <path d="M0,8 L6,-7 L-8,1 L8,1 L-6,-7 Z" fill="none" stroke="#ff4a4a" stroke-width="1.1"/>
    </g>

    <!-- 惡魔蝙蝠翅與羊角 -->
    <path d="M50,56 Q30,42 12,48 Q10,60 22,66 C32,64 42,70 50,78 C58,70 68,64 78,66 Q90,60 88,48 Q70,42 50,56 Z" 
          fill="rgba(150,20,20,0.15)" stroke="url(#gold_grad)" stroke-width="0.8"/>
    
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="54" r="6"/>
      <!-- 大羊角 -->
      <path d="M46,50 C42,42 38,46 42,38 M54,50 C58,42 62,46 58,38" stroke-linecap="round"/>
      <path d="M44,60 L42,88 M56,60 L58,88" />
    </g>

    <!-- 禁錮鎖鏈與祭壇 -->
    <rect x="36" y="94" width="28" height="15" rx="2" fill="#0d0202" stroke="url(#gold_grad)" stroke-width="0.9"/>
    <circle cx="50" cy="94" r="3.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <!-- 鐵鍊 -->
    <path d="M50,94 C38,98 32,108 26,115 M50,94 C62,98 68,108 74,115" stroke="url(#gold_grad)" stroke-width="0.6" stroke-dasharray="2,2"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">惡魔</text>
  `,

  // XVI 塔
  tower: () => `
    ${cardFrame('#2b1704','#140801','#ffaa00')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XVI</text>
    
    <!-- 致命劈落的閃電 -->
    <path d="M75,22 L55,48 L65,48 L42,88 L52,88 L30,125" fill="none" stroke="#ffffff" stroke-width="1.8" filter="url(#glow_heavy)"/>
    <path d="M75,22 L55,48 L65,48 L42,88 L52,88 L30,125" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <!-- 被劈開毀滅的塔 (Crown falling off) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <rect x="32" y="55" width="36" height="72" fill="#0d0602"/>
      <!-- 塔磚裂縫 -->
      <path d="M32,75 L45,78 L38,92 L68,96 L50,115" stroke-width="0.8"/>
      <!-- 傾斜飛落的王冠 -->
      <g transform="translate(54, 42) rotate(25)" stroke-width="0.9">
        <path d="M-8,5 L-8,12 L8,12 L8,5 L4,9 L0,3 L-4,9 Z" fill="url(#gold_grad)"/>
      </g>
    </g>

    <!-- 掉落的男女 -->
    <g stroke="url(#gold_grad)" stroke-width="0.8" fill="none">
      <!-- 墜落者1 -->
      <circle cx="24" cy="85" r="3.5"/>
      <path d="M24,88.5 L20,105 M16,92 L28,95"/>
      <!-- 墜落者2 -->
      <circle cx="76" cy="98" r="3.5"/>
      <path d="M76,101.5 L80,118 M70,104 L82,108"/>
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">塔</text>
  `,

  // XVII 星星
  star: () => `
    ${cardFrame('#04183d','#01071c','#85c2ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XVII</text>
    
    <!-- 用來產生重疊光暈的八芒巨星 -->
    <circle cx="50" cy="45" r="15" fill="rgba(255,255,255,0.15)" filter="url(#glow_heavy)"/>
    ${starShape(50, 45, 16, 7, 8, 'url(#gold_grad)', 0.95)}
    <circle cx="50" cy="45" r="3.5" fill="#ffffff"/>

    <!-- 七顆圍繞的小星 -->
    ${starShape(22, 30, 5, 2, 8, '#ffffff', 0.8)}
    ${starShape(78, 30, 5, 2, 8, '#ffffff', 0.8)}
    ${starShape(16, 52, 4, 1.8, 8, '#85c2ff', 0.7)}
    ${starShape(84, 52, 4, 1.8, 8, '#85c2ff', 0.7)}
    ${starShape(32, 24, 4, 1.8, 8, '#85c2ff', 0.6)}
    ${starShape(68, 24, 4, 1.8, 8, '#85c2ff', 0.6)}
    ${starShape(50, 20, 5, 2, 8, '#ffffff', 0.7)}

    <!-- 倒水的裸女 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="44" cy="80" r="6"/>
      <path d="M44,86 C40,94 38,108 34,115 M44,90 C50,92 52,108 50,115" />
      <!-- 水瓶1 (倒水入地) -->
      <path d="M30,88 Q24,94 22,104" stroke="#85c2ff" stroke-width="1.2" stroke-linecap="round"/>
      <!-- 水瓶2 (倒水入池) -->
      <path d="M58,88 Q64,94 66,104" stroke="#85c2ff" stroke-width="1.2" stroke-linecap="round"/>
    </g>

    <!-- 鳥與聖樹 -->
    <g stroke="url(#gold_grad)" stroke-width="0.8" fill="none" opacity="0.6">
      <path d="M86,80 L86,115 M86,88 Q90,83 94,88" />
      <!-- 鳥 -->
      <path d="M94,84 Q92,80 90,82 Z" fill="url(#gold_grad)"/>
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">星星</text>
  `,

  // XVIII 月亮
  moon: () => `
    ${cardFrame('#030f2b','#010514','#8aa4d6')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XVIII</text>
    
    <!-- 神秘月亮 (帶有側臉影像與日食環) -->
    <g filter="url(#glow_heavy)">
      <circle cx="50" cy="42" r="16" fill="rgba(255,255,255,0.06)" stroke="url(#gold_grad)" stroke-width="1.2"/>
      <!-- 月中側臉 -->
      <path d="M50,26 C42,26 40,32 44,42 C48,52 42,58 50,58" fill="url(#gold_grad)" opacity="0.8"/>
      <!-- 滴落的金黃露水 (Yods) -->
      <circle cx="34" cy="56" r="0.8" fill="url(#gold_grad)"/>
      <circle cx="66" cy="56" r="0.8" fill="url(#gold_grad)"/>
      <circle cx="42" cy="62" r="0.8" fill="url(#gold_grad)"/>
      <circle cx="58" cy="62" r="0.8" fill="url(#gold_grad)"/>
    </g>

    <!-- 矗立的雙荒野石塔 -->
    <rect x="12" y="80" width="10" height="38" fill="#010514" stroke="url(#gold_grad)" stroke-width="1" opacity="0.8"/>
    <polygon points="12,80 17,72 22,80" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <rect x="78" y="80" width="10" height="38" fill="#010514" stroke="url(#gold_grad)" stroke-width="1" opacity="0.8"/>
    <polygon points="78,80 83,72 88,80" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>

    <!-- 吠月的家犬與野狼 -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <!-- 狗 -->
      <path d="M28,118 Q23,105 28,95 Q33,105 32,118 M28,102 L34,106" />
      <!-- 狼 -->
      <path d="M72,118 Q77,105 72,95 Q67,105 68,118 M72,102 L66,106" />
    </g>

    <!-- 池塘與爬上岸的龍蝦 -->
    <path d="M20,122 Q50,114 80,122" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
    <g transform="translate(50, 126) scale(0.8)" stroke="url(#gold_grad)" stroke-width="0.8" fill="none">
      <ellipse cx="0" cy="0" rx="6" ry="3"/>
      <path d="M-6,0 Q-12,5 -10,10 M6,0 Q12,5 10,10" /> <!-- 螯 -->
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">月亮</text>
  `,

  // XIX 太陽
  sun: () => `
    ${cardFrame('#3d1a02','#1c0c01','#ffaa00')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XIX</text>
    
    <!-- 萬丈光芒的擬人太陽 -->
    <circle cx="50" cy="46" r="16" fill="rgba(255,200,0,0.18)" stroke="url(#gold_grad)" stroke-width="1.3" filter="url(#glow_heavy)"/>
    <!-- 太陽面孔 -->
    <circle cx="45" cy="44" r="1.2" fill="url(#gold_grad)"/>
    <circle cx="55" cy="44" r="1.2" fill="url(#gold_grad)"/>
    <path d="M45,51 Q50,54 55,51" stroke="url(#gold_grad)" stroke-width="0.8" fill="none"/>
    <!-- 直射與波浪光芒 -->
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
      const r1 = 18, r2 = 28;
      const rad = a * Math.PI / 180;
      return `
        <line x1="${50+r1*Math.cos(rad)}" y1="${46+r1*Math.sin(rad)}" x2="${50+r2*Math.cos(rad)}" y2="${46+r2*Math.sin(rad)}" stroke="url(#gold_grad)" stroke-width="1"/>
        <path d="M${50+(r1+2)*Math.cos(rad+(Math.PI/12))} Q${50+(r1+5)*Math.cos(rad)} ${50+r2*Math.cos(rad-(Math.PI/12))}" stroke="url(#gold_grad)" stroke-width="0.6" fill="none" opacity="0.6"/>
      `;
    }).join('')}

    <!-- 紅色旗幟與純白駿馬上的幼童 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <!-- 幼童 -->
      <circle cx="48" cy="92" r="5"/>
      <path d="M48,97 L46,115 M43,104 L56,104" stroke-linecap="round"/>
      <!-- 大紅旗幟 -->
      <line x1="36" y1="80" x2="36" y2="120" stroke-width="1.2"/>
      <path d="M36,80 Q24,76 14,84 Q24,92 36,88 Z" fill="rgba(255,50,50,0.2)"/>
    </g>

    <!-- 向日葵高牆 -->
    <path d="M8,125 L92,125" stroke="url(#gold_grad)" stroke-width="0.8"/>
    ${[16, 32, 48, 64, 80].map(x => `
      <circle cx="${x}" cy="118" r="4.5" fill="none" stroke="url(#gold_grad)" stroke-width="0.8"/>
      <circle cx="${x}" cy="118" r="1.5" fill="url(#gold_grad)"/>
    `).join('')}

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">太陽</text>
  `,

  // XX 審判
  judgement: () => `
    ${cardFrame('#092636','#030e14','#5fc2e0')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XX</text>
    
    <!-- 大天使加百列與金黃喇叭 -->
    <path d="M50,42 Q30,28 15,38 Q10,48 24,52" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.6"/>
    <path d="M50,42 Q70,28 85,38 Q90,48 76,52" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.6"/>
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="40" r="6"/>
      <!-- 長喇叭 (帶十字旗幟) -->
      <line x1="50" y1="44" x2="68" y2="56" stroke-width="1.3" filter="url(#glow_heavy)"/>
      <polygon points="68,56 74,54 71,60" fill="url(#gold_grad)"/>
      <rect x="56" y="52" width="10" height="8" rx="0.5" fill="rgba(255,255,255,0.06)" stroke-width="0.7"/>
      <line x1="61" y1="52" x2="61" y2="60" stroke-width="0.7"/>
      <line x1="56" y1="56" x2="66" y2="56" stroke-width="0.7"/>
    </g>

    <!-- 自漂流棺木中甦醒並祈禱的人群 (重生) -->
    <g stroke="url(#gold_grad)" stroke-width="0.9" fill="none">
      <!-- 男人 -->
      <rect x="22" y="98" width="14" height="22" rx="1"/>
      <circle cx="29" cy="94" r="3.5"/>
      <path d="M29,97.5 L29,105 M26,100 Q29,99 32,100" />
      <!-- 女人 -->
      <rect x="64" y="98" width="14" height="22" rx="1"/>
      <circle cx="71" cy="94" r="3.5"/>
      <path d="M71,97.5 L71,105 M68,100 Q71,99 74,100" />
    </g>

    <!-- 水平海洋 -->
    <path d="M10,120 Q50,114 90,120" stroke="url(#gold_grad)" stroke-width="0.7" fill="none"/>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">審判</text>
  `,

  // XXI 世界
  world: () => `
    ${cardFrame('#23073b','#0d0217','#c390ff')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">XXI</text>
    
    <!-- 圓形桂冠 (Wreath of Wands) - 編織雙層 -->
    <ellipse cx="50" cy="80" rx="33" ry="46" fill="none" stroke="#70e070" stroke-dasharray="3,1.5" stroke-width="1.3" opacity="0.6"/>
    <ellipse cx="50" cy="80" rx="30" ry="43" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.8"/>
    <!-- 桂冠上的紅絲帶結 -->
    <path d="M50,34 Q45,30 50,26 Q55,30 50,34" fill="#ff4d4d"/>
    <path d="M50,123 Q45,127 50,131 Q55,127 50,123" fill="#ff4d4d"/>

    <!-- 翩翩起舞的舞者 (手持雙權杖) -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="65" r="6"/>
      <path d="M50,71 C46,85 45,98 52,108 M50,76 L42,84 M50,76 L58,84" />
      <!-- 左權杖 -->
      <line x1="42" y1="84" x2="38" y2="70" stroke-width="1.2" stroke-linecap="round"/>
      <!-- 右權杖 -->
      <line x1="58" y1="84" x2="62" y2="70" stroke-width="1.2" stroke-linecap="round"/>
    </g>

    <!-- 四角占星術守護神獸 (天使, 鷹, 獅, 牛) -->
    <g fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.75">
      <!-- 左上：人/天使 -->
      <circle cx="16" cy="30" r="2.5"/>
      <path d="M12,30 Q16,26 20,30" />
      <!-- 右上：鷹 -->
      <circle cx="84" cy="30" r="2.5"/>
      <path d="M81,27 L87,27 L84,33 Z" />
      <!-- 左下：牛 -->
      <circle cx="16" cy="130" r="2.5"/>
      <path d="M13,126 Q16,128 19,126" />
      <!-- 右下：獅 -->
      <circle cx="84" cy="130" r="2.5"/>
      <path d="M84,127 A3,3 0 1,1 81,130" />
    </g>

    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">世界</text>
  `,

  default: (id, card) => `
    ${cardFrame('#2a1a4a','#150d28','#c0a0e0')}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">${card.number}</text>
    <circle cx="50" cy="75" r="25" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="50" y="82" text-anchor="middle" font-size="20" fill="url(#gold_grad)" opacity="0.9" filter="url(#glow_heavy)">✦</text>
    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">${card.name}</text>
  `
};

// ── 華麗小阿爾克那生成 ──
function generateDetailedSuitCard(card) {
  const configs = {
    wands:     { c1:'#3c1502', c2:'#1f0a01', accent:'#ffb86c', wand:'#ffb86c', label:'fire' },
    cups:      { c1:'#031b3d', c2:'#010d21', accent:'#8cd7ff', wand:'#8cd7ff', label:'water' },
    swords:    { c1:'#11112b', c2:'#070717', accent:'#d4d4f7', wand:'#d4d4f7', label:'air' },
    pentacles: { c1:'#05210c', c2:'#020f05', accent:'#8ae26c', wand:'#8ae26c', label:'earth' }
  };
  const cfg = configs[card.arcana] || configs.wands;
  const num = parseInt(card.number) || 0;

  let centralArt = '';
  const cx = 50, cy = 75;

  if (card.arcana === 'pentacles') {
    // 華麗五芒星排列
    const count = Math.min(num || 1, 5);
    const positions = getPipPositions(count, cx, cy);
    centralArt = positions.map(([x,y]) => drawPentacle(x, y, 9, 'url(#gold_grad)', 'none', 0.95)).join('');
    if (num > 5) {
      const pos2 = getPipPositions(num - 5, cx, cy + 26);
      centralArt += pos2.map(([x,y]) => drawPentacle(x, y, 7, 'url(#gold_grad)', 'none', 0.8)).join('');
    }
  } else if (card.arcana === 'cups') {
    const count = Math.min(num || 1, 4);
    const positions = getPipPositions(count, cx, cy);
    centralArt = positions.map(([x,y]) => drawCup(x, y, 0.38, cfg.accent)).join('');
    if (num > 4) {
      const pos2 = getPipPositions(num - 4, cx, cy + 28);
      centralArt += pos2.map(([x,y]) => drawCup(x, y, 0.32, cfg.accent)).join('');
    }
  } else if (card.arcana === 'swords') {
    if (num <= 3) {
      const angles = num === 1 ? [0] : num === 2 ? [-18, 18] : [-25, 0, 25];
      centralArt = angles.map(a => drawSword(cx, cy, a, cfg.accent)).join('');
    } else {
      const cols = num <= 6 ? 2 : 3;
      for (let i = 0; i < Math.min(num, 6); i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = cx - (cols - 1) * 11 + col * 22;
        const y = 56 + row * 32;
        centralArt += drawSword(x, y, 0, cfg.accent);
      }
    }
  } else { // wands
    if (num <= 3) {
      const offsets = num === 1 ? [0] : num === 2 ? [-12, 12] : [-20, 0, 20];
      centralArt = offsets.map(ox => drawWand(cx + ox, cy, cfg.accent)).join('');
    } else {
      const cols = num <= 6 ? 2 : 3;
      for (let i = 0; i < Math.min(num, 6); i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = cx - (cols - 1) * 12 + col * 24;
        const y = 56 + row * 28;
        centralArt += drawWand(x, y - 10, cfg.accent);
      }
    }
  }

  // 宮廷牌特別處理 (Page, Knight, Queen, King)
  const courtMap = { 'Page': '侍從', 'Knight': '騎士', 'Queen': '王后', 'King': '國王' };
  if (courtMap[card.number]) {
    centralArt = generateCourtCard(card, cfg);
  }

  return `
    ${cardFrame(cfg.c1, cfg.c2, cfg.accent)}
    <text x="50" y="21" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Cinzel" font-weight="600">${card.number}</text>
    ${centralArt}
    <text x="50" y="148" text-anchor="middle" font-size="8" fill="url(#gold_grad)" font-family="Noto Serif TC" font-weight="600" letter-spacing="2">${card.name}</text>
  `;
}

function getPipPositions(count, cx, cy) {
  const layouts = {
    1: [[cx, cy]],
    2: [[cx-14, cy], [cx+14, cy]],
    3: [[cx-14, cy], [cx, cy], [cx+14, cy]],
    4: [[cx-14, cy-12], [cx+14, cy-12], [cx-14, cy+12], [cx+14, cy+12]],
    5: [[cx-14, cy-14], [cx+14, cy-14], [cx, cy], [cx-14, cy+14], [cx+14, cy+14]]
  };
  return layouts[count] || layouts[1];
}

function generateCourtCard(card, cfg) {
  const courtEmoji = { Page: '🌱', Knight: '⚔️', Queen: '👑', King: '🏆' };
  return `
    <!-- 巴洛克拱門背景 -->
    <path d="M22,122 L22,60 C22,42 78,42 78,60 L78,122 Z" fill="none" stroke="url(#gold_grad)" stroke-width="0.8" opacity="0.65"/>
    <ellipse cx="50" cy="55" rx="28" ry="12" fill="none" stroke="url(#gold_grad)" stroke-dasharray="1.5,1.5" stroke-width="0.5" opacity="0.4"/>
    
    <!-- 宮廷人物半身剪影 -->
    <g stroke="url(#gold_grad)" stroke-width="1.1" fill="none">
      <circle cx="50" cy="62" r="8"/>
      <!-- 巴洛克王冠 -->
      <path d="M42,54 L42,59 L45,56 L50,61 L55,56 L58,59 L58,54 Z" fill="url(#gold_grad)"/>
      <!-- 肩膀與服裝 -->
      <path d="M38,72 C32,84 34,102 36,118 L64,118 C66,102 68,84 62,72 Z" fill="rgba(255,255,255,0.03)"/>
      
      <!-- 手持聖物象徵 -->
      <line x1="30" y1="78" x2="22" y2="102" stroke-linecap="round"/>
      <circle cx="22" cy="102" r="1.5" fill="url(#gold_grad)"/>
    </g>

    <!-- 居中符號 -->
    <text x="50" y="94" text-anchor="middle" font-size="13" fill="url(#gold_grad)" opacity="0.4">${courtEmoji[card.number] || '✦'}</text>
  `;
}

// ── 主要入口函式 (供 app.js 使用) ──
function getCardSVGContent(card) {
  if (card.arcana === 'major') {
    const artFn = MAJOR_ART[card.symbol];
    if (artFn) return artFn();
    return MAJOR_ART.default(card.id, card);
  }
  return generateDetailedSuitCard(card);
}
