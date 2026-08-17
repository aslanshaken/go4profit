import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Blueprint from '../components/Blueprint';
import Button from '../components/Button';
import LogoMarquee from '../components/LogoMarquee';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { JsonLd, usePageMeta } from '../seo';
import {
  AUDIENCES,
  CONTACT,
  DASHBOARD,
  FAQS,
  METRICS,
  PLATFORM,
  SAMPLE_TRUCKS,
  SERVICES,
  STEPS,
  TESTIMONIALS,
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
          <Why />
          <Services />
          <Numbers />
        </div>
        <CfoBand />
        <div className="page-inner">
          <Platform />
          <Audiences />
          <Integrations />
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
          Go4Profit combines <strong>our own trucking finance software with real trucking accountants</strong> to handle your bookkeeping, tax, payroll, IFTA, settlements, and financial reporting — while turning your fleet data into numbers you can actually use.
        </p>
        <div className="hero-actions">
          <Button to="/book">Get a free consultation</Button>
          <Button href="#numbers" variant="secondary">
            See the numbers
          </Button>
        </div>
        <p className="hero-note">
          Built for owner-operators, growing fleets, and established trucking companies
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
        <Blueprint className="sample" as="figure">
          <div className="sample-kpis">
            <div>
              <span className="kpi-label">Cost / mile</span>
              <span className="kpi-value">$1.86</span>
            </div>
            <div>
              <span className="kpi-label">Revenue / mile</span>
              <span className="kpi-value">$2.41</span>
            </div>
            <div>
              <span className="kpi-label">Gross margin</span>
              <span className="kpi-value accent">21%</span>
            </div>
          </div>
          <div className="bars">
            <span className="kpi-label" style={{ minHeight: 0 }}>
              Net profit by truck, last week
            </span>
            <div className="bar-grid">
              {SAMPLE_TRUCKS.map((truck) => (
                <FragmentRow key={truck.id} truck={truck} />
              ))}
            </div>
          </div>
        </Blueprint>
      </div>
    </section>
  );
}

function FragmentRow({ truck }) {
  return (
    <>
      <span>{truck.id}</span>
      <span
        className={`bar${truck.loss ? ' loss' : ''}`}
        style={{ '--w': truck.width }}
        aria-hidden="true"
      />
      <span className={truck.loss ? 'muted-2' : undefined}>{truck.amount}</span>
    </>
  );
}

function Why() {
  return (
    <section className="section" aria-labelledby="why-title">
      <Blueprint className="why-panel">
        <span className="kicker">01 · Why traditional accounting falls short</span>
        <div className="why-copy">
          <h2 id="why-title" className="display why-title">
            Traditional accounting wasn&apos;t built for trucking
          </h2>
          <p className="muted why-body">
            Trucking runs on more than revenue and expenses. Every load, mile, gallon of fuel, driver settlement, factoring fee, repair, and truck payment affects your bottom line differently.{' '}
            <mark className="word-mark">Go4Profit</mark> understands how fleets actually operate — connecting the numbers behind your trucks, drivers, and loads so you can see what you&apos;re really making, not just what shows up on a standard P&amp;L.
          </p>
        </div>
      </Blueprint>
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
      <span className="kicker">03 · Numbers built for trucking</span>
      <hr className="rule" />
      <h2 id="numbers-title" className="display" style={{ fontSize: 'clamp(32px, 4vw, 56px)', marginBottom: 16 }}>
        Your P&amp;L is only the beginning
      </h2>
      <p className="muted" style={{ margin: '0 0 44px' }}>
        Go4Profit turns your accounting data into trucking operating metrics — the numbers that tell you which trucks, lanes, and drivers are carrying the business.
      </p>
      <div className="metric-row">
        {METRICS.map((item) => (
          <Blueprint className="metric-chip" key={item.title}>
            <h3>{item.title}</h3>
          </Blueprint>
        ))}
      </div>
      <span
        style={{
          display: 'block',
          marginBottom: 20,
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
        }}
      >
        See the business behind the trucks
      </span>
      <Blueprint className="dash">
        <header className="dash-head">
          <span>Go4Profit — fleet financial dashboard</span>
          <span>Period: month-end</span>
          <span>Sheet 01</span>
        </header>
        <div className="dash-grid">
          {DASHBOARD.map((cell) => (
            <div className="dash-cell" key={cell.label}>
              <span className="label">{cell.label}</span>
              <span className={`value${cell.accent ? ' accent' : ''}`}>{cell.value}</span>
            </div>
          ))}
          <div className="dash-cell" style={{ justifyContent: 'center' }}>
            <span className="muted" style={{ fontSize: 15.5 }}>
              One place to understand the financial health of your fleet.
            </span>
          </div>
        </div>
        <p className="dash-note">
          Sample figures shown for layout. Your dashboard is populated from your own accounting, payroll, fuel, and settlement data.
        </p>
      </Blueprint>
    </section>
  );
}

