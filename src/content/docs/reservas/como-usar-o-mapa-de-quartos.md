---
título: "Como usar o Mapa de Quartos"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-mapa-quartos"
última_revisão: 2026-03-20
descrição: "Use o Mapa de Quartos para visualizar ocupação, mover reservas com drag-and-drop e acompanhar status de limpeza em tempo real."
revisado_por_engenharia: true
---

# Como usar o Mapa de Quartos

> **Objetivo:** Ao final deste guia, você saberá visualizar a ocupação de todos os quartos em uma linha do tempo, identificar disponibilidade e entender os indicadores visuais.

## Passo a passo

1. No menu lateral, clique em **Painel** > **Mapa de Quartos**.
2. O mapa exibe um grid com todos os quartos na coluna da esquerda (**"Quarto"**) e os dias nas colunas superiores (formato: dia da semana abreviado + DD/MM).

### Navegar no tempo

3. Use os botões **"← 30d"** e **"30d →"** para avançar ou recuar 30 dias.
4. Clique em **"Hoje"** para voltar à data atual.

### Interpretar as cores

Cada bloco colorido no grid representa uma reserva. A cor indica o status:

| Cor | Status | Significado |
|---|---|---|
| Azul | Confirmada | Reserva garantida, hóspede ainda não chegou |
| Verde | Hospedado | Hóspede está no quarto |
| Cinza | Saiu | Hóspede já fez check-out |
| Amarelo | Pendente | Reserva pendente |
| Laranja | Ag. Pagamento | Aguardando pagamento |
| Vermelho | Cancelada | Reserva cancelada |
| Listras diagonais | Manutenção | Quarto bloqueado para manutenção |

### Indicadores de governança nos quartos

Na coluna de quartos, pequenos indicadores mostram o status de limpeza:

| Cor | Status |
|---|---|
| Vermelho | Sujo |
| Laranja | Limpando |
| Cinza | Limpo |
| Roxo | Manutenção |

### Mover reservas com arrastar e soltar

5. Para mover uma reserva para outro quarto ou alterar as datas, arraste o bloco da reserva para a nova posição no grid.
6. O sistema exibe um dialog de confirmação com as alterações (quarto antigo → novo, datas antigas → novas) e preview de preço.
7. Confirme ou cancele a mudança.

## O que acontece depois

- Clicando em um bloco de reserva no mapa, você acessa o detalhe daquela reserva.
- O mapa é atualizado em tempo real conforme novas reservas são criadas ou status mudam.

## Se algo der errado

| Problema | Solução |
|---|---|
| Quarto não aparece no mapa | Verifique se o quarto está **ativo** em **Configurações** > **Quartos**. Quartos inativos não aparecem no mapa. |
| Blocos de reserva sobrepostos | Pode indicar um conflito de alocação. Acesse as reservas envolvidas e reatribua quartos. |

---

