"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "22645586855";

const FIELD_CLASS =
  "w-full rounded-xl border border-paper/25 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/40 focus:outline-none focus:border-paper transition-colors";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    story: "",
    goal: "",
    budget: "",
    city: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const message = [
    `Bonjour Sebgo, je suis ${form.name || "…"}.`,
    form.type && `Type de projet : ${form.type}.`,
    form.story && `Ce que je veux raconter : ${form.story}.`,
    form.goal && `Objectif : ${form.goal}.`,
    form.budget && `Budget / échéance : ${form.budget}.`,
    form.city && `Ville / lieu : ${form.city}.`,
    form.email && `Email : ${form.email}.`,
  ]
    .filter(Boolean)
    .join(" ");

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      className="relative bg-green text-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal delay={0.06}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-[1.02] max-w-2xl text-balance">
            VOUS AVEZ UNE HISTOIRE
            <br />
            <span className="text-orange">À RACONTER ?</span>
            <br />
            PARLONS-EN.
          </h2>
        </Reveal>

        <Reveal delay={0.16} className="mt-10 max-w-3xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid sm:grid-cols-2 gap-5"
          >
            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              Nom / Entreprise
              <input
                className={FIELD_CLASS}
                placeholder="Votre nom ou le nom de votre structure"
                value={form.name}
                onChange={update("name")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              Besoin / Objectif
              <input
                className={FIELD_CLASS}
                placeholder="Objectif principal…"
                value={form.goal}
                onChange={update("goal")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              WhatsApp / Téléphone
              <input
                className={FIELD_CLASS}
                placeholder="+226 …"
                value={form.phone}
                onChange={update("phone")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              Budget / Échéance
              <input
                className={FIELD_CLASS}
                placeholder="Budget / date…"
                value={form.budget}
                onChange={update("budget")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              Email
              <input
                type="email"
                className={FIELD_CLASS}
                placeholder="vous@exemple.com"
                value={form.email}
                onChange={update("email")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide">
              Ville / Lieu
              <input
                className={FIELD_CLASS}
                placeholder="Lieu du projet…"
                value={form.city}
                onChange={update("city")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide sm:col-span-2">
              Type de projet
              <input
                className={FIELD_CLASS}
                placeholder="Vidéo / Branding / Design / Photo / Événement"
                value={form.type}
                onChange={update("type")}
              />
            </label>

            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-wide sm:col-span-2">
              Ce que vous voulez raconter
              <textarea
                rows={3}
                className={FIELD_CLASS}
                placeholder="Décrivez votre besoin en quelques lignes"
                value={form.story}
                onChange={update("story")}
              />
            </label>

            <div className="sm:col-span-2 mt-2">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-orange text-paper px-7 py-3.5 text-sm font-bold uppercase tracking-wide hover:bg-paper hover:text-ink transition-colors"
              >
                Envoyer sur WhatsApp
                <span aria-hidden>→</span>
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
