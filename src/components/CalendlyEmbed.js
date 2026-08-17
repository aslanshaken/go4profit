import { useEffect, useRef } from 'react';
import { CALENDLY_URL } from '../site';

function loadCalendlyScript() {
  return new Promise((resolve) => {
    if (window.Calendly) {
      resolve(window.Calendly);
      return;
    }

    const existing = document.querySelector('script[data-calendly]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Calendly), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.setAttribute('data-calendly', 'true');
    script.onload = () => resolve(window.Calendly);
    script.onerror = () => resolve(null);
    document.body.appendChild(script);
  });
}

function CalendlyEmbed({ title = 'Schedule a free consultation' }) {
  const hostRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadCalendlyScript().then((calendly) => {
      if (cancelled || !calendly || !hostRef.current) return;
      calendly.initInlineWidgets();
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <div
        ref={hostRef}
        className="calendly-inline-widget calendly-frame"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1`}
        role="region"
        aria-label={title}
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
