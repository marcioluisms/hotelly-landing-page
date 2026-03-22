---
título: "Glossário Hoteleiro + Hotelly"
módulo: glossario
perfil: [owner, manager, front_desk, housekeeper, viewer]
nível: básico
tipo: conceito
helpArticleId: "glossario-geral"
última_revisão: 2026-03-19
descrição: "Termos essenciais do setor hoteleiro e da plataforma Hotelly — de ADR a Walk-in, com definições práticas para quem opera hospedagens."
revisado_por_engenharia: false
---

# Glossário Hoteleiro + Hotelly

Um guia prático com os principais termos do setor hoteleiro e da plataforma Hotelly. Cada definição é rápida e direto ao ponto — pensado para proprietários, gerentes, recepcionistas e equipe de limpeza que usam o sistema.

---

## A

### ADR (Average Daily Rate)
**Na indústria:** Preço médio cobrado por quarto por noite, calculado dividindo a receita total do período pelo número de quartos vendidos.

**No Hotelly:** Métrica disponível no dashboard financeiro em tempo real. Mostra quanto você está recebendo em média por diária. Útil para entender se a precificação está saudável e comparar performance entre períodos.

---

### Antecedência Mínima
Número mínimo de dias antes da data de check-in que uma reserva pode ser feita. Exemplo: "mínimo 2 dias de antecedência" impede que alguém reserve para amanhã.

**No Hotelly:** Configurado em Políticas → Restrições de Tarifa. Você define por tipo de quarto e período.

---

### Ativação (No funil de cliente)
Momento em que o trial começou a ser usado de forma significativa — primeira ação relevante no sistema. No Hotelly, ativação ocorre quando o cliente recebe a primeira reserva via Concierge ou Booking Engine.

---

### Atualização de Preço
Mudança do preço base de um tipo de quarto ou exceção de uma data específica. Diferente da Precificação Dinâmica — aqui você muda manualmente ou a IA recomenda.

---

## B

### Booking Engine (Motor de Reservas)
**Na indústria:** Widget ou página que permite vender quartos diretamente do seu site, sem intermediário (OTA).

**No Hotelly:** Widget embutível no site do hotel com disponibilidade em tempo real, cálculo automático de total, integração com Mercado Pago e geração de hold automático. O hóspede paga e a reserva já aparece no seu inventário.

---

### Break-Even (Ponto de Equilíbrio)
Número mínimo de clientes pagantes necessário para cobrir os custos fixos. No Hotelly, calculado internamente como ~4 hospedagens ativas com uso mensal normal.

---

## C

### Camareira (Housekeeper)
Profissional responsável pela limpeza, arrumação e manutenção dos quartos.

**No Hotelly:** Acesso restrito ao Dashboard Maestro de Governança (só vê status de limpeza, sem dados financeiros ou informações de hóspedes). Pode marcar quarto como em limpeza, limpo ou inspecionado.

---

### Cancelamento
Ação de desfazer uma reserva confirmada. O sistema calcula automaticamente quanto reembolsar baseado na política configurada.

**Tipos de Cancelamento No Hotelly:**
- **Flexível:** Reembolso total até N dias antes do check-in. Após esse prazo, percentual de penalidade ou nada.
- **Não Reembolsável:** Sem devolução de dinheiro em nenhuma circunstância (típico de promoções).
- **Gratuita:** Reembolso total em qualquer data (raramente usado, máxima transparência).

---

### CAC (Customer Acquisition Cost)
Custo médio para conquistar um cliente pagante. Calcula-se dividindo o gasto total em marketing pelo número de clientes adquiridos. No Hotelly, CAC máximo definido é R$ 120 (orçamento de R$ 1.200 ÷ 10 parceiros).

---

### Check-in Digital
Formulário online enviado ao hóspede antes da chegada onde ele preenche dados pessoais (CPF, endereço, documento, etc.) via celular.

**No Hotelly:** Link enviado automaticamente dias antes da chegada. Dados coletados alimentam direto o FNRH (Ficha Nacional de Registro de Hóspedes) e o CRM do hóspede. Sem papel na recepção, sem fila.

