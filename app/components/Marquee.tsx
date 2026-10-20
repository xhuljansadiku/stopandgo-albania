"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();
  // Doubled so the -50% translate loops seamlessly.
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className={`marquee__item${i % 2 ? " marquee__item--outline" : ""}`}>
            {item}
            <span className={`marquee__star marquee__star--${i % 3 === 0 ? "red" : i % 3 === 1 ? "green" : "white"}`}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
