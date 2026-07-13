import StackIcon from "../StackIcon";
import styles from "./FilterBar.module.scss";

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
    <ul className={variant === "language" ? styles.language : styles.root}>
      {filters.map((filter) => (
        <li key={filter}>
          <button
            type="button"
            className={
              activeFilter === filter
                ? `${styles.button} ${styles.active}`
                : styles.button
            }
            onClick={() => onSelect(filter)}
            aria-pressed={activeFilter === filter}
            aria-label={
              variant === "language" && filter !== "All" ? filter : undefined
            }
          >
            {variant === "language" && filter !== "All" ? (
              <StackIcon name={filter} size={18} showLabel={false} />
            ) : (
              <span>{filter}</span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
