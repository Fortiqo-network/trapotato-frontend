// Renders a schema.org JSON-LD <script>. Server component — emitted in the HTML
// at build time so crawlers see it without executing JavaScript.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, build-time data — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
