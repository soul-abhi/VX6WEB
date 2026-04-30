import type { MetadataRoute } from 'next';

const baseUrl = 'https://vx6.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/description',
    '/download',
    '/how-to-use',
    '/technical',
    '/decentralization',
    '/who-uses-vx6',
    '/sponsor',
    '/future',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
