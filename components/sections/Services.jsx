'use client';
import { useEffect, useRef } from 'react';

const services = [
  {
    num: '01', icon: '🤖', title: 'AI & Technology Consulting',
    problem: 'Struggling to translate AI potential into real business value?',
    body: 'End-to-end AI strategy, architecture design, and implementation advisory — from LLM deployments to enterprise automation, tailored to your industry context.',
    forWho: 'Enterprises, Startups, Government',
    value: 'Production-ready AI. Measurable ROI. Zero hype.'
  },
  {
    num: '02', icon: '📈', title: 'Business Development Strategy',
    problem: 'Need to scale, pivot, or enter new markets with confidence?',
    body: 'Market intelligence, competitive positioning, partnership strategy, and business model innovation to accelerate sustainable growth across geographies.',
    forWho: 'SMEs, Enterprises, Scale-ups',
    value: 'Strategic clarity. Execution roadmaps. Real results.'
  },
  {
    num: '03', icon: '⚙', title: 'Business Process Reengineering',
    problem: 'Operational inefficiencies draining your resources and speed?',
    body: 'Deep process analysis, redesign, and transformation — applying lean principles, automation, and AI-augmentation to unlock operational excellence.',
    forWho: 'Enterprises, Government Agencies',
    value: '30–60% operational efficiency improvements on average.'
  },
  {
    num: '04', icon: '🏢', title: 'Large Organisation Management',
    problem: 'Complex organisational challenges at scale?',
    body: 'Executive advisory on governance, organisational design, change management, and large-scale technology adoption across distributed, multinational structures.',
    forWho: 'Corporations, Public Sector, NGOs',
    value: 'Structural clarity. Aligned teams. Accelerated outcomes.'
  },
  {
    num: '05', icon: '🔄', title: 'Digital Transformation Advisory',
    problem: 'Legacy systems and digital fragmentation holding you back?',
    body: 'Comprehensive digital transformation strategy — technology stack modernisation, cloud migration, data infrastructure, and digital culture transformation.',
    forWho: 'Enterprises, Governments, Banks',
    value: 'Modern infrastructure. Digital-first culture. Future-ready.'
  },
  {
    num: '06', icon: '🛡', title: 'Product Strategy & Architecture',
    problem: 'Building a product that needs to scale globally?',
    body: 'From product-market fit to technical architecture — strategic product roadmaps, technology selection, team structuring, and go-to-market advisory for technology products.',
    forWho: 'Startups, Tech Companies, VCs',
    value: 'Product-market fit. Scalable architecture. GTM ready.'
  },
];

export default function Services() {
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    ref.current.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className="text-center">
          <div className="section-label reveal">Consulting Services</div>
          <h2 className="section-title reveal">
            Transformative Consulting<br />
            <span className="text-gradient">Across Every Dimension</span>
          </h2>
          <p className="section-sub reveal">
            Six specialised service pillars — each designed to address the real challenges
            faced by technology-driven organisations in an increasingly complex world.
          </p>
        </div>
        <div className="services-layout">
          {services.map((s, i) => (
            <div className="service-item reveal" key={i} data-delay={`${(i % 3) * 80}`}>
              <div className="si-header">
                <span className="si-num">{s.num}</span>
                <span className="si-icon">{s.icon}</span>
                <h3 className="si-title">{s.title}</h3>
              </div>
              <div className="si-body">
                <p className="si-problem"><strong>Challenge:</strong> {s.problem}</p>
                <p className="si-problem">{s.body}</p>
                <p className="si-for"><strong>For:</strong> {s.forWho}</p>
                <p className="si-value"><strong>Outcome:</strong> {s.value}</p>
              </div>
              <div className="si-footer">
                <a
                  href="#contact"
                  className="btn btn--outline btn--sm"
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Enquire About This Service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
