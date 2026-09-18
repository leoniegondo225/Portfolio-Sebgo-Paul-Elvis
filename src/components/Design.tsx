import Reveal, { Stagger, StaggerItem } from "./Reveal";

const CARDS = [
  { n: "01", title: "Affiches", text: "Concepts visuels et supports." },
  { n: "02", title: "Identités", text: "Logos et systèmes de marque." },
  { n: "03", title: "Publications", text: "Contenus digitaux et réseaux." },
  {
    n: "04",
    title: "Direction Artistique",
    text: "Traduire une vision en univers.",
  },
];

export default function Design() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            THINK. DESIGN. COMMUNICATE.
          </h2>
        </Reveal>

        <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <StaggerItem key={c.n}>
              <div className="h-full rounded-2xl bg-green-tint p-6 md:p-7">
                <span className="font-display text-orange text-sm">
                  {c.n}
                </span>
                <h3 className="mt-2 font-bold text-lg text-green">
                  {c.title}
                </h3>
                <p className="mt-2 text-ink/70">{c.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-ink/60 max-w-xl">
            La réflexion derrière le visuel compte autant que le résultat
            final.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
