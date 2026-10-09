import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../site';
import Button from './Button';

function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const root = document.documentElement;
    if (!open) return undefined;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  return (
    <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img className="brand-logo" src="/images/logo-wordmark.png" alt="Go4Profit" />
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
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            end={link.to === '/'}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <Button to="/book" variant="nav">
          Book a free consultation
        </Button>
      </div>
    </nav>
  );
}

export default SiteNav;
