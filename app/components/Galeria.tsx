"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Galeria() {
  const { t } = useLanguage();

  return (
    <section className="galeria" id="galeria">
      <div className="galeria__bg" />
      <div className="galeria__overlay" />
      <div className="section-head">
        <h2 className="heading heading--red">{t.galeria.heading}</h2>
        <p className="section-head__subtitle">{t.galeria.subtitle}</p>
      </div>
      <div className="galeria__grid">
        <Reveal className="galeria__item">
          <img src="/images/storefront-1.jpg" alt={t.galeria.alt1} />
        </Reveal>
        <Reveal className="galeria__item">
          <img src="/images/storefront-3.jpg" alt={t.galeria.alt2} />
        </Reveal>
        <Reveal className="galeria__item">
          <img src="/images/espresso.jpg" alt={t.galeria.alt3} />
        </Reveal>
      </div>
      <div className="section-cta">
        <a href="#lokacioni" className="btn btn--green">
          {t.galeria.cta}
        </a>
      </div>
    </section>
  );
}
