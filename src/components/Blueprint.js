function Blueprint({ className = '', children, as: Tag = 'div', ...props }) {
  return (
    <Tag className={`blueprint ${className}`.trim()} {...props}>
      <i className="corner tl" aria-hidden="true" />
      <i className="corner tr" aria-hidden="true" />
      <i className="corner bl" aria-hidden="true" />
      <i className="corner br" aria-hidden="true" />
      {children}
    </Tag>
  );
}

export default Blueprint;
