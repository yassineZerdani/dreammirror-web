import Image from "next/image";

import { cn } from "@/lib/cn";

export function BrandLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/branding/logo-horizontal.png"
      alt="DreamMirror"
      width={1331}
      height={368}
      sizes="(min-width: 640px) 180px, 160px"
      className={cn("h-auto w-40 sm:w-[180px]", className)}
      priority={priority}
    />
  );
}
