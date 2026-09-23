import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Check,
  ChevronDown,
  Coins,
  CreditCard,
  FileCheck2,
  Globe,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Workflow,
  LockKeyhole,
  Command,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { home } from "../data/home";
import { WHATSAPP_URL } from "../lib/site";

const aiIcons = [MessageCircle, KeyRound, CreditCard, Sparkles, Users];
const operationIcons = [KeyRound, Sparkles, CreditCard, Users];
const managementIcons = [BellRing, TrendingUp, FileCheck2, Users];
const catalogueIcons = [
  MessageCircle,
  Globe,
  Coins,
  KeyRound,
  Sparkles,
  CreditCard,
  TrendingUp,
  ShieldCheck,
];
const stages = [
  {
    name: "Atendimento",
    icon: MessageCircle,
    label: "IA no WhatsApp",
    title: "Cada conversa, um começo.",
    text: "Informações da hospedagem, disponibilidade e cotação na mesma conversa.",
    status: "Conversa conectada à reserva",
    tags: ["Informações", "Disponibilidade", "Cotação"],
  },
  {
    name: "Reservas",
    icon: KeyRound,
    label: "Reservas e pagamentos",
    title: "Da intenção à confirmação.",
    text: "A reserva é confirmada após o recebimento do valor exigido pela hospedagem.",
    status: "Pagamento conforme suas regras",
    tags: ["Reserva", "Link de pagamento", "Confirmação"],
  },
  {
    name: "Operação",
    icon: Workflow,
    label: "Equipe e hospedagem",
    title: "O próximo passo está claro.",
    text: "Chegadas, saídas, quartos e pendências organizados para a equipe.",
    status: "Pessoas e rotinas conectadas",
    tags: ["Recepção", "Quartos", "Equipe"],
  },
  {
    name: "Gestão",
    icon: TrendingUp,
    label: "Informações do negócio",
    title: "Mais contexto para decidir.",
    text: "Reservas, custos por canal e prioridades para acompanhar a hospedagem.",
    status: "Uma visão do seu negócio",
    tags: ["Custos por canal", "Reservas", "Prioridades"],
  },
];

function Heading({
  title,
  eyebrow,
  number,
}: {
  title: string;
  eyebrow?: string;
  number?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && (
        <p className="eyebrow">
          {number && <span className="section-number">{number} /</span>}
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
    </div>
  );
}

function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`contact-button ${className}`}
    >
      {home.hero.primary}
      <ArrowUpRight size={19} aria-hidden="true" />
    </a>
  );
}

