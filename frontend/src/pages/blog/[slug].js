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
  const relatedPosts = post?.relatedSlugs
    ? post.relatedSlugs.map(s => blogPosts.find(p => p.slug === s)).filter(Boolean).slice(0, 3)
    : [];
  return { props: { post, relatedPosts } };
}

export default function BlogPost({ post, relatedPosts }) {
  if (!post) return null;

  const dateFormatted = new Date(post.date).toLocaleDateString('sr-RS', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://rasadniktilija.rs${post.image}`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: { '@type': 'Organization', name: 'Rasadnik Tilija', url: 'https://rasadniktilija.rs' },
    publisher: { '@type': 'Organization', name: 'Rasadnik Tilija', url: 'https://rasadniktilija.rs' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://rasadniktilija.rs/blog/${post.slug}` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://rasadniktilija.rs' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://rasadniktilija.rs/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://rasadniktilija.rs/blog/${post.slug}` },
    ],
  };

  const faqSchema = post.faq?.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`https://rasadniktilija.rs${post.image}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
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

          {relatedPosts.length > 0 && (
            <div className="blog-related">
              <h2 className="blog-related-title">Slični tekstovi</h2>
              <div className="blog-related-grid">
                {relatedPosts.map(rp => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="blog-related-card">
                    <div className="blog-related-img">
                      <img src={rp.image} alt={rp.title} loading="lazy" />
                    </div>
                    <div className="blog-related-body">
                      <span className="blog-category">{rp.category}</span>
                      <h3>{rp.title}</h3>
                      <span className="blog-read-more">Pročitaj više →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="blog-back">
            <Link href="/blog">← Svi tekstovi</Link>
          </div>
        </div>
      </div>
    </>
  );
}
