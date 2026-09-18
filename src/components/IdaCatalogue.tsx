"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Media assets ─────────────────────────────────────────── */

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

const IDA_MEDIA: MediaItem[] = [
  // Vidéos IDA
  { type: "video", src: "/jusida-presentation.mp4",  label: "Jus IDA — Présentation" },
  { type: "video", src: "/ida-sante-ananas.mp4",     label: "Ida Santé — les bienfaits du jus d'ananas" },
  { type: "video", src: "/ida-depistage-72h.mp4",    label: "IDA mobilisée — 72h de dépistage" },
  { type: "video", src: "/ida-equipe-2026.mp4",      label: "L'équipe IDA — vœux 2026" },
  // Photos jus IDA
  { type: "image", src: "/images/jus-ida.jpeg", alt: "Jus IDA — Don Amélie" },
  { type: "image", src: "/images/j1.jpeg",  alt: "Jus IDA — J1" },
  { type: "image", src: "/images/j2.jpeg",  alt: "Jus IDA — J2" },
  { type: "image", src: "/images/j3.jpeg",  alt: "Jus IDA — J3" },
  { type: "image", src: "/images/j4.jpeg",  alt: "Jus IDA — J4" },
  { type: "image", src: "/images/j5.jpeg",  alt: "Jus IDA — J5" },
  { type: "image", src: "/images/j6.jpeg",  alt: "Jus IDA — J6" },
  { type: "image", src: "/images/j8.jpeg",  alt: "Jus IDA — J8" },
  { type: "image", src: "/images/j9.jpeg",  alt: "Jus IDA — J9" },
  { type: "image", src: "/images/j10.jpeg", alt: "Jus IDA — J10" },
  { type: "image", src: "/images/j11.jpeg", alt: "Jus IDA — J11" },
  { type: "image", src: "/images/j12.jpeg", alt: "Jus IDA — J12" },
  { type: "image", src: "/images/j14.jpeg", alt: "Jus IDA — J14" },
  { type: "image", src: "/images/j15.jpeg", alt: "Jus IDA — J15" },
  { type: "image", src: "/images/j17.jpeg", alt: "Jus IDA — J17" },
  { type: "image", src: "/images/j20.jpeg", alt: "Jus IDA — J20" },
  { type: "image", src: "/images/j21.jpeg", alt: "Jus IDA — J21" },
  { type: "image", src: "/images/j22.jpeg", alt: "Jus IDA — J22" },
  { type: "image", src: "/images/j24.jpeg", alt: "Jus IDA — J24" },
  { type: "image", src: "/images/j26.jpeg", alt: "Jus IDA — J26" },
  { type: "image", src: "/images/j27.jpeg", alt: "Jus IDA — J27" },
  { type: "image", src: "/images/j28.jpeg", alt: "Jus IDA — J28" },
  { type: "image", src: "/images/j29.jpeg", alt: "Jus IDA — J29" },
  { type: "image", src: "/images/j30.jpeg", alt: "Jus IDA — J30" },
  { type: "image", src: "/images/j31",      alt: "Jus IDA — J31" },
];

/* ─── Lightbox ─────────────────────────────────────────────── */

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = IDA_MEDIA[index];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    videoRef.current?.load();
  }, [index]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4 max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
        ) : (
          <video
            ref={videoRef}
            src={item.src}
            controls
            autoPlay
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
          />
        )}

        <div className="absolute bottom-0 left-0 right-0 text-center pb-3 pt-8 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl pointer-events-none">
          <p className="text-white/80 text-sm font-medium tracking-wide">
            {item.type === "image" ? item.alt : item.label}
          </p>
          <p className="text-white/40 text-xs mt-1">
            {index + 1} / {IDA_MEDIA.length}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 flex items-center justify-center text-white text-2xl transition"
        aria-label="Précédent"
      >
        ‹
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 flex items-center justify-center text-white text-2xl transition"
        aria-label="Suivant"
      >
        ›
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 flex items-center justify-center text-white text-lg transition"
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
}

/* ─── Thumbnail ─────────────────────────────────────────────── */

function Thumb({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  if (item.type === "video") {
    return (
      <button
        onClick={onClick}
        className="group relative aspect-video w-full overflow-hidden rounded-xl bg-black cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        <video
          src={item.src + "#t=0.5"}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-xs font-medium truncate">{item.label}</p>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group relative aspect-square w-full overflow-hidden rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </button>
  );
}

/* ─── Main catalogue modal ──────────────────────────────────── */

export default function IdaCatalogue({ onClose }: { onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () => setLightboxIndex((i) => (i == null ? 0 : (i - 1 + IDA_MEDIA.length) % IDA_MEDIA.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i == null ? 0 : (i + 1) % IDA_MEDIA.length)),
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex === null) onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, lightboxIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const videos = IDA_MEDIA.filter((m) => m.type === "video");
  const images = IDA_MEDIA.filter((m) => m.type === "image");

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-0 z-[110] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 bg-[#0d0d0d] border-b border-white/10 shrink-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1">
              Étude de cas · Marque de jus
            </p>
            <h2 className="font-bold text-2xl md:text-3xl text-white leading-tight">
              IDA — Don Amélie
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
            aria-label="Fermer le catalogue"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto bg-[#111] px-6 md:px-10 py-8 space-y-10">
          {/* Videos */}
          {videos.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                Vidéos · {videos.length} films
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((item, idx) => {
                  const globalIdx = IDA_MEDIA.indexOf(item);
                  return <Thumb key={idx} item={item} onClick={() => openAt(globalIdx)} />;
                })}
              </div>
            </section>
          )}

          {/* Photos */}
          {images.length > 0 && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                Photos · {images.length} clichés
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {images.map((item, idx) => {
                  const globalIdx = IDA_MEDIA.indexOf(item);
                  return <Thumb key={idx} item={item} onClick={() => openAt(globalIdx)} />;
                })}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
