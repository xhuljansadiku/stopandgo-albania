# TODO — Stop & Go

## ✅ Gati (redizajni "Neon Night Stop")

- [x] Hero me titull neon ("Ndalo. Shijo. Vazhdo."), ora live e Shqipërisë dhe badge "Hapur tani · 24/7"
- [x] Shirit lëvizës (marquee) me produktet
- [x] Rreth Nesh: foto të mbivendosura, badge rrotullues 24/7, numra që numërohen
- [x] Seksion i ri Shërbimet (Caffe Shop · Minimarket · Snack Food)
- [x] Galeri bento + lightbox (shigjeta, Esc)
- [x] Lokacionet + harta të bashkuara: kliko kartën → harta fluturon atje, buton "Merr drejtimin" (Google Maps)
- [x] Vlerësimet me citate serif
- [x] Footer me CTA, orar, navigim dhe wordmark gjigant
- [x] Navbar xhami që ndriçon seksionin aktiv + menu fullscreen në celular
- [x] Shirit veprimi në fund të ekranit për celular
- [x] Përkthime për 5 gjuhë (SQ, EN, IT, DE, HR)
- [x] Respekton "reduced motion" për aksesueshmëri

## 🔴 Përmbajtje reale (placeholder tani)

- [ ] **Koordinatat e vërteta** të 3 lokacioneve — `app/components/Locations.tsx` (`LOCATIONS`)
- [ ] **Emrat/adresat e vërteta** të lokacioneve (tani "Lokacioni 1/2/3") — `app/i18n/translations.ts`
- [ ] **Foto e veçantë për çdo lokacion** (tani përdoren të njëjtat foto fasade)
- [ ] **Linku i Instagram-it** (tani vetëm `https://instagram.com`) — `INSTAGRAM_URL` te `translations.ts`
- [ ] **Vlerësime të vërteta** nga Google Maps (tani janë tekste shembull)
- [ ] Numri i telefonit / WhatsApp (nuk ekziston ende në faqe)
- [ ] Më shumë foto për galerinë (produkte, interier, minimarket)

## 🟡 Përkthime

- [ ] Rishikim nga folës amtarë për **IT**, **DE**, **HR**

## 🟡 Teknike

- [ ] Rregullo gabimin e lint te `app/i18n/LanguageContext.tsx` (setState brenda useEffect — ishte edhe para redizajnit)
- [ ] Kalo `<img>` → `next/image` për performancë më të mirë (LCP)
- [ ] Kompreso fotot në `public/images` (disa janë mbi 1 MB)
- [ ] SEO: Open Graph image, `sitemap.xml`, `robots.txt`, të dhëna strukturore `LocalBusiness`
- [ ] Gjuha e faqes të ruhet në URL (`/en`, `/it`…) për SEO, jo vetëm në localStorage

## 🚀 Publikimi

- [ ] Deploy në Vercel (lidh repo-n GitHub)
- [ ] Domain (p.sh. `stopandgo.al`)
- [ ] Google Business Profile + link te faqja
