---
título: "Concierge não está respondendo mensagens"
módulo: concierge-ia
perfil: [owner, manager, front_desk]
nível: básico
tipo: troubleshooting
helpArticleId: "concierge-ia-nao-responde"
última_revisão: 2026-03-20
descrição: "O Concierge IA parou de responder? Veja as causas mais comuns e como resolver em poucos passos."
revisado_por_engenharia: true
---

# Concierge não está respondendo mensagens

> **Sintoma:** O hóspede enviou mensagem pelo WhatsApp fora do horário comercial, mas o Concierge IA não respondeu. Ou o status na tela mostra "O concierge não está respondendo mensagens" quando deveria estar ativo.

## Causa mais comum

O Concierge segue uma hierarquia de decisão. Se não está respondendo, uma destas situações está acontecendo:

## Como resolver

### 1. Verifique o status na tela

Acesse **Configurações** > **Propriedade** > **Canais** > **Concierge IA** e veja qual status aparece:

| Status | Causa | Ação |
|---|---|---|
| **Concierge desativado** | O Concierge está desligado globalmente | Entre em contato com o suporte ou equipe Hotelly para reativar |
| **Pausado por override** | Alguém criou um override de pausa | Acesse o card **Overrides**, encontre o override ativo e remova-o |
| **Dentro do expediente** | Está no horário comercial, IA não responde por design | Se quer que a IA responda agora, crie um override de ativação |
| **Sem horários configurados** | Não há horário comercial definido | Configure os horários no card **Horário Comercial** |
| **Erro de timezone** | Fuso horário incorreto | Entre em contato com o suporte |

### 2. Verifique a conexão do WhatsApp

Se o status mostra que o Concierge está ativo mas as mensagens não chegam, o problema pode ser na conexão do WhatsApp. Entre em contato com a equipe Hotelly para verificar a integração.

### 3. Verifique a base de conhecimento

Se o Concierge recebe a mensagem mas responde "não tenho essa informação", a base de conhecimento pode estar incompleta. Vá em **Configurações** > **Propriedade** > **Perfil** e preencha as informações.

## Se o problema persistir

Se após verificar os três pontos acima o Concierge continua sem responder, abra um ticket de suporte em **Atendimento** > **Suporte** com a descrição do problema. A equipe Hotelly vai investigar a integração do WhatsApp.

## Como evitar no futuro

- Mantenha os horários comerciais sempre atualizados
- Antes de criar um override de pausa, anote o horário de fim para não esquecer
- Preencha a base de conhecimento o mais completa possível

---

