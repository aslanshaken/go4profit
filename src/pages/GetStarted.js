import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyEmbed from '../components/CalendlyEmbed';
import FaqList from '../components/FaqList';
import SupportIcon from '../components/SupportIcon';
import { usePageMeta } from '../seo';
import { CONTACT } from '../site';

const PROBLEMS = [
  {
    icon: 'cleanup',
    title: 'Behind on your books?',
    body: 'We bring your records up to date and correct bookkeeping issues.',
  },
  {
    icon: 'reports',
    title: 'Unsure what you’re earning?',
    body: 'We prepare clear reports showing your income, expenses, and profit.',
  },
  {
    icon: 'support',
    title: 'Doing everything yourself?',
    body: 'Our team handles the agreed work and follows up on what’s needed.',
  },
  {
    icon: 'chat',
    title: 'Chasing answers and updates?',
    body: 'Get a dedicated contact and one portal for your reports, documents, and questions.',
  },
];

const REELS = [
  { name: 'Maya Chen', company: 'Brightpath Studio' },
  { name: 'Andre Williams', company: 'Northwind Goods' },
  { name: 'Leah Morgan', company: 'Cedar Market' },
  { name: 'Omar Haddad', company: 'Summit Advisory' },
  { name: 'Nina Brooks', company: 'Lakeview Clinic' },
  { name: 'Samir Patel', company: 'Ironwood Supply' },
];

const STEPS = [
  {
    title: 'Book a free consultation',
    body: 'Tell us about your business and what you need.',
  },
  {
    title: 'Agree on your plan',
    body: 'Confirm services and pricing, then sign your agreement.',
  },
  {
    title: 'We get to work',
    body: 'Share access and documents. Our team takes it from there and keeps you updated.',
  },
];

const START_FAQS = [
  {
    question: 'Can you help if my books are behind?',
    answer: 'Yes. We review your records and provide a catch-up or cleanup quote.',
  },
  {
    question: 'Can I keep using QuickBooks?',
    answer: 'Yes. We can work with your existing QuickBooks Online account.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Monthly bookkeeping starts at $350 for up to 200 transactions. Other services are quoted based on your needs.',
  },
  {
    question: 'What happens during the free call?',
    answer:
      'We discuss your current accounting, answer your questions, and explain your options and pricing.',
  },
];

function trackConsultation() {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'consultation_click', { page_path: '/get-started' });
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

function GetStarted() {
  usePageMeta('getStarted');

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
            <span className="kicker">Accounting support for small businesses</span>
            <h1 className="display">Focus on your business. We’ll handle the accounting.</h1>
            <p className="lead">
              Get organized books, clear reports, and a team that makes time for your questions.
              Add payroll, tax preparation, and advisory when you need them.
            </p>
            <div className="actions">
              <BookLink />
            </div>
            <p className="start-offer">Free 30-minute call. Bookkeeping from $350/month.</p>
            <VideoSlot
              title="Intro video"
              caption="A short introduction to Go4Profit: who we help, what we handle, and how to book a call."
            />
            <p className="start-where">Chicago-based. Serving nationwide.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="start-reviews">
          <div className="page-inner">
            <h2 id="start-reviews" className="display">
              Hear from our clients.
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

        <section className="section start-book" id="book" aria-labelledby="start-book">
          <div className="page-inner">
            <h2 id="start-book" className="display">
              Let’s make accounting easier.
            </h2>
            <p className="lead">Choose a time for your free 30-minute consultation.</p>
            <CalendlyEmbed title="Choose a consultation time" frameLoading="lazy" />
            <p className="calendly-fallback muted">
              Can’t find a suitable time? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="start-problems">
          <div className="page-inner">
            <h2 id="start-problems" className="display">
              Accounting taking too much of your time?
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

        <section className="section" aria-labelledby="start-faq">
          <div className="page-inner start-faq">
            <h2 id="start-faq" className="display">
              A few questions before we talk?
            </h2>
            <FaqList items={START_FAQS} />
          </div>
        </section>

        <section className="section section-soft process-section" aria-labelledby="start-steps">
          <div className="page-inner">
            <h2 id="start-steps" className="display">
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

export default GetStarted;
