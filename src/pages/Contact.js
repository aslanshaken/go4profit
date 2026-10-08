import { useEffect, useState } from 'react';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { CONTACT } from '../site';

function Contact() {
  usePageMeta('contact');
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const business = String(data.get('business') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Business name: ${business || '—'}`,
      '',
      message,
    ].join('\n');
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      'Go4Profit inquiry'
    )}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  }

  return (
    <PageShell>
      <div className="page-inner section">
        <div className="contact-grid">
          <div>
            <h1 className="display">How can we help?</h1>
            <p className="lead">
              Have a question about our services? Send us a message or book a free consultation.
            </p>
            <div className="contact-details">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <p>{CONTACT.locationLine}</p>
              <p className="note">
                {CONTACT.addressLabel}: {CONTACT.address}
              </p>
            </div>
            <h2 className="display" style={{ marginTop: 36 }}>
              Ready to discuss your books?
            </h2>
            <div className="actions" style={{ marginTop: 16 }}>
              <Button to="/book">Book a free consultation</Button>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Business name (optional)
              <input name="business" type="text" autoComplete="organization" />
            </label>
            <label>
              Message
              <textarea name="message" required />
            </label>
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
            {status === 'sent' ? (
              <p className="form-note">Thank you. Your message has been sent.</p>
            ) : null}
            {status === 'error' ? (
              <p className="form-note">
                Your message could not be sent. Please try again or email {CONTACT.email}.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </PageShell>
  );
}

export default Contact;
