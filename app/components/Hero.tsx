"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { SERVICES } from "../i18n/translations";
import { ArrowIcon, ClockIcon } from "./Icons";

function useAlbaniaTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Tirane",
    });

    function tick() {
      setTime(format.format(new Date()));
    }

    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export default function Hero() {
  const { t } = useLanguage();
  const time = useAlbaniaTime();
  const [first, second, third] = t.hero.lines;

  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden>
        <img src="/images/bg.jpeg" alt="" />
      </div>
      <div className="hero__shade" aria-hidden />
      <div className="hero__lights" aria-hidden />

      <div className="hero__content container">
        <div className="hero__status">
          <span className="live-dot" />
          {t.hero.openNow}
          <span className="hero__status-sep" />
          <ClockIcon className="hero__status-icon" />
          <span className="hero__time" aria-label={t.hero.localTime}>
            {time ?? "--:--"}
          </span>
          <span className="hero__status-tag">24/7</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line hero__line--red">
            <span className="neon neon--red">{first}</span>
          </span>
          <span className="hero__line hero__line--white">
            <span>{second}</span>
          </span>
          <span className="hero__line hero__line--green">
            <span className="neon neon--green">{third}</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__ctas">
            <a href="#lokacioni" className="btn btn--red">
              {t.hero.ctaPrimary}
              <ArrowIcon className="btn__icon btn__icon--end" />
            </a>
            <a href="#galeria" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__footer container">
        <ul className="hero__services">
          {SERVICES.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <a href="#about" className="hero__scroll">
          {t.hero.scroll}
          <span className="hero__scroll-track">
            <span className="hero__scroll-thumb" />
          </span>
        </a>
      </div>
    </section>
  );
}
