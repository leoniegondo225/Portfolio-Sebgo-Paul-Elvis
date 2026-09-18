"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";
import { Pill } from "./ui";
import TiltPortrait from "./TiltPortrait";
import RotatingBadge from "./RotatingBadge";

const TAGS = [
  "Portraits",
  "Présentation",
  "Experts",
  "Entrepreneurs",
  "Personnalités",
];

const CLIPS = [
  { src: "/personal-branding.mp4", label: "Personal branding" },
  { src: "/farida-adeline-reels.mp4", label: "Farida Adeline Compaoré" },
  { src: "/toro-bespoke.mp4", label: "Toro Bespoke" },
];

export default function PersonalBranding() {
  return (
    <section className="relative bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02]">
            YOUR IMAGE SPEAKS
            <br />
            <span className="text-orange">BEFORE YOU DO.</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal direction="left">
            <TiltPortrait className="relative aspect-[3/4] w-full">
              <div className="relative aspect-[3/4] w-full">
                <div className="absolute inset-0 overflow-hidden rounded-3xl bg-white/5">
                  <Image
                    src="/images/2.jpeg"
                    alt="Sebgo Paul Elvis présentant son travail"
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover object-center"
                  />

                  {/* dark duotone depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/30" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange/20 mix-blend-multiply" />
                </div>

                {/* camera viewfinder overlay, floats above the plane in 3D */}
                <div
                  style={{ transform: "translateZ(46px)" }}
                  className="absolute inset-4 pointer-events-none"
                >
                  <span className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-orange" />
                  <span className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-orange" />
                  <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-orange" />
                  <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-orange" />

                  <div className="absolute top-0 left-9 flex items-center gap-2">
                    <motion.span
                      className="h-2 w-2 rounded-full bg-orange"
                      animate={{ opacity: [1, 0.25, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-paper/80">
                      Rec
                    </span>
                  </div>
                </div>

                <div
                  style={{ transform: "translateZ(60px)" }}
                  className="absolute -bottom-6 -right-6 text-paper"
                >
                  <RotatingBadge
                    text="MOBILE FILMMAKER • REAL MAKER • "
                    size={104}
                  />
                </div>
              </div>
            </TiltPortrait>
          </Reveal>

          <div>
            <Stagger className="flex flex-wrap gap-3">
              {TAGS.map((t) => (
                <StaggerItem key={t}>
                  <Pill tone="dark">{t}</Pill>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-8 max-w-md">
              <p className="text-paper/70 leading-relaxed">
                Construire une présence, ce n&rsquo;est pas seulement être
                visible. C&rsquo;est être identifiable.
              </p>
            </Reveal>
          </div>
        </div>

     
      </div>
    </section>
  );
}