---

### Check-out
Saída formal do hóspede. Pode ser marcado no sistema manualmente ou via painel. Fecha o folio, reconcilia pagamentos pendentes e libera o quarto para limpeza.

---

### Competência (Regime de)
Sistema contábil que reconhece receita no mês em que a estadia ocorre, não necessariamente quando o pagamento chegou. Exemplo: hóspede que se hospedou em março e pagou em fevereiro — a receita é de março.

**No Hotelly:** Sistema USALI oferece ambos regimes simultaneamente — Caixa (quando recebeu) e Competência (quando a noite foi usufruída).

---

### Concierge Virtual IA
Atendente de IA 24/7 que responde pelo WhatsApp, tira dúvidas sobre a hospedagem, verifica disponibilidade e gera link de pagamento.

**No Hotelly:** Funciona com base de conhecimento configurada por você. Responde só o que você cadastrou (sem "alucinações"). Aceita Evolution API e Meta Cloud API (WhatsApp Business oficial). Você controla quando liga/desliga e se ativa fora do horário comercial.

---

### Confirmação (Reserva)
Estado em que a reserva saiu do "hold" temporário e virou permanente após pagamento confirmado. Estado máquina: `confirmed`.

---

### Conversão (Demo → Pagante)
Percentual de prospects que fizeram uma demo e depois assinaram o plano. Meta Hotelly: 25% de conversão do trial para pagante.

---

### Copilot (Assistente IA do Dashboard)
Assistente conversacional dentro do painel Hotelly que responde perguntas sobre seus dados em linguagem natural.

**No Hotelly:** Diga "Quantos quartos ocupados hoje?" ou "Qual foi minha receita no mês?" e o Copilot executa a consulta. Também executa ações por function calling — marcar quarto como limpo, aprovar reembolso, etc. Integra a base de conhecimento (políticas da sua hospedagem).

---

### CRM (Customer Relationship Management)
Banco de dados com histórico de cada hóspede: nome, e-mail, telefone, documento, todas as reservas passadas, preferências.

**No Hotelly:** Automático — cada hóspede que faz reserva entra no CRM. Você vê histórico completo e pode usar para futuras campanhas de retenção (fidelização).

---

## D

### Dashboard
Painel principal do sistema onde você vê reservas, ocupação, financeiro, governança de limpeza e integrações.

---

### Dashboard Maestro
Painel específico de Governança de Hospedagem. Mostra fila de limpeza priorizada (P1-P4), SLA de 4 horas, status de cada quarto (sujo, em limpeza, limpo, inspecionado) e produtividade por camareira.

---

### Disponibilidade
Quantidade de quartos livres em uma data específica ou no período que o hóspede quer ficar. "Sem disponibilidade" = todos os quartos vendidos ou bloqueados naquelas noites.

**No Hotelly:** Atualizado em tempo real. Booking Engine mostra só datas realmente disponíveis. Concierge verifica automaticamente antes de gerar link de pagamento.

---

## E

### Estadia (Estadia Mínima)
Número mínimo de noites que o hóspede precisa ficar. Comum em alta temporada (Réveillon: mínimo 3 noites).

**No Hotelly:** Configurado via Pacotes Sazonais. Você define o período, o tipo de quarto e quantas noites no mínimo.

---

### Extras (Serviços Adicionais)
Itens opcionais que o hóspede paga além da diária: café da manhã, transfer, tour, frigobar, etc.

**No Hotelly:** Catálogo completo em Configurações. Você define preço, se é por unidade ou por noite/hóspede. Podem ser adicionados em qualquer momento da reserva. Aparecem no folio.

---

## F

### Fator de Ocupação
Percentual atual de quartos ocupados. Usa-se para calcular o desconto ou acréscimo da Precificação Dinâmica.

**Curva no Hotelly:**
- Abaixo de 30%: desconto de -10%
- Acima de 95%: acréscimo de +35%
- Entre 30 e 95%: interpolação linear

---