function IntelligenceVisual() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;
  return (
    <figure
      className="intelligence-visual"
      aria-label="Exemplo interativo das conexões do Hotelly"
    >
      <div className="visual-topline">
        <span>
          <span className="status-dot" />
          INTELIGÊNCIA CONECTADA
        </span>
        <Command size={15} aria-hidden="true" />
      </div>
      <div className="orbital-map" aria-hidden="true">
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-middle" />
        <div className="orbit orbit-inner" />
        <svg className="orbit-connections" viewBox="0 0 540 300" fill="none">
          <path
            d="M270 145 L110 70 M270 145 L442 80 M270 145 L107 223 M270 145 L442 223 M270 145 L270 300"
            stroke="url(#connection-color)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient
              id="connection-color"
              x1="90"
              y1="40"
              x2="450"
              y2="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7fa6e0" stopOpacity=".15" />
              <stop offset=".5" stopColor="#7fa6e0" stopOpacity=".7" />
              <stop offset="1" stopColor="#e5b451" stopOpacity=".15" />
            </linearGradient>
          </defs>
        </svg>
        <div className="intelligence-core">
          <img src="/icon.webp" alt="" width="512" height="512" />
          <span>HOTELLY AI</span>
        </div>
        {stages.map((item, i) => {
          const NodeIcon = item.icon;
          return (
            <div
              key={item.name}
              className={`orbit-node orbit-node-${i} ${i === active ? "is-active" : ""}`}
            >
              <NodeIcon size={16} />
              <span>{item.name}</span>
              <i />
            </div>
          );
        })}
        <span className="orbit-coordinate coordinate-left">H / 01</span>
        <span className="orbit-coordinate coordinate-right">
          SISTEMA INTEGRADO
        </span>
      </div>
      <div className="experience-panel">
        <div className="experience-label">
          <Icon size={15} aria-hidden="true" />
          <span>{stage.label}</span>
          <span className="experience-index">0{active + 1} / 04</span>
        </div>
        <div className="experience-copy" aria-live="polite" aria-atomic="true">
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
          <div className="experience-tags">
            {stage.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <p className="experience-status">
          <Check size={13} aria-hidden="true" />
          {stage.status}
        </p>
      </div>
      <div
        className="experience-controls"
        role="group"
        aria-label="Explore as áreas do Hotelly"
      >
        {stages.map((item, i) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
      <figcaption>
        Demonstração ilustrativa · Selecione uma área para explorar
      </figcaption>
    </figure>
  );
}

function ConversationIllustration() {
  return (
    <figure className="conversation-panel">
      <div className="conversation-header">
        <span className="icon-box">
          <MessageCircle size={21} aria-hidden="true" />
        </span>
        <div>
          <strong>Uma conversa. Novas possibilidades.</strong>
          <span>Atendimento por IA no WhatsApp</span>
        </div>
        <span className="status-dot" aria-hidden="true" />
      </div>
      <div className="conversation-body">
        <p className="message message-guest">
          Olá! Gostaria de conhecer as acomodações.<span>Hóspede</span>
        </p>
        <div className="message message-ai">
          <span className="ai-message-label">
            <Sparkles size={12} aria-hidden="true" /> HOTELLY
          </span>
          <p>Olá! Para quais datas você está planejando sua estadia?</p>
          <span>Com as informações da sua hospedagem</span>
        </div>
        <div className="conversation-connector" aria-hidden="true">
          <span />
          <ArrowDown size={14} />
          <span />
        </div>
        <div className="reservation-flow">
          <span className="icon-box">
            <KeyRound size={19} aria-hidden="true" />
          </span>
          <div>
            <strong>A conversa continua na reserva.</strong>
            <p>
              Cotação <ArrowRight size={12} aria-hidden="true" /> Reserva{" "}
              <ArrowRight size={12} aria-hidden="true" /> Pagamento
            </p>
          </div>
        </div>
        <p className="payment-note">
          <ShieldCheck size={15} aria-hidden="true" />
          Confirmação após o pagamento exigido.
        </p>
      </div>
      <figcaption>Exemplo ilustrativo do funcionamento do Hotelly.</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="hotelly-page">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section id="hero" className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-horizon" aria-hidden="true" />
          <div className="page-container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span />
                {home.hero.eyebrow}
              </p>
              <h1>
                Do primeiro contato <span>à gestão da hospedagem.</span>
              </h1>
              <p className="hero-description">{home.hero.body}</p>
              <div className="hero-actions">
                <ContactButton />
                <a className="text-link" href="#funcionalidades">
                  {home.hero.secondary}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-footnote">
                <span className="small-line" />
                Tecnologia que conecta. Hospitalidade que aproxima.
              </p>
            </div>
            <IntelligenceVisual />
          </div>
          <div className="page-container">
            <div className="connection-strip">
              <span className="connection-label">
                UMA OPERAÇÃO.
                <br />
                <strong>TUDO CONECTADO.</strong>
              </span>
              {home.hero.highlights.map((label, i) => {
                const Icon = [MessageCircle, CreditCard, Coins, Workflow][i];
                return (
                  <a
                    key={label}
                    href={
                      ["#atendimento", "#operacao", "#custos", "#gestao"][i]
                    }
                  >
                    <Icon size={19} aria-hidden="true" />
                    <span>{label}</span>
                    <ArrowUpRight
                      size={14}
                      className="strip-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="atendimento" className="section-space ai-section">
          <div className="page-container">
            <div className="section-intro">
              <Heading
                title={home.ai.title}
                eyebrow="Atendimento por IA"
                number="01"
              />
              <div className="section-description">
                {home.ai.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="ai-layout">
              <ConversationIllustration />
              <div className="journey-list">
                {home.ai.items.map((item, i) => {
                  const Icon = aiIcons[i];
                  return (
                    <article className="journey-item" key={item.title}>
                      <span className="journey-marker">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                      <span className="journey-index" aria-hidden="true">
                        0{i + 1}
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="operacao" className="section-space operation-section">
          <div className="page-container">
            <div className="section-intro">
              <Heading
                title={home.operation.title}
                eyebrow="Operação"
                number="02"
              />
              <div className="section-description">
                {home.operation.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="operation-grid">
              {home.operation.items.map((item, i) => {
                const Icon = operationIcons[i];
                return (
                  <article className="operation-card" key={item.title}>
                    <div className="operation-card-top">
                      <Icon size={24} aria-hidden="true" />
                      <span>0{i + 1}</span>
                    </div>
                    <div
                      className={`operation-art operation-art-${i}`}
                      aria-hidden="true"
                    >
                      {[0, 1, 2, 3, 4].map((j) => (
                        <i key={j} />
                      ))}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="custos" className="section-space costs-section">
          <div className="page-container costs-layout">
            <div>
              <Heading
                title={home.costs.title}
                eyebrow="Custos por reserva"
                number="03"
              />
              <div className="section-description costs-description">
                {home.costs.paragraphs.slice(0, 2).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div className="cost-ledger">
              <div className="ledger-header">
                <Coins size={18} aria-hidden="true" />
                <span>A COMPOSIÇÃO DE CADA VENDA</span>
                <span className="ledger-mark">H /</span>
              </div>
              <div className="ledger-row ledger-total">
                <span>Valor da reserva</span>
                <span className="ledger-symbol">+</span>
              </div>
              <div className="ledger-deductions">
                <div className="ledger-row">
                  <span>Taxas de cartão e parcelamento</span>
                  <span>−</span>
                </div>
                <div className="ledger-row">
                  <span>Comissões do canal</span>
                  <span>−</span>
                </div>
                <div className="ledger-row">
                  <span>Campanhas atribuídas à reserva</span>
                  <span>−</span>
                </div>
              </div>
              <div className="ledger-result">
                <span className="eyebrow">CLAREZA PARA DECIDIR</span>
                <h3>
                  O que fica
                  <br />
                  de cada reserva.
                </h3>
                <div className="ledger-rule" aria-hidden="true" />
                <p>{home.costs.formula}</p>
              </div>
              <p className="ledger-note">
                Custos considerados quando aplicáveis.
              </p>
            </div>
            <div className="costs-bottom">
              <div className="cost-tags">
                {home.costs.labels.map((label, i) => (
                  <span key={label}>
                    <i>0{i + 1}</i>
                    {label}
                  </span>
                ))}
              </div>
              <div className="section-description">
                {home.costs.paragraphs.slice(2).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gestao" className="section-space management-section">
          <div className="page-container">
            <div className="management-heading">
              <Heading
                title={home.management.title}
                eyebrow="Acompanhamento do negócio"
                number="04"
              />
              <span className="section-stamp" aria-hidden="true">
                <TrendingUp size={23} />
                INFORMAÇÃO
                <br />
                QUE ORIENTA.
              </span>
            </div>
            <div className="management-grid">
              {home.management.items.map((item, i) => {
                const Icon = managementIcons[i];
                return (
                  <article
                    key={item.title}
                    className={`management-card management-card-${i}`}
                  >
                    <span className="icon-box">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <ArrowUpRight
                      className="management-arrow"
                      size={18}
                      aria-hidden="true"
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="funcionalidades"
          className="section-space catalogue-section"
        >
          <div className="page-container">
            <div className="catalogue-layout">
              <div className="catalogue-intro">
                <Heading
                  title={home.catalogue.title}
                  eyebrow="O sistema em detalhe"
                  number="05"
                />
                <p className="section-description">
                  Explore cada área e veja como o Hotelly faz parte da sua
                  rotina.
                </p>
                <a href="#contato" className="text-link">
                  Vamos conversar
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <div className="catalogue-emblem" aria-hidden="true">
                  <img src="/icon.webp" alt="" width="512" height="512" />
                  <span>HOTELLY / ECOSSISTEMA</span>
                </div>
              </div>
              <div className="catalogue-list">
                {home.catalogue.groups.map((group, i) => {
                  const Icon = catalogueIcons[i];
                  return (
                    <details
                      key={group.title}
                      className="catalogue-item"
                      open={i === 0 ? true : undefined}
                    >
                      <summary>
                        <span className="catalogue-number">0{i + 1}</span>
                        <Icon size={19} aria-hidden="true" />
                        <h3>{group.title}</h3>
                        <ChevronDown
                          size={17}
                          className="details-chevron"
                          aria-hidden="true"
                        />
                      </summary>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>
                            <Check size={14} aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="confianca" className="section-space trust-section">
          <div className="page-container trust-layout">
            <div className="trust-symbol" aria-hidden="true">
              <div />
              <ShieldCheck size={48} strokeWidth={1} />
              <span>ACESSO · CONTROLE · HISTÓRICO</span>
            </div>
            <div>
              <Heading
                title={home.trust.title}
                eyebrow="Tecnologia com responsabilidade"
              />
              <div className="section-description">
                {home.trust.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="trust-tags">
                <span>
                  <LockKeyhole size={14} aria-hidden="true" />
                  Permissões por função
                </span>
                <span>
                  <FileCheck2 size={14} aria-hidden="true" />
                  Histórico de alterações
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section-space faq-section">
          <div className="page-container faq-layout">
            <div>
              <Heading
                title="Perguntas frequentes"
                eyebrow="Mais clareza, desde o início"
              />
              <p className="section-description">
                O próximo passo começa com as informações certas.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Fale com a gente
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="faq-list">
              {home.faq.map((item, i) => (
                <details key={item.title}>
                  <summary>
                    <span className="faq-number">0{i + 1}</span>
                    <span>{item.title}</span>
                    <ChevronDown
                      size={18}
                      className="details-chevron"
                      aria-hidden="true"
                    />
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="page-container">
            <div className="contact-surface">
              <div className="contact-orbits" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="contact-content">
                <p className="eyebrow">
                  <span className="status-dot" />O PRÓXIMO PASSO É UMA CONVERSA.
                </p>
                <Heading title={home.contact.title} />
                {home.contact.paragraphs.map((p) => (
                  <p className="contact-description" key={p}>
                    {p}
                  </p>
                ))}
                <ContactButton />
                <span className="contact-signature">
                  INTELIGÊNCIA PARA GERIR. LIBERDADE PARA RECEBER.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
