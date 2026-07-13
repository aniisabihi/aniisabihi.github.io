import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarousel";
import PageMeta from "../../components/PageMeta";
import PostVideos from "../../components/PostVideos";
import StackIcon from "../../components/StackIcon";
import { POSTS_BY_ID } from "../../data/posts";
import { useSectionNav } from "../../hooks/useSectionNav";
import styles from "./PostDetail.module.scss";

const CATEGORY_LABELS: Record<string, string> = {
  work: "Work",
  project: "Project",
  extracurricular: "Extracurricular",
};

function RichParagraph({ html }: { html: string }) {
  return (
    <p
      className={styles.paragraph}
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
      <section className={styles.missing}>
        <PageMeta
          title="Project not found"
          path={postId ? `/experience/${postId}` : "/"}
        />
        <div className={styles.inner}>
          <h1>Project not found</h1>
          <button
            type="button"
            className={styles.back}
            onClick={() => goToSection("work")}
          >
            Back to experiences
          </button>
        </div>
      </section>
    );
  }

  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category;
  const hasMedia = post.images.length > 0 || (post.videos?.length ?? 0) > 0;

  return (
    <article className={`${styles.root} fade-rise`}>
      <PageMeta
        title={post.title}
        description={post.subtitle}
        image={post.images[0]?.src ?? post.thumbnail}
        path={`/experience/${post.id}`}
      />

      <header
        className={styles.hero}
        style={{
          backgroundImage: `url(${post.thumbnail})`,
          backgroundSize: post.thumbnailScale
            ? `${post.thumbnailScale}% auto`
            : (post.thumbnailSize ?? "contain"),
        }}
      >
        <div className={styles.heroOverlay}>
          <div className={`${styles.inner} ${styles.heroInner}`}>
            <button
              type="button"
              className={styles.back}
              onClick={() => goToSection("work")}
            >
              <i className="fa fa-arrow-left" aria-hidden="true" /> Back to
              experiences
            </button>

            <div className={styles.heroMeta}>
              <span className={styles.badge}>{categoryLabel}</span>
              {post.date && (
                <p className={styles.date}>
                  <i className="fa fa-calendar" aria-hidden="true" />{" "}
                  {post.date}
                </p>
              )}
            </div>

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subtitle}</p>

            {post.skills.length > 0 && (
              <ul className={styles.skills} aria-label="Skills">
                {post.skills.map((skill) => (
                  <li key={skill}>
                    <StackIcon
                      name={skill}
                      size={15}
                      className={styles.skillChip}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      <div className={styles.inner}>
        <div className={hasMedia ? styles.bodyWithMedia : styles.body}>
          {hasMedia && (
            <div className={styles.media}>
              <ImageCarousel images={post.images} />
              <PostVideos videos={post.videos ?? []} />
            </div>
          )}

          <div className={styles.content}>
            {post.paragraphs.map((paragraph) => (
              <RichParagraph key={paragraph.slice(0, 40)} html={paragraph} />
            ))}

            {post.links.length > 0 && (
              <div className={styles.links}>
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
