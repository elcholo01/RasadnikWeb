/**
 * Google i Bing su ugasili sitemap ping endpoint-ove (Google jan 2024, Bing 2022).
 * Jedine opcije za brzo indeksiranje su:
 *
 * 1. Google Search Console → Sitemaps → unesite URL i kliknite Pošalji
 *    https://search.google.com/search-console/sitemaps
 *
 * 2. Za pojedinačne nove stranice:
 *    Google Search Console → URL Inspection → unesite URL → "Request Indexing"
 *
 * 3. Automatski (bez ručnog rada): Google otkriva promene u sitemap.xml
 *    sam, kroz robots.txt koji već pokazuje na sitemap. Obično 1-7 dana.
 */

const https = require('https');
const readline = require('readline');

const SITEMAP_URL = 'https://rasadniktilija.rs/sitemap.xml';
const GSC_SITEMAPS = `https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Arasadniktilija.rs`;

console.log('\n=== Indeksiranje stranica ===\n');
console.log('Google i Bing ping endpointi su ugašeni 2024.');
console.log('Sitemap je dostupna na:\n  ' + SITEMAP_URL);
console.log('\nZa brzo indeksiranje, otvori Google Search Console:');
console.log('  ' + GSC_SITEMAPS);
console.log('\nIli za pojedinačnu stranicu:');
console.log('  https://search.google.com/search-console/inspect');
console.log('\nGoogle automatski prati sitemap.xml koji je naveden u robots.txt.');
console.log('Nove stranice se obično indeksiraju za 1-7 dana bez ručnog rada.\n');

// Proveri da li je sitemap dostupna
https.get(SITEMAP_URL, (res) => {
  if (res.statusCode === 200) {
    console.log('✓ Sitemap je dostupna i ima HTTP 200');
  } else {
    console.log(`✗ Sitemap vraca HTTP ${res.statusCode} — proveri deploy`);
  }
}).on('error', (err) => {
  console.log(`✗ Sitemap nije dostupna: ${err.message}`);
});
