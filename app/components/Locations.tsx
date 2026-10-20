"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { useLanguage } from "../i18n/LanguageContext";
import { NavigateIcon, PinIcon } from "./Icons";

const LOCATIONS: { coords: [number, number]; image: string; tone: "red" | "green" }[] = [
  { coords: [41.3275, 19.8187], image: "/images/storefront-1.jpg", tone: "red" },
  { coords: [41.365, 19.835], image: "/images/storefront-3.jpg", tone: "green" },
  { coords: [41.293, 19.759], image: "/images/bg.jpeg", tone: "red" },
];

function directionsUrl([lat, lng]: [number, number]) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

export default function Locations() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let resizeHandler: (() => void) | null = null;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || mapRef.current || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
      });
      mapRef.current = map;
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Standard OSM tiles; the night look is applied with a CSS filter on the tile pane.
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      markersRef.current = LOCATIONS.map(({ coords, tone }, i) => {
        const marker = L.marker(coords, {
          icon: L.divIcon({
            className: `map-pin map-pin--${tone}${i === 0 ? " is-active" : ""}`,
            html: `<span class="map-pin__pulse"></span><span class="map-pin__dot">${i + 1}</span>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
          }),
        }).addTo(map);
        marker.on("click", () => setActive(i));
        return marker;
      });

      map.fitBounds(L.featureGroup(markersRef.current).getBounds(), { padding: [60, 60] });

      resizeHandler = () => map.invalidateSize();
      window.addEventListener("resize", resizeHandler);
    });

    return () => {
      cancelled = true;
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, []);

  useEffect(() => {
    markersRef.current.forEach((marker, i) => {
      marker.getElement()?.classList.toggle("is-active", i === active);
      marker.setZIndexOffset(i === active ? 1000 : 0);
    });
  }, [active]);

  function focus(index: number) {
    setActive(index);
    mapRef.current?.flyTo(LOCATIONS[index].coords, 15, { duration: 1.2 });
  }

  return (
    <section className="locations section" id="lokacioni">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow={t.nav.lokacioni}
          heading={t.locations.heading}
          subtitle={t.locations.subtitle}
        />

        <div className="locations__layout">
          <ol className="locations__list">
            {t.locations.items.map((item, i) => (
              <li key={i}>
                <Reveal delay={i * 100}>
                  <article
                    className={`loc-card loc-card--${LOCATIONS[i].tone}${active === i ? " is-active" : ""}`}
                  >
                    <button
                      type="button"
                      className="loc-card__main"
                      onClick={() => focus(i)}
                      aria-pressed={active === i}
                    >
                      <img src={LOCATIONS[i].image} alt="" className="loc-card__thumb" />
                      <span className="loc-card__body">
                        <span className="loc-card__head">
                          <span className="loc-card__num">0{i + 1}</span>
                          <span className="loc-card__badge">
                            <span className="live-dot" />
                            {t.locations.open}
                          </span>
                        </span>
                        <span className="loc-card__title">{item.title}</span>
                        <span className="loc-card__text">{item.text}</span>
                      </span>
                    </button>
                    <div className="loc-card__actions">
                      <button type="button" className="chip" onClick={() => focus(i)}>
                        <PinIcon className="chip__icon" />
                        {t.locations.showOnMap}
                      </button>
                      <a
                        href={directionsUrl(LOCATIONS[i].coords)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chip chip--solid"
                      >
                        <NavigateIcon className="chip__icon" />
                        {t.locations.directions}
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="locations__map">
            <div ref={containerRef} className="locations__leaflet" />
            <div className="locations__map-label">
              <span className="live-dot" />
              {t.locations.items[active].title} · {t.locations.open}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
