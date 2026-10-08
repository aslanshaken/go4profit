import { useEffect } from 'react';
import Button from '../components/Button';
import CalendlyEmbed from '../components/CalendlyEmbed';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { FOUNDER_VIDEO_SCRIPT, LANDING_DELIVERABLES, LANDING_STEPS, TESTIMONIALS } from '../site';

function Bookkeeping() {
  usePageMeta('bookkeeping');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quote = TESTIMONIALS[0];

  return (
    <PageShell>
      <div className="page-inner section landing-page">
        <span className="kicker">Bookkeeping for small businesses</span>
        <h1 className="display landing-title">
          We handle your bookkeeping. You get your time back.
        </h1>
        <p className="lead">
          Monthly bookkeeping and financial reports, supported by our team and AI-powered
          technology.
        </p>
        <div className="actions" style={{ marginTop: 24 }}>
          <Button to="/book">Book a free consultation</Button>
        </div>

        <figure className="video-placeholder">
          <img src="/images/ainur.jpg" alt="Ainur Zhunussova, founder of Go4Profit" />
          <figcaption>
            <strong>A message from Ainur</strong>
            <p>{FOUNDER_VIDEO_SCRIPT}</p>
          </figcaption>
        </figure>

        <h2 className="display">Know where your business stands.</h2>
        <p className="lead">
          We categorize transactions, reconcile your accounts, and prepare a profit and loss
          statement and balance sheet. Our team follows up on questions so your books reflect your
          business.
        </p>
        <ul className="plain-list">
          {LANDING_DELIVERABLES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <section className="how-block" aria-labelledby="cleanup-title">
          <h2 id="cleanup-title" className="display">
            Behind on your books?
          </h2>
          <p>
            We can review your backlog and provide a catch-up or cleanup quote before monthly
            bookkeeping begins.
          </p>
        </section>

        <ol className="step-row">
          {LANDING_STEPS.map((item, index) => (
            <li key={item}>
              <span className="how-step">0{index + 1}</span>
              <h3>{item}</h3>
            </li>
          ))}
        </ol>

        <figure className="quote-card landing-quote">
          <blockquote>{quote.quote}</blockquote>
          <figcaption>
            <strong>{quote.name}</strong>
          </figcaption>
        </figure>

        <h2 className="display">Let’s get your books organized.</h2>
        <p className="lead">Tell us about your business and the support you need.</p>
        <div className="actions" style={{ marginTop: 16, marginBottom: 32 }}>
          <Button to="/book">Book a free consultation</Button>
        </div>
        <CalendlyEmbed title="Book a free consultation" />
      </div>
    </PageShell>
  );
}

export default Bookkeeping;
