import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, FOOTER_COMPANY, FOOTER_SERVICES, SOCIAL } from '../site';

function measureWordInk(value, fontSize, tracking) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `800 ${fontSize}px "Plus Jakarta Sans"`;
  ctx.letterSpacing = `${tracking}px`;
  const pad = 40;
  const width = Math.ceil(ctx.measureText(value).width) + pad * 2;
  const height = Math.ceil(fontSize * 1.6);
  canvas.width = width;
  canvas.height = height;
  ctx.font = `800 ${fontSize}px "Plus Jakarta Sans"`;
  ctx.letterSpacing = `${tracking}px`;
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(value, pad, fontSize);
  const { data } = ctx.getImageData(0, 0, width, height);
  let minX = width;
  let maxX = 0;
  let minY = height;
  let maxY = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (data[(y * width + x) * 4 + 3] > 12) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX <= minX) return null;
  return {
    x: minX - pad,
    y: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

function FooterWordmark() {
  const [viewBox, setViewBox] = useState('0 0 1000 200');
  const [ratio, setRatio] = useState('5 / 1');

  useEffect(() => {
    let cancelled = false;
    const fit = () => {
      const box = measureWordInk('Go4Profit', 200, -14);
      if (!box || cancelled) return;
      setViewBox(`${box.x} ${box.y} ${box.width} ${box.height}`);
      setRatio(`${box.width} / ${box.height}`);
    };
    document.fonts.ready.then(fit);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <svg
      className="footer-wordmark"
      viewBox={viewBox}
      preserveAspectRatio="none"
      style={{ aspectRatio: ratio }}
      aria-hidden="true"
    >
      <text
        x="0"
        y="200"
        fill="currentColor"
        fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
        fontWeight="800"
        fontSize="200"
        letterSpacing="-14"
      >
        Go4Profit
      </text>
    </svg>
  );
}

function SocialIcon({ id }) {
  if (id === 'maps') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <clipPath id="maps-pin">
            <path d="M12 21.4s6.4-5.5 6.4-10.2a6.4 6.4 0 1 0-12.8 0c0 4.7 6.4 10.2 6.4 10.2z" />
          </clipPath>
        </defs>
        <g clipPath="url(#maps-pin)">
          <rect x="5" y="2" width="7" height="9.2" fill="#EA4335" />
          <rect x="12" y="2" width="7" height="9.2" fill="#FBBC05" />
          <rect x="5" y="11.2" width="7" height="11" fill="#34A853" />
          <rect x="12" y="11.2" width="7" height="11" fill="#4285F4" />
          <circle cx="12" cy="10.4" r="2.35" fill="#fff" />
        </g>
      </svg>
    );
  }
  if (id === 'yelp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g fill="#D32323">
          <rect x="10.15" y="1.5" width="3.7" height="8.4" rx="1.85" />
          <rect x="10.15" y="1.5" width="3.7" height="8.4" rx="1.85" transform="rotate(72 12 12)" />
          <rect x="10.15" y="1.5" width="3.7" height="8.4" rx="1.85" transform="rotate(144 12 12)" />
          <rect x="10.15" y="1.5" width="3.7" height="8.4" rx="1.85" transform="rotate(216 12 12)" />
          <rect x="10.15" y="1.5" width="3.7" height="8.4" rx="1.85" transform="rotate(288 12 12)" />
        </g>
      </svg>
    );
  }
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#1877F2"
          d="M14.2 8.4V6.7c0-.8.5-1.2 1.3-1.2h1.5V3h-2.4C11.5 3 10.2 4.6 10.2 6.6v1.8H8.2V11h2v10h3.6V11h2.4l.5-2.6h-2.9z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M5.7 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2zM4 9.1h3.4V21H4V9.1zm6.1 0h3.3v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V21h-3.4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-3.4V9.1z"
      />
    </svg>
  );
}

function SocialProfiles() {
  return (
    <div className="footer-social">
      {SOCIAL.map((item) => {
        const icon = <SocialIcon id={item.id} />;
        if (!item.href) {
          return (
            <span key={item.id} className="footer-social-link" role="img" aria-label={item.label} title={item.label}>
              {icon}
            </span>
          );
        }
        return (
          <a
            key={item.id}
            className="footer-social-link"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">Go4Profit</span>
            <span className="brand-tag">AI-Native Accounting Firm</span>
          </Link>
          <div className="footer-contact">
            <a className="footer-email" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <SocialProfiles />
          </div>
        </div>
        <nav className="footer-col" aria-label="Services">
          <p className="footer-heading">Services</p>
          {FOOTER_SERVICES.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-col" aria-label="Company">
          <p className="footer-heading">Company</p>
          {FOOTER_COMPANY.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/courses">Bookkeeping courses</Link>
        </nav>
      </div>
      <FooterWordmark />
      <div className="footer-legal">
        <div className="footer-legal-row">
          <p className="footer-copy">© 2026 Go4Profit LLC. All rights reserved.</p>
          <p className="footer-legal-address">{CONTACT.address}, USA</p>
        </div>
        <p className="footer-disclaimer">
          Go4Profit provides bookkeeping and business support services. Website content is for
          general information only and is not individualized tax, legal, or investment advice.
          Services are provided under a signed engagement agreement. Use of this website is
          governed by our <Link to="/privacy">Privacy Policy</Link> and{' '}
          <Link to="/terms">Terms of Service</Link>.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
