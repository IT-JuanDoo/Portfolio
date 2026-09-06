import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  download?: string | boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black font-semibold hover:bg-neutral-200",
  outline:
    "border border-white/15 bg-transparent text-foreground hover:border-white/40 hover:text-white",
  ghost: "text-muted hover:text-foreground",
};

export function Button({
  className,
  variant = "primary",
  href,
  external,
  download,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300",
    variants[variant],
    className,
  );

  const content = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          download={download || undefined}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
