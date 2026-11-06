"use client";

import { useState } from "react";
import { menuItems } from "@/content/menu";
import { waLink } from "@/content/site";

export default function BucketBuilder() {
  const [picked, setPicked] = useState<string[]>([]);
  const buildable = menuItems.filter((i) => i.buildable);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const names = buildable.filter((i) => picked.includes(i.id)).map((i) => i.name);
  const message = names.length
    ? `Oi, Só da Boa! Quero montar um balde: ${names.join(", ")}. Pode me passar os valores e o prazo?`
    : "Oi, Só da Boa! Quero montar um balde. O que vocês têm hoje?";

  return (
    <section id="balde" className="bg-graphite">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-sun">Pro balde</p>
        <h2 className="h-sec mt-2 max-w-2xl">Monte seu balde e mande pronto no WhatsApp.</h2>
        <p className="mt-4 max-w-xl text-mute">Marque o que quer. A gente responde com os valores e o prazo.</p>

        <fieldset className="mt-8">
          <legend className="sr-only">Itens do balde</legend>
          <div className="flex flex-wrap gap-3">
            {buildable.map((i) => {
              const on = picked.includes(i.id);
              return (
                <label
                  key={i.id}
                  className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-full border-2 px-5 py-2 font-semibold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-sun ${
                    on ? "border-sun bg-sun text-ink" : "border-graphite-2 bg-ink"
                  }`}
                >
                  <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(i.id)} />
                  <span aria-hidden>{on ? "✓" : "+"}</span>
                  {i.name}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={waLink(message)} target="_blank" rel="noopener" className="btn btn-sun">
            Enviar pelo WhatsApp
          </a>
          <p className="text-mute" aria-live="polite">
            {names.length ? `${names.length} ${names.length === 1 ? "item" : "itens"} no balde` : "Nenhum item marcado ainda"}
          </p>
        </div>
      </div>
    </section>
  );
}
