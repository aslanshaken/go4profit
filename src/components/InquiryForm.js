import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CONTACT, INQUIRY_SERVICES } from '../site';

function InquiryForm() {
  const [params] = useSearchParams();
  const preset = params.get('service') || '';
  const [sent, setSent] = useState(false);

  const defaults = useMemo(
    () => ({
      name: '',
      email: '',
      business: '',
      service: INQUIRY_SERVICES.some((item) => item.value === preset) ? preset : '',
      message: '',
    }),
    [preset]
  );

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const business = String(data.get('business') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();
    const serviceLabel = INQUIRY_SERVICES.find((item) => item.value === service)?.label || service;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business}`,
      `Service needed: ${serviceLabel}`,
      '',
      'How can we help?',
      message,
    ].join('\n');
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Go4Profit inquiry${serviceLabel ? ` — ${serviceLabel}` : ''}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required defaultValue={defaults.name} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required defaultValue={defaults.email} />
      </label>
      <label>
        Business name
        <input name="business" type="text" autoComplete="organization" defaultValue={defaults.business} />
      </label>
      <label>
        Service needed
        <select name="service" defaultValue={defaults.service}>
          {INQUIRY_SERVICES.map((item) => (
            <option key={item.value || 'none'} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label>
        How can we help?
        <textarea name="message" required defaultValue={defaults.message} />
      </label>
      <button className="btn btn-primary" type="submit">
        Send inquiry
      </button>
      {sent ? (
        <p className="form-note">
          Your email app should open with a message to {CONTACT.email}. If it does not, write us
          directly.
        </p>
      ) : (
        <p className="form-note">Inquiries go to {CONTACT.email}.</p>
      )}
    </form>
  );
}

export default InquiryForm;
