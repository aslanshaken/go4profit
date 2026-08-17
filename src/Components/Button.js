import { Link } from 'react-router-dom';

function Button({ href, to, variant = 'primary', className = '', children, ...props }) {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={cls} {...props}>
      {children}
    </a>
  );
}

export default Button;
