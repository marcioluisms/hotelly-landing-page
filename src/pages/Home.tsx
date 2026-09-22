import React, { useEffect } from 'react';
import {
  ArrowDown,
  BellRing,
  Bot,
  CheckCircle2,
  ChevronRight,
  Coins,
  FileCheck2,
  Globe,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '../hooks/useAnalytics';
import { WHATSAPP_URL } from '../lib/site';

/* ────────────────────────────────────────────────────────────────────────── */
/* Conteúdo (copy v3.1, briefing de 21/set/2026)                              */
/* ────────────────────────────────────────────────────────────────────────── */

const camadas = [
  {
    n: '01',
    icon: BellRing,
    title: 'Avisa sozinho quando algo precisa de atenção.',
    text:
      'O sistema acompanha dez situações e avisa assim que uma delas acontece: cadastro de hóspede com pendência, tarefa que não foi concluída, quarto que não vai ficar pronto a tempo, ocorrência urgente sem resposta, hóspede esperando atendimento humano no WhatsApp, risco de vender o mesmo quarto duas vezes, diária vendida abaixo do preço mínimo, queda nas reservas, queda na nota do Google e informação que parou de chegar. Os avisos não trazem dados pessoais e não se repetem no mesmo dia.',
    closing: 'Se o sistema está em silêncio, é porque está tudo em ordem.',
  },
  {
    n: '02',
    icon: TrendingUp,
    title: 'Mostra se as reservas estão acelerando ou caindo.',
    text:
      'Todo dia o sistema registra quantas diárias já estão vendidas para os próximos 7, 14, 30 e 60 dias e compara com a semana anterior. Isso acontece sozinho, porque um dia sem esse registro é um dia que não volta. Uma lista de reservas mostra o que já foi vendido.',
    closing: 'O Hotelly mostra se a venda está indo mais rápido ou mais devagar do que antes, a tempo de reagir.',
  },
  {
    n: '03',
    icon: Coins,
    title: 'Mostra quanto sobra de cada diária, não só quanto entrou.',
    text:
      'De cada diária vendida, o sistema desconta a comissão do canal de venda e a taxa do cartão e mostra quanto de fato fica para a hospedagem. As regras desse cálculo ficam registradas e só passam a valer depois de simuladas e aprovadas. O fechamento do mês fica guardado com todas as versões e correções.',
    closing: 'Quando falta alguma informação, o sistema avisa que não conseguiu calcular, em vez de mostrar um zero enganoso.',
  },
  {
    n: '04',
    icon: FileCheck2,
    title: 'Presta contas ao proprietário todo mês, automaticamente.',
    text:
      'Todo mês o sistema monta a página de prestação de contas do proprietário. A gestão revisa e comenta, a página é publicada e fica guardada no histórico, sem alteração depois disso. O dono abre a tela "Minha casa" (a área do proprietário) e vê como foi a operação, o que aconteceu no dia a dia e as contas do mês.',
    closing: 'Nada é feito em planilha. Nada depende de alguém lembrar.',
  },
];

const colunas = [
  {
    icon: KeyRound,
    title: 'Recepção e hóspede',
    items: [
      'Situação do dia com chegadas, saídas, hóspedes na casa e pendências.',
      'Mapa de quartos dia a dia.',
      'Antes de mudar a data ou cancelar uma reserva, o sistema mostra o que essa mudança afeta.',
      'Cadastro do hóspede com histórico de estadas e anotações, sem cadastros repetidos.',
      'Check-in pelo celular, com documento e acompanhantes, que preenche a ficha do hóspede e a envia ao cadastro nacional de hóspedes (FNRH), obrigatório por lei.',
      'Área do hóspede, sem precisar de senha, onde ele vê a conta da estada e o comprovante.',
    ],
  },
  {
    icon: Sparkles,
    title: 'Governança',
    subtitle: 'limpeza e arrumação dos quartos',
    items: [
      'Situação de cada quarto, inspeção e fila de limpeza organizada pela ordem das chegadas.',
      'Produtividade de cada camareira e atrasos visíveis.',
      'Bloqueio de quarto em manutenção e alerta quando o mesmo quarto apresenta o mesmo problema de novo.',
      'Planejamento do café da manhã.',
      'Livro de ocorrências digital, com passagem de turno e ocorrências urgentes marcadas.',
      'Tela de problemas da hospedagem, para a recepção resolver o que antes só o administrador via.',
    ],
  },
  {
    icon: Globe,
    title: 'Venda direta e sites de reserva',
    items: [
      'Página de reservas própria e um botão de reserva para colocar no site da hospedagem.',
      'Enquanto o hóspede paga, o quarto fica segurado por 15 minutos e ninguém mais consegue vendê-lo: o mesmo quarto nunca é vendido duas vezes.',
      'Pagamento online direto na conta da hospedagem.',
      'Até 20 tabelas de preço, regras por data, temporadas com mínimo de noites, preços por faixa etária e itens extras.',
      'Preço mais alto nos sites de reserva (as OTAs), para que reservar direto seja sempre mais vantajoso.',
      'Toda reserva registra de onde veio. E dá para ver quantas pessoas visitaram a página de reservas, quantas reservaram e de qual campanha ou link vieram.',
    ],
  },
];

const financeiro = [
  'Cada reserva tem sua conta (o fólio), com lançamentos, pagamentos e saldo.',
  'Estorno passa por pedido, aprovação e execução, tudo registrado.',
  'Relatórios de receita, financeiro, ocupação, desempenho por canal de venda e auditoria, que podem ser exportados para planilha.',
  'Diária média (ADR), receita por quarto disponível (RevPAR) e ocupação calculados de duas formas, nunca misturadas: pelo que entrou no caixa e pelo período a que a receita se refere.',
  'Quanto sobra de cada diária depois de comissão e taxa.',
  'Recomendação de preço baseada na ocupação, no calendário de feriados e picos e no ritmo das reservas, dentro de um mínimo e um máximo definidos pela gestão.',
];

const indicadoresDia = [
  { label: 'Quartos prontos', tone: 'success' },
  { label: 'Check-ins pelo celular concluídos', tone: 'success' },
  { label: 'Cadastros com pendência', tone: 'warning' },
  { label: 'Ocorrências urgentes atrasadas', tone: 'destructive' },
  { label: 'Hóspedes esperando atendimento humano', tone: 'warning' },
  { label: 'Pagamentos pendentes na saída', tone: 'success' },
] as const;

const tiles = [
  { value: '10.700+', label: 'testes automáticos' },
  { value: '463', label: 'telas do sistema' },
  { value: '90+', label: 'módulos, da recepção ao financeiro' },
  { value: '~80', label: 'artigos de ajuda dentro do sistema, com cinco guias por perfil' },
];

const confianca = [
  'Cada hospedagem só enxerga os próprios dados, mesmo quando várias usam o mesmo sistema.',
  'Seis perfis de acesso (visualizador, camareira, recepção, financeiro, gerente, proprietário), cada um vendo só o que precisa, com verificação em duas etapas no login.',
  'Proteção de dados conforme a LGPD: consentimento do hóspede registrado na reserva, exportação e apagamento dos dados a pedido, opção de não receber marketing, dados pessoais criptografados.',
  'Registro de quem alterou o quê e quando.',
  'Tarefas automáticas que tentam de novo quando falham, proteção contra falha de serviços externos, alertas de infraestrutura e cópias de segurança.',
];

const toneDot: Record<string, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  destructive: 'bg-destructive',
};

