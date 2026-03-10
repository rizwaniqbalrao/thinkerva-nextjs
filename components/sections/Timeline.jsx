'use client';
import { useEffect, useRef } from 'react';

const timeline = [
  { year: '2023–Now', title: 'Founder & Lead Consultant — Thinkerva.com', desc: 'Founded Thinkerva as a global technology consultancy brand. Delivering AI strategy, digital transformation, and business consulting to governments, enterprises, and startups across 40+ countries.', tags: ['AI Strategy', 'Global Consulting', 'Digital Transformation'] },
  { year: '2019–2023', title: 'AI Architecture Lead — Multi-National Engagements', desc: 'Led AI architecture and technology strategy engagements across Europe, Middle East, and Asia. Designed enterprise AI systems, ML pipelines, and intelligent automation platforms for financial, healthcare, and public sector clients.', tags: ['Enterprise AI', 'ML Architecture', 'FinTech', 'Healthcare AI'] },
  { year: '2016–2019', title: 'Senior Consultant — Aviation & Automotive Systems', desc: 'Delivered DO-178C avionics certification consulting, embedded systems architecture, and ADAS development advisory for leading aviation OEMs and Tier-1 automotive suppliers across Europe.', tags: ['DO-178C', 'Avionics', 'ADAS', 'ISO 26262'] },
  { year: '2012–2016', title: 'Technology Director — FinTech & Banking', desc: 'Directed technology architecture for digital banking transformations and payment system implementations. Led cross-functional teams of 50+ across multiple jurisdictions, delivering core banking modernisation and payment infrastructure.', tags: ['Digital Banking', 'Payments', 'Core Banking'] },
  { year: '2008–2012', title: 'R&D Engineer — Aerospace & Embedded Systems', desc: 'Developed safety-critical embedded software for aerospace and defence applications. Doctoral research in intelligent systems, resulting in multiple published papers and patent applications in the field of AI-assisted diagnostics.', tags: ['Embedded Systems', 'PhD Research', 'Aerospace', 'AI/ML'] },
];

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll('.timeline-item');
    const io = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 120);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(item => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <div className="section-label reveal">Experience</div>
        <h2 className="section-title reveal">
          15+ Years of<br />
          <span className="text-gradient">Global Impact</span>
        </h2>
        <p className="section-sub reveal">
          A career defined by complex challenges, cross-industry leadership, and measurable outcomes
          — from aerospace labs to boardrooms of leading global corporations.
        </p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className="tl-dot"></div>
              <div className="tl-year">{item.year}</div>
              <div className="tl-card">
                <h3 className="tl-title">{item.title}</h3>
                <p className="tl-desc">{item.desc}</p>
                <div className="tl-tags">
                  {item.tags.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
