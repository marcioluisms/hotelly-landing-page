---
título: "Como cancelar uma reserva"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-cancelar"
última_revisão: 2026-03-20
descrição: "Cancele uma reserva no Hotelly com cálculo automático de reembolso baseado na política configurada."
revisado_por_engenharia: true
---

# Como cancelar uma reserva

> **Objetivo:** Ao final deste guia, você saberá cancelar uma reserva e entender o impacto no financeiro e na disponibilidade.

## Pré-requisitos

- A reserva **não** pode estar com status "Check-out" ou "Cancelada" (reservas finalizadas ou já canceladas não podem ser canceladas novamente)

## Passo a passo

1. No menu lateral, clique em **Painel** > **Reservas**.
2. Clique no nome do hóspede para abrir o detalhe da reserva.
3. No card **"Ações"**, clique em **"Cancelar reserva"**.
4. No dialog **"Cancelar reserva"**, informe o **motivo do cancelamento**.
5. Clique em **"Confirmar cancelamento"**.

## O que acontece depois

- O status muda para **"Cancelada"** (badge vermelho).
- O quarto é liberado e volta a ficar disponível para o período.
- O evento "Reserva cancelada" é registrado no **Histórico**.
- O **Mapa de Quartos** é atualizado, liberando o bloco.
- A mensagem **"Reserva cancelada com sucesso."** confirma a operação.

## Sobre multas e reembolsos

O cancelamento no sistema é um registro operacional. A aplicação de multas depende das políticas configuradas:

- A política de cancelamento está em **Configurações** > **Propriedade** > **Cancelamento**
- As tabelas de retenção por faixa de dias estão em **Configurações** > **Propriedade** > **Regras de Reserva**
- Se houve pagamento, o ajuste financeiro (reembolso parcial ou total) precisa ser feito manualmente

## Se algo der errado

| Problema | Solução |
|---|---|
| Botão "Cancelar reserva" não aparece | A reserva já está com status "Check-out" ou "Cancelada". Reservas finalizadas não podem ser canceladas. |
| Cancelei por engano | O cancelamento não pode ser desfeito pelo sistema. Crie uma nova reserva para o mesmo hóspede e período. |

---

