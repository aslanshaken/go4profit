import { useEffect } from 'react';
import Button from '../components/Button';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import SupportIcon from '../components/SupportIcon';
import { usePageMeta } from '../seo';
import { CONTACT } from '../site';

const TEAM_ROLES = [
  {
    icon: 'ledger',
    title: 'Bookkeeping specialists',
    body: 'Our QuickBooks Certified ProAdvisors keep your books organized and help you understand your numbers.',
  },
  {
    icon: 'tax',
    title: 'Tax professionals',
    body: 'Our team includes a licensed CPA with 17 years of experience in accounting and tax preparation.',
  },
  {
    icon: 'advisory',
    title: 'Business advisors',
    body: 'Our advisors bring experience working at Big Four firms to help you understand cash flow, manage costs, and plan ahead.',
  },
  {
    icon: 'aiassist',
    title: 'Software engineers',
    body: 'Our engineers build AI tools and dashboards that reduce manual work and make your financial information easier to use.',
  },
  {
    icon: 'support',
    title: 'Client support team',
    body: 'We keep you informed, make time for your questions, and follow through on issues - so you’re never left wondering what’s happening.',
  },
];

function mailingLines(address) {
  const splitAt = address.indexOf(', ');
  if (splitAt === -1) return [address];
  return [address.slice(0, splitAt), address.slice(splitAt + 2)];
}

function About() {
  usePageMeta('about');
  const [street, cityLine] = mailingLines(CONTACT.address);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <PageIntro
        className="about-intro"
        title="About us"
        lead="Go4Profit combines an experienced team with AI-powered technology to make accounting simpler for small businesses and startups."
      />
      <div className="page-inner section">
        <section aria-labelledby="team-title">
          <h2 id="team-title" className="display">
            Our team
          </h2>
          <div className="team-roles">
            {TEAM_ROLES.map((role) => (
              <article className="team-role" key={role.title}>
                <SupportIcon name={role.icon} />
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="how-block" aria-label="Mailing address">
          <p className="about-address">
            <strong>Mailing address</strong>
            {street}
            <br />
            {cityLine}
          </p>
          <div className="about-map">
            <iframe
              title={`Map of ${CONTACT.address}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="city-banner" aria-labelledby="about-cta">
          <div className="city-banner-frame">
            <img
              src="/images/chicago-skyline.jpg"
              alt="Downtown Chicago skyline at Cloud Gate"
            />
            <div className="city-banner-card">
              <h2 id="about-cta">Let’s talk about your business.</h2>
              <p>Tell us what you need. We’ll help you find the right support.</p>
              <Button to="/book">
                Book a free consultation
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

export default About;
