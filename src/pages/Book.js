import { useEffect } from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { CONTACT, HOME_STEPS } from '../site';

function Book() {
  usePageMeta('book');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell className="book-page">
      <PageIntro
        className="book-intro"
        kicker="Free consultation"
        title="Let’s talk about your business."
        lead="Choose a time for a free 30-minute call. We’ll discuss your needs, answer your questions, and explain pricing."
      />
      <div className="page-inner section book-schedule">
        <CalendlyEmbed title="Choose a consultation time" />
        <p className="calendly-fallback muted">
          Can’t find a time? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </div>
      <section className="section section-soft process-section" aria-labelledby="book-process-title">
        <div className="page-inner">
          <h2 id="book-process-title" className="display">
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
    </PageShell>
  );
}

export default Book;
