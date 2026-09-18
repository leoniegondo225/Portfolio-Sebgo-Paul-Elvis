export type MediaItem = {
  type: "video" | "image";
  src: string;
  label: string;
};

export type Catalogue = {
  slug: string;
  title: string;
  intro: string;
  items: MediaItem[];
};

const ALL_VIDEOS: MediaItem[] = [
  { type: "video", src: "/personal-branding.mp4", label: "Personal branding" },
  { type: "video", src: "/farida-adeline-reels.mp4", label: "Farida Adeline Compaoré" },
  { type: "video", src: "/toro-bespoke.mp4", label: "Toro Bespoke" },
  { type: "video", src: "/farida-onecca-promotion.mp4", label: "Sortie de promotion FASE — ONECCA Business School" },
  { type: "video", src: "/abstergo-technology-launch.mp4", label: "Lancement Abstergo Technology" },
  { type: "video", src: "/canal-burkina-royal.mp4", label: "Branding Canal+ Burkina — lancement #ROYAL" },
  { type: "video", src: "/canal-burkina-royal-1.mp4", label: "Branding Canal+ Burkina — lancement #ROYAL (2)" },
  { type: "video", src: "/entreprise.mp4", label: "OV Studio × Entreprise — contenu corporate" },
];

const PORTRAIT_IMAGES: MediaItem[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  type: "image",
  src: `/images/${n}.jpeg`,
  label: "Sebgo Paul Elvis — portrait & tournage",
}));

const JUS_IDA_IMAGES: MediaItem[] = [
  "j1", "j2", "j3", "j4", "j5", "j6", "j8", "j9", "j10", "j11", "j12", "j14",
  "j15", "j17", "j20", "j21", "j22", "j24", "j26", "j27", "j28", "j29", "j30",
].map((n) => ({
  type: "image",
  src: `/images/${n}.jpeg`,
  label: "IDA / Don Amélie — visuel marque de jus",
}));


export const CATALOGUES: Catalogue[] = [
  {
    slug: "video",
    title: "Video",
    intro:
      "Films, événements, artistes, marques, storytelling, contenus réseaux sociaux.",
    items: ALL_VIDEOS,
  },
  {
    slug: "brand-thinking",
    title: "Brand Thinking",
    intro:
      "Positionnement, identité, stratégie de communication, storytelling, personal branding.",
    items: [

      { type: "video", src: "/personal-branding.mp4", label: "Personal branding" },
      { type: "video", src: "/farida-adeline-reels.mp4", label: "Farida Adeline Compaoré" },
      { type: "video", src: "/farida-onecca-promotion.mp4", label: "Sortie de promotion FASE — ONECCA Business School" },
      { type: "video", src: "/toro-bespoke.mp4", label: "Toro Bespoke" },
      { type: "video", src: "/abstergo-technology-launch.mp4", label: "Lancement Abstergo Technology" },
      { type: "video", src: "/canal-burkina-royal.mp4", label: "Branding Canal+ Burkina — lancement #ROYAL" },
      { type: "video", src: "/canal-burkina-royal-1.mp4", label: "Branding Canal+ Burkina — lancement #ROYAL (2)" },
    ],
  },
  {
    slug: "design",
    title: "Design",
    intro:
      "Identité visuelle, supports de communication, direction artistique, contenus graphiques.",
    items: [],
  },
  {
    slug: "image",
    title: "Image",
    intro: "Portraits, événements, contenus visuels et univers photographique.",
    items: [],
  },
];

export function getCatalogue(slug: string): Catalogue | undefined {
  return CATALOGUES.find((c) => c.slug === slug);
}
