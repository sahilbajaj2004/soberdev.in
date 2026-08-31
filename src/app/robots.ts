import type { MetadataRoute } from "next";
import { SITE_URL, abs } from "@/lib/site";

/**
 * Crawlers that ground generative answers (ChatGPT, Claude, Perplexity, Gemini,
 * Copilot, Apple Intelligence). They are explicitly allowed rather than left to
 * the wildcard rule for two reasons:
 *
 *  1. Intent is documented - a future edit cannot accidentally deindex the site
 *     from AI answer engines without deleting a named entry.
 *  2. Several of these bots are blocked by default at the edge by some hosts and
 *     CDN bot-management rules; an explicit allow is the signal to permit them.
 *
 * Being cited in an AI answer requires the retrieval bot (OAI-SearchBot,
 * PerplexityBot, Claude-SearchBot) to have fetched the page. Google-Extended
 * governs AI Overviews grounding specifically and is independent of Googlebot.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google Gemini / AI Overviews grounding
  "Google-Extended",
  // Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Microsoft Copilot
  "bingbot",
  // Meta AI
  "meta-externalagent",
  "FacebookBot",
  // Others that feed retrieval corpora
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
  "Amazonbot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: abs("/sitemap.xml"),
    host: SITE_URL,
  };
}
