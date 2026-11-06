"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const wd: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

function fmt(h: number) {
  const hh = h === 24 ? 0 : h;
  return `${hh}h`;
}

function compute(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timezone,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = wd[get("weekday")];
  const time = Number(get("hour")) + Number(get("minute")) / 60;
  const [open, close] = site.hours[day];
  if (time >= open && time < close) {
    return { open: true, text: close === 24 ? "fecha à meia-noite" : `fecha às ${fmt(close)}` };
  }
  if (time < open) return { open: false, text: `abre hoje às ${fmt(open)}` };
  const next = (day + 1) % 7;
  return { open: false, text: `abre amanhã às ${fmt(site.hours[next][0])}` };
}

export default function OpenStatus() {
  const [state, setState] = useState<ReturnType<typeof compute> | null>(null);

  useEffect(() => {
    const tick = () => setState(compute(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!state) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-semibold" aria-live="polite">
        <span className="dot" aria-hidden /> Sex e sáb até meia-noite
      </p>
    );
  }

  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-graphite px-4 py-2 text-sm font-semibold" aria-live="polite">
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full ${state.open ? "bg-emerald-400" : "bg-rose-400"}`}
        aria-hidden
      />
      <span>
        {state.open ? "Aberto agora" : "Fechado agora"} · {state.text}
      </span>
    </p>
  );
}
