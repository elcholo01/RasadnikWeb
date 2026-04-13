import { useEffect } from 'react';
import '../i18n';

// Global CSS — Next.js zahteva da svi CSS importi budu u _app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../index.css';
import '../pages/Home.css';
import '../pages/Products.css';
import '../pages/ProductDetails.css';
import '../pages/About.css';
import '../pages/Contact.css';
import '../pages/Gallery.css';
import '../components/Navbar.css';
import '../components/Footer.css';
import '../components/ImageLightbox.css';
import '../components/LanguageSwitcher.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://rasadnikweb.onrender.com';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const keepAlive = () => fetch(`${BACKEND_URL}/health`).catch(() => {});
    keepAlive();
    const interval = setInterval(keepAlive, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
