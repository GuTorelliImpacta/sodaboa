"use client";

import Image from "next/image";
import { useState } from "react";
import { menuItems, moments, type Moment } from "@/content/menu";
import { site } from "@/content/site";

export default function Menu() {
  const [active, setActive] = useState<Moment | "todos">("todos");
  const visibleMoments = moments.filter((m) => active === "todos" || m.id === active);

  return (
    <section id="cardapio" className="mx-auto max-w-6xl px-4 py-20">
      <p className="text-sm font-bold uppercase tracking-widest text-sun">A boa da vez</p>
      <h2 className="h-sec mt-2 max-w-2xl">O que tem na prateleira, por momento da noite.</h2>
      <p className="mt-4 max-w-xl text-mute">
        Escolha pelo que você vai fazer, não pela categoria do estoque. Itens e disponibilidade variam: o cardápio completo está no delivery.
      </p>

      <div role="group" aria-label="Filtrar por momento" className="mt-8 flex flex-wrap gap-2">
        <button type="button" className="chip" aria-pressed={active === "todos"} onClick={() => setActive("todos")}>
          Todos
        </button>
        {moments.map((m) => (
          <button key={m.id} type="button" className="chip" aria-pressed={active === m.id} onClick={() => setActive(m.id)}>
            {m.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
        <div className="space-y-10">
          {visibleMoments.map((m) => {
            const items = menuItems.filter((i) => i.moment === m.id);
            return (
              <div key={m.id} className="reveal">
                <h3 className="text-2xl font-extrabold">
                  {m.title} <span className="text-base font-semibold text-mute">· {m.hint}</span>
                </h3>
                {m.id === "balde" ? (
                  <p className="mt-3 rounded-2xl bg-graphite p-5">
                    Balde com gelo para a mesa: você escolhe as garrafas e latas e a gente prepara. Exemplo da casa: Jack Fire + Red Bull + água de coco, no gelo.{" "}
                    <a href="#balde" className="font-bold text-sun underline underline-offset-4">Monte o seu</a>.
                  </p>
                ) : m.id === "fumar" ? (
                  <p className="mt-3 rounded-2xl bg-graphite p-5">
                    Tabacaria: pergunte no balcão ou pelo WhatsApp o que tem hoje. Venda somente para maiores de 18 anos.
                  </p>
                ) : (
                  <ul className="mt-3 divide-y divide-graphite-2 rounded-2xl bg-graphite">
                    {items.map((i) => (
                      <li key={i.id} className="p-5">
                        <p className="text-lg font-bold">{i.name}</p>
                        <p className="text-mute">{i.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <a href={site.orderUrl} target="_blank" rel="noopener" className="btn btn-sun">
            Ver cardápio completo e pedir
          </a>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/img/balde-heineken.webp"
            alt="Quatro Heineken long neck em um balde de metal com gelo, com a prateleira de bebidas ao fundo"
            width={1206}
            height={1108}
            sizes="340px"
            className="rounded-[2.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
