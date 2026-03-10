'use client';
import { useEffect, useRef, useState } from 'react';

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1800;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
          else setVal(target);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Hero({ visible }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    if (container.childElementCount > 0) return;
    const count = window.innerWidth < 768 ? 15 : 30;
    const colors = ['rgba(37,99,235,', 'rgba(13,148,136,', 'rgba(212,168,67,'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * 0.5 + 0.1;
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:${color}${opacity});animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*10}s;`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb--1"></div>
        <div className="hero-orb hero-orb--2"></div>
        <div className="hero-orb hero-orb--3"></div>
        <div className="hero-particles" id="hero-particles"></div>
      </div>

      <div className="container hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <div className={`animate-fade-up${visible ? ' visible' : ''}`} data-delay="0">
            <div className="hero-brand-tag">
              <span className="hbt-logo">Thinkerva<span>.com</span></span>
              <span className="hbt-sep">·</span>
              <span className="hbt-by">Thinking in Variation</span>
            </div>
          </div>

          <div className={`animate-fade-up${visible ? ' visible' : ''}`} data-delay="100" style={{ transitionDelay: visible ? '0.1s' : '0s' }}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for Global Consulting Engagements
            </div>
          </div>

          <div className={`animate-fade-up${visible ? ' visible' : ''}`} data-delay="200" style={{ transitionDelay: visible ? '0.2s' : '0s' }}>
            <h1 className="hero-headline">
              <span className="headline-gradient">Dr. Naveed Iqbal</span><br />
              AI Architect &<br />Technology Strategist
            </h1>
          </div>

          <div className={`animate-fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: visible ? '0.3s' : '0s' }}>
            <p className="hero-sub">Serial Entrepreneur · Doctoral Engineer · Global Consultant</p>
            <p className="hero-desc">
              Transforming governments, enterprises, and startups through cutting-edge AI strategy,
              systems architecture, and business innovation — across 40+ countries, 15+ years of
              deep-domain expertise.
            </p>
          </div>

          <div className={`animate-fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: visible ? '0.4s' : '0s' }}>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn--primary btn--lg"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                Book Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#about" className="btn btn--ghost btn--lg"
                onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
                Explore Profile
              </a>
            </div>
          </div>

          <div className={`animate-fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: visible ? '0.5s' : '0s' }}>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-num"><Counter target={15} />+</div>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-num"><Counter target={50} />+</div>
                <span className="stat-label">Global Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <div className="stat-num"><Counter target={40} />+</div>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`hero-visual animate-fade-left${visible ? ' visible' : ''}`} style={{ transitionDelay: visible ? '0.3s' : '0s' }}>
          <div className="hero-card-stack">
            <div className="profile-frame">
              <div className="profile-ring profile-ring--outer"></div>
              <div className="profile-ring profile-ring--mid"></div>
              <div className="profile-avatar">
                <img src="/naveed-hero.jpg" alt="Dr. Naveed Iqbal" className="avatar-photo" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
                <span className="avatar-initials" style={{display:'none'}}>NI</span>
              </div>
              <div className="profile-badge profile-badge--ai">AI Architect</div>
              <div className="profile-badge profile-badge--tech">Tech Strategist</div>
            </div>
            <div className="floating-card floating-card--1">
              <div className="fc-icon">🤖</div>
              <div className="fc-content">
                <span className="fc-title">AI Strategy</span>
                <span className="fc-sub">Enterprise AI Solutions</span>
              </div>
            </div>
            <div className="floating-card floating-card--2">
              <div className="fc-icon">🌍</div>
              <div className="fc-content">
                <span className="fc-title">Global Reach</span>
                <span className="fc-sub">40+ Countries</span>
              </div>
            </div>
            <div className="floating-card floating-card--3">
              <div className="fc-icon">🏛</div>
              <div className="fc-content">
                <span className="fc-title">Gov't Trusted</span>
                <span className="fc-sub">National Scale Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-arrow"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
