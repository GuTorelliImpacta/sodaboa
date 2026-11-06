import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import OpenStatus from "@/components/OpenStatus";
import Menu from "@/components/Menu";
import BucketBuilder from "@/components/BucketBuilder";
import MapEmbed from "@/components/MapEmbed";
import { hoursTable, routeUrl, site, waLink } from "@/content/site";

const faq = [
  { q: "Preciso ter 18 anos?", a: "Sim. A venda de bebidas e tabacaria é somente para maiores de 18 anos, e podemos pedir documento." },
  { q: "Como faço o pedido?", a: "Pelo delivery no Anota AI ou chamando a gente no WhatsApp." },
  { q: "Dá para montar um balde?", a: "Dá. Use o seletor acima e a mensagem segue pronta para o nosso WhatsApp." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LiquorStore",
      "@id": `${site.url}/#loja`,
      name: site.fullName,
      url: site.url,
      image: `${site.url}/og.jpg`,
      telephone: site.phones[0].tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "BR",
      },
      areaServed: "Tremembé, São Paulo",
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "13:00", closes: "21:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "10:00", closes: "23:59" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "20:00" },
      ],
      sameAs: [site.instagram],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  const a = site.address;
  return (
    <>
      <Header />
      <main id="conteudo">
        <section id="topo" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-[1.1fr_.9fr] md:pt-16">
          <div className="reveal">
            <OpenStatus />
            <h1 className="h-hero mt-5">Gelada, destilados e tabacaria no Tremembé.</h1>
            <p className="mt-5 max-w-lg text-lg text-mute">
              Adega e tabacaria na R. Mamud Rahd. Peça pelo delivery ou chegue e escolha na prateleira.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.orderUrl} target="_blank" rel="noopener" className="btn btn-sun">Pedir delivery</a>
              <a href={waLink("Oi, Só da Boa! Vim pelo site.")} target="_blank" rel="noopener" className="btn btn-ghost">Chamar no WhatsApp</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/img/balde-combo.webp"
              alt="Balde de metal com gelo, uma garrafa de Jack Daniel's Tennessee Fire, latas de Red Bull e caixinhas de água de coco"
              width={1206}
              height={1223}
              sizes="(max-width: 768px) 80vw, 440px"
              priority
              className="aspect-square w-full rounded-full border-4 border-sun object-cover"
            />
            <span className="dot absolute -left-2 top-1/2 h-4 w-4" aria-hidden />
            <span className="dot absolute -right-2 top-1/2 h-4 w-4" aria-hidden />
          </div>
        </section>

        <Menu />
        <BucketBuilder />

        <section id="casa" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <Image
            src="/img/fachada.webp"
            alt="Fachada da Só da Boa à noite, com toldo iluminado, mesas na calçada e clientes"
            width={1206}
            height={883}
            sizes="(max-width: 768px) 100vw, 560px"
            className="rounded-3xl object-cover"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sun">A casa</p>
            <h2 className="h-sec mt-2">Mesa na calçada, luz amarela e a prateleira ali dentro.</h2>
            <p className="mt-4 text-mute">
              Nos fins de semana o movimento vai noite adentro, até meia-noite. Chegue com a galera, escolha na parede de destilados e sente na calçada.
            </p>
            <p className="mt-4 rounded-2xl bg-graphite p-4 text-sm">
              Venda de bebidas e tabacaria somente para maiores de 18 anos.
            </p>
          </div>
        </section>

        <section id="onde" className="bg-graphite">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sun">Onde estamos</p>
              <h2 className="h-sec mt-2">Onde ficamos e até que horas.</h2>
              <address className="mt-4 not-italic text-mute">
                {a.street} — {a.district}, {a.city}/{a.state} · {a.zip}
              </address>
              <dl className="mt-6 divide-y divide-graphite-2 rounded-2xl bg-ink">
                {hoursTable.map((h) => (
                  <div key={h.label} className="flex justify-between gap-4 p-4">
                    <dt className="font-semibold">{h.label}</dt>
                    <dd className="text-mute">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-mute">
                No Google: {site.rating.value} ★ em {site.rating.count} avaliações.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={routeUrl} target="_blank" rel="noopener" className="btn btn-sun">Traçar rota</a>
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="btn btn-ghost">{p.display}</a>
                ))}
              </div>
            </div>
            <MapEmbed />
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
          <h2 className="h-sec">Antes de vir</h2>
          <div className="mt-8 divide-y divide-graphite-2 border-y border-graphite-2">
            {faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 text-lg font-bold">
                  {f.q}
                  <span aria-hidden className="text-sun group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-mute">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href={site.orderUrl} target="_blank" rel="noopener" className="btn btn-sun">Pedir delivery</a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
