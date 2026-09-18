import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { Pill } from "./ui";

const TAGS = ["Vidéo", "Storytelling", "Brand Thinking", "Communication"];

export default function Intro() {
  return (
    <section id="univers" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-4xl text-balance">
            PLUS QU&rsquo;UNE IMAGE.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-3">
          <div className="h-1.5 w-16 bg-orange rounded-full" />
        </Reveal>

        <Reveal delay={0.15} className="mt-8 max-w-xl">
          <p className="text-base md:text-lg text-ink/70 leading-relaxed">
            Une belle image attire. Une image pensée raconte. Une image qui a
            du sens reste.
          </p>
        </Reveal>

        <Stagger className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((t) => (
            <StaggerItem key={t}>
              <Pill>{t}</Pill>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-20 md:mt-28 text-right">
          <p className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight">
            <span className="text-green">BIENVENUE DANS</span>
            <br />
            <span className="text-orange">MON UNIVERS CRÉATIF.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
