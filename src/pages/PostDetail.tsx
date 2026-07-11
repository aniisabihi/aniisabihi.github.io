import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import PageMeta from "../components/PageMeta";
import { POSTS_BY_ID } from "../data/posts";

function RichParagraph({ html }: { html: string }) {
  return (
    <p
      className="post-detail__paragraph"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function PostDetail() {
  const { postId } = useParams();
  const post = postId ? POSTS_BY_ID[postId] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <section className="post-detail post-detail--missing">
        <PageMeta
          title="Project not found"
          path={postId ? `/work/${postId}` : "/"}
        />
        <div className="post-detail__inner">
          <h1>Project not found</h1>
          <Link to="/" className="post-detail__back">
            Back to work
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="post-detail">
      <PageMeta
        title={post.title}
        description={post.subtitle}
        image={post.images[0]?.src ?? post.thumbnail}
        path={`/work/${post.id}`}
      />
      <div className="post-detail__inner">
        <Link to="/" className="post-detail__back">
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back to work
        </Link>

        <header className="post-detail__header">
          <h1>{post.title}</h1>
          {post.date && (
            <p className="post-detail__date">
              <i className="fa fa-calendar" aria-hidden="true" /> {post.date}
            </p>
          )}
          {post.skills.length > 0 && (
            <ul className="post-detail__skills">
              {post.skills.map((skill) => (
                <li key={skill}>
                  <i className="fa fa-star" aria-hidden="true" /> {skill}
                </li>
              ))}
            </ul>
          )}
        </header>

        <ImageCarousel images={post.images} />

        <div className="post-detail__content">
          {post.paragraphs.map((paragraph) => (
            <RichParagraph key={paragraph.slice(0, 40)} html={paragraph} />
          ))}

          {post.links.length > 0 && (
            <div className="post-detail__links">
              {post.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.icon}
                >
                  <i className={`fa fa-${link.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
