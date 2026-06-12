import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '../../data/blogData';

export default function Blog() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Blog – Rasadnik Tilija',
    url: 'https://rasadniktilija.rs/blog',
    itemListElement: blogPosts.map((post, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://rasadniktilija.rs/blog/${post.slug}`,
      name: post.title,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://rasadniktilija.rs' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rasadniktilija.rs/blog' },
    ],
  };

  return (
    <>
      <Head>
        <title>Blog – Rasadnik Tilija | Saveti o sadnicama i biljkama</title>
        <meta name="description" content="Stručni saveti o sadnicama, živim ogradama i ukrasnom bilju iz Rasadnika Tilija. Kako odabrati, zasaditi i negovati biljke u srpskim uslovima." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/blog" />
        <meta property="og:title" content="Blog – Rasadnik Tilija | Saveti o sadnicama i biljkama" />
        <meta property="og:description" content="Stručni saveti o sadnicama, živim ogradama i ukrasnom bilju iz Rasadnika Tilija." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rasadniktilija.rs/blog" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <h1 className="blog-hero-title">Blog</h1>
            <p className="blog-hero-subtitle">Saveti, vodiči i odgovori na najčešća pitanja o sadnicama u Srbiji</p>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 380px"
                    />
                    <span className="blog-category">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span>{new Date(post.date).toLocaleDateString('sr-RS', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      <span>·</span>
                      <span>{post.readTime} čitanja</span>
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <span className="blog-read-more">Pročitaj više →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
