import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Thinkerva.com',
  description: 'Thinkerva Terms and Conditions — Rules governing consulting engagements and use of services.',
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main>
        <section className="legal-hero">
          <div className="legal-hero-orb legal-hero-orb--1"></div>
          <div className="legal-hero-orb legal-hero-orb--2"></div>
          <div className="container legal-hero-inner">
            <div className="legal-badge">Legal Document</div>
            <h1 className="legal-title">Terms &amp; <span className="text-gradient">Conditions</span></h1>
            <p className="legal-meta">Last updated: January 1, 2025 &nbsp;·&nbsp; Effective: January 1, 2025</p>
            <p className="legal-meta">These terms govern all consulting engagements and use of <strong>Thinkerva.com</strong>, operated by <strong>Dr. Naveed Iqbal</strong>.</p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">
              <aside className="legal-toc">
                <p className="toc-title">Contents</p>
                <nav className="toc-list">
                  {[['acceptance','1. Acceptance of Terms'],['services-scope','2. Services & Scope'],['packages','3. Service Packages'],['rates','4. Rates & Pricing'],['payment-terms','5. Payment Terms'],['payoneer','6. Payoneer Payments'],['engagement','7. Engagement Process'],['ip','8. Intellectual Property'],['confidentiality','9. Confidentiality'],['liability','10. Limitation of Liability'],['termination','11. Termination'],['governing','12. Governing Law'],['dispute','13. Dispute Resolution'],['privacy-ref','14. Privacy'],['contact-us','15. Contact']].map(([id, label]) => (
                    <a key={id} href={`#${id}`}>{label}</a>
                  ))}
                </nav>
              </aside>

              <div className="legal-content">

                <div className="legal-section" id="acceptance">
                  <h2 className="legal-section-title"><span className="ls-num">01</span> Acceptance of Terms</h2>
                  <p>By accessing thinkerva.com, submitting an enquiry, or engaging Thinkerva for consulting services, you ("Client", "you") agree to be bound by these Terms and Conditions in full.</p>
                  <p>These Terms constitute a legally binding agreement between you and <strong>Dr. Naveed Iqbal</strong>, operating under the brand <strong>Thinkerva.com</strong>.</p>
                  <div className="legal-highlight">
                    <strong>Important:</strong> These Terms apply to all service packages, hourly engagements, custom projects, and any consulting relationship initiated through Thinkerva.com or direct communication with Dr. Naveed Iqbal.
                  </div>
                </div>

                <div className="legal-section" id="services-scope">
                  <h2 className="legal-section-title"><span className="ls-num">02</span> Services &amp; Scope</h2>
                  <p>Thinkerva provides professional technology and business consulting services led by <strong>Dr. Naveed Iqbal</strong>, including but not limited to:</p>
                  <ul>
                    <li>Technology &amp; Artificial Intelligence Consulting</li>
                    <li>Business Development Strategy</li>
                    <li>Business Process Reengineering (BPR)</li>
                    <li>Large-Scale Organisation Management</li>
                    <li>Digital Transformation Advisory</li>
                    <li>Product Strategy &amp; Architecture</li>
                    <li>R&amp;D and Innovation Advisory</li>
                    <li>Custom Technology Solutions</li>
                  </ul>
                  <p>The precise scope of each engagement will be defined in a written Scope of Work (SOW) or Consulting Agreement issued prior to project commencement.</p>
                </div>

                <div className="legal-section" id="packages">
                  <h2 className="legal-section-title"><span className="ls-num">03</span> Service Packages</h2>
                  <p>Thinkerva offers three structured consulting packages:</p>
                  <table className="rate-table">
                    <thead>
                      <tr><th>Package</th><th>Price</th><th>Scope</th><th>Best For</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Starter Engagement</strong></td><td className="rate-highlight">USD 699</td><td>Foundation consulting, assessment &amp; roadmap</td><td>Startups, early-stage projects</td></tr>
                      <tr><td><strong>Professional Engagement</strong></td><td className="rate-highlight">USD 999</td><td>Full consulting engagement, implementation advisory</td><td>SMEs, growing enterprises</td></tr>
                      <tr><td><strong>Custom Enterprise</strong></td><td className="rate-highlight">Custom Price</td><td>Fully bespoke scope, multi-phase projects</td><td>Enterprises, Governments, Large Organisations</td></tr>
                    </tbody>
                  </table>
                  <p>All package prices are fixed for the defined scope. Work beyond the agreed scope will be charged at the applicable hourly rate (see Section 4).</p>
                </div>

                <div className="legal-section" id="rates">
                  <h2 className="legal-section-title"><span className="ls-num">04</span> Rates &amp; Pricing</h2>
                  <table className="rate-table">
                    <thead>
                      <tr><th>Engagement Type</th><th>Rate</th><th>Notes</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Hourly Consulting Rate</strong></td><td className="rate-highlight">USD 150 / hour</td><td>For ad-hoc, overflow, and retainer-based hours</td></tr>
                      <tr><td><strong>Starter Package</strong></td><td className="rate-highlight">USD 699</td><td>Fixed scope, defined deliverables</td></tr>
                      <tr><td><strong>Professional Package</strong></td><td className="rate-highlight">USD 999</td><td>Fixed scope, expanded deliverables</td></tr>
                      <tr><td><strong>Custom Enterprise Package</strong></td><td className="rate-highlight">Custom Quote</td><td>Scope-defined, quoted per engagement</td></tr>
                      <tr><td><strong>On-site Consulting</strong></td><td className="rate-highlight">USD 200 / hour + expenses</td><td>Travel, accommodation billed at cost</td></tr>
                    </tbody>
                  </table>
                  <p>All prices are quoted in US Dollars (USD). Rates are subject to change with 30 days' written notice for ongoing retainer clients.</p>
                </div>

                <div className="legal-section" id="payment-terms">
                  <h2 className="legal-section-title"><span className="ls-num">05</span> Payment Terms</h2>
                  <ul>
                    <li><strong>Fixed Packages (USD 699 / USD 999):</strong> Full payment is required before work commences, unless otherwise agreed in writing</li>
                    <li><strong>Custom Enterprise Projects:</strong> A 40% deposit is required upon signing the Consulting Agreement; the remaining 60% is invoiced upon project completion or per agreed milestones</li>
                    <li><strong>Hourly Engagements:</strong> Invoiced weekly or bi-weekly based on hours logged; payment due within 14 business days of invoice date</li>
                    <li><strong>Retainer Arrangements:</strong> Invoiced monthly in advance; payment due within 7 business days</li>
                  </ul>
                  <p><strong>Late Payments:</strong> Invoices unpaid after the due date will accrue interest at 1.5% per month on the outstanding balance.</p>
                  <p><strong>Refunds:</strong> Fixed package fees are non-refundable once work has commenced. For prepaid engagements where no work has commenced, a full refund may be issued within 7 business days.</p>
                </div>

                <div className="legal-section" id="payoneer">
                  <h2 className="legal-section-title"><span className="ls-num">06</span> Payoneer &amp; Accepted Payment Methods</h2>
                  <div className="payment-box">
                    <div className="payment-box-icon">💳</div>
                    <div>
                      <h4>We Accept Payoneer</h4>
                      <p>Thinkerva accepts international payments via <strong>Payoneer</strong> as our primary payment platform. Payoneer enables secure, fast global payments in multiple currencies. Payoneer account details will be provided on your invoice.</p>
                    </div>
                  </div>
                  <p><strong>Accepted Payment Methods:</strong></p>
                  <ul>
                    <li><strong>Payoneer</strong> (preferred for international clients — fast, secure, multi-currency)</li>
                    <li><strong>International Bank Transfer (SWIFT/IBAN)</strong></li>
                    <li><strong>Other methods</strong> as mutually agreed in writing</li>
                  </ul>
                  <p><strong>Currency:</strong> All invoices are issued in USD. Any currency conversion fees or intermediary banking charges are the responsibility of the Client.</p>
                </div>

                <div className="legal-section" id="engagement">
                  <h2 className="legal-section-title"><span className="ls-num">07</span> Engagement Process</h2>
                  <ol>
                    <li><strong>Initial Enquiry:</strong> Client submits enquiry via the website contact form or direct email</li>
                    <li><strong>Discovery Call:</strong> A complimentary 30-minute discovery call with Dr. Naveed Iqbal</li>
                    <li><strong>Proposal:</strong> Thinkerva issues a written proposal detailing scope, deliverables, timeline, and fees</li>
                    <li><strong>Agreement:</strong> Client reviews and accepts the proposal</li>
                    <li><strong>Payment:</strong> Client completes payment as per Section 5</li>
                    <li><strong>Kick-off:</strong> Engagement commences upon receipt of payment confirmation</li>
                    <li><strong>Delivery:</strong> Consulting services delivered per agreed scope and timeline</li>
                    <li><strong>Closure:</strong> Final deliverables issued; any outstanding balance invoiced</li>
                  </ol>
                </div>

                <div className="legal-section" id="ip">
                  <h2 className="legal-section-title"><span className="ls-num">08</span> Intellectual Property</h2>
                  <p><strong>Pre-existing IP:</strong> All intellectual property, methodologies, frameworks, and know-how developed by Dr. Naveed Iqbal or Thinkerva prior to an engagement remain the sole property of Thinkerva.</p>
                  <p><strong>Deliverables:</strong> Upon full payment, the Client receives a non-exclusive, perpetual licence to use the specific deliverables created for their engagement.</p>
                  <p><strong>Client Data:</strong> Any data or materials provided by the Client remains the property of the Client.</p>
                </div>

                <div className="legal-section" id="confidentiality">
                  <h2 className="legal-section-title"><span className="ls-num">09</span> Confidentiality</h2>
                  <p>Both parties agree to maintain strict confidentiality regarding all non-public information shared during the engagement. Thinkerva will not disclose Client information to any third party without written consent, except as required by law.</p>
                  <p>This confidentiality obligation survives termination of the engagement for a period of five (5) years.</p>
                </div>

                <div className="legal-section" id="liability">
                  <h2 className="legal-section-title"><span className="ls-num">10</span> Limitation of Liability</h2>
                  <p>To the maximum extent permitted by applicable law:</p>
                  <ul>
                    <li>Thinkerva's total liability for any claim arising from an engagement shall not exceed the total fees paid by the Client for that specific engagement</li>
                    <li>Thinkerva shall not be liable for any indirect, consequential, special, or punitive damages</li>
                    <li>Thinkerva makes no guarantees regarding specific business outcomes resulting from consulting advice</li>
                  </ul>
                </div>

                <div className="legal-section" id="termination">
                  <h2 className="legal-section-title"><span className="ls-num">11</span> Termination</h2>
                  <p><strong>By the Client:</strong> The Client may terminate an engagement with 14 days' written notice. Work completed up to the termination date will be invoiced. Deposits and advance payments are non-refundable.</p>
                  <p><strong>By Thinkerva:</strong> Thinkerva may terminate an engagement immediately upon written notice if: (a) the Client fails to make payment; (b) the Client breaches these Terms; (c) continuation would require unethical or unlawful action.</p>
                </div>

                <div className="legal-section" id="governing">
                  <h2 className="legal-section-title"><span className="ls-num">12</span> Governing Law</h2>
                  <p>These Terms and Conditions shall be governed by and construed in accordance with applicable international commercial law principles. Thinkerva operates globally and serves clients across multiple jurisdictions.</p>
                </div>

                <div className="legal-section" id="dispute">
                  <h2 className="legal-section-title"><span className="ls-num">13</span> Dispute Resolution</h2>
                  <ol>
                    <li><strong>Good Faith Negotiation:</strong> Both parties will attempt to resolve the dispute through direct communication within 30 days</li>
                    <li><strong>Mediation:</strong> If negotiation fails, the parties will engage a mutually agreed neutral mediator</li>
                    <li><strong>Arbitration:</strong> If mediation fails, the dispute will be submitted to binding arbitration under internationally recognised arbitration rules</li>
                  </ol>
                </div>

                <div className="legal-section" id="privacy-ref">
                  <h2 className="legal-section-title"><span className="ls-num">14</span> Privacy</h2>
                  <p>The collection and use of personal data is governed by our <Link href="/privacy-policy" style={{ color: 'var(--teal-light)' }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>
                </div>

                <div className="legal-section" id="contact-us">
                  <h2 className="legal-section-title"><span className="ls-num">15</span> Contact</h2>
                  <p>For questions regarding these Terms and Conditions:</p>
                  <div className="payment-box">
                    <div className="payment-box-icon">📬</div>
                    <div>
                      <h4>Thinkerva — Legal &amp; Consulting Enquiries</h4>
                      <p><strong>Dr. Naveed Iqbal</strong> · Thinkerva.com<br/>
                      Email: <a href="mailto:contact@thinkerva.com" style={{ color: 'var(--teal-light)' }}>contact@thinkerva.com</a><br/>
                      Website: <a href="https://thinkerva.com" style={{ color: 'var(--teal-light)' }}>thinkerva.com</a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
