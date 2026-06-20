"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALE_OPTIONS } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const current = LOCALE_OPTIONS.find((option) => option.code === locale);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher__btn"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Choose language"
      >
        <span className={`fi fi-${current?.flag}`} />
        {current?.short}
      </button>
      {isOpen && (
        <div className="lang-switcher__menu">
          {LOCALE_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.code}
              className={`lang-switcher__option${
                option.code === locale ? " is-active" : ""
              }`}
              onClick={() => {
                setLocale(option.code);
                setIsOpen(false);
              }}
            >
              <span className={`fi fi-${option.flag}`} />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
