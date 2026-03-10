import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <span className="logo-brand">Thinkerva</span>
              <span className="logo-tld">.com</span>
            </div>
            <p className="footer-tagline">Global Technology Consultancy<br />Led by Dr. Naveed Iqbal</p>
            <p className="footer-desc">Driving innovation at the intersection of AI, engineering, and business transformation — serving governments, enterprises, and startups worldwide.</p>
            <p className="footer-tagline-alt">Thinking in Variation</p>
          </div>
          <div className="footer-nav-cols">
            <div className="footer-nav-col">
              <h4 className="fn-title">Navigation</h4>
              <a href="#about">About Dr. Naveed</a>
              <a href="#expertise">Core Expertise</a>
              <a href="#services">Consulting Services</a>
              <a href="#industries">Industries</a>
              <a href="#experience">Experience</a>
              <a href="#pricing">Pricing &amp; Packages</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-nav-col">
              <h4 className="fn-title">Services</h4>
              <a href="#services">AI &amp; Technology Consulting</a>
              <a href="#services">Business Strategy</a>
              <a href="#services">Digital Transformation</a>
              <a href="#services">BPR &amp; Operations</a>
              <a href="#services">R&amp;D Advisory</a>
              <a href="#pricing">Starter — USD 699</a>
              <a href="#pricing">Professional — USD 999</a>
            </div>
            <div className="footer-nav-col">
              <h4 className="fn-title">Join Us</h4>
              <Link href="/consultants">Join as Consultant</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 <strong>Thinkerva.com</strong> · Led by <strong>Dr. Naveed Iqbal</strong>. All rights reserved.</p>
          <p className="footer-sub">
            Designed for{' '}
            <a href="https://rins.ai" target="_blank" rel="noopener" style={{ color: 'var(--teal-light)', fontWeight: 700, textDecoration: 'none' }}>
              RINS.Ai
            </a>
            {' '}. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
