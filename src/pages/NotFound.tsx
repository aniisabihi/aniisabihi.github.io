import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFound() {
  return (
    <section className="not-found">
      <PageMeta title="Page not found" />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="not-found__link">
        Back to experiences
      </Link>
    </section>
  );
}
