---
título: "Como usar o painel de Prioridades (Maestro)"
módulo: governanca
perfil: [owner, manager, housekeeper]
nível: intermediário
tipo: como-fazer
helpArticleId: "governanca-prioridades-maestro"
última_revisão: 2026-03-20
descrição: "Use o Maestro para priorizar a limpeza dos quartos com base em chegadas, turnovers e SLA."
revisado_por_engenharia: true
---

# Como usar o painel de Prioridades (Maestro)

> **Objetivo:** Ao final deste guia, você saberá usar o Maestro para priorizar a limpeza dos quartos com base em urgência, SLA e chegadas previstas — garantindo que os quartos mais críticos sejam limpos primeiro.

## O que é o Maestro

O Maestro é o painel inteligente de prioridades da governança. Enquanto a tela de Limpeza mostra o status de cada quarto, o Maestro organiza a fila de trabalho por urgência: quais quartos limpar primeiro, quais estão com SLA estourado e qual a produtividade da equipe.

## Passo a passo

1. No menu, clique em **Operação** > **Prioridades**.

### Cards de resumo

No topo, quatro cards mostram a visão geral:

| Card | Cor | O que mostra |
|---|---|---|
| **Sujos** | Vermelho | Quartos aguardando limpeza |
| **Limpando** | Azul | Quartos sendo limpos agora |
| **Limpos** | Verde | Quartos prontos |
| **Manutenção** | Roxo | Quartos bloqueados |

### Entendendo as prioridades

Cada quarto pendente recebe um nível de prioridade:

| Nível | Cor | Critério |
|---|---|---|
| **P1 Crítico** | Vermelho | Turnover no mesmo dia (saída + chegada hoje no mesmo quarto) |
| **P2 Alto** | Laranja | Hóspede chegando hoje |
| **P3 Médio** | Laranja | Hóspede chegando nas próximas 48 horas |
| **P4 Baixo** | Cinza | Sem chegada prevista |

### SLA de limpeza

O Maestro trabalha com uma **janela de prontidão (SLA de 4 horas)**. Quando um quarto fica sujo, o cronômetro inicia. Se a limpeza não é concluída em 4 horas, o badge **"SLA"** aparece em vermelho.

No painel de SLA você vê: "X dentro do SLA", "X SLA estourado", "X total pendentes".

### Ações nos quartos

2. Na seção **"Quartos pendentes"**, cada quarto mostra: nome, tipo de quarto, badge **"TURNOVER"** (se houve checkout), prioridade, badge **"Chegada: [nome do hóspede]"** (se há check-in previsto) e tempo decorrido.
3. Use os botões de ação:
   - **"Iniciar Limpeza"** — marca o quarto como "Limpando" (disponível se está sujo)
   - **"Finalizar"** — marca como "Limpo" (disponível se está limpando)
   - Para voltar ao status anterior, deslize o card do quarto para a esquerda (em dispositivos móveis) ou use a tela de **Limpeza**

### Manutenções

4. A seção **"Em manutenção"** mostra quartos bloqueados com badge **"MANUTENÇÃO"**, datas e motivo.
5. A seção **"Manutenções Programadas"** mostra bloqueios futuros.

### Produtividade

6. A seção **"Produtividade (hoje)"** mostra por funcionário: quantos quartos limpou e tempo médio por quarto.

### Exportar

7. Clique em **"Exportar CSV"** para baixar o relatório com colunas: Quarto, Status, Prioridade, Tempo no Status, Prazo de Limpeza, Responsável.

## O que acontece depois

- Os quartos limpos saem da fila automaticamente.
- A produtividade é calculada em tempo real.
- O SLA reseta quando o quarto é marcado como "Limpo".

## Se algo der errado

| Problema | Solução |
|---|---|
| "Todos os quartos estão limpos" / "Nenhuma ação de governança pendente" | Não há quartos sujos no momento. A fila se preenche automaticamente após check-outs. |
| SLA estourado mas quarto está limpo | Pode ter sido limpo após o SLA. O registro fica no histórico para análise de produtividade. |

---

