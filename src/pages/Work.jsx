import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar.jsx";
import PostCard from "../components/PostCard.jsx";
import { LANGUAGE_FILTERS, POSTS, TYPE_FILTERS } from "../data/posts.js";

function matchesFilter(categories, activeFilter) {
  if (activeFilter === "All") {
    return true;
  }

  return categories.includes(activeFilter);
}

export default function Work() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState(null);

  const visiblePosts = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesType = matchesFilter(post.categories, typeFilter);
      const matchesLanguage = languageFilter
        ? post.categories.includes(languageFilter)
        : true;

      return matchesType && matchesLanguage;
    });
  }, [typeFilter, languageFilter]);

  const selectType = (filter) => {
    setTypeFilter(filter);
    setLanguageFilter(null);
  };

  const selectLanguage = (filter) => {
    setLanguageFilter((current) => (current === filter ? null : filter));
    setTypeFilter("All");
  };

  return (
    <section className='work-page'>
      <div className='work-page__inner'>
        <header className='work-page__header'>
          <h1 className='work-page__title'>Selected work</h1>
          <p className='work-page__intro'>
            Projects, jobs, and extracurricular work across web development,
            visualization, and software engineering.
          </p>
        </header>

        <div className='work-page__filters'>
          <FilterBar
            filters={TYPE_FILTERS}
            activeFilter={languageFilter ? null : typeFilter}
            onSelect={selectType}
            variant='type'
          />
          <FilterBar
            filters={LANGUAGE_FILTERS}
            activeFilter={languageFilter}
            onSelect={selectLanguage}
            variant='language'
          />
        </div>

        <ul className='post-grid'>
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>

        {visiblePosts.length === 0 && (
          <p className='work-page__empty'>No projects match these filters.</p>
        )}
      </div>
    </section>
  );
}
