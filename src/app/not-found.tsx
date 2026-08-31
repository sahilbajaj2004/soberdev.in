import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import NotFound from "@/components/layout/NotFound";

/**
 * No canonical is declared: a 404 that advertises a canonical URL is what Search
 * Console reports as a soft 404.
 *
 * The robots directives are declared explicitly and must stay. The root layout
 * sets `index: true, follow: true`, and metadata is inherited — so omitting this
 * block leaves the 404 emitting Next's automatic `noindex` alongside an inherited
 * `index, follow`, which are directly contradictory. `googleBot` is overridden
 * too, otherwise the layout's Googlebot-specific `index` directive survives.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-black text-white noise">
      <SiteHeader />
      <NotFound />
      <SiteFooter />
    </main>
  );
}
