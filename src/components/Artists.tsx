import Image from "next/image";
import Reveal from "./Reveal";

export default function Artists() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02]">
            MUSIC HAS A STORY.
            <br />
            <span className="text-orange">I GIVE IT AN IMAGE.</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/3.png"
                alt="Tournage en salle de spectacle"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.08} className="sm:mt-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
              <Image
                src="/images/1.jpeg"
                alt="Portrait de Sebgo Paul Elvis"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-green">
            Artist content / Performance / Gospel / Promotion
          </p>
        </Reveal>

        
      </div>
    </section>
  );
}
