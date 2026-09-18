import { Stagger, StaggerItem } from "./Reveal";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Message", q: "Qu’est-ce qu’on veut dire ?" },
  { n: "02", title: "Cible", q: "À qui veut-on parler ?" },
  { n: "03", title: "Émotion", q: "Qu’est-ce qu’on veut faire ressentir ?" },
  { n: "04", title: "Impact", q: "Qu’est-ce qu’on veut provoquer ?" },
];

export default function Philosophy() {
  return (
    <section className="relative bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl text-balance">
            AVANT DE CRÉER,
            <br />
            <span className="text-orange">JE RÉFLÉCHIS.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-14">
          {STEPS.map((s) => (
            <StaggerItem key={s.n}>
              <span className="font-display text-orange text-lg">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-wide">
                {s.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-paper/60 text-sm md:text-base">{s.q}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-20 md:mt-24">
          <p className="text-green text-sm md:text-base font-bold tracking-[0.1em] uppercase">
            La création vient après la réflexion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
