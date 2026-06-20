"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="reviews" id="review">
      <div className="section-head">
        <h2 className="heading heading--white">{t.reviews.heading}</h2>
        <p className="section-head__subtitle">{t.reviews.subtitle}</p>
      </div>
      <div className="reviews__grid">
        {t.reviews.items.map((text, i) => (
          <Reveal className="review-card" key={i}>
            <div className="review-card__head">
              <div className="review-card__avatar" />
              <div className="review-card__stars">★★★★★</div>
            </div>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
      <div className="section-cta">
        <a href="#" className="btn btn--green">
          {t.reviews.cta}
        </a>
      </div>
    </section>
  );
}
