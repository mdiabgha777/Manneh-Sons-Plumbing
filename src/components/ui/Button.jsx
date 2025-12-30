import React from "react";

const VARIANTS = {
  default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-light)]",
  destructive: "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--destructive-foreground)]/10",
  outline: "border border-[var(--input)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
  secondary: "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary-foreground)]/20",
  ghost: "bg-[var(--accent)] text-white",
  accent: "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-dark)]",
  link: "text-[var(--primary)] underline-offset-4 hover:underline",
};

const SIZES = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  component: Component = "button",
  type = "button",
  ...props
}) {
  return (
    <Component
      type={Component === "button" ? type : undefined} // only set type if it's a button
      className={[
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(" ")}
      {...props} // ensures href, target, rel, onClick, etc. work
    >
      {children}
    </Component>
  );
}