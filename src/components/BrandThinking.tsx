import Reveal, { Stagger, StaggerItem } from "./Reveal";

const CARDS = [
  { title: "Positionnement", q: "Quelle place la marque veut-elle occuper ?" },
  { title: "Identité", q: "Qu’est-ce qu’elle représente ?" },
  { title: "Storytelling", q: "Quelle histoire raconte-t-elle ?" },
  { title: "Communication", q: "Quel message transmet-elle ?" },
  {
    title: "Personal Branding",
    q: "Comment une personne construit-elle son image ?",
  },
  {
    title: "Direction Artistique",
    q: "Comment traduire une vision en univers visuel ?",
  },
];

export default function BrandThinking() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02] max-w-3xl text-balance">
            UNE IMAGE SANS INTENTION
            <br />
            <span className="text-orange">RESTE UNE IMAGE.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-5">
          {CARDS.map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full rounded-2xl bg-stone p-6 md:p-7 hover:bg-green-tint transition-colors">
                <h3 className="font-bold text-green text-lg">{c.title}</h3>
                <p className="mt-2 text-ink/70">{c.q}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
