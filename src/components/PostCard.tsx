import type { CSSProperties } from "react";
import type { Post } from "../types/post";
import { Link } from "react-router-dom";

const CATEGORY_LABELS: Record<string, string> = {
  work: "Work",
  project: "Project",
  extracurricular: "Extracurricular",
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const categoryLabel =
    CATEGORY_LABELS[post.category] ?? post.category;

  return (
    <li
      className="post-card"
      style={{ "--animation-order": post.animationOrder } as CSSProperties}
    >
      <Link to={`/experience/${post.id}`} className="post-card__link">
        <div
          className="post-card__media"
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            backgroundSize: post.thumbnailScale
              ? `${post.thumbnailScale}% auto`
              : (post.thumbnailSize ?? "contain"),
          }}
        >
          <div className="post-card__badges">
            <span className="post-card__badge">{categoryLabel}</span>
            {post.date && <span className="post-card__date">{post.date}</span>}
          </div>
          <div className="post-card__overlay">
            <h3 className="post-card__title">{post.title}</h3>
            <p className="post-card__subtitle">{post.subtitle}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
