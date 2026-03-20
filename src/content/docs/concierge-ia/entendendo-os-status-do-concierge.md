---
título: "Entendendo os status do Concierge IA"
módulo: concierge-ia
perfil: [owner, manager, front_desk, viewer]
nível: básico
tipo: conceito
helpArticleId: "concierge-ia-conceito-status"
última_revisão: 2026-03-20
descrição: "Entenda os status das conversas do Concierge IA: ativo, aguardando, encerrado e transferido."
revisado_por_engenharia: true
---

# Entendendo os status do Concierge IA

> **Em uma frase:** O Concierge IA tem 7 estados possíveis que indicam se ele está ativo, inativo e por quê — entender cada um permite agir rápido quando algo não está como esperado.

## Por que isso importa para você

Se o Concierge mostra "não está respondendo" e você esperava que estivesse, saber qual é o status exato ajuda a resolver em segundos. Cada status tem uma causa e uma ação clara.

## Os 7 status do Concierge

| Status na tela | O que significa | O que fazer |
|---|---|---|
| **Fora do expediente** | Horário comercial acabou, IA está respondendo normalmente | Nada — comportamento esperado |
| **Dentro do expediente** | Sua equipe está atendendo, IA está parada | Nada — comportamento esperado. Se precisar da IA, crie um override de ativação |
| **Ativado por override** | Você forçou a ativação da IA (mesmo dentro do expediente) | A IA está respondendo. O override expira no horário definido |
| **Pausado por override** | Você forçou a pausa da IA (mesmo fora do expediente) | A IA está parada. O override expira no horário definido |
| **Concierge desativado** | O Concierge está desligado globalmente | Entre em contato com o suporte Hotelly para reativar |
| **Sem horários configurados** | Nenhum dia da semana tem horário comercial definido. A IA responde o tempo todo como fallback | Configure os horários em **Concierge IA** > **Horário Comercial** para definir quando a equipe humana atende |
| **Erro de timezone** | Problema com o fuso horário da propriedade | Entre em contato com o suporte para corrigir |

## Indicador visual

Na tela do Concierge IA, um texto simples indica o estado atual:
- **"O concierge está respondendo mensagens"** — IA ativa, atendendo hóspedes
- **"O concierge não está respondendo mensagens"** — IA inativa, atendimento humano

## Hierarquia de decisão

O sistema decide o status nesta ordem de prioridade:

1. **Desativado?** → Se sim, para tudo
2. **Tem override ativo?** → Se sim, prevalece sobre o horário comercial
3. **Está dentro do horário comercial?** → Se sim, IA fica parada (equipe atende)
4. **Está fora do horário comercial?** → IA assume

Ou seja: um override sempre ganha do horário comercial, e desativar ganha de tudo.

## Artigos relacionados

- [Como configurar o horário comercial do Concierge](como-configurar-horario-comercial.md)
- [Como ativar ou pausar o Concierge com override](como-usar-overrides.md)

---

