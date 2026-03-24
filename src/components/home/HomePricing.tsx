import React from 'react';
import VagasCounter from '../../components/VagasCounter';

export default function HomePricing() {
  return (
    <>
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
                  <span><strong>Você busca apenas um centralizador de canais</strong>. Por enquanto. (Em breve, seremos o hub completo.)</span>
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
            <span className="text-sm sm:text-lg md:text-2xl tracking-wider uppercase">🔥 Oferta de Inauguração. 50% OFF para Fundadores 🔥</span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos e Preços</h2>
            <p className="text-white/60 text-lg">Extraordinariamente, os primeiros parceiros entram pela metade do preço. Enquanto durar o contrato.</p>
          </div>

          <div className="flex justify-center mb-12">
            <VagasCounter />
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
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Gestão de Reservas completa. Da cotação ao check-out, com histórico auditável</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Motor de Reservas para o seu site (sem comissão)</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in e Check-out em um clique</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa de Quartos com drag-and-drop (30 dias) — mova reservas arrastando, preço recalcula na hora</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> <span>Relatórios de desempenho: ocupação, ADR <span className="text-xs text-white/50">(diária média)</span>, RevPAR <span className="text-xs text-white/50">(receita por quarto disponível)</span> e receita total</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Mapa visual de demanda. Veja quais dias e quartos têm mais procura</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Financeiro básico e pagamentos integrados</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Check-in digital e FNRH automático (Serpro)</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento por IA no WhatsApp (ilimitado)<a href="#whatsapp-api" className="text-brand-amber no-underline">*</a></li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Organização de limpeza de quartos por prioridade</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cadastro de hóspedes com perfil e histórico de reservas</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente no painel (30 consultas/mês)</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Pacotes com estadia mínima e restrições de datas</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Cobrança de extras e frigobar completos</li>
              </ul>
              <div className="border-t border-white/10 pt-4 mb-6">
                <p className="text-xs text-gray-300 italic">🔄 Incluído em todos os planos: Você recebe acesso automático a novos recursos e atualizações conforme o Hotelly evolui — sem pagar mais.</p>
              </div>
              <a href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=trial_essencial" className="block text-center w-full py-2.5 px-6 rounded-xl bg-brand-amber text-brand-navy font-bold hover:bg-amber-500 transition-colors">Testar Essencial por 14 dias</a>
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
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Calendário de preços e feriados automático. Sem precisar lembrar de cada data</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Assistente inteligente no painel (ilimitado)</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Atendimento por IA no WhatsApp (ilimitado)<a href="#whatsapp-api" className="text-brand-amber no-underline">*</a></li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Suporte por chat prioritário</li>
              </ul>
              <div className="border-t border-white/10 pt-4 mb-6">
                <p className="text-xs text-gray-300 italic">🔄 Incluído em todos os planos: Você recebe acesso automático a novos recursos e atualizações conforme o Hotelly evolui — sem pagar mais.</p>
              </div>
              <a href="https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=trial_gratis" className="block text-center w-full py-2.5 px-6 rounded-xl bg-brand-amber text-brand-navy font-black text-lg hover:bg-amber-500 transition-colors shadow-lg shadow-brand-amber/20">Começar 14 dias grátis do Maestro</a>
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
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Várias pousadas num só login. Alterne entre unidades com um clique</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Painel geral da rede: veja todos os números em uma única tela</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Suporte dedicado ao proprietário da rede</li>
                <li className="flex items-start gap-2"><span className="text-brand-emerald">✅</span> Condições negociadas caso a caso</li>
              </ul>
              <a href="https://wa.me/5524993183300?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Hotelly%20para%20minha%20rede%20de%20hospedagens." target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2.5 px-6 rounded-xl border border-brand-sky text-brand-sky font-bold hover:bg-brand-sky/10 transition-colors">Falar com um especialista</a>
            </div>
          </div>

          {/* WhatsApp API disclaimer */}
          <div id="whatsapp-api" className="mt-6 max-w-3xl mx-auto bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-lg mt-0.5">💰</span>
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="text-brand-amber">*</span> Atendimento por IA ilimitado no WhatsApp: Você paga apenas pelos custos reais da Meta Ads (por mensagem enviada). Esses custos vêm de sua conta Meta, com zero markup nosso. Você vê tudo no relatório financeiro do Hotelly: quantas mensagens, quanto custou, tudo rastreável.
              </p>
            </div>
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
                 O Hotelly Maestro no Preço de Inauguração custa R$449/mês. <strong className="text-white">Uma única reserva recuperada já paga o mês inteiro. E sobra troco.</strong>
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
