import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { CONTACT, SITE_URL } from '../site';

function Terms() {
  return (
    <LegalPage page="terms" kicker="Legal" title="Terms of Service">
      <p>
        These Terms of Service (&quot;Terms&quot;) are a contract between you and Go4Profit LLC
        (&quot;Go4Profit,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for use of{' '}
        <a href={SITE_URL}>{SITE_URL}</a>, booking tools we embed or link to, communications with
        us, and — once you sign an engagement — our accounting and advisory services.
      </p>
      <p>
        By using the site, booking a consultation, or requesting services, you agree to these Terms
        and to our <Link to="/privacy">Privacy Policy</Link>. If you do not agree, do not use the
        site or book a meeting.
      </p>
      <p>
        If you have a signed engagement letter, statement of work, or other written client
        agreement, that document controls if it conflicts with these Terms for the services it
        covers. These Terms still apply to the website and to anything the engagement letter does
        not address.
      </p>

      <h2>1. Who may use the site</h2>
      <p>
        The site is for business use, primarily small businesses and their authorized
        representatives. You must be at least 18 and able to form a binding contract. If you use
        the site for a company, you represent that you have authority to bind that company, and
        &quot;you&quot; includes that company.
      </p>
      <p>
        We may refuse, suspend, or terminate access if we believe you are misusing the site,
        providing false information, or creating legal or security risk.
      </p>

      <h2>2. What we do</h2>
      <p>
        Go4Profit provides accounting and advisory support for small businesses. Depending on the
        engagement, that may include bookkeeping, catch-up and cleanup, payroll support, accounts
        payable and receivable, financial reporting, and related advisory work.
      </p>
      <p>
        The marketing site describes typical services. It is not a promise that every item is
        included, available in every state, or appropriate for every business. Scope, timing, and fees
        are set in a written engagement or a written confirmation we send you.
      </p>

      <h2>3. Consultations are not an engagement</h2>
      <p>
        A free or introductory consultation is a conversation so we can learn about your operation
        and you can learn about us. It does not create a client relationship, an audit, a tax
        filing obligation, or a duty to detect fraud. We may take notes. We do not start bookkeeping,
        filings, or system access until both sides agree in writing (including email confirmation we
        accept as an engagement) and any onboarding conditions are met.
      </p>
      <p>
        Advice given on an intro call is general and based on the incomplete facts you share. Do
        not rely on it as a final tax position, payroll calculation, or filing instruction.
      </p>

      <h2>4. Client responsibilities</h2>
      <p>If you engage us, you agree to:</p>
      <ul>
        <li>Provide complete, accurate, and timely information, documents, and access</li>
        <li>Authorize connections or exports from banks, payroll, and bookkeeping systems as needed</li>
        <li>Designate contacts who may instruct us, and tell us when those people change</li>
        <li>Review drafts, questions, and reports we send and respond by the dates we request</li>
        <li>Keep your own copies of source documents</li>
        <li>Pay invoices on the terms in the engagement</li>
        <li>Comply with tax, employment, and licensing laws that apply to your business — we support the finance function; we do not replace your management</li>
        <li>Tell us promptly about IRS or state notices, bank issues, payroll disputes, or system changes that affect the books</li>
      </ul>
      <p>
        We may pause or stop work, and we are not responsible for late filings, penalties, or
        missed insights, if information is late, incomplete, or inaccurate, or if fees are unpaid.
      </p>

      <h2>5. Professional limits</h2>
      <p>
        We are not your lawyer, insurance broker, freight broker, or investment advisor. We do not
        provide legal opinions, represent you in court, or guarantee a tax refund, audit outcome,
        lending decision, or profit level. Tax law and business rules change; positions we take are
        based on facts you provide and law as we understand it at the time.
      </p>
      <p>
        Unless an engagement expressly says we are performing an audit, review, or compilation
        under professional attestation standards, our work is accounting, bookkeeping, and
        management reporting — not an assurance engagement. Third parties (lenders, buyers,
        factors, investors) may not rely on our reports unless we agree in writing that they may.
      </p>
      <p>
        We may recommend software or vendors. Those relationships are yours. We are not responsible
        for a third party&apos;s errors, downtime, fees, or data loss.
      </p>

      <h2>6. Software, reports, and AI tools</h2>
      <p>
        We may use our own software and third-party tools to ingest accounting data,
        reconcile activity, and produce KPIs. You grant us a limited license to process the data
        you supply for the engagement. You retain ownership of your underlying records. We retain
        ownership of our software, templates, methods, models, and the design of our reports.
      </p>
      <p>
        We grant you a non-exclusive license to use finished reports we deliver for your internal
        business purposes. You may not resell them, present them as an audit, or share them with
        third parties as if they were independently assured, except as the engagement allows.
      </p>
      <p>
        Automated or AI-assisted tools may flag anomalies or draft analyses. Output can be
        incomplete or wrong. You should not treat software output as a filing, payment instruction,
        or final number until a Go4Profit professional has confirmed it under the engagement.
      </p>

      <h2>7. Fees, expenses, and taxes</h2>
      <p>
        Fees are as quoted in the engagement or a written proposal we accept. Recurring work may
        be billed monthly or on another cycle we agree. We may bill for out-of-scope work, rush
        requests, catch-up bookkeeping, or extra entities at our then-current rates after notice.
      </p>
      <p>
        Invoices are due as stated. Late amounts may accrue interest or collection costs to the
        extent allowed by law. We may suspend services, revoke system access we provisioned, and
        withhold deliverables (except records you own that the law requires us to return) if
        invoices are overdue.
      </p>
      <p>
        You are responsible for your own business taxes. Our fees do not include amounts we must
        collect from you if a tax applies to the services themselves, unless the engagement says
        otherwise.
      </p>

      <h2>8. Website license and acceptable use</h2>
      <p>
        We grant you a limited, revocable, non-transferable license to access the site for lawful
        business purposes. You may not:
      </p>
      <ul>
        <li>Copy, scrape, or republish the site in a systematic way, or use bots without our written permission</li>
        <li>Reverse engineer, probe, or overload our systems</li>
        <li>Upload malware, or attempt to gain unauthorized access</li>
        <li>Impersonate Go4Profit or another person, or misrepresent your affiliation</li>
        <li>Use the site to send spam or unlawful content</li>
        <li>Interfere with other users or with booking tools</li>
        <li>Use our name, mark, or content to suggest we endorse you without permission</li>
        <li>Use the site if you are prohibited from doing so under U.S. sanctions or export rules</li>
      </ul>
      <p>
        Content on the site — including copy, layout, trademarks, and images — is owned by
        Go4Profit or our licensors and is protected by intellectual-property laws. &quot;Go4Profit&quot;
        and related marks are ours. You may not use them except to refer to us accurately.
      </p>

      <h2>9. Bookings and Calendly</h2>
      <p>
        Scheduling may run through Calendly or a similar tool. Their terms apply to that interface.
        You are responsible for providing a working email and for showing up or canceling in a
        reasonable time. We may cancel or reschedule meetings, including if we cannot serve your
        type of work or geography.
      </p>

      <h2>10. Communications</h2>
      <p>
        You agree that we may contact you at the email, phone, or address you provide about
        scheduling, the engagement, invoices, and (where allowed) our services. Electronic
        signatures, email acceptances, and scanned copies may be treated as originals. Keep your
        contact information current.
      </p>
      <p>
        Email and web forms are not secure for every type of secret. Do not send passwords in
        plain email if a secure channel is available. Sensitive tax IDs and bank credentials should
        move through the method we specify during onboarding.
      </p>

      <h2>11. Confidentiality</h2>
      <p>
        Each party will protect the other&apos;s non-public business information and use it only
        for the relationship. We may disclose information to staff, contractors, and processors
        under confidentiality, to authorities when required, or if you instruct us to. This duty
        does not cover information that is public, independently developed, or already lawfully
        known. Our <Link to="/privacy">Privacy Policy</Link> describes personal-information
        practices in more detail.
      </p>
      <p>
        We may list your business name as a client or use a testimonial you approve. We will not
        publish your financial results without your permission.
      </p>

      <h2>12. Testimonials and examples</h2>
      <p>
        Quotes and sample reports on the site illustrate how reporting can look. Sample numbers
        may be simplified or hypothetical. Other clients&apos; results are not a guarantee of
        yours.
      </p>

      <h2>13. Disclaimers</h2>
      <p>
        THE SITE AND, EXCEPT AS A SIGNED ENGAGEMENT EXPRESSLY STATES, OUR PRE-ENGAGEMENT
        COMMUNICATIONS ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE MAXIMUM
        EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR
        STATUTORY, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR
        FREE OF HARMFUL COMPONENTS, OR THAT CONTENT IS COMPLETE OR CURRENT.
      </p>
      <p>
        Professional services, once engaged, are provided with reasonable professional care under
        the engagement — not as a warranty of a particular financial, tax, or operational result.
      </p>

      <h2>14. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GO4PROFIT AND ITS OWNERS, EMPLOYEES, AND
        CONTRACTORS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY,
        OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST LOADS, LOST DATA, BUSINESS INTERRUPTION,
        COVER DAMAGES, OR LOSS OF GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THE SITE, A CONSULTATION, OR THESE TERMS IS
        LIMITED TO THE GREATER OF ONE HUNDRED U.S. DOLLARS ($100) OR THE AMOUNTS YOU PAID US FOR
        THE SERVICE GIVING RISE TO THE CLAIM IN THE THREE MONTHS BEFORE THE CLAIM. IF A SIGNED
        ENGAGEMENT SETS A DIFFERENT CAP, THAT CAP APPLIES TO THAT ENGAGEMENT.
      </p>
      <p>
        Some jurisdictions do not allow certain limitations. In those places, our liability is
        limited to the fullest extent the law allows. Nothing in these Terms excludes liability
        that cannot be excluded, such as liability for fraud or for personal injury caused by our
        willful misconduct where that bar is not permitted.
      </p>

      <h2>15. Indemnity</h2>
      <p>
        You will defend and indemnify Go4Profit against claims, damages, and reasonable legal fees
        arising from your misuse of the site, your violation of these Terms or the law, information
        you provide that is false or infringing, or a third-party claim caused by your business
        operations (including employment claims) except to the extent caused
        by our willful misconduct.
      </p>

      <h2>16. Term, suspension, and termination</h2>
      <p>
        These Terms apply while you use the site. We may stop offering the site or any feature at
        any time. Either party may end a consultation request by canceling the meeting.
      </p>
      <p>
        An engagement continues until completed, until the term in the engagement ends, or until
        either party terminates as that document allows. We may terminate or suspend an engagement
        immediately if you do not pay, if you ask us to violate law or professional standards, if
        cooperation fails, or if continuing would create a conflict we cannot waive.
      </p>
      <p>
        After termination we will return or make available client-owned records as the engagement
        and the law require, and we may retain copies as described in the Privacy Policy. Sections
        that should survive (including fees owed, IP, confidentiality, disclaimers, liability
        limits, indemnity, and governing law) survive.
      </p>

      <h2>17. Force majeure</h2>
      <p>
        We are not liable for delay or failure caused by events beyond reasonable control —
        including outages, vendor failures, storms, labor disputes, war, government action, or
        widespread cyber incidents — provided we take reasonable steps to resume.
      </p>

      <h2>18. Assignment</h2>
      <p>
        You may not assign these Terms without our consent. We may assign them to an affiliate or
        to a successor that acquires our business. These Terms bind permitted successors.
      </p>

      <h2>19. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Illinois, without regard to conflict
        of law rules. Exclusive venue for disputes that are not resolved informally is the state or
        federal courts located in Cook County, Illinois, and you consent to personal jurisdiction
        there. Either party may still seek injunctive relief in any court of competent jurisdiction
        to protect intellectual property or confidential information.
      </p>
      <p>
        Before filing a claim related to the site or a consultation, you agree to email{' '}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and allow 30 days to try to resolve
        it. This does not limit either party&apos;s right to seek emergency injunctive relief.
      </p>
      <p>
        If you are a consumer entitled by law to a different venue or to join a class, that law
        controls to the extent it cannot be waived. The site is intended for business users.
      </p>

      <h2>20. Government and sanctions</h2>
      <p>
        You represent that you are not prohibited from receiving U.S. services under applicable
        sanctions or export laws, and that you will not use the site or our work for a prohibited
        purpose.
      </p>

      <h2>21. Changes to these Terms</h2>
      <p>
        We may update these Terms by posting a new version on this page and changing the &quot;Last
        updated&quot; date. Material changes may also be announced by email or a site notice. If
        you continue to use the site after the update, you accept the new Terms. For an active
        paid engagement, changes to these website Terms do not rewrite the engagement unless we
        both agree or the engagement says they do.
      </p>

      <h2>22. General</h2>
      <p>
        These Terms, the Privacy Policy, and any engagement letter are the entire agreement for
        their subject matter and supersede prior discussions on that subject. If a provision is
        unenforceable, the rest remains in effect. A failure to enforce a provision is not a
        waiver. There are no third-party beneficiaries except as Section 5 allows for a written
        reliance letter. Headings are for convenience only. &quot;Including&quot; means
        &quot;including without limitation.&quot;
      </p>
      <p>
        Notices to Go4Profit must be sent to <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{' '}
        and, if we request a paper copy, to {CONTACT.address}. Notices to you may be sent to the
        email or address you provided.
      </p>

      <h2>23. Contact</h2>
      <p>
        Go4Profit LLC
        <br />
        {CONTACT.address}
        <br />
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
    </LegalPage>
  );
}

export default Terms;
