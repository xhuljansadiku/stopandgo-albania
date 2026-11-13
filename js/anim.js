// Smooth scroll + text card reveals. Kept apart from the 3D scene on purpose:
// if three.js / WebGL fails, the text still animates in (and with no JS at all it is simply visible).
(() => {
  const root = document.documentElement;
  const toStatic = () => { root.classList.add('static'); if (window.ScrollTrigger) ScrollTrigger.refresh(); };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGL = (() => {
    try {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (gl) gl.getExtension('WEBGL_lose_context')?.loseContext(); // probe only, free the context right away
      return !!gl;
    } catch (e) { return false; }
  })();
  if (reduced || !hasGL || !window.gsap || !window.ScrollTrigger) root.classList.add('static');
  // scene.js sets window.__scene as soon as its modules have loaded; if they never did (network, old browser), show the poster
  addEventListener('load', () => { if (!window.__scene && !root.classList.contains('static')) toStatic(); });
  if (reduced || !window.gsap || !window.ScrollTrigger) return; // cards stay visible as plain HTML

  gsap.registerPlugin(ScrollTrigger);
  if (window.Lenis) {
    const lenis = new Lenis({ lerp: 0.08 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    window.lenis = lenis;
  }

  // phones: cards sit at the bottom of the screen, so they must be fully in a bit earlier; the first card shows on load
  const phone = matchMedia('(max-width:700px)').matches;
  const cards = gsap.utils.toArray('[data-s] .card');
  gsap.set(cards, { opacity: 0, y: 40 });
  cards.forEach((c, i) => i === 0
    ? gsap.to(c, { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' })
    : gsap.to(c, { opacity: 1, y: 0, ease: 'none',
      scrollTrigger: { trigger: c, start: phone ? 'top 98%' : 'top 85%', end: phone ? 'top 72%' : 'top 45%', scrub: true } }));
  // coffee card is sticky: fade it out as soon as the camera leaves the cup, so the next text takes over
  gsap.fromTo('#kafe .card', { opacity: 1, y: 0 }, { opacity: 0, y: -40, ease: 'none', immediateRender: false,
    scrollTrigger: { trigger: '#kafe', start: 'bottom 120%', end: 'bottom 102%', scrub: true } });
})();
