"use client";

import { motion } from "framer-motion";

export default function RotatingBadge({
  text = "REAL MAKER MOBILE • BRAND THINKER • ",
  size = 120,
  className = "",
}: {
  text?: string;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      >
        <defs>
          <path
            id="badge-circle-path"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text fill="currentColor" fontSize="7.4" letterSpacing="1.5">
          <textPath href="#badge-circle-path">{text}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange text-paper text-sm">
          ↓
        </span>
      </div>
    </div>
  );
}
