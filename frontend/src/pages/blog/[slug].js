import Head from 'next/head';
import Link from 'next/link';
import blogPosts from '../../data/blogData';

export async function getStaticPaths() {
  return {
    paths: blogPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug) || null;
  return { props: { post } };
}

export default function BlogPost({ post }) {
  if (!post) return null;

  const dateFormatted = new Date(post.date).toLocaleDateString('sr-RS', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <>
      <Head>
        <title>{post.title} – Rasadnik Tilija</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://rasadniktilija.rs/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://rasadniktilija.rs/blog/${post.slug}`} />
        <meta property="og:image" content={`https://rasadniktilija.rs${post.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`https://rasadniktilija.rs${post.image}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": `https://rasadniktilija.rs${post.image}`,
          "datePublished": post.date,
          "author": { "@type": "Organization", "name": "Rasadnik Tilija" },
          "publisher": { "@type": "Organization", "name": "Rasadnik Tilija", "url": "https://rasadniktilija.rs" },
        })}} />
      </Head>

      <div className="blog-post-page">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Početna</Link>
            <span className="breadcrumb-separator">›</span>
            <Link href="/blog">Blog</Link>
            <span className="breadcrumb-separator">›</span>
            <span className="breadcrumb-current">{post.title}</span>
          </nav>

          <article className="blog-article">
            <header className="blog-article-header">
              <span className="blog-category">{post.category}</span>
              <h1 className="blog-article-title">{post.title}</h1>
              <div className="blog-meta">
                <span>{dateFormatted}</span>
                <span>·</span>
                <span>{post.readTime} čitanja</span>
              </div>
            </header>

            <div className="blog-article-hero">
              <img src={post.image} alt={post.title} loading="eager" />
            </div>

            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="blog-article-cta">
              <p>Imate pitanje ili želite da naručite sadnice?</p>
              <Link href="/contact" className="blog-cta-btn">Kontaktirajte nas</Link>
              <Link href="/products" className="blog-cta-btn blog-cta-secondary">Pogledaj sadnice</Link>
            </div>
          </article>

          <div className="blog-back">
            <Link href="/blog">← Svi tekstovi</Link>
          </div>
        </div>
      </div>
    </>
  );
}