### Fator de Pickup (Velocity)
Velocidade de reservas chegando. Se você já tem 70% dos quartos vendidos com 10 dias de antecedência, pickup está bom — recomenda-se aumentar preço. Se tem só 20%, pickup está fraco — descontar pode ajudar.

---

### Fator de Calendário
Multiplicador de preço baseado em eventos, feriados ou períodos especiais. Você configura: "Carnaval = +50%" ou "Inverno = -20%".

---

### Folio (Extrato da Reserva)
Resumo financeiro de uma reserva: todas as cobranças (diárias, extras, frigobar), pagamentos recebidos, ajustes e o saldo.

**No Hotelly:** Visível no painel por reserva. Inclui histórico completo com notas. Pode ser exportado em PDF para o hóspede.

---

### Front Desk (Recepção)
Profissional que atende o hóspede na chegada/saída, processa check-in, resolve dúvidas.

**No Hotelly:** Perfil com acesso a reservas, check-in/out, pagamentos e rastreamento de hóspedes. Não acessa financeiro nem configurações.

---

### FNRH (Ficha Nacional de Registro de Hóspedes)
Documento obrigatório que toda hospedagem brasileira precisa preencher e enviar ao governo (Serpro) com dados de cada hóspede.

**No Hotelly:** Integração automática com a API Serpro FNRH Digital V2. Após o check-in digital, dados são traduzidos e enviados automaticamente. Sem papel, sem risco de multa. Credenciais criptografadas por propriedade.

---

## G

### Garantia (Política de)
Percentual mínimo que a hospedagem retém como segurança contra cancelamento de última hora. Comum: 30% no ato da reserva.

**No Hotelly:** Configurável por período com exceções sazonais. Exemplo: períodos normais = 30%, Carnaval = 100% (tira toda a flexibilidade). Sistema resolve conflitos automaticamente com log de eventos.

---

### Governança (Housekeeping)
Sistema de fila de limpeza, priorização de quartos, SLA e rastreamento de produtividade da equipe de camareiras.

**No Hotelly:** Dashboard Maestro de Governança com fila P1-P4 (prioridade pela urgência de chegada do hóspede), SLA de 4 horas, histórico completo de quem fez o quê e quando, métricas por camareira.

---

### Garantia de Refund (Reembolso)
Promessa de devolver dinheiro se a reserva for cancelada dentro do prazo. Prazos longos (ex: 30 dias antes) aumentam confiança, mas reduzem garantia.

---

## H

### Hold (Reserva Temporária)
Estado intermediário de uma reserva — o quarto é bloqueado para o hóspede enquanto ele decide e não paga ainda. Expira automaticamente se não virar pagamento em X minutos/horas.

**No Hotelly:** Máquina de estados: `hold → confirmed` (após pagamento). Hold expirado libera o quarto para outro hóspede. Impede dupla venda e overbooking.

---

### Housekeeper (Camareira)
Ver Camareira.

---

### Housekeeping
Ver Governança.

---

## I

### In-House
Estado de uma reserva quando o hóspede já fez check-in e está hospedado. Estado máquina: `in_house`.

---

### Idempotência
Garantia de que clicar 10 vezes no mesmo botão não cria 10 reservas. Segurança contra duplicação acidental.

**No Hotelly:** Implementada em todo o funil de reservas.

---

### Inventário
Catálogo completo de quartos que sua hospedagem tem disponíveis para vender.

**No Hotelly:** Gerenciado em Quartos & Inventário. Mostra heatmap visual (qual quarto, qual data, ocupado ou livre), bloqueios de manutenção, sinal automático de upgrade (quando há categoria melhor disponível).

---

## J

### Jornada do Hóspede
Caminho que o hóspede percorre desde o interesse até a saída: busca → reserva → pagamento → check-in → check-out → avaliação.

---

## L

### Landing Page
Página web inicial do Hotelly ou da sua hospedagem. No contexto de marketing, é onde o prospect clica nos anúncios e descobre a proposta.

---

## M

### Manager (Gerente)
Perfil que gerencia operações da hospedagem: acesso a configurações, relatórios de receita, aprovações.

