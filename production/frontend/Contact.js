import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  // Koristi environment varijablu ili fallback na localhost
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ success: true, message: 'Poruka je uspešno poslata! Hvala na javljanju.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ success: false, message: data.message || 'Došlo je do greške pri slanju poruke.' });
      }
    } catch (err) {
      setStatus({ success: false, message: 'Došlo je do greške pri slanju poruke.' });
    }
  };

  return (
    <div className="contact-page" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', minHeight: '100vh'}}>
      <section className="hero-small">
        <div className="container">
          <h1>Kontaktirajte nas</h1>
          <p style={{fontSize: '1.2rem', color: '#234d20'}}>Tu smo da vam pomognemo i odgovorimo na sva vaša pitanja. Pišite nam ili nas pozovite!</p>
        </div>
      </section>
      <section className="section" style={{background: '#fff', borderRadius: 18, boxShadow: '0 8px 32px rgba(44,62,80,0.08)', maxWidth: 900, margin: '0 auto'}}>
        <div className="container" style={{display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center', alignItems: 'flex-start'}}>
          <div className="contact-info" style={{flex: '1 1 260px', minWidth: 220, textAlign: 'center'}}>
            <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 18}}>Informacije</h2>
            <div className="info-item" style={{marginBottom: 18}}>
              <div style={{fontSize: 32}}>📍</div>
              <div style={{color: '#234d20'}}>Bake Tuje 123<br />11000 Pločica, Srbija</div>
            </div>
            <div className="info-item" style={{marginBottom: 18}}>
              <div style={{fontSize: 32}}>📞</div>
              <div style={{color: '#234d20'}}>+381 63 88 70 837</div>
            </div>
            <div className="info-item" style={{marginBottom: 18}}>
              <div style={{fontSize: 32}}>📧</div>
              <div style={{color: '#234d20'}}>tilijarasadnik5@gmail.com</div>
            </div>
          </div>
          <div className="contact-form" style={{flex: '1 1 340px', minWidth: 280, background: '#f9fbe7', borderRadius: 16, boxShadow: '0 4px 18px rgba(44,62,80,0.10)', padding: 32, margin: '0 auto'}}>
            <h2 style={{color: '#2e7d32', fontWeight: 700, marginBottom: 18}}>Pošaljite nam poruku</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ime i prezime *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{marginBottom: 16, borderRadius: 8, border: '1.5px solid #e0f2f1', padding: '12px 14px', fontSize: '1rem', width: '100%'}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{marginBottom: 16, borderRadius: 8, border: '1.5px solid #e0f2f1', padding: '12px 14px', fontSize: '1rem', width: '100%'}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{marginBottom: 16, borderRadius: 8, border: '1.5px solid #e0f2f1', padding: '12px 14px', fontSize: '1rem', width: '100%'}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Poruka *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{marginBottom: 16, borderRadius: 8, border: '1.5px solid #e0f2f1', padding: '12px 14px', fontSize: '1rem', width: '100%'}}
                ></textarea>
              </div>
              {status && (
                <div style={{marginBottom: 16, color: status.success ? 'green' : 'red', fontWeight: 600}}>
                  {status.message}
                </div>
              )}
              <button type="submit" className="btn-primary" style={{width: '100%', marginTop: 8}}>Pošaljite poruku</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Lokacija</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>🌍 Lokacija</h3>
                <p>Naš rasadnik se nalazi u selu Pločica, blizu Kovina. Lako nas možete pronaći i doći kolima lokalnim putem.</p>
                <div className="map-info">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
