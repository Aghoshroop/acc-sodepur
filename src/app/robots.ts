import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/portal/', '/login/'],
    },
    sitemap: 'https://www.accsodepur.in/sitemap.xml',
  };
}
