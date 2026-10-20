"use client";

import type { MouseEvent } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../i18n/LanguageContext";
import { SERVICES } from "../i18n/translations";
import { BasketIcon, CupIcon, SnackIcon } from "./Icons";

const ICONS = [CupIcon, BasketIcon, SnackIcon];
const TONES = ["red", "white", "green"] as const;

// Feeds the cursor position to CSS so the card's glow follows the pointer.
function trackPointer(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="services section" id="services">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow={t.services.eyebrow}
          heading={t.services.heading}
          subtitle={t.services.subtitle}
        />

        <div className="services__grid">
          {SERVICES.map((name, i) => {
            const Icon = ICONS[i];
            const item = t.services.items[i];
            return (
              <Reveal key={name} delay={i * 120}>
                <article
                  className={`service-card service-card--${TONES[i]}`}
                  onMouseMove={trackPointer}
                >
                  <div className="service-card__top">
                    <span className="service-card__icon">
                      <Icon />
                    </span>
                    <span className="service-card__num">0{i + 1}</span>
                  </div>
                  <h3 className="service-card__title">{name}</h3>
                  <p className="service-card__text">{item.text}</p>
                  <ul className="service-card__points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
