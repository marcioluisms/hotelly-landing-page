import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import VagasCounter from '../components/VagasCounter';
import LazySection from '../components/LazySection';

const HomePricing = React.lazy(() => import('../components/home/HomePricing'));
const HomeFAQ = React.lazy(() => import('../components/home/HomeFAQ'));
const LazyFooter = React.lazy(() => import('../components/Footer'));

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-navy text-brand-offwhite antialiased font-sans selection:bg-brand-sky/30">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-navy pt-32 pb-24 md:pt-40 md:pb-32 min-h-[90vh] flex items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-sky/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-[720px]">
                  Sua hospedagem vendendo enquanto você dorme.
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-[600px]">
                  O Hotelly é o parceiro de receita que fecha reservas no WhatsApp 24h, faz follow-up até o Pix cair e cuida de toda a burocracia do Serpro. Outros sistemas guardam dados. O Hotelly fecha vendas.
                </p>
                <div className="mb-8">
                  <VagasCounter />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=trial_gratis" className="w-full sm:w-auto text-center bg-brand-amber text-brand-navy hover:bg-amber-500 font-bold py-2.5 px-6 rounded-lg transition-all text-lg">
                    Começar 14 dias grátis do Maestro
                  </a>
                  <a className="text-brand-sky hover:text-brand-sky/80 font-medium transition-colors underline decoration-brand-sky decoration-2 underline-offset-4 hover:decoration-4" href="#funcionalidades">
                    Ver como funciona
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 mt-12 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img alt="Hotelly AI Receptionist" className="w-full h-auto object-cover" src="/hotelly-concierge.webp?v=8" width="662" height="662" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features (7 Pillars) */}
        <section className="py-24 bg-brand-slate" id="funcionalidades">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que o Hotelly faz por você</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Reservas, financeiro, Serpro, atendimento ao cliente: tudo automatizado!</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pilar 1 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <img src="/icon.webp" alt="Hotelly AI" className="w-[50px] h-[50px] mb-6 object-contain" width="105" height="105" />
                <h3 className="text-xl font-bold text-white mb-2">Venda Automática 24/7</h3>
                <p className="text-brand-sky font-medium mb-6">Sua pousada vendendo enquanto você dorme</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento inteligente por IA no WhatsApp. Responde, tira dúvidas e encaminha a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cotação automática com período, tipo de quarto e número de hóspedes</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Link de pagamento do Mercado Pago enviado direto na conversa</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Follow-up persistente até o hóspede fechar a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> A IA nunca inventa informação. Só responde o que você cadastrou</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "A IA do Hotelly não é um chatbot genérico. Ela conhece seus quartos, seus preços e suas regras. E quando não sabe a resposta, avisa e chama um humano."
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">Gestão Completa de Reservas</h3>
                <p className="text-brand-sky font-medium mb-6">Do primeiro interesse ao check-out</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Acompanhe tudo: da cotação até a saída do hóspede, num só lugar</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Proteção contra overbooking: o sistema trava a data na hora. Ninguém reserva o mesmo quarto duas vezes</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa de Quartos interativo — veja 30 dias de ocupação e arraste reservas para mudar quarto ou data, com recálculo automático de preço</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cancelamento com cálculo automático de reembolso</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa visual que mostra os dias mais cheios e os mais vazios de cada tipo de quarto</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Overbooking? Impossível. O sistema não permite. Você gerencia de verdade, sem planilha e sem improviso."
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-white mb-2">Receita Inteligente</h3>
                <p className="text-brand-sky font-medium mb-6">Precificação que pensa por você</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Ajuste automático de preços conforme a procura e a ocupação</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Calendário visual de preços para os próximos 120 dias</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Você define o menor e o maior preço aceitável. O sistema nunca ultrapassa</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> <span>Painel financeiro com os indicadores que importam: RevPAR <span className="text-xs text-white/50">(receita por quarto disponível)</span>, ADR <span className="text-xs text-white/50">(diária média)</span> e taxa de ocupação</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Relatórios financeiros no padrão usado pelos melhores hotéis do mundo, com conferência automática do Mercado Pago</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Pare de cobrar o mesmo preço no Carnaval e na segunda-feira de chuva. O sistema sugere ajustes baseados em dados reais. Ocupação, temporada e demanda."
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Burocracia</h3>
                <p className="text-brand-sky font-medium mb-6">Nunca mais preencha uma ficha de papel</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in digital enviado por link. O hóspede preenche no celular, de qualquer lugar</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> FNRH automático integrado ao Serpro. Os dados vão direto para o governo</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente dentro do painel — pergunte qualquer coisa sobre sua hospedagem e receba a resposta na hora. <span className="font-medium text-brand-amber/80">E evolui: cada mês, novas capacidades e conhecimento são adicionados automaticamente.</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Painel de governança para organizar a limpeza dos quartos com prioridade</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Configuração inicial guiada, nossa equipe falará com você</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "O hóspede preenche no celular. O governo recebe automaticamente. Você não digita, não persegue, não improvisa."
                </div>
              </div>

              {/* Pilar 5 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-2">Segurança e Proteção dos Dados</h3>
                <p className="text-brand-sky font-medium mb-6">Seus dados e os dos seus hóspedes: sempre protegidos</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Proteção de dados integrada ao sistema. Projetado para suportar conformidade com a LGPD</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Cada funcionário vê só o que precisa: a camareira não acessa dados financeiros, o recepcionista não mexe em configurações. São 6 níveis de acesso</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Os dados pessoais dos hóspedes são protegidos com criptografia e controle de acesso rigoroso</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Suas credenciais do Serpro ficam protegidas com criptografia AES-256-GCM</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Registro completo de quem fez o quê e quando. Rastreabilidade total para você e para a lei</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "A LGPD não é opcional. No Hotelly, proteção de dados faz parte da arquitetura desde o primeiro dia."
                </div>
              </div>

              {/* Pilar 6 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">💻</div>
                <div className="text-xl font-bold text-white mb-2">Motor de Reservas</div>
                <p className="text-brand-sky font-medium mb-6">Vendas diretas no seu próprio site</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Um botão de reservas bonito e pronto para colocar no seu site</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Aceite reservas diretas sem pagar comissão para ninguém</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Disponibilidade atualizada em tempo real. Sem risco de vender o que não tem</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Pagamento integrado no próprio checkout do site</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Transforme visitantes do seu site em hóspedes pagantes sem pagar 15% de comissão para as OTAs."
                </div>
              </div>

              {/* Pilar 7 (Em breve) */}
              <div className="bg-brand-navy border-2 border-dashed border-white/20 rounded-2xl p-8 opacity-85 hover:opacity-100 transition-opacity flex flex-col relative">
                <div className="absolute top-6 right-6 bg-brand-amber text-brand-navy text-xs font-bold px-3 py-1 rounded-full border border-brand-amber shadow-sm shadow-brand-amber/50">🔮 Em breve</div>
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-xl font-bold text-white mb-2">Hub de Reservas (Em breve)</h3>
                <p className="text-brand-sky font-medium mb-6">O único lugar que você precisa olhar</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-sky">⚡</span> Conexão com Booking, Airbnb, Expedia e mais</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">⚡</span> Atualização automática de disponibilidade em todos os canais</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">⚡</span> Relatórios que mostram quanto cada canal vende</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">⚡</span> Uma única tela para toda a sua distribuição</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Em breve, o Hotelly será seu hub central. Booking, Airbnb, direto. Tudo num único painel."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Story */}
        <section className="py-24 bg-brand-navy" id="como-funciona">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Do Caos ao Lucro Automático</h2>
              <p className="text-white/60 text-lg">Entenda como o Hotelly liberta você das tarefas que roubam seu tempo e sua paz.</p>
            </div>
            
            <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-16 pb-8">
              {/* Step 1 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-brand-coral/20 border-2 border-brand-coral text-brand-coral rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <h3 className="text-xl font-bold text-brand-coral mb-3 uppercase tracking-wider text-sm">O Fardo</h3>
                <blockquote className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
                  Você se sente escravo da sua própria pousada? Paga por sistemas que te obrigam a digitar as fichas de hóspedes manualmente e passar horas fazendo follow-up no WhatsApp?
                </blockquote>
              </div>
              
              {/* Step 2 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white/10 border-2 border-white/30 text-white/70 rounded-full flex items-center justify-center font-bold text-xl">2</div>
                <h3 className="text-xl font-bold text-white/50 mb-3 uppercase tracking-wider text-sm">O Mito</h3>
                <blockquote className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
                  A maioria dos softwares hoteleiros é passiva. Eles guardam dados, mas não fazem vendas diretas. Custam caro e ainda exigem que você e sua equipe trabalhem para eles, alimentando planilhas e processos lentos.
                </blockquote>
              </div>
              
              {/* Step 3 */}
              <div className="relative pl-10 md:pl-16">
                <div className="absolute -left-[25px] top-0 w-12 h-12 bg-brand-emerald/20 border-2 border-brand-emerald text-brand-emerald rounded-full flex items-center justify-center font-bold text-xl">3</div>
                <h3 className="text-xl font-bold text-brand-emerald mb-3 uppercase tracking-wider text-sm">A Inteligência</h3>
                <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  O Hotelly é a sua Inteligência Ativa. Ele não apenas registra, ele age. Caça reservas através de follow-up automático e entrega o FNRH pronto para o Governo. Você recupera sua liberdade, enquanto o sistema garante que o Pix caia na conta. E no Preço de Inauguração, você entra pela metade do valor.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <LazySection minHeight="50vh">
          <Suspense fallback={<div className="h-[50vh] bg-brand-navy"></div>}>
            <HomePricing />
            <HomeFAQ />
          </Suspense>
        </LazySection>
      </main>

      <LazySection minHeight="20vh" rootMargin="500px">
        <Suspense fallback={null}>
          <LazyFooter />
        </Suspense>
      </LazySection>
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-brand-navy/95 backdrop-blur-md border-t border-white/10 z-50">
        <a className="block w-full text-center bg-brand-amber text-brand-navy font-bold py-2.5 px-6 rounded-lg shadow-lg" href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=preco_inauguracao">
          Garantir Preço de Inauguração
        </a>
      </div>
    </div>
  );
}
