import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col items-center text-center">
        <Reveal>
          <Image
            src="/images/logo2.jpeg"
            alt="OV Studio"
            width={110}
            height={110}
            className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover"
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10 max-w-xl">
          <p className="text-lg md:text-2xl font-medium leading-snug">
            Une marque, ce n&rsquo;est pas seulement ce que tu vends.
          </p>
          <p className="mt-2 text-lg md:text-2xl font-bold text-orange">
            C&rsquo;est ce que tu représentes.
          </p>
          <p className="mt-4 text-paper/60">L&rsquo;histoire que tu racontes.</p>
          <p className="text-paper/60">Et l&rsquo;héritage que tu construis.</p>
        </Reveal>

        <Reveal delay={0.16} className="mt-10">
          <p className="font-display text-2xl md:text-3xl text-green">
            OV STUDIO
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-paper/50">
            Video × Brand Thinking
          </p>
        </Reveal>

        <Reveal delay={0.22} className="mt-14 flex items-center gap-6 text-sm text-paper/50">
          <a href="#top" className="hover:text-paper transition-colors">
            Retour en haut
          </a>
          <span>·</span>
          <a href="#contact" className="hover:text-paper transition-colors">
            Démarrer un projet
          </a>
        </Reveal>

        <p className="mt-10 text-xs text-paper/30">
          © {new Date().getFullYear()} OV Studio / Sebgo Paul Elvis. Tous
          droits réservés.
        </p>
      </div>
    </footer>
  );
}
