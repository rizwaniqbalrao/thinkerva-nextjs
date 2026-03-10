'use client';
import { useEffect, useRef } from 'react';

export default function CtaBanner() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    ref.current.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="cta-banner" ref={ref}>
      <div className="cta-banner-bg">
        <div className="cta-orb cta-orb--1"></div>
        <div className="cta-orb cta-orb--2"></div>
      </div>
      <div className="container cta-banner-content">
        <div className="reveal">
          <div className="cta-label">Ready to Transform?</div>
          <h2 className="cta-headline">
            Let's Build Something<br />
            <span className="text-gradient">Extraordinary Together</span>
          </h2>
          <p className="cta-sub">
            Whether you're a government, enterprise, or ambitious startup — if you're ready
            to leverage AI and technology for transformative growth, let's talk. No obligations.
            Just clarity.
          </p>
        </div>
        <div className="cta-banner-actions reveal" data-delay="150">
          <a
            href="#contact"
            className="btn btn--primary btn--lg"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Book Your Free Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#pricing"
            className="btn btn--ghost btn--lg"
            onClick={e => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Packages
          </a>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 8 }}>
            ✓ Free 30-min discovery call &nbsp;&nbsp; ✓ No commitment required &nbsp;&nbsp; ✓ Responds within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
