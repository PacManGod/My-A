// Animación y dibujo de flores variadas
// Cada flor es un SVG animado

const flowerData = [
  { name: 'hortensia', delay: 0 },
  { name: 'lirio', delay: 0.3 },
  { name: 'peonia', delay: 0.6 },
  { name: 'ranunculo', delay: 0.9 },
  { name: 'cala', delay: 1.2 },
  { name: 'anturio', delay: 1.5 }
];

const svgFlowers = {
  hortensia: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <circle cx="90" cy="120" r="44" fill="#b3c6e7"/>
        <circle cx="60" cy="110" r="16" fill="#dbe6fa"/>
        <circle cx="120" cy="130" r="14" fill="#dbe6fa"/>
        <circle cx="110" cy="90" r="10" fill="#eaf0fb"/>
        <circle cx="130" cy="110" r="9" fill="#eaf0fb"/>
        <circle cx="80" cy="140" r="12" fill="#eaf0fb"/>
      </g>
    </g>
  </svg>`,
  lirio: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <path d="M90 160 Q120 80 90 40 Q60 80 90 160" fill="#fff6e7" stroke="#e6b07a" stroke-width="2"/>
        <ellipse cx="90" cy="90" rx="18" ry="32" fill="#fff6e7"/>
        <ellipse cx="90" cy="60" rx="6" ry="18" fill="#e6b07a"/>
      </g>
    </g>
  </svg>`,
  peonia: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <ellipse cx="90" cy="150" rx="44" ry="38" fill="#f7b6c2"/>
        <ellipse cx="90" cy="130" rx="34" ry="26" fill="#fbe3e8"/>
        <ellipse cx="90" cy="170" rx="24" ry="16" fill="#f7b6c2"/>
      </g>
    </g>
  </svg>`,
  ranunculo: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <ellipse cx="90" cy="150" rx="36" ry="30" fill="#ffe6a7"/>
        <ellipse cx="90" cy="150" rx="22" ry="16" fill="#fff7d6"/>
        <ellipse cx="90" cy="150" rx="12" ry="10" fill="#ffe6a7"/>
      </g>
    </g>
  </svg>`,
  cala: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <path d="M90 160 Q120 110 90 40 Q60 110 90 160" fill="#fff" stroke="#e6e6e6" stroke-width="2"/>
        <ellipse cx="90" cy="120" rx="16" ry="32" fill="#fff"/>
        <ellipse cx="90" cy="80" rx="5" ry="18" fill="#ffe066"/>
      </g>
    </g>
  </svg>`,
  anturio: `<svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg" style="max-width:90vw;height:auto;">
    <g>
      <rect x="86" y="140" width="8" height="100" rx="4" fill="#7bc47f"/>
      <g>
        <path d="M90 160 Q150 80 90 40 Q30 80 90 160" fill="#e94f64" stroke="#b41c2e" stroke-width="2"/>
        <ellipse cx="90" cy="120" rx="18" ry="32" fill="#e94f64"/>
        <ellipse cx="90" cy="80" rx="5" ry="18" fill="#ffe066"/>
      </g>
    </g>
  </svg>`
};

function createFlower(name, delay) {
  const div = document.createElement('div');
  div.className = 'flower';
  div.style.animationDelay = `${delay}s`;
  div.innerHTML = svgFlowers[name];
  return div;
}

window.addEventListener('DOMContentLoaded', () => {
  const flowersContainer = document.getElementById('flowers');
  flowerData.forEach(flower => {
    const el = createFlower(flower.name, flower.delay);
    flowersContainer.appendChild(el);
  });
});
