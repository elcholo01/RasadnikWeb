/**
 * Generiše Google Merchant Center product feed (RSS 2.0 + g: namespace)
 * iz src/data/productsData.js. Uključuje samo proizvode sa stvarnom cenom
 * (showPrice: true) — Merchant Center ne prihvata "cena na upit" stavke.
 *
 * Pokretanje: node scripts/generate-merchant-feed.js
 * Izlaz: public/google-merchant-feed.xml
 *   → dostupan na https://rasadniktilija.rs/google-merchant-feed.xml
 *
 * Upload feed URL-a: Merchant Center → Products → Feeds → dodaj "Scheduled fetch"
 */

const fs = require('fs');
const path = require('path');

// productsData.js koristi ES module export sintaksu, pa se ne moze
// ucitati preko require() u ovoj CommonJS skripti — izvlacimo literal
// niza direktno iz izvornog teksta i evaluiramo ga.
const dataSrc = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'productsData.js'), 'utf8');
const match = dataSrc.match(/export const products = (\[[\s\S]*?\]);\s*\n\s*export const categories/);
if (!match) {
  throw new Error('Nije moguce pronaci "products" niz u productsData.js — proveri da li je fajl promenio strukturu.');
}
const products = new Function(`return ${match[1]};`)();

const SITE_URL = 'https://rasadniktilija.rs';
const BRAND = 'Rasadnik Tilija';
const GOOGLE_CATEGORY = 'Home & Garden > Plants';

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const eligible = products.filter(p => p.showPrice && p.price > 0);

const items = eligible.map(p => {
  const link = `${SITE_URL}/sadnice/${p.slug}`;
  const imageLink = `${SITE_URL}${p.image}`;
  const description = (p.richContent || p.description || '').trim();
  const availability = p.inStock === false ? 'out_of_stock' : 'in_stock';

  return `  <item>
    <g:id>${escapeXml(p.slug)}</g:id>
    <title>${escapeXml(p.name)}</title>
    <description>${escapeXml(description)}</description>
    <link>${escapeXml(link)}</link>
    <g:image_link>${escapeXml(imageLink)}</g:image_link>
    <g:availability>${availability}</g:availability>
    <g:price>${p.price}.00 RSD</g:price>
    <g:condition>new</g:condition>
    <g:brand>${escapeXml(BRAND)}</g:brand>
    <g:google_product_category>${escapeXml(GOOGLE_CATEGORY)}</g:google_product_category>
    <g:identifier_exists>false</g:identifier_exists>
  </item>`;
}).join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
  <title>${escapeXml(BRAND)} – Sadnice</title>
  <link>${SITE_URL}</link>
  <description>Sadnice za živu ogradu, ukrasno bilje i baštu iz Rasadnika Tilija, Pločica (Kovin).</description>
${items}
</channel>
</rss>
`;

const outPath = path.join(__dirname, '..', 'public', 'google-merchant-feed.xml');
fs.writeFileSync(outPath, feed, 'utf8');

console.log(`✓ Feed generisan: ${eligible.length} proizvoda (od ${products.length} ukupno)`);
console.log(`✓ Fajl: ${outPath}`);
console.log(`✓ Preskočeno (bez prikazane cene): ${products.length - eligible.length}`);
