"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#balde", label: "Monte seu balde" },
  { href: "#casa", label: "A casa" },
  { href: "#onde", label: "Onde estamos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-graphite bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#topo" className="flex items-center gap-3" aria-label={`${site.fullName} — início`}>
          <Image src="/img/logo.png" alt="" width={44} height={44} className="rounded-full" priority />
          <span className="font-display text-lg font-extrabold leading-none">
            Só da Boa
            <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-sun">Adega e Tabacaria</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-semibold text-mute hover:text-sun">
              {l.label}
            </a>
          ))}
          <a href={site.orderUrl} target="_blank" rel="noopener" className="btn btn-sun">
            Pedir delivery
          </a>
        </nav>

        <button
          ref={btn}
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-graphite-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="border-t border-graphite bg-ink px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-graphite font-semibold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
