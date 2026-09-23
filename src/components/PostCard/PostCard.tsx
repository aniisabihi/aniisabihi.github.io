import type { CSSProperties } from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router-dom";
import {
  categoryLabel,
  formatYears,
  splitTitle,
  thumbnailStyle,
} from "../../utils/postText";
import styles from "./PostCard.module.scss";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const { name, role } = splitTitle(post.title);

  return (
    <li
      className={styles.card}
      style={{ "--animation-order": post.animationOrder } as CSSProperties}
    >
      <Link to={`/experience/${post.id}`} className={styles.link}>
        <div className={styles.media} aria-hidden="true">
          <div className={styles.thumb} style={thumbnailStyle(post)} />
        </div>
        <div className={styles.caption}>
          <p className={styles.kicker}>
            <span>{categoryLabel(post.category)}</span>
            {post.date && (
              <>
                <span className={styles.dot} aria-hidden="true">
                  ·
                </span>
                <span>{formatYears(post.date)}</span>
              </>
            )}
          </p>
          <h3 className={styles.title}>
            {name}
            {role && (
              <>
                <span className="visually-hidden">, </span>
                <span className={styles.role}>{role}</span>
              </>
            )}
          </h3>
          <p className={styles.subtitle}>{post.subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
