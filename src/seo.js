import { useEffect } from 'react';
import { CONTACT, SEO, SITE_URL } from './site';

const SHARE_IMAGE = `${SITE_URL}/images/logo.jpg`;

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function usePageMeta(page) {
  const meta = SEO[page] || SEO.home;
  const indexable = !meta.robots || !meta.robots.includes('noindex');
  const url = indexable ? `${SITE_URL}${meta.path === '/' ? '/' : meta.path}` : '';

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('name', 'description', meta.description);
    upsertMeta('name', 'keywords', '');
    upsertMeta('name', 'robots', meta.robots || 'index, follow');
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', indexable ? SHARE_IMAGE : '');
    upsertMeta('property', 'og:image:alt', indexable ? 'Go4Profit logo' : '');
    upsertMeta('name', 'twitter:card', indexable ? 'summary_large_image' : '');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', indexable ? SHARE_IMAGE : '');
    upsertLink('canonical', url);

    const crumb =
      indexable && meta.path !== '/'
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_URL}/`,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: meta.crumb,
                item: url,
              },
            ],
          }
        : null;
    upsertJsonLd('breadcrumb-ld', crumb);
  }, [indexable, meta.crumb, meta.description, meta.path, meta.robots, meta.title, url]);
}

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Go4Profit',
    legalName: 'Go4Profit LLC',
    url: SITE_URL,
    logo: SHARE_IMAGE,
    email: CONTACT.email,
    description:
      'Go4Profit provides bookkeeping, payroll, tax preparation, and advisory for small businesses. The Chicago address is a mailing address. Services are provided remotely across the United States.',
    areaServed: 'US',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1655 S Blue Island Ave #559',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60608',
      addressCountry: 'US',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
