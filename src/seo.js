import { useEffect } from 'react';
import { CONTACT, KEYWORDS, SEO, SITE_URL } from './site';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageMeta(page) {
  const meta = SEO[page] || SEO.home;
  const url = `${SITE_URL}${meta.path}`;
  const image = `${SITE_URL}/images/hero-fleet.png`;

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'keywords', KEYWORDS);
    upsertMeta('name', 'robots', meta.robots || 'index, follow');
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', image);
    upsertLink('canonical', url);
  }, [meta.description, meta.path, meta.robots, meta.title, url, image]);
}

export function JsonLd() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      name: 'Go4Profit',
      url: SITE_URL,
      email: CONTACT.email,
      image: `${SITE_URL}/images/hero-fleet.png`,
      description: SEO.home.description,
      areaServed: 'US',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1655 S Blue Island Ave #559',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60608',
        addressCountry: 'US',
      },
      knowsAbout: [
        'Trucking accounting',
        'Cost per mile',
        'Profit by truck',
        'Driver settlements',
        'Trucking payroll',
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
