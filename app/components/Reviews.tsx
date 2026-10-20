"use client";

import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../i18n/LanguageContext";
import { StarIcon } from "./Icons";

const TONES = ["red", "white", "green"] as const;

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="reviews section" id="review">
      <div className="container">
        <SectionHead
          index="05"
          eyebrow={t.nav.review}
          heading={t.reviews.heading}
          subtitle={t.reviews.subtitle}
          align="center"
        />

        <div className="reviews__grid">
          {t.reviews.items.map((review, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className={`review-card review-card--${TONES[i]}`}>
                <span className="review-card__quote" aria-hidden>
                  &ldquo;
                </span>
                <div className="review-card__stars" aria-label="5 / 5">
                  {Array.from({ length: 5 }, (_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <blockquote>{review.text}</blockquote>
                <figcaption>
                  <span className="review-card__avatar" aria-hidden>
                    {review.role.charAt(0)}
                  </span>
                  {review.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
