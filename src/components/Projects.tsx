import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const PROJECTS = [
  { title: "IDA — Don Amélie", tint: true, image: "/images/jus-ida.jpeg" },
  { title: "Faso Events", tint: false, video: "/faso-events-aid-el-fitr.mp4" },
  { title: "Mei-CI", tint: true },
  { title: "Femugo", tint: true },
  { title: "La Nuit des Acteurs du Gospel", tint: false },
  { title: "Ouaga Stand in Praise", tint: true, video: "/ouaga-stand-in-praise.mp4" },
  { title: "Journée Sans Téléphone", tint: false, video: "/une-journee.mp4" },
  { title: "Artistes Gospel", tint: true },
  { title: "Mariages & Propositions", tint: false, video: "/mariage-couple-ouedraogo.mp4" },
];

export default function Projects() {
  return (
    <section id="projets" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            DES PROJETS. DES HISTOIRES.
          </h2>
        </Reveal>

        <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PROJECTS.map((p) => (
            <StaggerItem key={p.title}>
              <a
                href="#contact"
                className={`group block h-full rounded-2xl border-t-4 border-orange p-6 md:p-7 transition-transform hover:-translate-y-1 ${
                  p.tint ? "bg-green-tint" : "bg-stone"
                }`}
              >
                {(p.image || p.video) && (
                  <div className="relative -mx-6 -mt-6 md:-mx-7 md:-mt-7 mb-5 aspect-video overflow-hidden rounded-t-2xl bg-ink">
                    {p.video ? (
                      <video
                        src={p.video}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={p.image!}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                )}
                <h3 className="font-bold text-lg leading-snug pr-4">
                  {p.title}
                </h3>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-green">
                  Projet / Étude de cas
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
