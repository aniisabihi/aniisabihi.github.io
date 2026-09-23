import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarousel";
import PageMeta from "../../components/PageMeta";
import PostVideos from "../../components/PostVideos";
import StackIcon from "../../components/StackIcon";
import { SECTION_IDS } from "../../config/site";
import { POSTS, POSTS_BY_ID } from "../../data/posts";
import { useRouteFocus } from "../../hooks/useRouteFocus";
import { useSectionNav } from "../../hooks/useSectionNav";
import type { Post, PostLink } from "../../types/post";
import {
  categoryLabel,
  splitTitle,
  thumbnailStyle,
} from "../../utils/postText";
import styles from "./PostDetail.module.scss";

const LINK_LABELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  github: "GitHub",
  "github-square": "GitHub",
  "file-pdf-o": "PDF",
  "file-photo-o": "Image",
  "file-video-o": "Video",
};

/** Visible label for a project link: the site's host for websites, else the service. */
function linkLabel({ href, icon }: PostLink): string {
  if (icon === "globe") {
    try {
      return new URL(href).hostname.replace(/^www\./, "");
    } catch {
      return "Website";
    }
  }

  return LINK_LABELS[icon] ?? icon;
}

function RichParagraph({ html, lede }: { html: string; lede?: boolean }) {
  return (
    <p
      className={lede ? styles.lede : styles.paragraph}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function BackLink() {
  const { sectionLinkHandler } = useSectionNav();

  return (
    <a
      href={`/#${SECTION_IDS.work}`}
      className={styles.back}
      onClick={sectionLinkHandler(SECTION_IDS.work)}
    >
      <i className="fa fa-arrow-left" aria-hidden="true" />
      Back to experiences
    </a>
  );
}

function PostPager({ post }: { post: Post }) {
  const index = POSTS.findIndex((item) => item.id === post.id);
  if (index === -1 || POSTS.length < 2) {
    return null;
  }

  // Wraps around, so every page offers somewhere to go next.
  const previous = POSTS[(index - 1 + POSTS.length) % POSTS.length];
  const next = POSTS[(index + 1) % POSTS.length];

  return (
    <nav className={styles.pager} aria-label="More experiences">
      <Link to={`/experience/${previous.id}`} className={styles.pagerLink}>
        <span className={styles.pagerLabel}>
          <i className="fa fa-arrow-left" aria-hidden="true" /> Previous
        </span>
        <span className={styles.pagerTitle}>
          {splitTitle(previous.title).name}
        </span>
      </Link>
      <Link
        to={`/experience/${next.id}`}
        className={`${styles.pagerLink} ${styles.pagerNext}`}
      >
        <span className={styles.pagerLabel}>
          Next <i className="fa fa-arrow-right" aria-hidden="true" />
        </span>
        <span className={styles.pagerTitle}>{splitTitle(next.title).name}</span>
      </Link>
    </nav>
  );
}

export default function PostDetail() {
  const { postId } = useParams();
  const post = postId ? POSTS_BY_ID[postId] : undefined;
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);
  useRouteFocus(headingRef);

  if (!post) {
    return (
      <section className={styles.missing}>
        <PageMeta
          title="Project not found"
          path={postId ? `/experience/${postId}` : "/"}
        />
        <div className={styles.inner}>
          <h1 ref={headingRef} tabIndex={-1}>
            Project not found
          </h1>
          <p>It may have been renamed or removed.</p>
          <BackLink />
        </div>
      </section>
    );
  }

  const { name, role } = splitTitle(post.title);
  const hasMedia = post.images.length > 0 || (post.videos?.length ?? 0) > 0;

  return (
    <article className={styles.root} aria-labelledby="post-heading">
      <PageMeta
        title={post.title}
        description={post.subtitle}
        image={post.images[0]?.src ?? post.thumbnail}
        path={`/experience/${post.id}`}
      />

      <header className={styles.hero}>
        <div className={`${styles.inner} ${styles.heroInner} fade-rise`}>
          <BackLink />

          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroMeta}>
                <span className={styles.badge}>
                  {categoryLabel(post.category)}
                </span>
                {post.date && <p className={styles.date}>{post.date}</p>}
              </div>

              <h1
                id="post-heading"
                ref={headingRef}
                tabIndex={-1}
                className={styles.title}
              >
                {name}
                {role && (
                  <>
                    <span className="visually-hidden">, </span>
                    <span className={styles.role}>{role}</span>
                  </>
                )}
              </h1>
              <p className={styles.subtitle}>{post.subtitle}</p>

              {post.skills.length > 0 && (
                <ul className={styles.skills} aria-label="Skills and tools">
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

            {/* The same tile as the grid card, so the page is recognisably
                the one that was clicked. Decorative: the h1 names it. */}
            <div
              className={styles.cover}
              style={thumbnailStyle(post)}
              aria-hidden="true"
            />
          </div>
        </div>
      </header>

      <div className={styles.inner}>
        <div className={hasMedia ? styles.bodyWithMedia : styles.body}>
          {hasMedia && (
            <div className={styles.media}>
              <ImageCarousel
                // Remount per post so slide, pause and live-region state
                // never carry over from the previous project.
                key={post.id}
                images={post.images}
                label={name}
              />
              <PostVideos videos={post.videos ?? []} />
            </div>
          )}

          <div className={styles.content}>
            {post.paragraphs.map((paragraph, index) => (
              <RichParagraph
                key={paragraph.slice(0, 40)}
                html={paragraph}
                // A short opening paragraph reads as a standfirst; a post that
                // is one long paragraph stays at body size.
                lede={index === 0 && post.paragraphs.length > 1}
              />
            ))}

            {post.links.length > 0 && (
              <section
                className={styles.linksSection}
                aria-labelledby="post-links-heading"
              >
                <h2 id="post-links-heading" className={styles.linksHeading}>
                  Links
                </h2>
                <ul className={styles.links}>
                  {post.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <i
                          className={`fa fa-${link.icon}`}
                          aria-hidden="true"
                        />
                        <span>{linkLabel(link)}</span>
                        <span className="visually-hidden">
                          {" "}
                          (opens in new tab)
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        <PostPager post={post} />
      </div>
    </article>
  );
}
