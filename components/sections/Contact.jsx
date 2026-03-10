'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    ref.current.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.service) e.service = 'Please select a consulting area.';
    if (!form.message.trim() || form.message.trim().length < 20) e.message = 'Please describe your requirement (min. 20 characters).';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); }
      else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setErrors({ submit: data.message || 'Something went wrong. Please email us directly.' });
      }
    } catch {
      setStatus('error');
      setErrors({ submit: 'Network error. Please email contact@thinkerva.com directly.' });
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div>
            <div className="section-label reveal">Contact</div>
            <h2 className="section-title reveal">
              Start Your<br />
              <span className="text-gradient">Consulting Journey</span>
            </h2>
            <p className="contact-desc reveal">
              Ready to discuss your challenge or opportunity? Reach out for a complimentary
              30-minute discovery call. Dr. Naveed Iqbal personally reviews every enquiry.
            </p>
            <div className="contact-details reveal">
              <div className="contact-detail">
                <span className="cd-icon">📧</span>
                <div className="cd-text">
                  <span className="cd-label">Email</span>
                  <a href="mailto:contact@thinkerva.com" className="cd-value">contact@thinkerva.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">📞</span>
                <div className="cd-text">
                  <span className="cd-label">Phone / WhatsApp</span>
                  <a href="tel:+923218570824" className="cd-value">+92 321 857 0824</a>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">🌐</span>
                <div className="cd-text">
                  <span className="cd-label">Website</span>
                  <span className="cd-value">www.thinkerva.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">⏱</span>
                <div className="cd-text">
                  <span className="cd-label">Response Time</span>
                  <span className="cd-value">Within 24 business hours</span>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">🌍</span>
                <div className="cd-text">
                  <span className="cd-label">Available</span>
                  <span className="cd-value">Global Clients Welcome</span>
                </div>
              </div>
            </div>
            <div className="social-links reveal">
              <a href="https://linkedin.com/in/drnaveediqbal" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:contact@thinkerva.com" className="social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal" data-delay="150">
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <p>Thank you for reaching out! Your message has been sent to Dr. Naveed Iqbal. We'll respond within 24 business hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                    <input type="text" id="name" name="name" placeholder="Dr. / Mr. / Ms. Your Name" value={form.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="req">*</span></label>
                    <input type="email" id="email" name="email" placeholder="your@company.com" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Organisation / Company</label>
                  <input type="text" id="company" name="company" placeholder="Your organisation name" value={form.company} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Consulting Area <span className="req">*</span></label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} className={errors.service ? 'error' : ''}>
                    <option value="">Select consulting area</option>
                    <option>AI &amp; Technology Strategy</option>
                    <option>Business Development &amp; Strategy</option>
                    <option>Business Process Reengineering</option>
                    <option>Digital Transformation</option>
                    <option>Aviation &amp; Aerospace Systems</option>
                    <option>Automotive &amp; ADAS</option>
                    <option>FinTech &amp; Banking Solutions</option>
                    <option>Government &amp; Public Sector Advisory</option>
                    <option>Product Strategy &amp; R&amp;D</option>
                    <option>Other / Multiple</option>
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project / Requirement Brief <span className="req">*</span></label>
                  <textarea id="message" name="message" rows="5" placeholder="Briefly describe your challenge, goal, or what you're looking to achieve..." value={form.message} onChange={handleChange} className={errors.message ? 'error' : ''}></textarea>
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                {errors.submit && <div className="form-error-banner">{errors.submit}</div>}
                <button type="submit" className="btn btn--primary btn--full" disabled={status === 'loading'} id="submit-btn">
                  {status === 'loading' ? 'Sending...' : 'Send Message & Request Consultation'}
                  {status !== 'loading' && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
                <p className="form-legal">
                  By submitting, you agree to our{' '}
                  <a href="/privacy-policy">Privacy Policy</a> and{' '}
                  <a href="/terms">Terms &amp; Conditions</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
