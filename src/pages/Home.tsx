import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LazySection from '../components/LazySection';
import { useAnalytics } from '../hooks/useAnalytics';
import { useCheckoutModal } from '../hooks/useCheckoutModal';
const HomePricing = React.lazy(() => import('../components/home/HomePricing'));
const CheckoutConfirmModal = React.lazy(() => import('../components/checkout/CheckoutConfirmModal'));
const CheckoutModalContent = React.lazy(() => import('../components/checkout/CheckoutModalContent'));
const HomeFAQ = React.lazy(() => import('../components/home/HomeFAQ'));
const LazyFooter = React.lazy(() => import('../components/Footer'));

export default function Home() {
  const { trackEvent, trackConversion, trackSectionView } = useAnalytics();
  const checkout = useCheckoutModal();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll depth tracking
    let scrollDepths = new Set<number>();
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledTo = (winScroll / height) * 100;
      
      [25, 50, 75, 90].forEach(depth => {
        if (scrolledTo >= depth && !scrollDepths.has(depth)) {
          scrollDepths.add(depth);
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', { depth_percentage: depth });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Section View Tracking
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          trackSectionView(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    // Give components time to render
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
      });
    }, 1000);

    return () => observer.disconnect();
  }, [trackSectionView]);

  return (
    <div className="bg-background text-foreground antialiased font-sans selection:bg-brand-sky/30">
      <Header onCtaClick={checkout.isEnabled ? () => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' }) : undefined} />

      <main>
        {/* Navbar padding offset added to Hero */}
        <section className="relative px-8 pt-32 pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-popover text-primary-hover font-label text-sm font-semibold tracking-wider mb-6">SUA PAZ DE VOLTA</span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-foreground leading-tight tracking-tight mb-8">
                  Você dorme. Sua hospedagem não.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  O Hotelly cuida da sua operação nas horas em que você deveria estar descansando. A IA responde hóspedes, fecha reservas e processa pagamentos pelo WhatsApp e pelo seu site, 24 horas por dia. Sem comissão, sem recepcionista de plantão.
              </p>
              <div className="flex flex-col items-start gap-3">
                {checkout.isEnabled ? (
                  <button
                    onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto text-center bg-primary-dark text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl hover:bg-primary-dark/90 transition-colors cursor-pointer"
                  >
                    Começar →
                  </button>
                ) : (
                  <div className="w-full sm:w-auto text-center bg-primary/50 text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl cursor-default select-none opacity-80">
                    🚀 Lançamento em Breve
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  {checkout.isEnabled
                    ? 'Onboarding assistido pela equipe Hotelly. Sem fidelidade.'
                    : 'Estamos finalizando os últimos detalhes. Em breve você poderá começar.'}
                </p>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 mt-12 lg:mt-0 min-h-[550px]">
              <div className="absolute inset-0 bg-info-subtle blur-[120px] rounded-full"></div>
              <div className="relative bg-card p-4 rounded-2xl shadow-2xl border border-border">
                <picture>
                  <source srcSet="/hotelly-concierge-550.avif" type="image/avif" />
                  <source srcSet="/hotelly-concierge-550.webp" type="image/webp" />
                  <img alt="Dashboard do Hotelly com mapa de quartos e reservas em tempo real" className="rounded-xl w-full shadow-lg" src="/hotelly-concierge-550.jpg" fetchPriority="high" width={550} height={550} decoding="async" />
                </picture>
                <div className="absolute -bottom-6 -left-6 bg-popover p-6 rounded-2xl shadow-2xl glass-card border border-border max-w-xs animate-pulse">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-amber">smart_toy</span>
                    <p className="text-sm font-semibold text-foreground">Reserva Confirmada</p>
                  </div>
                  <p className="text-xs text-muted-foreground">O Concierge Hotelly acaba de fechar uma reserva de 3 noites via WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Themes */}
        <section className="py-24 bg-card" id="eficiencia">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-4 text-foreground">Sua hospedagem funcionando. Você vivendo.</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">O Hotelly cuida da operação para você cuidar da sua vida. Cada funcionalidade existe para devolver algo que a rotina tirou de você.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-popover hover:bg-secondary transition-all group">
                <div className="w-14 h-14 rounded-xl bg-info-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Durma tranquilo</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">A IA responde hóspedes, fecha reservas e processa pagamentos pelo WhatsApp e pelo site, 24h. Você descansa.</p>
              </div>
              <div className="p-8 rounded-2xl bg-popover hover:bg-secondary transition-all group">
                <div className="w-14 h-14 rounded-xl bg-warning-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-amber text-3xl">sync</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Acaba o medo de dar errado</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Zero overbooking, garantido por design. Booking, Airbnb e Expedia sincronizados. Tudo funciona mesmo quando você não está olhando.</p>
              </div>
              <div className="p-8 rounded-2xl bg-popover hover:bg-secondary transition-all group">
                <div className="w-14 h-14 rounded-xl bg-info-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Crescimento sem sacrifício</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Precificação dinâmica que faz seu negócio crescer sem exigir mais de você. O sistema sugere, você aprova.</p>
              </div>
              <div className="p-8 rounded-2xl bg-popover hover:bg-secondary transition-all group">
                <div className="w-14 h-14 rounded-xl bg-warning-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-amber text-3xl">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Seu hóspede chega e tudo já está pronto</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Check-in digital pelo celular, FNRH automático pro governo. Sem papel, sem fila, sem você correr.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Assistant CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <img src="/icon.webp" alt="" className="w-16 h-16 mb-6 object-contain mx-auto" width="64" height="64" />
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 text-foreground">Ficou com dúvidas sobre o Hotelly?</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Nosso assistente está no canto da tela e pode te ajudar agora mesmo. Clique no ícone e pergunte o que quiser sobre planos, funcionalidades ou como funciona a implantação.</p>
          </div>
        </section>

        {/* Features (7 Pillars) */}
        <section className="py-24 bg-card" id="funcionalidades">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que o Hotelly devolve a você</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Cada funcionalidade existe para tirar algo da sua lista de preocupações. A tecnologia é como fazemos isso. A paz é o que você leva.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pilar 1 */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <img src="/icon.webp" alt="" className="w-[50px] h-[50px] mb-6 object-contain" width="105" height="105" />
                <h3 className="text-xl font-bold text-foreground mb-2">Suas noites de volta</h3>
                <p className="text-primary font-medium mb-6">A IA trabalha enquanto você descansa</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Atendimento inteligente por IA no WhatsApp. Responde, tira dúvidas e encaminha a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Cotação automática com período, tipo de quarto e número de hóspedes</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Link de pagamento do Mercado Pago enviado direto na conversa</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Follow-up persistente até o hóspede fechar a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> A IA nunca inventa informação. Só responde o que você cadastrou</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Você dorme. De verdade. A IA conhece seus quartos, seus preços e suas regras. E quando não sabe a resposta, avisa e chama um humano."
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Acaba o medo de dar errado</h3>
                <p className="text-primary font-medium mb-6">Tudo funciona mesmo quando você não está olhando</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Acompanhe tudo: da cotação até a saída do hóspede, num só lugar</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Proteção contra overbooking: o sistema trava a data na hora. Ninguém reserva o mesmo quarto duas vezes</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Mapa de Quartos interativo, veja 30 dias de ocupação e arraste reservas para mudar quarto ou data, com recálculo automático de preço</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Cancelamento com cálculo automático de reembolso</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Mapa visual que mostra os dias mais cheios e os mais vazios de cada tipo de quarto</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Saia para o almoço de domingo sem checar o celular. O sistema não permite overbooking, não perde dados, não esquece nada."
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Seu negócio cresce sem pesar mais em você</h3>
                <p className="text-primary font-medium mb-6">Receita inteligente, esforço zero</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Ajuste automático de preços conforme a procura e a ocupação</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Calendário visual de preços para os próximos 120 dias</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Você define o menor e o maior preço aceitável. O sistema nunca ultrapassa</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> <span>Painel financeiro com os indicadores que importam: RevPAR <span className="text-xs text-muted-foreground">(receita por quarto disponível)</span>, ADR <span className="text-xs text-muted-foreground">(diária média)</span> e taxa de ocupação</span></li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Relatórios financeiros no padrão usado pelos melhores hotéis do mundo, com conferência automática do Mercado Pago</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Mais receita sem mais trabalho. O sistema sugere o preço certo conforme ocupação e temporada. Você aprova de onde estiver."
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Seu hóspede chega e tudo já está pronto</h3>
                <p className="text-primary font-medium mb-6">Sem papel, sem fila, sem você correr</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Check-in digital enviado por link. O hóspede preenche no celular, de qualquer lugar</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> FNRH automático integrado ao Serpro. Os dados vão direto para o governo</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Assistente inteligente dentro do painel, pergunte qualquer coisa sobre sua hospedagem e receba a resposta na hora. <span className="font-medium text-amber/80">E evolui: cada mês, novas capacidades e conhecimento são adicionados automaticamente.</span></li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Painel de governança para organizar a limpeza dos quartos com prioridade</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Configuração inicial guiada, nossa equipe falará com você</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "O hóspede preenche no celular. O governo recebe automaticamente. Você não digita, não corre, não se preocupa."
                </div>
              </div>

              {/* Pilar 5 — Log Book Digital */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📒</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Nada se perde entre turnos</h3>
                <p className="text-primary font-medium mb-6">Sua tranquilidade não pode depender de quem está de plantão</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Log Book Digital para registrar ocorrências em tempo real: manutenção, hóspedes, operação, financeiro</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Passagem de turno com confirmação de leitura: o próximo funcionário lê, confirma e começa com contexto completo</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Resumo do turno consolidado: tudo que está aberto, quem registrou, o que falta resolver</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Cada entrada com carimbo de data, hora e nome, com trilha de auditoria automática</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Pergunte ao Copilot: "O que aconteceu no turno anterior?" e receba o resumo na hora</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Você não precisa estar lá para saber o que aconteceu. O Log Book Digital garante que a informação sobrevive à troca de plantão."
                </div>
              </div>

              {/* Pilar 6 — Motor de Reservas */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">💻</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Reservas diretas, sem comissão</h3>
                <p className="text-primary font-medium mb-6">100% do valor vai para você</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Um botão de reservas bonito e pronto para colocar no seu site</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Aceite reservas diretas sem pagar comissão para ninguém</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Disponibilidade atualizada em tempo real. Sem risco de vender o que não tem</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Pagamento integrado no próprio checkout do site</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Cada reserva direta é dinheiro que fica com você, não com as OTAs. Um botão no seu site e pronto."
                </div>
              </div>

              {/* Pilar 7 — Hub de Reservas */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col relative">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Presente em todo lugar, sem estar em lugar nenhum</h3>
                <p className="text-primary font-medium mb-6">Booking, Airbnb e Expedia num só painel</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-bold">★</span> 
                    <span>Exclusivo do plano <strong>Max</strong></span>
                  </li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Conexão com Booking, Airbnb, Expedia e mais</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Atualização automática de disponibilidade em todos os canais</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Relatórios que mostram quanto cada canal vende</li>
                  <li className="flex items-start gap-2"><span className="text-success">✅</span> Uma única tela para toda a sua distribuição</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "Seu negócio aparece em todo lugar sem você precisar estar em lugar nenhum. No Max, Booking, Airbnb, site próprio e WhatsApp ficam sincronizados num único painel."
                </div>
              </div>

              {/* Pilar 8 — Segurança e Proteção dos Dados */}
              <div className="bg-background border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Segurança e Proteção dos Dados</h3>
                <p className="text-primary font-medium mb-6">Seus dados e os dos seus hóspedes: sempre protegidos</p>
                <ul className="space-y-3 mb-8 flex-grow text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary">🔒</span> Proteção de dados integrada ao sistema. Projetado para suportar conformidade com a LGPD</li>
                  <li className="flex items-start gap-2"><span className="text-primary">🔒</span> Cada funcionário vê só o que precisa: a camareira não acessa dados financeiros, o recepcionista não mexe em configurações. São 6 níveis de acesso</li>
                  <li className="flex items-start gap-2"><span className="text-primary">🔒</span> Os dados pessoais dos hóspedes são protegidos com criptografia e controle de acesso rigoroso</li>
                  <li className="flex items-start gap-2"><span className="text-primary">🔒</span> Suas credenciais do Serpro ficam protegidas com criptografia AES-256-GCM</li>
                  <li className="flex items-start gap-2"><span className="text-primary">🔒</span> Registro completo de quem fez o quê e quando. Rastreabilidade total para você e para a lei</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-border text-sm text-muted-foreground italic">
                  "A LGPD não é opcional. No Hotelly, proteção de dados faz parte da arquitetura desde o primeiro dia."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multilingual */}
        <section className="py-24 bg-background" id="multilingual">
          <div className="max-w-5xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-6">
                  Seu hóspede fala qualquer idioma. Sua hospedagem também.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  O Concierge IA responde automaticamente no idioma do hóspede pelo WhatsApp. Inglês, espanhol, francês, italiano, o idioma que for. Sua hospedagem recebe o mundo inteiro sem você contratar ninguém a mais.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-0.5">✅</span>
                    <span>Funciona automaticamente, sem configuração</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-0.5">✅</span>
                    <span>Disponível em todos os planos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success mt-0.5">✅</span>
                    <span>Nenhum PMS no Brasil oferece atendimento multilingual nativo</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Para hóspedes estrangeiros</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Hóspede mandou mensagem em inglês às 23h? A IA responde, tira dúvidas e encaminha a reserva no idioma dele. Você acorda com a confirmação no painel.
                    </p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Para donos estrangeiros no Brasil</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Italiano em Búzios, francês em Trancoso, argentino em Floripa? O assistente de IA conversa com você no seu idioma nativo. O painel continua em português para sua equipe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Story */}
        <section className="py-24 bg-card" id="como-funciona">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sua hospedagem funciona. Você descansa.</h2>
              <p className="text-muted-foreground text-lg">O Hotelly responde seus hóspedes, fecha reservas e processa pagamentos enquanto você dorme. Para que acordar seja bom de novo.</p>
            </div>
            
            <div className="relative border-l-2 border-border ml-6 md:ml-12 space-y-16 pb-8">
              {/* Step 1 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-destructive/20 border-2 border-destructive text-destructive rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-destructive mb-3 uppercase tracking-wider text-sm">O Preço Invisível</h3>
                <blockquote className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                  Você acorda de madrugada para responder WhatsApp, vive com medo de overbooking e não consegue tirar um fim de semana de folga. O preço disso não está na planilha. Está na sua saúde, no seu tempo, na sua família.
                </blockquote>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white/10 border-2 border-border-strong text-muted-foreground rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-muted-foreground mb-3 uppercase tracking-wider text-sm">O Mito</h3>
                <blockquote className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                  A maioria dos sistemas hoteleiros organiza a operação, mas não a assume. Custam caro e ainda exigem que você trabalhe para eles. Você troca uma planilha por outra tela, mas o peso continua nos seus ombros.
                </blockquote>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-success-subtle border-2 border-success text-success rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-success mb-3 uppercase tracking-wider text-sm">A Sua Paz de Volta</h3>
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  O Hotelly não organiza a operação. Ele a assume. A IA responde hóspedes, fecha reservas e processa pagamentos, 24 horas por dia. Quando você olha o painel, está tudo no lugar. Sua hospedagem merece funcionar sem depender só de você. E você merece isso também.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <div id="planos" className="scroll-mt-24">
          <LazySection minHeight="50vh">
            <Suspense fallback={<div className="h-[50vh] bg-background"></div>}>
              <HomePricing onPlanSelect={checkout.isEnabled ? (plan) => checkout.openModal(plan, 'pricing') : undefined} />
            </Suspense>
          </LazySection>
        </div>
        <div id="faq" className="scroll-mt-24">
          <LazySection minHeight="40vh">
            <Suspense fallback={<div className="h-[40vh] bg-background"></div>}>
              <HomeFAQ />
            </Suspense>
          </LazySection>
        </div>
      </main>

      <LazySection minHeight="20vh">
        <Suspense fallback={<div className="h-[20vh] bg-background"></div>}>
          <LazyFooter onCtaClick={checkout.isEnabled ? () => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' }) : undefined} />
        </Suspense>
      </LazySection>

      {/* Checkout confirmation modal — only load chunks when modal is opened */}
      {checkout.isOpen && (
        <Suspense fallback={null}>
          <CheckoutConfirmModal
            isOpen={checkout.isOpen}
            onClose={() => checkout.closeModal('backdrop')}
          >
            <CheckoutModalContent
              plan={checkout.plan}
              status={checkout.status}
              errorMessage={checkout.errorMessage}
              onSubmit={checkout.submitCheckout}
              onClose={() => checkout.closeModal('button')}
            />
          </CheckoutConfirmModal>
        </Suspense>
      )}
    </div>
  );
}