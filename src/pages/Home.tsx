import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
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
        {/* Navbar padding offset added to Hero */}
        <section className="relative px-8 pt-32 pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary font-label text-sm font-semibold tracking-wider mb-6">INTELIGÊNCIA HOTELEIRA 24H</span>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">
                  Sua hospedagem vendendo enquanto você dorme
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                  Todas as reservas — WhatsApp, site, Booking, Airbnb — chegam, se confirmam e se pagam em um lugar só. Com IA que trabalha 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://adm.hotelly.ia.br/sign-up" className="text-center bg-gradient-to-br from-primary-container to-primary text-on-primary text-lg font-bold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_-5px_rgba(77,142,255,0.4)]">
                    Começar teste grátis
                </a>
                <a href="#funcionalidades" className="text-center block border border-outline-variant bg-surface-container/50 text-on-surface text-lg font-bold px-8 py-4 rounded-xl hover:bg-surface-container-high transition-all">
                    Ver Demonstração
                </a>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full"></div>
              <div className="relative bg-surface-container-low p-4 rounded-2xl shadow-2xl border border-white/5">
                <img alt="Hotelly Dashboard" className="rounded-xl w-full shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuKl0YWQyu78TTlR5BmqarqLp-5hD9NBtd7wzwxNs6dwzYkFNqq-EUBsygBgKdR0Nl9ti49ADwD9dyiR-5nrawUCYkJQOeFUc1gv5zkmjuOm6ol2U1RAUOFag17Ma3Oqp7wu"/>
                <div className="absolute -bottom-6 -left-6 bg-surface-bright p-6 rounded-2xl shadow-2xl glass-card border border-white/10 max-w-xs animate-pulse">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-tertiary">smart_toy</span>
                    <p className="text-sm font-semibold text-white">Reserva Confirmada via IA</p>
                  </div>
                  <p className="text-xs text-on-surface-variant">O Concierge Hotelly acaba de fechar uma reserva de 3 noites via WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Themes */}
        <section className="py-24 bg-surface-container-low" id="eficiencia">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-4 text-white">Eficiência que se sente no bolso</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Automatize o que é repetitivo e foque no que realmente importa: a experiência do seu hóspede.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">chat_bubble</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Reservas que chegam sozinhas</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Nossa IA atende o WhatsApp, tira dúvidas e fecha vendas 24/7 sem você tocar no celular.</p>
              </div>
              <div className="p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all group">
                <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-3xl">sync</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Todas as vitrines, um só controle</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Booking, Airbnb e Expedia sincronizados em tempo real. Diga adeus ao overbooking para sempre.</p>
              </div>
              <div className="p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Receita que cresce no automático</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Precificação dinâmica que ajusta seus valores conforme a demanda da região e ocupação.</p>
              </div>
              <div className="p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all group">
                <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-tertiary text-3xl">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Operação limpa e legal</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Check-in digital automatizado com envio direto para a FNRH. Segurança jurídica sem burocracia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem + Cost Analysis */}
        <section className="py-24 px-8 overflow-hidden bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-16 text-center text-white">O custo invisível da desorganização</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 rounded-3xl overflow-hidden border border-outline-variant/10">
              {/* Fragmented */}
              <div className="bg-surface-container p-12">
                <h3 className="text-xl font-bold text-error mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined">cancel</span>
                  OPERANDO FRAGMENTADO
                </h3>
                <ul className="space-y-6 mb-12">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Comissões excessivas OTAs</span>
                    <span className="font-mono text-error">R$ 2.400,00</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Overbooking &amp; Cancelamentos</span>
                    <span className="font-mono text-error">R$ 1.100,00</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Tempo em tarefas manuais</span>
                    <span className="font-mono text-error">R$ 1.700,00</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-outline-variant/10">
                  <p className="text-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">Perda Mensal Estimada</p>
                  <p className="text-4xl font-headline font-extrabold text-error">R$ 5.200,00</p>
                </div>
              </div>
              {/* With Hotelly */}
              <div className="bg-surface-bright p-12">
                <h3 className="text-xl font-bold text-[#34d399] mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  COM HOTELLY
                </h3>
                <ul className="space-y-6 mb-12">
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Reservas Diretas (Sem taxas)</span>
                    <span className="font-mono text-[#34d399]">+ R$ 3.800,00</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Sincronização 100% Segura</span>
                    <span className="font-mono text-[#34d399]">R$ 0,00 Risco</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">IA Operacional 24h</span>
                    <span className="font-mono text-[#34d399]">Incluso</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-outline-variant/10">
                  <p className="text-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">Investimento Inicial</p>
                  <p className="text-4xl font-headline font-extrabold text-[#34d399]">R$ 349,00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Concierge Interactive Demo */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <img alt="AI Mascot" className="w-48 h-48 rounded-full mb-8 border-4 border-primary/20 shadow-2xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiJ7WPiFfUiTPlkloY0V0GJ8N1AY4d9CC7Lgq3HPhVvL3fzsSqIbFEVCgmvQNhzElHkKWq7WgE3W6pMNssljv6jC-VHwNHy99GLXD2Ea0XBaXzjSwG-iEm4Y8TG7xtd2jXvGxgRFivGGdVa7IVevv2zweL-ibzI2J60BeuPUp_HZ6ZRq5X7KBWIutGmeqE16eGfHUe3Cxk7x3fM_JSSGWPUnJWCMxvaIRzNYlxW6RZEu5e-7NFzqXpmgl68pAoGBCOqJ97omqKaJM"/>
              <h2 className="text-4xl font-headline font-bold mb-6 text-white">Conheça seu novo funcionário do mês</h2>
              <p className="text-on-surface-variant text-lg max-w-lg mb-8">Nossa IA não apenas responde, ela vende. Teste agora simulando o atendimento de um hóspede real.</p>
            </div>
            <div className="bg-[#111e33] rounded-3xl p-8 shadow-2xl border border-white/5 h-[500px] flex flex-col">
              <div className="flex-1 space-y-6 overflow-y-auto mb-6 pr-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-xs">smart_toy</span>
                  </div>
                  <div className="bg-surface-variant p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-white">
                    Oi! Sou o Concierge do Hotelly. Como posso ajudar você hoje? Posso verificar disponibilidade ou tirar dúvidas sobre sua hospedagem.
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-xs font-bold text-on-secondary">HS</div>
                  <div className="bg-primary/20 p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed border border-primary/10 text-white">
                    Vocês aceitam pets? E tem vaga para o próximo final de semana?
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-xs">smart_toy</span>
                  </div>
                  <div className="bg-surface-variant p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-white">
                    Sim! Somos pet friendly 🐾 Para o próximo final de semana (15-17), ainda temos 2 Suítes Master disponíveis. Gostaria de ver as fotos ou prefere já garantir a reserva?
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button className="bg-surface-container-high hover:bg-surface-bright text-xs font-semibold py-3 px-2 rounded-xl border border-outline-variant/20 transition-colors text-white">Verificar disponibilidade</button>
                <button className="bg-surface-container-high hover:bg-surface-bright text-xs font-semibold py-3 px-2 rounded-xl border border-outline-variant/20 transition-colors text-white">Fazer uma reserva</button>
                <button className="bg-surface-container-high hover:bg-surface-bright text-xs font-semibold py-3 px-2 rounded-xl border border-outline-variant/20 transition-colors text-white">Tirar dúvida</button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Pillars */}
        <section className="py-24 px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container rounded-3xl p-10 flex flex-col group transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">grid_view</span>
                <h3 className="text-2xl font-bold mb-4 text-white">Mapa de Quartos</h3>
                <p className="text-on-surface-variant mb-8 flex-1">Grid interativa, Drag-and-drop e Heatmap de ocupação para gestão visual absoluta.</p>
                <img alt="Mapa" className="rounded-xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvBhMAEFUF8Rj5sgbSvPhL6Pi7q2LP-tgO-YIMAbyPV3f6gmOC56c4Bd6godPizYRua3K2Fws3scD3VCPsArzW-aPouyEJ2rmEV2wAdXL9x924NLEfp7wfcJEpwJWJ0lggAoM5RWGv5UEIl4BuThHdd7dqxVG-RilvHNidP5WS6navWDfEdC5jDlX93oyD-o0v-PMCz_DHKwHVrzgjvL1EZZt3QRHZYcJzkMVrRfgC8_h3yPqI_wMw5FopG-a1YitUldZAyydBFw8"/>
              </div>
              <div className="bg-surface-container rounded-3xl p-10 flex flex-col group transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-tertiary mb-6 text-4xl">payments</span>
                <h3 className="text-2xl font-bold mb-4 text-white">Financeiro &amp; Receita</h3>
                <p className="text-on-surface-variant mb-8 flex-1">Métricas em tempo real: RevPAR, ADR e Taxa de Ocupação integradas ao seu fluxo de caixa.</p>
                <img alt="Financeiro" className="rounded-xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK0m_Sc9PkAV66WXkhS6j-MTfFcHpAiRRspK1NzhuSTAi6DN66GWvVbOhiMUyl372wqvW8SrW3KlrFAWpY-OVyruuVBs7qPbcEg9flGl_0MAaIsHtKAaWaN7og0mRdNv4YmgPPuzMym7XjQJrfOnG8tW7bNMU-doNgfktI8lpZZRmDV-l7k0JjYK9pWQZZ4JdHCgzO1_REoOk5AhphL542EjveXL7e5G9K08TuwwbwzDeQT55OloSHbMB7rFk4qiMmKM6xOzx-8FE"/>
              </div>
              <div className="bg-surface-container rounded-3xl p-10 flex flex-col group transition-transform hover:-translate-y-2">
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">assignment_turned_in</span>
                <h3 className="text-2xl font-bold mb-4 text-white">Operação Limpa</h3>
                <p className="text-on-surface-variant mb-8 flex-1">Check-in Digital automatizado e envio de FNRH direto para o governo sem esforço manual.</p>
                <img alt="Operação" className="rounded-xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4C9Ela2_alOHCEuk06pdmnS5By0A7hZkvw6UczbbCWNJzeMGWprQSwYY2fertjdZwPX2GkYTLXpfbevrkyTR613lGk8eh8AxG4XYjnkM_nh9Qg9kk9w3Nd8L2XNT-ZNmCkHfZPQ9EtLROPOj_7D-RwVACrH9Yo2xKedJX18MSr05NfQOEe8kMs-MqtRQOTy7d5PK21RAa5qQEN7DCvQ-srZ81VOQ3RLcWlI3LX3uO9iUsHZRBl2fhomg4JjZkibudI7LSyNk8XI"/>
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
