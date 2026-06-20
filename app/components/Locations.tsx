"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const GLOW = ["red", "green", "red"] as const;
const IMAGES = ["/images/storefront-1.jpg", "/images/storefront-3.jpg", "/images/bg.jpeg"];

export default function Locations() {
  const { t } = useLanguage();

  return (
    <section className="locations" id="lokacioni">
      <div className="locations__bg" />
      <div className="locations__overlay" />
      <div className="section-head">
        <h2 className="heading heading--green">{t.locations.heading}</h2>
        <p className="section-head__subtitle">{t.locations.subtitle}</p>
      </div>

      {t.locations.items.map((item, i) => (
        <Reveal
          key={item.title}
          className={`location-row${i === 1 ? " location-row--reverse" : ""}`}
        >
          <div className={`location-row__image location-row__image--${GLOW[i]}`}>
            <img src={IMAGES[i]} alt={item.alt} />
          </div>
          <div className="location-row__text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href="#" className="btn btn--red">
              {item.cta}
            </a>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
