"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Video",
    slug: "video",
    desc: "Films, événements, artistes, marques, storytelling, contenus réseaux sociaux.",
  },
  {
    n: "02",
    title: "Brand Thinking",
    slug: "brand-thinking",
    desc: "Positionnement, identité, stratégie de communication, storytelling, personal branding.",
  },
  {
    n: "03",
    title: "Design",
    slug: "design",
    desc: "Identité visuelle, supports de communication, direction artistique, contenus graphiques.",
  },
  {
    n: "04",
    title: "Image",
    slug: "image",
    desc: "Portraits, événements, contenus visuels et univers photographique.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="terrain" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            MON TERRAIN DE JEU
          </h2>
        </Reveal>

        <div className="relative">

          <Stagger className="mt-14 md:mt-16 flex flex-col divide-y divide-ink/10 border-y border-ink/10">
            {SERVICES.map((s, i) => (
            <StaggerItem key={s.n}>
              <Link
                href={`/catalogue/${s.slug}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_auto] items-center gap-x-6 gap-y-2 py-8 md:py-10 overflow-hidden"
              >
                <motion.div
                  aria-hidden
                  initial={false}
                  animate={{ x: hovered === i ? "0%" : "-100%" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-ink -z-10"
                />
                <span
                  className={`font-display text-sm md:text-base transition-colors ${hovered === i ? "text-orange" : "text-ink/40"}`}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className={`font-display text-2xl md:text-4xl tracking-wide transition-colors ${hovered === i ? "text-paper" : "text-ink"}`}
                  >
                    {s.title.toUpperCase()}
                  </h3>
                  <p
                    className={`mt-2 max-w-xl text-sm md:text-base transition-colors ${hovered === i ? "text-paper/70" : "text-ink/60"}`}
                  >
                    {s.desc}
                  </p>
                </div>
                <span
                  className={`hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition-colors ${hovered === i ? "text-orange" : "text-ink/40"}`}
                >
                  Explorer
                  <span
                    className={`transition-transform duration-300 ${hovered === i ? "translate-x-1" : ""}`}
                  >
                    →
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
