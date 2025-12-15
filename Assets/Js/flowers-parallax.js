// SVGs más elaborados para cada flor y renderizado dentro de sus contenedores
const svgFlowers = {
  hortensia: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="hortensiaStem" x1="105" y1="140" x2="105" y2="240" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <linearGradient id="hortensiaLeaf" x1="60" y1="170" x2="140" y2="210" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <radialGradient id="hortensiaPetal" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(110 110) rotate(90) scale(70 70)">
      <stop stop-color="#e5ecff"/><stop offset="1" stop-color="#88a4ff"/>
    </radialGradient>
    <radialGradient id="hortensiaPetalAlt" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92 128) rotate(90) scale(60 60)">
      <stop stop-color="#f4f6ff"/><stop offset="1" stop-color="#acc3ff"/>
    </radialGradient>
  </defs>
  <g>
    <path d="M82 190 Q105 165 134 178 Q114 205 98 214 Z" fill="url(#hortensiaLeaf)" opacity="0.9"/>
    <path d="M112 176 Q92 154 70 186 Q96 200 110 210 Z" fill="url(#hortensiaLeaf)" opacity="0.85"/>
    <rect x="99" y="142" width="12" height="98" rx="6" fill="url(#hortensiaStem)"/>
    <g>
      <circle cx="106" cy="122" r="48" fill="url(#hortensiaPetal)" />
      <circle cx="76" cy="118" r="22" fill="url(#hortensiaPetalAlt)" />
      <circle cx="138" cy="136" r="20" fill="url(#hortensiaPetalAlt)" />
      <circle cx="130" cy="92" r="16" fill="url(#hortensiaPetalAlt)" />
      <circle cx="90" cy="150" r="18" fill="url(#hortensiaPetalAlt)" />
      <circle cx="120" cy="160" r="16" fill="url(#hortensiaPetalAlt)" />
      <circle cx="86" cy="88" r="14" fill="url(#hortensiaPetalAlt)" />
      <circle cx="152" cy="110" r="12" fill="url(#hortensiaPetalAlt)" />
      <g fill="#dbe6ff">
        <circle cx="108" cy="122" r="6"/><circle cx="124" cy="108" r="6"/><circle cx="92" cy="108" r="6"/><circle cx="118" cy="142" r="6"/>
      </g>
    </g>
  </g>
</svg>
  `,
  lirio: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="lirioStem" x1="105" y1="150" x2="105" y2="245" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <linearGradient id="lirioPetal" x1="80" y1="40" x2="130" y2="180" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff6e7"/><stop offset="1" stop-color="#ffd7a3"/>
    </linearGradient>
    <radialGradient id="lirioCenter" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 94) rotate(90) scale(34 18)">
      <stop stop-color="#f0c05e"/><stop offset="1" stop-color="#d89b32"/>
    </radialGradient>
  </defs>
  <g>
    <path d="M86 198 Q110 170 140 194 Q118 218 104 228 Z" fill="#6fb183" opacity="0.85"/>
    <path d="M120 186 Q96 156 72 194 Q96 210 114 222 Z" fill="#6fb183" opacity="0.78"/>
    <rect x="99" y="146" width="12" height="104" rx="6" fill="url(#lirioStem)"/>
    <g>
      <path d="M106 172 Q144 104 106 38 Q68 104 106 172" fill="url(#lirioPetal)" stroke="#e6b07a" stroke-width="2.2"/>
      <ellipse cx="106" cy="98" rx="20" ry="36" fill="#fffaf1" opacity="0.9"/>
      <ellipse cx="106" cy="74" rx="6.5" ry="20" fill="url(#lirioCenter)"/>
      <path d="M104 62 Q110 80 114 94" stroke="#f0c05e" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>
</svg>
  `,
  peonia: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="peoniaStem" x1="105" y1="150" x2="105" y2="246" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <linearGradient id="peoniaLeaf" x1="70" y1="178" x2="140" y2="214" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <radialGradient id="peoniaOuter" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 146) rotate(90) scale(60 52)">
      <stop stop-color="#ffe1eb"/><stop offset="1" stop-color="#f59db4"/>
    </radialGradient>
    <radialGradient id="peoniaInner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 138) rotate(90) scale(44 38)">
      <stop stop-color="#fff3f7"/><stop offset="1" stop-color="#f7b6c2"/>
    </radialGradient>
  </defs>
  <g>
    <path d="M120 182 Q98 158 74 194 Q102 210 118 222 Z" fill="url(#peoniaLeaf)" opacity="0.82"/>
    <path d="M90 186 Q112 158 140 192 Q116 208 102 220 Z" fill="url(#peoniaLeaf)" opacity="0.86"/>
    <rect x="99" y="146" width="12" height="102" rx="6" fill="url(#peoniaStem)"/>
    <g>
      <ellipse cx="106" cy="152" rx="56" ry="48" fill="url(#peoniaOuter)"/>
      <ellipse cx="106" cy="142" rx="42" ry="34" fill="url(#peoniaInner)"/>
      <ellipse cx="106" cy="166" rx="30" ry="22" fill="#f59db4" opacity="0.8"/>
      <g fill="#f7dce5">
        <path d="M104 132 Q114 128 118 116 Q110 124 100 122 Q108 126 104 132Z"/>
        <path d="M112 148 Q128 146 134 132 Q124 142 112 138 Q120 144 112 148Z"/>
      </g>
    </g>
  </g>
