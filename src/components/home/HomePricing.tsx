import React from 'react';

export default function HomePricing() {
  return (
    <>
      {/* Pricing Table */}
      <section className="py-24 px-8 bg-background" id="planos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-white">Planos que acompanham seu crescimento</h2>
            <p className="text-on-surface-variant">Cancele quando quiser. Sem taxas de instalação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="p-10 rounded-3xl bg-surface-container border border-outline-variant/10 flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-white">Start</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-white">R$ 349</span>
                <span className="text-on-surface-variant">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Até 5 unidades habitacionais
                </li>
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Gestão de Canais Básica
                </li>
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Suporte via E-mail
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-outline-variant font-bold hover:bg-surface-container-high text-white transition-colors">Escolher Start</button>
            </div>
            {/* Pro */}
            <div className="p-10 rounded-3xl bg-surface-bright border-2 border-tertiary relative shadow-[0_20px_60px_rgba(255,185,95,0.15)] flex flex-col scale-105 z-10 transition-transform hover:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mais Popular</div>
              <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-white">R$ 549</span>
                <span className="text-on-surface-variant">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 text-sm">
                <li className="flex gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Até 20 unidades habitacionais
                </li>
                <li className="flex gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  IA Concierge WhatsApp (Ilimitado)
                </li>
                <li className="flex gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Precificação Dinâmica
                </li>
                <li className="flex gap-3 text-on-surface">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  FNRH Automatizado
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-br from-tertiary-container to-tertiary text-on-tertiary font-bold hover:shadow-[0_0_20px_rgba(255,185,95,0.3)] transition-all">Começar Agora</button>
            </div>
            {/* Max */}
            <div className="p-10 rounded-3xl bg-surface-container border border-outline-variant/10 flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-white">Max</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-white">R$ 849</span>
                <span className="text-on-surface-variant">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Unidades Ilimitadas
                </li>
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Suporte Prioritário 24h
                </li>
                <li className="flex gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check</span>
                  Consultoria de Receita Mensal
                </li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-outline-variant font-bold text-white hover:bg-surface-container-high transition-colors">Economia Máxima</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-8 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-surface-container p-12 rounded-[2rem] text-center border border-white/5 shadow-2xl glass-card">
            <h2 className="text-3xl font-headline font-bold mb-6 text-white">Pronto para começar?</h2>
            <p className="text-on-surface-variant mb-10">Junte-se a centenas de proprietários que recuperaram seu tempo e lucro.</p>
            <a href="https://adm.hotelly.ia.br/sign-up" className="block w-full max-w-md mx-auto py-5 rounded-xl bg-gradient-to-br from-primary-container to-primary text-on-primary text-xl font-bold transition-all hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(77,142,255,0.4)] text-center cursor-pointer">
                Iniciar Teste Grátis
            </a>
            <p className="mt-4 text-xs text-on-surface-variant">7 dias grátis. Não precisa de cartão de crédito.</p>
          </div>
        </div>
      </section>
    </>
  );
}
