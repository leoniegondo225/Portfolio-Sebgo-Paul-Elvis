"use client";

import { useState } from "react";
import { Stagger, StaggerItem } from "./Reveal";
import Reveal from "./Reveal";
import MariageCatalogue from "./MariageCatalogue";
import IdaCatalogue from "./IdaCatalogue";

const PROJECTS = [
  { title: "IDA — Don Amélie", tint: true, image: "/images/jus-ida.jpeg", catalogue: "ida" },
  { title: "Faso Events", tint: false, video: "/faso-events-aid-el-fitr.mp4" },
  { title: "Mei-CI", tint: true },
  { title: "Femugo", tint: true },
  { title: "La Nuit des Acteurs du Gospel", tint: false },
  { title: "Ouaga Stand in Praise", tint: true, video: "/ouaga-stand-in-praise.mp4" },
  { title: "Journée Sans Téléphone", tint: false, video: "/Journ%C3%A9e%20sans%20t%C3%A9l%C3%A9phone.mp4" },
  { title: "Artistes Gospel", tint: true },
  { title: "Mariages & Propositions", tint: false, video: "/mariage-couple-ouedraogo.mp4", catalogue: "mariage" },
];

export default function Projects() {
  const [showMariage, setShowMariage] = useState(false);
  const [showIda, setShowIda] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="projets" className="relative bg-paper py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
              DES PROJETS. DES HISTOIRES.
            </h2>
          </Reveal>

          <Stagger className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {PROJECTS.map((p) => (
              <StaggerItem key={p.title}>
                {p.catalogue === "mariage" || p.catalogue === "ida" ? (
                  <button
                    onClick={() => p.catalogue === "ida" ? setShowIda(true) : setShowMariage(true)}
                    className={`group block w-full h-full text-left rounded-2xl border-t-4 border-orange p-6 md:p-7 transition-transform hover:-translate-y-1 ${
                      p.tint ? "bg-green-tint" : "bg-stone"
                    }`}
                  >
                    <h3 className="font-bold text-lg leading-snug pr-4">{p.title}</h3>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-green">
                      Projet / Étude de cas
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                ) : p.video ? (
                  <button
                    onClick={() => setActiveVideo(p.video!)}
                    className={`group block w-full h-full text-left rounded-2xl border-t-4 border-orange p-6 md:p-7 transition-transform hover:-translate-y-1 ${
                      p.tint ? "bg-green-tint" : "bg-stone"
                    }`}
                  >
                    <h3 className="font-bold text-lg leading-snug pr-4">{p.title}</h3>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-green">
                      ▶ Voir la vidéo
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className={`group block h-full rounded-2xl border-t-4 border-orange p-6 md:p-7 transition-transform hover:-translate-y-1 ${
                      p.tint ? "bg-green-tint" : "bg-stone"
                    }`}
                  >
                    <h3 className="font-bold text-lg leading-snug pr-4">{p.title}</h3>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-green">
                      Projet / Étude de cas
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Video lightbox modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl font-bold hover:opacity-70 transition-opacity"
              aria-label="Fermer"
            >
              ✕
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {showMariage && <MariageCatalogue onClose={() => setShowMariage(false)} />}
      {showIda && <IdaCatalogue onClose={() => setShowIda(false)} />}
    </>
  );
}
