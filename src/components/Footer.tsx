import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  const a = site.address;
  return (
    <footer className="border-t border-graphite bg-ink pb-28 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">Só da Boa</p>
          <p className="text-sun font-semibold uppercase tracking-widest text-xs">Adega e Tabacaria</p>
        </div>
        <address className="not-italic text-mute">
          {a.street}
          <br />
          {a.district}, {a.city}/{a.state} · {a.zip}
          <br />
          {site.phones.map((p, i) => (
            <span key={p.tel}>
              {i > 0 && " · "}
              <a href={`tel:${p.tel}`} className="underline underline-offset-4 hover:text-sun">{p.display}</a>
            </span>
          ))}
        </address>
        <p className="text-sm text-mute">
          Beba com moderação. Venda proibida para menores de 18 anos.
          <br />
          <a href={site.instagram} target="_blank" rel="noopener" className="underline underline-offset-4 hover:text-sun">Instagram</a>
          {" · "}
          <Link href="/privacidade" className="underline underline-offset-4 hover:text-sun">Privacidade</Link>
        </p>
      </div>
    </footer>
  );
}
