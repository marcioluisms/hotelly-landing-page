import React from 'react';

export default function HomeFAQ() {
  return (
    <section className="py-24 bg-card border-t border-border" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>Quanto tempo dura o benefício de fundador (Preço de Inauguração)?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              O seu benefício é um <strong>desconto de 50% garantido</strong> sobre o valor de tabela enquanto durar o seu contrato. Isso significa que, mesmo que os preços sofram reajustes anuais de inflação, você sempre pagará apenas metade do valor. Você garante sua economia máxima para sempre, sem pegadinhas. Mas atenção: este benefício é exclusivo para a fase de lançamento.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>E se eu não quiser que a IA faça o atendimento da minha pousada?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              O atendimento por IA no WhatsApp é um 'superpoder' opcional. Você pode configurá-lo para trabalhar em tempo integral (24/7), desligá-lo completamente ou, a opção favorita dos nossos parceiros, configurá-lo para assumir apenas em horários específicos, como à noite ou nos fins de semana. Deixe a IA de plantão enquanto você descansa, e assuma o controle humano sempre que quiser. A decisão de como atender seu hóspede é sempre sua.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>O Hotelly vai continuar se atualizando?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Essa é a nossa visão central. O Hotelly não é um software estático; é uma plataforma viva. Nossa equipe está sempre pronta para implementar qualquer nova oportunidade de facilidade e impulsionamento para o seu negócio que a tecnologia permitir. Ao assinar o Hotelly, você garante que sua hospedagem terá acesso aos benefícios que a IA pode oferecer hoje e tudo o que ela for capaz de fazer amanhã.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>E se eu não gostar?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              O período de testes é de 14 dias de acesso completo ao Maestro, sem necessidade de cartão de crédito. Você explora todas as ferramentas, vê a IA trabalhando por você e decide com clareza. Se optar por não continuar, você não gasta um centavo. E mesmo após se tornar cliente, você tem liberdade total: pode cancelar o plano a qualquer momento, sem taxas de fidelidade ou burocracia. Zero risco para o seu caixa.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>Funciona com Booking?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Hoje, nosso foco é maximizar sua venda direta. Sem comissão de OTA. Mas o Hotelly está se tornando um hub completo de reservas. Em breve, você vai gerenciar Booking, Airbnb e centenas de OTAs direto do Hotelly, sem abrir uma aba a mais. Enquanto isso, o sistema já se paga recuperando os clientes que o Booking não atende no WhatsApp.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>O FNRH é seguro?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim. Usamos integração oficial com o Serpro. Suas credenciais ficam protegidas com o mesmo nível de segurança usado por bancos. Ninguém tem acesso a elas, nem mesmo nossa equipe. Você nunca mais vai precisar preencher uma ficha manual na vida. É liberdade total.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>Qual a diferença entre Essencial e Maestro?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              A diferença está na automação e no suporte. O <strong>Essencial</strong> tem tudo que você precisa para sair do improviso: gestão de reservas, check-in digital, atendimento por IA 24/7 no WhatsApp e relatórios básicos de ocupação e receita. É para quem quer o essencial funcionando bem.<br/><br/>
              O <strong>Maestro</strong> adiciona a mágica: Precificação Dinâmica (o sistema sugere preços baseado na procura, feriados e sazonalidade), Assistente IA ilimitado dentro do painel (em vez de 30 consultas/mês), relatórios avançados (RevPAR, ADR, margem de lucro) e suporte prioritário por chat.<br/><br/>
              Qual escolher? Comece com Essencial e evolua. Durante o teste gratuito de 14 dias, você tem acesso a <strong>todas as funções do Maestro</strong> — então você pode ver o Maestro funcionando antes de decidir.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>Como funciona o onboarding? Preciso de experiência técnica?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Não precisa ser técnico. O onboarding é assistido pela equipe Hotelly — nós te ajudamos a cadastrar tudo em minutos. Você não está sozinho: a equipe senta com você (remotamente ou presencialmente, conforme sua hospedagem) e configura quartos, preços, políticas de cancelamento e integrações.<br/><br/>
              Durante a fase de Parceiro Fundador, você tem canal direto com o fundador para dúvidas. É como ter um parceiro te ajudando a botar o sistema para rodar.
            </div>
          </details>

          <details className="group bg-card rounded-2xl overflow-hidden border border-border">
            <summary className="flex items-center justify-between p-6 text-foreground font-bold cursor-pointer list-none">
              <span>Posso convidar minha equipe? Quantos usuários?</span>
              <span className="transition group-open:rotate-180 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-muted-foreground border-l-4 border-brand-sky ml-6 mb-6 bg-white/5 p-4 rounded-r-lg">
              Sim! Você convida quantas pessoas quiser conforme seu plano permite. O Essencial permite até 5 usuários (recepcionista, gerente, camareira). O Maestro permite até 15. Cada pessoa vê só o que precisa: a camareira só mexe com limpeza (não vê dados financeiros), o recepcionista cuida de check-in e reservas, e você vê tudo.<br/><br/>
              Mudar de plano é rápido e você paga a diferença apenas pelos dias restantes do mês. Zero complicação.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
