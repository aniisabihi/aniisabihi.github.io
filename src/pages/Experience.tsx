import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import PageMeta from "../components/PageMeta";
import PostCard from "../components/PostCard";
import { SITE } from "../config/site";
import { LANGUAGE_FILTERS, POSTS, TYPE_FILTERS } from "../data/posts";
import type { LanguageFilter, TypeFilter } from "../types/post";

function matchesFilter(categories: string[], activeFilter: string) {
  if (activeFilter === "All") {
    return true;
  }

  return categories.includes(activeFilter);
}

export default function Experience() {
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
    <section className="experience-page">
      <PageMeta
        title={SITE.name}
        description={SITE.defaultDescription}
        path="/"
      />
      <div className="experience-page__inner">
        <header className="experience-page__header">
          <h1 className="experience-page__title">Experiences</h1>
          <p className="experience-page__intro">
            Work, projects, and extracurricular activities across web
            development, visualization, and software engineering.
          </p>
        </header>

        <div className="experience-page__filters">
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
          <p className="experience-page__empty">
            No projects match these filters.
          </p>
        )}
      </div>
    </section>
  );
}
