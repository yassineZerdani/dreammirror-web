import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-ring select-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-moon text-night hover:bg-moondim hover:translate-y-[-1px] active:translate-y-0 shadow-soft",
  secondary:
    "border border-line/80 bg-deep/85 text-moon hover:bg-deep hover:border-accent/60",
  ghost:
    "text-moon hover:text-moon hover:bg-deep/60",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children: React.ReactNode;
};

type ButtonAsAnchorProps = CommonProps & {
  href: string;
  download?: boolean | string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

type ButtonAsButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  if ("href" in props && props.href !== undefined) {
    const {
      variant = "primary",
      size = "md",
      className,
      leadingIcon,
      trailingIcon,
      children,
      href,
      external,
      download,
      ...anchorRest
    } = props;

    const composed = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    const content = (
      <>
        {leadingIcon ? <span aria-hidden>{leadingIcon}</span> : null}
        <span>{children}</span>
        {trailingIcon ? <span aria-hidden>{trailingIcon}</span> : null}
      </>
    );

    const isExternal =
      external ?? (href.startsWith("http://") || href.startsWith("https://"));

    if (isExternal || download !== undefined) {
      return (
        <a
          href={href}
          className={composed}
          rel={isExternal ? "noopener noreferrer" : undefined}
          target={isExternal ? "_blank" : undefined}
          download={download}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={composed} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    leadingIcon,
    trailingIcon,
    children,
    href: _ignoredHref,
    ...buttonRest
  } = props;
  void _ignoredHref;

  const composed = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  return (
    <button className={composed} {...buttonRest}>
      {leadingIcon ? <span aria-hidden>{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span aria-hidden>{trailingIcon}</span> : null}
    </button>
  );
}
