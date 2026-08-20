import type { APIRoute } from 'astro';

const toolPages = [
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
];

const infoPages = [
  '/about',
  '/privacy-policy',
  '/terms',
  '/contact'
];

export const GET: APIRoute = async () => {
  const siteUrl = 'https://sniptoolkit.com';
  const today = new Date().toISOString().split('T')[0];

  const homeEntry = `  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  const toolEntries = toolPages.map(page => `  <url>
    <loc>${siteUrl}${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n');

  const infoEntries = infoPages.map(page => `  <url>
    <loc>${siteUrl}${page}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${homeEntry}
${toolEntries}
${infoEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=0',
      'CDN-Cache-Control': 'no-cache'
    }
  });
};
