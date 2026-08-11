import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
import '../i18n';
import '../App.css';
import '../index.css';
import '../pages/Home.css';
import '../pages/Products.css';
import '../pages/ProductDetails.css';
import '../pages/CategoryPage.css';
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
import WhatsAppButton from '../components/WhatsAppButton';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], display: 'swap' });

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://rasadnikweb.onrender.com';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleStart = () => setFading(true);
    const handleDone = () => setFading(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router.events]);

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
        <main className={fading ? 'page-exit' : 'page-enter'}>
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}
