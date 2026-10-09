import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { POSTS } from '../blog';

function ArticleMeta({ post }) {
  return (
    <p className="blog-meta">
      <span>{post.author}</span>
      <span aria-hidden="true"> · </span>
      <time dateTime={post.published}>{post.publishedLabel}</time>
    </p>
  );
}

function Blog() {
  usePageMeta('blog');
  const [featured, ...rest] = POSTS;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageShell>
      <PageIntro
        className="blog-intro"
        kicker="Go4Profit Blog"
        title="Clear answers for your business."
        lead="Practical advice on bookkeeping, cash flow, taxes, and smarter ways to manage your accounting."
      />
      <div className="page-inner section blog-index">
        <Link className="blog-featured" to={`/blog/${featured.slug}`}>
          <img src={featured.image} alt={featured.imageAlt} />
          <div>
            <p className="blog-cat">{featured.category}</p>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <ArticleMeta post={featured} />
          </div>
        </Link>
        <div className="blog-grid">
          {rest.map((post) => (
            <Link className="blog-card" to={`/blog/${post.slug}`} key={post.slug}>
              <img src={post.image} alt={post.imageAlt} />
              <div className="blog-card-body">
                <p className="blog-cat">{post.category}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <ArticleMeta post={post} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

export default Blog;
