import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import PageShell from '../components/PageShell';
import { usePageMeta } from '../seo';
import { getPost, POSTS } from '../blog';
import { SITE_URL } from '../site';
import NotFound from './NotFound';

function articleMeta(post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Go4Profit`,
    description: post.description,
    path: `/blog/${post.slug}`,
    crumb: post.title,
    parent: { name: 'Blog', path: '/blog' },
    article: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.published,
      author: {
        '@type': 'Organization',
        name: 'Go4Profit',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Go4Profit',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo.jpg`,
        },
      },
      mainEntityOfPage: url,
    },
  };
}

function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const meta = useMemo(() => (post ? articleMeta(post) : null), [post]);
  usePageMeta(meta || 'notFound');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  const more = POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="page-inner article">
        <p className="article-back">
          <Link to="/blog">Blog</Link>
        </p>
        <p className="blog-cat">{post.category}</p>
        <h1 className="display">{post.title}</h1>
        <p className="blog-meta">
          <span>{post.author}</span>
          <span aria-hidden="true"> · </span>
          <time dateTime={post.published}>{post.publishedLabel}</time>
        </p>
        <img className="article-cover" src={post.image} alt={post.imageAlt} />
        {post.intro?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.blocks?.map((block) => {
              if (block.type === 'p') return <p key={block.text}>{block.text}</p>;
              if (block.type === 'h3') return <h3 key={block.text}>{block.text}</h3>;
              if (block.type === 'ul') {
                return (
                  <ul key={block.items[0]}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'table') {
                return (
                  <div className="article-table-wrap" key={block.caption}>
                    <table>
                      <caption>{block.caption}</caption>
                      <thead>
                        <tr>
                          {block.headers.map((header) => (
                            <th key={header} scope="col">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, index) =>
                              index === 0 ? (
                                <th key={cell} scope="row">
                                  {cell}
                                </th>
                              ) : (
                                <td key={cell}>{cell}</td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return null;
            })}
            {section.links ? (
              <ul className="article-links">
                {section.links.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <div className="article-close">
          <p>{post.closing.text}</p>
          <Button to={post.closing.to}>{post.closing.label}</Button>
        </div>
        {post.sources.length ? (
          <section className="article-sources">
            <h2>Sources</h2>
            <ul>
              {post.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <section className="article-more">
          <h2>More from the blog</h2>
          <ul>
            {more.map((item) => (
              <li key={item.slug}>
                <Link to={`/blog/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}

export default BlogPost;
