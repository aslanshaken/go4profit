import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../site';
import Button from './Button';

function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      <Link to="/" className="nav-brand" data-wordmark="go4profit" onClick={() => setOpen(false)}>
        Go4Profit
      </Link>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-toggle-icon" />
        <span className="visually-hidden">Menu</span>
      </button>
      <div id="primary-nav" className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <Button to="/book" variant="nav">
          Free consultation
        </Button>
      </div>
    </nav>
  );
}

export default SiteNav;
