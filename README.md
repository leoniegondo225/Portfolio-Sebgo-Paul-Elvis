# OV Studio — Portfolio Sebgo Paul Elvis

Portfolio Next.js (App Router) + Tailwind CSS 4 + Framer Motion, inspiré du deck "Real Maker Mobile / Brand Thinker".

## Stack

- Next.js 16 (Turbopack)
- TypeScript
- Tailwind CSS 4
- Framer Motion (animations au scroll, hero, hover)
- pnpm

## Démarrer

```bash
pnpm install
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## À personnaliser

- **WhatsApp** : dans `src/components/Contact.tsx`, remplacer `WHATSAPP_NUMBER` (placeholder `22600000000`) par le vrai numéro, format international sans `+`.
- **Images** : `public/images/1.jpeg` → `6.jpeg` (portraits + coulisses), `logo1.jpeg` (fond clair, nav/footer clair) et `logo2.jpeg` (fond sombre). Remplacer par de meilleures résolutions si besoin.
- **Témoignages** : `src/components/Testimonials.tsx`, remplacer les citations placeholder.
- **Textes/projets** : chaque section est un composant dans `src/components/`, données en tête de fichier (tableaux `PROJECTS`, `SERVICES`, `STEPS`, etc.).

## Build

```bash
pnpm build
pnpm start
```
