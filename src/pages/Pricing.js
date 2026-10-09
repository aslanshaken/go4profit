import { useEffect } from 'react';
import Button from '../components/Button';
import FaqList from '../components/FaqList';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import SupportIcon from '../components/SupportIcon';
import { usePageMeta } from '../seo';
import { FAQS, PRICING_FACTORS, PRICING_OFFERS } from '../site';

function Pricing() {
  usePageMeta('pricing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <PageIntro
        className="pricing-intro"
        kicker="Our pricing"
        title={
          <>
            Clear pricing. <span className="hero-mark">No surprises.</span>
          </>
        }
        lead="See all charges upfront. No hidden fees. No annual contract. Cancel anytime."
      />
      <div className="page-inner section">
        <div className="price-grid">
          {PRICING_OFFERS.map((offer) => (
            <article
              className={`price-card${offer.featured ? ' is-featured' : ''}`}
              key={offer.title}
            >
              <div className="price-card-head">
                <SupportIcon name={offer.icon} />
                <h2>{offer.title}</h2>
              </div>
              <p className="price">
                {offer.price.includes(' · ') ? (
                  <>
                    <span className="price-line">{offer.price.split(' · ')[0]} ·</span>
                    <span className="price-line">{offer.price.split(' · ')[1]}</span>
                  </>
                ) : (
                  offer.price
                )}
              </p>
              <p>{offer.body}</p>
              {offer.note ? <p className="price-note">{offer.note}</p> : null}
            </article>
          ))}
        </div>

        <section className="price-factors" aria-labelledby="factors-title">
          <h2 id="factors-title" className="display">
            How we determine your price
          </h2>
          <ul className="price-factor-grid">
            {PRICING_FACTORS.map((item) => (
              <li key={item}>
                <svg className="price-check" viewBox="0 0 16 16" aria-hidden="true">
                  <circle cx="8" cy="8" r="8" />
                  <path d="M4.6 8.2 6.8 10.4 11.4 5.7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p>
            Complete documents and timely answers help us work efficiently. If missing information
            creates additional work, we discuss any pricing changes with you before proceeding.
          </p>
        </section>

        <section className="faq-block" aria-labelledby="pricing-faq">
          <h2 id="pricing-faq" className="display">
            Frequently asked questions
          </h2>
          <FaqList items={FAQS} />
        </section>
      </div>

      <div className="page-inner section">
        <section className="city-banner" aria-labelledby="pricing-cta">
          <div className="city-banner-frame">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Downtown Chicago skyline at Cloud Gate"
            />
            <div className="city-banner-card">
              <h2 id="pricing-cta">Let’s find the right support.</h2>
              <p>Tell us about your business. We’ll provide a clear quote based on what you need.</p>
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

export default Pricing;
