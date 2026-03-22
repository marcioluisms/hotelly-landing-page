---
título: "Como configurar temporadas e pacotes sazonais"
módulo: configuracoes
perfil: [owner, manager]
nível: intermediário
tipo: como-fazer
helpArticleId: "configuracoes-temporadas"
última_revisão: 2026-03-20
descrição: "Configure temporadas e pacotes no Hotelly para aplicar tarifas diferenciadas por período."
revisado_por_engenharia: true
---

# Como configurar temporadas e pacotes sazonais

> **Objetivo:** Ao final deste guia, você saberá criar pacotes sazonais que definem estadia mínima obrigatória para feriados e alta temporada (ex: mínimo 3 noites no Réveillon).

## Passo a passo

1. No menu, clique em **Configurações** > **Propriedade**.
2. Na seção **"Regras"**, clique em **Temporadas**.
3. Clique em **"Adicionar"**.
4. Preencha:
   - **"Nome do Pacote"** — nome descritivo (ex: "Réveillon", "Carnaval", "Semana Santa")
   - **"Início"** — data de início do período
   - **"Fim"** — data de término
   - **"Mínimo de Noites"** — estadia mínima obrigatória
   - **"Check-in Fixo"** (opcional) — se preenchido, reservas só podem iniciar nesta data específica
5. Clique em **"Criar Pacote"**.

O helper do check-in fixo explica: "Opcional. Se preenchido, reservas só podem iniciar nesta data."

## O que acontece depois

- A mensagem **"Pacote '[nome]' criado."** confirma a operação.
- O pacote aparece na lista com toggle de ativo/inativo.
- Quando ativo, o motor de reservas e o Concierge IA respeitam a estadia mínima do pacote no período configurado.

## Gerenciar pacotes

- **Ativar/desativar:** use o toggle por pacote. Mensagens: **"Pacote '[nome]' ativado."** / **"Pacote '[nome]' desativado."**
- **Remover:** clique em remover. Mensagem: **"Pacote removido."**

Quando não há pacotes: "Nenhum pacote configurado. Reservas de qualquer duração serão aceitas (respeitando restrições por tipo de quarto, se houver)."

## Exemplo prático

| Pacote | Início | Fim | Mín. noites | Check-in fixo |
|---|---|---|---|---|
| Réveillon | 28/12/2026 | 02/01/2027 | 5 | 28/12/2026 |
| Carnaval | 14/02/2027 | 18/02/2027 | 3 | — |
| Alta Temporada | 15/12/2026 | 28/02/2027 | 2 | — |

O Réveillon exige 5 noites com check-in obrigatório em 28/12. O Carnaval exige 3 noites mas o hóspede pode entrar em qualquer dia do período.

## Se algo der errado

| Problema | Solução |
|---|---|
| Hóspede não consegue reservar menos noites que o mínimo | Comportamento esperado — o pacote está funcionando. Se quiser abrir exceção, desative temporariamente o pacote. |
| Dois pacotes se sobrepõem | A restrição mais restritiva (maior mínimo de noites) prevalece. |

---

