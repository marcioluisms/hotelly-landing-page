---
título: "Como fazer check-in de um hóspede"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-check-in"
última_revisão: 2026-03-20
descrição: "Faça check-in de hóspedes no Hotelly. Veja o que conferir antes e o que acontece depois no sistema."
revisado_por_engenharia: true
---

# Como fazer check-in de um hóspede

> **Objetivo:** Ao final deste guia, você saberá registrar a chegada do hóspede, mudando o status da reserva para "Hospedado".

## Pré-requisitos

- A reserva precisa estar com status **"Confirmada"** (pagamento mínimo recebido)
- O quarto precisa estar com status **"Limpo"** na governança
- Um quarto precisa estar atribuído à reserva

## Passo a passo

### Opção 1: Pela lista de reservas

1. No menu lateral, clique em **Painel** > **Reservas**.
2. Encontre a reserva desejada na lista.
3. Clique no botão **"Fazer Check-in"** na coluna de ações.

### Opção 2: Pelo painel Início

1. Na página **Início**, localize a seção **"Operações do Dia"** > **"Check-in"**.
2. Encontre o hóspede na lista de check-ins previstos para hoje.
3. Clique no botão **"Check-in"**.

### Opção 3: Pelo detalhe da reserva

1. Abra a reserva clicando no nome do hóspede.
2. No card **"Ações"**, clique em **"Fazer Check-in"**.

## O que acontece depois

- O status da reserva muda para **"Hospedado"** (badge verde).
- O quarto aparece como ocupado no **Mapa de Quartos**.
- O evento "Check-in realizado" é registrado no **Histórico** da reserva.
- O card de KPI **"Hospedados"** na página Início é atualizado.
- A mensagem **"Check-in realizado com sucesso."** confirma a operação.

## Se algo der errado

| Problema | Solução |
|---|---|
| Botão de check-in não aparece | Verifique se a reserva está com status "Confirmada". Reservas "Ag. Pagamento" precisam ter o pagamento mínimo registrado primeiro. |
| "Quarto ainda não liberado pela governança." | O quarto está com status "Sujo" ou "Limpando". Acesse **Operação** > **Limpeza** e marque o quarto como "Limpo". |
| "Quarto não atribuído." | A reserva não tem quarto definido. Abra o detalhe da reserva e clique em **"Atribuir quarto"**. |

---