**No Hotelly:** Não tem acesso a dados muito sensíveis (PII de hóspedes, credenciais), mas vê tudo o que afeta a operação.

---

### Máquina de Estados
Sistema que define os estágios válidos de um objeto e as transições permitidas. Exemplo: uma reserva não pode ir direto de hold para checked_out sem passar por confirmed primeiro.

**No Hotelly:** Reserva: `hold → confirmed → in_house → checked_out / cancelled / no_show`. Quarto: `sujo → em limpeza → limpo → inspecionado`.

---

### Mercado Pago
Plataforma brasileira de pagamento online. Hotelly integra para receber pagamentos de hóspedes em tempo real.

**No Hotelly:** Checkout automático no Booking Engine e links de pagamento gerados pelo Concierge. Recebimento via Mercado Pago (reduz para conta bancária automaticamente). Conciliação automática com o dashboard financeiro.

---

### Motor de Reservas
Ver Booking Engine.

---

### OMTM (One Metric That Matters)
A métrica mais importante que você monitora para saber se está no caminho certo.

**No Hotelly:** "Parceiros Fundadores ativos com NPS ≥ 7 aos 30 dias". Tudo o que o time faz está ligado a essa métrica.

---

## N

### No-Show (Não Comparecimento)
Quando um hóspede faz reserva, paga, mas não aparece no check-in e não cancela. Perda de receita garantida.

**No Hotelly:** Estado máquina: `no_show`. Você marca manualmente se o hóspede não apareceu. Afeta métricas de ocupação real.

---

### NPS (Net Promoter Score)
Pergunta simples: "Em uma escala de 0-10, qual a chance de você recomendar [empresa] a um amigo?" Respostas 9-10 = promotores, 7-8 = neutros, 0-6 = detratores.

**No Hotelly:** Meta de NPS ≥ 7 para os Parceiros Fundadores aos 30 dias. Indicador de satisfação e retenção.

---

## O

### Ocupação (Taxa de)
Percentual de quartos ocupados em relação aos disponíveis. Exemplo: 15 quartos no total, 12 ocupados = 80% de ocupação.

**No Hotelly:** Métrica em tempo real no dashboard. Base para a Precificação Dinâmica (quanto menor, mais desconto; quanto maior, mais acréscimo).

---

### OTA (Online Travel Agency)
Plataforma terceirizada que vende hospedagens: Booking.com, Airbnb, Expedia, Decolar. Cobram comissão (10-15% típico).

**No Hotelly (Roadmap):** Hub de distribuição com suporte a centenas de OTAs. Por enquanto, foco é em venda direta (WhatsApp + Booking Engine).

---

### Overbooking
Vender o mesmo quarto duas ou mais vezes para noites sobrepostas. Gera constrangimento com hóspede e prejuízo.

**No Hotelly:** Tecnicamente impossível por design — hold bloqueia o inventário em tempo real. Constraint de banco de dados previne conflito.

---

### Owner (Proprietário)
Dono da hospedagem. Perfil com acesso total à propriedade.

**No Hotelly:** Pode fazer qualquer coisa dentro do painel: configurações, financeiro, equipe, políticas. Não tem acesso a painel de administração da Hotelly (só Superadmin).

---

## P

### P1, P2, P3, P4 (Prioridades de Governança)
Níveis de urgência para limpeza. P1 = mais urgente (hóspede chegando em menos de 2 horas), P4 = menos urgente (quartos para futuro próximo).

**No Hotelly:** Dashboard Maestro ordena quartos por essas prioridades automaticamente baseado na hora de check-in do próximo hóspede.

---

### Pacote Sazonal
Oferta especial para um período específico com restrições (estadia mínima, datas fixas, preço reduzido).

**No Hotelly:** Configurado em Políticas → Pacotes Sazonais. Exemplo: "Réveillon 2026: mínimo 4 noites, check-in 29/12, checkout 02/01, preço + 50%".

---

### Pagante (Cliente)
Hóspede que completou o pagamento da reserva. No contexto do Hotelly, "cliente pagante" = hospedagem subscrita ao plano (trial virou paga).

---

