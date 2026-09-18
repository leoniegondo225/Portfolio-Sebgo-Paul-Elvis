import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATALOGUES, getCatalogue } from "@/lib/catalogue";

export function generateStaticParams() {
  return CATALOGUES.map((c) => ({ category: c.slug }));
}

export default async function CataloguePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const catalogue = getCatalogue(category);

  if (!catalogue) notFound();

  return (
    <main className="min-h-screen bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Link
          href="/#terrain"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink/50 hover:text-orange transition-colors"
        >
          ← Retour
        </Link>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
          {catalogue.title.toUpperCase()}
        </h1>

        <p className="mt-4 max-w-xl text-ink/70 leading-relaxed">
          {catalogue.intro}
        </p>

        <div className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {catalogue.items.map((item, i) => (
            <div key={`${item.src}-${i}`} className="rounded-2xl overflow-hidden bg-cream">
              <div className="relative aspect-[4/5] bg-ink">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <p className="px-4 py-3 text-sm text-ink/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
