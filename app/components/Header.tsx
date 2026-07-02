import Link from "next/link";

const navItems = ["Články", "Archiv", "O nás", "Instagram"];

export function Header() {
  return (
    <header className="site-header" aria-label="Hlavní navigace">
      <Link className="brand-lockup" href="/" aria-label="Studyjo Brakedance homepage">
        <img src="/brand/sb-logo.svg" alt="" className="brand-mark" width={54} height={54} />
        <span className="brand-copy">
          <strong>Studyjo Brakedance</strong>
          <span>Satirické médium o breakingu</span>
        </span>
      </Link>
      <nav className="site-nav" aria-label="Sekce webu">
        {navItems.map((item) => (
          <a key={item} href={item === "Instagram" ? "https://www.instagram.com/" : "#article"}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
