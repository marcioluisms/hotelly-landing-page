---
título: "Como consultar a disponibilidade no heatmap"
módulo: governanca
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "governanca-disponibilidade-heatmap"
última_revisão: 2026-03-20
descrição: "Visualize a disponibilidade dos quartos em formato heatmap para identificar períodos cheios e vazios."
revisado_por_engenharia: true
---

# Como consultar a disponibilidade no heatmap

> **Objetivo:** Ao final deste guia, você saberá usar o mapa de calor de disponibilidade para visualizar rapidamente quanto inventário está disponível por tipo de quarto e período.

## Passo a passo

1. No menu, clique em **Operação** > **Disponibilidade**.
2. O heatmap exibe um grid com tipos de quarto nas linhas e datas nas colunas.

### Navegar no tempo

3. Escolha o período de visualização: **"7d"**, **"15d"** ou **"30d"**.
4. Use os botões de navegação: **"← Xd"**, **"Hoje"**, **"Xd →"**.

### Interpretar as cores

Cada célula mostra um número (disponível / capacidade efetiva) e uma cor de fundo que indica o nível de ocupação:

| Cor | Faixa de ocupação |
|---|---|
| Verde claro | 0-19% (muito baixa) |
| Verde | 20-39% (baixa) |
| Amarelo | 40-59% (moderada) |
| Laranja | 60-79% (alta) |
| Vermelho | 80-99% (muito alta) |
| Vermelho escuro | 100% (lotado) |
| Badge especial | Overbooking (acima da capacidade) |

O badge **"UPGRADE"** aparece quando o sistema detecta oportunidade de upgrade para hóspedes.

### Ver detalhes de uma célula

5. Clique em qualquer célula para ver o popover com detalhes:
   - **Inventário total** — quartos desse tipo
   - **Bloqueados (manutenção)** — quartos em manutenção
   - **Capacidade efetiva** — total menos bloqueados
   - **Reservados** — quartos com reserva
   - **Retidos (holds)** — bloqueios temporários
   - **Disponível** — quartos livres
   - **Ocupação X%** — percentual calculado
   - Alerta **"Overbooking detectado"** (se aplicável)

## O que acontece depois

- O heatmap é atualizado em tempo real conforme reservas são criadas, canceladas ou quartos são bloqueados para manutenção.
- Texto auxiliar: "Disponível / Capacidade efetiva".

## Se algo der errado

| Problema | Solução |
|---|---|
| Todos os quartos mostram 0 disponível | Verifique se há quartos ativos cadastrados. Se todos estão em manutenção ou reservados, o disponível será 0 mesmo. |
| "Overbooking detectado" | Há mais reservas do que quartos disponíveis para esse tipo nesse dia. Reatribua reservas para outros quartos ou tipos. |

---

