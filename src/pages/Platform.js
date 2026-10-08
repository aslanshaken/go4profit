import { useEffect } from 'react';
import Button from '../components/Button';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import { HeroWorkspace } from '../components/PreviewMocks';
import { usePageMeta } from '../seo';
import { PLATFORM_FEATURES } from '../site';

function Platform() {
  usePageMeta('platform');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <PageIntro
        className="platform-intro"
        kicker="Our platform"
        title={
          <>
            All your companies. All your accounting. <span className="hero-mark">One place</span>.
          </>
        }
        lead="View financials, share documents, track deadlines, and connect with your team—all in one simple portal."
      >
        <div className="actions">
          <Button to="/book">Book a free consultation</Button>
        </div>
      </PageIntro>
      <div className="page-inner section">
        <div className="platform-preview">
          <HeroWorkspace />
        </div>

        <h2 className="display platform-features-title">
          Everything you need to stay informed.
        </h2>
        <div className="why-grid" style={{ marginTop: 24 }}>
          {PLATFORM_FEATURES.map((item) => (
            <article className="support-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="platform-note">
          Need more than standard reports? We can build custom dashboards and metrics around your
          industry, goals, and available data—from project profitability to cash flow and budget
          tracking.
        </p>

        <section className="city-banner" aria-labelledby="platform-cta">
          <div className="city-banner-frame">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Downtown Chicago skyline at Cloud Gate"
            />
            <div className="city-banner-card">
              <h2 id="platform-cta">Book a free consultation.</h2>
              <p>Let’s talk about your business and how we can help.</p>
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

export default Platform;
