function PageIntro({ kicker, title, lead, children, className }) {
  return (
    <section className={className ? `page-intro ${className}` : 'page-intro'} aria-labelledby="page-title">
      <div className="page-inner">
        {kicker ? <span className="kicker">{kicker}</span> : null}
        <h1 id="page-title" className="display">
          {title}
        </h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export default PageIntro;
