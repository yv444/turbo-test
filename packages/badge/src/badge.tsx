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

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Custom classes to merge with the root class name. */
  className?: string;
  /** The message inside the alert */
  children: string | number;
  /** The function of the badge */
  role?:
    | "neutral"
    | "info"
    | "warning"
    | "negative"
    | "positive"
    | "brand"
    | "new";
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
  let colorClass = neutral;
  switch (role) {
    case "info":
      colorClass = emphasis === "bold" ? info : infoSubtle;
      break;
    case "warning":
      colorClass = emphasis === "bold" ? warning : warningSubtle;
      break;
    case "negative":
      colorClass = emphasis === "bold" ? negative : negativeSubtle;
      break;
    case "positive":
      colorClass = emphasis === "bold" ? positive : positiveSubtle;
      break;
    case "brand":
      colorClass = emphasis === "bold" ? brand : brandSubtle;
      break;
    case "neutral":
      colorClass = emphasis === "bold" ? neutral : neutralSubtle;
      break;
    case "new":
      colorClass = emphasis === "bold" ? newStyle : newStyleSubtle;
  }
  // classnames(badge, colorClass, className)

  return (
    <span {...otherProps} className={classnames(badge, colorClass, className)}>
      {children}
    </span>
  );
}

Badge.displayName = "Badge";
