"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function CurtainIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduced) document.body.style.overflow = "hidden";

    const t = setTimeout(
      () => {
        document.body.style.overflow = "";
        setShow(false);
      },
      reduced ? 0 : 1850
    );

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden motion-reduce:hidden">
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-101%" }}
        transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        className="absolute inset-y-0 left-0 w-1/2 bg-ink"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "101%" }}
        transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
        className="absolute inset-y-0 right-0 w-1/2 bg-ink"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.12] }}
        transition={{ duration: 1.2, times: [0, 0.3, 0.65, 1], ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/images/logo2.jpeg"
          alt="OV Studio"
          width={64}
          height={64}
          className="w-14 h-14 rounded-xl object-cover"
        />
      </motion.div>
    </div>
  );
}
