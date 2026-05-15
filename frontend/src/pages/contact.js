import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const RECAPTCHA_SITE_KEY = '6LcMH1IsAAAAANqBw0Qdqcg8zJ2Wq3HAZABNx-cd';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.querySelectorAll('script[src*="recaptcha"]').forEach(s => s.remove());
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) badge.remove();
    };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    try {
      const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      const response = await fetch('https://rasadnikweb.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ success: true, message: t('contact.success') });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ success: false, message: data.message || t('contact.error') });
      }
    } catch (err) {
      setStatus({ success: false, message: t('contact.error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = { borderRadius: 10, border: '2px solid #c8e6c9', padding: '14px 16px', fontSize: '1rem', width: '100%', background: '#fff', outline: 'none', boxSizing: 'border-box' };

  return (
    <>
      <Head>
        <title>Kontakt – Rasadnik Tilija | Naručite sadnice</title>
        <meta name="description" content="Kontaktirajte Rasadnik Tilija za narudžbinu sadnica i upit o cenama. Telefon: 063 88 70 837. Adresa: Pločica. Dostava sadnica širom Srbije." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/contact" />
      </Head>
      <div className="contact-page" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh' }}>
        <section className="hero-small">
          <div className="container">
            <h1>{t('contact.title')}</h1>
            <p style={{ fontSize: '1.2rem', color: '#234d20' }}>{t('contact.subtitle')}</p>
          </div>
        </section>

        <section className="section" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1100, margin: '0 auto 48px auto', padding: '48px 32px' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 260px', minWidth: 220, textAlign: 'center' }}>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 32, fontSize: '1.8rem' }}>{t('contact.information')}</h2>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>📍</div>
                <a href="https://maps.app.goo.gl/9jQQNMUU1meWtXk58" target="_blank" rel="noopener noreferrer" style={{ color: '#2e7d32', fontSize: '1.05rem', fontWeight: 600, textDecoration: 'underline', textDecorationColor: 'rgba(46,125,50,0.4)' }}>Lokacija</a>
              </div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>📞</div>
                <a href="tel:+381638870837" style={{ color: '#234d20', fontSize: '1.05rem', textDecoration: 'none' }}>+381 63 88 70 837</a>
              </div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>📧</div>
                <a href="mailto:tilijarasadnik5@gmail.com" style={{ color: '#234d20', fontSize: '1.05rem', textDecoration: 'none' }}>tilijarasadnik5@gmail.com</a>
              </div>
              <div style={{ marginBottom: 8 }}>
                <a
                  href="https://www.instagram.com/prodaja__sadnica?igsh=MWV1aHB6bzAxMWljdw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#fff', padding: '10px 20px', borderRadius: 30, fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @prodaja__sadnica
                </a>
              </div>
            </div>

            <div style={{ flex: '1 1 440px', minWidth: 300, background: 'linear-gradient(135deg, #f9fbe7 0%, #f1f8e9 100%)', borderRadius: 16, boxShadow: '0 8px 24px rgba(46,125,50,0.12)', padding: '40px 36px', border: '2px solid rgba(46,125,50,0.15)' }}>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 28, fontSize: '1.8rem', textAlign: 'center' }}>{t('contact.sendMessage')}</h2>
              <form onSubmit={handleSubmit}>
                {[{ id: 'name', type: 'text', label: t('contact.name'), required: true },
                  { id: 'email', type: 'email', label: t('contact.email'), required: true },
                  { id: 'phone', type: 'tel', label: t('contact.phone'), required: false }
                ].map(field => (
                  <div key={field.id} style={{ marginBottom: 20 }}>
                    <label htmlFor={field.id} style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>{field.label}{field.required ? ' *' : ''}</label>
                    <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} required={field.required} style={inputStyle} />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>{t('contact.message')} *</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
                {status && (
                  <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 8, background: status.success ? '#e8f5e9' : '#ffebee', color: status.success ? '#2e7d32' : '#c62828', fontWeight: 600, textAlign: 'center' }}>
                    {status.message}
                  </div>
                )}
                <button type="submit" disabled={isSubmitting} style={{ width: '100%', marginTop: 12, padding: '16px', fontSize: '1.1rem', fontWeight: 700, borderRadius: 10, background: isSubmitting ? '#9e9e9e' : 'linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)', border: 'none', color: '#fff', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {isSubmitting ? 'Slanje...' : t('contact.send')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
