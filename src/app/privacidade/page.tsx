import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidade | Só da Boa",
  description: "Como este site trata dados: sem cadastro, sem cookies de rastreamento, mapa do Google e links externos.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <main id="conteudo" className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="h-sec">Política de privacidade</h1>
      <div className="mt-6 space-y-4 text-mute">
        <p>Este site da {site.fullName} não tem cadastro, login nem formulário e não usa ferramentas de análise ou cookies de rastreamento.</p>
        <p>
          <strong className="text-paper">Google Maps.</strong> Na seção &ldquo;Onde estamos&rdquo; carregamos um mapa incorporado do Google. Ao abrir a página, seu navegador se conecta aos servidores do Google, que podem tratar dados como seu endereço IP conforme a política do Google.
        </p>
        <p>
          <strong className="text-paper">WhatsApp e Anota AI.</strong> Os botões levam a serviços de terceiros (WhatsApp e Anota AI). A partir do clique, o tratamento dos dados segue as políticas desses serviços. As mensagens que você envia por lá ficam com a loja apenas para atender seu pedido.
        </p>
        <p>Para dúvidas ou pedidos sobre seus dados (LGPD), fale conosco pelo WhatsApp {site.phones[0].display}.</p>
      </div>
      <Link href="/" className="btn btn-sun mt-10">Voltar ao site</Link>
    </main>
  );
}
