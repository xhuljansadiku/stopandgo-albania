"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../i18n/LanguageContext";
import { ArrowIcon } from "./Icons";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const start = performance.now();
      const duration = reduceMotion ? 0 : 1600;

      function step(now: number) {
        const progress = duration ? Math.min((now - start) / duration, 1) : 1;
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(step);
      }

      frame = requestAnimationFrame(step);
    });

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="lights-strip" aria-hidden />
      <div className="container about__grid">
        <Reveal className="about__visual">
          <figure className="about__photo about__photo--main">
            <img src="/images/latte-art.png" alt={t.about.imageAlt} />
          </figure>
          <figure className="about__photo about__photo--small">
            <img src="/images/espresso.jpg" alt={t.about.imageAlt2} />
          </figure>
          <div className="spin-badge" aria-hidden>
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              {/* textLength stretches every locale's phrase to exactly one lap (2πr ≈ 490). */}
              <text textLength={486} lengthAdjust="spacing">
                <textPath href="#badge-circle" textLength={486} lengthAdjust="spacing">
                  {t.about.badge}
                </textPath>
              </text>
            </svg>
            <span className="spin-badge__core">24/7</span>
          </div>
        </Reveal>

        <div className="about__text">
          <SectionHead index="01" eyebrow={t.nav.about} heading={t.about.heading} />
          <Reveal delay={100}>
            <p className="about__paragraph">{t.about.paragraph}</p>
          </Reveal>

          <Reveal delay={200} className="stats">
            {t.about.stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__value">
                  {typeof stat.value === "number" ? <CountUp value={stat.value} /> : stat.value}
                </span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={300}>
            <a href="#services" className="link-arrow">
              {t.about.cta}
              <ArrowIcon className="link-arrow__icon" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
