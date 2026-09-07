import { useMemo, useState } from "react";
import FilterBar from "../FilterBar";
import PostCard from "../PostCard";
import { restPosts } from "../../data/featured";
import { LANGUAGE_FILTERS, TYPE_FILTERS } from "../../data/posts";
import type { LanguageFilter, TypeFilter } from "../../types/post";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./ExperienceSection.module.scss";

function matchesFilter(categories: string[], activeFilter: string) {
  if (activeFilter === "All") {
    return true;
  }

  return categories.includes(activeFilter);
}

export default function ExperienceSection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter | null>(
    null,
  );

  const visiblePosts = useMemo(() => {
    return restPosts.filter((post) => {
      const matchesType = matchesFilter(post.categories, typeFilter);
      const matchesLanguage = languageFilter
        ? post.categories.includes(languageFilter)
        : true;

      return matchesType && matchesLanguage;
    });
  }, [typeFilter, languageFilter]);

  const selectType = (filter: string) => {
    setTypeFilter(filter as TypeFilter);
    setLanguageFilter(null);
  };

  const selectLanguage = (filter: string) => {
    setLanguageFilter((current) =>
      current === filter ? null : (filter as LanguageFilter),
    );
    setTypeFilter("All");
  };

  return (
    <section
      className={landing.section}
      aria-labelledby="more-experiences-heading"
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="more-experiences-heading" className={styles.title}>
            More experiences
          </h2>
        </header>

        <div className={styles.filters}>
          <FilterBar
            filters={TYPE_FILTERS}
            activeFilter={languageFilter ? null : typeFilter}
            onSelect={selectType}
            variant="type"
          />
          <FilterBar
            filters={LANGUAGE_FILTERS}
            activeFilter={languageFilter}
            onSelect={selectLanguage}
            variant="language"
          />
        </div>

        <ul className={styles.postGrid}>
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>

        {visiblePosts.length === 0 && (
          <p className={styles.empty}>No projects match these filters.</p>
        )}
      </div>
    </section>
  );
}
