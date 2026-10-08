import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { CONTACT, SITE_URL } from '../site';

function Privacy() {
  return (
    <LegalPage page="privacy" kicker="Legal" title="Privacy Policy">
      <p>
        This Privacy Policy explains how Go4Profit LLC (&quot;Go4Profit,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, shares, and protects information when you visit{' '}
        <a href={SITE_URL}>{SITE_URL}</a>, book a consultation, email us, or use our accounting,
        bookkeeping, payroll, and advisory services.
      </p>
      <p>
        A signed engagement letter, statement of work, or client agreement controls how we handle
        information for an active client relationship. If that document is stricter than this policy
        on a specific point, that document controls for that engagement.
      </p>
      <p>
        Questions: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>. Mailing address:{' '}
        {CONTACT.address}.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Go4Profit is a Chicago-based accounting and advisory firm for small businesses. We are the
        business responsible for the personal and business information described here.
      </p>

      <h2>2. Who this policy covers</h2>
      <p>This policy applies to information about:</p>
      <ul>
        <li>Website visitors and people who browse, download, or interact with our site</li>
        <li>People who book or attend a free or paid consultation</li>
        <li>Prospective clients and people who request a proposal</li>
        <li>Clients, their owners, officers, authorized contacts, and employees when their data is needed to perform services</li>
        <li>Former clients, for records we must keep</li>
        <li>Vendors, referral partners, and professional advisors we work with</li>
        <li>Job applicants or contractors who send materials to us</li>
        <li>Anyone who emails, calls, or otherwise contacts us</li>
      </ul>
      <p>
        This policy does not apply to third-party websites, apps, or booking tools we link to, except
        as described below for processors we use (such as Calendly and Google Analytics).
      </p>

      <h2>3. Information we collect</h2>
      <p>The categories we collect depend on how you interact with us.</p>

      <h3>Identity and contact</h3>
      <p>
        Name, business name, job title, email address, phone number, mailing address, and preferred
        way to be reached.
      </p>

      <h3>Business information</h3>
      <p>
        Entity type, industry, systems you use (bookkeeping software, payroll, banks), and the
        services you are interested in.
      </p>

      <h3>Consultation and booking</h3>
      <p>
        Meeting time, timezone, notes you enter when you book, and any files or questions you send
        before or after a call. Booking is handled through Calendly, which may also collect device
        and calendar information under its own policy.
      </p>

      <h3>Client work data</h3>
      <p>
        If you become a client, we may receive or create information needed to keep books, run
        payroll, manage invoices and bills, or advise on cash flow and profitability.
        That can include:
      </p>
      <ul>
        <li>Financial statements, general ledgers, bank and credit-card activity, and invoices</li>
        <li>Employer identification numbers, tax IDs, and, where required for payroll or tax, Social Security numbers or ITINs</li>
        <li>Employee names, pay, and related payroll records</li>
        <li>Customer invoices, vendor bills, and aging reports</li>
        <li>Access credentials or exports from QuickBooks, payroll, bank, or other systems you authorize</li>
        <li>Correspondence about your account, adjustments, and filings</li>
      </ul>
      <p>
        We ask clients to share only what is needed for the engagement. Do not send more sensitive
        data than the work requires.
      </p>

      <h3>Payment</h3>
      <p>
        If you pay us, we may collect billing contact details, invoice history, and limited payment
        confirmation. Card or bank account numbers are typically processed by a payment provider, not
        stored in full on our marketing site.
      </p>

      <h3>Technical and usage</h3>
      <p>
        IP address, browser type, device type, referring URL, pages viewed, approximate location
        derived from IP, date and time of visits, and similar diagnostics. We use Google Analytics
        for some of this.
      </p>

      <h3>Communications</h3>
      <p>
        The content of emails, messages, call notes, and support requests you send to{' '}
        {CONTACT.email} or other Go4Profit addresses.
      </p>

      <h3>Applications and vendors</h3>
      <p>
        Resumes, work history, and references if you apply to work with us; tax and payment details
        if you are a vendor we pay.
      </p>

      <h3>Information we do not intentionally collect</h3>
      <p>
        We do not seek information from children. We do not require website visitors to create an
        account. We do not collect precise geolocation through the marketing site. We do not sell
        personal information.
      </p>

      <h2>4. How we collect it</h2>
      <ul>
        <li>Directly from you, through forms, email, calls, bookings, and onboarding</li>
        <li>Automatically, through cookies, analytics, and server logs</li>
        <li>From systems you connect or export for us (banks, payroll, bookkeeping software)</li>
        <li>From your authorized contacts, prior accountants, or service providers you ask us to work with</li>
        <li>From public sources, such as your website or business listings, when relevant to a proposal</li>
      </ul>

      <h2>5. How we use information</h2>
      <p>We use information to:</p>
      <ul>
        <li>Operate, secure, and improve the website</li>
        <li>Schedule and run consultations</li>
        <li>Respond to inquiries and send the information you asked for</li>
        <li>Prepare proposals and onboard clients</li>
        <li>Perform bookkeeping, payroll, invoicing, bill management, reporting, and related services</li>
        <li>Produce financial statements and management reports</li>
        <li>Invoice, collect payment, and keep business records</li>
        <li>Meet tax, employment, professional, and legal obligations</li>
        <li>Detect, investigate, and prevent fraud, security incidents, or misuse</li>
        <li>Send service messages about your engagement or our website</li>
        <li>Send occasional marketing if you asked for it or if we have another lawful basis — you can opt out anytime</li>
        <li>Analyze aggregated, de-identified trends so we can improve our services</li>
        <li>Evaluate applicants and manage vendor relationships</li>
        <li>Establish, exercise, or defend legal claims</li>
      </ul>
      <p>
        We do not use client financial data from an engagement to train public AI models. Internal
        software and analysis tools we use on client data are limited to performing and improving
        the services we provide to that client, subject to confidentiality.
      </p>

      <h2>6. Legal bases</h2>
      <p>Where a privacy law requires a legal basis, we rely on one or more of the following:</p>
      <ul>
        <li>Your consent (for example, optional cookies or marketing emails)</li>
        <li>Performance of a contract, or steps you request before a contract</li>
        <li>Our legitimate interests in running a professional services firm, securing our systems, and understanding how the site is used, balanced against your rights</li>
        <li>A legal obligation, such as tax recordkeeping or a valid legal demand</li>
        <li>Vital interests, only in a rare emergency</li>
      </ul>

      <h2>7. Cookies and analytics</h2>
      <p>
        The site uses cookies and similar technologies. Some are needed for the site to function.
        Others help us understand traffic. We use Google Analytics (measurement ID G-2HXHF07VRE) to
        see aggregated usage. Google may process data as described in Google&apos;s privacy
        documentation. You can control cookies in your browser and, where available, use Google&apos;s
        opt-out tools.
      </p>
      <p>
        We do not currently respond to every browser &quot;Do Not Track&quot; signal because there is
        no consistent industry standard. You can still limit analytics through browser settings and
        extensions.
      </p>

      <h2>8. Calendly and other processors</h2>
      <p>
        Consultations are scheduled through Calendly. When you book, Calendly collects the details
        you submit and may set its own cookies. See Calendly&apos;s privacy policy for that processing.
        We receive the booking information so we can attend the meeting and follow up.
      </p>
      <p>We also use service providers who may process information on our behalf, such as:</p>
      <ul>
        <li>Website hosting and content delivery</li>
        <li>Email and office productivity tools</li>
        <li>Accounting, payroll, and tax software</li>
        <li>File storage and secure transfer</li>
        <li>Payment processors</li>
        <li>Professional advisors (legal, insurance) under confidentiality</li>
      </ul>
      <p>
        Those providers are allowed to use the information only to provide their services to us, or
        as required by law.
      </p>

      <h2>9. When we share information</h2>
      <p>We share information only as needed for the purposes above, including:</p>
      <ul>
        <li>With processors and subprocessors described in this policy</li>
        <li>With tax authorities, payroll agencies, or other government bodies when the engagement or the law requires it</li>
        <li>With a bank, payroll provider, or other vendor you ask us to contact</li>
        <li>With a successor if we merge, sell, or reorganize the business, under this policy or a notice we will provide</li>
        <li>If we believe disclosure is required by law, regulation, court order, or to protect people, property, or rights</li>
        <li>With your consent, or at your direction</li>
      </ul>
      <p>
        We do not sell personal information. We do not share personal information for cross-context
        behavioral advertising. We do not rent our contact lists.
      </p>

      <h2>10. Confidentiality of client work</h2>
      <p>
        Client books, payroll, and financial performance data are treated as confidential
        professional information. Access is limited to people who need it to deliver the
        engagement. We do not disclose that information to other clients or use it for unrelated
        marketing.
      </p>

      <h2>11. Retention</h2>
      <p>
        We keep information only as long as needed for the purposes collected, including legal,
        tax, accounting, and professional recordkeeping. Website analytics are typically kept for a
        shorter period set by our analytics tools. Client workpapers and tax-related records are
        often retained for at least seven years, and sometimes longer if a return, dispute, or
        statute requires it. Consultation notes for people who do not become clients are kept only
        as long as useful for follow-up or as required by law, then deleted or archived with
        reduced access. When retention ends, we delete or de-identify information, or isolate it
        from further use if immediate deletion is not practical (for example, backups).
      </p>

      <h2>12. Security</h2>
      <p>
        We use administrative, technical, and physical safeguards appropriate to the sensitivity of
        the information — access controls, secure transfer where available, and limits on who can
        see client files. No method of transmission or storage is completely secure. If we determine
        a breach that requires notice under applicable law, we will notify you and regulators as
        required, using the contact information we have on file.
      </p>
      <p>
        You are responsible for protecting credentials you give us or that we provision for a
        portal, and for telling us promptly if you believe access was compromised.
      </p>

      <h2>13. International visitors</h2>
      <p>
        We operate in the United States. If you contact us from another country, your information
        will be processed in the United States, where laws may differ from those in your location.
        By using the site or sending us information, you understand that transfer. If we later need
        a specific transfer mechanism for a jurisdiction, we will put it in place.
      </p>

      <h2>14. Your choices and rights</h2>
      <p>Depending on who you are and where you live, you may be able to:</p>
      <ul>
        <li>Access a copy of personal information we hold about you</li>
        <li>Correct inaccurate information</li>
        <li>Delete information, subject to legal and professional retention duties</li>
        <li>Opt out of marketing emails by using the unsubscribe link or emailing us</li>
        <li>Limit or object to certain processing, where the law allows</li>
        <li>Appeal a decision we make on a privacy request, where state law requires an appeal</li>
        <li>Authorize an agent to make a request, where state law allows it</li>
      </ul>
      <p>
        Residents of California and other U.S. states with consumer privacy laws (including, where
        applicable, Virginia, Colorado, Connecticut, Utah, Texas, and similar laws) may have
        additional rights to know, delete, correct, and opt out of sale or sharing. We do not sell
        or share personal information as those laws define those terms. We do not use or disclose
        sensitive personal information to infer characteristics for advertising. We will not
        discriminate against you for exercising a privacy right.
      </p>
      <p>
        To make a request, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> with
        &quot;Privacy request&quot; in the subject. We will verify your identity before fulfilling
        it. We may decline or limit a request if the law allows — for example, if we must keep tax
        records, if we cannot verify you, or if the request would impair another person&apos;s
        privacy.
      </p>
      <p>
        If you are an employee of a client, we may have received your information as a
        service provider to that business. In that case we may direct you to the client, or handle
        the request with the client, as the law requires.
      </p>

      <h2>15. Children</h2>
      <p>
        The site and our services are for businesses and adults. We do not knowingly collect
        personal information from children under 18. If you believe a child provided information,
        email us and we will delete it unless we are required to keep it.
      </p>

      <h2>16. Automated tools and AI</h2>
      <p>
        We may use software, including tools that summarize, reconcile, or flag patterns in
        accounting data, to help our accountants work faster. Those tools support professional
        judgment; they do not replace it. We do not make solely automated decisions that produce
        legal or similarly significant effects about website visitors. Client reporting and tax
        positions are reviewed by people responsible for the engagement.
      </p>

      <h2>17. Third-party links</h2>
      <p>
        The site may link to maps, Calendly, social profiles, or other sites. Their privacy
        practices are their own. Review their policies before submitting information there.
      </p>

      <h2>18. Marketing and electronic messages</h2>
      <p>
        We may email people who inquired or became clients about our services, events, or updates.
        You can opt out of marketing at any time. We may still send transactional or relationship
        messages (scheduling, invoices, engagement notices) even if you opt out of marketing.
      </p>

      <h2>19. Changes to this policy</h2>
      <p>
        We may update this policy when our practices, services, or the law change. The &quot;Last
        updated&quot; date at the top will change. Material changes will be posted on this page. If
        the law requires notice or consent, we will provide it. Continued use of the site after an
        update means you have seen the revised policy. For active clients, we may also send notice
        to the email on file.
      </p>

      <h2>20. Contact</h2>
      <p>
        Go4Profit LLC
        <br />
        {CONTACT.address}
        <br />
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
      <p>
        For terms that govern use of the site and our services, see our{' '}
        <Link to="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}

export default Privacy;
