import type { CSSProperties } from "react";
import type { Post } from "../types/post";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.scss";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <li
      className={styles.card}
      style={{ "--animation-order": post.animationOrder } as CSSProperties}
    >
      <Link to={`/experience/${post.id}`} className={styles.link}>
        <div
          className={styles.media}
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            backgroundSize: post.thumbnailScale
              ? `${post.thumbnailScale}% auto`
              : (post.thumbnailSize ?? "contain"),
          }}
        >
          <div className={styles.overlay}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.subtitle}>{post.subtitle}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
