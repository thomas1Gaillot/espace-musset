import { USAGES, usagePath } from "@/data/salles-usages.data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

/** Cartes menant aux pages par usage (formation, réunion, yoga, conférence) */
export function UsagesGrid({ exclude, className }: { exclude?: string; className?: string }) {
  const usages = USAGES.filter((u) => u.slug !== exclude);

  return (
    <div className={cn("grid sm:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {usages.map((usage) => (
        <Link
          key={usage.slug}
          href={usagePath(usage)}
          className="group bg-white rounded-xl border-2 border-gray-100 overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={usage.image}
              alt={usage.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5">
            <h3 className="font-serif text-xl font-bold mb-2">{usage.label}</h3>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Voir la salle adaptée <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
