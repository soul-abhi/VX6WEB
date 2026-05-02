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
    '/who-uses-vx6/individuals',
    '/who-uses-vx6/organizations',
    '/sponsor',
    '/future',
    '/docs',
    '/code-of-conduct',
    '/contributing',
  ];

  const defaults = {
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  };

  const overrides: Record<
    string,
    { changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }
  > = {
    '': { changeFrequency: 'weekly', priority: 1 },
    '/download': { changeFrequency: 'weekly', priority: 0.9 },
    '/how-to-use': { changeFrequency: 'monthly', priority: 0.9 },
    '/docs': { changeFrequency: 'weekly', priority: 0.85 },
    '/technical': { changeFrequency: 'monthly', priority: 0.85 },
  };

  return routes.map((route) => {
    const settings = overrides[route] ?? defaults;
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: settings.changeFrequency,
      priority: settings.priority,
    };
  });
}
