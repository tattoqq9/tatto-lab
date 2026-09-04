import type { APIRoute } from "astro";

const pageModules = import.meta.glob("./**/*.astro");

function routeFromFile(file: string): string | null {
  let route = file.replace(/^\.\//, "").replace(/\.astro$/, "");

  // Dynamic routes cannot be safely expanded here without getStaticPaths data.
  if (route.includes("[") || route === "404" || route.endsWith("/404")) {
    return null;
  }

  if (route === "index") return "/";
  route = route.replace(/\/index$/, "");
  return `/${route}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://tatto-lab.pages.dev");
  const routes = Array.from(
    new Set(Object.keys(pageModules).map(routeFromFile).filter(Boolean)),
  ).sort() as string[];

  const entries = routes
    .map((route) => `  <url><loc>${escapeXml(new URL(route, base).href)}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
