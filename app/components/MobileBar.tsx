"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { INSTAGRAM_URL } from "../i18n/translations";
import { InstagramIcon, PinIcon } from "./Icons";

/** Thumb-reach action bar for phones; appears once the hero is scrolled past. */
export default function MobileBar() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // The footer repeats the same actions, so the bar steps aside once it shows up.
    const footer = document.getElementById("socials");

    function handleScroll() {
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setIsVisible(window.scrollY > window.innerHeight * 0.8 && !footerInView);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`mobile-bar${isVisible ? " is-visible" : ""}`}>
      <span className="mobile-bar__status">
        <span className="live-dot" />
        {t.hero.openNow}
        <strong>24/7</strong>
      </span>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mobile-bar__icon" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a href="#lokacioni" className="btn btn--red btn--sm">
        <PinIcon className="btn__icon" />
        {t.nav.cta}
      </a>
    </div>
  );
}
