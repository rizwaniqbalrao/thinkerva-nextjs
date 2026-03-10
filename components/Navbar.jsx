'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    setTheme(stored);
    document.documentElement.setAttribute('data-theme', stored);

    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const scrollTo = (id) => {
    closeMenu();
    if (pathname !== '/') {
      // Navigate to home page with hash; then scroll on arrival
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <nav className="navbar container">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-top">
            <span className="logo-brand">Thinkerva</span>
            <span className="logo-tld">.com</span>
          </div>
          <span className="logo-tagline">Thinking in Variation</span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
          <li><a href="#about" className="nav-link" onClick={() => scrollTo('about')}>About</a></li>
          <li><a href="#expertise" className="nav-link" onClick={() => scrollTo('expertise')}>Expertise</a></li>
          <li><a href="#services" className="nav-link" onClick={() => scrollTo('services')}>Services</a></li>
          <li><a href="#pricing" className="nav-link" onClick={() => scrollTo('pricing')}>Pricing</a></li>
          <li><Link href="/consultants" className="nav-link nav-link--consultant" onClick={closeMenu}>Join as Consultant</Link></li>
          <li><a href="#contact" className="nav-link nav-link--cta" onClick={() => scrollTo('contact')}>Book Consultation</a></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="theme-icon theme-icon--sun">☀</span>
            <span className="theme-icon theme-icon--moon">☽</span>
          </button>
          <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
