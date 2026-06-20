export default function InstagramBubble() {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="ig-bubble"
      aria-label="Instagram"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="2" width="20" height="20" rx="6" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
