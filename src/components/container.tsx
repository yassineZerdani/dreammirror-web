import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

/**
 * Single source of truth for horizontal page rhythm. Uses fluid padding so
 * very small phones (≤ 360 px wide) and ultra-wide desktops both get the
 * right reading frame, while the size variants control max width.
 */
export function Container({
  className,
  size = "default",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10",
        size === "default" && "max-w-page",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-7xl",
        className,
      )}
      {...rest}
    />
  );
}
