/**
 * Injecte des données structurées schema.org (JSON-LD), lues par Google et les moteurs de recherche IA.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Échappe "<" pour qu'un texte ne puisse pas fermer la balise <script>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
