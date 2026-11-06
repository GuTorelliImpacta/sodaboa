import { mapEmbedSrc } from "@/content/site";

export default function MapEmbed() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-graphite-2 bg-graphite md:aspect-auto md:h-full md:min-h-[360px]">
      <iframe
        title="Mapa do Google: Só da Boa Adega e Tabacaria, R. Mamud Rahd, 102, Tremembé, São Paulo"
        src={mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
