"use client";

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../i18n/LanguageContext";
import { ChevronIcon, CloseIcon } from "./Icons";

const PHOTOS = [
  { src: "/images/storefront-1.jpg", span: "wide" },
  { src: "/images/espresso.jpg", span: "tall" },
  { src: "/images/latte-art.png", span: "square" },
  { src: "/images/storefront-3.jpg", span: "square" },
] as const;

export default function Galeria() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current === null ? null : (current + delta + PHOTOS.length) % PHOTOS.length
      ),
    []
  );

  useEffect(() => {
    document.body.classList.toggle("is-locked", open !== null);
    if (open === null) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, step]);

  return (
    <section className="galeria section" id="galeria">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow={t.nav.galeria}
          heading={t.galeria.heading}
          subtitle={t.galeria.subtitle}
        />

        <div className="bento">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 90} className={`bento__item bento__item--${photo.span}`}>
              <button type="button" className="bento__btn" onClick={() => setOpen(i)}>
                <img src={photo.src} alt={t.galeria.alts[i]} loading="lazy" />
                <span className="bento__caption">
                  <span className="bento__index">0{i + 1}</span>
                  {t.galeria.alts[i]}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t.galeria.alts[open]}
          onClick={() => setOpen(null)}
        >
          <button type="button" className="lightbox__close" aria-label={t.galeria.close}>
            <CloseIcon />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label={t.galeria.prev}
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <ChevronIcon />
          </button>
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img key={open} src={PHOTOS[open].src} alt={t.galeria.alts[open]} />
            <figcaption>
              <span>
                0{open + 1} / 0{PHOTOS.length}
              </span>
              {t.galeria.alts[open]}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label={t.galeria.next}
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <ChevronIcon />
          </button>
        </div>
      )}
    </section>
  );
}
