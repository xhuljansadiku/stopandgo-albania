// ---------- Locations: used by the "nearest stop" button ----------
// The "nearest stop" button picks the closest of these by GPS; if location access is denied it falls back
// to a Google Maps search for "Stop&Go" centred on the Shkodër region (its href in index.html).
const LOCATIONS = [
  { name: "Kryebushat", lat: 41.9900417, lng: 19.535705, url: "https://www.google.com/maps/place/Stop%26Go+Kryebushat/@41.9900417,19.535705,148m/data=!3m1!1e3!4m6!3m5!1s0x134e03005601c457:0x1c71666028eb07e3!8m2!3d41.9900417!4d19.535705!16s%2Fg%2F11xl4nx4m1" },
  { name: "Shkodër", lat: 42.0750554, lng: 19.5238237, url: "https://www.google.com/maps/place/Stop%26Go+Shkoder/@42.0750554,19.5238237,837m/data=!3m2!1e3!4b1!4m6!3m5!1s0x134e01631231dc3d:0x5206ac3b9daadf41!8m2!3d42.0750554!4d19.5238237!16s%2Fg%2F11nvz7jj9s" },
  { name: "Muriqan", lat: 42.019046, lng: 19.376608, url: "https://www.google.com/maps/place/Stop%26Go+Muriqan/@42.019046,19.376608,17z/data=!4m6!3m5!1s0x134e0f40e1311327:0x495f7aac395eea82!8m2!3d42.019046!4d19.376608" },
];

// ---------- Language: each language has its own pre-rendered URL (/, /en, /it, /de, /hr — see build.mjs) ----------
// The switcher still swaps text in place (no reload, the 3D keeps running) and just rewrites the URL.
// On the built pages the Albanian originals come along as data-sq / data-sq-label; on the raw index.html they are the content itself.
const I18N = window.I18N, root = document.documentElement;
const BUILT = root.dataset.built != null; // set by build.mjs — only then do /en etc. exist
const PATHS = { sq: "/", en: "/en", it: "/it", de: "/de", hr: "/hr" };
const i18nEls = [...document.querySelectorAll("[data-i18n]")];
i18nEls.forEach(e => { if (e.dataset.sq == null) e.dataset.sq = e.innerHTML; });
const labelEls = [...document.querySelectorAll("[data-i18n-label]")];
labelEls.forEach(e => { if (e.dataset.sqLabel == null) e.dataset.sqLabel = e.getAttribute("aria-label"); });
const metaDesc = document.querySelector('meta[name="description"]');
let curLang = I18N[root.lang] ? root.lang : "sq";
function setLang(lang, save) {
  if (!I18N[lang]) lang = "sq";
  const T = I18N[lang];
  if (BUILT && location.pathname.replace(/\/$/, "") !== PATHS[lang].replace(/\/$/, "")) {
    const q = new URLSearchParams(location.search); q.delete("lang");
    history.replaceState(null, "", PATHS[lang] + (q.size ? "?" + q : "") + location.hash);
  }
  curLang = lang;
  i18nEls.forEach(e => { const v = lang === "sq" ? e.dataset.sq : T[e.dataset.i18n]; if (v != null) e.innerHTML = v; });
  labelEls.forEach(e => { const v = lang === "sq" ? e.dataset.sqLabel : T[e.dataset.i18nLabel]; if (v != null) e.setAttribute("aria-label", v); });
  document.title = T["meta.title"]; metaDesc.content = T["meta.desc"];
  root.lang = lang;
  window.HUD = T.hud; // read by the 3D loop
  document.getElementById("hud").textContent = window.HUD[0];
  document.getElementById("lang-cur").textContent = lang.toUpperCase();
  document.getElementById("lang-flag").src = "/images/flags/" + { sq: "al", en: "gb", it: "it", de: "de", hr: "hr" }[lang] + ".svg";
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-current", b.dataset.lang === lang));
  if (save) try { localStorage.setItem("sg-lang", lang); } catch (e) {}
  if (window.ScrollTrigger) ScrollTrigger.refresh(); // card heights changed → re-anchor the 3D scroll
}
// Start language: ?lang= (old links) > the page's own language if it is /en etc. > saved choice (only on the Albanian root)
let startLang = new URLSearchParams(location.search).get("lang");
if (!startLang && curLang === "sq") try { startLang = localStorage.getItem("sg-lang"); } catch (e) {}
setLang(startLang || curLang);

// ---------- Navbar dropdowns + mobile sheet ----------
const nav = document.getElementById("nav"), burger = nav.querySelector(".burger");
function closeNav() {
  nav.querySelectorAll(".dd.open").forEach(d => { d.classList.remove("open"); d.querySelector(".nav-btn").setAttribute("aria-expanded", "false"); });
  nav.classList.remove("sheet-open"); burger.setAttribute("aria-expanded", "false");
}
nav.querySelectorAll(".dd > .nav-btn").forEach(b => b.addEventListener("click", () => {
  const d = b.parentElement, open = !d.classList.contains("open");
  closeNav(); d.classList.toggle("open", open); b.setAttribute("aria-expanded", open);
}));
burger.addEventListener("click", () => {
  const open = !nav.classList.contains("sheet-open");
  closeNav(); nav.classList.toggle("sheet-open", open); burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => { setLang(b.dataset.lang, true); closeNav(); }));
nav.querySelectorAll(".loc-link").forEach(a => a.addEventListener("click", closeNav));
document.addEventListener("click", e => { if (!nav.contains(e.target)) closeNav(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeNav(); });

// ---------- "Find the nearest stop": geolocation → closest location (only once every location has coordinates) ----------
const cta = document.getElementById("cta-near");
if (cta && navigator.geolocation && LOCATIONS.every(l => l.lat != null && l.lng != null)) {
  const dist = (a, b) => { // haversine, km
    const r = Math.PI / 180, dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(h));
  };
  cta.addEventListener("click", e => {
    e.preventDefault();
    const w = window.open("about:blank", "_blank"); // open now, inside the click, so popup blockers allow it
    if (w) w.opener = null;
    const go = url => { if (w) w.location.href = url; else location.href = url; };
    navigator.geolocation.getCurrentPosition(
      p => { const me = { lat: p.coords.latitude, lng: p.coords.longitude };
        go(LOCATIONS.reduce((a, b) => dist(me, a) <= dist(me, b) ? a : b).url); },
      () => go(cta.href), // denied / unavailable → regional search
      { timeout: 8000, maximumAge: 600000 });
  });
}

document.getElementById("yr").textContent = new Date().getFullYear();
