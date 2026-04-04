---
título: "Como ativar o Motor de Reservas"
módulo: configuracoes
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "configuracoes-motor-reservas"
última_revisão: 2026-04-04
descrição: "Ative o Motor de Reservas para receber reservas diretas pelo site da sua hospedagem com pagamento integrado."
revisado_por_engenharia: true
---

# Como ativar o Motor de Reservas

> **Objetivo:** Ao final deste guia, você saberá ativar o motor de reservas online para que hóspedes façam reservas diretamente pelo seu site, sem intermediários.

## O que é

O Motor de Reservas é a página de reservas online do Hotelly. Quando ativado, ele gera uma URL pública e um widget que você pode embutir no site da sua hospedagem. O hóspede acessa, escolhe datas, tipo de quarto e faz a reserva com pagamento direto na sua conta do Mercado Pago — sem comissão de OTA.

## Pré-requisitos

Antes de ativar, confirme que os três itens abaixo estão em ordem:

1. **Conta Mercado Pago conectada** — o pagamento das reservas vai direto para a sua conta. Se ainda não conectou, vá em **Configurações > Integrações > Mercado Pago** e siga o processo de autorização (OAuth, menos de 2 minutos).
2. **Tipos de quarto cadastrados** — o motor exibe os quartos e preços disponíveis. Sem quartos ativos, a página fica vazia.
3. **Tarifas definidas** — pelo menos uma tarifa ativa por tipo de quarto.

## Passo a passo

1. No menu, clique em **Configurações** > **Propriedade**.
2. Na seção **"Canais"**, clique em **Motor de Reservas**.
3. Ative o toggle **"Reservas online ativas"**.
4. No campo **"Slug (URL)"**, defina o nome da sua página (ex: "pousada-sol"). O sistema mostra a URL completa abaixo.
5. Clique em **"Abrir página de reservas →"** para visualizar como fica.

### Embutir no seu site

6. Na seção **"Código do Widget"**, clique em **"Copiar"** para copiar o código de incorporação.
7. Cole o código no HTML do seu site onde quer que o botão de reserva apareça.

## O que acontece depois

- A mensagem **"Motor de reservas atualizado."** confirma a ativação.
- Reservas feitas pelo motor entram automaticamente no Hotelly com a fonte "Motor de Reservas" (booking_engine).
- O hóspede recebe um email de confirmação automático.
- O hóspede vê disponibilidade em tempo real e preços conforme configurados nas tarifas.

## Se algo der errado

| Problema | Solução |
|---|---|
| Página de reservas não mostra quartos disponíveis | Verifique se há quartos ativos, tarifas definidas e nenhum bloqueio de disponibilidade no período. |
| Pagamento não está sendo processado | Confirme que a conta Mercado Pago está conectada em Configurações > Integrações. |
| Toggle está desativado e não consigo ativar | Verifique se sua assinatura suporta o motor de reservas ou entre em contato com o suporte. |

---

