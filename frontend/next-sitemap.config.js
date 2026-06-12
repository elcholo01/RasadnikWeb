/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rasadniktilija.rs',
  generateRobotsTxt: false,
  outDir: './public',
  exclude: ['/api/*'],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/products' || path === '/gallery') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/blog') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.9;
      changefreq = 'yearly';
    } else if (path === '/sadnice/tuja-smaragd' || path === '/sadnice/lovor-visnja' || path === '/sadnice/lejlandi') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/sadnice/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString().split('T')[0],
    };
  },
};
