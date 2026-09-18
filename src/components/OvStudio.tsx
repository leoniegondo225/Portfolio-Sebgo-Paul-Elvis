import Image from "next/image";
import Reveal from "./Reveal";

export default function OvStudio() {
  return (
    <section id="studio" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <Reveal delay={0.06}>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
                OV STUDIO
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-3">
              <p className="text-orange font-bold uppercase tracking-[0.1em] text-sm">
                Video × Brand Thinking
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" className="shrink-0">
            <Image
              src="/images/logo1.jpeg"
              alt="Logo OV Studio"
              width={120}
              height={120}
              className="w-16 h-16 md:w-28 md:h-28 rounded-2xl object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-10 max-w-2xl">
          <p className="text-ink/70 text-base md:text-lg leading-relaxed">
            OV Studio est l&rsquo;espace à travers lequel je développe cette
            vision : accompagner les marques, entrepreneurs et personnalités
            dans leur manière de se présenter, de communiquer et de raconter
            leur histoire.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl">
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-green-tint p-6 md:p-7 h-full">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-green">
                Vision
              </h3>
              <p className="mt-3 text-ink/75">
                Construire des marques qui ont du sens et qui peuvent durer.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="rounded-2xl bg-stone p-6 md:p-7 h-full">
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-orange">
                Mission
              </h3>
              <p className="mt-3 text-ink/75">
                Utiliser la création, la stratégie et le storytelling pour
                renforcer leur image et leur communication.
              </p>
            </div>
          </Reveal>
        </div>

        
      </div>
    </section>
  );
}
