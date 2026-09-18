"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

export default function KineticText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-top pb-[0.08em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%", rotate: 6 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
