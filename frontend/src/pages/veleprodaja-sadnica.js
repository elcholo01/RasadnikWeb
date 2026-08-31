import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const RECAPTCHA_SITE_KEY = '6LcMH1IsAAAAANqBw0Qdqcg8zJ2Wq3HAZABNx-cd';

const TARGET_GROUPS = [
  {
    icon: '🌳',
    title: 'Garden centri i rasadnici',
    text: 'Dopunska nabavka sadnica za dalju prodaju, po dogovorenoj količinskoj ceni i redovnoj dinamici isporuke.'
  },
  {
    icon: '📐',
    title: 'Pejzažni arhitekti i hortikulturne firme',
    text: 'Sadnice po projektnoj specifikaciji, u dogovorenim količinama i terminima koji prate fazu izvođenja radova.'
  },
  {
    icon: '🏨',
    title: 'Hoteli i turistički kompleksi',
    text: 'Ozelenjavanje i uređenje okoline objekta, uz mogućnost sadnje na terenu i dogovor oko sezonske dopune zelenila.'
  },
  {
    icon: '🏗️',
    title: 'Investitori i građevinske firme',
    text: 'Ozelenjavanje novih stambenih i poslovnih kompleksa, sa isporukom i sadnjom usklađenom sa dinamikom gradnje.'
  }
];

const PROCESS_STEPS = [
  { step: '1', title: 'Kontakt i specifikacija', text: 'Javite nam vrste, količine i okvirni rok — putem forme ispod, telefona ili WhatsApp-a.' },
  { step: '2', title: 'Ponuda i dogovor', text: 'Dobijate ponudu sa cenom prilagođenom količini i uslovima isporuke.' },
  { step: '3', title: 'Isporuka i sadnja', text: 'Dostava širom Srbije, uz mogućnost profesionalne sadnje na terenu za veće projekte.' }
];

const COOPERATION_TYPES = [
  'Garden centar / rasadnik',
  'Pejzažni arhitekta / hortikulturna firma',
  'Hotel / turistički kompleks',
  'Investitor / građevinska firma',
  'Ostalo'
];

