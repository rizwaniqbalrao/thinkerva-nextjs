'use client';
import { useEffect, useRef } from 'react';

const cards = [
  { num: '01', icon: '🤖', title: 'AI & Machine Learning', desc: 'Designing enterprise AI systems, ML pipelines, LLM integrations, and intelligent automation that deliver measurable business outcomes.', tags: ['GPT/LLMs', 'MLOps', 'Computer Vision'] },
  { num: '02', icon: '🏗', title: 'Systems Architecture', desc: 'End-to-end design of scalable, resilient, cloud-native architectures for mission-critical enterprise applications and platforms.', tags: ['Microservices', 'Cloud', 'APIs'] },
  { num: '03', icon: '📊', title: 'Business Strategy', desc: 'Market entry, business transformation, and growth strategy backed by data-driven insights and global market intelligence.', tags: ['BPR', 'M&A', 'GTM'] },
  { num: '04', icon: '✈', title: 'Aviation & Aerospace', desc: 'Avionics systems, safety-critical embedded software, certification consulting (DO-178C), and aerospace digital transformation.', tags: ['DO-178C', 'Avionics', 'RTCA'] },
  { num: '05', icon: '🚗', title: 'Automotive & ADAS', desc: 'Advanced driver-assistance systems, ECU development, ISO 26262 functional safety, and automotive software architecture.', tags: ['ADAS', 'ISO 26262', 'ECU'] },
  { num: '06', icon: '💳', title: 'FinTech & Banking', desc: 'Payment infrastructure, digital banking architecture, regulatory compliance, and financial technology innovation strategy.', tags: ['Payments', 'Banking APIs', 'RegTech'] },
  { num: '07', icon: '🏛', title: 'Government Advisory', desc: 'National-scale digital transformation, e-governance platform design, smart city infrastructure, and public sector AI strategy.', tags: ['e-Gov', 'Smart City', 'Policy'] },
  { num: '08', icon: '🔬', title: 'R&D & Innovation', desc: 'Technology scouting, innovation roadmap design, research-to-commercialisation strategy, and advanced product engineering.', tags: ['IP Strategy', 'Labs', 'Prototyping'] },
];

export default function Expertise() {
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
    const cards = document.querySelectorAll('.expertise-card');
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
      card._cleanMove = () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
    });
    return () => cards.forEach(c => c._cleanMove && c._cleanMove());
  }, []);

  return (
    <section className="section expertise" id="expertise" ref={ref}>
      <div className="container">
        <div className="text-center">
          <div className="section-label reveal">Core Expertise</div>
          <h2 className="section-title reveal">
            Eight Domains of<br />
            <span className="text-gradient">Deep Specialisation</span>
          </h2>
          <p className="section-sub reveal">
            Multidisciplinary expertise spanning AI, engineering, aviation, automotive, FinTech,
            and government advisory — delivering integrated solutions across industry boundaries.
          </p>
        </div>
        <div className="expertise-grid">
          {cards.map((card, i) => (
            <div className="expertise-card reveal" key={i} data-delay={`${(i % 4) * 80}`}>
              <div className="ec-number">{card.num}</div>
              <div className="ec-icon">{card.icon}</div>
              <h3 className="ec-title">{card.title}</h3>
              <p className="ec-desc">{card.desc}</p>
              <div className="ec-tags">
                {card.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
