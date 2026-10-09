import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyEmbed from '../components/CalendlyEmbed';
import FaqList from '../components/FaqList';
import SupportIcon from '../components/SupportIcon';
import { usePageMeta } from '../seo';
import { CONTACT } from '../site';

const PROBLEMS = [
  {
    icon: 'bills',
    title: 'Expenses adding up?',
    body: 'We organize fuel, repairs, insurance, and other costs so you can see where your money goes.',
  },
  {
    icon: 'cleanup',
    title: 'Books falling behind?',
    body: 'We catch up on overdue months, correct errors, and reconcile your accounts.',
  },
  {
    icon: 'invoices',
    title: 'Financing another truck?',
    body: 'We prepare profit and loss statements and balance sheets to support your financing application.',
  },
  {
    icon: 'review',
    title: 'Renewing your insurance?',
    body: 'We help organize your records and prepare the financial reports your insurer requests.',
  },
  {
    icon: 'ledger',
    title: 'Truck payments getting confusing?',
    body: 'We help keep equipment purchases, loan balances, and payments recorded correctly.',
  },
  {
    icon: 'support',
    title: 'No time for bookkeeping?',
    body: 'Our team handles the work and follows up on missing information.',
  },
];

const OFFERS = [
  {
    icon: 'ledger',
    title: 'Monthly bookkeeping',
    body: 'Transactions categorized, accounts reconciled, and monthly profit and loss, balance sheet, and cash flow reports prepared—with ongoing support.',
  },
  {
    icon: 'cleanup',
    title: 'Catch-up & cleanup',
    body: 'Bring your records up to date and get updated financial reports.',
  },
  {
    icon: 'advisory',
    title: 'Business advisory',
    body: 'Understand cash flow, review costs, and plan for equipment purchases or growth.',
  },
  {
    icon: 'reports',
    title: 'Custom trucking dashboards',
    body: 'Track cost per mile, revenue per mile, and profit by truck when the required data is available.',
  },
];

const STEPS = [
  {
    title: 'Tell us about your business',
    body: 'We discuss your fleet, current books, and the help you need.',
  },
  {
    title: 'Agree on your plan',
    body: 'Confirm services and pricing, then sign your agreement.',
  },
  {
    title: 'We get to work',
    body: 'Share access and documents. Our team gets started and keeps you updated.',
  },
];

const TRUCKING_FAQS = [
  {
    question: 'Can you help with several months of overdue books?',
    answer: 'Yes. We review your records and provide a catch-up quote and estimated timeline.',
  },
  {
    question: 'Can I keep my QuickBooks account?',
    answer: 'Yes. We can work in your existing QuickBooks Online account.',
  },
  {
    question: 'Can you prepare reports for financing or insurance?',
    answer:
      'Yes. Share the lender’s or insurer’s requirements, and we’ll confirm the reports needed, scope, and pricing.',
  },
  {
    question: 'Can you show profit by truck?',
    answer:
      'Yes, when income and expenses can be linked to individual trucks. We review your data and quote the reporting separately.',
  },
  {
    question: 'Do you handle payroll?',
    answer:
      'We offer payroll support for W-2 employees, including company owners. Driver settlements are not included.',
  },
  {
    question: 'How much does bookkeeping cost?',
    answer:
      'Monthly bookkeeping starts at $350 for up to 200 transactions. Your quote depends on transaction volume, accounts, companies, and the work needed.',
  },
];

const REELS = [
  { name: 'Marcus Hale', company: 'Northline Freight' },
  { name: 'Elena Vasquez', company: 'Red Mile Logistics' },
  { name: 'James Okonkwo', company: 'Harbor Route Transport' },
  { name: 'Priya Shah', company: 'Summit Haul Co.' },
  { name: 'Chris Nguyen', company: 'Lakeview Carriers' },
  { name: 'Dana Brooks', company: 'Iron Gate Trucking' },
];

function trackConsultation() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'consultation_click', { page_path: '/trucking' });
  }
}

function BookLink({ className = 'btn btn-primary' }) {
  return (
    <a className={className} href="#book" onClick={trackConsultation}>
      Book a free consultation
    </a>
  );
}

