export default function FilterBar({
  filters,
  activeFilter,
  onSelect,
  variant = "type",
}) {
  return (
    <ul className={`filter-bar filter-bar--${variant}`}>
      {filters.map((filter) => (
        <li key={filter}>
          <button
            type='button'
            className={activeFilter === filter ? "is-active" : undefined}
            onClick={() => onSelect(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
}
