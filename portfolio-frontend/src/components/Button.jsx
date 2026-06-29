import { Link } from "react-router-dom";

const variants = {
  primary: "primary-button",
  secondary: "secondary-button",
};

export default function Button({
  children,
  to,
  href,
  download = false,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} download={download} className={classes} {...props}>
      {children}
    </a>
  );
}
