'use client';
import { useEffect, useRef } from 'react';

const packages = [
  {
    badge: 'Starter', badgeClass: 'pc-badge',
    icon: '🚀', name: 'Starter Engagement',
    price: '699', currency: 'USD', period: 'per engagement',
    tagline: 'The perfect launchpad for startups and early-stage projects needing strategic clarity.',
    featured: false, custom: false,
    features: [
      { text: '2× 60-min Consulting Sessions', included: true },
      { text: 'Current State Assessment', included: true },
      { text: 'Strategic Recommendations Report', included: true },
      { text: 'Technology Roadmap (90-day)', included: true },
      { text: 'Email Support (2 weeks post-delivery)', included: true },
      { text: 'Implementation Advisory', included: false },
      { text: 'Dedicated Project Manager', included: false },
    ]
  },
  {
    badge: 'Most Popular', badgeClass: 'pc-badge pc-badge--gold',
    icon: '💼', name: 'Professional Engagement',
    price: '999', currency: 'USD', period: 'per engagement',
    tagline: 'Full consulting engagement for growing SMEs and enterprises ready to transform.',
    featured: true, custom: false,
    features: [
      { text: '4× 90-min Consulting Sessions', included: true },
      { text: 'Deep-Dive Assessment & Analysis', included: true },
      { text: 'Full Strategy & Transformation Plan', included: true },
      { text: 'Technology Architecture Blueprint', included: true },
      { text: 'Implementation Advisory Support', included: true },
      { text: 'Stakeholder Presentation Deck', included: true },
      { text: 'Email Support (30 days post-delivery)', included: true },
    ]
  },
  {
    badge: 'Enterprise', badgeClass: 'pc-badge pc-badge--teal',
    icon: '🏛', name: 'Custom Enterprise',
    price: null, currency: null, period: null,
    tagline: 'Fully bespoke multi-phase engagements for governments, large enterprises, and complex projects.',
    featured: false, custom: true,
    features: [
      { text: 'Unlimited Consulting Sessions', included: true },
      { text: 'Full Multi-Phase Project Scope', included: true },
      { text: 'Dedicated Thinkerva Team', included: true },
      { text: 'On-site Engagement Available', included: true },
      { text: 'NDA & Formal Consulting Agreement', included: true },
      { text: 'Executive Reporting & Governance', included: true },
      { text: 'Priority Support & SLA', included: true },
    ]
  }
];

export default function Pricing() {
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
    }, { threshold: 0.1 });
    ref.current.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section pricing" id="pricing" ref={ref}>
      <div className="container">
        <div className="text-center">
          <div className="section-label reveal">Pricing</div>
          <h2 className="section-title reveal">
            Transparent Consulting<br />
            <span className="text-gradient">Packages & Rates</span>
          </h2>
          <p className="section-sub reveal">
            Choose the engagement model that fits your needs. All packages include Dr. Naveed Iqbal's
            personal involvement, strategic thinking, and measurable outcomes.
          </p>
        </div>

        {/* Hourly Rate Banner */}
        <div className="hourly-banner reveal">
          <div className="hb-left">
            <span className="hb-icon">⏱</span>
            <div>
              <strong>Hourly Consulting Rate</strong>
              <span>For ad-hoc, overflow, and retainer-based consulting hours</span>
            </div>
          </div>
          <div className="hb-right">
            <div className="hb-rate">USD 150 <span>/ hour</span></div>
            <a href="#contact" onClick={scrollToContact} className="btn btn--outline btn--sm">Book Hours</a>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`pricing-card reveal${pkg.featured ? ' pricing-card--featured' : ''}${pkg.custom ? ' pricing-card--custom' : ''}`}
              data-delay={`${i * 80}`}
            >
              {pkg.featured && <div className="pc-featured-label">Most Popular</div>}
              <div className={pkg.badgeClass}>{pkg.badge}</div>
              <div className="pc-icon">{pkg.icon}</div>
              <div className="pc-name">{pkg.name}</div>

              {pkg.custom ? (
                <div className="pc-price pc-price--custom">
                  <div className="pc-custom-label">Custom Price</div>
                  <div className="pc-custom-sub">Scoped &amp; quoted per project</div>
                </div>
              ) : (
                <div className="pc-price">
                  <span className="pc-currency">{pkg.currency}</span>
                  <span className="pc-amount">{pkg.price}</span>
                  <span className="pc-period">{pkg.period}</span>
                </div>
              )}

              <p className="pc-tagline">{pkg.tagline}</p>

              <ul className="pc-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <span className={f.included ? 'pc-check' : 'pc-cross'}>{f.included ? '✓' : '×'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <div className="pc-footer">
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className={`btn btn--full${pkg.featured ? ' btn--primary' : pkg.custom ? ' btn--outline' : ' btn--ghost'}`}
                >
                  {pkg.custom ? 'Request Custom Quote' : 'Get Started'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <p className="pc-note">All payments accepted via Payoneer &amp; bank transfer</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payoneer Banner */}
        <div className="payoneer-banner reveal">
          <div className="pbn-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="12" fill="rgba(13,148,136,0.15)"/>
              <path d="M8 20C8 13.373 13.373 8 20 8s12 5.373 12 12-5.373 12-12 12S8 26.627 8 20z" fill="none" stroke="#14b8a6" strokeWidth="1.5"/>
              <path d="M14 20h12M26 16l4 4-4 4" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="pbn-content">
            <strong>We Accept Payoneer &amp; International Bank Transfers</strong>
            <p>Thinkerva supports global clients with seamless payment options. Payoneer enables fast, secure international payments in your local currency — no hassle, no hidden fees. Invoice details provided upon booking confirmation.</p>
          </div>
          <div className="pbn-badge">
            <span>💳</span>
            <span>Payoneer</span>
            <span className="pbn-check">✓ Accepted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
