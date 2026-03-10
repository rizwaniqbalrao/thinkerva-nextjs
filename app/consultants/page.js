'use client';
import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';

export default function ConsultantsPage() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', domain: '', experience: '', availability: '', linkedin: '', portfolio: '', bio: '', why: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required.';
    if (!form.country.trim()) e.country = 'Country is required.';
    if (!form.domain) e.domain = 'Please select your primary domain.';
    if (!form.experience) e.experience = 'Please select experience range.';
    if (!form.bio.trim() || form.bio.trim().length < 30) e.bio = 'Please provide a bio (min. 30 characters).';
    if (!form.why.trim() || form.why.trim().length < 20) e.why = 'Please explain why you want to join (min. 20 chars).';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); }
      else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrors({ submit: data.message || 'Submission failed. Please email contact@thinkerva.com.' });
      }
    } catch {
      setStatus('error');
      setErrors({ submit: 'Network error. Please email contact@thinkerva.com.' });
    }
  };

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>

        {/* HERO */}
        <section className="consultant-hero">
          <div className="ch-orb ch-orb--1"></div>
          <div className="ch-orb ch-orb--2"></div>
          <div className="container ch-inner">
            <div className="consultant-hero-grid">
              <div className="ch-left">
                <div className="ch-badge"><span className="ch-badge-dot"></span> Now Accepting Applications</div>
                <h1 className="ch-headline">
                  Join the<br />
                  <span className="text-gradient">Thinkerva</span><br />
                  Consultant Network
                </h1>
                <p className="ch-desc">
                  We're building a curated group of world-class consultants, engineers, and strategists to
                  collaborate under the Thinkerva brand — delivering extraordinary outcomes to global clients
                  across AI, technology, and business transformation.
                </p>
                <div className="ch-stats">
                  <div className="ch-stat"><span className="ch-stat-num">40+</span><span className="ch-stat-label">Countries Served</span></div>
                  <div className="ch-stat"><span className="ch-stat-num">50+</span><span className="ch-stat-label">Global Projects</span></div>
                  <div className="ch-stat"><span className="ch-stat-num">∞</span><span className="ch-stat-label">Growth Potential</span></div>
                </div>
              </div>
              <div className="ch-benefits">
                {[
                  { icon: '🌐', title: 'Global Client Access', desc: 'Work with governments, Fortune-class enterprises, and funded startups across multiple continents through Thinkerva\'s established network.' },
                  { icon: '🤝', title: 'Collaborate with Dr. Naveed Iqbal', desc: 'Learn and co-deliver alongside a doctoral engineer with 15+ years of experience in AI, aviation, automotive, and FinTech consulting.' },
                  { icon: '💰', title: 'Competitive Compensation', desc: 'Revenue-share model on delivered projects. Transparent, fair, and tied to impact — not time-in-seat.' },
                  { icon: '🏷', title: 'Brand Association', desc: 'Be listed as a Thinkerva Network Consultant — elevating your personal brand with a globally recognised consultancy identity.' },
                  { icon: '🎓', title: 'Knowledge Exchange', desc: 'Access Thinkerva\'s research, methodology frameworks, and ongoing knowledge-sharing sessions across specialisations.' },
                ].map((b, i) => (
                  <div className="ch-benefit" key={i}>
                    <div className="ch-benefit-icon">{b.icon}</div>
                    <div className="ch-benefit-text">
                      <strong>{b.title}</strong>
                      <span>{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE SEEK */}
        <section className="consultant-who">
          <div className="container">
            <div className="section-label">Who We Seek</div>
            <h2 className="section-title">We're Looking for<br /><span className="text-gradient">Exceptional Minds</span></h2>
            <p className="section-sub">Thinkerva consultants are experienced professionals with proven track records and deep domain expertise.</p>
            <div className="who-grid">
              {[
                { icon: '🤖', title: 'AI & Machine Learning', desc: 'Specialists in ML, deep learning, LLMs, computer vision, NLP, and AI systems deployment in production environments.' },
                { icon: '💻', title: 'Software Architects', desc: 'Senior engineers and architects with experience in enterprise-scale software, cloud-native systems, and distributed architectures.' },
                { icon: '📊', title: 'Business Strategists', desc: 'Strategy and management consultants with hands-on experience in business transformation, BPR, and organisational change.' },
                { icon: '✈', title: 'Aviation & Automotive', desc: 'Domain experts in avionics, ADAS, ECU development, safety-critical systems, and embedded solutions for aerospace & automotive sectors.' },
                { icon: '💳', title: 'FinTech Specialists', desc: 'Professionals in payment systems, digital banking, regulatory compliance, blockchain, and financial technology architecture.' },
                { icon: '🏛', title: 'Government & Policy', desc: 'Advisors with experience in public sector digital transformation, national-scale technology policy, and e-governance platforms.' },
              ].map((w, i) => (
                <div className="who-card" key={i}>
                  <span className="who-icon">{w.icon}</span>
                  <h3 className="who-title">{w.title}</h3>
                  <p className="who-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION */}
        <section className="consultant-apply" id="apply">
          <div className="container">
            <div className="apply-layout">
              <div className="apply-info">
                <div className="section-label">Application</div>
                <h2 className="apply-info-title">Ready to Join?<br /><span className="text-gradient">Apply in Minutes</span></h2>
                <p className="apply-info-desc">Tell us about yourself and your expertise. Every application is reviewed personally by Dr. Naveed Iqbal. We respond to all applicants within 5–7 business days.</p>
                <div className="apply-steps">
                  {[
                    { n: '1', title: 'Submit Your Application', desc: 'Fill in the form with your background, expertise, and what you bring to the network.' },
                    { n: '2', title: 'Profile Review', desc: 'Dr. Naveed and the Thinkerva team review your application and credentials.' },
                    { n: '3', title: 'Introduction Call', desc: 'A 30-minute video call to discuss alignment, opportunities, and how we work together.' },
                    { n: '4', title: 'Welcome to the Network', desc: 'Onboarded as an official Thinkerva Network Consultant with profile listing and project access.' },
                  ].map((s, i) => (
                    <div className="apply-step" key={i}>
                      <div className="as-num">{s.n}</div>
                      <div className="as-text"><strong>{s.title}</strong><span>{s.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="apply-form-wrap">
                <div className="apply-form-title"><span>📋</span> Consultant Application Form</div>
                {status === 'success' ? (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <p>Thank you for applying! Your application has been received. Dr. Naveed Iqbal will personally review it and respond within 5–7 business days.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="c-name">Full Name <span className="req">*</span></label>
                        <input type="text" id="c-name" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-email">Email Address <span className="req">*</span></label>
                        <input type="email" id="c-email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="c-phone">Phone / WhatsApp</label>
                        <input type="tel" id="c-phone" name="phone" placeholder="+1 234 567 8900" value={form.phone} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-country">Country / Location <span className="req">*</span></label>
                        <input type="text" id="c-country" name="country" placeholder="e.g. UAE, UK, USA" value={form.country} onChange={handleChange} className={errors.country ? 'error' : ''} />
                        {errors.country && <span className="form-error">{errors.country}</span>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-domain">Primary Domain / Expertise <span className="req">*</span></label>
                      <select id="c-domain" name="domain" value={form.domain} onChange={handleChange} className={errors.domain ? 'error' : ''}>
                        <option value="">Select your primary domain</option>
                        <option>Artificial Intelligence &amp; Machine Learning</option>
                        <option>Software Architecture &amp; Engineering</option>
                        <option>Business Strategy &amp; Management Consulting</option>
                        <option>Aviation &amp; Aerospace Systems</option>
                        <option>Automotive &amp; ADAS</option>
                        <option>FinTech &amp; Digital Finance</option>
                        <option>Government &amp; Public Policy</option>
                        <option>Digital Transformation</option>
                        <option>Product Design &amp; R&amp;D</option>
                        <option>Other</option>
                      </select>
                      {errors.domain && <span className="form-error">{errors.domain}</span>}
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="c-years">Years of Experience <span className="req">*</span></label>
                        <select id="c-years" name="experience" value={form.experience} onChange={handleChange} className={errors.experience ? 'error' : ''}>
                          <option value="">Select range</option>
                          <option>3–5 years</option>
                          <option>5–10 years</option>
                          <option>10–15 years</option>
                          <option>15–20 years</option>
                          <option>20+ years</option>
                        </select>
                        {errors.experience && <span className="form-error">{errors.experience}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-availability">Availability</label>
                        <select id="c-availability" name="availability" value={form.availability} onChange={handleChange}>
                          <option value="">Select availability</option>
                          <option>Full-time (40 hrs/week)</option>
                          <option>Part-time (20 hrs/week)</option>
                          <option>Project-based only</option>
                          <option>Advisory / Retainer only</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-linkedin">LinkedIn Profile URL</label>
                      <input type="url" id="c-linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" value={form.linkedin} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-portfolio">Portfolio / Website / CV Link</label>
                      <input type="url" id="c-portfolio" name="portfolio" placeholder="https://yourportfolio.com" value={form.portfolio} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-bio">Professional Bio <span className="req">*</span></label>
                      <textarea id="c-bio" name="bio" rows="4" placeholder="Briefly describe your professional background, key achievements, and areas of deep expertise..." value={form.bio} onChange={handleChange} className={errors.bio ? 'error' : ''}></textarea>
                      {errors.bio && <span className="form-error">{errors.bio}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-why">Why do you want to join Thinkerva? <span className="req">*</span></label>
                      <textarea id="c-why" name="why" rows="3" placeholder="What value can you bring to the Thinkerva network and our clients?" value={form.why} onChange={handleChange} className={errors.why ? 'error' : ''}></textarea>
                      {errors.why && <span className="form-error">{errors.why}</span>}
                    </div>
                    {errors.submit && <div className="form-error-banner">{errors.submit}</div>}
                    <button type="submit" className="btn btn--primary btn--full" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                      {status !== 'loading' && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                    <p className="form-legal">By submitting, you agree to our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms">Terms &amp; Conditions</Link>.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* NETWORK PREVIEW */}
        <section className="consultant-network">
          <div className="container">
            <div className="section-label">Our Network</div>
            <h2 className="section-title">The Thinkerva <span className="text-gradient">Consultant Network</span></h2>
            <p className="section-sub">A growing group of exceptional professionals collaborating under one globally recognised brand.</p>
            <div className="network-grid">
              <div className="member-card">
                <div className="member-avatar">NI</div>
                <div className="member-name">Dr. Naveed Iqbal</div>
                <div className="member-role">Founder &amp; Lead Consultant</div>
                <div className="member-domain">AI · Systems Architecture · Business Transformation</div>
              </div>
              {['Your Spot Here', 'Open Position', 'Apply Now'].map((label, i) => (
                <a key={i} href="#apply" className="member-card member-card--open"
                  onClick={e => { e.preventDefault(); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <div className="open-icon">+</div>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
