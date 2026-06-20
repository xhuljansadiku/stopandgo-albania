"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import { useLanguage } from "../i18n/LanguageContext";

const LOCATIONS: { coords: [number, number]; name: string; color: string }[] = [
  { coords: [41.3275, 19.8187], name: "Location 1", color: "#d62139" },
  { coords: [41.365, 19.835], name: "Location 2", color: "#d62139" },
  { coords: [41.293, 19.759], name: "Location 3", color: "#2b6715" },
];

export default function MapSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapInstanceRef.current) return;

    let resizeHandler: (() => void) | null = null;

    import("leaflet").then((L) => {
      if (mapInstanceRef.current || !containerRef.current) return;

      function pinIcon(color: string) {
        return L.divIcon({
          className: "map-pin",
          html: `<svg viewBox="0 0 32 44" width="32" height="44" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 28 16 28s16-17 16-28C32 7.163 24.837 0 16 0z" fill="${color}"/>
            <circle cx="16" cy="16" r="6" fill="#fff"/>
          </svg>`,
          iconSize: [32, 44],
          iconAnchor: [16, 44],
          popupAnchor: [0, -38],
        });
      }

      const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(
        [41.3275, 19.8187],
        12
      );
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const markers = LOCATIONS.map(({ coords, name, color }) =>
        L.marker(coords, { icon: pinIcon(color) }).addTo(map).bindPopup(name)
      );

      map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [40, 40] });

      resizeHandler = () => map.invalidateSize();
      window.addEventListener("resize", resizeHandler);
    });

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section className="maps" id="maps">
      <h2 className="maps__title">
        {t.maps.openPrefix} <span className="maps__highlight">{t.maps.hours}</span>
      </h2>
      <div className="maps__frame">
        <div ref={containerRef} className="maps__leaflet" />
      </div>
      <p className="maps__subtitle">{t.maps.subtitle}</p>
    </section>
  );
}
