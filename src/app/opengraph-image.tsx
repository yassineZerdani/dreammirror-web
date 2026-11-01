import { readFile } from "node:fs/promises";
import path from "node:path";

import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.description}`;

export default async function OG() {
  const artwork = await readFile(path.join(process.cwd(), "public/branding/og-image.png"));
  return new Response(new Uint8Array(artwork), { headers: { "Content-Type": contentType } });
}
