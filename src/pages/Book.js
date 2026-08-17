import { useEffect } from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { CALENDLY_URL } from '../site';

function Book() {
  useEffect(() => {
    document.title = 'Book a free consultation — Go4Profit';
    window.scrollTo(0, 0);
    return () => {
      document.title = 'Go4Profit — AI-native accounting for trucking';
    };
  }, []);

  return (
    <div className="page-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="book-page">
        <div className="page-inner book-layout">
          <div className="book-intro">
            <span className="tag">30-minute intro</span>
            <h1 className="display">Pick a time. 30 minutes. No prep required.</h1>
            <p className="muted book-lead">
              We&apos;ll cover fleet size, current software, whether the books are current or behind, and what you want from accounting — IFTA, settlements, payroll, taxes, or cost per mile.
            </p>
            <div className="book-contact">
              <a className="btn btn-secondary book-open-link" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Open calendar in a new tab
              </a>
            </div>
          </div>
          <div className="book-calendar">
            <CalendlyEmbed />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default Book;
