import classnames from "classnames";
import * as styles from "./badge.module.css";

const {
  badge,
  brand,
  brandSubtle,
  info,
  infoSubtle,
  warning,
  warningSubtle,
  negative,
  negativeSubtle,
  positive,
  positiveSubtle,
  neutral,
  neutralSubtle,
  newStyle,
  newStyleSubtle,
} = styles;

type RoleType =
  | "neutral"
  | "info"
  | "warning"
  | "negative"
  | "positive"
  | "brand"
  | "new";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Custom classes to merge with the root class name. */
  className?: string;
  /** The message inside the alert */
  children: string | number;
  /** The function of the badge */
  role?: RoleType;
  /** The type of the badge */
  emphasis?: "bold" | "subtle";
}

export function Badge({
  className,
  children,
  role = "neutral",
  emphasis = "subtle",
  ...otherProps
}: BadgeProps): JSX.Element {
  let colorClass: string = neutral as string;
  switch (role) {
    case "info":
      colorClass =
        emphasis === "bold" ? (info as string) : (infoSubtle as string);
      break;
    case "warning":
      colorClass =
        emphasis === "bold" ? (warning as string) : (warningSubtle as string);
      break;
    case "negative":
      colorClass =
        emphasis === "bold" ? (negative as string) : (negativeSubtle as string);
      break;
    case "positive":
      colorClass =
        emphasis === "bold" ? (positive as string) : (positiveSubtle as string);
      break;
    case "brand":
      colorClass =
        emphasis === "bold" ? (brand as string) : (brandSubtle as string);
      break;
    case "neutral":
      colorClass =
        emphasis === "bold" ? (neutral as string) : (neutralSubtle as string);
      break;
    case "new":
      colorClass =
        emphasis === "bold" ? (newStyle as string) : (newStyleSubtle as string);
  }
  // classnames(badge, colorClass, className)

  return (
    <span
      {...otherProps}
      className={classnames(badge as string, colorClass, className)}
    >
      {children}
    </span>
  );
}

Badge.displayName = "Badge";
