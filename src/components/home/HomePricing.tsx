import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export default function HomePricing() {
  const { trackConversion } = useAnalytics();
  return (
    <>
      {/* Pricing Table */}
      <section className="py-24 px-8 bg-card" id="planos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-foreground">Planos e Preços</h2>
            <p className="text-muted-foreground">Cancele quando quiser. Sem taxas de instalação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Start</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 349</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Até 10 unidades habitacionais</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Concierge IA no WhatsApp (300 mensagens/mês)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Mapa de Quartos interativo</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Proteção contra overbooking</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Check-in Digital + FNRH automático (Serpro)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Motor de Reservas (botão no seu site)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Painel financeiro básico</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Suporte via e-mail</li>
              </ul>
              <a href="https://wa.me/5524993183300?text=Ol%C3%A1%20gostaria%20de%20atendimento%20para%20contrata%C3%A7%C3%A3o%20do%20Plano%20Start." className="block text-center w-full py-4 rounded-xl border border-border-strong font-bold hover:bg-popover text-foreground transition-colors" onClick={() => trackConversion('pricing_card', 'start')}>Garantir meu atendimento</a>
            </div>
            {/* Pro */}
            <div className="p-10 rounded-3xl bg-popover border-2 border-amber relative shadow-xl shadow-amber/10 flex flex-col scale-105 z-10 transition-transform hover:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-amber-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mais Popular</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 549</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 text-sm">
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Tudo do Start, sem limite de mensagens IA</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Até 30 unidades habitacionais</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Precificação dinâmica automática</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Calendário de preços (120 dias)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Relatórios avançados (RevPAR, ADR, ocupação)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Copilot IA no dashboard (30 consultas/mês)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Suporte prioritário</li>
              </ul>
              <a href="https://wa.me/5524993183300?text=Ol%C3%A1%20gostaria%20de%20atendimento%20para%20contrata%C3%A7%C3%A3o%20do%20Plano%20Pro." className="block text-center w-full py-4 rounded-xl bg-amber hover:bg-amber-hover text-amber-foreground font-bold hover:shadow-lg hover:shadow-amber/20 transition-all" onClick={() => trackConversion('pricing_card', 'pro')}>Garantir meu atendimento</a>
            </div>
            {/* Max */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Max</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 849</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Tudo do Pro, sem limite de consultas Copilot</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Unidades ilimitadas</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Channel manager (Booking, Airbnb, Expedia)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Sincronização de disponibilidade e preços em tempo real</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Relatório de performance por canal (OTA vs. direto)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Suporte prioritário 24h</li>
              </ul>
              <a href="https://wa.me/5524993183300?text=Ol%C3%A1%20gostaria%20de%20atendimento%20para%20contrata%C3%A7%C3%A3o%20do%20Plano%20Max." className="block text-center w-full py-4 rounded-xl border border-border-strong font-bold text-foreground hover:bg-popover transition-colors" onClick={() => trackConversion('pricing_card', 'max')}>Garantir meu atendimento</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-8 bg-card-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-info-subtle blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-card p-12 rounded-[2rem] text-center border border-border shadow-2xl glass-card">
            <div className="text-3xl font-headline font-bold mb-6 text-foreground">Pronto para começar?</div>
            <p className="text-muted-foreground mb-10">Junte-se a centenas de proprietários que recuperaram seu tempo e lucro.</p>
            <a href="https://adm.hotelly.ia.br/sign-up" className="block w-full max-w-md mx-auto py-5 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-primary/20 text-center cursor-pointer" onClick={() => trackConversion('pricing_footer')}>
                Garantir meu atendimento
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Atendimento gratuito · sem compromisso</p>
          </div>
        </div>
      </section>
    </>
  );
}