/* ────────────────────────────────────────────────────────────────────────── */

function SectionHeading({ eyebrow, title, lead, align = 'left' }: { eyebrow: string; title: string; lead?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-foreground text-balance">{title}</h2>
      {lead && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}

function HeroMock() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute -inset-10 translate-x-1/3 translate-y-1/4 bg-brass/10 blur-3xl rounded-full" />

      <div className="relative card-glow rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/40">
        {/* Cabeçalho do painel */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">Visão da Casa</p>
            <p className="font-headline font-bold text-foreground">Hoje</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-success-subtle text-success text-xs font-semibold px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-success pulse-dot" />
            Tudo em ordem
          </div>
        </div>

        {/* Seis indicadores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {indicadoresDia.map((i) => (
            <div key={i.label} className="rounded-xl bg-popover border border-border p-3 min-h-[74px] flex flex-col justify-between">
              <span className={`w-2 h-2 rounded-full ${toneDot[i.tone]}`} />
              <p className="text-[12px] leading-snug text-foreground/90">{i.label}</p>
            </div>
          ))}
        </div>

        {/* Ritmo das reservas */}
        <div className="mt-4 rounded-xl bg-popover border border-border p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-foreground">Ritmo das reservas</p>
            <p className="text-[11px] text-muted-foreground">comparado com a semana anterior</p>
          </div>
          <div className="grid grid-cols-4 gap-3 items-end h-16">
            {[
              { d: '7d', h: 'h-8', up: true },
              { d: '14d', h: 'h-11', up: true },
              { d: '30d', h: 'h-9', up: false },
              { d: '60d', h: 'h-14', up: true },
            ].map((b) => (
              <div key={b.d} className="flex flex-col items-center gap-1.5">
                <div className={`w-full rounded-md ${b.h} ${b.up ? 'bg-primary/70' : 'bg-warning/60'}`} />
                <span className="text-[11px] text-muted-foreground tabular">{b.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerta flutuante */}
      <div className="absolute -bottom-12 left-2 sm:-left-8 glass border border-border rounded-xl px-4 py-3 shadow-xl max-w-[260px]">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-brass-subtle text-brass flex items-center justify-center shrink-0">
            <BellRing className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">Nenhum alerta nas últimas 24h</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Dez regras de aviso acompanhando a operação.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { trackWhatsAppClick, trackSectionView, trackEvent } = useAnalytics();

  useEffect(() => {
    const scrollDepths = new Set<number>();
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) return;
      const scrolledTo = (winScroll / height) * 100;
      [25, 50, 75, 90].forEach((depth) => {
        if (scrolledTo >= depth && !scrollDepths.has(depth)) {
          scrollDepths.add(depth);
          trackEvent('scroll_depth', { depth_percentage: depth });
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) trackSectionView(entry.target.id);
        });
      },
      { threshold: 0.3 },
    );
    const t = setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    }, 800);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-background text-foreground antialiased">
      <Header />

      <main>
        {/* ── Bloco 1. Hero ─────────────────────────────────────────────── */}
        <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-grid mask-fade-b pointer-events-none" />
          <div className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-6">Gestão inteligente de hospedagens</p>
              <h1 className="font-headline font-extrabold text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] tracking-tight text-foreground text-balance">
                A hospedagem funciona.
                <br />
                <span className="text-brass">Você acompanha tudo.</span>
              </h1>
              <p className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                O Hotelly é o sistema que a Sazão usa para operar as hospedagens que estão sob a gestão dela. Ele organiza a recepção, a limpeza dos quartos e o financeiro, avisa quando algo precisa de atenção e apresenta ao proprietário, todo mês, a prestação de contas do que aconteceu.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackWhatsAppClick('hero')}
                  className="inline-flex items-center justify-center gap-2 bg-brass hover:bg-brass-hover text-brass-foreground font-semibold text-base rounded-xl px-7 py-4 transition-colors shadow-lg shadow-brass/20"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
                <a href="#o-que-faz" className="inline-flex items-center justify-center gap-2 text-foreground/90 hover:text-foreground font-medium px-2 py-3 transition-colors">
                  Ver o que o sistema faz
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Sistema construído e operado pela Sazão Gestão Hoteleira.</p>
            </div>
            <div className="lg:col-span-6 lg:pl-6 pb-14">
              <HeroMock />
            </div>
          </div>
        </section>

        {/* ── Bloco 2. O problema ───────────────────────────────────────── */}
        <section id="problema" className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="rounded-3xl bg-card border border-border p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-4">A dúvida de todo proprietário</p>
                <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-balance">
                  Entregar a operação a alguém não pode significar ficar sem saber o que acontece.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10 text-lg text-muted-foreground leading-relaxed space-y-5">
                <p>
                  Quem tem uma hospedagem e pensa em deixar a operação nas mãos de outra empresa trava sempre na mesma dúvida: como vou saber o que está acontecendo lá dentro? Relatório feito à mão chega atrasado, mostra só o que quem fez quis mostrar e não responde à pergunta que importa: o que está dando errado agora?
                </p>
                <p className="text-foreground font-medium">
                  O Hotelly foi feito para responder a essa pergunta todos os dias, automaticamente, sem que ninguém precise preparar nada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bloco 3. As quatro camadas ────────────────────────────────── */}
        <section id="o-que-faz" className="py-20 lg:py-28 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading eyebrow="O que faz" title="Quatro coisas que um sistema comum de hotel não faz." />
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
              {camadas.map((c) => (
                <article key={c.n} className="group rounded-2xl bg-card border border-border p-7 sm:p-9 hover:border-brass/40 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-11 h-11 rounded-xl bg-brass-subtle text-brass flex items-center justify-center">
                      <c.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-headline font-bold text-sm text-muted-foreground tabular">{c.n}</span>
                  </div>
                  <h3 className="font-headline font-bold text-xl sm:text-2xl leading-snug text-foreground text-balance">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{c.text}</p>
                  <p className="mt-4 text-foreground font-medium border-l-2 border-brass pl-4">{c.closing}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bloco 4. Como funciona ────────────────────────────────────── */}
        <section id="como-opera" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading eyebrow="Como funciona no dia a dia" title="A hospedagem funciona seguindo o sistema, não a memória de alguém." />
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {colunas.map((col) => (
                <div key={col.title} className="rounded-2xl bg-background border border-border p-7">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                      <col.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-lg text-foreground leading-tight">{col.title}</h3>
                      {col.subtitle && <p className="text-xs text-muted-foreground mt-0.5">{col.subtitle}</p>}
                    </div>
                  </div>
                  <ul className="space-y-3.5">
                    {col.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed">
                        <ChevronRight className="w-4 h-4 mt-1 text-brass shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Linha de apoio: Concierge e Copiloto */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl card-glow p-7 flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-success-subtle text-success flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-foreground">Concierge no WhatsApp</h3>
                  <p className="text-xs text-muted-foreground mb-3">atendente com inteligência artificial</p>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Responde ao hóspede em qualquer idioma, com base nas informações da hospedagem. Faz a cotação de diárias dentro da conversa, respeita o horário de atendimento definido e passa para a recepção quando é preciso uma pessoa.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl card-glow p-7 flex gap-5">
                <div className="w-11 h-11 rounded-xl bg-info-subtle text-info flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-foreground">Copiloto no painel</h3>
                  <p className="text-xs text-muted-foreground mb-3">assistente da equipe</p>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    Responde às perguntas da equipe mostrando na tela a reserva, o mapa de quartos ou o resumo do dia. Cada pessoa só vê o que o seu perfil de acesso permite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bloco 5. Dinheiro ─────────────────────────────────────────── */}
        <section id="financeiro" className="py-20 lg:py-28 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Dinheiro"
                title="Da conta do hóspede ao fechamento do mês, com cada número no lugar certo."
              />
              <p className="mt-8 text-foreground font-medium border-l-2 border-brass pl-4">O sistema recomenda o preço. A gestão decide.</p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {financeiro.map((f) => (
                  <li key={f} className="rounded-2xl bg-card border border-border p-5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[15px] text-muted-foreground leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Bloco 6. A tela da semana ─────────────────────────────────── */}
        <section id="gestao" className="py-20 lg:py-28 bg-card border-y border-border scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Gestão"
                title="Uma tela para a reunião da semana. Até cinco prioridades, cada uma com dono e prazo."
                lead="A tela Gestão reúne, num lugar só, ocupação, diárias vendidas e ritmo das reservas para os próximos 7, 14, 30 e 60 dias, a comparação com a semana anterior, os indicadores de atendimento e a nota do Google. Ali a gestão registra até cinco prioridades da semana, cada uma com responsável, prazo e forma de medir."
              />
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-background border border-border p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">Visão da Casa</p>
                <p className="mt-1 text-foreground font-headline font-bold">Seis indicadores do dia, em verde, amarelo ou vermelho</p>
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {indicadoresDia.map((i) => (
                    <li key={i.label} className="flex items-center gap-3 rounded-xl bg-popover border border-border px-4 py-3 text-sm text-foreground/90">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${toneDot[i.tone]}`} aria-hidden="true" />
                      {i.label}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">Ilustração da tela. As cores mudam conforme a situação de cada indicador.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bloco 7. Confiança ────────────────────────────────────────── */}
        <section id="confianca" className="py-20 lg:py-28 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <SectionHeading eyebrow="Confiança" title="Construído, testado e em funcionamento." />
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {tiles.map((t) => (
                <div key={t.label} className="rounded-2xl bg-card border border-border p-6">
                  <p className="font-headline font-extrabold text-4xl lg:text-5xl text-brass tabular tracking-tight">{t.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-snug">{t.label}</p>
                </div>
              ))}
            </div>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {confianca.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border border-border p-5 last:md:col-span-2">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[15px] text-muted-foreground leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center text-muted-foreground">
              O Hotelly está construído, testado e em funcionamento. <span className="text-foreground">Não publicamos resultado que ainda não medimos.</span>
            </p>
          </div>
        </section>

        {/* ── Bloco 8. CTA final ────────────────────────────────────────── */}
        <section id="contato" className="pb-24 lg:pb-32 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-3xl card-glow p-9 sm:p-14 text-center">
              <div className="absolute inset-0 bg-grid mask-fade-b opacity-60 pointer-events-none" />
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-brass/10 blur-[120px] pointer-events-none" />
              <div className="relative">
                <p className="eyebrow mb-5">Conversa, não cadastro</p>
                <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-balance">
                  Quer ver como o sistema funcionaria na sua hospedagem?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Quem usa o Hotelly são as hospedagens que adotam o modelo de gestão inteligente da Sazão. Se você tem um hotel ou uma pousada e quer entender como isso funcionaria na sua, a conversa começa no WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackWhatsAppClick('contato')}
                  className="mt-9 inline-flex items-center justify-center gap-2 bg-brass hover:bg-brass-hover text-brass-foreground font-semibold text-base rounded-xl px-8 py-4 transition-colors shadow-lg shadow-brass/20"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Falar no WhatsApp
                </a>
                <p className="mt-5 text-sm text-muted-foreground">Não há demonstração automática nem cadastro. Há uma conversa.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
