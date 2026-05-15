import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta charSet="UTF-8" />

        {/* Google Analytics 4 + Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3JB3R13ED6" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3JB3R13ED6');
          gtag('config', 'AW-17913841051');
        `}} />

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
        <meta property="og:image" content="https://rasadniktilija.rs/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://rasadniktilija.rs/images/logo.png" />

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

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
