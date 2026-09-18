"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Media assets ─────────────────────────────────────────── */

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

const MARIAGE_MEDIA: MediaItem[] = [
  // Couple Keré — photos
  { type: "image", src: "/images/Mariage-CoupleKere1.webp",  alt: "Mariage couple Keré — 1" },
  { type: "image", src: "/images/Mariage-CoupleKere2.webp",  alt: "Mariage couple Keré — 2" },
  { type: "image", src: "/images/Mariage-CoupleKere3.webp",  alt: "Mariage couple Keré — 3" },
  { type: "image", src: "/images/Mariage-CoupleKere4.webp",  alt: "Mariage couple Keré — 4" },
  { type: "image", src: "/images/Mariage-CoupleKere5.webp",  alt: "Mariage couple Keré — 5" },
  { type: "image", src: "/images/Mariage-CoupleKere6.webp",  alt: "Mariage couple Keré — 6" },
  { type: "image", src: "/images/Mariage-CoupleKere7.webp",  alt: "Mariage couple Keré — 7" },
  { type: "image", src: "/images/Mariage-CoupleKere8.webp",  alt: "Mariage couple Keré — 8" },
  { type: "image", src: "/images/Mariage-CoupleKere9.webp",  alt: "Mariage couple Keré — 9" },
  { type: "image", src: "/images/Mariage-CoupleKere10.webp", alt: "Mariage couple Keré — 10" },
  { type: "image", src: "/images/Mariage-CoupleKere12.webp", alt: "Mariage couple Keré — 12" },
  { type: "image", src: "/images/Mariage-CoupleKere14.webp", alt: "Mariage couple Keré — 14" },
  { type: "image", src: "/images/Mariage-CoupleKere15.webp", alt: "Mariage couple Keré — 15" },
  { type: "image", src: "/images/Mariage-CoupleKere16.webp", alt: "Mariage couple Keré — 16" },
  { type: "image", src: "/images/Mariage-CoupleKere17.webp", alt: "Mariage couple Keré — 17" },
  { type: "image", src: "/images/Mariage-CoupleKere18.webp", alt: "Mariage couple Keré — 18" },
  { type: "image", src: "/images/Mariage-CoupleKere19.webp", alt: "Mariage couple Keré — 19" },
  { type: "image", src: "/images/Mariage-CoupleKere20.webp", alt: "Mariage couple Keré — 20" },
  { type: "image", src: "/images/Mariage-CoupleKere21.webp", alt: "Mariage couple Keré — 21" },
  { type: "image", src: "/images/Mariage-CoupleKere22.webp", alt: "Mariage couple Keré — 22" },
  { type: "image", src: "/images/Mariage-CoupleKere24.webp", alt: "Mariage couple Keré — 24" },
  { type: "image", src: "/images/Mariage-CoupleKere25.webp", alt: "Mariage couple Keré — 25" },
  // Mariage série — photos
  { type: "image", src: "/images/Mariage3.webp",  alt: "Mariage — 3" },
  { type: "image", src: "/images/Mariage4.webp",  alt: "Mariage — 4" },
  { type: "image", src: "/images/Mariage5.webp",  alt: "Mariage — 5" },
  { type: "image", src: "/images/Mariage6.webp",  alt: "Mariage — 6" },
  { type: "image", src: "/images/Mariage7.webp",  alt: "Mariage — 7" },
  { type: "image", src: "/images/Mariage8.webp",  alt: "Mariage — 8" },
  { type: "image", src: "/images/Mariage9.webp",  alt: "Mariage — 9" },
  { type: "image", src: "/images/Mariage10.webp", alt: "Mariage — 10" },
  { type: "image", src: "/images/Mariage11.webp", alt: "Mariage — 11" },
  // Vidéos mariage
  { type: "video", src: "/Mariage1.mp4",                 label: "Film de mariage — 1" },
  { type: "video", src: "/Mariage2.mp4",                 label: "Film de mariage — 2" },
  { type: "video", src: "/mariage-couple-ouedraogo.mp4", label: "Mariage Couple Ouédraogo" },
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
  const item = MARIAGE_MEDIA[index];
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
            {index + 1} / {MARIAGE_MEDIA.length}
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

export default function MariageCatalogue({ onClose }: { onClose: () => void }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(
    () => setLightboxIndex((i) => (i == null ? 0 : (i - 1 + MARIAGE_MEDIA.length) % MARIAGE_MEDIA.length)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i == null ? 0 : (i + 1) % MARIAGE_MEDIA.length)),
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

  const images = MARIAGE_MEDIA.filter((m) => m.type === "image");
  const videos = MARIAGE_MEDIA.filter((m) => m.type === "video");

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-0 z-[110] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 bg-[#0d0d0d] border-b border-white/10 shrink-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">
              Catalogue spécial
            </p>
            <h2 className="font-bold text-2xl md:text-3xl text-white leading-tight">
              Mariages &amp; Propositions
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
                Films · {videos.length} vidéos
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((item, idx) => {
                  const globalIdx = MARIAGE_MEDIA.indexOf(item);
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
                  const globalIdx = MARIAGE_MEDIA.indexOf(item);
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
