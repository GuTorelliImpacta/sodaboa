export const site = {
  name: "Só da Boa",
  fullName: "Só da Boa Adega e Tabacaria",
  url: "https://sodaboa.vercel.app",
  address: {
    street: "R. Mamud Rahd, 102",
    district: "Tremembé",
    city: "São Paulo",
    state: "SP",
    zip: "02372-090",
  },
  phones: [
    { display: "(11) 97635-5554", tel: "+5511976355554" },
    { display: "2306-5366", tel: "+551123065366" },
  ],
  whatsapp: "5511976355554",
  orderUrl: "https://pedido.anota.ai/loja/sdb-comrcio",
  rating: { value: "4,6", count: 22 },
  instagram: "https://www.instagram.com/adegasodaboa",
  timezone: "America/Sao_Paulo",
  // 0 = domingo ... 6 = sábado; [abre, fecha] em horas (fecha 24 = meia-noite)
  hours: {
    0: [12, 20],
    1: [13, 21],
    2: [13, 21],
    3: [13, 21],
    4: [13, 21],
    5: [10, 24],
    6: [10, 24],
  } as Record<number, [number, number]>,
} as const;

export const weekdayLabels = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

export const hoursTable = [
  { label: "Segunda a quinta", time: "13h às 21h" },
  { label: "Sexta e sábado", time: "10h à meia-noite" },
  { label: "Domingo", time: "12h às 20h" },
];

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapsQuery = `${site.fullName}, ${site.address.street}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
export const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
