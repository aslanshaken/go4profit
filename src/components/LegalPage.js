import { useEffect } from 'react';
import { LEGAL_UPDATED } from '../site';
import { usePageMeta } from '../seo';
import SiteFooter from './SiteFooter';
import SiteNav from './SiteNav';

function LegalPage({ page, kicker, title, children }) {
  usePageMeta(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className="page-inner legal">
        <span className="kicker">{kicker}</span>
        <h1 className="display">{title}</h1>
        <p className="legal-updated">Last updated {LEGAL_UPDATED}</p>
        <div className="legal-body">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default LegalPage;