</svg>
  `,
  ranunculo: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="ranunculoStem" x1="105" y1="148" x2="105" y2="246" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7cc67a"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <radialGradient id="ranunculoOuter" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 150) rotate(90) scale(50 46)">
      <stop stop-color="#fff4ce"/><stop offset="1" stop-color="#f4b52c"/>
    </radialGradient>
    <radialGradient id="ranunculoMid" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 150) rotate(90) scale(32 30)">
      <stop stop-color="#fff9df"/><stop offset="1" stop-color="#f6c75a"/>
    </radialGradient>
  </defs>
  <g>
    <path d="M122 186 Q98 156 72 192 Q96 210 116 222 Z" fill="#6fb183" opacity="0.82"/>
    <path d="M88 190 Q110 164 142 188 Q120 210 104 222 Z" fill="#6fb183" opacity="0.8"/>
    <rect x="99" y="146" width="12" height="102" rx="6" fill="url(#ranunculoStem)"/>
    <g>
      <ellipse cx="106" cy="154" rx="52" ry="44" fill="url(#ranunculoOuter)"/>
      <ellipse cx="106" cy="154" rx="34" ry="26" fill="url(#ranunculoMid)"/>
      <ellipse cx="106" cy="154" rx="18" ry="14" fill="#f4b52c" opacity="0.9"/>
      <circle cx="106" cy="154" r="6" fill="#f2a423"/>
      <path d="M104 148 Q110 150 114 144" stroke="#f2a423" stroke-width="2" stroke-linecap="round"/>
      <path d="M110 160 Q102 156 96 164" stroke="#f2a423" stroke-width="2" stroke-linecap="round"/>
    </g>
  </g>
</svg>
  `,
  cala: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="calaStem" x1="105" y1="148" x2="105" y2="246" gradientUnits="userSpaceOnUse">
      <stop stop-color="#80c9b5"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <linearGradient id="calaPetal" x1="82" y1="44" x2="132" y2="186" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/><stop offset="1" stop-color="#e8f5f1"/>
    </linearGradient>
    <radialGradient id="calaCenter" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(106 112) rotate(90) scale(32 12)">
      <stop stop-color="#ffe066"/><stop offset="1" stop-color="#f0b92c"/>
    </radialGradient>
  </defs>
  <g>
    <path d="M124 186 Q100 158 74 194 Q98 210 116 224 Z" fill="#80c9b5" opacity="0.85"/>
    <path d="M86 188 Q112 160 140 194 Q118 210 102 224 Z" fill="#80c9b5" opacity="0.78"/>
    <rect x="99" y="146" width="12" height="104" rx="6" fill="url(#calaStem)"/>
    <g>
      <path d="M106 188 Q150 118 106 38 Q62 118 106 188" fill="url(#calaPetal)" stroke="#e2e8e5" stroke-width="2.2"/>
      <ellipse cx="106" cy="120" rx="18" ry="36" fill="#fff"/>
      <ellipse cx="106" cy="88" rx="6" ry="22" fill="url(#calaCenter)"/>
      <path d="M104 80 Q110 94 114 110" stroke="#f0b92c" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>
</svg>
  `,
  anturio: `
<svg width="210" height="260" viewBox="0 0 210 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
  <defs>
    <linearGradient id="anturioStem" x1="105" y1="146" x2="105" y2="246" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6fb183"/><stop offset="1" stop-color="#4f8b64"/>
    </linearGradient>
    <linearGradient id="anturioPetal" x1="70" y1="40" x2="146" y2="188" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ff7b89"/><stop offset="1" stop-color="#d62839"/>
    </linearGradient>
    <linearGradient id="anturioPetalShine" x1="86" y1="80" x2="136" y2="146" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffb3c0" stop-opacity="0.9"/><stop offset="1" stop-color="#ff7b89" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="anturioSpadix" x1="106" y1="88" x2="106" y2="158" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffe066"/><stop offset="1" stop-color="#f0b92c"/>
    </linearGradient>
  </defs>
  <g>
    <path d="M120 182 Q96 160 70 194 Q96 212 114 224 Z" fill="#6fb183" opacity="0.82"/>
    <path d="M86 186 Q112 158 144 188 Q120 208 102 222 Z" fill="#6fb183" opacity="0.8"/>
    <rect x="99" y="146" width="12" height="104" rx="6" fill="url(#anturioStem)"/>
    <g>
      <path d="M106 182 Q170 108 106 38 Q42 108 106 182" fill="url(#anturioPetal)" stroke="#c22639" stroke-width="2.2"/>
      <path d="M118 66 Q136 104 120 142 Q104 126 88 136 Q94 106 118 66Z" fill="url(#anturioPetalShine)" opacity="0.85"/>
      <ellipse cx="106" cy="120" rx="14" ry="46" fill="url(#anturioSpadix)"/>
      <path d="M104 84 Q112 110 114 144" stroke="#d79a1f" stroke-width="3" stroke-linecap="round"/>
    </g>
  </g>
</svg>
  `
};

const flowerIds = ['hortensia', 'lirio', 'peonia', 'ranunculo', 'cala', 'anturio'];

window.addEventListener('DOMContentLoaded', () => {
  flowerIds.forEach(flower => {
    const el = document.getElementById('flower-' + flower);
    if (el) el.innerHTML = svgFlowers[flower];
  });
});
