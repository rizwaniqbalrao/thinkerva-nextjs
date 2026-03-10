import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Thinkerva.com',
  description: 'Thinkerva Privacy Policy — How we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <section className="legal-hero">
          <div className="legal-hero-orb legal-hero-orb--1"></div>
          <div className="legal-hero-orb legal-hero-orb--2"></div>
          <div className="container legal-hero-inner">
            <div className="legal-badge">Legal Document</div>
            <h1 className="legal-title">Privacy <span className="text-gradient">Policy</span></h1>
            <p className="legal-meta">Last updated: January 1, 2025 &nbsp;·&nbsp; Effective: January 1, 2025</p>
            <p className="legal-meta">This policy governs data practices at <strong>Thinkerva.com</strong>, operated by <strong>Dr. Naveed Iqbal</strong>.</p>
          </div>
        </section>

        <section className="legal-body">
          <div className="container">
            <div className="legal-layout">
              <aside className="legal-toc">
                <p className="toc-title">Contents</p>
                <nav className="toc-list">
                  {['intro','controller','collection','use','payments','sharing','retention','rights','cookies','security','children','changes','contact-us'].map((id, i) => {
                    const labels = ['1. Introduction','2. Data Controller','3. Information We Collect','4. How We Use Data','5. Payment Information','6. Data Sharing','7. Data Retention','8. Your Rights','9. Cookies','10. Security','11. Children\'s Privacy','12. Changes to Policy','13. Contact Us'];
                    return <a key={id} href={`#${id}`}>{labels[i]}</a>;
                  })}
                </nav>
              </aside>

              <div className="legal-content">
                <div className="legal-section" id="intro">
                  <h2 className="legal-section-title"><span className="ls-num">01</span> Introduction</h2>
                  <p>Welcome to <strong>Thinkerva.com</strong> ("Thinkerva", "we", "us", or "our"), a global technology consultancy brand operated by <strong>Dr. Naveed Iqbal</strong>. We are committed to protecting the privacy and personal data of every individual who interacts with our website, services, or communications.</p>
                  <p>This Privacy Policy explains what information we collect, why we collect it, how we use it, and what rights you have regarding your personal data. By accessing or using thinkerva.com, you agree to the practices described in this policy.</p>
                  <div className="legal-highlight">
                    <strong>Summary:</strong> Thinkerva collects only the information necessary to deliver professional consulting services and communications. We do not sell your personal data. We use industry-standard security measures to protect all information we hold.
                  </div>
                </div>

                <div className="legal-section" id="controller">
                  <h2 className="legal-section-title"><span className="ls-num">02</span> Data Controller</h2>
                  <p>The data controller responsible for your personal information is:</p>
                  <ul>
                    <li><strong>Name:</strong> Dr. Naveed Iqbal</li>
                    <li><strong>Brand:</strong> Thinkerva.com</li>
                    <li><strong>Email:</strong> contact@thinkerva.com</li>
                    <li><strong>Website:</strong> https://thinkerva.com</li>
                  </ul>
                  <p>For any privacy-related inquiries, you may contact us directly at the email above. We commit to responding to privacy requests within 30 calendar days.</p>
                </div>

                <div className="legal-section" id="collection">
                  <h2 className="legal-section-title"><span className="ls-num">03</span> Information We Collect</h2>
                  <p>We collect information in the following ways:</p>
                  <p><strong>Information You Provide Directly:</strong></p>
                  <ul>
                    <li>Full name and professional title</li>
                    <li>Organisation or company name</li>
                    <li>Email address and phone number</li>
                    <li>Project descriptions and consulting requirements submitted via our contact form</li>
                    <li>Communication history via email or message</li>
                    <li>Payment-related information (processed via secure third-party platforms; see Section 5)</li>
                  </ul>
                  <p><strong>Information Collected Automatically:</strong></p>
                  <ul>
                    <li>IP address and approximate geographic location</li>
                    <li>Browser type, version, and operating system</li>
                    <li>Pages visited, time spent, and navigation patterns</li>
                    <li>Referral sources (how you found our website)</li>
                    <li>Device type (desktop, mobile, tablet)</li>
                  </ul>
                  <p><strong>Information from Third Parties:</strong></p>
                  <ul>
                    <li>Professional details from LinkedIn or other platforms if you contact us via social media</li>
                    <li>Referral information if introduced to Thinkerva through a partner or associate</li>
                  </ul>
                </div>

                <div className="legal-section" id="use">
                  <h2 className="legal-section-title"><span className="ls-num">04</span> How We Use Your Information</h2>
                  <p>Thinkerva uses the data we collect for the following purposes:</p>
                  <ul>
                    <li><strong>Service Delivery:</strong> To respond to enquiries, schedule consultations, and deliver contracted consulting services</li>
                    <li><strong>Communication:</strong> To send relevant updates, proposals, and follow-up information related to your enquiry or engagement</li>
                    <li><strong>Invoicing &amp; Payments:</strong> To issue invoices, process payments via agreed methods (including Payoneer), and maintain accurate financial records</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and contractual obligations</li>
                    <li><strong>Website Improvement:</strong> To analyse usage patterns and improve the performance and content of thinkerva.com</li>
                    <li><strong>Security:</strong> To detect and prevent fraud, unauthorised access, and other malicious activity</li>
                  </ul>
                  <p>We will not use your data for automated decision-making or profiling without your explicit consent.</p>
                </div>

                <div className="legal-section" id="payments">
                  <h2 className="legal-section-title"><span className="ls-num">05</span> Payment Information &amp; Methods</h2>
                  <p>Thinkerva accepts payments via the following methods:</p>
                  <div className="payment-box">
                    <div className="payment-box-icon">💳</div>
                    <div>
                      <h4>Accepted Payment Methods</h4>
                      <p>We accept payments via <strong>Payoneer</strong> (our primary international payment platform), bank transfer, and other agreed methods. All payment details are communicated securely via email or invoice. We do not store credit card numbers, banking credentials, or Payoneer account details on our website or servers.</p>
                    </div>
                  </div>
                  <p>Payment data shared during transactions is processed by Payoneer or your bank directly. Thinkerva retains only records of transaction amounts, dates, and payment references for accounting and legal compliance purposes.</p>
                  <p>For Payoneer payments, Payoneer's own Privacy Policy applies to data processed on their platform. We encourage you to review Payoneer's privacy documentation at payoneer.com.</p>
                  <p><strong>Invoicing:</strong> Invoices will include your name, organisation, service description, and amount. Invoice records are retained for a minimum of 7 years in accordance with financial record-keeping obligations.</p>
                </div>

                <div className="legal-section" id="sharing">
                  <h2 className="legal-section-title"><span className="ls-num">06</span> Data Sharing &amp; Disclosure</h2>
                  <p>Thinkerva does not sell, rent, or trade your personal data to any third party. We may share information only in the following limited circumstances:</p>
                  <ul>
                    <li><strong>Service Providers:</strong> Trusted third-party providers who assist us in operating our website or delivering services, bound by confidentiality obligations</li>
                    <li><strong>Payment Processors:</strong> Payoneer or other payment platforms, solely for processing transactions</li>
                    <li><strong>Legal Obligations:</strong> When required by law, court order, or regulatory authority</li>
                    <li><strong>Business Transfers:</strong> In the unlikely event of a merger or acquisition, with appropriate privacy protections in place</li>
                    <li><strong>With Your Consent:</strong> Any other sharing will only occur with your explicit written consent</li>
                  </ul>
                </div>

                <div className="legal-section" id="retention">
                  <h2 className="legal-section-title"><span className="ls-num">07</span> Data Retention</h2>
                  <p>We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy:</p>
                  <ul>
                    <li><strong>Enquiry Data:</strong> Retained for 2 years from last contact if no engagement is initiated</li>
                    <li><strong>Client Engagement Data:</strong> Retained for the duration of the engagement plus 5 years</li>
                    <li><strong>Financial Records:</strong> Retained for a minimum of 7 years for tax and audit compliance</li>
                    <li><strong>Website Analytics:</strong> Aggregated and anonymised; retained indefinitely</li>
                  </ul>
                  <p>You may request deletion of your personal data at any time (subject to legal retention obligations) by contacting us at contact@thinkerva.com.</p>
                </div>

                <div className="legal-section" id="rights">
                  <h2 className="legal-section-title"><span className="ls-num">08</span> Your Data Rights</h2>
                  <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                  <ul>
                    <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you</li>
                    <li><strong>Right of Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                    <li><strong>Right of Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                    <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at <strong>contact@thinkerva.com</strong>. We will respond within 30 calendar days.</p>
                </div>

                <div className="legal-section" id="cookies">
                  <h2 className="legal-section-title"><span className="ls-num">09</span> Cookies &amp; Tracking</h2>
                  <p>Thinkerva.com may use cookies and similar tracking technologies to improve your browsing experience and analyse site usage. Types of cookies we may use:</p>
                  <ul>
                    <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., theme preference, session state)</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                  </ul>
                  <p>We do not use advertising cookies or cross-site tracking. You can control or disable cookies through your browser settings at any time.</p>
                </div>

                <div className="legal-section" id="security">
                  <h2 className="legal-section-title"><span className="ls-num">10</span> Data Security</h2>
                  <p>Thinkerva implements appropriate technical and organisational security measures to protect your personal data. These measures include:</p>
                  <ul>
                    <li>SSL/TLS encryption for all data transmitted via the website</li>
                    <li>Secure email communications for sensitive engagements</li>
                    <li>Access controls limiting data access to authorised personnel only</li>
                    <li>Regular review of security practices</li>
                  </ul>
                </div>

                <div className="legal-section" id="children">
                  <h2 className="legal-section-title"><span className="ls-num">11</span> Children's Privacy</h2>
                  <p>Thinkerva.com is a professional B2B consulting platform intended exclusively for business professionals and organisations. Our services are not directed to individuals under the age of 18.</p>
                </div>

                <div className="legal-section" id="changes">
                  <h2 className="legal-section-title"><span className="ls-num">12</span> Changes to This Policy</h2>
                  <p>Thinkerva reserves the right to update this Privacy Policy at any time. When we make material changes, we will update the "Last Updated" date at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy.</p>
                </div>

                <div className="legal-section" id="contact-us">
                  <h2 className="legal-section-title"><span className="ls-num">13</span> Contact Us</h2>
                  <p>For any privacy-related questions, requests, or concerns, please contact:</p>
                  <div className="payment-box">
                    <div className="payment-box-icon">📬</div>
                    <div>
                      <h4>Thinkerva — Privacy Enquiries</h4>
                      <p><strong>Dr. Naveed Iqbal</strong> · Thinkerva.com<br/>
                      Email: <a href="mailto:contact@thinkerva.com" style={{ color: 'var(--teal-light)' }}>contact@thinkerva.com</a><br/>
                      Response time: Within 30 calendar days</p>
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
