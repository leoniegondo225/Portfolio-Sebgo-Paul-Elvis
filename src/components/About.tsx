import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="left" className="order-2 md:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/4.jpeg"
                alt="Sebgo Paul Elvis en portrait"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal delay={0.08} className="mt-6">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.02] text-balance">
                JE NE FILME
                <br />
                PAS SEULEMENT.
                <br />
                <span className="text-orange">JE CHERCHE</span>
                <br />
                <span className="text-orange">À COMPRENDRE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-base md:text-lg text-ink/70 leading-relaxed max-w-md">
                Je suis Sebgo Paul Elvis, Real Maker Mobile &amp; Brand
                Thinker. J&rsquo;utilise la vidéo, l&rsquo;image et la
                réflexion stratégique pour aider des marques, entrepreneurs,
                artistes, organisations et personnalités à mieux raconter ce
                qu&rsquo;ils représentent.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-9">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide border-b-2 border-ink pb-1 hover:border-orange hover:text-orange transition-colors"
              >
                Voir mes réalisations
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
