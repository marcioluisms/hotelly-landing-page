import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function HomePricing({ onPlanSelect }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "py-24 px-8 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-headline font-bold mb-4 text-foreground", children: "Quanto custa a sua paz?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Menos do que uma reserva perdida. Onboarding assistido pela equipe Hotelly. Sem fidelidade." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-headline font-bold mb-2 text-foreground", children: "Hotelly Start" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Organize sua operação e pare de perder noites de sono" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl font-headline font-extrabold text-foreground", children: "R$ 349" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "/mês" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mb-10 flex-1", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Concierge IA no WhatsApp"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Copilot IA no painel"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Mapa de Quartos interativo (Grade de Ocupação)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Proteção total contra overbooking"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Check-in Digital + FNRH automático (Serpro)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Motor de Reservas (botão no seu site)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Painel financeiro + Mercado Pago integrado"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Governança de limpeza (Dashboard Maestro)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "CRM de hóspedes"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-primary text-sm", children: "check" }),
            "Até 5 usuários · Suporte via chat"
          ] })
        ] }),
        onPlanSelect ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onPlanSelect("starter"),
            className: "block text-center w-full py-4 rounded-xl bg-primary-dark text-primary-foreground font-bold hover:bg-primary-dark/90 transition-colors cursor-pointer",
            children: "Assinar Hotelly Start →"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "block text-center w-full py-4 rounded-xl border border-border font-bold text-muted-foreground bg-popover/50 cursor-default select-none", children: "🚀 Lançamento em Breve" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-headline font-bold mb-2 text-foreground", children: "Hotelly Pro" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Profissionalize e veja o negócio crescer sem exigir mais de você." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl font-headline font-extrabold text-foreground", children: "R$ 549" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "/mês" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mb-10 flex-1 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Tudo do Start"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Precificação dinâmica (Revenue Management)"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Calendário de preços para os próximos 120 dias"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Relatórios avançados: RevPAR, ADR, taxa de ocupação"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Políticas avançadas: pacotes sazonais, estadia mínima"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Extras e frigobar completos"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-amber", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Até 15 usuários · Suporte prioritário"
          ] })
        ] }),
        onPlanSelect ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onPlanSelect("professional"),
            className: "block text-center w-full py-4 rounded-xl bg-primary-dark text-primary-foreground font-bold hover:bg-primary-dark/90 transition-colors cursor-pointer",
            children: "Assinar Hotelly Pro →"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "block text-center w-full py-4 rounded-xl border border-border font-bold text-muted-foreground bg-popover/50 cursor-default select-none", children: "🚀 Lançamento em Breve" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-10 rounded-3xl bg-popover border-2 border-brand-emerald relative shadow-xl shadow-brand-emerald/10 flex flex-col scale-105 z-10 transition-transform hover:scale-110", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider", children: "Recomendado" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-headline font-bold mb-2 text-foreground", children: "Hotelly Max" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Devolve a sua paz. Tudo conectado, o negócio cresce sem consumir mais de você." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-6", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl font-headline font-extrabold text-foreground", children: "R$ 849" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "/mês" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mb-10 flex-1 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Tudo do Pro"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Hub de OTAs: Booking.com, Airbnb, Expedia e mais"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Sincronização de disponibilidade e tarifas em tempo real"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Relatórios consolidados por canal de origem"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Zero overbooking entre plataformas — garantido"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-brand-emerald", style: { fontVariationSettings: "'FILL' 1" }, children: "check_circle" }),
            "Usuários ilimitados · Suporte dedicado"
          ] })
        ] }),
        onPlanSelect ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onPlanSelect("enterprise"),
            className: "block text-center w-full py-4 rounded-xl bg-brand-emerald text-white font-bold hover:bg-brand-emerald/90 transition-colors cursor-pointer",
            children: "Assinar Hotelly Max →"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "block text-center w-full py-4 rounded-xl bg-brand-emerald/50 text-white font-bold cursor-default select-none", children: "🚀 Lançamento em Breve" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "Onboarding assistido pela equipe Hotelly. Sem fidelidade. Cancele quando quiser." }) })
  ] }) }) });
}
export {
  HomePricing as default
};
