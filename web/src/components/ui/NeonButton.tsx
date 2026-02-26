"use client";

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md";
}

export default function NeonButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  size = "md",
}: NeonButtonProps) {
  const sizeClasses = size === "sm" ? "px-5 py-2 text-sm" : "px-8 py-3 text-base";

  const baseClasses = `font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 inline-flex items-center gap-2 cursor-pointer ${sizeClasses}`;

  const variantClasses =
    variant === "primary"
      ? "bg-neon text-midnight glow-neon hover:glow-neon-strong hover:-translate-y-0.5"
      : "bg-transparent text-neon border border-neon hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)]";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
