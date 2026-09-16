import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-copy">© {new Date().getFullYear()} Go4Profit LLC. All rights reserved.</p>
      <nav className="footer-legal" aria-label="Legal">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default SiteFooter;
