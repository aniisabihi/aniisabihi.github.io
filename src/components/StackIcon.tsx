import { getStackIcon } from "../config/stackIcons";

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
      <span className={`stack-chip stack-chip--text${className ? ` ${className}` : ""}`}>
        {name}
      </span>
    );
  }

  return (
    <span className={`stack-chip${className ? ` ${className}` : ""}`}>
      <Icon
        size={size}
        color="default"
        aria-hidden="true"
        className="stack-chip__icon"
      />
      {showLabel && <span className="stack-chip__label">{name}</span>}
    </span>
  );
}
