---
título: "Como registrar um pagamento na reserva"
módulo: reservas
perfil: [owner, manager, front_desk, finance]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-registrar-pagamento"
última_revisão: 2026-03-20
descrição: "Registre pagamentos manuais (dinheiro, Pix, cartão na recepção) em uma reserva no Hotelly."
revisado_por_engenharia: true
---

# Como registrar um pagamento na reserva

> **Objetivo:** Ao final deste guia, você saberá registrar pagamentos recebidos diretamente (dinheiro, cartão, Pix manual, transferência), manter o saldo da reserva atualizado e entender a confirmação automática.

## Passo a passo

1. No menu lateral, clique em **Reservas** > **Reservas**.
2. Clique no nome do hóspede para abrir o detalhe da reserva.
3. No card **"Ações"**, clique em **"Informar Pagamento"**.
4. No dialog **"Informar Pagamento"**, preencha:
   - **"Valor (R$)"** — o valor recebido
   - **"Forma de pagamento"** — selecione entre: Pix, Dinheiro, Cartão de crédito, Cartão de débito, Transferência
   - **"Observações"** (opcional) — detalhes adicionais
5. Clique em **"Confirmar"**.

## O que acontece depois

- O pagamento aparece na tabela de pagamentos no card **"Financeiro"** da reserva, com método, data e valor.
- O **"Saldo devedor"** é recalculado automaticamente.
- Se o pagamento atinge o percentual mínimo de confirmação (configurado em **Configurações** > **Propriedade** > **Dados Gerais**), o status da reserva muda automaticamente de **"Ag. Pagamento"** para **"Confirmada"**.
- O evento "Pagamento registrado" é salvo no **Histórico**.

## Entendendo o card Financeiro

O card Financeiro da reserva mostra o resumo completo:

- **Hospedagem** — valor total das diárias
- **Extras** — serviços adicionais contratados
- **Frigobar** — consumo registrado
- **Total cobranças** — soma de tudo
- **Pagamentos recebidos** — soma de todos os pagamentos
- **Saldo devedor** — diferença (vermelho se positivo, ou "Crédito" em azul se o hóspede pagou a mais)

## Se algo der errado

| Problema | Solução |
|---|---|
| Pagamento registrado com valor errado | Não é possível editar um pagamento já registrado. Registre um estorno e informe um novo pagamento com o valor correto. |
| Status não mudou para "Confirmada" após pagamento | Verifique se o valor acumulado atingiu o percentual mínimo. O percentual está em **Configurações** > **Propriedade** > **Dados Gerais** > "Pagamento mínimo para confirmar (%)". |

---

