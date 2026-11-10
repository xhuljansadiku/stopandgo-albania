// ---------- Social links: one place to edit ----------
const SOCIAL = {
  instagram: "https://www.instagram.com/stop_and_go_shkoder/",
  facebook: "https://www.facebook.com/people/StopGo-Shkoder/61591744741629/",
  tiktok: "https://www.tiktok.com/@stop_and_go_shkoder",
};
document.querySelectorAll("[data-soc]").forEach(a => a.href = SOCIAL[a.dataset.soc]);

// ---------- i18n: Albanian is the HTML itself, other languages swap innerHTML by key ----------
const I18N = {
  sq: { hud: ["Ora 02:14 · Drita e kuqe", "Ora 02:15 · Stop & Go — Hapur", "Ora 02:21 · Rruga kombëtare", "Ora 02:30 · Hapur 24/7"] },
  en: {
    hud: ["02:14 · Red light", "02:15 · Stop & Go — Open", "02:21 · National road", "02:30 · Open 24/7"],
    "nav.loc": "Locations", "nav.open": "Open 24/7", "nav.follow": "Follow us",
    "s1.h1": '<span class="r">Stop.</span>',
    "s1.p": "Every journey needs a break.",
    "s2.h2": '<span class="a" style="display:block;margin-bottom:.32em">Relax.</span>Recharge.',
    "s2.p": "Coffee, minimarket and snack food.<br>24 hours a day, 7 days a week.",
    "s3.h1": '<span class="g">Go.</span>',
    "s3.p": "The light is always on. Stop by whenever you like.",
    "kafe.eb": "01 · Coffee",
    "kafe.h2": 'Coffee you enjoy<br><span class="a">every time.</span>',
    "kafe.p": "At Stop &amp; Go, Ama Caffè is waiting for you.<br>From your favourite espresso to a cappuccino<br>to enjoy during your break.<br>Take it to go, or sit down and savour it slowly.",
    "kafe.li": "Outdoor seating",
    "mini.eb": "02 · Minimarket",
    "mini.h2": 'Everything<span class="r" style="display:block;margin-top:.14em">for the road.</span>',
    "mini.p": "Whatever you need on your journey, you'll find it here.<br>Cold drinks, snacks and everyday essentials,<br>24 hours a day, 7 days a week.",
    "mini.ul": "<li>Cold drinks</li><li>Snacks</li><li>Everyday essentials</li><li>24/7</li>",
    "rv.eb": "What customers say",
    "rv.h2": 'What travellers<span class="g" style="display:block;margin-top:.3em">are saying.</span>',
    "rv.tr": "translated from French", "rv.leave": "Leave a review",
    "loc.eb": "Always close to you",
    "loc.h2": '3 stops.<br><span class="g">0 waiting.</span>',
    "loc.open": "Open →",
    "fin.h2": 'Your next <br class="m-br">stop<br><span class="r">awaits.</span>',
    "fin.btn": "Find the nearest stop",
    "fin.hours": "Monday – Sunday · 00:00 – 24:00",
  },
  it: {
    hud: ["02:14 · Semaforo rosso", "02:15 · Stop & Go — Aperto", "02:21 · Strada statale", "02:30 · Aperto 24/7"],
    "nav.loc": "Sedi", "nav.open": "Aperto 24/7", "nav.follow": "Seguici",
    "s1.h1": '<span class="r">Fermati.</span>',
    "s1.p": "Ogni viaggio ha bisogno di una pausa.",
    "s2.h2": '<span class="a" style="display:block;margin-bottom:.32em">Rilassati.</span>Ricaricati.',
    "s2.p": "Caffè, minimarket e snack food.<br>24 ore su 24, 7 giorni su 7.",
    "s3.h1": '<span class="g">Riparti.</span>',
    "s3.p": "La luce è sempre accesa. Passa quando vuoi.",
    "kafe.eb": "01 · Caffè",
    "kafe.h2": 'Un caffè da gustare<br><span class="a">ogni volta.</span>',
    "kafe.p": "Da Stop &amp; Go ti aspetta Ama Caffè.<br>Dal tuo espresso preferito al cappuccino<br>da gustare durante la tua pausa.<br>Portalo via o siediti e goditelo con calma.",
    "kafe.li": "Spazio all'aperto",
    "mini.eb": "02 · Minimarket",
    "mini.h2": 'Tutto<span class="r" style="display:block;margin-top:.14em">per il viaggio.</span>',
    "mini.p": "Tutto ciò che ti serve durante il viaggio, lo trovi qui.<br>Bevande fresche, snack e prodotti di uso quotidiano,<br>24 ore su 24, 7 giorni su 7.",
    "mini.ul": "<li>Bevande fresche</li><li>Snack</li><li>Prodotti quotidiani</li><li>24/7</li>",
    "rv.eb": "Dicono di noi",
    "rv.h2": 'Cosa dicono<span class="g" style="display:block;margin-top:.3em">i viaggiatori.</span>',
    "rv.tr": "tradotto dal francese", "rv.leave": "Lascia una recensione",
    "loc.eb": "Sempre vicino a te",
    "loc.h2": '3 sedi.<br><span class="g">0 attese.</span>',
    "loc.open": "Aperto →",
    "fin.h2": 'La tua prossima <br class="m-br">tappa<br><span class="r">ti aspetta.</span>',
    "fin.btn": "Trova la sede più vicina",
    "fin.hours": "Lunedì – Domenica · 00:00 – 24:00",
  },
  de: {
    hud: ["02:14 · Rote Ampel", "02:15 · Stop & Go — Geöffnet", "02:21 · Nationalstraße", "02:30 · 24/7 geöffnet"],
    "nav.loc": "Standorte", "nav.open": "24/7 geöffnet", "nav.follow": "Folge uns",
    "s1.h1": '<span class="r">Halt.</span>',
    "s1.p": "Jede Reise braucht eine Pause.",
    "s2.h2": '<span class="a" style="display:block;margin-bottom:.32em">Entspann dich.</span>Tank Energie.',
    "s2.p": "Kaffee, Minimarkt und Snack Food.<br>24 Stunden am Tag, 7 Tage die Woche.",
    "s3.h1": '<span class="g">Weiter.</span>',
    "s3.p": "Das Licht ist immer an. Komm vorbei, wann du willst.",
    "kafe.eb": "01 · Kaffee",
    "kafe.h2": 'Kaffee, der<br><span class="a">immer schmeckt.</span>',
    "kafe.p": "Bei Stop &amp; Go wartet Ama Caffè auf dich.<br>Vom Lieblingsespresso bis zum Cappuccino<br>für deine Pause unterwegs.<br>Zum Mitnehmen oder ganz in Ruhe vor Ort.",
    "kafe.li": "Außenbereich",
    "mini.eb": "02 · Minimarkt",
    "mini.h2": 'Alles<span class="r" style="display:block;margin-top:.14em">für unterwegs.</span>',
    "mini.p": "Was du auf der Reise brauchst, findest du hier.<br>Kalte Getränke, Snacks und Dinge für den Alltag,<br>24 Stunden am Tag, 7 Tage die Woche.",
    "mini.ul": "<li>Kalte Getränke</li><li>Snacks</li><li>Alltagsbedarf</li><li>24/7</li>",
    "rv.eb": "Kundenstimmen",
    "rv.h2": 'Was Reisende<span class="g" style="display:block;margin-top:.3em">sagen.</span>',
    "rv.tr": "aus dem Französischen übersetzt", "rv.leave": "Bewertung schreiben",
    "loc.eb": "Immer in deiner Nähe",
    "loc.h2": '3 Standorte.<br><span class="g">0 Wartezeit.</span>',
    "loc.open": "Geöffnet →",
    "fin.h2": 'Dein nächster <br class="m-br">Stopp<br><span class="r">wartet.</span>',
    "fin.btn": "Nächsten Standort finden",
    "fin.hours": "Montag – Sonntag · 00:00 – 24:00",
  },
  hr: {
    hud: ["02:14 · Crveno svjetlo", "02:15 · Stop & Go — Otvoreno", "02:21 · Državna cesta", "02:30 · Otvoreno 0–24"],
    "nav.loc": "Lokacije", "nav.open": "Otvoreno 0–24", "nav.follow": "Pratite nas",
    "s1.h1": '<span class="r">Stani.</span>',
    "s1.p": "Svako putovanje treba predah.",
    "s2.h2": '<span class="a" style="display:block;margin-bottom:.32em">Opusti se.</span>Napuni baterije.',
    "s2.p": "Kava, minimarket i snack food.<br>24 sata dnevno, 7 dana u tjednu.",
    "s3.h1": '<span class="g">Nastavi.</span>',
    "s3.p": "Svjetlo je uvijek upaljeno. Svrati kad god želiš.",
    "kafe.eb": "01 · Kava",
    "kafe.h2": 'Kava u kojoj<br><span class="a">uživaš svaki put.</span>',
    "kafe.p": "U Stop &amp; Go čeka te Ama Caffè.<br>Od omiljenog espressa do cappuccina<br>u kojem uživaš tijekom pauze.<br>Ponesi je sa sobom ili sjedni i uživaj bez žurbe.",
    "kafe.li": "Vanjska terasa",
    "mini.eb": "02 · Minimarket",
    "mini.h2": 'Sve<span class="r" style="display:block;margin-top:.14em">za put.</span>',
    "mini.p": "Sve što ti treba na putu, naći ćeš ovdje.<br>Hladna pića, grickalice i proizvodi za svaki dan,<br>24 sata dnevno, 7 dana u tjednu.",
    "mini.ul": "<li>Hladna pića</li><li>Grickalice</li><li>Svakodnevni proizvodi</li><li>0–24</li>",
    "rv.eb": "Riječ gostiju",
    "rv.h2": 'Što kažu<span class="g" style="display:block;margin-top:.3em">putnici.</span>',
    "rv.tr": "prevedeno s francuskog", "rv.leave": "Ostavi recenziju",
    "loc.eb": "Uvijek blizu tebe",
    "loc.h2": '3 lokacije.<br><span class="g">0 čekanja.</span>',
    "loc.open": "Otvoreno →",
    "fin.h2": 'Tvoja sljedeća <br class="m-br">stanica<br><span class="r">te čeka.</span>',
    "fin.btn": "Pronađi najbližu lokaciju",
    "fin.hours": "Ponedjeljak – Nedjelja · 00:00 – 24:00",
  },
};
const i18nEls = [...document.querySelectorAll("[data-i18n]")];
i18nEls.forEach(e => e.dataset.sq = e.innerHTML);
function setLang(lang, save) {
  if (!I18N[lang]) lang = "sq";
  i18nEls.forEach(e => { const v = lang === "sq" ? e.dataset.sq : I18N[lang][e.dataset.i18n]; if (v != null) e.innerHTML = v; });
  document.documentElement.lang = lang;
  window.HUD = I18N[lang].hud; // read by the 3D loop
  document.getElementById("hud").textContent = window.HUD[0];
  document.getElementById("lang-cur").textContent = lang.toUpperCase();
  document.getElementById("lang-flag").src = "images/flags/" + { sq: "al", en: "gb", it: "it", de: "de", hr: "hr" }[lang] + ".svg";
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-current", b.dataset.lang === lang));
  if (save) try { localStorage.setItem("sg-lang", lang); } catch (e) {}
  if (window.ScrollTrigger) ScrollTrigger.refresh(); // card heights changed → re-anchor the 3D scroll
}
let startLang = new URLSearchParams(location.search).get("lang");
if (!startLang) try { startLang = localStorage.getItem("sg-lang"); } catch (e) {}
setLang(startLang || "sq");

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
