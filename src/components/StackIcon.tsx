import { getStackIcon } from "../config/stackIcons";
import styles from "./StackIcon.module.scss";

type StackIconProps = {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
};

export default function StackIcon({
  name,
  size = 16,
  showLabel = true,
  className,
}: StackIconProps) {
  const Icon = getStackIcon(name);

  if (!Icon) {
    return (
      <span className={className ? `${styles.text} ${className}` : styles.text}>
        {name}
      </span>
    );
  }

  return (
    <span className={className ? `${styles.chip} ${className}` : styles.chip}>
      <Icon
        size={size}
        color="default"
        aria-hidden="true"
        className={styles.icon}
      />
      {showLabel && <span className={styles.label}>{name}</span>}
    </span>
  );
}
