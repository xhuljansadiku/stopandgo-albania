// --kh = coffee card height, lets the sticky card sit at the bottom of the screen on phones
const kc = document.querySelector(".kafe-card"), setKh = () => document.documentElement.style.setProperty("--kh", kc.offsetHeight + "px");
new ResizeObserver(setKh).observe(kc); setKh();
// fade the fixed HUD out while the footer is on screen so they never overlap
new IntersectionObserver(([e]) => document.getElementById("hud").classList.toggle("off", e.isIntersecting))
  .observe(document.querySelector(".site-foot"));
