// Fondo de colinas SVG para integrar con las flores, siempre al fondo
const hills = document.createElement('div');
hills.id = 'hills-bg';
hills.style.position = 'fixed';
hills.style.left = '0';
hills.style.right = '0';
hills.style.bottom = '0';
hills.style.width = '100vw';
hills.style.height = '34vh';
hills.style.zIndex = '0';
hills.style.pointerEvents = 'none';
hills.innerHTML = `
<svg width="100%" height="100%" viewBox="0 0 1920 340" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <path d="M0 300 Q320 220 640 300 T1280 300 T1920 300 V340 H0Z" fill="#b7e0c7"/>
  <path d="M0 320 Q480 240 960 320 T1920 320 V340 H0Z" fill="#e0f7fa"/>
  <path d="M0 340 Q600 280 1200 340 T1920 340 V340 H0Z" fill="#f8e1f4"/>
</svg>
`;
document.body.prepend(hills);
