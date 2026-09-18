import Reveal, { Stagger, StaggerItem } from "./Reveal";

const STEPS = [
  { n: "01", title: "Écouter", text: "Comprendre le projet." },
  { n: "02", title: "Réfléchir", text: "Clarifier le message et la direction." },
  { n: "03", title: "Concevoir", text: "Définir l’univers visuel." },
  { n: "04", title: "Produire", text: "Filmer, créer et monter." },
  { n: "05", title: "Raconter", text: "Créer un contenu qui a du sens." },
];

export default function Method() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            DE L&rsquo;IDÉE À L&rsquo;IMAGE.
          </h2>
        </Reveal>

        <Stagger className="mt-16 md:mt-20 max-w-2xl">
          {STEPS.map((s, i) => (
            <StaggerItem key={s.n}>
              <div
                className={`flex items-center gap-6 py-6 ${i !== STEPS.length - 1 ? "border-b border-ink/10" : ""}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange text-paper font-display text-sm">
                  {s.n}
                </span>
                <h3 className="font-display text-xl md:text-2xl w-40 shrink-0">
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-ink/60 hidden sm:block">{s.text}</p>
              </div>
              <p className="text-ink/60 sm:hidden pl-[68px] -mt-4 pb-2">
                {s.text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
