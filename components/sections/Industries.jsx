'use client';
import { useEffect, useRef } from 'react';

const industries = [
  { icon: '🏛', title: 'Government & Public Sector', desc: 'National digital transformation, e-governance platforms, smart infrastructure, and public sector AI integration at scale.' },
  { icon: '✈', title: 'Aviation & Aerospace', desc: 'Avionics systems, DO-178C certification, embedded flight software, MRO digitisation, and aerospace supply chain technology.' },
  { icon: '🚗', title: 'Automotive & Mobility', desc: 'ADAS systems, ECU software development, ISO 26262 safety, connected vehicles, and autonomous mobility platforms.' },
  { icon: '🏦', title: 'FinTech & Banking', desc: 'Digital banking infrastructure, payment systems architecture, open banking APIs, RegTech, and financial AI solutions.' },
  { icon: '🏥', title: 'Healthcare & MedTech', desc: 'Health information systems, medical AI diagnostics, digital health platforms, and patient data infrastructure.' },
  { icon: '🏭', title: 'Manufacturing & Industry 4.0', desc: 'Smart factory solutions, industrial IoT, predictive maintenance, quality automation, and Industry 4.0 transformation.' },
];

export default function Industries() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0, 10);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    ref.current.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 900) return;
    const cards = document.querySelectorAll('.industry-card');
    cards.forEach(card => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const dy = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        card.style.transform = `translateY(-6px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
      };
      const onLeave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove, { passive: true });
      card.addEventListener('mouseleave', onLeave);
      card._clean = () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
    });
    return () => cards.forEach(c => c._clean?.());
  }, []);

  return (
    <section className="section industries" id="industries" ref={ref}>
      <div className="container">
        <div className="text-center">
          <div className="section-label reveal">Industries</div>
          <h2 className="section-title reveal">
            Sectors We Serve with<br />
            <span className="text-gradient">Domain Mastery</span>
          </h2>
          <p className="section-sub reveal">
            Deep vertical expertise across the industries where technology and business transformation
            have the greatest impact — delivering insights, not just advice.
          </p>
        </div>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-card reveal" key={i} data-delay={`${(i % 3) * 80}`}>
              <span className="ind-icon">{ind.icon}</span>
              <h3 className="ind-title">{ind.title}</h3>
              <p className="ind-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
