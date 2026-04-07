import { useState, useEffect, useCallback, type MouseEvent } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Agents', href: '#agents' },
  { label: 'Workflow', href: '#workflow' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('features');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // Scroll-spy: find which section is currently in view
    const offset = 120; // account for fixed navbar height
    for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTION_IDS[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          setActiveSection(SECTION_IDS[i]);
          return;
        }
      }
    }
    setActiveSection(SECTION_IDS[0]);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a
          className="navbar-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          GenMobi.Studio
        </a>

        <div className="navbar-links">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            return (
              <a
                key={id}
                href={link.href}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => scrollTo(e, id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
