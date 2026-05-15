import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    const handler = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <>
      <Head>
        <title>Rasadnik Tilija – Kupite sadnice za živu ogradu i dvorište</title>
        <meta name="description" content="Kupite kvalitetne sadnice iz Rasadnika Tilija – tuja, lovor višnja, katalpa, fotinija, perene i 40+ vrsta. Dostava i sadnja širom Srbije. Povoljne cene, stručni savet." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/" />
        <meta property="og:title" content="Rasadnik Tilija – Kupite sadnice za živu ogradu i dvorište" />
        <meta property="og:description" content="Kupite kvalitetne sadnice iz Rasadnika Tilija – tuja, lovor višnja, katalpa, fotinija, perene i 40+ vrsta. Dostava i sadnja širom Srbije." />
        <meta property="og:url" content="https://rasadniktilija.rs/" />
      </Head>
      <div className="home">
        {/* Hero */}
        <section className="hero" style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: isDesktop ? '350px' : '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            src="/images/hero-background.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            quality={80}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: isDesktop ? 18 : 12, padding: isDesktop ? '48px 0 56px 0' : '24px 16px 28px 16px' }}>
            <Image src="/images/logo.png" alt="Logo Rasadnik Tilija" width={isDesktop ? 120 : 75} height={isDesktop ? 120 : 75} style={{ margin: '0 auto 10px auto', display: 'block', filter: 'drop-shadow(0 2px 8px rgba(44,62,80,0.18))' }} />
            <h1 style={{ fontSize: isDesktop ? '3.2rem' : '1.8rem', fontWeight: 700, letterSpacing: 1, marginBottom: isDesktop ? 18 : 10, textShadow: '0 2px 12px rgba(0,0,0,0.18)' }}>{t('home.title')}</h1>
            <p style={{ fontWeight: 500, fontSize: isDesktop ? '1.3rem' : '1rem', marginBottom: isDesktop ? 32 : 16, opacity: 0.95, maxWidth: 600 }}>{t('home.subtitle')}</p>
            <Link href="/products" style={{
              marginTop: isDesktop ? 12 : 4, padding: isDesktop ? '18px 48px' : '12px 28px', fontSize: isDesktop ? '1.35rem' : '1.05rem', fontWeight: 700,
              borderRadius: 30, boxShadow: '0 6px 24px rgba(44,62,80,0.18)', background: '#2e7d32',
              color: '#fff', letterSpacing: 1, border: 'none', display: 'inline-block', textDecoration: 'none'
            }}>
              {t('home.viewProducts')}
            </Link>
          </div>
        </section>

        {/* Zašto izabrati nas */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #e0f2f1 0%, #f9fbe7 100%)', marginTop: 0 }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 48 }}>
            <div style={{ textAlign: 'center', flex: '1 1 220px', minWidth: 180 }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🏆</div>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 8, fontSize: '1.25rem' }}>{t('home.provenQuality')}</h2>
              <p style={{ color: '#234d20' }}>{t('home.provenQualityDesc')}</p>
            </div>
            <div style={{ textAlign: 'center', flex: '1 1 220px', minWidth: 180 }}>
              <div style={{ fontSize: 44, marginBottom: 12 }}>🚚</div>
              <h2 style={{ color: '#2e7d32', fontWeight: 700, marginBottom: 8, fontSize: '1.25rem' }}>{t('home.fastDelivery')}</h2>
              <p style={{ color: '#234d20' }}>{t('home.fastDeliveryDesc')}</p>
            </div>
          </div>
        </section>

        {/* Popularni proizvodi */}
        <section className="section bg-light" style={{ overflow: 'hidden' }}>
          <div className="container">
            <h2 className="section-title" style={{ fontSize: isDesktop ? '2.5rem' : '1.6rem', marginBottom: isDesktop ? 48 : 24 }}>{t('home.popularProducts')}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, maxWidth: 1400, margin: '0 auto' }}>

              {/* Tuja - featured */}
              <Link href="/sadnice/tuja-smaragd"
                onMouseEnter={() => setHoveredCard('tuja')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  gridColumn: isDesktop ? 'span 2' : 'span 1',
                  position: 'relative', borderRadius: 24, overflow: 'hidden',
                  boxShadow: hoveredCard === 'tuja' ? '0 20px 60px rgba(46,125,50,0.3)' : '0 8px 32px rgba(44,62,80,0.12)',
                  transform: hoveredCard === 'tuja' ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)', textDecoration: 'none', cursor: 'pointer',
                  height: isDesktop ? '450px' : '380px', background: '#fff'
                }}>
                <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  <Image src="/images/tujavelika.jpeg" alt="Tuja Smaragd – sadnica za živu ogradu" fill
                    style={{ objectFit: 'cover', transform: hoveredCard === 'tuja' ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' }}
                    sizes="(max-width: 768px) 100vw, 66vw" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: 'linear-gradient(to top, rgba(46,125,50,0.95) 0%, rgba(46,125,50,0.7) 40%, transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32, color: 'white' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.9, marginBottom: 8 }}>Najpopularnije</span>
                    <h3 style={{ fontSize: isDesktop ? '2.2rem' : '1.8rem', fontWeight: 800, marginBottom: 12 }}>{t('home.tuja')}</h3>
                    <p style={{ fontSize: '1.05rem', opacity: 0.95, lineHeight: 1.6, marginBottom: 16 }}>{t('home.tujaDesc')}</p>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '1rem', fontWeight: 600 }}>
                      <span>Pogledaj detalje</span><span>→</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Katalpa */}
              <Link href="/sadnice/katalpa"
                onMouseEnter={() => setHoveredCard('katalpa')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: hoveredCard === 'katalpa' ? '0 16px 48px rgba(46,125,50,0.25)' : '0 8px 32px rgba(44,62,80,0.12)', transform: hoveredCard === 'katalpa' ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)', textDecoration: 'none', cursor: 'pointer', height: '380px', background: '#fff' }}>
                <div style={{ position: 'relative', width: '100%', height: '70%', overflow: 'hidden' }}>
                  <Image src="/images/katalpa.jpg" alt="Katalpa sadnica – ukrasno drvo" fill style={{ objectFit: 'cover', transform: hoveredCard === 'katalpa' ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.6s' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32' }}>Na stanju</div>
                </div>
                <div style={{ padding: 24, height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: 8 }}>{t('home.katalpa')}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#234d20', opacity: 0.85, lineHeight: 1.5 }}>{t('home.katalpaDesc')}</p>
                </div>
              </Link>

              {/* Lovor višnja */}
              <Link href="/sadnice/lovor-visnja"
                onMouseEnter={() => setHoveredCard('lovor')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: hoveredCard === 'lovor' ? '0 16px 48px rgba(46,125,50,0.25)' : '0 8px 32px rgba(44,62,80,0.12)', transform: hoveredCard === 'lovor' ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.4s', textDecoration: 'none', cursor: 'pointer', height: '380px', background: '#fff' }}>
                <div style={{ position: 'relative', width: '100%', height: '70%', overflow: 'hidden' }}>
                  <Image src="/images/lovorvisnja.jpeg" alt="Lovor višnja sadnica za živu ogradu" fill style={{ objectFit: 'cover', transform: hoveredCard === 'lovor' ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.6s' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32' }}>Na stanju</div>
                </div>
                <div style={{ padding: 24, height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: 8 }}>{t('home.lovor')}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#234d20', opacity: 0.85, lineHeight: 1.5 }}>{t('home.lovorDesc')}</p>
                </div>
              </Link>

              {/* Fotinija */}
              <Link href="/sadnice/fotinija-red-robin"
                onMouseEnter={() => setHoveredCard('fotinija')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: hoveredCard === 'fotinija' ? '0 16px 48px rgba(46,125,50,0.25)' : '0 8px 32px rgba(44,62,80,0.12)', transform: hoveredCard === 'fotinija' ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.4s', textDecoration: 'none', cursor: 'pointer', height: '380px', background: '#fff' }}>
                <div style={{ position: 'relative', width: '100%', height: '70%', overflow: 'hidden' }}>
                  <Image src="/images/fotinijanaslovna.jpeg" alt="Fotinija Red Robin sadnica" fill style={{ objectFit: 'cover', transform: hoveredCard === 'fotinija' ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.6s' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32' }}>Na stanju</div>
                </div>
                <div style={{ padding: 24, height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: 8 }}>{t('home.fotinija')}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#234d20', opacity: 0.85, lineHeight: 1.5 }}>{t('home.fotinijaDesc')}</p>
                </div>
              </Link>

              {/* Bambus */}
              <Link href="/sadnice/bambus"
                onMouseEnter={() => setHoveredCard('bambus')}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: hoveredCard === 'bambus' ? '0 16px 48px rgba(46,125,50,0.25)' : '0 8px 32px rgba(44,62,80,0.12)', transform: hoveredCard === 'bambus' ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.4s', textDecoration: 'none', cursor: 'pointer', height: '380px', background: '#fff' }}>
                <div style={{ position: 'relative', width: '100%', height: '70%', overflow: 'hidden' }}>
                  <Image src="/images/bambus.jpeg" alt="Bambus sadnica za baštu" fill style={{ objectFit: 'cover', transform: hoveredCard === 'bambus' ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.6s' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32' }}>Na stanju</div>
                </div>
                <div style={{ padding: 24, height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2e7d32', marginBottom: 8 }}>{t('home.bambus')}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#234d20', opacity: 0.85, lineHeight: 1.5 }}>{t('home.bambusDesc')}</p>
                </div>
              </Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Link href="/products" style={{ display: 'inline-block', padding: '16px 48px', background: 'linear-gradient(135deg, #2e7d32 0%, #60ad5e 100%)', color: 'white', borderRadius: 999, fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 24px rgba(46,125,50,0.25)' }}>
                Pogledaj sve proizvode
              </Link>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <h2>{t('home.ctaTitle')}</h2>
            <p>{t('home.ctaSubtitle')}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
