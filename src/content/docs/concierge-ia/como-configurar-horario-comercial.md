---
título: "Como configurar o horário comercial do Concierge"
módulo: concierge-ia
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "concierge-ia-horario-comercial"
última_revisão: 2026-03-20
descrição: "Configure o horário comercial do Concierge IA para definir quando ele responde sozinho e quando avisa a equipe."
revisado_por_engenharia: true
---

# Como configurar o horário comercial do Concierge

> **Objetivo:** Ao final deste guia, você saberá definir os horários em que sua equipe atende presencialmente, para que o Concierge IA assuma automaticamente fora desse período.

## Como funciona a lógica

O Concierge IA responde **fora** dos horários comerciais que você configura. A ideia é simples: durante o expediente, sua equipe atende pelo WhatsApp normalmente. Quando o expediente acaba, a IA assume.

Se você não configurar nenhum horário, o status mostra **"Sem horários configurados"** e o Concierge não ativa automaticamente (você precisaria usar overrides manuais).

## Passo a passo

1. No menu, clique em **Configurações** > **Propriedade**.
2. Na seção **"Canais"**, clique em **Concierge IA**.
3. Localize o card **"Horário Comercial"**.
4. Para cada dia da semana (Segunda a Domingo):
   - Ative o **toggle** do dia para habilitar atendimento humano naquele dia
   - Defina a **hora de início** e a **hora de fim** do expediente
5. Clique em **"Salvar"** para gravar as alterações.

## Turnos noturnos

Se sua recepção funciona em turnos que cruzam a meia-noite (exemplo: expediente das 18h às 02h), o sistema suporta normalmente. Quando isso acontece, aparece o badge **"Noturno"** ao lado do dia.

O helper do sistema confirma: "Turnos que cruzam meia-noite são suportados. O concierge IA responde fora dos horários configurados."

## O que acontece depois

- Quando o relógio sai do horário comercial configurado, o status muda automaticamente para **"Fora do expediente"** e o Concierge começa a responder.
- Quando o expediente começa, o status muda para **"Dentro do expediente"** e o Concierge para de responder.
- Na tela do Concierge, o texto indica: "O concierge está respondendo mensagens" ou "O concierge não está respondendo mensagens".

## Exemplo de configuração

| Dia | Início | Fim | Concierge ativo quando? |
|---|---|---|---|
| Segunda | 08:00 | 18:00 | Das 18:00 até 08:00 de terça |
| Terça | 08:00 | 18:00 | Das 18:00 até 08:00 de quarta |
| Sábado | 08:00 | 12:00 | Das 12:00 até 08:00 de segunda |
| Domingo | (desativado) | — | O dia todo |

## Se algo der errado

| Problema | Solução |
|---|---|
| Status mostra "Sem horários configurados" | Nenhum dia da semana tem horário definido. Configure pelo menos um dia. |
| Status mostra "Erro de timezone" | Problema com o fuso horário da propriedade. Entre em contato com o suporte. |
| Concierge não está respondendo fora do expediente | Verifique se o Concierge não está desativado (status "Concierge desativado") ou se não há um override de pausa ativo. |

---

