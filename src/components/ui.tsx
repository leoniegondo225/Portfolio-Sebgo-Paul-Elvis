import type { ReactNode } from "react";

export function Pill({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "dark" | "orange";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-white/5 text-white/70 border border-white/10"
      : tone === "orange"
        ? "bg-orange/10 text-orange border border-orange/20"
        : "bg-green-tint text-green";

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-bold tracking-[0.08em] uppercase ${toneClass}`}
    >
      {children}
    </span>
  );
}
