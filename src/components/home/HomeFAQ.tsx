import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export default function HomeFAQ() {
  const { trackFAQExpand } = useAnalytics();
  return (
    <section className="py-24 bg-card border-t border-border" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly funciona com Booking e Airbnb?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly funciona com Booking e Airbnb?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim, no plano Max. A integração é feita via channel manager, que sincroniza disponibilidade e preços em tempo real com Booking.com, Airbnb e outras OTAs. Nos planos Start e Pro, o foco é em reservas diretas pelo WhatsApp e site próprio.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Preciso saber de tecnologia para usar o Hotelly?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Preciso saber de tecnologia para usar o Hotelly?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Não. O Hotelly foi desenvolvido para donos de hospedagem, não para técnicos. A configuração inicial é feita com assistência direta da equipe Hotelly na demo, e o sistema roda sozinho a partir daí.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly substitui recepcionista?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly substitui recepcionista?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              O Concierge Virtual com IA responde dúvidas, verifica disponibilidade e fecha reservas pelo WhatsApp 24h por dia, sem intervenção humana. Para hospedagens com recepção presencial, ele complementa a equipe fora do horário comercial.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Como funciona a precificação dinâmica?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Como funciona a precificação dinâmica?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              O sistema ajusta automaticamente os preços dos quartos com base na ocupação atual, feriados e calendário de eventos. Você define os limites mínimo e máximo, o Hotelly cuida do resto.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Qual a diferença entre os planos Start, Pro e Max?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Qual a diferença entre os planos Start, Pro e Max?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Start (R$349/mês): reservas automáticas pelo WhatsApp, IA 24h, mapa de quartos, FNRH e financeiro básico. Pro (R$549/mês): tudo do Start + precificação dinâmica, relatórios avançados e site de reservas diretas. Max (R$849/mês): tudo do Pro + integração com Booking, Airbnb e outras OTAs via channel manager.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly emite o FNRH automaticamente?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly emite o FNRH automaticamente?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim. O Hotelly integra com a API do Serpro e envia a Ficha Nacional de Registro de Hóspedes automaticamente após o check-in digital, sem intervenção manual.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
