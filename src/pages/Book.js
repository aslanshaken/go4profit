import { useEffect } from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { usePageMeta } from '../seo';

function Book() {
  usePageMeta('book');

  useEffect(() => {
    window.scrollTo(0, 0);
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
