import { INTEGRATIONS } from '../site';

function LogoMarquee() {
  const loop = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <div className="marquee-wrap" aria-label="Systems Go4Profit works with">
      <div className="marquee" data-mq>
        {loop.map((item, index) => (
          <span className="mq-item" key={`${item.name}-${index}`}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default LogoMarquee;
