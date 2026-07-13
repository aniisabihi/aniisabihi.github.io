import PageMeta from "../components/PageMeta";
import { useSectionNav } from "../hooks/useSectionNav";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  const { goToSection } = useSectionNav();

  return (
    <section className={styles.root}>
      <PageMeta title="Page not found" />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        type="button"
        className={styles.backLink}
        onClick={() => goToSection("work")}
      >
        Back to experiences
      </button>
    </section>
  );
}
