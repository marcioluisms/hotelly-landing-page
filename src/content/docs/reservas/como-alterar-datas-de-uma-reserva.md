---
título: "Como alterar datas de uma reserva"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-alterar-datas"
última_revisão: 2026-03-20
descrição: "Altere as datas de uma reserva no Hotelly com preview automático da diferença de valor antes de confirmar."
revisado_por_engenharia: true
---

# Como alterar datas de uma reserva

> **Objetivo:** Ao final deste guia, você saberá estender, encurtar ou mover uma reserva para novas datas, ajustando o valor quando necessário.

## Passo a passo

1. No menu lateral, clique em **Reservas** > **Reservas**.
2. Clique no nome do hóspede para abrir o detalhe da reserva.
3. No card **"Ações"**, clique em **"Alterar datas"**.
4. No dialog **"Alterar datas da reserva"**, ajuste:
   - **"Check-in"** — nova data de entrada
   - **"Check-out"** — nova data de saída
   - **"Ajuste (R$)"** — valor a adicionar ou subtrair do total (preenchido por você conforme a diferença de diárias)
   - **"Motivo do ajuste"** — justificativa para o registro na trilha de auditoria
5. Clique em **"Confirmar"**.

## O que acontece depois

- As datas são atualizadas e o evento "Datas alteradas" é registrado no **Histórico** da reserva.
- A mensagem **"Alteração solicitada. Recarregue em instantes."** confirma a operação.
- O **Mapa de Quartos** é atualizado com as novas datas.
- O valor total da reserva é ajustado conforme o valor informado.

## Se algo der errado

| Problema | Solução |
|---|---|
| "Este quarto já está ocupado neste período. Escolha outro quarto." | Há conflito com outra reserva no mesmo quarto. Escolha datas diferentes ou reatribua o quarto antes de alterar as datas. |
| "Reserva foi alterada por outro atendente. Recarregue a página." | Outro usuário modificou a reserva simultaneamente. Recarregue a página e tente novamente. |

---

