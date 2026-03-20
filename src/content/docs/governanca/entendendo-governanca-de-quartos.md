---
título: "Entendendo a governança de quartos"
módulo: governanca
perfil: [owner, manager, front_desk, housekeeper, viewer]
nível: básico
tipo: conceito
helpArticleId: "governanca-conceito"
última_revisão: 2026-03-20
descrição: "Entenda como funciona a governança de quartos no Hotelly: status, fila de limpeza e fluxo operacional."
revisado_por_engenharia: true
---

# Entendendo a governança de quartos

> **Em uma frase:** Governança é o controle de limpeza, manutenção e disponibilidade dos quartos — o Hotelly automatiza a fila de trabalho e bloqueia check-in até o quarto estar pronto.

## Por que isso importa para você

Sem governança digital, a recepção não sabe se o quarto está limpo, a camareira não sabe qual quarto priorizar, e o hóspede pode ser direcionado para um quarto sujo. O Hotelly elimina isso: o quarto só libera para check-in quando a governança marca como "Limpo".

## Os 4 status de governança

| Status | Cor | Quando acontece |
|---|---|---|
| **Sujo** | Vermelho | Automaticamente após check-out, ou manualmente |
| **Limpando** | Azul | Quando alguém inicia a limpeza |
| **Limpo** | Verde | Quando a limpeza é finalizada |
| **Manutenção** | Roxo | Quando o quarto é bloqueado para reparo |

## O ciclo automático

```
Hóspede faz check-out
        ↓
Quarto → Sujo (automático)
        ↓
Camareira inicia → Limpando
        ↓
Camareira finaliza → Limpo
        ↓
Recepção faz check-in do próximo hóspede
```

A regra é simples: **nenhum check-in acontece em quarto que não está "Limpo"**. Se tentarem, o sistema mostra: "Quarto ainda não liberado pela governança."

## Onde controlar

| Tela | O que faz | Para quem |
|---|---|---|
| **Operação > Limpeza** | Atualizar status (Sujo/Limpando/Limpo) por quarto | Camareira, recepcionista |
| **Operação > Prioridades** | Fila priorizada com SLA, produtividade e manutenções | Gerente, governanta |
| **Operação > Disponibilidade** | Heatmap de ocupação por tipo de quarto | Gerente, recepcionista |
| **Operação > Café da Manhã** | Planejamento de hóspedes por dia | Cozinha, gerente |

## Artigos relacionados

- [Como gerenciar a limpeza de quartos](como-gerenciar-limpeza-de-quartos.md)
- [Como usar o painel de Prioridades (Maestro)](como-usar-prioridades-maestro.md)
- [Como bloquear um quarto para manutenção](como-bloquear-quarto-para-manutencao.md)
- [Como usar o planejamento de Café da Manhã](como-usar-o-planejamento-cafe-da-manha.md)
- [Como consultar a disponibilidade no heatmap](como-consultar-disponibilidade-heatmap.md)

---

