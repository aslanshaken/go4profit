import SiteFooter from './SiteFooter';
import SiteNav from './SiteNav';

function PageShell({ children, className = '' }) {
  return (
    <div className="page-wrap">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className={className}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default PageShell;
