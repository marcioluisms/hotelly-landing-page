import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                  Sua hospedagem com IA: Reservas automáticas, Follow-up persistente e <span className="text-brand-sky">FNRH sem papel.</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-[600px]">
                  Enquanto outros sistemas só guardam dados, o Hotelly fecha vendas. Nossa IA atende no WhatsApp, faz o follow-up até o Pix cair e automatiza toda a burocracia do Serpro. <strong className="text-brand-amber">Tudo isso com Preço de Inauguração — enquanto durar.</strong>
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a className="w-full sm:w-auto text-center bg-brand-amber hover:bg-amber-500 text-brand-navy font-bold py-2.5 px-6 rounded-lg transition-all text-lg shadow-xl shadow-brand-amber/20" href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=preco_inauguracao">
                    Garantir Preço de Inauguração
                  </a>
                  <a className="w-full sm:w-auto text-center bg-transparent border border-brand-sky text-brand-sky hover:bg-brand-sky/10 font-bold py-2.5 px-6 rounded-lg transition-all text-lg" href="#como-funciona">
                    Ver como o Hotelly funciona
                  </a>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 bg-brand-coral/10 border border-brand-coral/20 text-brand-coral px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="animate-pulse">⏳</span> Preço de Inauguração encerra sem aviso. Quem entrar depois paga o valor da tabela.
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 mt-12 lg:mt-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img alt="Hotelly AI Receptionist" className="w-full h-auto object-cover" src="/hotelly-concierge.jpg?v=8" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features (6 Pillars) */}
        <section className="py-24 bg-brand-slate" id="funcionalidades">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tudo o que o Hotelly faz por você</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">Uma plataforma completa focada em aumentar sua receita e zerar sua burocracia.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pilar 1 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <img src="/icon.png" alt="Hotelly AI" className="w-[50px] h-[50px] mb-6 object-contain" />
                <h3 className="text-xl font-bold text-white mb-2">Venda Automática 24/7</h3>
                <p className="text-brand-sky font-medium mb-6">Sua pousada vendendo enquanto você dorme</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento inteligente por IA no WhatsApp — responde, tira dúvidas e encaminha a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cotação automática com período, tipo de quarto e número de hóspedes</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Link de pagamento do Mercado Pago enviado direto na conversa</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Follow-up persistente até o hóspede fechar a reserva</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> A IA nunca inventa informação — só responde o que você cadastrou</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "A IA do Hotelly não é um chatbot genérico — ela conhece seus quartos, seus preços e suas regras. E quando não sabe a resposta, avisa e chama um humano."
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">Gestão Completa de Reservas</h3>
                <p className="text-brand-sky font-medium mb-6">Do primeiro interesse ao check-out</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Acompanhe tudo: da cotação até a saída do hóspede, num só lugar</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Proteção contra overbooking: o sistema trava a data na hora — ninguém reserva o mesmo quarto duas vezes</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Calendário visual de reservas — veja quem chega e quem sai nos próximos 30 dias</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cancelamento com cálculo automático de reembolso</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa visual que mostra os dias mais cheios e os mais vazios de cada tipo de quarto</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Overbooking? Impossível — o sistema não permite. Você gerencia de verdade, sem planilha e sem improviso."
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
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Você define o menor e o maior preço aceitável — o sistema nunca ultrapassa</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> <span>Painel financeiro com os indicadores que importam: RevPAR <span className="text-xs text-white/50">(receita por quarto disponível)</span>, ADR <span className="text-xs text-white/50">(diária média)</span> e taxa de ocupação</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Relatórios financeiros no padrão usado pelos melhores hotéis do mundo, com conferência automática do Mercado Pago</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "Pare de cobrar o mesmo preço no Carnaval e na segunda-feira de chuva. O sistema sugere ajustes baseados em dados reais — ocupação, temporada e demanda."
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="bg-brand-navy border border-white/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-sky/10 transition-all flex flex-col">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-xl font-bold text-white mb-2">Zero Burocracia</h3>
                <p className="text-brand-sky font-medium mb-6">Nunca mais preencha uma ficha de papel</p>
                <ul className="space-y-3 mb-8 flex-grow text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in digital enviado por link — o hóspede preenche no celular, de qualquer lugar</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> FNRH automático integrado ao Serpro — os dados vão direto para o governo</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente dentro do painel — pergunte qualquer coisa sobre sua pousada e receba a resposta na hora</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Painel de governança para organizar a limpeza dos quartos com prioridade</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Configuração inicial guiada — a IA te ajuda a cadastrar tudo em minutos</li>
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
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Proteção de dados já vem de fábrica — seu sistema nasce em conformidade com a LGPD</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Cada funcionário vê só o que precisa: a camareira não acessa dados financeiros, o recepcionista não mexe em configurações — são 6 níveis de acesso</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Os dados pessoais dos hóspedes nunca ficam expostos — o sistema protege automaticamente</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Suas credenciais do Serpro ficam protegidas com o mesmo nível de segurança usado pelos bancos</li>
                  <li className="flex items-start gap-2"><span className="text-brand-sky">🔒</span> Registro completo de quem fez o quê e quando — rastreabilidade total para você e para a lei</li>
                </ul>
                <div className="bg-white/5 p-4 rounded-lg border border-white/5 text-sm text-white/80 italic">
                  "A LGPD não é opcional — e no Hotelly, não é remendo. Cada membro da equipe vê apenas o que precisa, e os dados dos hóspedes estão blindados."
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
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Disponibilidade atualizada em tempo real — sem risco de vender o que não tem</li>
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
                  "Em breve, o Hotelly será seu hub central. Booking, Airbnb, direto — tudo num único painel."
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
                  Você se sente escravo da sua própria pousada? Paga caro por sistemas que ainda te obrigam a digitar FNRH manual e perder horas fazendo follow-up no WhatsApp?
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

        {/* Social Proof & Authority */}
        <section className="py-20 bg-brand-slate border-y border-white/5">
          <div className="container mx-auto px-4 text-center">
            {/* Counter */}
            <div className="mb-16">
              <p className="text-3xl md:text-4xl font-bold text-white">
                <span className="text-brand-amber text-5xl font-black">14</span> hoteleiros já garantiram o Preço de Inauguração.
              </p>
              <p className="text-white/60 mt-4 text-lg">Você ainda pode entrar antes que a fase inaugural encerre.</p>
            </div>

            {/* Authority Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              <div className="bg-brand-navy border border-brand-amber/30 px-6 py-3 rounded-lg flex items-center gap-3">
                <span className="text-xl">🏛️</span> <span className="font-bold text-white/90 text-sm">Integrado ao Serpro</span>
              </div>
              <div className="bg-brand-navy border border-brand-amber/30 px-6 py-3 rounded-lg flex items-center gap-3">
                <span className="text-xl">🔒</span> <span className="font-bold text-white/90 text-sm">Dados protegidos por lei (LGPD)</span>
              </div>
              <div className="bg-brand-navy border border-brand-amber/30 px-6 py-3 rounded-lg flex items-center gap-3">
                <span className="text-xl">💳</span> <span className="font-bold text-white/90 text-sm">Mercado Pago</span>
              </div>
              <div className="bg-brand-navy border border-brand-amber/30 px-6 py-3 rounded-lg flex items-center gap-3">
                <span className="text-xl">🏨</span> <span className="font-bold text-white/90 text-sm">Fundador Hoteleiro</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-24 bg-brand-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Para quem é o Hotelly</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Para quem é */}
              <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-10 rounded-3xl">
                <div className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <span className="w-8 h-8 rounded-full bg-brand-emerald text-brand-navy flex items-center justify-center text-sm">✓</span>
                  O Hotelly é para você se:
                </div>
                <ul className="space-y-5 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-emerald mt-1">✅</span>
                    <span><strong>Você tem uma pousada de pequeno ou médio porte</strong> e busca profissionalismo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-emerald mt-1">✅</span>
                    <span><strong>Você busca uma gestão organizada</strong> e quer ter o controle total das suas vendas diretas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-emerald mt-1">✅</span>
                    <span><strong>Você quer parar de perder reservas</strong> por não conseguir atender fora do horário comercial.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-emerald mt-1">✅</span>
                    <span><strong>Você quer parar de ser o sistema</strong> e deixar a tecnologia trabalhar por você.</span>
                  </li>
                </ul>
              </div>

              {/* Para quem NÃO é */}
              <div className="bg-brand-coral/10 border border-brand-coral/20 p-10 rounded-3xl">
                <div className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <span className="w-8 h-8 rounded-full bg-brand-coral text-white flex items-center justify-center text-sm">✕</span>
                  NÃO é para você se:
                </div>
                <ul className="space-y-5 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral mt-1">❌</span>
                    <span><strong>Você tem uma grande rede hoteleira</strong> que ama sistemas complexos e burocráticos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral mt-1">❌</span>
                    <span><strong>Você prefere</strong> digitar FNRH manualmente toda manhã.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral mt-1">❌</span>
                    <span><strong>Você não se importa</strong> em perder 15-20% de comissão para o Booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral mt-1">❌</span>
                    <span><strong>Você busca apenas um centralizador de canais</strong> — por enquanto. (Em breve, seremos o hub completo.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 bg-brand-slate relative overflow-hidden border-y border-white/5" id="precos">
          {/* Diagonal Banner Overlay */}
          <div className="absolute top-40 left-0 w-full z-20 pointer-events-none flex justify-center overflow-hidden">
            <div className="bg-gradient-to-r from-brand-coral to-brand-amber text-brand-navy font-black py-3 px-4 md:px-24 transform -rotate-3 shadow-2xl border-y-4 border-white/20 whitespace-nowrap opacity-95">
              <span className="text-sm sm:text-lg md:text-2xl tracking-wider uppercase">🔥 Oferta de Inauguração — 50% OFF para Fundadores 🔥</span>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 mt-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos e Preços</h2>
              <p className="text-white/60 text-lg">Extraordinariamente, os primeiros parceiros entram pela metade do preço — enquanto durar o contrato.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {/* Card 1: Essencial */}
              <div className="bg-brand-navy rounded-3xl p-8 border border-white/10 flex flex-col h-full hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-2">Hotelly Essencial</h3>
                <p className="text-white/60 text-sm mb-6 italic">"Tudo que sua hospedagem precisa para sair do improviso."</p>
                
                <div className="mb-8">
                  <div className="text-white/40 mb-1 relative inline-block">
                    <span className="text-lg">R$ 498/mês</span>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-coral transform -rotate-6"></div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black text-brand-amber">R$ 249</span>
                    <span className="text-white/60 font-medium mb-1">/mês</span>
                  </div>
                </div>

                <div className="text-xs text-white/50 mb-6 pb-6 border-b border-white/10">
                  1 propriedade | Até 20 quartos | Até 5 usuários
                </div>

                <ul className="space-y-4 mb-10 flex-grow text-sm text-white/80">
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Gestão de Reservas completa — da cotação ao check-out, com histórico auditável</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Motor de Reservas para o seu site (sem comissão)</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in e Check-out em um clique</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Calendário visual de reservas (30 dias)</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> <span>Relatórios de desempenho: ocupação, ADR <span className="text-xs text-white/50">(diária média)</span>, RevPAR <span className="text-xs text-white/50">(receita por quarto disponível)</span> e receita total</span></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa visual de demanda — veja quais dias e quartos têm mais procura</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Financeiro básico e pagamentos integrados</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in digital e FNRH automático (Serpro)</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento por IA no WhatsApp (ilimitado)*</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Organização de limpeza de quartos por prioridade</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cadastro de hóspedes com perfil e histórico de reservas</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente no painel (30 consultas/mês)</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Pacotes com estadia mínima e restrições de datas</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cobrança de extras e frigobar completos</li>
                </ul>
                <a href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=trial_gratis" className="block text-center w-full py-2.5 px-6 rounded-xl bg-brand-amber text-brand-navy font-bold hover:bg-amber-500 transition-colors">Começar 14 dias grátis</a>
              </div>

              {/* Card 2: Maestro */}
              <div className="bg-brand-navy rounded-3xl p-8 border-2 border-brand-amber relative flex flex-col h-full lg:transform lg:scale-105 shadow-2xl shadow-brand-amber/10 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-amber text-brand-navy text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Recomendado</div>
                <h3 className="text-2xl font-bold text-white mb-2">Hotelly Maestro</h3>
                <p className="text-white/60 text-sm mb-6 italic">"Automação completa, receita inteligente e equipe no sistema."</p>
                
                <div className="mb-8">
                  <div className="text-white/40 mb-1 relative inline-block">
                    <span className="text-lg">R$ 898/mês</span>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-coral transform -rotate-6"></div>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-brand-amber">R$ 449</span>
                    <span className="text-white/60 font-medium mb-1">/mês</span>
                  </div>
                </div>

                <div className="text-xs text-white/50 mb-6 pb-6 border-b border-white/10">
                  1 propriedade | Até 50 quartos | Até 15 usuários
                </div>

                <ul className="space-y-4 mb-10 flex-grow text-sm text-white/90 font-medium">
                  <li className="flex items-start gap-2"><span className="text-brand-amber">✅</span> <strong>Tudo do Essencial, mais:</strong></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Painel de resultados: receita mensal, margem de lucro e taxa de retorno de hóspedes</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Histórico detalhado de ajustes e reembolsos</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Preços ajustados automaticamente conforme ocupação, temporada e demanda</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Calendário de preços e feriados automático — sem precisar lembrar de cada data</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente no painel (ilimitado)</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento por IA no WhatsApp (ilimitado)*</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Suporte por chat prioritário</li>
                </ul>
                <a href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=trial_gratis" className="block text-center w-full py-2.5 px-6 rounded-xl bg-brand-amber text-brand-navy font-black text-lg hover:bg-amber-500 transition-colors shadow-lg shadow-brand-amber/20">Começar 14 dias grátis</a>
              </div>

              {/* Card 3: Rede */}
              <div className="bg-brand-navy rounded-3xl p-8 border border-white/10 flex flex-col h-full hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold text-white mb-2">Hotelly Rede</h3>
                <p className="text-white/60 text-sm mb-6 italic">"Gerencie todas as suas hospedagens de um único lugar."</p>
                
                <div className="mb-8 py-4">
                  <span className="text-3xl font-black text-white">Sob consulta</span>
                </div>

                <div className="text-xs text-white/50 mb-6 pb-6 border-b border-white/10">
                  Múltiplas propriedades | Usuários ilimitados
                </div>

                <ul className="space-y-4 mb-10 flex-grow text-sm text-white/80">
                  <li className="flex items-start gap-2"><span className="text-brand-sky">✅</span> <strong>Tudo do Maestro, mais:</strong></li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Várias pousadas num só login — alterne entre unidades com um clique</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Painel geral da rede: veja todos os números em uma única tela</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Suporte dedicado ao proprietário da rede</li>
                  <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Condições negociadas caso a caso</li>
                </ul>
                <a href="https://wa.me/5524993183300?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Hotelly%20para%20minha%20rede%20de%20hospedagens." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2.5 px-6 rounded-xl border border-brand-sky text-brand-sky font-bold hover:bg-brand-sky/10 transition-colors">Falar com um especialista</a>
              </div>
            </div>

            <div className="mt-8 text-center text-white/50 text-xs max-w-3xl mx-auto">
              *Custos da API Oficial da Meta pagos diretamente pela hospedagem. Uso ilimitado sujeito a Política de Uso Razoável.
            </div>


          </div>
        </section>

        {/* Price Anchor & Loss Aversion */}
        <section className="py-20 bg-brand-navy relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Anchor */}
              <div className="bg-brand-amber/10 border border-brand-amber/20 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/20 blur-3xl rounded-full"></div>
                <h3 className="text-brand-amber/60 text-2xl font-semibold mb-4">
                  Hotelly Maestro vale <span className="line-through">R$ 898/mês.</span>
                </h3>
                <p className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                  Mas você pode entrar agora pelo <span className="text-brand-amber">Preço de Inauguração: R$ 449/mês.</span>
                </p>
                <p className="text-lg text-white/70">
                  Isso enquanto o Hotelly estiver em fase inaugural.<br/>
                  <strong className="text-white">Quando encerrar, encerrou. Sem segunda chance.</strong>
                </p>
              </div>
              
              {/* Cost */}
              <div className="bg-brand-coral/10 border border-brand-coral/20 rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/20 blur-3xl rounded-full"></div>
                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                   Uma reserva perdida por semana = <span className="text-brand-coral">R$ 1.200/mês jogados fora.</span>
                 </h2>
                 <p className="text-white/60 italic border-l-4 border-brand-coral pl-4 mb-8">
                   (Diária média de R$ 300 × 4 semanas. Esse é o preço de dormir sem um sistema que venda por você.)
                 </p>
                 <p className="text-lg text-white/80">
                   O Hotelly Maestro no Preço de Inauguração custa R$449/mês. <strong className="text-white">Uma única reserva recuperada já paga o mês inteiro — e sobra troco.</strong>
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-brand-slate border-t border-white/5" id="faq">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>Quanto tempo dura o benefício de fundador (Preço de Inauguração)?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  O seu benefício é um <strong>desconto de 50% garantido</strong> sobre o valor de tabela enquanto durar o seu contrato. Isso significa que, mesmo que os preços sofram reajustes anuais de inflação, você sempre pagará apenas metade do valor. Você garante sua economia máxima para sempre, sem pegadinhas. Mas atenção: este benefício é exclusivo para a fase de lançamento.
                </div>
              </details>

              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>E se eu não quiser que a IA faça o atendimento da minha pousada?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  O atendimento por IA no WhatsApp é um 'superpoder' opcional. Você pode configurá-lo para trabalhar em tempo integral (24/7), desligá-lo completamente ou — a opção favorita dos nossos parceiros — configurá-lo para assumir apenas em horários específicos, como à noite ou nos fins de semana. Deixe a IA de plantão enquanto você descansa, e assuma o controle humano sempre que quiser. A decisão de como atender seu hóspede é sempre sua.
                </div>
              </details>

              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>O Hotelly vai continuar se atualizando?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  Essa é a nossa visão central. O Hotelly não é um software estático; é uma plataforma viva. Nossa equipe está sempre pronta para implementar qualquer nova oportunidade de facilidade e impulsionamento para o seu negócio que a tecnologia permitir. Ao assinar o Hotelly, você garante que sua hospedagem terá acesso aos benefícios que a IA pode oferecer hoje e tudo o que ela for capaz de fazer amanhã.
                </div>
              </details>

              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>E se eu não gostar?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  O período de testes é de 14 dias, sem necessidade de cartão de crédito. Você explora todas as ferramentas, vê a IA trabalhando por você e decide com clareza. Se optar por não continuar, você não gasta um centavo. E mesmo após se tornar cliente, você tem liberdade total: pode cancelar o plano a qualquer momento, sem taxas de fidelidade ou burocracia. Zero risco para o seu caixa.
                </div>
              </details>

              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>Funciona com Booking?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  Hoje, nosso foco é maximizar sua venda direta — sem comissão de OTA. Mas o Hotelly está se tornando um hub completo de reservas. Em breve, você vai gerenciar Booking, Airbnb e centenas de OTAs direto do Hotelly, sem abrir uma aba a mais. Enquanto isso, o sistema já se paga recuperando os clientes que o Booking não atende no WhatsApp.
                </div>
              </details>

              <details className="group bg-brand-navy rounded-2xl overflow-hidden border border-white/5">
                <summary className="flex items-center justify-between p-6 text-white font-bold cursor-pointer list-none">
                  <span>O FNRH é seguro?</span>
                  <span className="transition group-open:rotate-180 text-brand-sky">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-white/80 border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
                  Sim. Usamos integração oficial com o Serpro. Suas credenciais ficam protegidas com o mesmo nível de segurança usado por bancos — ninguém tem acesso a elas, nem mesmo nossa equipe. Você nunca mais vai precisar preencher uma ficha manual na vida. É liberdade total.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-brand-navy/95 backdrop-blur-md border-t border-white/10 z-50">
        <a className="block w-full text-center bg-brand-amber text-brand-navy font-bold py-2.5 px-6 rounded-lg shadow-lg" href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=preco_inauguracao">
          Garantir Preço de Inauguração
        </a>
      </div>
    </div>
  );
}
