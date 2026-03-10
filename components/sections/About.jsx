'use client';
import { useEffect, useRef } from 'react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0, 10);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        io.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    const els = ref.current.querySelectorAll('.reveal');
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Visual */}
          <div className="about-visual reveal">
            <div className="about-image-frame">
              <img
                src="/naveed.jpg"
                alt="Dr. Naveed Iqbal"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
              />
              <div className="about-avatar" style={{ display: 'none' }}>NI</div>
              <div className="about-glow"></div>
            </div>
            <div className="about-credentials">
              {[
                { icon: '🎓', title: 'Doctoral Engineer', sub: 'PhD-Level Expertise' },
                { icon: '🏆', title: '15+ Years in Consulting', sub: 'Across 40+ Countries' },
                { icon: '🤖', title: 'AI Architecture Lead', sub: 'Enterprise AI Systems' },
                { icon: '✈', title: 'Aviation & Automotive', sub: 'Safety-Critical Systems' },
              ].map((c, i) => (
                <div className="credential-card" key={i}>
                  <div className="cred-icon">{c.icon}</div>
                  <div className="cred-text">
                    <strong>{c.title}</strong>
                    <span>{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="about-company-tag reveal">
              <span className="act-label">Founder &amp; Lead Consultant</span>
              <span className="act-brand">Thinkerva<span>.com</span></span>
            </div>

            <div className="section-label reveal">About</div>
            <h2 className="section-title reveal">
              Architect of Digital<br />
              <span className="text-gradient">Innovation & Strategy</span>
            </h2>

            <p className="about-lead reveal">
              Dr. Naveed Iqbal is a doctoral engineer, AI architect, and serial entrepreneur
              with over 15 years of experience delivering transformative consulting engagements
              to governments, Fortune-class enterprises, and high-growth startups.
            </p>

            <p className="about-body reveal">
              His practice spans the intersection of artificial intelligence, systems architecture,
              aviation and automotive engineering, FinTech, and large-scale business transformation.
              From designing national-level digital infrastructure to leading AI strategy for
              enterprises across Europe, the Middle East, and Asia — Dr. Naveed brings a rare
              combination of doctoral-level academic rigour and battle-tested commercial execution.
            </p>
            <p className="about-body reveal">
              As the founder of Thinkerva, his mission is to help organisations make bold, intelligent
              moves — leveraging AI, engineering, and business strategy to build lasting competitive
              advantage in a rapidly evolving global landscape.
            </p>

            <div className="about-pillars reveal">
              {[
                { label: 'AI & Tech', h: '80%' },
                { label: 'Aviation', h: '70%' },
                { label: 'FinTech', h: '75%' },
                { label: 'Strategy', h: '90%' },
                { label: 'Gov\'t', h: '65%' },
                { label: 'R&D', h: '72%' },
              ].map((p, i) => (
                <div className="pillar" key={i}>
                  <div className="pillar-bar" style={{ '--h': p.h, height: p.h }}></div>
                  <span>{p.label}</span>
                </div>
              ))}
            </div>

            <div className="about-ctas reveal">
              <a
                href="#contact"
                className="btn btn--primary"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="#experience"
                className="btn btn--ghost"
                onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
