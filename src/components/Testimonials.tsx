import Reveal, { Stagger, StaggerItem } from "./Reveal";

const QUOTES = [
  {
    quote:
      "Sebgo a compris notre marque en une seule séance. Les vidéos qu'il a livrées ont doublé notre engagement en un mois.",
    meta: "Amélie K. — Fondatrice, IDA / Don Amélie",
  },
  {
    quote:
      "Un vrai regard de brand thinker, pas juste un cadreur. Il pose les bonnes questions avant même d'allumer la caméra.",
    meta: "Farid O. — Organisateur, Faso Events",
  },
  {
    quote:
      "Rigoureux, rapide, et surtout il raconte une histoire. Nos artistes se sentent bien mis en valeur à chaque tournage.",
    meta: "Grace N. — Coordination, Nuit des Acteurs du Gospel",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02]">
            CEUX QUI ONT VU LE TRAVAIL.
          </h2>
        </Reveal>

        <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-3 gap-4 md:gap-5">
          {QUOTES.map((q) => (
            <StaggerItem key={q.meta}>
              <div className="h-full rounded-2xl bg-stone p-6 md:p-7">
                <span className="font-display text-3xl text-orange leading-none">
                  &ldquo;
                </span>
                <p className="mt-3 text-ink/75 italic">&ldquo;{q.quote}&rdquo;</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-wide text-green">
                  {q.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
