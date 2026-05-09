import { NextResponse } from "next/server";

/**
 * Streams the latest Android APK from GitHub Releases through this origin.
 *
 * Why a proxy?
 * The HTML `download` attribute is **ignored on cross-origin URLs**, and several
 * mobile browsers (Samsung Internet, MIUI, in-app WebViews) save the redirect's
 * HTML body instead of following it — so the file ends up named
 * `dreammirror.apk.html`. Serving the file from our own origin with the right
 * `Content-Type` + `Content-Disposition` makes Android treat it as an APK.
 *
 * Override the upstream URL with `APK_UPSTREAM_URL` (server-only env). Default
 * tracks the latest GitHub Release asset named `dreammirror.apk`.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_UPSTREAM =
  "https://github.com/yassineZerdani/dreammirror-web/releases/latest/download/dreammirror.apk";

function upstreamUrl(): string {
  return process.env.APK_UPSTREAM_URL?.trim() || DEFAULT_UPSTREAM;
}

export async function GET() {
  const url = upstreamUrl();
  const upstream = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent": "DreamMirror-Web (+https://dreammirror.app)",
      Accept: "application/octet-stream, */*",
    },
  });

  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      {
        error: "APK is not available right now.",
        upstreamStatus: upstream.status,
      },
      { status: 502 },
    );
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/vnd.android.package-archive");
  headers.set("Content-Disposition", 'attachment; filename="dreammirror.apk"');
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);
  headers.set("Cache-Control", "public, max-age=300, s-maxage=300");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(upstream.body, { status: 200, headers });
}

export async function HEAD() {
  const url = upstreamUrl();
  const upstream = await fetch(url, { method: "HEAD", redirect: "follow" });
  const headers = new Headers();
  headers.set("Content-Type", "application/vnd.android.package-archive");
  headers.set("Content-Disposition", 'attachment; filename="dreammirror.apk"');
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) headers.set("Content-Length", contentLength);
  headers.set("Cache-Control", "public, max-age=300, s-maxage=300");
  return new Response(null, { status: upstream.ok ? 200 : 502, headers });
}
