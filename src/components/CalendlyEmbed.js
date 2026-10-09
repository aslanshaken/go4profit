import { useEffect, useState } from 'react';
import { CALENDLY_URL } from '../site';

function embedUrl() {
  const params = new URLSearchParams({
    hide_gdpr_banner: '1',
    embed_type: 'Inline',
    embed_domain: window.location.hostname,
    background_color: 'ffffff',
    text_color: '17251f',
    primary_color: '176b45',
  });
  return `${CALENDLY_URL}?${params.toString()}`;
}

function CalendlyEmbed({ title = 'Schedule a free consultation', frameLoading = 'eager' }) {
  const [height, setHeight] = useState(680);

  useEffect(() => {
    function onMessage(event) {
      if (event.origin !== 'https://calendly.com') return;
      const data = event.data;
      if (!data || data.event !== 'calendly.page_height') return;
      const raw = data.payload && data.payload.height;
      const next = typeof raw === 'number' ? raw : Number.parseInt(String(raw), 10);
      if (next > 480) setHeight(next);
    }

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="calendly-wrap">
      <iframe
        className="calendly-frame"
        src={embedUrl()}
        title={title}
        loading={frameLoading}
        style={{ height: `${height}px` }}
      />
      <p className="calendly-fallback muted">
        If the calendar does not load,{' '}
        <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
          open the booking page
        </a>
        .
      </p>
    </div>
  );
}

export default CalendlyEmbed;
