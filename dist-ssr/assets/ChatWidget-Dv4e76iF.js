import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
function ChatToggleButton({ isOpen, onClick, hasUnread }) {
  if (isOpen) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick,
        "aria-label": "Fechar chat",
        "aria-expanded": true,
        className: "fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 focus:ring-offset-brand-navy md:flex md:bottom-6 md:right-6",
        children: /* @__PURE__ */ jsx(X, { size: 24, className: "text-white" })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      onClick,
      "aria-label": "Abrir chat com o assistente Hotelly",
      "aria-expanded": false,
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 3 },
      className: "fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-brand-sky focus:ring-offset-2 focus:ring-offset-brand-navy md:bottom-6 md:right-6 md:h-14 md:w-14",
      children: [
        /* @__PURE__ */ jsx("img", { src: "/icon.webp", alt: "Hotelly", className: "h-full w-full rounded-full object-cover", width: "105", height: "105" }),
        hasUnread && /* @__PURE__ */ jsxs("span", { className: "absolute -top-1 -right-1 z-10 flex h-3.5 w-3.5", children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 animate-ping rounded-full bg-brand-coral opacity-75" }),
          /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3.5 w-3.5 rounded-full bg-brand-coral" })
        ] })
      ]
    }
  );
}
function ChatHeader({ onClose, onReset, turnCount }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 items-center justify-between border-b border-white/10 bg-background px-4 py-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-8 w-8 shrink-0 overflow-hidden rounded-full", children: /* @__PURE__ */ jsx("img", { src: "/icon.webp", alt: "Hotelly", className: "h-full w-full object-cover", width: "105", height: "105" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-white", children: "Hotelly" }),
        /* @__PURE__ */ jsx("span", { className: "rounded bg-brand-sky/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-sky", children: "IA" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      turnCount >= 5 && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onReset,
          "aria-label": "Iniciar nova conversa",
          className: "rounded px-2 py-1 text-xs text-white/40 transition-colors hover:bg-white/5 hover:text-white/70 focus:outline-none focus:ring-1 focus:ring-brand-sky",
          children: "Nova conversa"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          "aria-label": "Fechar chat",
          className: "flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-all hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-sky",
          children: /* @__PURE__ */ jsx(X, { size: 16 })
        }
      )
    ] })
  ] });
}
function stripMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/^[-•]\s/gm, "- ").replace(/^#{1,6}\s/gm, "");
}
function ChatMessage({ message }) {
  const isAssistant = message.role === "assistant";
  const content = isAssistant ? stripMarkdown(message.content) : message.content;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-end gap-2 max-w-[85%] ${isAssistant ? "self-start" : "self-end flex-row-reverse"}`,
      role: "article",
      "aria-label": isAssistant ? "Hotelly disse" : "Voce disse",
      children: [
        isAssistant && /* @__PURE__ */ jsx("div", { className: "h-7 w-7 shrink-0 overflow-hidden rounded-full", children: /* @__PURE__ */ jsx("img", { src: "/icon.webp", alt: "", className: "h-full w-full object-cover", "aria-hidden": "true", width: "105", height: "105" }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `rounded-2xl px-4 py-3 text-sm leading-relaxed break-words overflow-hidden ${isAssistant ? "rounded-bl-sm border border-white/5 bg-brand-slate text-white/90" : "rounded-br-sm bg-brand-amber/90 font-medium text-brand-navy"}`,
            children: content
          }
        )
      ]
    }
  );
}
const QUICK_QUESTIONS = [
  "Como funciona?",
  "Quanto custa?",
  "Como faço para assinar?",
  "Funciona pra pousada pequena?"
];
function ChatMessageList({ messages, isLoading, onSend }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = bottomRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);
  const showChips = messages.length === 1 && !isLoading;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-1 flex-col space-y-4 overflow-y-auto overscroll-contain px-4 py-4 scroll-smooth",
      role: "log",
      "aria-label": "Mensagens do chat",
      "aria-live": "polite",
      children: [
        messages.map((msg) => /* @__PURE__ */ jsx(ChatMessage, { message: msg }, msg.id)),
        showChips && /* @__PURE__ */ jsx("div", { className: "ml-9 mt-1 flex flex-wrap gap-2", children: QUICK_QUESTIONS.map((q) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onSend(q),
            className: "cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all duration-200 hover:border-brand-sky/30 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-sky",
            children: q
          },
          q
        )) }),
        isLoading && /* @__PURE__ */ jsxs("div", { className: "flex max-w-[85%] items-end gap-2 self-start", "aria-label": "Hotelly esta digitando", role: "status", children: [
          /* @__PURE__ */ jsx("div", { className: "h-7 w-7 shrink-0 overflow-hidden rounded-full", children: /* @__PURE__ */ jsx("img", { src: "/icon.webp", alt: "", className: "h-full w-full object-cover", "aria-hidden": "true", width: "105", height: "105" }) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl rounded-bl-sm border border-white/5 bg-brand-slate px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex h-5 items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "typing-dot h-2 w-2 rounded-full bg-white/40" }),
            /* @__PURE__ */ jsx("span", { className: "typing-dot h-2 w-2 rounded-full bg-white/40" }),
            /* @__PURE__ */ jsx("span", { className: "typing-dot h-2 w-2 rounded-full bg-white/40" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { ref: bottomRef })
      ]
    }
  );
}
function ChatInput({ onSend, disabled, maxLength }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const handleSend = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }, [text, disabled, onSend]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleInput = (e) => {
    setText(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 72) + "px";
  };
  const hasText = text.trim().length > 0;
  return /* @__PURE__ */ jsxs("div", { className: "shrink-0 border-t border-white/10 bg-background px-4 py-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2 rounded-xl border border-white/10 bg-brand-slate/50 px-3 py-2 transition-all focus-within:border-brand-sky/40 focus-within:ring-1 focus-within:ring-brand-sky/20", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref: textareaRef,
          value: text,
          onChange: handleInput,
          onKeyDown: handleKeyDown,
          placeholder: disabled ? "Limite de mensagens atingido" : "Digite sua mensagem...",
          maxLength,
          disabled,
          rows: 1,
          "aria-label": "Digite sua mensagem",
          className: "flex-1 resize-none bg-transparent text-sm leading-relaxed text-white/90 outline-none placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50",
          style: { minHeight: "20px", maxHeight: "72px" }
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSend,
          disabled: disabled || !hasText,
          "aria-label": "Enviar mensagem",
          className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-brand-sky ${hasText && !disabled ? "bg-brand-amber text-brand-navy hover:bg-amber-500 active:bg-amber-600" : "cursor-not-allowed bg-transparent text-white/20"}`,
          children: /* @__PURE__ */ jsx(Send, { size: 16 })
        }
      )
    ] }),
    text.length > maxLength - 100 && /* @__PURE__ */ jsx("div", { className: "mt-1 flex justify-end", children: /* @__PURE__ */ jsxs("span", { className: `text-[10px] ${text.length > maxLength - 20 ? "text-brand-coral" : "text-white/30"}`, children: [
      text.length,
      "/",
      maxLength
    ] }) })
  ] });
}
function ChatCTABar({ variant, onClose }) {
  const handleBackToSite = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onClose();
  };
  return /* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-border bg-background/80 px-4 py-2 backdrop-blur-sm", children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleBackToSite,
      className: "block w-full text-center text-xs text-foreground/40 transition-colors hover:text-muted-foreground",
      children: "Voltar ao site"
    }
  ) });
}
const CTA_KEYWORDS = /como (assino|assinar|come[cç]o|come[cç]ar)|quero assinar|garantir meu acesso/i;
function ChatWindow({
  isOpen,
  messages,
  isLoading,
  turnCount,
  maxTurns,
  maxInputLength,
  onSend,
  onClose,
  onReset
}) {
  const isMaxReached = turnCount >= maxTurns;
  const ctaVariant = useMemo(() => {
    if (isMaxReached) return "prominent";
    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
    if (lastAssistant && CTA_KEYWORDS.test(lastAssistant.content)) return "prominent";
    return "subtle";
  }, [messages, isMaxReached]);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        transition: { type: "spring", stiffness: 300, damping: 25 },
        style: { transformOrigin: "bottom right" },
        className: "fixed bottom-22 right-6 z-50 hidden h-[600px] w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl shadow-black/40 md:flex",
        id: "hotelly-chat-panel",
        role: "dialog",
        "aria-label": "Chat com o assistente Hotelly",
        children: [
          /* @__PURE__ */ jsx(ChatHeader, { onClose, onReset, turnCount }),
          /* @__PURE__ */ jsx(ChatMessageList, { messages, isLoading, onSend }),
          /* @__PURE__ */ jsx(ChatCTABar, { variant: ctaVariant, onClose }),
          isMaxReached ? /* @__PURE__ */ jsxs("div", { className: "shrink-0 border-t border-white/10 px-4 py-3 text-center text-sm text-slate-400", children: [
            "Sessao encerrada.",
            " ",
            /* @__PURE__ */ jsx("button", { onClick: onReset, className: "text-brand-amber hover:underline", children: "Iniciar nova conversa" })
          ] }) : /* @__PURE__ */ jsx(ChatInput, { onSend, disabled: isLoading, maxLength: maxInputLength })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { y: "100%" },
        animate: { y: 0 },
        exit: { y: "100%" },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        style: {
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)"
        },
        className: "fixed inset-0 z-50 flex flex-col overflow-hidden bg-background md:hidden",
        id: "hotelly-chat-panel-mobile",
        role: "dialog",
        "aria-label": "Chat com o assistente Hotelly",
        "aria-modal": "true",
        children: [
          /* @__PURE__ */ jsx(ChatHeader, { onClose, onReset, turnCount }),
          /* @__PURE__ */ jsx(ChatMessageList, { messages, isLoading, onSend }),
          /* @__PURE__ */ jsx(ChatCTABar, { variant: ctaVariant, onClose }),
          isMaxReached ? /* @__PURE__ */ jsxs("div", { className: "shrink-0 border-t border-white/10 px-4 py-3 text-center text-sm text-slate-400", children: [
            "Sessao encerrada.",
            " ",
            /* @__PURE__ */ jsx("button", { onClick: onReset, className: "text-brand-amber hover:underline", children: "Iniciar nova conversa" })
          ] }) : /* @__PURE__ */ jsx(ChatInput, { onSend, disabled: isLoading, maxLength: maxInputLength })
        ]
      }
    )
  ] }) });
}
const MAX_TURNS = 20;
const MAX_INPUT_LENGTH = 500;
const DEBOUNCE_MS = 1e3;
const WELCOME_TEXT = "Oi! 👋 Sou o Hotelly. Enquanto você dorme, respondo hóspedes, confirmo reservas e processo pagamentos pela sua hospedagem. Tem dúvida sobre como funciona? É só perguntar.";
const WORKER_URL = "https://hotelly-mascot-worker.marciolms.workers.dev/api/chat";
function makeWelcome() {
  return {
    id: "welcome",
    role: "assistant",
    content: WELCOME_TEXT,
    timestamp: Date.now()
  };
}
function useChat() {
  const [messages, setMessages] = useState([makeWelcome()]);
  const [isLoading, setIsLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const lastSendRef = useRef(0);
  const sendMessage = useCallback(
    async (text) => {
      const now = Date.now();
      if (now - lastSendRef.current < DEBOUNCE_MS) return;
      if (turnCount >= MAX_TURNS) return;
      if (!text.trim() || text.length > MAX_INPUT_LENGTH) return;
      lastSendRef.current = now;
      const sanitized = text.replace(/<[^>]*>/g, "").replace(/\{[^}]*\}/g, "").trim().slice(0, MAX_INPUT_LENGTH);
      if (!sanitized) return;
      const userMsg = {
        id: `user-${Date.now()}`,
        role: "user",
        content: sanitized,
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      try {
        const history = messages.filter((m) => m.id !== "welcome" && !m.id.startsWith("error-")).map((m) => ({ role: m.role, content: m.content }));
        const response = await fetch(WORKER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: sanitized, history })
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Erro desconhecido");
        }
        const assistantMsg = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.reply,
          timestamp: Date.now()
        };
        setMessages((prev) => [...prev, assistantMsg]);
        setTurnCount((prev) => prev + 1);
      } catch (error) {
        console.error("[Hotelly Mascote] Erro:", error == null ? void 0 : error.message);
        const errorMsg = {
          id: `error-${Date.now()}`,
          role: "assistant",
          content: "Ops, tive um problema técnico. Tenta de novo em alguns segundos? 🙏",
          timestamp: Date.now()
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsLoading(false);
      }
    },
    [turnCount, messages]
  );
  const resetSession = useCallback(() => {
    setMessages([makeWelcome()]);
    setTurnCount(0);
  }, []);
  return {
    messages,
    isLoading,
    turnCount,
    maxTurns: MAX_TURNS,
    maxInputLength: MAX_INPUT_LENGTH,
    sendMessage,
    resetSession,
    isMaxTurnsReached: turnCount >= MAX_TURNS
  };
}
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const {
    messages,
    isLoading,
    turnCount,
    maxTurns,
    maxInputLength,
    sendMessage,
    resetSession
  } = useChat();
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!hasOpened) setHasOpened(true);
  };
  const handleClose = () => setIsOpen(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ChatWindow,
      {
        isOpen,
        messages,
        isLoading,
        turnCount,
        maxTurns,
        maxInputLength,
        onSend: sendMessage,
        onClose: handleClose,
        onReset: resetSession
      }
    ),
    /* @__PURE__ */ jsx(ChatToggleButton, { isOpen, onClick: handleToggle, hasUnread: !hasOpened })
  ] });
}
export {
  ChatWidget as default
};
