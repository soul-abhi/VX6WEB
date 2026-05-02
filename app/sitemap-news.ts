import type { MetadataRoute } from 'next';

const baseUrl = 'https://vx6.tech';

export default function sitemapNews(): MetadataRoute.Sitemap {
  const featuredRoutes = [
    '',
    '/download',
    '/how-to-use',
    '/docs',
    '/technical',
    '/future',
  ];

  return featuredRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.85,
  }));
}
