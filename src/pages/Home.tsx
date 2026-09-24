import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Circle,
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
  Command,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { home } from "../data/home";
import { WHATSAPP_URL, SITE_SAZAO } from "../lib/site";

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
const stages = [{name:"Atendimento",icon:MessageCircle,label:"Atendimento",title:"Cada conversa tem um contexto.",text:"Informações da hospedagem e participação da equipe orientam o desenho do atendimento.",tags:["Informações", "Regras", "Equipe"],status:"Percurso previsto de atendimento"},{name:"Reservas",icon:KeyRound,label:"Reservas",title:"Da intenção aos passos da reserva.",text:"Cotação, recebimento e confirmação precisam seguir regras conferidas.",tags:["Cotação", "Pagamento", "Conferência"],status:"Percurso previsto de reserva"},{name:"Operação",icon:Workflow,label:"Operação",title:"Informações para dar continuidade.",text:"Registros e pendências apoiam quem responde pelas tarefas da hospedagem.",tags:["Registros", "Tarefas", "Responsáveis"],status:"Organização prevista da rotina"},{name:"Gestão",icon:TrendingUp,label:"Gestão",title:"Informações para discutir decisões.",text:"A Sazão relaciona a leitura do negócio às prioridades e ao acompanhamento.",tags:["Leitura", "Prioridades", "Revisão"],status:"Tecnologia integrada ao serviço"}];

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
      aria-label="Conversar com a Sazão pelo WhatsApp — abrir em nova aba" href={WHATSAPP_URL}
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
      aria-label="A proposta do Hotelly"
    >
      <div className="visual-topline">
        <span>
          <span className="status-dot" />
          Hotelly · Produto em desenvolvimento
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
          <span>HOTELLY</span>
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
          PROPOSTA INTEGRADA
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
          <Circle size={13} aria-hidden="true" />
          {stage.status}
        </p>
      </div>
      <div
        className="experience-controls"
        role="group"
        aria-label="Explorar a proposta do Hotelly"
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
        Ilustração conceitual. Selecione uma área para conhecer a proposta. Não é demonstração funcional.
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
          <strong>Uma conversa começa com informações.</strong>
          <span>Atendimento previsto por IA no WhatsApp</span>
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
          <span>Exemplo do atendimento previsto, usando informações preparadas pela hospedagem.</span>
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
            <strong>Sequência conceitual da reserva.</strong>
            <p>
              Consulta → Cotação → Etapa de pagamento → Conferência para confirmação
            </p>
          </div>
        </div>
        <p className="payment-note">
          <ShieldCheck size={15} aria-hidden="true" />
          O envio de um link não confirma o recebimento.
        </p>
      </div>
      <figcaption>Conversa fictícia para apresentar a proposta. Não comprova funcionamento ou disponibilidade.</figcaption>
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
              <h1>Tecnologia a serviço <span>da gestão da sua hospedagem.</span></h1>
              {home.hero.paragraphs.map(p => <p key={p} className="hero-description">{p}</p>)}
              <div className="hero-actions">
                <ContactButton />
                <a className="text-link" href="#servico">
                  {home.hero.secondary}
                  <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="development-note">{home.hero.stage}</p>
              <p className="hero-footnote">
                <span className="small-line" />
                {home.hero.signature}
              </p>
            </div>
            <IntelligenceVisual />
          </div>
          <div className="page-container">
            <div className="connection-strip">
              <span className="connection-label">
                {home.hero.strip}
              </span>
              {home.hero.highlights.map((label, i) => {
                const Icon = [MessageCircle, CreditCard, Coins, Workflow][i];
                return (
                  <a
                    key={label}
                    href={
                      ["#atendimento", "#atendimento", "#operacao", "#gestao"][i]
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

<section id="servico" className="section-space integrated-service"><div className="page-container">
<div className="section-intro"><Heading title={home.service.title} eyebrow={home.service.eyebrow} /><div className="section-description">{home.service.paragraphs.map(p => <p key={p}>{p}</p>)}</div></div>
<div className="service-grid">{home.service.items.map((item,i)=><article className="operation-card" key={item.title}><div className="operation-card-top"><span>0{i+1}</span></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
<div className="section-description service-note">{home.service.tail.map(p => <p key={p}>{p}</p>)}</div><div className="hero-actions"><ContactButton /><a className="text-link" href={`${SITE_SAZAO}/como-atuamos`} target="_blank" rel="noopener noreferrer" aria-label="Conheça o acompanhamento Sazão — abrir em nova aba">Conheça o acompanhamento Sazão <ArrowUpRight size={16} aria-hidden="true" /></a></div>
</div></section>

        <section id="atendimento" className="section-space ai-section">
          <div className="page-container">
            <div className="section-intro">
              <Heading
                title={home.ai.title}
                eyebrow={home.ai.eyebrow}
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
                eyebrow={home.operation.eyebrow}
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
            <div className="section-description service-note">{home.operation.tail.map(p => <p key={p}>{p}</p>)}</div>
          </div>
        </section>

        <section id="custos" className="section-space costs-section">
          <div className="page-container costs-layout">
            <div>
              <Heading
                title={home.costs.title}
                eyebrow={home.costs.eyebrow}
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
                <span>COMPOSIÇÃO CONCEITUAL DA VENDA</span>
                <span className="ledger-mark">H /</span>
              </div>
              <div className="ledger-row ledger-total">
                <span>Valor da reserva</span>
                <span className="ledger-symbol">+</span>
              </div>
              <div className="ledger-deductions">
                <div className="ledger-row">
                  <span>Taxas de pagamento consideradas</span>
                  <span>−</span>
                </div>
                <div className="ledger-row">
                  <span>Comissões do canal consideradas</span>
                  <span>−</span>
                </div>
                <div className="ledger-row">
                  <span>Custos de campanha atribuídos e considerados</span>
                  <span>−</span>
                </div>
              </div>
              <div className="ledger-result">
                <span className="eyebrow">CÁLCULO CONCEITUAL</span>
                <h3>
                  Contribuição após custos comerciais considerados
                </h3>
                <div className="ledger-rule" aria-hidden="true" />
                <p>{home.costs.formula}</p>
              </div>
              <p className="ledger-note">
                Ilustração do conceito de cálculo. Sem dados reais ou valores de serviço. Fontes, períodos e regras precisam ser conferidos.
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
                eyebrow={home.management.eyebrow}
                number="04"
              />
              <span className="section-stamp" aria-hidden="true">
                <TrendingUp size={23} />
                Informações para analisar e acompanhar.
              </span>
            </div>
            <div className="section-description service-note">{home.management.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
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
                  eyebrow={home.catalogue.eyebrow}
                  number="05"
                />
                <p className="section-description">
                  {home.catalogue.paragraphs[0]}
                </p>
                <a href="#contato" className="text-link">
                  Converse sobre o acompanhamento da sua hospedagem
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <div className="catalogue-emblem" aria-hidden="true">
                  <img src="/icon.webp" alt="" width="512" height="512" />
                  <span>HOTELLY / PRODUTO EM DESENVOLVIMENTO</span>
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
                            <Circle size={14} aria-hidden="true" />
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
              <span>PREPARAÇÃO · PESSOAS · RESPONSABILIDADES</span>
            </div>
            <div>
              <Heading
                title={home.trust.title}
                eyebrow={home.trust.eyebrow}
              />
              <div className="section-description">
                {home.trust.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="trust-tags">{home.trust.labels.map(label => <span key={label}>{label}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section-space faq-section">
          <div className="page-container faq-layout">
            <div>
              <Heading
                title="Perguntas frequentes"
                eyebrow="Clareza antes do próximo passo"
              />
              <p className="section-description">
                Entenda a proposta antes de avançar.
              </p>
              <a
                aria-label="Conversar com a Sazão pelo WhatsApp — abrir em nova aba" href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Conversar com a Sazão
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
                <p className="contact-description">Contato comercial: (24) 99318-3300</p>
                <a className="text-link" href={`${SITE_SAZAO}/como-atuamos`} target="_blank" rel="noopener noreferrer" aria-label="Conheça o acompanhamento Sazão — abrir em nova aba">Conheça o acompanhamento Sazão <ArrowUpRight size={16} aria-hidden="true" /></a>
                <p className="contact-description">{home.contact.support}</p>
                <span className="contact-signature">
                  {home.hero.signature}
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
