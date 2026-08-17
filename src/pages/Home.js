import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Blueprint from '../components/Blueprint';
import Button from '../components/Button';
import LogoMarquee from '../components/LogoMarquee';
import PlatformHub from '../components/PlatformHub';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { JsonLd, usePageMeta } from '../seo';
import {
  CONTACT,
  FAQS,
  SERVICES,
  STEPS,
  TESTIMONIALS,
  TRUCK_SAMPLES,
} from '../site';

const BOOK_HASHES = new Set(['pre-call', 'call', 'book-calendar', 'book', 'close']);

function scrollToHash() {
  const raw = window.location.hash.replace('#', '');
  if (!raw || BOOK_HASHES.has(raw)) return;
  const el = document.getElementById(raw);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Home() {
  const navigate = useNavigate();
  usePageMeta('home');

  useEffect(() => {
    const raw = window.location.hash.replace('#', '');
    if (BOOK_HASHES.has(raw)) {
      navigate('/book', { replace: true });
      return undefined;
    }
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [navigate]);

  return (
    <div className="page-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <div className="page-inner">
          <Hero />
          <Integrations />
          <Why />
          <Services />
          <Numbers />
          <Platform />
          <Proof />
          <Process />
          <Faq />
        </div>
        <Close />
        <div className="mobile-cta">
          <Button to="/book">Get a free consultation</Button>
        </div>
      </main>
      <SiteFooter />
      <JsonLd />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="tag">Accounting built for fleets</span>
        <h1 id="hero-title" className="display">
          <span>AI-native accounting</span>
          <span className="line-2">for trucking companies</span>
        </h1>
        <p className="hero-lead">
          Know what every truck earns. Know what every mile costs. Know where your cash is going.
        </p>
        <p className="muted" style={{ margin: 0 }}>
          Go4Profit combines <mark className="word-mark">our own trucking finance software with real trucking accountants</mark> to handle your bookkeeping, tax, payroll, IFTA, settlements, and financial reporting — while turning your fleet data into numbers you can actually use.
        </p>
        <div className="hero-actions">
          <Button to="/book">Get a free consultation</Button>
          <Button href="#numbers" variant="secondary">
            See the numbers
          </Button>
        </div>
        <p className="hero-note">
          Owner-operators · Small fleets · Growing fleets · Established fleets
        </p>
      </div>
      <div className="hero-visual">
        <Blueprint className="duotone hero-photo" as="figure">
          <img
            src="/images/hero-fleet.png"
            alt="Trucking fleet Go4Profit accounts for — cost per mile and profit by truck"
            width="1200"
            height="675"
          />
        </Blueprint>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="section" aria-labelledby="why-title">
      <Blueprint className="why-panel">
        <span className="kicker">01 · Accounting built specifically for trucking</span>
        <div className="why-copy">
          <h2 id="why-title" className="display why-title">
            We don&apos;t just do accounting. We understand trucking.
          </h2>
          <p className="muted why-body">
            Most accounting firms work across dozens of industries.{' '}
            <mark className="word-mark">Go4Profit is built around trucking companies.</mark>
          </p>
          <p className="muted why-body">
            We understand fuel, driver pay, settlements, factoring, IFTA, equipment costs, cost per mile, and the financial decisions that come with running a fleet.
          </p>
          <p className="muted why-body">
            That means your books aren&apos;t just accurate —{' '}
            <strong>they&apos;re organized around how your trucking business actually operates.</strong>
          </p>
        </div>
      </Blueprint>
    </section>
  );
}

function Integrations() {
  return (
    <section className="integrations" aria-labelledby="systems-title">
      <p id="systems-title" className="display integrations-title">
        We work with the software your fleet already uses
      </p>
      <LogoMarquee />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <span className="kicker">02 · One finance team for your entire trucking business</span>
      <hr className="rule" />
      <h2 id="services-title" className="visually-hidden">
        Services
      </h2>
      <div className="card-grid-3">
        {SERVICES.map((item) => (
          <Blueprint className="bp-card" key={item.n}>
            <span className="card-n">{item.n}</span>
            <h3>{item.title}</h3>
            <p className="muted">{item.body}</p>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section id="numbers" className="section" aria-labelledby="numbers-title">
      <span className="kicker">03 · Know your numbers</span>
      <hr className="rule" />
      <h2 id="numbers-title" className="display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 16 }}>
        Your company can be profitable while one of your trucks is losing money.
      </h2>
      <p className="muted" style={{ margin: '0 0 44px', maxWidth: '68ch' }}>
        Go4Profit shows you the numbers behind each truck — cost per mile, revenue per mile, driver cost, fuel, maintenance, and profit — so you know where the business is actually making money.
      </p>
      <div className="truck-compare">
        {TRUCK_SAMPLES.map((truck) => (
          <Blueprint className={`truck-card${truck.win ? ' win' : ' loss'}`} key={truck.id}>
            <h3>{truck.id}</h3>
            <dl>
              {truck.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd className={row.label === 'Net profit' ? 'profit' : undefined}>{row.value}</dd>
                </div>
              ))}
            </dl>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="section-tight" aria-labelledby="platform-title">
      <span className="kicker">04 · The Go4Profit platform</span>
      <hr className="rule" />
      <h2 id="platform-title" className="display" style={{ fontSize: 'clamp(30px, 3.6vw, 50px)', marginBottom: 16 }}>
        Your fleet runs on different systems. We bring the numbers together.
      </h2>
      <p className="muted platform-lead">
        Your TMS knows the loads. Your ELD knows the miles. Your fuel cards know the fuel. Your payroll knows driver costs. Your bank knows what actually moved.
      </p>
      <p className="muted platform-lead">
        <mark className="word-mark">Go4Profit brings it together into one financial picture.</mark>
      </p>
      <PlatformHub />
    </section>
  );
}

function Proof() {
  return (
    <section className="section" aria-labelledby="proof-title">
      <span className="kicker">05 · Trusted by trucking businesses</span>
      <hr className="rule" />
      <h2 id="proof-title" className="visually-hidden">
        Client feedback
      </h2>
      <div className="testi-grid" style={{ marginTop: 0 }}>
        {TESTIMONIALS.map((item) => (
          <Blueprint className="testi-card" as="figure" key={item.name}>
            <p className="muted">{item.quote}</p>
            <figcaption
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontSize: 13,
                color: 'var(--color-accent-800)',
              }}
            >
              {item.name}
            </figcaption>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <span className="kicker">06 · Switching accountants shouldn&apos;t be painful</span>
      <hr className="rule" />
      <h2 id="process-title" className="visually-hidden">
        Onboarding
      </h2>
      <div className="card-grid-3">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <span className="step-n">{step.n}</span>
            <h3>{step.title}</h3>
            <p className="muted" style={{ margin: 0, fontSize: 17 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section" style={{ paddingBottom: 88 }} aria-labelledby="faq-title">
      <span className="kicker">07 · Frequently asked</span>
      <hr className="rule" />
      <h2 id="faq-title" className="visually-hidden">
        Frequently asked questions
      </h2>
      <div className="faq">
        {FAQS.map((item) => (
          <details key={item.q}>
            <summary>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
              <span>{item.q}</span>
            </summary>
            <p className="muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <path d="m2 6 10 7 10-7" />
    </svg>
  );
}

function Close() {
  return (
    <section id="book" className="field-band" style={{ padding: '52px 0' }} aria-labelledby="close-title">
      <div className="close-inner">
        <div className="close-copy">
          <h2 id="close-title" className="display">
            Run your fleet. We&apos;ll run the numbers.
          </h2>
          <p className="close-sub">
            Bookkeeping · Tax · IFTA · Payroll · Settlements · Cost per mile · CFO reporting
          </p>
          <p className="close-serve">
            Serving dry van, reefer, flatbed, car hauling, drayage, dedicated, and last-mile fleets.
          </p>
        </div>
        <div className="close-side">
          <Button to="/book" variant="lime">
            Get a free consultation
          </Button>
          <span className="hint">
            Tell us how many trucks you operate and we&apos;ll show you what your finance function could look like.
          </span>
          <div className="contact-lines">
            <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
              <PinIcon />
              {CONTACT.address}
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <MailIcon />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
