import type { APIRoute } from 'astro';

const pages = [
  '',
  '/json-formatter',
  '/base64',
  '/uuid-generator',
  '/url-encode-decode',
  '/timestamp-converter',
  '/hash-generator',
  '/word-counter',
  '/color-picker',
  '/lorem-ipsum',
  '/online-clipboard',
  '/online-ruler',
  '/about',
  '/privacy-policy',
  '/terms',
  '/contact'
];

export const GET: APIRoute = async () => {
  const siteUrl = 'https://sniptools.tools';
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
