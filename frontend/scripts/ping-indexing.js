const https = require('https');

const SITEMAP_URL = 'https://rasadniktilija.rs/sitemap.xml';

const engines = [
  { name: 'Google', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Bing',   url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
];

engines.forEach(({ name, url }) => {
  https.get(url, (res) => {
    console.log(`[ping] ${name} → HTTP ${res.statusCode} — sitemap prihvacena`);
  }).on('error', (err) => {
    console.error(`[ping] ${name} → greska: ${err.message}`);
  });
});
