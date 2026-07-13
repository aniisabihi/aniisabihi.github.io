import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import PageMeta from "../components/PageMeta";
import PostVideos from "../components/PostVideos";
import StackIcon from "../components/StackIcon";
import { POSTS_BY_ID } from "../data/posts";
import { useSectionNav } from "../hooks/useSectionNav";

const CATEGORY_LABELS: Record<string, string> = {
  work: "Work",
  project: "Project",
  extracurricular: "Extracurricular",
};

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
  const { goToSection } = useSectionNav();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <section className="post-detail post-detail--missing">
        <PageMeta
          title="Project not found"
          path={postId ? `/experience/${postId}` : "/"}
        />
        <div className="post-detail__inner">
          <h1>Project not found</h1>
          <button
            type="button"
            className="post-detail__back"
            onClick={() => goToSection("work")}
          >
            Back to experiences
          </button>
        </div>
      </section>
    );
  }

  const categoryLabel =
    CATEGORY_LABELS[post.category] ?? post.category;
  const hasMedia =
    post.images.length > 0 || (post.videos?.length ?? 0) > 0;

  return (
    <article className="post-detail fade-rise">
      <PageMeta
        title={post.title}
        description={post.subtitle}
        image={post.images[0]?.src ?? post.thumbnail}
        path={`/experience/${post.id}`}
      />

      <header
        className="post-detail__hero"
        style={{
          backgroundImage: `url(${post.thumbnail})`,
          backgroundSize: post.thumbnailScale
            ? `${post.thumbnailScale}% auto`
            : (post.thumbnailSize ?? "contain"),
        }}
      >
        <div className="post-detail__hero-overlay">
          <div className="post-detail__inner post-detail__hero-inner">
            <button
              type="button"
              className="post-detail__back"
              onClick={() => goToSection("work")}
            >
              <i className="fa fa-arrow-left" aria-hidden="true" /> Back to
              experiences
            </button>

            <div className="post-detail__hero-meta">
              <span className="post-detail__badge">{categoryLabel}</span>
              {post.date && (
                <p className="post-detail__date">
                  <i className="fa fa-calendar" aria-hidden="true" /> {post.date}
                </p>
              )}
            </div>

            <h1 className="post-detail__title">{post.title}</h1>
            <p className="post-detail__subtitle">{post.subtitle}</p>

            {post.skills.length > 0 && (
              <ul className="post-detail__skills" aria-label="Skills">
                {post.skills.map((skill) => (
                  <li key={skill}>
                    <StackIcon name={skill} size={15} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      <div className="post-detail__inner">
        <div
          className={`post-detail__body${hasMedia ? " post-detail__body--with-media" : ""}`}
        >
          {hasMedia && (
            <div className="post-detail__media">
              <ImageCarousel images={post.images} />
              <PostVideos videos={post.videos ?? []} />
            </div>
          )}

          <div className="post-detail__content">
            {post.paragraphs.map((paragraph) => (
              <RichParagraph
                key={paragraph.slice(0, 40)}
                html={paragraph}
              />
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
      </div>
    </article>
  );
}
