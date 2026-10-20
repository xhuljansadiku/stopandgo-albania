"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { PinIcon } from "./Icons";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  const navLinks = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "galeria", label: t.nav.galeria },
    { id: "lokacioni", label: t.nav.lokacioni },
    { id: "review", label: t.nav.review },
  ];

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link for whichever section sits in the middle of the viewport.
  useEffect(() => {
    const sections = ["about", "services", "galeria", "lokacioni", "review"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", isOpen);
    if (!isOpen) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <header className={`navbar${isScrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Stop & Go">
          <img src="/images/stopandgo-albania_logo.png" alt="Stop & Go" />
        </a>

        <nav className="navbar__nav" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <LanguageSwitcher />
          <a href="#lokacioni" className="btn btn--neon btn--sm navbar__cta">
            <PinIcon className="btn__icon" />
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-label={isOpen ? t.nav.close : t.nav.menu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobile-menu" aria-hidden={!isOpen}>
        <nav className="mobile-menu__nav">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{ transitionDelay: isOpen ? `${120 + i * 60}ms` : "0ms" }}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#lokacioni"
          className="btn btn--red mobile-menu__cta"
          tabIndex={isOpen ? 0 : -1}
          onClick={() => setIsOpen(false)}
        >
          <PinIcon className="btn__icon" />
          {t.nav.cta}
        </a>
      </div>
    </header>
  );
}
