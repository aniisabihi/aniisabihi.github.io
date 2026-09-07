import PostCard from "../PostCard";
import { featuredPosts } from "../../data/featured";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./FeaturedSection.module.scss";

export default function FeaturedSection() {
  return (
    <section
      className={landing.section}
      aria-labelledby="featured-heading"
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="featured-heading" className={styles.title}>
            Selected work
          </h2>
        </header>

        <ul className={styles.postGrid}>
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="featured" />
          ))}
        </ul>
      </div>
    </section>
  );
}
