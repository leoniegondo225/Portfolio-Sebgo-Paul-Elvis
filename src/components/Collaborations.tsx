import Reveal, { Stagger, StaggerItem } from "./Reveal";

const ITEMS = [
  "Don Amélie / IDA",
  "Faso Events",
  "Mei-CI",
  "Canal Burkina",
  "Abstergo Technology",
  "Artistes & Organisations",
  "Événements Privés",
  "Événements Professionnels",
];

export default function Collaborations() {
  return (
    <section className="relative bg-green-tint py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02]">
            DES UNIVERS DIFFÉRENTS.
            <br />
            <span className="text-orange">UNE MÊME EXIGENCE.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-5">
          {ITEMS.map((it) => (
            <StaggerItem key={it}>
              <div className="rounded-2xl bg-paper px-6 py-6 font-bold text-green">
                {it}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
