import { useMemo, useState } from "react";
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
    <section className='grid'>
      <div className='container'>
        <ol className='filtersType'>
          {TYPE_FILTERS.map((filter) => (
            <li key={filter}>
              <button
                type='button'
                className={
                  typeFilter === filter && !languageFilter
                    ? "is-active"
                    : undefined
                }
                onClick={() => selectType(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ol>
        <ol className='filtersLanguage'>
          {LANGUAGE_FILTERS.map((filter) => (
            <li key={filter}>
              <button
                type='button'
                className={languageFilter === filter ? "is-active" : undefined}
                onClick={() => selectLanguage(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ol>

        <ol className='posts'>
          {visiblePosts.map((post) => (
            <li
              key={post.id}
              id={post.id}
              className='post'
              data-category={post.categories.join(" ")}
              style={{ "--animation-order": post.animationOrder }}
            >
              <div className='caption'>
                <div className='blur' />
                <a href={post.href}>
                  <div className='caption-text'>
                    <h1>{post.title}</h1>
                    <p>{post.subtitle}</p>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
