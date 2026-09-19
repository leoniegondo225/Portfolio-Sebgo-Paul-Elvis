import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const EVENT_VIDEOS = [
  {
    src: "/farida-onecca-promotion.mp4",
    label: "Sortie de promotion FASE — ONECCA Business School",
  },
  {
    src: "/abstergo-technology-launch.mp4",
    label: "Lancement Abstergo Technology — branding & accueil",
  },
];

export default function EventStories() {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Reveal delay={0.06}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02] text-balance">
                UN ÉVÉNEMENT
                <br />
                EST PLUS
                <br />
                <span className="text-orange">QU&rsquo;UNE FOULE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14} className="mt-8 max-w-sm">
              <p className="text-ink/70 leading-relaxed">
                Préparation · coulisses · public · intervenants · artistes ·
                détails · émotions · moments forts.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 space-y-1">
              {["Capter.", "Raconter.", "Faire revivre."].map((w) => (
                <p key={w} className="font-display text-2xl md:text-3xl">
                  {w}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/6.jpeg"
                alt="Sebgo Paul Elvis en tournage lors d'un événement"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        
      </div>
    </section>
  );
}
