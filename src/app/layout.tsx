import type { Metadata, Viewport } from "next";
import { Baloo_2, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-baloo", display: "swap" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Só da Boa Adega e Tabacaria | Tremembé, São Paulo",
  description:
    "Cerveja gelada, destilados e tabacaria no Tremembé. Monte seu balde, peça delivery ou venha: sex e sáb até meia-noite.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Só da Boa Adega e Tabacaria",
    description: "Gelada, destilados e tabacaria no Tremembé, zona norte de SP.",
    url: "/",
    siteName: site.fullName,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Logo da Só da Boa e balde com bebidas geladas" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#28292d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${baloo.variable} ${dm.variable}`}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:font-bold focus:text-ink">
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
