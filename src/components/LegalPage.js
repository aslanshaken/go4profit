import { useEffect } from 'react';
import { LEGAL_UPDATED } from '../site';
import { usePageMeta } from '../seo';
import PageShell from './PageShell';

function LegalPage({ page, kicker, title, children }) {
  usePageMeta(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <div className="page-inner legal">
        <span className="kicker">{kicker}</span>
        <h1 className="display">{title}</h1>
        <p className="legal-updated">Last updated {LEGAL_UPDATED}</p>
        <div className="legal-body">{children}</div>
      </div>
    </PageShell>
  );
}

export default LegalPage;
