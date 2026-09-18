import Reveal, { Stagger, StaggerItem } from "./Reveal";

const CATS = [
  {
    title: "Events",
    text: "FEMUGO · Ouaga Stand in Praise · Nuit des Acteurs du Gospel · Journée Sans Téléphone",
  },
  { title: "Artists", text: "Performances · contenus promotionnels · Gospel" },
  {
    title: "Personal Branding",
    text: "Portraits · vidéos de présentation · experts · entrepreneurs · personnalités",
  },
  {
    title: "Brands",
    text: "IDA · Don Amélie · contenus commerciaux · présentation de marque",
  },
];

export default function VideoFocus() {
  return (
    <section className="relative bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            I MAKE STORIES
            <br />
            <span className="text-orange">MOVE.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl">
          {CATS.map((c) => (
            <StaggerItem key={c.title}>
              <h3 className="text-green text-sm font-bold uppercase tracking-[0.12em]">
                {c.title}
              </h3>
              <p className="mt-2 text-paper/65">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
