"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KineticText from "./KineticText";
import MagneticButton from "./MagneticButton";
import RotatingBadge from "./RotatingBadge";

const CURTAIN_DELAY = 1.55;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full overflow-hidden bg-ink"
    >
      <div className="flex flex-col md:grid md:grid-cols-[minmax(0,44%)_1fr] md:min-h-[100svh]">
        {/* Text column */}
        <div className="relative z-20 flex flex-col justify-between px-5 md:px-10 pt-20 pb-10 md:pb-16 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: CURTAIN_DELAY }}
            className="flex items-center justify-between text-paper"
          >
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-paper/60">
              Sebgo Paul Elvis
            </span>
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-orange">
              N&deg;01
            </span>
          </motion.div>

          <div className="mt-10 md:mt-0">
            <KineticText
              as="h1"
              text="REAL MAKER"
              delay={CURTAIN_DELAY + 0.05}
              className="font-display text-[11vw] leading-[0.92] sm:text-6xl md:text-[3.4vw] lg:text-[3.1vw] xl:text-6xl text-paper"
            />
            <KineticText
              as="span"
              text="MOBILE"
              delay={CURTAIN_DELAY + 0.16}
              className="font-display text-[11vw] leading-[0.92] sm:text-6xl md:text-[3.4vw] lg:text-[3.1vw] xl:text-6xl text-orange block"
            />
            <KineticText
              as="span"
              text="BRAND THINKER"
              delay={CURTAIN_DELAY + 0.27}
              className="font-display text-[6vw] leading-[0.95] sm:text-3xl md:text-[1.9vw] lg:text-[1.7vw] xl:text-3xl text-paper/85 block mt-1"
            />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: CURTAIN_DELAY + 0.55 }}
              className="mt-7 max-w-sm text-sm md:text-base text-paper/65 leading-relaxed"
            >
              Je transforme les idées, les histoires et les identités en
              images qui font ressentir quelque chose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: CURTAIN_DELAY + 0.68 }}
              className="mt-9"
            >
              <MagneticButton
                href="#univers"
                className="group inline-flex items-center gap-3 rounded-full bg-orange text-paper pl-6 pr-2 py-2 text-sm font-bold tracking-wide hover:bg-paper hover:text-ink transition-colors"
              >
                Entrer dans mon univers
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper text-ink group-hover:bg-ink group-hover:text-paper transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: CURTAIN_DELAY + 0.9 }}
            className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-paper/40 mt-10"
          >
            <span>OV Studio</span>
            <span className="text-orange">/</span>
            <span>Video × Brand Thinking</span>
          </motion.div>
        </div>

        {/* Image column */}
        <div className="relative order-1 md:order-2 h-[38svh] sm:h-[44svh] md:h-auto">
          <motion.div
            style={{ y: imgY }}
            className="absolute inset-0 -top-[10%] -bottom-[10%]"
          >
            <Image
              src="/images/1.jpeg"
              alt="Sebgo Paul Elvis, Real Maker Mobile & Brand Thinker"
              fill
              priority
              sizes="(min-width: 768px) 56vw, 100vw"
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-ink"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent md:bg-gradient-to-l md:from-transparent md:via-ink/25 md:to-ink" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-transparent to-ink/80" />

          {/* corner frame marks */}
          <div className="hidden md:block absolute top-8 left-8 h-6 w-6 border-t-2 border-l-2 border-paper/50" />
          <div className="hidden md:block absolute top-8 right-8 h-6 w-6 border-t-2 border-r-2 border-paper/50" />
          <div className="hidden md:block absolute bottom-8 right-8 h-6 w-6 border-b-2 border-r-2 border-paper/50" />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: CURTAIN_DELAY + 1 }}
            className="hidden md:block absolute bottom-8 left-8 text-paper"
          >
            <RotatingBadge size={104} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
