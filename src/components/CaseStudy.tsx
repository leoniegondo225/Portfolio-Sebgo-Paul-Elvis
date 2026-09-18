import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

const GALLERY = [
  "/images/jus-ida.jpeg",
  "/images/j1.jpeg",
  "/images/j2.jpeg",
  "/images/j3.jpeg",
  "/images/j4.jpeg",
  "/images/j5.jpeg",
];

const MORE_VISUALS = [
  "/images/j6.jpeg",
  "/images/j8.jpeg",
  "/images/j9.jpeg",
  "/images/j10.jpeg",
  "/images/j11.jpeg",
  "/images/j12.jpeg",
  "/images/j14.jpeg",
  "/images/j15.jpeg",
  "/images/j17.jpeg",
  "/images/j20.jpeg",
  "/images/j21.jpeg",
  "/images/j22.jpeg",
  "/images/j24.jpeg",
  "/images/j26.jpeg",
  "/images/j27.jpeg",
  "/images/j28.jpeg",
  "/images/j29.jpeg",
  "/images/j30.jpeg",
];

const VIDEOS = [
  { src: "/ida-sante-ananas.mp4", label: "Ida Santé — les bienfaits du jus d'ananas" },
  { src: "/ida-depistage-72h.mp4", label: "IDA mobilisée — 72h de dépistage" },
  { src: "/ida-equipe-2026.mp4", label: "L'équipe IDA — vœux 2026" },
];

const ROWS = [
  { label: "Le contexte", text: "Contexte de la marque et du projet." },
  {
    label: "Le besoin",
    text: "Quelle image fallait-il construire ou améliorer ?",
  },
  {
    label: "La réflexion",
    text: "Identité · positionnement · cible · message · communication.",
  },
  {
    label: "Mon intervention",
    text: "Réflexion marketing · création de contenus · vidéos · storytelling · valorisation.",
  },
];

export default function CaseStudy() {
  return (
    <section className="relative bg-green-tint py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.05} className="flex items-center gap-3">
          <Image
            src="/images/logo2.jpeg"
            alt="Logo IDA"
            width={40}
            height={40}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-green">
            IDA / Don Amélie × Marque de jus
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-4">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            REBRANDING.
            <br />
            <span className="text-orange">COMMUNICATION.</span>
            <br />
            <span className="text-green">CONTENT.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-3xl">
          {ROWS.map((r) => (
            <StaggerItem key={r.label}>
              <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-green">
                {r.label}
              </h4>
              <p className="mt-2 text-ink/75">{r.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-14 md:mt-16">
          <div className="rounded-2xl bg-paper px-6 py-5 max-w-3xl">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-green">
              Vidéos / Photos / Visuels / Réseaux sociaux
            </p>
          </div>
        </Reveal>

      
        
      </div>
    </section>
  );
}
