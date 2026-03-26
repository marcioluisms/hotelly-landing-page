import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export default function HomePricing() {
  const { trackConversion } = useAnalytics();
  return (
    <>
      {/* Pricing Table */}
      <section className="py-24 px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-foreground">Planos e Preços</h2>
            <p className="text-muted-foreground">Cancele quando quiser. Sem taxas de instalação.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Start</h3>
              <p className="text-sm text-muted-foreground mb-4">Para hospedagens de até 10 UH dando os primeiros passos no digital</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 349</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Até 10 unidades habitacionais</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Concierge IA no WhatsApp (ilimitado)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Copilot IA no painel (ilimitado)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Mapa de Quartos interativo</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Proteção contra overbooking</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Check-in Digital + FNRH automático (Serpro)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Motor de Reservas (botão no seu site)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Painel financeiro básico</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Suporte via e-mail</li>
              </ul>
              <a
                href="https://adm.hotelly.ia.br/sign-up"
                className="block text-center w-full py-4 rounded-xl border border-border-strong font-bold hover:bg-popover text-foreground transition-colors"
                onClick={() => trackConversion('pricing_card', 'start')}
              >
                Garantir meu atendimento
              </a>
            </div>

            {/* Pro */}
            <div className="p-10 rounded-3xl bg-popover border-2 border-amber relative shadow-xl shadow-amber/10 flex flex-col scale-105 z-10 transition-transform hover:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-amber-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Mais Popular</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Pro</h3>
              <p className="text-sm text-muted-foreground mb-4">Para hospedagens de até 30 UH que querem precificar melhor e crescer</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 549</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 text-sm">
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Tudo do Start</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Até 30 unidades habitacionais</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Precificação dinâmica automática</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Calendário de preços (120 dias)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Relatórios avançados (RevPAR, ADR, ocupação)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Gestão financeira completa</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Suporte prioritário</li>
              </ul>
              <a
                href="https://adm.hotelly.ia.br/sign-up"
                className="block text-center w-full py-4 rounded-xl bg-amber hover:bg-amber-hover text-amber-foreground font-bold hover:shadow-lg hover:shadow-amber/20 transition-all"
                onClick={() => trackConversion('pricing_card', 'pro')}
              >
                Garantir meu atendimento
              </a>
            </div>

            {/* Max */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Max</h3>
              <p className="text-sm text-muted-foreground mb-4">Para hospedagens que já usam OTAs e precisam de uma central única</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 849</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Tudo do Pro</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Unidades ilimitadas</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Channel manager (Booking, Airbnb, Expedia)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Sincronização de disponibilidade e preços em tempo real</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Tarifas diferenciadas por canal</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Suporte prioritário 24h</li>
              </ul>
              <a
                href="https://adm.hotelly.ia.br/sign-up"
                className="block text-center w-full py-4 rounded-xl border border-border-strong font-bold hover:bg-popover text-foreground transition-colors"
                onClick={() => trackConversion('pricing_card', 'max')}
              >
                Garantir meu atendimento
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <a
              href="https://adm.hotelly.ia.br/sign-up"
              className="inline-block px-10 py-5 rounded-2xl bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
              onClick={() => trackConversion('pricing_bottom_cta')}
            >
              Garantir meu atendimento
            </a>
            <p className="text-muted-foreground text-sm mt-3">Atendimento gratuito · sem compromisso</p>
          </div>
        </div>
      </section>
    </>
  );
}
