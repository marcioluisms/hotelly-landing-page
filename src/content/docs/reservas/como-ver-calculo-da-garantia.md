---
título: "Como ver o cálculo da garantia de uma reserva"
módulo: reservas
perfil: [owner, manager, front_desk, finance]
nível: intermediário
tipo: como-fazer
helpArticleId: "reservas-calculo-garantia"
última_revisão: 2026-03-20
descrição: "Veja como o Hotelly calcula o valor de garantia ou sinal exigido para confirmar uma reserva."
revisado_por_engenharia: true
---

# Como ver o cálculo da garantia de uma reserva

> **Objetivo:** Ao final deste guia, você saberá consultar como o sistema calculou o valor mínimo de pagamento (sinal) para confirmar uma reserva.

## Passo a passo

1. No menu lateral, clique em **Painel** > **Reservas**.
2. Clique no nome do hóspede para abrir o detalhe da reserva.
3. No card **"Ações"**, clique em **"Ver cálculo da garantia"**.
4. O sistema exibe o detalhamento do cálculo: valor total da reserva, percentual de sinal aplicado e valor mínimo para confirmação.

## Como o sinal é calculado

O percentual de sinal vem de duas fontes (em ordem de prioridade):

1. **Exceção por temporada** — se as datas da reserva caem em um período cadastrado em **Configurações** > **Propriedade** > **Sinal** > **Exceções por Temporada**, o percentual da exceção prevalece. Se dois períodos se sobrepõem, o de maior peso prevalece.
2. **Sinal padrão** — percentual definido em **Configurações** > **Propriedade** > **Sinal** > **Percentual do sinal**. Aplicado quando nenhuma exceção se aplica.

O valor mínimo para confirmação é: valor total da reserva × percentual de sinal.

## Exemplo prático

A Pousada Sol tem sinal padrão de 30%. Mas no Réveillon, a exceção "Reveillon" define sinal de 50%. Uma reserva de R$ 2.000 para 28/12 a 02/01: o sistema aplica 50% (exceção Réveillon), exigindo R$ 1.000 para confirmar. Se a mesma reserva fosse em março, o sinal seria 30% = R$ 600.

---

