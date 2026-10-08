function initials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function attribution(item) {
  if (item.company && item.company !== item.name) {
    return `${item.name} · ${item.company}`;
  }
  return item.name;
}

function QuoteIcon() {
  return (
    <span className="quote-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.2 18c-1.7 0-3.1-.5-4.1-1.6C2 15.2 1.5 13.7 1.5 11.8c0-2.4.8-4.5 2.3-6.3C5.3 3.7 7.3 2.6 9.8 2.2l.7 2.4c-1.7.4-3 1.1-3.8 2.1-.8 1-1.2 2-1.2 3.1 0 .5.1.9.2 1.2.5-.3 1.1-.5 1.8-.5 1.2 0 2.2.4 2.9 1.2.7.8 1.1 1.8 1.1 3 0 1.3-.4 2.3-1.3 3.1-.9.8-2 .1-3-.1Zm11.3 0c-1.7 0-3.1-.5-4.1-1.6-1.1-1.2-1.6-2.7-1.6-4.6 0-2.4.8-4.5 2.3-6.3 1.5-1.8 3.5-2.9 6-3.3l.7 2.4c-1.7.4-3 1.1-3.8 2.1-.8 1-1.2 2-1.2 3.1 0 .5.1.9.2 1.2.5-.3 1.1-.5 1.8-.5 1.2 0 2.2.4 2.9 1.2.7.8 1.1 1.8 1.1 3 0 1.3-.4 2.3-1.3 3.1-.8.8-1.9 1.2-3 .1Z" />
      </svg>
    </span>
  );
}

function QuoteCard({ item }) {
  return (
    <figure className="quote-card">
      <QuoteIcon />
      <blockquote>{item.quote}</blockquote>
      <figcaption>
        <span className="quote-avatar">{initials(item.name)}</span>
        <strong>{attribution(item)}</strong>
      </figcaption>
    </figure>
  );
}

function QuoteRow({ items, reverse = false }) {
  if (!items.length) return null;

  return (
    <div className={`quote-row${reverse ? ' is-reverse' : ''}`}>
      <div className="quote-track">
        {items.map((item) => (
          <QuoteCard key={item.name} item={item} />
        ))}
        <div className="quote-track-copy" aria-hidden="true">
          {items.map((item) => (
            <QuoteCard key={`${item.name}-copy`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function QuoteCarousel({ items }) {
  const top = items.filter((_, index) => index % 2 === 0);
  const bottom = items.filter((_, index) => index % 2 === 1);

  return (
    <>
      <ul className="visually-hidden">
        {items.map((item) => (
          <li key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <p>{attribution(item)}</p>
          </li>
        ))}
      </ul>
      <div className="quote-stack" aria-hidden="true">
        {items.map((item) => (
          <QuoteCard key={item.name} item={item} />
        ))}
      </div>
      <div className="quote-carousel" aria-hidden="true">
        <QuoteRow items={top} />
        <QuoteRow items={bottom} reverse />
      </div>
    </>
  );
}

export default QuoteCarousel;
