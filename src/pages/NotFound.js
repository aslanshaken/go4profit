import Button from '../components/Button';
import SiteFooter from '../components/SiteFooter';
import SiteNav from '../components/SiteNav';
import { usePageMeta } from '../seo';

function NotFound() {
  usePageMeta('notFound');
  return (
    <div className="page-wrap">
      <SiteNav />
      <main className="page-inner not-found">
        <span className="kicker">404</span>
        <h1 className="display">This page is not on the route.</h1>
        <p className="muted">
          The link may be old. Head back to the homepage or book a consultation.
        </p>
        <div className="hero-actions" style={{ marginTop: 24 }}>
          <Button to="/">Back home</Button>
          <Button to="/book" variant="secondary">
            Free consultation
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default NotFound;
