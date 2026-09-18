import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section className="relative bg-green text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.98] max-w-3xl text-balance">
            JE NE VEUX PAS
            <br />
            SEULEMENT CRÉER
            <br />
            <span className="text-orange">DU CONTENU.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14} className="mt-10 max-w-xl">
          <p className="text-paper/90 text-base md:text-lg leading-relaxed font-medium">
            Je veux contribuer à construire des marques africaines fortes,
            conscientes de leur identité, capables de raconter leur propre
            histoire et de laisser quelque chose derrière elles.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 md:mt-20 space-y-2">
          <p className="font-display text-xl md:text-3xl text-ink">
            CREATE WITH INTENTION.
          </p>
          <p className="font-display text-xl md:text-3xl text-orange">
            TELL WITH EMOTION.
          </p>
          <p className="font-display text-xl md:text-3xl text-paper">
            BUILD TO LAST.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
