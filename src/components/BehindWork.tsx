import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { Pill } from "./ui";

const KIT = [
  "Smartphone",
  "Blackmagic Camera",
  "Stabilisateur",
  "Tournage",
  "Montage",
  "Préparation",
  "Direction",
  "Repérage",
];

export default function BehindWork() {
  return (
    <section className="relative bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            WHAT YOU DON&rsquo;T SEE.
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-4">
          <p className="text-orange text-sm md:text-base font-bold uppercase tracking-[0.1em]">
            The real maker mobile in action
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-14 md:mt-16">
          <div className="grid grid-cols-2 gap-1.5 md:gap-2 rounded-3xl overflow-hidden">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/3.png"
                alt="Sebgo Paul Elvis filmant avec un smartphone stabilisé"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/6.jpeg"
                alt="Sebgo Paul Elvis cadrant une prise de vue"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap gap-3">
          {KIT.map((k) => (
            <StaggerItem key={k}>
              <Pill tone="dark">{k}</Pill>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
