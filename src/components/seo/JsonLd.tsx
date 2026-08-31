/**
 * Renders a JSON-LD graph into the document.
 *
 * Next.js hoists <script type="application/ld+json"> from a page/layout body
 * into <head> during streaming, so this is the framework-recommended pattern -
 * no next/script needed, and it stays server-rendered so crawlers that do not
 * execute JavaScript still see the markup in the initial HTML response.
 */
export default function JsonLd({
  id,
  data,
}: {
  id: string;
  data: Record<string, unknown>;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // Schema payloads are built from local constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
