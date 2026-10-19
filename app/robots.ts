import { SITE } from "@/lib/site";
import type { MetadataRoute } from "next";

/**
 * Moteurs de recherche et assistants IA explicitement autorisés,
 * pour que le lieu puisse être cité dans leurs réponses (ChatGPT, Claude, Perplexity, Gemini…).
 */
const SEARCH_AND_AI_BOTS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
  "DuckAssistBot",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "MistralAI-User",
  "Meta-ExternalAgent",
  "Amazonbot",
  "CCBot",
];

const PRIVATE = ["/newsletter"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: SEARCH_AND_AI_BOTS, allow: "/", disallow: PRIVATE },
      { userAgent: "*", allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
