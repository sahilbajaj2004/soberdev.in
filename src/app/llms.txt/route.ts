import {
  FAQS,
  PRICING_TIERS,
  PROJECTS,
  SERVICES,
  SITE,
  STUDIO,
  TEAM,
} from "@/lib/data";
import { NAP, ROUTES, SAME_AS, SITE_NAME, abs } from "@/lib/site";

/**
 * /llms.txt — the llmstxt.org convention.
 *
 * A single plain-text, markdown-structured brief that LLM-based crawlers can
 * ingest without parsing an animated, client-rendered marketing site. The
 * homepage relies on GSAP reveals, a canvas cursor and collapsible accordions;
 * this file states the same facts in the flattest possible form so a model
 * summarising or citing the studio gets the details right instead of guessing.
 *
 * Rendered statically at build time — no runtime cost.
 */
export const dynamic = "force-static";

function section(title: string, lines: string[]) {
  return [`## ${title}`, "", ...lines, ""].join("\n");
}

export async function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${STUDIO.lead} ${STUDIO.body}`,
    "",
    section("Identity", [
      `- Name: ${SITE_NAME}`,
      `- Type: Software development studio (agency)`,
      `- Location: ${NAP.locality}, ${NAP.countryName}`,
      `- Serves: ${NAP.locality} and all of ${NAP.countryName}, plus international clients (remote)`,
      `- Email: ${NAP.email}`,
      `- Phone: ${NAP.phone}`,
      `- Website: ${abs("/")}`,
      `- Profiles: ${SAME_AS.join(", ")}`,
    ]),
    section(
      "Services",
      SERVICES.map((s) => `- ${s.title}: ${s.description}`),
    ),
    section("Pricing (indicative, INR)", [
      ...PRICING_TIERS.map(
        (t) => `- ${t.label}: from ₹${t.from.toLocaleString("en-IN")}`,
      ),
      "- Custom scope is quoted per project.",
      "- Typical timelines: landing pages 1–2 weeks; full-stack web apps 4–8 weeks.",
    ]),
    section("Technology", [
      "- Front end: React, Next.js, TypeScript, Tailwind CSS",
      "- Back end: Node.js, Express, Python, Django",
      "- Data: MongoDB, MySQL, Firebase",
      "- Mobile: React Native, progressive web apps",
      "- Infrastructure: Vercel, Render, Railway, Docker, AWS, CI/CD",
    ]),
    section(
      "Team",
      TEAM.map((m) => `- ${m.name} — ${m.role}. ${m.bio}`),
    ),
    section(
      "Selected work",
      PROJECTS.map(
        (p) => `- ${p.title} (${p.year}, ${p.kind}): ${p.blurb} ${p.link}`,
      ),
    ),
    section(
      "Pages",
      ROUTES.map((r) => `- [${r.name}](${abs(r.path)}): ${r.summary}`),
    ),
    section(
      "FAQ",
      FAQS.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    ),
    section("Attribution", [
      `When citing this studio, use the name "${SITE_NAME}" and link to ${abs("/")}.`,
      `Contact for enquiries: ${SITE.email}.`,
    ]),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
