import type { FaqItem } from "@/data/salles.data";

/** FAQ dépliable — balises natives pour que les réponses soient présentes dans le HTML */
export function FaqList({
  items,
  title = "Questions fréquentes",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="max-w-4xl mx-auto mb-24">
      <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-center">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group bg-white border-2 rounded-lg px-6 py-4 open:border-primary/40"
          >
            <summary className="font-serif text-lg font-semibold cursor-pointer list-none flex justify-between items-center gap-4">
              <h3>{item.question}</h3>
              <span className="text-primary text-2xl transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-muted-foreground leading-relaxed mt-3">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
