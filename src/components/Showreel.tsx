"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Showreel() {
  return (
    <section className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            MY WORK.
            <br />
            <span className="text-orange">MY LANGUAGE.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 md:mt-20">
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-2 max-w-4xl">
            {[
              { src: "/images/3.jpeg", tilt: -2, hide: false },
              { src: "/images/2.jpeg", tilt: 0, hide: false },
              { src: "/images/6.jpeg", tilt: 2, hide: true },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 40, rotate: img.tilt * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: img.tilt }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotate: 0, zIndex: 10 }}
                className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 ${i === 1 ? "mt-[-6%] md:mt-[-10%]" : ""} ${img.hide ? "hidden md:block" : ""}`}
              >
                <Image
                  src={img.src}
                  alt="Aperçu du showreel OV Studio"
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 max-w-4xl">
          <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
            <motion.span
              className="h-3 w-3 rounded-full bg-orange"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-bold tracking-wide uppercase">
              Showreel / 00:45
            </span>
            <div className="ml-auto h-1 flex-1 max-w-xs rounded-full bg-white/10 overflow-hidden hidden sm:block">
              <motion.div
                className="h-full bg-orange"
                initial={{ width: "0%" }}
                whileInView={{ width: "62%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
