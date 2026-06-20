"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t, locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#galeria", label: t.nav.galeria },
    { href: "#lokacioni", label: t.nav.lokacioni },
    { href: "#review", label: t.nav.review },
    { href: "#socials", label: t.nav.socials },
  ];

  useEffect(() => {
    const navbarInner = innerRef.current;
    const heroHeading = document.querySelector<HTMLElement>(".hero__content h1");

    function syncNavbarWidth() {
      if (!navbarInner || !heroHeading) return;
      navbarInner.style.width = "";
      const textWidth = heroHeading.getBoundingClientRect().width;
      navbarInner.style.width = `${textWidth}px`;
      const needed = navbarInner.scrollWidth;
      if (needed > textWidth) {
        navbarInner.style.width = `${needed}px`;
      }
    }

    syncNavbarWidth();
    window.addEventListener("resize", syncNavbarWidth);
    document.fonts?.ready.then(syncNavbarWidth);

    return () => window.removeEventListener("resize", syncNavbarWidth);
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (innerRef.current && !innerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="navbar" id="navbar">
      <div className="navbar__inner" ref={innerRef}>
        <a href="#" className="navbar__logo">
          <img src="/images/stopandgo-albania_logo.png" alt="Stop & Go" />
        </a>
        <nav className={`navbar__nav${isOpen ? " is-open" : ""}`} id="navMenu">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__actions">
          <LanguageSwitcher />
          <button
            className="navbar__toggle"
            aria-label="Hap menun"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
