import Head from 'next/head';
import Link from 'next/link';
import blogPosts from '../../data/blogData';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Rasadnik Tilija | Saveti o sadnicama i biljkama</title>
        <meta name="description" content="Stručni saveti o sadnicama, živim ogradama i ukrasnom bilju iz Rasadnika Tilija. Kako odabrati, zasaditi i negovati biljke u srpskim uslovima." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rasadniktilija.rs/blog" />
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
                    <img src={post.image} alt={post.title} loading="lazy" />
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