const VeleprodajaSadnica = () => {
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', cooperationType: COOPERATION_TYPES[0], message: '' });
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
      const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'b2b_contact' });
      const composedMessage = `[B2B upit]\nNaziv firme: ${formData.company}\nTip saradnje: ${formData.cooperationType}\n\n${formData.message}`;
      const response = await fetch('https://rasadnikweb.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: composedMessage,
          recaptchaToken
        })
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ success: true, message: 'Upit je uspešno poslat! Javićemo vam se u najkraćem roku.' });
        setFormData({ company: '', name: '', email: '', phone: '', cooperationType: COOPERATION_TYPES[0], message: '' });
      } else {
        setStatus({ success: false, message: data.message || 'Došlo je do greške. Pokušajte ponovo.' });
      }
    } catch (err) {
      setStatus({ success: false, message: 'Došlo je do greške. Pokušajte ponovo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = { borderRadius: 10, border: '2px solid #c8e6c9', padding: '14px 16px', fontSize: '1rem', width: '100%', background: '#fff', outline: 'none', boxSizing: 'border-box' };
  const waHref = `https://wa.me/381638870837?text=${encodeURIComponent('Zdravo, predstavljam firmu koja bi želela saradnju sa Rasadnikom Tilija za nabavku sadnica u većim količinama. Možete li mi poslati više informacija?')}`;

  return (
    <>
      <Head>
        <title>Veleprodaja sadnica – B2B saradnja za firme | Rasadnik Tilija</title>
        <meta name="description" content="Veleprodaja sadnica za garden centre, pejzažne arhitekte, hotele i investitore. Nabavka u većim količinama, dostava širom Srbije i sadnja na terenu. Zatražite ponudu." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/veleprodaja-sadnica" />
        <meta property="og:title" content="Veleprodaja sadnica – B2B saradnja za firme | Rasadnik Tilija" />
        <meta property="og:description" content="Veleprodaja sadnica za garden centre, pejzažne arhitekte, hotele i investitore. Nabavka u većim količinama, dostava širom Srbije i sadnja na terenu." />
        <meta property="og:url" content="https://rasadniktilija.rs/veleprodaja-sadnica" />
        <meta property="og:image" content="https://rasadniktilija.rs/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://rasadniktilija.rs/images/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://rasadniktilija.rs' },
            { '@type': 'ListItem', position: 2, name: 'Veleprodaja sadnica', item: 'https://rasadniktilija.rs/veleprodaja-sadnica' }
          ]
        }) }} />
      </Head>

      <div className="veleprodaja-page" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh', paddingBottom: 48 }}>

        <section className="section" style={{ background: 'linear-gradient(135deg, #f9fbe7 0%, #e0f2f1 100%)', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 900, margin: '32px auto', padding: 32 }}>
          <h1 style={{ color: '#2e7d32', fontWeight: 700, textAlign: 'center', marginBottom: 12, fontSize: '1.9rem' }}>Veleprodaja sadnica – saradnja za firme</h1>
          <p style={{ fontSize: '1.1rem', color: '#234d20', textAlign: 'center', marginBottom: 0, lineHeight: 1.6 }}>
            Nabavka sadnica u većim količinama za garden centre, pejzažne arhitekte, hotele i investitore — uz dostavu širom Srbije i mogućnost sadnje na terenu.
          </p>
        </section>

        <section className="section" style={{ maxWidth: 1100, margin: '0 auto 32px auto', padding: '0 20px' }}>
          <h2 style={{ color: '#2e7d32', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>Za koga je ova saradnja</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {TARGET_GROUPS.map((g, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 8px 24px rgba(44,62,80,0.08)', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{g.icon}</div>
                <h3 style={{ color: '#2e7d32', fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{g.title}</h3>
                <p style={{ color: '#444', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{g.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1100, margin: '0 auto 32px auto', padding: '32px' }}>
          <h2 style={{ color: '#2e7d32', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: 20 }}>Zašto saradnja sa Rasadnikom Tilija</h2>
          <ul style={{ maxWidth: 640, margin: '0 auto', color: '#333', fontSize: '1rem', lineHeight: 2, paddingLeft: 20 }}>
            <li><strong>Cena prilagođena količini</strong> — dogovor po projektu, ne po pojedinačnoj sadnici</li>
            <li><strong>Dostava širom Srbije</strong> — organizovan transport za veće porudžbine</li>
            <li><strong>Sadnja na terenu</strong> — po dogovoru, za projekte gde je to potrebno</li>
            <li><strong>Rezervacija unapred</strong> — planiranje količina za sezonske radove</li>
            <li><strong>Fleksibilni uslovi</strong> — rok isporuke i način plaćanja po dogovoru</li>
          </ul>
        </section>

        <section className="section" style={{ maxWidth: 1100, margin: '0 auto 32px auto', padding: '0 20px' }}>
          <h2 style={{ color: '#2e7d32', fontSize: '1.3rem', fontWeight: 700, textAlign: 'center', marginBottom: 24 }}>Kako izgleda proces saradnje</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 8px 24px rgba(44,62,80,0.08)', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#2e7d32', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', margin: '0 auto 14px' }}>{s.step}</div>
                <h3 style={{ color: '#2e7d32', fontSize: '1.02rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#444', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 1100, margin: '0 auto', padding: '40px 32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', alignItems: 'flex-start' }}>

            <div style={{ flex: '1 1 260px', minWidth: 240, textAlign: 'center' }}>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 24, fontSize: '1.5rem' }}>Brz kontakt</h2>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, #25d366 0%, #1da851 100%)', color: '#fff', padding: '14px 26px', borderRadius: 30, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', marginBottom: 28, boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
              >
                <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d="M16.003 0C7.17 0 .008 7.162.008 16a15.93 15.93 0 002.22 8.14L.003 32l8.12-2.12A16 16 0 1016.003 0zm0 29.333a13.28 13.28 0 01-6.787-1.867l-.48-.293-5.013 1.307 1.333-4.867-.32-.493A13.28 13.28 0 012.67 16c0-7.333 5.987-13.333 13.333-13.333S29.336 8.667 29.336 16s-5.987 13.333-13.333 13.333zm7.307-9.96c-.4-.2-2.36-1.16-2.727-1.293-.36-.133-.627-.2-.893.2-.267.4-1.027 1.293-1.267 1.56-.24.267-.48.3-.88.1-.4-.2-1.68-.613-3.2-1.96-1.18-1.053-1.98-2.347-2.213-2.747-.24-.4-.027-.613.173-.813.173-.173.4-.453.6-.693.2-.24.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.893-2.16-1.227-2.96-.32-.76-.64-.667-.893-.68L10.5 8.72c-.267 0-.7.1-1.067.5-.36.4-1.387 1.36-1.387 3.307 0 1.96 1.42 3.853 1.62 4.12.2.267 2.8 4.28 6.787 6.013.947.413 1.687.653 2.267.84.953.3 1.82.253 2.507.153.76-.113 2.347-.96 2.68-1.887.333-.92.333-1.72.233-1.887-.1-.16-.36-.253-.76-.453z" />
                </svg>
                Pišite nam na WhatsApp
              </a>
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 32, marginBottom: 6 }}>📞</div>
                <a href="tel:+381638870837" style={{ color: '#234d20', fontSize: '1.02rem', textDecoration: 'none' }}>+381 63 88 70 837</a>
              </div>
              <div>
                <div style={{ fontSize: 32, marginBottom: 6 }}>📧</div>
                <a href="mailto:tilijarasadnik5@gmail.com" style={{ color: '#234d20', fontSize: '1.02rem', textDecoration: 'none' }}>tilijarasadnik5@gmail.com</a>
              </div>
            </div>

            <div style={{ flex: '1 1 440px', minWidth: 300, background: 'linear-gradient(135deg, #f9fbe7 0%, #f1f8e9 100%)', borderRadius: 16, boxShadow: '0 8px 24px rgba(46,125,50,0.12)', padding: '36px 32px', border: '2px solid rgba(46,125,50,0.15)' }}>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 24, fontSize: '1.4rem', textAlign: 'center' }}>Zatražite B2B ponudu</h2>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Naziv firme *</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="cooperationType" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Tip saradnje *</label>
                  <select id="cooperationType" name="cooperationType" value={formData.cooperationType} onChange={handleChange} required style={inputStyle}>
                    {COOPERATION_TYPES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Ime i prezime *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Telefon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: 8, color: '#2e7d32', fontWeight: 600 }}>Opis potreba (vrste, količine, rok) *</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
                </div>
                {status && (
                  <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 8, background: status.success ? '#e8f5e9' : '#ffebee', color: status.success ? '#2e7d32' : '#c62828', fontWeight: 600, textAlign: 'center' }}>
                    {status.message}
                  </div>
                )}
                <button type="submit" disabled={isSubmitting} style={{ width: '100%', marginTop: 4, padding: '16px', fontSize: '1.05rem', fontWeight: 700, borderRadius: 10, background: isSubmitting ? '#9e9e9e' : 'linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)', border: 'none', color: '#fff', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                  {isSubmitting ? 'Slanje...' : 'Pošaljite upit'}
                </button>
              </form>
            </div>
          </div>
        </section>

        <p style={{ textAlign: 'center', marginTop: 28, color: '#5b6a56', fontSize: '0.9rem' }}>
          Kupujete pojedinačne sadnice za svoje dvorište? <Link href="/products" style={{ color: '#2e7d32', fontWeight: 600 }}>Pogledajte kompletnu ponudu</Link>
        </p>
      </div>
    </>
  );
};

export default VeleprodajaSadnica;
