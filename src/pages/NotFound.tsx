import PageMeta from "../components/PageMeta";
import { useSectionNav } from "../hooks/useSectionNav";

export default function NotFound() {
  const { goToSection } = useSectionNav();

  return (
    <section className="not-found">
      <PageMeta title="Page not found" />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        type="button"
        className="not-found__link"
        onClick={() => goToSection("work")}
      >
        Back to experiences
      </button>
    </section>
  );
}
