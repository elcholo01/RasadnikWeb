import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta charSet="UTF-8" />

        {/* Google Analytics 4 + Google Ads – loaded via next/script in _app.js */}

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="Icxd6kE9eqJJibXz--vK5njzNX2a_gndQ4xgqzsxec0" />

        {/* Geo Tags */}
        <meta name="geo.region" content="RS-JM" />
        <meta name="geo.placename" content="Pločica" />

        {/* Open Graph defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:site_name" content="Rasadnik Tilija" />

        {/* Schema.org Local Business */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Rasadnik Tilija",
          "description": "Prodaja kvalitetnih sadnica, ukrasnog bilja, četinara, lišćara i žive ograde",
          "url": "https://rasadniktilija.rs",
          "telephone": "+381638870837",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Miloša Crnjanskog 34",
            "addressLocality": "Pločica",
            "postalCode": "26229",
            "addressCountry": "RS"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.7500",
            "longitude": "20.9667"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "07:00",
            "closes": "18:00"
          }
        })}} />

        {/* Google Fonts handled by next/font (self-hosted, no external request) */}

        {/* LCP preload: hero image starts downloading before React loads */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-background.webp"
          imageSizes="100vw"
          imageSrcSet="/images/hero-mobile.webp 640w, /images/hero-background.webp 1280w"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
