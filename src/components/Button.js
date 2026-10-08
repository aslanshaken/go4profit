import { Link } from 'react-router-dom';

function Button({ href, to, variant = 'primary', className = '', children, onClick, ...props }) {
  const cls = `btn btn-${variant} ${className}`.trim();

  const handleClick = (event) => {
    if (to === '/book' && typeof window.gtag === 'function') {
      window.gtag('event', 'consultation_click', {
        page_path: window.location.pathname,
      });
    }
    onClick?.(event);
  };

  if (to) {
    return (
      <Link to={to} className={cls} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }

  const external = typeof href === 'string' && /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;
