export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src="/brand/sb-logo-white.svg" alt="" className="footer-logo" width={74} height={80} />
        <h2>Studyjo Brakedance</h2>
        <p>Satirické médium o breakingu.</p>
        <p>Veškerá podobnost se skutečností může být čistě náhodná. Nebo taky ne.</p>
        <nav className="footer-social" aria-label="Sociální sítě Studyjo Brakedance">
          <a
            href="https://www.instagram.com/studyjobrakedance/"
            aria-label="Instagram Studyjo Brakedance"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/studyjobrakedance"
            aria-label="Facebook Studyjo Brakedance"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 8.1H17V4.2c-.4-.1-1.8-.2-3.4-.2-3.4 0-5.6 2-5.6 5.7V13H4.5v4.4H8V24h4.4v-6.6H16l.6-4.4h-4.2V10c0-1.3.4-1.9 2.1-1.9Z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
