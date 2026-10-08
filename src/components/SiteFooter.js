import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, FOOTER_COMPANY, FOOTER_SERVICES } from '../site';

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

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">Go4Profit</span>
            <span className="brand-tag">AI-native accounting firm</span>
          </Link>
          <div className="footer-contact">
            <a className="footer-email" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
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
