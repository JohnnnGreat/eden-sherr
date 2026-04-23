import { siteConfig } from '@/config/site';

export default function sitemap() {
  const lastModified = new Date();

  return siteConfig.primaryRoutes.map((route, index) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified,
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }));
}