function VideoSlot({ title, caption }) {
  return (
    <figure className="video-slot">
      <div className="video-slot-box">
        <span className="video-slot-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="currentColor" />
          </svg>
        </span>
        <p>{title}</p>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Trucking() {
  usePageMeta('trucking');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrap start-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="start-nav">
        <Link to="/" className="brand">
          <img className="brand-logo" src="/images/logo-wordmark.png" alt="Go4Profit" />
        </Link>
        <BookLink className="btn btn-nav" />
      </header>
      <main id="main">
        <section className="start-hero">
          <div className="page-inner">
            <span className="kicker">Bookkeeping for trucking businesses</span>
            <h1 className="display">Keep your trucks moving. We’ll handle the books.</h1>
            <p className="lead">
              Understand what your trucking business earns, spends, and keeps—with organized books,
              clear reports, and a team that understands your industry.
            </p>
            <div className="actions">
              <BookLink />
            </div>
            <p className="start-offer">
              Monthly bookkeeping from $350/month. Chicago-based. Serving nationwide.
            </p>
            <VideoSlot
              title="Intro video"
              caption="A short introduction to bookkeeping for trucking businesses, and how to book a call."
            />
          </div>
        </section>

        <section className="section" aria-labelledby="truck-problems">
          <div className="page-inner">
            <h2 id="truck-problems" className="display">
              Need clearer numbers for your next move?
            </h2>
            <div className="start-problems">
              {PROBLEMS.map((item) => (
                <article className="start-problem" key={item.title}>
                  <SupportIcon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="truck-reviews">
          <div className="page-inner">
            <h2 id="truck-reviews" className="display">
              Hear from trucking business owners.
            </h2>
            <div className="reel-grid">
              {REELS.map((item) => (
                <figure className="reel" key={item.name}>
                  <div className="reel-frame">
                    <span className="video-slot-play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="22" height="22">
                        <path d="M9 7.5v9l8-4.5-8-4.5Z" fill="currentColor" />
                      </svg>
                    </span>
                    <figcaption>
                      <span className="reel-name">{item.name}</span>
                      <span className="reel-company">{item.company}</span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section start-book" id="book" aria-labelledby="truck-book">
          <div className="page-inner">
            <h2 id="truck-book" className="display">
              Let’s talk about your trucking business.
            </h2>
            <p className="lead">
              Book a free 30-minute call. We’ll discuss your books, answer your questions, and
              explain pricing.
            </p>
            <CalendlyEmbed title="Choose a consultation time" frameLoading="lazy" />
            <p className="calendly-fallback muted">
              Can’t find a suitable time? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="truck-offers">
          <div className="page-inner">
            <h2 id="truck-offers" className="display">
              Clear books. A better view of your business.
            </h2>
            <div className="start-problems">
              {OFFERS.map((item) => (
                <article className="start-problem" key={item.title}>
                  <SupportIcon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft process-section" aria-labelledby="truck-steps">
          <div className="page-inner">
            <h2 id="truck-steps" className="display">
              Getting started is simple.
            </h2>
            <ol className="process-steps">
              {STEPS.map((item, index) => (
                <li key={item.title}>
                  <span className="process-num">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" aria-labelledby="truck-faq">
          <div className="page-inner start-faq">
            <h2 id="truck-faq" className="display">
              Frequently asked questions
            </h2>
            <FaqList items={TRUCKING_FAQS} />
          </div>
        </section>
      </main>
      <footer className="start-footer">
        <p>© 2026 Go4Profit LLC. All rights reserved.</p>
        <p>{CONTACT.address}, USA</p>
        <p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
        <p className="start-disclaimer">
          Go4Profit provides bookkeeping and business support services. Website content is for
          general information only and is not individualized tax, legal, or investment advice.
          Services are provided under a signed engagement agreement. Use of this website is
          governed by our <Link to="/privacy">Privacy Policy</Link> and{' '}
          <Link to="/terms">Terms of Service</Link>.
        </p>
      </footer>
    </div>
  );
}

export default Trucking;
