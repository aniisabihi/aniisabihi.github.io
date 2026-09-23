import { useMemo, useState } from "react";
import FilterBar from "../FilterBar";
import PostCard from "../PostCard";
import { SECTION_IDS } from "../../config/site";
import { LANGUAGE_FILTERS, POSTS, TYPE_FILTERS } from "../../data/posts";
import type { LanguageFilter, TypeFilter } from "../../types/post";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./ExperienceSection.module.scss";

export default function ExperienceSection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter | null>(
    null,
  );

  // The two filters combine: "Work" + "TypeScript" narrows to both.
  const visiblePosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesType =
        typeFilter === "All" || post.categories.includes(typeFilter);
      const matchesLanguage =
        !languageFilter || post.categories.includes(languageFilter);

      return matchesType && matchesLanguage;
    });
  }, [typeFilter, languageFilter]);

  const isFiltered = typeFilter !== "All" || languageFilter !== null;

  const selectType = (filter: string) => {
    setTypeFilter(filter as TypeFilter);
  };

  const selectLanguage = (filter: string) => {
    setLanguageFilter((current) =>
      current === filter ? null : (filter as LanguageFilter),
    );
  };

  const clearFilters = () => {
    setTypeFilter("All");
    setLanguageFilter(null);
  };

  return (
    <section
      id={SECTION_IDS.work}
      className={landing.section}
      aria-labelledby="work-heading"
      tabIndex={-1}
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="work-heading" className={landing.heading}>
            Experiences
          </h2>
        </header>

        <div className={styles.filters}>
          <FilterBar
            label="Filter by type"
            filters={TYPE_FILTERS}
            activeFilter={typeFilter}
            onSelect={selectType}
            variant="type"
          />
          <FilterBar
            label="Filter by technology"
            filters={LANGUAGE_FILTERS}
            activeFilter={languageFilter}
            onSelect={selectLanguage}
            variant="language"
          />
        </div>

        <div className={styles.status}>
          <p className={styles.count} role="status">
            {isFiltered
              ? `Showing ${visiblePosts.length} of ${POSTS.length}`
              : `${POSTS.length} entries`}
            {languageFilter && (
              <>
                {" "}
                using <strong>{languageFilter}</strong>
              </>
            )}
          </p>
          {isFiltered && (
            <button
              type="button"
              className={styles.clear}
              onClick={clearFilters}
            >
              Clear filters
            </button>
          )}
        </div>

        {visiblePosts.length > 0 ? (
          <ul className={styles.postGrid}>
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Nothing matches that combination yet.</p>
        )}
      </div>
    </section>
  );
}
