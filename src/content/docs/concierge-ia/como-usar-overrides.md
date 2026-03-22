---
título: "Como ativar ou pausar o Concierge com override"
módulo: concierge-ia
perfil: [owner, manager]
nível: intermediário
tipo: como-fazer
helpArticleId: "concierge-ia-overrides"
última_revisão: 2026-03-20
descrição: "Use overrides para personalizar respostas do Concierge IA em situações específicas sem alterar a base."
revisado_por_engenharia: true
---

# Como ativar ou pausar o Concierge com override

> **Objetivo:** Ao final deste guia, você saberá forçar a ativação ou pausa do Concierge IA temporariamente, ignorando o horário comercial configurado.

## Quando usar

Os overrides servem para situações fora da rotina:

- **Ativar concierge** durante o expediente — quando a equipe está sobrecarregada, em reunião ou em treinamento e precisa que a IA assuma o WhatsApp
- **Pausar concierge** fora do expediente — quando você quer atender pessoalmente (exemplo: um hóspede VIP está chegando e você quer dar atenção direta)

## Passo a passo

1. No menu, clique em **Configurações** > **Propriedade**.
2. Na seção **"Canais"**, clique em **Concierge IA**.
3. Localize o card **"Overrides"**.
4. Clique em **"Novo Override"**.
5. Selecione a ação:
   - **"Ativar concierge"** — força a IA a responder, mesmo dentro do expediente
   - **"Pausar concierge"** — força a IA a parar de responder, mesmo fora do expediente
6. Defina:
   - **"Início"** — quando o override começa
   - **"Fim"** — quando o override termina (a IA volta ao comportamento normal)
   - **"Motivo"** (opcional) — justificativa para registro
7. Clique em **"Criar Override"**.

## O que acontece depois

- O status do Concierge muda imediatamente para **"Ativado por override"** ou **"Pausado por override"**.
- Quando o período do override termina, o Concierge volta ao comportamento normal (baseado nos horários comerciais).
- O override aparece na lista com data de início, fim e motivo.
- A mensagem **"Override criado."** confirma a operação.

## Gerenciar overrides existentes

Na lista de overrides, você pode:
- Ver overrides ativos e agendados
- **Override agendado (futuro):** clique no ícone de lixeira para remover (mensagem **"Override removido."**)
- **Override ativo (em andamento):** clique no ícone X para cancelar (mensagem **"Override cancelado."**) — o Concierge volta ao comportamento normal imediatamente

Quando não há nenhum override: "Nenhum override ativo ou agendado."

## Exemplo prático

É terça-feira, 10h da manhã (dentro do expediente). Sua recepcionista precisou sair para uma emergência e você está em reunião. Você cria um override "Ativar concierge" das 10h às 14h com motivo "Recepcionista ausente". A IA assume o WhatsApp por 4 horas. Às 14h, o override expira e o atendimento humano retoma normalmente.

## Se algo der errado

| Problema | Solução |
|---|---|
| Criei um override por engano | Acesse a lista de overrides e remova-o. O Concierge volta ao comportamento normal imediatamente. |
| Override expirou mas Concierge continua no status anterior | Recarregue a página. O status atualiza automaticamente. |

---

