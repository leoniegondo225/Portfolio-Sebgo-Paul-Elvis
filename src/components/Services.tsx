"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Video",
    slug: "video",
    desc: "Films, événements, artistes, marques, storytelling, contenus réseaux sociaux.",
    media: { type: "video" as const, src: "/personal-branding.mp4" },
  },
  {
    n: "02",
    title: "Brand Thinking",
    slug: "brand-thinking",
    desc: "Positionnement, identité, stratégie de communication, storytelling, personal branding.",
    media: { type: "image" as const, src: "/images/jus-ida.jpeg" },
  },
  {
    n: "03",
    title: "Design",
    slug: "design",
    desc: "Identité visuelle, supports de communication, direction artistique, contenus graphiques.",
    media: { type: "image" as const, src: "/images/j5.jpeg" },
  },
  {
    n: "04",
    title: "Image",
    slug: "image",
    desc: "Portraits, événements, contenus visuels et univers photographique.",
    media: { type: "image" as const, src: "/images/2.jpeg" },
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="terrain" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            MON TERRAIN DE JEU
          </h2>
        </Reveal>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative"
        >
          <motion.div
            aria-hidden
            style={{ left: mouseX, top: mouseY }}
            animate={{
              opacity: hovered !== null ? 1 : 0,
              scale: hovered !== null ? 1 : 0.9,
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute z-20 h-32 w-48 -translate-x-1/2 -translate-y-[calc(100%+24px)] overflow-hidden rounded-xl bg-ink shadow-xl"
          >
            {hovered !== null &&
              (SERVICES[hovered].media.type === "video" ? (
                <video
                  key={SERVICES[hovered].media.src}
                  src={SERVICES[hovered].media.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={SERVICES[hovered].media.src}
                  src={SERVICES[hovered].media.src}
                  alt={SERVICES[hovered].title}
                  className="h-full w-full object-cover"
                />
              ))}
          </motion.div>

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
