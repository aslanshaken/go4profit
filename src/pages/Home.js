import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { PortalPreview } from '../components/PreviewMocks';
import QuoteCarousel from '../components/QuoteCarousel';
import SupportIcon from '../components/SupportIcon';
import { JsonLd, usePageMeta } from '../seo';
import {
  CLIENT_NAMES,
  HOME_CLOSE_BENEFITS,
  HOME_EXPERIENCE,
  HOME_POINTS,
  HOME_SERVICES,
  HOME_STEPS,
  TESTIMONIALS,
} from '../site';

function Home() {
  usePageMeta('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <JsonLd />
      <div className="page-inner">
        <section className="hero" aria-labelledby="hero-title">
          <span className="kicker">AI-native accounting firm</span>
          <h1 id="hero-title" className="display">
            <span className="hero-line">Focus on growing your business.</span>
            <span className="hero-line">
              We’ll handle <span className="hero-mark">accounting</span>.
            </span>
          </h1>
          <p className="lead">
            Bookkeeping, payroll, tax preparation, and advisory for small businesses—combining
            professional expertise with AI to deliver better outcomes, faster.
          </p>
          <div className="hero-actions">
            <Button to="/book">Book a free consultation</Button>
            <Button to="/services" variant="secondary">
              Explore our services
            </Button>
          </div>
          <ul className="hero-points">
            {HOME_POINTS.map((item) => (
              <li key={item.label}>
                <SupportIcon name={item.icon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="client-strip" aria-label="Businesses that trust us">
        <p className="client-strip-label">Businesses that trust us</p>
        <div className="client-row">
          <div className="client-track">
            {CLIENT_NAMES.map((name) => (
              <span className="client-pill" key={name}>
                {name}
              </span>
            ))}
            <div className="client-track-copy" aria-hidden="true">
              {CLIENT_NAMES.map((name) => (
                <span className="client-pill" key={`${name}-copy`}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="support-title">
        <div className="page-inner">
          <h2 id="support-title" className="display">
            Our services
          </h2>
          <p className="lead">
            Everything you need to keep your finances organized and your business moving forward.
          </p>
          <div className="home-service-grid">
            {HOME_SERVICES.map((item) => (
              <article className="home-service-card" key={item.slug}>
                <div className="home-service-head">
                  <SupportIcon name={item.icon} />
                  <h3>{item.title}</h3>
                </div>
                <ul>
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="cleanup-link">
            <Link to="/services#cleanup">
              Behind on your books? We also offer catch-up & cleanup.
            </Link>
          </p>
        </div>
      </section>

      <section className="section experience-section" aria-labelledby="experience-title">
        <div className="page-inner">
          <div className="experience-intro">
            <h2 id="experience-title" className="display">
              Our Platform
            </h2>
            <p className="lead experience-line">{HOME_EXPERIENCE.portalTitle}</p>
            <p className="lead">{HOME_EXPERIENCE.lead}</p>
            <p className="experience-body">{HOME_EXPERIENCE.body}</p>
            <p className="experience-portal">{HOME_EXPERIENCE.portal}</p>
          </div>
          <PortalPreview />
        </div>
      </section>

      <section className="section benefits-section" aria-labelledby="close-title">
        <div className="page-inner">
          <h2 id="close-title" className="display">
            More than accountants. Your long-term, tech-forward partner.
          </h2>
          <ul className="simple-list">
            {HOME_CLOSE_BENEFITS.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section quote-section" aria-labelledby="proof-title">
        <div className="page-inner">
          <h2 id="proof-title" className="display">
            What our clients say
          </h2>
        </div>
        <QuoteCarousel items={TESTIMONIALS} />
      </section>

      <section className="section section-soft process-section" aria-labelledby="process-title">
        <div className="page-inner">
          <h2 id="process-title" className="display">
            Getting started is simple.
          </h2>
          <ol className="process-steps">
            {HOME_STEPS.map((item, index) => (
              <li key={item.title}>
                <span className="process-num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="page-inner section">
        <section className="city-banner" aria-labelledby="closing-title">
          <div className="city-banner-frame">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Downtown Chicago skyline at Cloud Gate"
            />
            <div className="city-banner-card">
              <h2 id="closing-title">Let’s talk about your business.</h2>
              <p>Tell us what you need. We’ll help you find the right support.</p>
              <Button to="/book">
                Book a free consultation
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

export default Home;
