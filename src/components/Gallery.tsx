import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const LABELS = ["Portraits", "Événements", "Lifestyle", "Détails", "Moments"];

export default function Gallery() {
  return (
    <section className="relative bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            FRAME BY FRAME.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid md:grid-cols-[1.4fr_1fr] gap-4 md:gap-5">
          <Reveal direction="left" className="relative">
            <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[360px] overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/2.jpeg"
                alt="Portrait principal de Sebgo Paul Elvis"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 md:gap-5">
            <Stagger className="flex flex-wrap gap-2">
              {LABELS.map((l) => (
                <StaggerItem key={l}>
                  <span className="inline-flex rounded-full bg-paper px-4 py-2 text-xs font-bold uppercase tracking-wide text-green">
                    {l}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="grid grid-cols-2 gap-4 md:gap-5 flex-1">
              <Reveal direction="up" delay={0.1}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream h-full min-h-[140px]">
                  <Image
                    src="/images/5.jpeg"
                    alt="Sebgo Paul Elvis en tournage"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.18}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream h-full min-h-[140px]">
                  <Image
                    src="/images/6.jpeg"
                    alt="Sebgo Paul Elvis en tournage, détail"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
