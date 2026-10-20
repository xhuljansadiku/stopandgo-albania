"use client";

import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { INSTAGRAM_URL } from "../i18n/translations";
import { ArrowUpIcon, InstagramIcon, PinIcon } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#galeria", label: t.nav.galeria },
    { href: "#lokacioni", label: t.nav.lokacioni },
    { href: "#review", label: t.nav.review },
  ];

  return (
    <footer className="footer" id="socials">
      <div className="lights-strip" aria-hidden />

      <div className="container">
        <Reveal className="footer__cta">
          <h2 className="footer__title">
            {t.footer.heading.start} <em className="accent">{t.footer.heading.accent}</em>
          </h2>
          <p className="footer__text">{t.footer.text}</p>
          <div className="footer__buttons">
            <a href="#lokacioni" className="btn btn--red">
              <PinIcon className="btn__icon" />
              {t.footer.directionsBtn}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <InstagramIcon className="btn__icon" />
              {t.footer.instagramBtn}
            </a>
          </div>
        </Reveal>

        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/stopandgo-albania_logo.png" alt="Stop & Go" className="footer__logo" />
            <p>{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="footer__heading">{t.footer.navTitle}</h3>
            <ul className="footer__list">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">{t.footer.hoursTitle}</h3>
            <ul className="footer__list footer__list--plain">
              <li>{t.footer.hoursDays}</li>
              <li className="footer__hours">{t.footer.hoursTime}</li>
              <li className="footer__open">
                <span className="live-dot" />
                {t.hero.openNow}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">{t.footer.followTitle}</h3>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer__social">
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Stop & Go. {t.footer.copyright}
          </p>
          <a href="#top" className="footer__top">
            {t.footer.backToTop}
            <ArrowUpIcon />
          </a>
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden>
        <span className="footer__wordmark-red">Stop</span>
        <span className="footer__wordmark-amp">&amp;</span>
        <span className="footer__wordmark-green">Go</span>
      </div>
    </footer>
  );
}
