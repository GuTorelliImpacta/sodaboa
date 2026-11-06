import { site, waLink } from "@/content/site";

export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-graphite bg-ink/95 p-3 backdrop-blur md:hidden">
      <a href={site.orderUrl} target="_blank" rel="noopener" className="btn btn-sun flex-1">
        Pedir delivery
      </a>
      <a href={waLink("Oi, Só da Boa! Vim pelo site.")} target="_blank" rel="noopener" className="btn btn-ghost flex-1">
        WhatsApp
      </a>
    </div>
  );
}
