"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="follow" id="socials">
      <Reveal className="follow__inner">
        <div className="follow__post">
          <div className="follow__post-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="8.5" cy="8.5" r="1" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            {t.footer.instagramLabel}
          </div>
          <img src="/images/latte-art.png" alt={t.footer.postAlt} />
          <div className="follow__post-icons">
            <span>♥</span>
            <span>💬</span>
            <span>↗</span>
          </div>
        </div>
        <div className="follow__text">
          <img
            src="/images/stopandgo-albania_logo.png"
            alt={t.footer.logoAlt}
            className="follow__logo"
          />
          <h2>{t.footer.followUs}</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--red"
          >
            {t.footer.instagramBtn}
          </a>
        </div>
      </Reveal>
      <p className="follow__copy">
        © {new Date().getFullYear()} Stop & Go. {t.footer.copyright}
      </p>
    </footer>
  );
}
