import type React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { ROUTES } from "@/lib/site";

/**
 * Shared chrome for the legal pages (privacy / terms / refund).
 * Matches the site's design system: black canvas, indigo accent,
 * Syne display headings, Bricolage body, JetBrains mono labels.
 *
 * These pages previously rendered a minimal local footer containing only the
 * three legal links, which left them orphaned from the rest of the site — no
 * path back to /work, /services, /about or /contact. They now use the shared
 * header and footer so link equity flows through them like any other page.
 */
export function PolicyShell({
  path,
  title,
  updated,
  children,
}: {
  path: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  const route = ROUTES.find((r) => r.path === path);

  const policyGraph = graph(
    {
      ...webPageNode({
        path,
        title,
        description: route?.summary ?? title,
      }),
      dateModified: route?.lastModified,
    },
    breadcrumbNode(path),
  );

  return (
    <main className="relative min-h-screen bg-black text-white noise">
      <JsonLd id={`schema-policy-${path.replace(/\//g, "")}`} data={policyGraph} />
      <SiteHeader />

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
          Legal
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
          Last updated:{" "}
          {/* Machine-readable date alongside the human one. */}
          <time dateTime={route?.lastModified}>{updated}</time>
        </p>

        <div className="mt-14 space-y-12">{children}</div>
      </div>

      <SiteFooter />
    </main>
  );
}

/**
 * A single titled section of a legal document. The content wrapper styles all
 * nested <p>, <ul>, <a>, <strong> so each page can stay readable plain markup.
 */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-white/70 md:text-[15px] [&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-indigo-300 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-white/30">
        {children}
      </div>
    </section>
  );
}
