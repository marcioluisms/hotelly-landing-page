import { jsx, jsxs } from "react/jsx-runtime";
import { u as useAnalytics } from "../entry-server.js";
import "react";
import "react-dom/server";
import "react-router";
import "react-router-dom";
import "react-helmet-async";
import "lucide-react";
import "front-matter";
import "react-markdown";
import "remark-gfm";
import "fuse.js";
function HomeFAQ() {
  const { trackFAQExpand } = useAnalytics();
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-card border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-headline font-bold text-foreground text-center mb-12", children: "Perguntas Frequentes" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("O Hotelly funciona com Booking e Airbnb?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "O Hotelly funciona com Booking e Airbnb?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Sim, no plano Max. Booking.com, Airbnb, Expedia e centenas de outros canais ficam sincronizados em tempo real com o Hotelly: disponibilidade, tarifas e reservas, tudo atualizado automaticamente. Chega de abrir cada plataforma para fechar uma janela de disponibilidade ou ajustar preço. No Max, você faz tudo de um lugar só, e ainda tem WhatsApp, site próprio e IA de atendimento inclusos no mesmo plano." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("Preciso saber de tecnologia para usar o Hotelly?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "Preciso saber de tecnologia para usar o Hotelly?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Não. O Hotelly foi feito para quem administra uma hospedagem, não para técnico de informática. O onboarding é conduzido pela nossa própria equipe: configuramos seus quartos, tarifas, políticas e IA juntos, no seu ritmo. O tempo até a primeira reserva automática depende de algumas integrações, como a conexão com o WhatsApp, mas nossa equipe guia cada passo. A maioria dos clientes está operando em poucos dias." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("O Hotelly atende hóspedes em outros idiomas?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "O Hotelly atende hóspedes em outros idiomas?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Sim, automaticamente. O Concierge IA responde no idioma do hóspede: inglês, espanhol, francês, italiano, o que for. Você não precisa configurar nada, já funciona em todos os planos. E se você é um dono de hospedagem que fala outro idioma, o assistente do painel também conversa com você no seu idioma nativo. O painel continua em português para sua equipe brasileira." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("O Hotelly substitui recepcionista?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "O Hotelly substitui recepcionista?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Para o WhatsApp, sim. O Concierge IA responde perguntas, verifica disponibilidade, envia link de pagamento e confirma a reserva, 24 horas por dia, sem ninguém na recepção. Para hospedagens que têm equipe presencial, o Concierge assume fora do horário comercial, nos fins de semana e em períodos de sobrecarga. Sua equipe foca no atendimento ao vivo. A IA cuida do que chegava depois das 22h e não era respondido." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("Como funciona a precificação dinâmica?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "Como funciona a precificação dinâmica?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Disponível nos planos Pro e Max. O motor analisa sua ocupação atual, feriados e eventos cadastrados e sugere o preço ideal para cada dia nos próximos 120 dias. Você define o piso e o teto: o Hotelly trabalha dentro desses limites. A decisão final é sempre sua: o sistema recomenda, você aplica. Na prática, significa cobrar mais no Carnaval e no réveillon, e ajustar o preço para baixo quando a semana está parada, sem precisar fazer isso manualmente todo dia." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("Qual a diferença entre os planos Start, Pro e Max?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "Qual a diferença entre os planos Start, Pro e Max?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: [
          "Os três planos incluem IA ilimitada, gestão de reservas, check-in digital, FNRH automático, Motor de Reservas para o seu site, financeiro e governança de limpeza. O ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Start" }),
          " (R$ 349/mês) organiza sua operação e devolve suas noites de sono. O ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Pro" }),
          " (R$ 549/mês) profissionaliza com precificação dinâmica e relatórios avançados, para o negócio crescer sem pesar mais em você. E o ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Max" }),
          " (R$ 849/mês)? Além de tudo do Pro, conecta você ao Booking, Airbnb e Expedia. O Max devolve a sua paz."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("O Hotelly emite o FNRH automaticamente?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "O Hotelly emite o FNRH automaticamente?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Sim, em todos os planos. O hóspede preenche o check-in digital pelo celular antes de chegar e o Hotelly envia os dados automaticamente para o Serpro, cumprindo a obrigação legal sem nenhum trabalho manual da sua parte. Sem ficha de papel, sem digitação, sem risco de multa por atraso no envio." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("O que é o Log Book Digital?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "O que é o Log Book Digital?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "É o fim do caderno de recepção e dos grupos de WhatsApp da equipe. Toda ocorrência, pendência e observação de turno fica registrada em um único lugar, acessível para todos. Quando o turno da manhã termina, o da tarde já começa sabendo o que ficou em aberto: qual quarto tem manutenção pendente, qual hóspede fez uma solicitação especial, o que precisa de atenção antes do próximo check-in. Nada se perde mais entre turnos." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("Posso receber reservas diretas pelo meu próprio site?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "Posso receber reservas diretas pelo meu próprio site?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: "Sim, em todos os planos. O Motor de Reservas é um botão que vai direto no seu site: o hóspede escolhe as datas, vê o valor e paga na hora, sem sair da sua página e sem pagar comissão para ninguém. A disponibilidade sincroniza em tempo real com o sistema, então não tem risco de vender o que não tem. É a reserva mais barata que você pode receber: 100% do valor vai para você." })
      ] }),
      /* @__PURE__ */ jsxs("details", { className: "group bg-popover rounded-2xl overflow-hidden border border-border", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none", onClick: () => trackFAQExpand("Qual plano é o certo para minha hospedagem?"), children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-inherit m-0 p-0", children: "Qual plano é o certo para minha hospedagem?" }),
          /* @__PURE__ */ jsx("span", { className: "transition group-open:rotate-180 text-primary", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg", children: [
          "Sendo direto: o ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Max" }),
          " é o plano que devolve a sua paz. Por R$ 849/mês, você tem IA ilimitada, gestão completa, precificação dinâmica, relatórios avançados e todos os seus canais de venda, incluindo Booking, Airbnb e Expedia, sincronizados em tempo real. Seu negócio cresce sem consumir mais de você. Se prefere começar pelo ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Start" }),
          " ou ",
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Pro" }),
          " para conhecer o sistema, faz sentido: a migração é simples e você não perde nada. Mas o destino é o mesmo para todo mundo."
        ] })
      ] })
    ] })
  ] }) });
}
export {
  HomeFAQ as default
};
