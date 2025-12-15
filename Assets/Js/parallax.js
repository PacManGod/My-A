// Parallax suave para flores, textos y colinas
const parallaxItems = [];
let viewportH = window.innerHeight;

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('in-view', entry.isIntersecting);
    });
  },
  { threshold: 0.3 }
);

function updateParallax() {
  parallaxItems.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.12;
    const rect = el.getBoundingClientRect();
    const offset = rect.top - viewportH * 0.5;
    const translate = -offset * speed;
    el.style.transform = `translate3d(0, ${translate}px, 0)`;
  });

  const hills = document.getElementById('hills-bg');
  if (hills) {
    hills.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`;
  }
}

let ticking = false;
function scheduleUpdate() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', scheduleUpdate);
window.addEventListener('resize', () => {
  viewportH = window.innerHeight;
  updateParallax();
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flower-section').forEach(section => {
    sectionObserver.observe(section);
  });

  document.querySelectorAll('[data-parallax]').forEach(el => {
    parallaxItems.push(el);
  });

  updateParallax();
});
