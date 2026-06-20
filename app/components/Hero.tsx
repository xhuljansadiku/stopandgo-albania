"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: "url('/images/bg.jpeg')" }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>
          {t.hero.titlePrefix} <span className="text-red">Stop</span> &{" "}
          <span className="text-green">Go</span>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
      </div>
    </section>
  );
}
