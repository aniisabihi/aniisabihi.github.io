import StackIcon from "./StackIcon";

type FilterBarProps = {
  filters: readonly string[];
  activeFilter: string | null;
  onSelect: (filter: string) => void;
  variant?: "type" | "language";
};

export default function FilterBar({
  filters,
  activeFilter,
  onSelect,
  variant = "type",
}: FilterBarProps) {
  return (
    <ul className={`filter-bar filter-bar--${variant}`}>
      {filters.map((filter) => (
        <li key={filter}>
          <button
            type="button"
            className={activeFilter === filter ? "is-active" : undefined}
            onClick={() => onSelect(filter)}
            aria-pressed={activeFilter === filter}
          >
            {variant === "language" && filter !== "All" ? (
              <StackIcon name={filter} size={14} showLabel={false} />
            ) : null}
            <span>{filter}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
