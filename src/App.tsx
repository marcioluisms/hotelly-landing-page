import React from 'react';

export default function App() {
  return (
    <div className="bg-background-dark text-slate-100 antialiased min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <a href="https://hotelly.com.br" className="flex items-center text-primary hover:opacity-80 transition-opacity">
            <img src="/hotelly-ia.png" alt="Hotelly Logo" className="h-10 md:h-14 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#beneficios">Benefícios</a>
            <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#como-funciona">Como Funciona</a>
            <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#publico">Público-alvo</a>
            <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#planos">Planos</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-background-dark px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-bold text-xs md:text-sm hover:scale-105 transition-transform cursor-pointer">
              Quero minha vaga
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider w-fit text-left">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Apenas 5 vagas restantes para Parceiros Fundadores
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
              Sua pousada com IA: <span className="text-primary">Reservas automáticas</span>, Follow-up persistente e FNRH sem papel.
            </h1>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
              Enquanto outros sistemas só guardam dados, o Hotelly fecha vendas. Nossa IA atende no WhatsApp, faz o follow-up para você e automatiza toda a burocracia do Serpro.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <button className="bg-primary text-background-dark px-6 md:px-8 py-4 rounded-xl font-black text-base md:text-lg hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all cursor-pointer w-full sm:w-auto">
                Quero ser um dos 5 Parceiros Fundadores
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-6 md:px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                <span className="material-symbols-outlined">play_circle</span>
                Ver como funciona
              </button>
            </div>
            <p className="text-primary/70 text-xs md:text-sm font-medium">
              Aproveite: Pague o valor do Plano Lite e tenha acesso ao Pro Completo vitalício.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
              <img alt="Screenshot of a modern dashboard showing AI chat interactions and booking metrics" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOPbEmNXM9xNJL0qtQCUU82C5OlhUX2MxqcSgS9dqtJtJ-54izbYeOETry-0iwDSyDv3ysH1ugls-I7QVYaUXPZEh-8TdQmyvEBH5jdMSsF0hlDQCRhXTiVnJb9HMC3JfOnhTdJkhsESg_PAZnJqrFMIlBRqpacajU9DNamV3X7_JI5Z9n9-L9jKf1DTcV6ggQO-oayrRN1giSibWn-q5Twfl0qzwHpjZlRaLwZNaB_XoQBIbbN-M4EgVGG_q_Zo_1oETLUYskHzA" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white/[0.02]" id="beneficios">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-6 md:p-8 rounded-2xl bg-secondary/5 border border-secondary/20 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
              <span className="material-symbols-outlined text-secondary text-4xl">trending_down</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">O custo de não resolver</h3>
              <p className="text-slate-400 text-sm md:text-base">Uma única reserva perdida por semana por falta de atendimento rápido no WhatsApp significa:</p>
              <div className="text-3xl md:text-4xl font-black text-secondary mt-2">R$ 600/mês <span className="text-xs md:text-sm font-normal text-slate-500 uppercase block md:inline mt-1 md:mt-0">jogados fora</span></div>
            </div>
            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col gap-4 text-center md:text-left items-center md:items-start">
              <span className="material-symbols-outlined text-primary text-4xl">trending_up</span>
              <h3 className="text-xl md:text-2xl font-bold text-white">O Investimento Hotelly</h3>
              <p className="text-slate-400 text-sm md:text-base">Garanta atendimento 24/7, follow-up automático e zero burocracia por apenas:</p>
              <div className="text-3xl md:text-4xl font-black text-primary mt-2">R$ 197/mês <span className="text-xs md:text-sm font-normal text-slate-500 uppercase block md:inline mt-1 md:mt-0">Retorno imediato</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works (Three Acts) */}
      <section className="py-16 md:py-24" id="como-funciona">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">A jornada para a liberdade da sua pousada</h2>
          <p className="text-slate-400 text-sm md:text-base">Como o Hotelly transforma seu caos operacional em lucro previsível.</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 space-y-8 md:space-y-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5"></div>
          
          {/* Act 1 */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center pl-10 md:pl-0">
            <div className="md:text-right">
              <div className="inline-block p-3 rounded-full bg-white/5 text-slate-400 mb-4">
                <span className="material-symbols-outlined text-2xl md:text-3xl">history_edu</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Ato I: O Peso</h4>
              <p className="text-slate-400 text-sm md:text-base">Fichas FNRH preenchidas à mão, erros no sistema do Serpro e hóspedes esperando horas por uma resposta simples no WhatsApp.</p>
            </div>
            <div className="hidden md:block"></div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 bg-slate-600 border-4 border-background-dark rounded-full"></div>
          </div>

          {/* Act 2 */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center pl-10 md:pl-0">
            <div className="hidden md:block"></div>
            <div>
              <div className="inline-block p-3 rounded-full bg-white/5 text-slate-400 mb-4">
                <span className="material-symbols-outlined text-2xl md:text-3xl">devices_fold</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Ato II: O Contraste</h4>
              <p className="text-slate-400 text-sm md:text-base">Softwares antigos que são apenas "tabelas de Excel online". Eles guardam o dado, mas não fazem nada para você vender mais.</p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 bg-slate-600 border-4 border-background-dark rounded-full"></div>
          </div>

          {/* Act 3 */}
          <div className="relative grid md:grid-cols-2 gap-4 md:gap-8 items-center pl-10 md:pl-0">
            <div className="md:text-right">
              <div className="inline-block p-3 rounded-full bg-primary/20 text-primary mb-4">
                <span className="material-symbols-outlined text-2xl md:text-3xl">auto_awesome</span>
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary mb-2">Ato III: A Liberdade</h4>
              <p className="text-slate-400 text-sm md:text-base">Inteligência Ativa. A IA atende, negocia, envia o link de pagamento, cobra o check-in e envia os dados para o Serpro. Tudo sozinho.</p>
            </div>
            <div className="hidden md:block"></div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-6 bg-primary border-4 border-background-dark rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-24 bg-white/[0.02]" id="publico">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-card-dark p-6 md:p-10 rounded-3xl border border-white/5 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                Para quem é
              </h3>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 md:mt-1 text-xl md:text-2xl">check</span>
                  <p className="text-slate-300 text-sm md:text-base">Pousadeiros que querem escala sem aumentar a equipe.</p>
                </li>
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 md:mt-1 text-xl md:text-2xl">check</span>
                  <p className="text-slate-300 text-sm md:text-base">Quem está cansado de perder vendas no WhatsApp à noite.</p>
                </li>
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-primary mt-0.5 md:mt-1 text-xl md:text-2xl">check</span>
                  <p className="text-slate-300 text-sm md:text-base">Deseja automação total do FNRH e check-in digital.</p>
                </li>
              </ul>
            </div>
            <div className="bg-card-dark p-6 md:p-10 rounded-3xl border border-white/5 opacity-80 md:opacity-60">
              <h3 className="text-2xl md:text-3xl font-black text-slate-400 mb-6 md:mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">cancel</span>
                Para quem NÃO é
              </h3>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-slate-500 mt-0.5 md:mt-1 text-xl md:text-2xl">close</span>
                  <p className="text-slate-400 text-sm md:text-base">Grandes redes de hotéis com centrais de reservas gigantes.</p>
                </li>
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-slate-500 mt-0.5 md:mt-1 text-xl md:text-2xl">close</span>
                  <p className="text-slate-400 text-sm md:text-base">Quem prefere processos manuais e papelada.</p>
                </li>
                <li className="flex gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-slate-500 mt-0.5 md:mt-1 text-xl md:text-2xl">close</span>
                  <p className="text-slate-400 text-sm md:text-base">Quem não acredita no poder da IA para vendas.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Integrations */}
      <section className="py-12 md:py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 md:opacity-50 md:grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl md:text-3xl">verified_user</span>
              <span className="font-bold text-lg md:text-xl">Serpro FNRH Digital</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl md:text-3xl">payments</span>
              <span className="font-bold text-lg md:text-xl">Stripe Integration</span>
            </div>
            <div className="flex items-center gap-2 text-primary opacity-100 grayscale-0">
              <span className="material-symbols-outlined text-2xl md:text-3xl">group</span>
              <span className="font-bold text-lg md:text-xl">12 Pousadas já garantidas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background-dark relative overflow-hidden" id="planos">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Invista no futuro da sua pousada</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">Compare nossos planos futuros com a oportunidade única para Parceiros Fundadores.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* Plano Lite */}
            <div className="bg-card-dark/40 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col hover:border-white/10 transition-colors order-2 lg:order-1">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Plano Lite</h3>
                <p className="text-slate-500 text-xs md:text-sm">Essencial para começar</p>
                <div className="mt-4 md:mt-6">
                  <span className="text-3xl md:text-4xl font-black text-white">R$ 297</span>
                  <span className="text-slate-500">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Gestão de reservas</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Calendário simplificado</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Suporte por e-mail</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Cadastro de hóspedes</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Dashboard financeiro básico</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors cursor-pointer">Em breve</button>
            </div>

            {/* Plano de Guerra (Founding Partners) */}
            <div className="relative bg-card-dark border-2 border-primary p-6 md:p-8 rounded-3xl flex flex-col shadow-[0_0_40px_rgba(56,189,248,0.15)] md:scale-105 z-20 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                Oportunidade Única
              </div>
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Plano de Guerra</h3>
                <p className="text-primary font-bold text-xs md:text-sm">Parceiros Fundadores</p>
                <div className="mt-4 md:mt-6">
                  <span className="text-slate-500 line-through text-base md:text-lg block mb-1">R$ 497/mês</span>
                  <span className="text-4xl md:text-5xl font-black text-white">R$ 197</span>
                  <span className="text-slate-400">/mês</span>
                </div>
                <p className="mt-4 text-secondary text-xs md:text-sm font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm shrink-0">stars</span>
                  <span>Pague o preço do Lite e leve o Pro Completo</span>
                </p>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary shrink-0">auto_awesome</span>
                  <span>IA de Vendas (WhatsApp 24/7)</span>
                </li>
                <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary shrink-0">bolt</span>
                  <span>FNRH Automático (Serpro)</span>
                </li>
                <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary shrink-0">verified</span>
                  <span>Upgrade Vitalício</span>
                </li>
                <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary shrink-0">support_agent</span>
                  <span>Linha Direta com o Fundador</span>
                </li>
                <li className="flex items-center gap-3 text-white font-medium text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary shrink-0">history_edu</span>
                  <span>Check-in Digital Sem Papel</span>
                </li>
                <li className="flex items-center gap-3 text-secondary font-black italic text-sm md:text-base">
                  <span className="material-symbols-outlined shrink-0">priority_high</span>
                  <span>Apenas 5 vagas exclusivas</span>
                </li>
              </ul>
              <button className="w-full py-3 md:py-4 rounded-xl bg-primary text-background-dark font-black text-base md:text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 cursor-pointer">
                GARANTIR MINHA VAGA
              </button>
            </div>

            {/* Plano Pro */}
            <div className="bg-card-dark/40 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col hover:border-white/10 transition-colors order-3">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Plano Pro</h3>
                <p className="text-slate-500 text-xs md:text-sm">Completo e Automatizado</p>
                <div className="mt-4 md:mt-6">
                  <span className="text-3xl md:text-4xl font-black text-white">R$ 497</span>
                  <span className="text-slate-500">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>IA de Vendas (WhatsApp)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>FNRH Automático (Serpro)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Follow-up Inteligente</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Check-in Digital</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                  <span>Integração Stripe (Pagamentos)</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors cursor-pointer">Em breve</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-8 md:mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <div className="p-5 md:p-6 rounded-xl bg-card-dark border border-white/5 shadow-md">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">A IA realmente fecha a venda sozinha?</h4>
              <p className="text-slate-400 text-sm md:text-base">Sim. Ela é treinada com as informações da sua pousada e pode tirar dúvidas, negociar datas e enviar o link de pagamento final.</p>
            </div>
            <div className="p-5 md:p-6 rounded-xl bg-card-dark border border-white/5 shadow-md">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">Como funciona a integração com o Serpro?</h4>
              <p className="text-slate-400 text-sm md:text-base">O Hotelly coleta os dados no check-in digital e envia automaticamente para o sistema FNRH, eliminando o preenchimento manual de fichas.</p>
            </div>
            <div className="p-5 md:p-6 rounded-xl bg-card-dark border border-white/5 shadow-md">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">E se eu precisar intervir no chat?</h4>
              <p className="text-slate-400 text-sm md:text-base">Você pode assumir o controle do WhatsApp a qualquer momento. A IA é sua assistente, não substituta.</p>
            </div>
            <div className="p-5 md:p-6 rounded-xl bg-card-dark border border-white/5 shadow-md">
              <h4 className="font-bold text-white mb-2 text-sm md:text-base">O valor de R$197 é para sempre?</h4>
              <p className="text-slate-400 text-sm md:text-base">Para os 5 Parceiros Fundadores, sim. O valor do plano Lite com recursos do Pro será mantido enquanto sua assinatura estiver ativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 border-t border-white/5 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <a href="https://hotelly.com.br" className="flex items-center text-primary hover:opacity-80 transition-opacity">
            <img src="/hotelly-ia.png" alt="Hotelly Logo" className="h-10 md:h-14 w-auto" />
          </a>
          <p className="text-slate-500 text-xs md:text-sm">© 2026 Hotelly</p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <a className="text-slate-500 hover:text-white transition-colors" href="#">Termos</a>
            <a className="text-slate-500 hover:text-white transition-colors" href="#">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
