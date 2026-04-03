import React from 'react';
import type { PlanSlug } from '../checkout/checkout.types';

interface HomePricingProps {
  onPlanSelect?: (plan: PlanSlug) => void;
}

export default function HomePricing({ onPlanSelect }: HomePricingProps) {
  return (
    <>
      {/* Pricing Table */}
      <section className="py-24 px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-4 text-foreground">Planos e Preços</h2>
            <p className="text-muted-foreground">Onboarding assistido pela equipe Hotelly. Sem fidelidade.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Start</h3>
              <p className="text-sm text-muted-foreground mb-4">Organizar sua operação e parar de perder reservas</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 349</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Concierge IA no WhatsApp</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Copilot IA no painel</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Mapa de Quartos interativo (Grade de Ocupação)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Proteção total contra overbooking</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Check-in Digital + FNRH automático (Serpro)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Motor de Reservas (botão no seu site)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Painel financeiro + Mercado Pago integrado</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Governança de limpeza (Dashboard Maestro)</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>CRM de hóspedes</li>
                <li className="flex gap-3 text-sm text-muted-foreground"><span className="material-symbols-outlined text-primary text-sm">check</span>Até 5 usuários · Suporte via chat</li>
              </ul>
              {onPlanSelect ? (
                <button
                  onClick={() => onPlanSelect('starter')}
                  className="block text-center w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Assinar Hotelly Start →
                </button>
              ) : (
                <div className="block text-center w-full py-4 rounded-xl border border-border font-bold text-muted-foreground bg-popover/50 cursor-default select-none">
                  🚀 Lançamento em Breve
                </div>
              )}
            </div>

            {/* Pro */}
            <div className="p-10 rounded-3xl bg-popover border border-border flex flex-col hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Pro</h3>
              <p className="text-sm text-muted-foreground mb-4">Profissionalizar e maximizar receita com IA completa</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 549</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 text-sm">
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Tudo do Start</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Precificação dinâmica (Revenue Management)</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Calendário de preços para os próximos 120 dias</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Relatórios avançados: RevPAR, ADR, taxa de ocupação</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Políticas avançadas: pacotes sazonais, estadia mínima</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Extras e frigobar completos</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-amber" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Até 15 usuários · Suporte prioritário</li>
              </ul>
              {onPlanSelect ? (
                <button
                  onClick={() => onPlanSelect('professional')}
                  className="block text-center w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Assinar Hotelly Pro →
                </button>
              ) : (
                <div className="block text-center w-full py-4 rounded-xl border border-border font-bold text-muted-foreground bg-popover/50 cursor-default select-none">
                  🚀 Lançamento em Breve
                </div>
              )}
            </div>

            {/* Max */}
            <div className="p-10 rounded-3xl bg-popover border-2 border-brand-emerald relative shadow-xl shadow-brand-emerald/10 flex flex-col scale-105 z-10 transition-transform hover:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Recomendado</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Hotelly Max</h3>
              <p className="text-sm text-muted-foreground mb-4">Substitua seu channel manager e gerencie tudo em um só lugar</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-headline font-extrabold text-foreground">R$ 849</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1 text-sm">
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Tudo do Pro</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Hub de OTAs: Booking.com, Airbnb, Expedia e mais</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Sincronização de disponibilidade e tarifas em tempo real</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Relatórios consolidados por canal de origem</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Zero overbooking entre plataformas — garantido</li>
                <li className="flex gap-3 text-foreground"><span className="material-symbols-outlined text-brand-emerald" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>Usuários ilimitados · Suporte dedicado</li>
              </ul>
              {onPlanSelect ? (
                <button
                  onClick={() => onPlanSelect('enterprise')}
                  className="block text-center w-full py-4 rounded-xl bg-brand-emerald text-white font-bold hover:bg-brand-emerald/90 transition-colors cursor-pointer"
                >
                  Assinar Hotelly Max →
                </button>
              ) : (
                <div className="block text-center w-full py-4 rounded-xl bg-brand-emerald/50 text-white font-bold cursor-default select-none">
                  🚀 Lançamento em Breve
                </div>
              )}
            </div>
          </div>

          {/* Friction reducer */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground text-sm">Onboarding assistido pela equipe Hotelly. Sem fidelidade. Cancele quando quiser.</p>
          </div>
        </div>
      </section>
    </>
  );
}
