import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.accsodepur.in';

  // Primary public routes
  const routes = [
    '',
    '/about',
    '/facilities',
    '/admissions',
    '/athletes',
    '/coaches',
    '/achievements',
    '/contact',
    '/visit',
    '/training/methodology',
    '/learn',
    '/learn/about-acc',
    '/learn/athletics-training',
    '/learn/how-to-join-acc',
    '/learn/acc-facilities',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
