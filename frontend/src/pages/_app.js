import { useEffect } from 'react';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import '../i18n';
import '../App.css';
import '../index.css';
import '../pages/Home.css';
import '../pages/Products.css';
import '../pages/ProductDetails.css';
import '../pages/About.css';
import '../pages/Contact.css';
import '../pages/Gallery.css';
import '../pages/Blog.css';
import '../components/Navbar.css';
import '../components/Footer.css';
import '../components/ImageLightbox.css';
import '../components/LanguageSwitcher.css';
import '../components/AIDizajnModal.css';
import '../components/FloatingLeaves.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], display: 'swap' });

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://rasadnikweb.onrender.com';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const keepAlive = () => fetch(`${BACKEND_URL}/health`).catch(() => {});
    keepAlive();
    const interval = setInterval(keepAlive, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3JB3R13ED6"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3JB3R13ED6');
        gtag('config', 'AW-17913841051');
      `}</Script>
      <div className={`App ${poppins.className}`}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
