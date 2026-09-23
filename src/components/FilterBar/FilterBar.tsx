import StackIcon from "../StackIcon";
import styles from "./FilterBar.module.scss";

type FilterBarProps = {
  /** Accessible name for the group, e.g. "Filter by type". */
  label: string;
  filters: readonly string[];
  activeFilter: string | null;
  onSelect: (filter: string) => void;
  variant?: "type" | "language";
};

export default function FilterBar({
  label,
  filters,
  activeFilter,
  onSelect,
  variant = "type",
}: FilterBarProps) {
  const isLanguage = variant === "language";

  return (
    <div role="group" aria-label={label}>
      <ul className={isLanguage ? styles.language : styles.root}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <li key={filter}>
              <button
                type="button"
                className={
                  isActive ? `${styles.button} ${styles.active}` : styles.button
                }
                onClick={() => onSelect(filter)}
                aria-pressed={isActive}
                // Icon-only buttons get a name, and a hover/focus tooltip so
                // sighted users can tell the logos apart too.
                aria-label={isLanguage ? filter : undefined}
                data-tooltip={isLanguage ? filter : undefined}
              >
                {isLanguage ? (
                  <StackIcon name={filter} size={18} showLabel={false} />
                ) : (
                  <span>{filter}</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