function CfoBand() {
  return (
    <section className="field-band" aria-labelledby="cfo-title">
      <div className="page-inner split-2" style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="kicker">04 · Your trucking CFO</span>
          <h2 id="cfo-title" className="display" style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}>
            Don&apos;t just close the books. Use them.
          </h2>
          <p className="muted" style={{ margin: 0, fontSize: 17 }}>
            Cash forecasting, fleet budgeting, equipment decisions, financing analysis, tax strategy, and growth planning.
          </p>
        </div>
        <div className="field-list">
          <span>Should you buy another truck?</span>
          <span>Is factoring still worth it?</span>
          <span>How much cash should you keep?</span>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section className="section-tight" aria-labelledby="platform-title">
      <span className="kicker">05 · The Go4Profit platform</span>
      <hr className="rule" />
      <h2 id="platform-title" className="display" style={{ fontSize: 'clamp(30px, 3.6vw, 50px)', marginBottom: 16 }}>
        Built for accounting. Built around your fleet.
      </h2>
      <p className="muted" style={{ margin: '0 0 44px' }}>
        You shouldn&apos;t have to replace the systems that already run your business. Go4Profit works across the financial and operational data your fleet already produces — accounting, TMS, ELD, fuel cards, payroll, factoring, banks, and settlements.
      </p>
      <div className="card-grid-3">
        {PLATFORM.map((item) => (
          <Blueprint className="bp-card" key={item.title} style={{ padding: 26 }}>
            <h3>{item.title}</h3>
            <p className="muted">{item.body}</p>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="section" aria-labelledby="audience-title">
      <span className="kicker">06 · Built for trucking companies</span>
      <hr className="rule" />
      <div className="split-2" style={{ alignItems: 'center', marginBottom: 48 }}>
        <Blueprint className="duotone" as="figure">
          <img
            src="/images/truck-detail.png"
            alt="Tractor unit used in Go4Profit fleet accounting and cost-per-mile reporting"
            width="1200"
            height="750"
            style={{ aspectRatio: '16 / 10', objectFit: 'cover' }}
          />
        </Blueprint>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p
            id="audience-title"
            className="display"
            style={{ fontSize: 'clamp(24px, 2.6vw, 34px)', lineHeight: 1.1 }}
          >
            Every unit on your yard gets its own set of numbers.
          </p>
          <p className="muted" style={{ margin: 0, fontSize: 17, maxWidth: '46ch' }}>
            Whether you run one truck or fifty, the reporting is built the same way — revenue, cost per mile, driver pay, fuel, and maintenance tracked per unit, so the newest truck&apos;s payment is measured against what it actually earns.{' '}
            <mark className="word-mark">Serving dry van, reefer, flatbed, car hauling, drayage, dedicated, and last-mile fleets.</mark>
          </p>
        </div>
      </div>
      <div className="card-grid-4">
        {AUDIENCES.map((item) => (
          <Blueprint className="bp-card" key={item.title} style={{ padding: 20 }}>
            <h3 style={{ fontSize: 20 }}>{item.title}</h3>
            <p className="muted" style={{ fontSize: 15.5 }}>
              {item.body}
            </p>
          </Blueprint>
        ))}
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="section" aria-labelledby="systems-title">
      <span className="kicker">07 · Your systems. One financial picture.</span>
      <hr className="rule" />
      <p
        id="systems-title"
        style={{
          margin: '0 0 32px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 22,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
        }}
      >
        Your fleet already produces the data. Go4Profit brings it together.
      </p>
      <LogoMarquee />
      <p className="muted" style={{ margin: '24px 0 0', fontSize: 17 }}>
        Don&apos;t see yours? We can also work with exports, statements, spreadsheets, and other platforms your fleet already uses.
      </p>
    </section>
  );
}

function Proof() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1);

  return (
    <section className="section" aria-labelledby="proof-title">
      <span className="kicker">08 · Trusted by trucking businesses</span>
      <hr className="rule" />
      <h2 id="proof-title" className="visually-hidden">
        Client feedback
      </h2>
      <Blueprint className="quote-card" as="figure">
        <blockquote>{featured.quote}</blockquote>
        <figcaption>{featured.name}</figcaption>
      </Blueprint>
      <div className="testi-grid">
        {rest.map((item) => (
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
      <span className="kicker">09 · Switching accountants shouldn&apos;t be painful</span>
      <hr className="rule" />
      <h2 id="process-title" className="visually-hidden">
        Onboarding
      </h2>
      <div className="card-grid-4">
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
      <span className="kicker">10 · Frequently asked</span>
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
