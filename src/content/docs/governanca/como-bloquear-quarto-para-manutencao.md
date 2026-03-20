---
título: "Como bloquear um quarto para manutenção"
módulo: governanca
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "governanca-manutencao"
última_revisão: 2026-03-20
descrição: "Bloqueie um quarto para manutenção no Hotelly. O sistema remove o quarto da disponibilidade."
revisado_por_engenharia: true
---

# Como bloquear um quarto para manutenção

> **Objetivo:** Ao final deste guia, você saberá tirar um quarto de operação temporariamente para manutenção, impedindo que ele receba reservas durante o período.

## Quando usar

- Quarto com problema (encanamento, ar-condicionado, reforma)
- Manutenção preventiva programada
- Qualquer situação que impeça o uso do quarto

## Passo a passo

1. No menu lateral, clique em **Configurações** > **Quartos** > aba **"Quartos"**.
2. Na linha do quarto desejado, clique no ícone de **manutenção** (ou acesse o dialog de manutenção).
3. O dialog **"Manutenção — [nome do quarto]"** exibe os períodos já cadastrados (se houver).
4. Na seção **"Adicionar Bloqueio"**, preencha:
   - **"Início"** — data de início da manutenção
   - **"Fim"** — data prevista de conclusão
   - **"Motivo"** — razão do bloqueio (ex: "Troca de ar-condicionado")
   - **"Observações"** (opcional) — detalhes adicionais
5. Clique em **"Criar bloqueio"**.

## O que acontece depois

- O quarto aparece com status **"Manutenção"** (badge roxo) no **Mapa de Quartos** e no painel de **Prioridades**.
- O quarto fica indisponível para novas reservas no período bloqueado — aparece com listras diagonais no Mapa de Quartos.
- O heatmap de **Disponibilidade** desconta o quarto da capacidade efetiva.
- A seção **"Em manutenção"** no Maestro mostra o quarto com datas e motivo.

## Gerenciar bloqueios existentes

No dialog de manutenção, cada bloqueio mostra: início → fim | motivo | observações. Você pode:
- **"Editar"** — alterar datas ou motivo
- **"Remover"** — desbloquear o quarto (com confirmação: "Confirmar?" → "Sim" / "Não")

## Se algo der errado

| Problema | Solução |
|---|---|
| Quarto em manutenção mas tem reserva no período | O bloqueio não cancela reservas existentes automaticamente. Reatribua o hóspede para outro quarto antes de bloquear. |
| Manutenção terminou antes do previsto | Acesse o dialog e remova o bloqueio. O quarto volta a ficar disponível imediatamente. |

---

