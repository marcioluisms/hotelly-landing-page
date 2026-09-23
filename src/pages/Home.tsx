import {
  ArrowDown, BellRing, Check, ChevronDown, Coins,
  CreditCard, FileCheck2, Globe, KeyRound, MessageCircle, ShieldCheck,
  Sparkles, TrendingUp, Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { home } from '../data/home';
import { WHATSAPP_URL } from '../lib/site';

const container = 'max-w-7xl mx-auto px-5 sm:px-8';
const section = 'py-20 lg:py-24 scroll-mt-24';
const aiIcons = [MessageCircle, KeyRound, CreditCard, Sparkles, Users];
const operationIcons = [KeyRound, Sparkles, CreditCard, Users];
const managementIcons = [BellRing, TrendingUp, FileCheck2, Users];
const catalogueIcons = [MessageCircle, Globe, Coins, KeyRound, Sparkles, CreditCard, TrendingUp, ShieldCheck];

function Heading({ title, eyebrow }: { title: string; eyebrow?: string }) {
  return <div className="max-w-3xl">
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight text-balance">{title}</h2>
  </div>;
}

function ContactButton({ className = '' }: { className?: string }) {
  return <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-brass hover:bg-brass-hover text-brass-foreground font-semibold rounded-xl px-7 py-4 transition-colors shadow-lg shadow-brass/10 ${className}`}>
    <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />{home.hero.primary}
  </a>;
}

function FeatureCard({ title, text, icon: Icon, index }: { title: string; text: string; icon: LucideIcon; index?: number }) {
  return <article className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8">
    <div className="flex items-center justify-between mb-6">
      <span className="w-11 h-11 rounded-xl bg-brass-subtle text-brass flex items-center justify-center"><Icon className="w-5 h-5" aria-hidden="true" /></span>
      {index !== undefined && <span className="font-headline text-sm text-muted-foreground tabular" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>}
    </div>
    <h3 className="font-headline font-bold text-xl leading-snug">{title}</h3>
    <p className="mt-3 text-muted-foreground leading-relaxed">{text}</p>
  </article>;
}

function ProductIllustration() {
  return <figure className="relative lg:ml-5">
    <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
    <div className="relative card-glow rounded-2xl p-5 sm:p-7 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-border">
        <img src="/hotelly-logo.webp" alt="" width="563" height="170" className="h-6 w-auto" />
        <span className="rounded-full bg-primary-subtle px-3 py-1.5 text-xs text-primary font-medium">Atendimento e gestão</span>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-success-subtle text-success"><MessageCircle className="w-5 h-5" aria-hidden="true" /></span>
        <p className="font-semibold text-sm">IA no WhatsApp</p>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed">
        <p className="rounded-2xl rounded-tl-sm bg-popover border border-border p-4 mr-7">Olá! Gostaria de conhecer as acomodações.</p>
        <p className="rounded-2xl rounded-tr-sm bg-primary-subtle border border-primary/20 p-4 ml-7">Olá! Para quais datas você está planejando sua estadia?</p>
      </div>
      <div className="my-5 flex justify-center text-muted-foreground"><ArrowDown className="w-4 h-4" aria-hidden="true" /></div>
      <div className="rounded-xl bg-popover border border-border p-4">
        <div className="flex items-center gap-3 text-sm font-semibold"><CreditCard className="w-4 h-4 text-brass" aria-hidden="true" />Reservas e pagamentos</div>
        <div className="flex flex-wrap gap-2 mt-3 text-xs text-muted-foreground">
          {['Cotação', 'Reserva', 'Pagamento'].map(label => <span key={label} className="rounded-md border border-border px-2.5 py-1.5">{label}</span>)}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-popover p-4"><Coins className="w-5 h-5 text-brass mb-3" aria-hidden="true" /><p className="text-sm font-semibold">Custos por canal</p></div>
        <div className="rounded-xl border border-border bg-popover p-4"><TrendingUp className="w-5 h-5 text-primary mb-3" aria-hidden="true" /><p className="text-sm font-semibold">Operação e gestão</p></div>
      </div>
    </div>
    <figcaption className="relative text-center text-xs text-muted-foreground mt-4">Exemplo ilustrativo do funcionamento do Hotelly.</figcaption>
  </figure>;
}

export default function Home() {
  return <div className="bg-background text-foreground antialiased">
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-grid mask-fade-b pointer-events-none" />
        <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className={`relative ${container} grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center`}>
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">{home.hero.eyebrow}</p>
            <h1 className="font-headline font-extrabold text-[2.6rem] sm:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight text-balance">Do primeiro contato <span className="text-brass">à gestão da hospedagem.</span></h1>
            <p className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">{home.hero.body}</p>
            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <ContactButton />
              <a href="#funcionalidades" className="inline-flex items-center justify-center gap-2 font-medium px-2 py-3 hover:text-brass transition-colors">{home.hero.secondary}<ArrowDown className="w-4 h-4" aria-hidden="true" /></a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
              {home.hero.highlights.map(label => <li key={label} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brass" aria-hidden="true" />{label}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6"><ProductIllustration /></div>
        </div>
      </section>

      <section id="atendimento" className={`${section} bg-card/40 border-y border-border`}>
        <div className={container}>
          <Heading title={home.ai.title} eyebrow="Atendimento por IA" />
          <div className="mt-7 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">{home.ai.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">
            {home.ai.items.map((item, i) => <div key={item.title} className={i < 3 ? 'xl:col-span-2' : 'xl:col-span-3'}><FeatureCard {...item} icon={aiIcons[i]} index={i} /></div>)}
          </div>
        </div>
      </section>

      <section id="operacao" className={section}>
        <div className={container}>
          <Heading title={home.operation.title} eyebrow="Operação" />
          {home.operation.paragraphs.map(p => <p key={p} className="mt-7 max-w-3xl text-lg text-muted-foreground leading-relaxed">{p}</p>)}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {home.operation.items.map((item, i) => <FeatureCard key={item.title} {...item} icon={operationIcons[i]} />)}
          </div>
        </div>
      </section>

      <section id="custos" className={`${section} bg-card border-y border-border`}>
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5"><Heading title={home.costs.title} eyebrow="Custos por reserva" /></div>
            <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
              {home.costs.paragraphs.slice(0, 2).map(p => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="my-10 rounded-2xl card-glow p-7 sm:p-10">
            <p className="font-headline font-bold text-xl sm:text-2xl leading-relaxed max-w-4xl">{home.costs.formula}</p>
            <ul className="mt-7 flex flex-wrap gap-3">{home.costs.labels.map((label, i) => <li key={label} className="inline-flex items-center gap-2 rounded-lg bg-background border border-border px-3 py-2 text-sm text-muted-foreground"><span className="text-brass tabular" aria-hidden="true">0{i + 1}</span>{label}</li>)}</ul>
          </div>
          <div className="max-w-4xl space-y-4 text-lg text-muted-foreground leading-relaxed">{home.costs.paragraphs.slice(2).map(p => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section id="gestao" className={section}>
        <div className={container}>
          <Heading title={home.management.title} eyebrow="Acompanhamento do negócio" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {home.management.items.map((item, i) => <FeatureCard key={item.title} {...item} icon={managementIcons[i]} />)}
          </div>
        </div>
      </section>

      <section id="funcionalidades" className={`${section} bg-card/40 border-y border-border`}>
        <div className={container}>
          <Heading title={home.catalogue.title} eyebrow="Funcionalidades" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {home.catalogue.groups.map((group, i) => {
              const Icon = catalogueIcons[i];
              return <article key={group.title} className="rounded-2xl bg-card border border-border p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-primary-subtle text-primary flex items-center justify-center"><Icon className="w-5 h-5" aria-hidden="true" /></span>
                  <h3 className="font-headline font-bold text-xl leading-snug">{group.title}</h3>
                </div>
                <ul className="space-y-3">{group.items.map(item => <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed"><Check className="w-4 h-4 text-brass mt-1 shrink-0" aria-hidden="true" /><span>{item}</span></li>)}</ul>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="confianca" className={section}>
        <div className={`${container} grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}>
          <div className="lg:col-span-5"><ShieldCheck className="w-9 h-9 text-brass mb-6" aria-hidden="true" /><Heading title={home.trust.title} /></div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">{home.trust.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
        </div>
      </section>

      <section id="duvidas" className={`${section} border-t border-border`}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Heading title="Perguntas frequentes" />
          <div className="mt-10 space-y-3">{home.faq.map(item => <details key={item.title} className="group rounded-2xl bg-card border border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-semibold leading-relaxed rounded-2xl hover:text-brass transition-colors">
              {item.title}<ChevronDown className="w-5 h-5 text-brass shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.text}</p>
          </details>)}</div>
        </div>
      </section>

      <section id="contato" className="pt-4 pb-24 lg:pb-32 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl card-glow p-8 sm:p-14 text-center">
            <div className="absolute inset-0 bg-grid mask-fade-b opacity-60 pointer-events-none" />
            <div className="relative">
              <Heading title={home.contact.title} />
              {home.contact.paragraphs.map(p => <p key={p} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">{p}</p>)}
              <ContactButton className="mt-9" />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
}
