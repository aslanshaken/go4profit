import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';

function NotFound() {
  usePageMeta('notFound');

  return (
    <PageShell>
      <div className="page-inner not-found">
        <span className="kicker">404</span>
        <h1 className="display">This page is not here.</h1>
        <p className="muted">
          The link may be old. Head back to the homepage or book a consultation.
        </p>
        <div className="hero-actions" style={{ marginTop: 24 }}>
          <Button to="/">Back home</Button>
          <Button to="/book" variant="secondary">
            Book a free consultation
          </Button>
        </div>
      </div>
    </PageShell>
  );
}

export default NotFound;
