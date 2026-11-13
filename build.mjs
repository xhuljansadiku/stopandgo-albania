// Static build: pre-renders one HTML page per language so search engines index every language.
//   /    → Albanian (index.html as written)      /en /it /de /hr → same page, text from js/i18n.js
// Also writes sitemap.xml + robots.txt. No dependencies: `node build.mjs` → dist/ (Vercel runs it on deploy).
// Domain: set SITE_URL in the Vercel project env (e.g. https://stopandgo.al) — it replaces the default everywhere.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const DEFAULT_SITE = 'https://stopandgo-albania.vercel.app';
const SITE = (process.env.SITE_URL || DEFAULT_SITE).replace(/\/$/, '');
const OUT = 'dist';
const LANGS = ['sq', 'en', 'it', 'de', 'hr'];
const PATHS = { sq: '/', en: '/en', it: '/it', de: '/de', hr: '/hr' };
const FILES = { sq: 'index.html', en: 'en.html', it: 'it.html', de: 'de.html', hr: 'hr.html' }; // cleanUrls serves en.html at /en
const LOCALES = { sq: 'sq_AL', en: 'en_GB', it: 'it_IT', de: 'de_DE', hr: 'hr_HR' };
const FLAGS = { sq: 'al', en: 'gb', it: 'it', de: 'de', hr: 'hr' };
const STATIC = ['css', 'js', 'images', 'favicon.ico', 'apple-touch-icon.png', 'site.webmanifest', '404.html'];

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync('js/i18n.js', 'utf8'), sandbox);
const I18N = sandbox.window.I18N;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = lang => SITE + (lang === 'sq' ? '/' : PATHS[lang]);
function must(html, re, what) { if (!re.test(html)) throw new Error(`build: ${what} not found in index.html`); }

// Replace the inner HTML of every element carrying data-i18n="key" (elements are never nested in each other)
function translateBlocks(html, T) {
  const open = /<([a-z0-9]+)\b([^>]*?)\sdata-i18n="([^"]+)"([^>]*)>/gi;
  let out = '', last = 0, m;
  while ((m = open.exec(html))) {
    const [tag, name, pre, key, post] = m;
    const start = m.index + tag.length;
    // find the matching closing tag, counting nested tags of the same name
    const re = new RegExp(`<(/?)${name}\\b[^>]*>`, 'gi'); re.lastIndex = start;
    let depth = 1, end = -1, t;
    while ((t = re.exec(html))) { depth += t[1] ? -1 : 1; if (!depth) { end = t.index; break; } }
    if (end < 0) throw new Error(`build: no closing </${name}> for data-i18n="${key}"`);
    const inner = html.slice(start, end), v = T[key];
    if (v == null) throw new Error(`build: missing translation "${key}"`);
    out += html.slice(last, m.index) + `<${name}${pre} data-i18n="${key}" data-sq="${esc(inner)}"${post}>` + v;
    last = end; open.lastIndex = end;
  }
  return out + html.slice(last);
}

function render(src, lang) {
  const T = I18N[lang];
  let h = src.replaceAll(DEFAULT_SITE, SITE);
  if (lang !== 'sq') {
    h = translateBlocks(h, T);
    h = h.replace(/aria-label="([^"]*)"([^>]*?)data-i18n-label="([^"]+)"/g, (all, sq, mid, key) =>
      `aria-label="${esc(T[key] ?? sq)}"${mid}data-i18n-label="${key}" data-sq-label="${sq}"`);
  }
  must(h, /<html lang="sq">/, '<html lang>');
  h = h.replace('<html lang="sq">', `<html lang="${lang}" data-built>`);
  h = h.replace(/<title>[^<]*<\/title>/, `<title>${esc(T['meta.title'])}</title>`);
  h = h.replace(/(<meta name="description" content=")[^"]*/, `$1${esc(T['meta.desc'])}`);
  h = h.replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(T['meta.og'])}`);
  h = h.replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(T['meta.desc'])}`);
  h = h.replace(/(<meta property="og:locale" content=")[^"]*/, `$1${LOCALES[lang]}`);
  h = h.replace(/(<meta property="og:url" content=")[^"]*/, `$1${url(lang)}`);
  must(h, /<link rel="canonical" href="[^"]*">/, 'canonical');
  const alt = LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${url(l)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${url('sq')}">`;
  h = h.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url(lang)}">\n${alt}`);
  // first-paint state of the HUD + language switcher (main.js keeps them in sync afterwards)
  h = h.replace(/(<div class="hud" id="hud">)[^<]*/, `$1${esc(T.hud[0])}`);
  h = h.replace(/(<span id="lang-cur">)[^<]*/, `$1${lang.toUpperCase()}`);
  h = h.replace(/(id="lang-flag" src=")[^"]*/, `$1/images/flags/${FLAGS[lang]}.svg`);
  h = h.replace(`<button type="button" data-lang="${lang}">`, `<button type="button" data-lang="${lang}" aria-current="true">`);
  return h;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
for (const f of STATIC) fs.cpSync(f, path.join(OUT, f), { recursive: true });
const src = fs.readFileSync('index.html', 'utf8');
for (const lang of LANGS) fs.writeFileSync(path.join(OUT, FILES[lang]), render(src, lang));
for (const f of ['404.html', 'site.webmanifest']) {
  const p = path.join(OUT, f); fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll(DEFAULT_SITE, SITE));
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGS.map(l => `  <url>
    <loc>${url(l)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map(a => `    <xhtml:link rel="alternate" hreflang="${a}" href="${url(a)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url('sq')}"/>
  </url>`).join('\n')}
</urlset>
`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`build: ${LANGS.length} pages → ${OUT}/ (${SITE})`);
