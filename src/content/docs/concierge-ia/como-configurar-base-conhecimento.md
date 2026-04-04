---
título: "Como configurar a base de conhecimento do Concierge"
módulo: concierge-ia
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "concierge-ia-base-conhecimento"
última_revisão: 2026-04-05
descrição: "Monte a knowledge base do Concierge IA com informações da sua hospedagem para respostas precisas."
revisado_por_engenharia: true
---

# Como configurar a base de conhecimento do Concierge

> **Objetivo:** Ao final deste guia, você saberá preencher as informações que o Concierge IA usa para responder hóspedes no WhatsApp: descrição da hospedagem, comodidades e localização.

## Por que isso é importante

O Concierge IA só responde com base no que você cadastrou. Se a informação não estiver na base de conhecimento, ele informa ao hóspede que não sabe e sugere contato com a recepção. Quanto mais completa a base, melhor o atendimento automático.

## Onde configurar

A base de conhecimento do Concierge vem do **Perfil** da propriedade:

1. No menu, clique em **Configurações** > **Propriedade**.
2. Na seção **"Pousada"**, clique em **Perfil**.

## Campos a preencher

### Descrição geral
O texto principal sobre sua propriedade. O Concierge usa isso para responder perguntas como "me fale sobre a hospedagem" ou "o que vocês oferecem".

**Dica:** Escreva como se estivesse descrevendo a hospedagem para um amigo. Inclua: tipo de hospedagem, ambiente, público, diferenciais.

**Exemplo:** "A Pousada Sol Nascente é uma pousada boutique à beira-mar em Paraty, com 12 quartos, piscina, café da manhã caseiro e vista para o mar. Ideal para casais e famílias que buscam tranquilidade."

### Comodidades
Serviços e facilidades oferecidos. Clique para adicionar cada comodidade.

**Exemplos:** Piscina, Wi-Fi gratuito, Café da manhã incluso, Estacionamento, Ar-condicionado, Frigobar, TV, Berço disponível, Aceita pets.

Quando vazio, aparece: "Nenhuma comodidade cadastrada."

### Destaques de localização
Pontos turísticos, acessos e diferenciais de localização.

**Exemplo:** "A 5 minutos a pé do centro histórico. A 200m da Praia do Pontal. Acesso fácil pela BR-101. Próximo a restaurantes e lojas de artesanato."

### Temas dos depoimentos (somente leitura)
Se o Monitor de Avaliações estiver configurado, esta seção mostra automaticamente os pontos fortes e pontos de atenção extraídos das avaliações do Google. O Concierge pode usar essas informações para responder sobre a experiência de outros hóspedes.

## O que acontece depois

- As informações ficam disponíveis imediatamente para o Concierge IA.
- A mensagem **"Perfil salvo."** confirma que tudo foi gravado.
- Na próxima conversa pelo WhatsApp, o Concierge já usa os dados atualizados.

## Dicas para uma base de conhecimento eficaz

- **Seja específico:** em vez de "perto da praia", escreva "a 200m da Praia do Pontal, 3 minutos a pé"
- **Inclua horários:** café da manhã das 7h às 10h, check-in a partir das 14h, check-out até 12h
- **Inclua regras:** aceita pets? crianças? tem acessibilidade? estacionamento é pago?
- **Atualize sazonalmente:** se a piscina fecha no inverno ou se há atividades só no verão, mantenha atualizado

## Dica: Protocolos operacionais

Você pode incluir na base de conhecimento os protocolos internos da sua hospedagem, como o procedimento de passagem de turno. Isso permite que o **Copilot** (não o Concierge) acesse informações operacionais atualizadas.

O Concierge IA responde apenas a hóspedes, então consulta apenas as informações de Perfil (descrição, comodidades e localização). Mas o Copilot, o assistente para sua equipe, pode acessar dados operacionais via **Log Book**, incluindo resumos de turno, ocorrências pendentes e histórico de manutenção. Consulte [Como usar o Copilot](../04-copilot/como-usar-o-copilot.md) para mais detalhes.

## Se algo der errado

| Problema | Solução |
|---|---|
| Concierge respondeu "não tenho essa informação" para algo que deveria saber | Verifique se a informação está cadastrada no Perfil. Se não estiver, adicione e salve. |
| Hóspede perguntou sobre preço e o Concierge não respondeu | Preços são consultados em tempo real via tarifas. Se não há tarifas definidas para o período, o Concierge não consegue informar. Configure em **Configurações** > **Tarifas**. |

---

