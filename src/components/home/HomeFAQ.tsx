import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';

export default function HomeFAQ() {
  const { trackFAQExpand } = useAnalytics();
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly funciona com Booking e Airbnb?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly funciona com Booking e Airbnb?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim, no plano Max. Booking.com, Airbnb, Expedia e centenas de outros canais ficam sincronizados em tempo real com o Hotelly: disponibilidade, tarifas e reservas, tudo atualizado automaticamente. Chega de abrir cada plataforma para fechar uma janela de disponibilidade ou ajustar preço. No Max, você faz tudo de um lugar só, e ainda tem WhatsApp, site próprio e IA de atendimento inclusos no mesmo plano.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Preciso saber de tecnologia para usar o Hotelly?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Preciso saber de tecnologia para usar o Hotelly?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Não. O Hotelly foi feito para quem administra uma hospedagem, não para técnico de informática. O onboarding é conduzido pela nossa própria equipe: configuramos seus quartos, tarifas, políticas e IA juntos, no seu ritmo. A maioria dos clientes já recebe a primeira reserva automática no Dia 1. Depois disso, o sistema trabalha por você.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly atende hóspedes em outros idiomas?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly atende hóspedes em outros idiomas?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim, automaticamente. O Concierge IA responde no idioma do hóspede: inglês, espanhol, francês, italiano, o que for. Você não precisa configurar nada, já funciona em todos os planos. E se você é um dono de hospedagem que fala outro idioma, o assistente do painel também conversa com você no seu idioma nativo. O painel continua em português para sua equipe brasileira.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly substitui recepcionista?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly substitui recepcionista?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Para o WhatsApp, sim. O Concierge IA responde perguntas, verifica disponibilidade, envia link de pagamento e confirma a reserva, 24 horas por dia, sem ninguém na recepção. Para hospedagens que têm equipe presencial, o Concierge assume fora do horário comercial, nos fins de semana e em períodos de sobrecarga. Sua equipe foca no atendimento ao vivo. A IA cuida do que chegava depois das 22h e não era respondido.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Como funciona a precificação dinâmica?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Como funciona a precificação dinâmica?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Disponível nos planos Pro e Max. O motor analisa sua ocupação atual, feriados e eventos cadastrados e sugere o preço ideal para cada dia nos próximos 120 dias. Você define o piso e o teto: o Hotelly trabalha dentro desses limites. A decisão final é sempre sua: o sistema recomenda, você aplica. Na prática, significa cobrar mais no Carnaval e no réveillon, e ajustar o preço para baixo quando a semana está parada, sem precisar fazer isso manualmente todo dia.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Qual a diferença entre os planos Start, Pro e Max?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Qual a diferença entre os planos Start, Pro e Max?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Os três planos incluem IA ilimitada, gestão de reservas, check-in digital, FNRH automático, Motor de Reservas para o seu site, financeiro e governança de limpeza. O <strong className="text-foreground">Start</strong> (R$ 349/mês) organiza sua operação e devolve suas noites de sono. O <strong className="text-foreground">Pro</strong> (R$ 549/mês) profissionaliza com precificação dinâmica e relatórios avançados, para o negócio crescer sem pesar mais em você. E o <strong className="text-foreground">Max</strong> (R$ 849/mês)? Além de tudo do Pro, conecta você ao Booking, Airbnb e Expedia. O Max devolve a sua paz.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O Hotelly emite o FNRH automaticamente?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O Hotelly emite o FNRH automaticamente?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim, em todos os planos. O hóspede preenche o check-in digital pelo celular antes de chegar e o Hotelly envia os dados automaticamente para o Serpro, cumprindo a obrigação legal sem nenhum trabalho manual da sua parte. Sem ficha de papel, sem digitação, sem risco de multa por atraso no envio.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('O que é o Log Book Digital?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">O que é o Log Book Digital?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              É o fim do caderno de recepção e dos grupos de WhatsApp da equipe. Toda ocorrência, pendência e observação de turno fica registrada em um único lugar, acessível para todos. Quando o turno da manhã termina, o da tarde já começa sabendo o que ficou em aberto: qual quarto tem manutenção pendente, qual hóspede fez uma solicitação especial, o que precisa de atenção antes do próximo check-in. Nada se perde mais entre turnos.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Posso receber reservas diretas pelo meu próprio site?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Posso receber reservas diretas pelo meu próprio site?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim, em todos os planos. O Motor de Reservas é um botão que vai direto no seu site: o hóspede escolhe as datas, vê o valor e paga na hora, sem sair da sua página e sem pagar comissão para ninguém. A disponibilidade sincroniza em tempo real com o sistema, então não tem risco de vender o que não tem. É a reserva mais barata que você pode receber: 100% do valor vai para você.
            </div>
          </details>

          <details className="group bg-popover rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none" onClick={() => trackFAQExpand('Qual plano é o certo para minha hospedagem?')}>
              <h3 className="text-base font-bold text-inherit m-0 p-0">Qual plano é o certo para minha hospedagem?</h3>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sendo direto: o <strong className="text-foreground">Max</strong> é o plano que devolve a sua paz. Por R$ 849/mês, você tem IA ilimitada, gestão completa, precificação dinâmica, relatórios avançados e todos os seus canais de venda, incluindo Booking, Airbnb e Expedia, sincronizados em tempo real. Seu negócio cresce sem consumir mais de você. Se prefere começar pelo <strong className="text-foreground">Start</strong> ou <strong className="text-foreground">Pro</strong> para conhecer o sistema, faz sentido: a migração é simples e você não perde nada. Mas o destino é o mesmo para todo mundo.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
