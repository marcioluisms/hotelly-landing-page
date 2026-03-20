---
título: "Entendendo os status da reserva"
módulo: reservas
perfil: [owner, manager, front_desk, finance, viewer]
nível: básico
tipo: conceito
helpArticleId: "reservas-conceito-status"
última_revisão: 2026-03-20
descrição: "Conheça cada status de reserva no Hotelly: hold, confirmada, hospedado, check-out, cancelada e no-show."
revisado_por_engenharia: true
---

# Entendendo os status da reserva

> **Em uma frase:** Cada reserva no Hotelly passa por um ciclo de vida com status que indicam exatamente em que ponto ela está — do momento em que é criada até o check-out final.

## Por que isso importa para você

Saber o status de cada reserva permite tomar decisões rápidas: quem precisa pagar, quem pode fazer check-in, quem está hospedado e quem já saiu. Os badges coloridos na lista de reservas e no Mapa de Quartos facilitam a visualização instantânea da operação.

## Os 5 status da reserva

| Status | Badge | Cor | O que significa |
|---|---|---|---|
| **Ag. Pagamento** | Ag. Pagamento | Laranja | Reserva criada, aguardando o hóspede pagar o sinal mínimo. O sistema gerou um link de pagamento automaticamente. |
| **Confirmada** | Confirmada | Azul | Pagamento mínimo recebido (ou reserva garantida manualmente). O quarto está reservado para o hóspede. |
| **Hospedado** | Hospedado | Verde | Check-in realizado. O hóspede está no estabelecimento. |
| **Check-out** | Check-out | Cinza | Hóspede fez check-out. Estadia encerrada. |
| **Cancelada** | Cancelada | Vermelho | Reserva foi cancelada antes do check-in. |

## Como funciona o ciclo

```
Reserva criada
     ↓
Ag. Pagamento ──→ Cancelada
     ↓ (pagou mínimo)
Confirmada ──→ Cancelada
     ↓ (check-in)
Hospedado
     ↓ (check-out)
Check-out (final)
```

A transição de "Ag. Pagamento" para "Confirmada" acontece automaticamente quando o hóspede paga o percentual mínimo configurado. Você também pode forçar essa transição com o botão **"Garantir reserva"**.

## Exemplo prático

Imagine que Maria reserva a Suíte Master para o feriado. A reserva é criada como "Ag. Pagamento" e o link é enviado. Maria paga 50% via Pix pelo link do Mercado Pago. Como o mínimo configurado é 30%, o status muda automaticamente para "Confirmada". No dia do feriado, a recepcionista faz o check-in e o status passa para "Hospedado". Na data de saída, o check-out é feito e o status final é "Check-out".

## Artigos relacionados

- [Como criar uma reserva](como-criar-uma-reserva.md)
- [Como fazer check-in de um hóspede](como-fazer-check-in.md)
- [Como fazer check-out de um hóspede](como-fazer-check-out.md)
- [Como garantir uma reserva manualmente](como-garantir-uma-reserva.md)
- [Como cancelar uma reserva](como-cancelar-uma-reserva.md)

---

