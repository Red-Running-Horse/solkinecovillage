import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseSite =
    site ?? new URL("https://replace-with-your-domain.example");
  const sitemap = new URL("sitemap-index.xml", baseSite);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