### Pipeline
Funil de vendas com prospects mapeados e em diferentes estágios: novo → contato feito → respondeu → demo agendada → convertido.

**No Hotelly:** Pipeline SDR rastreado em `automacoes/pipeline.py`. Cada prospect tem status, datas e notas. Fonte de verdade para o SDR.

---

### PMF (Product-Market Fit)
Indicador de que o produto atende bem as necessidades do mercado-alvo. Síntoma: retenção acima de 60% na semana 4, NPS ≥ 7, conversão trial→pago ≥ 25%.

---

### PMS (Property Management System)
Sistema integrado de gestão hoteleira que controla reservas, financeiro, inventário, equipe, políticas.

**No Hotelly:** É um PMS completo para pousadas e hotéis boutique, mas focado em venda direta (WhatsApp + Site) e IA integrada, não em OTAs.

---

### Precificação Dinâmica (Revenue Management)
Ajuste automático de preços baseado em ocupação, calendário (feriados/eventos) e ritmo de vendas.

**No Hotelly:** Fórmula: `recomendado = base × fator_ocupacao × fator_pickup × fator_calendario`. Três níveis: conservador, padrão, agressivo. Recomendações para 120 dias. Você aprova ou não — não muda automaticamente.

---

### Promotor (Promoter)
Hóspede ou cliente com NPS 9-10 — alguém que recomenda você. Diferente de detrator.

---

## Q

### Quote (Cotação)
Estimativa de preço enviada ao hóspede antes da confirmação da reserva. Inclui período, tipo de quarto, hóspedes, extras, total.

**No Hotelly:** Gerada automaticamente pelo Booking Engine e pelo Concierge Virtual.

---

## R

### RBAC (Role-Based Access Control)
Sistema de permissões baseado em perfil. Cada perfil (Owner, Manager, Front Desk, etc.) vê e faz coisas diferentes.

**No Hotelly:** 6 perfis — Superadmin, Owner, Manager, Front Desk, Housekeeper, Viewer — com permissões granulares.

---

### Relatório
Resumo de dados exportável (CSV, PDF) com métricas de performance: receita, ocupação, cancelamentos, auditoria, etc.

**No Hotelly:** Dashboard financeiro oferece exportação em CSV. Roadmap: +4 relatórios novos (Cancelamentos, Hóspedes Frequentes, Extras, FNRH).

---

### Reembolso (Refund)
Devolução de dinheiro ao hóspede quando cancela. Valor depende da política configurada.

**No Hotelly:** Cálculo automático baseado na política + dias antes do check-in. Fluxo: solicitação → aprovação → processamento via Mercado Pago.

---

### Retenção (Taxa de)
Percentual de clientes que continuam usando depois de 30 dias, 60 dias, etc.

**No Hotelly:** Meta semana 4: retenção > 60%. Indicador crítico de satisfação.

---

### Revenue (Receita)
Dinheiro que entrou. Diferente de lucro — é o topo da conta. Somam-se diárias + extras.

---

### Revenue Management
Ver Precificação Dinâmica.

---

### RevPAR (Revenue Per Available Room)
Receita média por quarto disponível. Fórmula: receita total ÷ quartos disponíveis no período. Métrica mais importante de performance hoteleira.

**No Hotelly:** Exibida em tempo real no dashboard financeiro. Combina ocupação e tarifa média em um número só.

---

### Revisão de Preços
Ato de mudar o preço base de um tipo de quarto. Diferente da Precificação Dinâmica — aqui você decide a mudança, não a IA.

---

## S

### SaaS (Software as a Service)
Modelo de negócio: você paga mensalidade para usar um software na nuvem, sem instalar.

**No Hotelly:** Pricing SaaS com dois planos — Essencial (R$ 249/mês) e Maestro (R$ 449/mês). Faturamento via Stripe.

---

### SDR (Sales Development Representative)
Profissional que prospecciona (faz primeiros contatos), agenda demos e qualifica leads.

**No Hotelly (Estratégia de Marketing):** Executor solo (fundador) atua como SDR com suporte de IA. Cadência: 3 toques (DM dia 0, follow-up dia 3, follow-up dia 7). Contatos mapeados em `pipeline.py`.

