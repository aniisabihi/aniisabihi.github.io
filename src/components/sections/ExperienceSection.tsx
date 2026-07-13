import { useMemo, useState } from "react";
import FilterBar from "../FilterBar";
import PostCard from "../PostCard";
import { SECTION_IDS } from "../../config/site";
import { LANGUAGE_FILTERS, POSTS, TYPE_FILTERS } from "../../data/posts";
import type { LanguageFilter, TypeFilter } from "../../types/post";

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
    return POSTS.filter((post) => {
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
      id={SECTION_IDS.work}
      className="landing-section landing-section--work"
      aria-labelledby="work-heading"
    >
      <div className="landing-section__inner experience-section__inner">
        <header className="experience-section__header">
          <h2 id="work-heading" className="experience-section__title">
            Experiences
          </h2>
          <p className="experience-section__intro">
            Work, projects, and extracurricular activities across web
            development, visualization, and software engineering.
          </p>
        </header>

        <div className="experience-section__filters">
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

        <ul className="post-grid">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>

        {visiblePosts.length === 0 && (
          <p className="experience-section__empty">
            No projects match these filters.
          </p>
        )}
      </div>
    </section>
  );
}
