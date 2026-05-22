import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useCallback, useEffect, useState } from "react";
const PLAN_MAP = {
  starter: {
    slug: "starter",
    name: "Hotelly Start",
    price: "R$ 349",
    badgeClass: "bg-brand-sky/20 text-brand-sky"
  },
  professional: {
    slug: "professional",
    name: "Hotelly Pro",
    price: "R$ 549",
    badgeClass: "bg-amber/20 text-amber"
  },
  enterprise: {
    slug: "enterprise",
    name: "Hotelly Max",
    price: "R$ 849",
    badgeClass: "bg-brand-emerald/20 text-brand-emerald"
  }
};
const SITE_KEY = "0x4AAAAAACzvmapb46gEzSYh";
function TurnstileWidget({ onVerify, onError, onExpire }) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const renderWidget = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      callback: onVerify,
      "error-callback": onError,
      "expired-callback": onExpire,
      theme: "dark",
      size: "normal"
    });
  }, [onVerify, onError, onExpire]);
  useEffect(() => {
    if (window.turnstile) {
      renderWidget();
      return;
    }
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval);
        renderWidget();
      }
    }, 100);
    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, className: "flex justify-center" });
}
function CheckoutModalContent({
  plan,
  status,
  errorMessage,
  onSubmit,
  onClose
}) {
  const [email, setEmail] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const info = PLAN_MAP[plan];
  const isLoading = status === "validating" || status === "submitting";
  const canSubmit = turnstileToken.length > 0 && !isLoading;
  const handleTurnstileVerify = useCallback((token) => {
    setTurnstileToken(token);
  }, []);
  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit({ email, propertyName, turnstileToken });
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${info.badgeClass}`, children: info.name }) }),
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-headline font-bold text-foreground mb-4", children: [
      "Ótima escolha. Você está entrando para o",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: info.name }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed mb-2", children: [
      "Ao continuar, você inicia sua assinatura do Hotelly por",
      " ",
      /* @__PURE__ */ jsxs("strong", { className: "text-foreground", children: [
        info.price,
        "/mês"
      ] }),
      " e já pode acessar sua central de reservas. Nossa equipe entra em contato em até 24h para configurar tudo com você — quartos, preços, políticas e a IA no WhatsApp da sua hospedagem."
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mb-6", children: [
      "Pagamento seguro via Stripe — a mesma plataforma usada por Amazon e Google.",
      /* @__PURE__ */ jsx("br", {}),
      "Sem fidelidade. Cancele quando quiser."
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "checkout-email", className: "block text-sm font-medium text-foreground mb-1.5", children: "Seu email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "checkout-email",
            type: "email",
            required: true,
            autoComplete: "email",
            placeholder: "você@suahospedagem.com.br",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            disabled: isLoading,
            className: "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "checkout-property", className: "block text-sm font-medium text-foreground mb-1.5", children: "Nome da sua hospedagem" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: "checkout-property",
            type: "text",
            required: true,
            autoComplete: "organization",
            placeholder: "Pousada Sol Nascente",
            value: propertyName,
            onChange: (e) => setPropertyName(e.target.value),
            disabled: isLoading,
            minLength: 2,
            maxLength: 100,
            className: "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        TurnstileWidget,
        {
          onVerify: handleTurnstileVerify,
          onExpire: handleTurnstileExpire
        }
      ),
      status === "error" && errorMessage && /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm", children: errorMessage }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: !canSubmit,
            className: "w-full py-4 rounded-xl bg-primary-dark text-primary-foreground font-bold text-base hover:bg-primary-dark/90 focus:outline-none focus:ring-2 focus:ring-primary-dark/50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed",
            children: status === "submitting" ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" }),
              "Redirecionando para pagamento seguro..."
            ] }) : "Continuar para pagamento →"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            disabled: isLoading,
            className: "w-full py-3 rounded-xl bg-transparent text-muted-foreground font-medium text-sm hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50",
            children: "Voltar"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-xs text-muted-foreground/70 pt-1", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-sm", children: "lock" }),
        "Pagamento seguro via Stripe"
      ] }) })
    ] })
  ] });
}
export {
  CheckoutModalContent as default
};
