import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import FaqList from '../components/FaqList';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import SupportIcon from '../components/SupportIcon';
import { usePageMeta } from '../seo';
import { FAQS, HOME_STEPS, SERVICE_SECTIONS } from '../site';

function Services() {
  const { hash } = useLocation();
  usePageMeta('services');

  useEffect(() => {
    const id = hash.replace('#', '');
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash]);

  return (
    <PageShell>
      <PageIntro
        className="services-intro"
        kicker="Our services"
        title={
          <>
            The accounting support <span className="hero-mark">your business</span> needs.
          </>
        }
        lead="From everyday tasks to bigger decisions, our team helps you stay organized and plan ahead."
      />
      <div className="page-inner section">
        <div className="service-detail-grid">
        {SERVICE_SECTIONS.map((item) => (
          <article
            className={`service-detail${item.groups ? ' has-groups' : ''}`}
            id={item.id}
            key={item.id}
          >
            <div className="service-detail-head">
              <SupportIcon name={item.icon} />
              <div>
                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
              </div>
            </div>
            <p>{item.intro}</p>
            {item.items ? (
              <>
                {item.listLabel ? <p className="list-label">{item.listLabel}</p> : null}
                <ul className="plain-list">
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {item.notes?.map((note) => (
              <p key={note}>{note}</p>
            ))}
            {item.groups ? (
              <div className="service-groups">
                {item.groups.map((group) => (
                  <div className="service-group" id={group.id} key={group.id}>
                    <h4>{group.title}</h4>
                    <p>{group.intro}</p>
                    {group.listLabel ? <p className="list-label">{group.listLabel}</p> : null}
                    <ul className="plain-list">
                      {group.items.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    {group.notes?.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
        </div>
      </div>

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
        <section className="faq-block" aria-labelledby="faq-title">
          <h2 id="faq-title" className="display">
            Frequently asked questions
          </h2>
          <FaqList items={FAQS} />
        </section>
      </div>

      <div className="page-inner section">
        <section className="city-banner" aria-labelledby="services-cta">
          <div className="city-banner-frame">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Downtown Chicago skyline at Cloud Gate"
            />
            <div className="city-banner-card">
              <h2 id="services-cta">Let’s talk about your business.</h2>
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

export default Services;