---

### SLA (Service Level Agreement)
Acordo de nível de serviço. "Quarto tem SLA de 4 horas para sair de 'sujo' para 'inspecionado'."

**No Hotelly:** Dashboard Maestro alerta quando um quarto P1 ou P2 passa de 4 horas em limpeza.

---

### Soft-Delete (Inativação)
Estratégia de deletar sem apagar do banco — marca como inativo. Preserva histórico, não quebra relatórios.

**No Hotelly:** Tipos de quarto e quartos podem ser inativados, não apagados.

---

### Superadmin
Administrador do sistema Hotelly (nível de plataforma). Não é cliente — é funcionário ou time Hotelly.

---

## T

### Tarifa (Preço)
Preço da diária (overnight rate). Diferente de receita total (que inclui extras).

**No Hotelly:** Configurada por tipo de quarto, data e política. Base para cálculo de RevPAR e ADR.

---

### Teste A/B (Split Test)
Experimento com duas variações (A e B) para descobrir qual converte melhor. Exemplo: assunto de e-mail A vs. B.

**No Hotelly:** Usado em sequências de e-mail (5 sequências com assuntos A/B testáveis) e em anúncios Meta Ads.

---

### Tipo de Quarto
Categoria: solteiro, duplo, suíte, etc. Cada uma com capacidade, preço base e características próprias.

**No Hotelly:** Cadastro em Quartos & Inventário. Você define capacidade máxima, ocupação base e preço. Cada quarto físico vincula-se a um tipo.

---

### Trial (Período de Teste)
Período grátis ou com desconto para o cliente testar o produto antes de pagar.

**No Hotelly:** 14 dias gratuitos sem cartão. Objetivo: ativar, gerar aha! moment, converter em pagante.

---

## U

### Upgrade (de Quarto)
Oferecer um quarto melhor para o hóspede sem custo adicional. Melhora satisfação.

**No Hotelly:** Sistema detecta automaticamente quando categoria adjacente está livre e sinaliza para front desk.

---

### USALI (Uniform System of Accounts for the Lodging Industry)
Padrão contábil para hotelaria. Separa receita em "regime caixa" e "regime competência" para auditoria limpa.

**No Hotelly:** Implementado na tabela `accounting_facts`. Você vê ambos regimes simultaneamente no dashboard.

---

## V

### V-Zone (Valor Zone / Programa Parceiros Fundadores)
Programa exclusivo: 10 vagas para clientes especiais que recebem preço vitalício (R$ 197/mês) em troca de feedback, case study e prova social.

**No Hotelly:** Estratégia de validação de PMF. Após 10 × 30 dias + NPS ≥ 7 + 3 depoimentos + 1 case, abre lançamento público com preço normal (R$ 297/497).

---

### Viewer (Visualizador)
Perfil com acesso somente leitura. Vê tudo mas não muda nada.

**No Hotelly:** Útil para consultores, auditores ou membros da equipe que precisam monitorar sem poder quebrar configurações.

---

## W

### WhatsApp Business
Versão oficial do WhatsApp para empresas. Integra-se ao Hotelly via Meta Cloud API.

**No Hotelly:** Concierge Virtual via WhatsApp. Suporta também Evolution API (para provedores locais). Você escolhe qual usar.

---

### Widget
Pequeno programa embutível em outro site. No caso, o Booking Engine é um widget que você cola no seu site.

---

## X

*(Nenhum termo padrão começa com X)*

---

## Z

### Zero Overbooking
Garantia de que você nunca venderá o mesmo quarto duas vezes. Tecnicamente impossível no Hotelly por design de hold + constraint atômico.

---

## Notas Finais

Este glossário é um documento vivo. À medida que o Hotelly evolui e novos termos aparecem, ele é atualizado. Se você encontrar um termo que não entende ou que deveria estar aqui, entre em contato com o time — queremos que você se sinta confortável navegando o sistema.

**Última revisão:** 19 de março de 2026
**Próxima revisão planejada:** Após lançamento público (Fase 2)
