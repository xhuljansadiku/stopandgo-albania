"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      className="about"
      id="about"
      style={{ backgroundImage: "url('/images/bg.jpeg')" }}
    >
      <div className="about__overlay" />
      <Reveal className="about__inner">
        <div className="about__image">
          <img src="/images/latte-art.png" alt={t.about.imageAlt} />
        </div>
        <div className="about__text">
          <h2 className="heading heading--green">{t.about.heading}</h2>
          <p>
            <strong>Stop & Go</strong> {t.about.paragraph}
          </p>
          <a href="#galeria" className="btn btn--red">
            {t.about.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
