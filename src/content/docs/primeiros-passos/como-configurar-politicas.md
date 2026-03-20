---
título: "Como configurar políticas"
módulo: primeiros-passos
perfil: [owner, manager]
nível: básico
tipo: configuração
helpArticleId: primeiros-passos-politicas
última_revisão: 2026-03-20
descrição: "Configure políticas de cancelamento e reembolso no Hotelly. O sistema aplica as regras automaticamente."
revisado_por_engenharia: true
validacao_final: 2026-03-20
---

# Como configurar políticas

Aqui você define as regras da sua hospedagem: cancelamento, garantia de pagamento, faixas de idade de crianças, disponibilidade e temporadas especiais. Leva 30 minutos.

## Estrutura

As políticas são configuradas em **Configurações > Propriedade**, dentro do grupo **"Regras"**. Existem 6 seções independentes que você configura uma por vez.

## Passo a passo

### 1. Acesse as regras
No dashboard, vá em **Configurações** > **Propriedade** > grupo **"Regras"**.

Você verá 6 seções:

---

## Seção 1: Cancelamento

Define como você reembolsa se um hóspede cancelar.

**Opções:**

**a) Gratuito**
O hóspede reembolsa total se cancelar até X dias antes. Depois disso, você fica com a grana.

Exemplo: "Cancelamento grátis até 7 dias antes"
- Se cancelar com 8+ dias de antecedência: 100% reembolso
- Se cancelar com menos de 7 dias: sem reembolso

**b) Flexível**
Similar ao Gratuito — reembolso parcial até X dias.

**c) Sem reembolso**
O hóspede não reembolsa em hipótese nenhuma. Você fica com 100%.

Campos: Tipo, prazo de dias, multa (%), observações.

---

## Seção 2: Regras de Reserva

Define prazos de pagamento e penalidades.

Inclui:
- Prazo de pagamento (quanto tempo o hóspede tem para pagar após reservar)
- Penalidades (multa por não-comparecimento, saída antecipada)
- Validade da reserva (quanto tempo a reserva fica "hold" antes de expirar)
- Tabelas de retenção por faixa de dias até check-in

Configure conforme sua política interna.

---

## Seção 3: Sinal (Garantia / Depósito)

Define quanto você quer cobrar antecipado para confirmar a reserva.

**Campo principal:** "Percentual do sinal (%)"

Exemplos comuns:
- **100% antecipado:** O hóspede paga tudo na hora da reserva
- **50% antecipado:** Meia entrada agora, meia depois
- **30% antecipado:** Entrada pequena, resto no check-in

### Sub-seção: Exceções por Temporada

Você pode ter garantias diferentes para períodos especiais (Carnaval, Réveillon).

Botão: **"Adicionar"**

Campos por exceção:
- **Nome:** "Carnaval", "Réveillon", etc.
- **Início:** Data inicial
- **Fim:** Data final
- **Sinal (%):** Percentual para este período
- **Peso:** Prioridade se houver conflito

Exemplo: "Carnaval exige 100% antecipado, peso 10"

---

## Seção 4: Crianças

Define faixas etárias para diferenciar preços.

Configure as faixas de idade que sua hospedagem usa:
- Criança faixa 1 (ex: 0-5 anos)
- Criança faixa 2 (ex: 6-12 anos)
- Criança faixa 3 (ex: 13-17 anos)

Estas faixas são usadas nos preços das tarifas (você define o valor para cada faixa ao precificar).

---

## Seção 5: Disponibilidade

Define restrições de reserva.

Inclui:
- **Mínimo de noites:** Por tipo de quarto, qual é a estadia mínima obrigatória (ex: 2 noites mínimo)
- **Máximo de noites:** Limite máximo de dias por reserva
- **Fechar check-in/check-out:** Datas onde você não abre/fecha (ex: fechar check-in no domingo)
- **Bloquear datas:** Períodos onde nenhuma reserva é aceita (ex: reforma)

---

## Seção 6: Temporadas

Define períodos especiais com regras e mínimos diferentes (sem campo de preço).

Botão: **"Adicionar"**

Campos por temporada:
- **Nome do Pacote:** "Carnaval 2026", "Réveillon", "Temporada Baixa", etc.
- **Início:** Data inicial
- **Fim:** Data final
- **Mínimo de Noites:** Estadia mínima obrigatória neste período (ex: 4 noites para Carnaval)
- **Check-in Fixo** (opcional): Se você quer forçar check-in em um dia específico (ex: só sexta-feira na temporada de Carnaval)
- **Ativo/Inativo:** Toggle para ativar ou desativar a temporada

**Importante:** Preço não fica aqui. Você define preços em **Configurações > Tarifas** (calendário dia a dia). Garantia sazonal fica em **Sinal > Exceções por Temporada**.

Exemplo de temporada:
- Nome: "Carnaval 2026"
- Início: 21/02/2026
- Fim: 01/03/2026
- Mínimo de Noites: 4
- Ativo: ✅

---

## Resumo de exemplo

| Configuração | Valor |
|---|---|
| Cancelamento | Flexível: reembolso até 7 dias antes |
| Sinal (padrão) | 50% antecipado |
| Sinal Carnaval | 100% antecipado, peso 10 |
| Criança Faixa 1 | 0-5 anos |
| Criança Faixa 2 | 6-12 anos |
| Criança Faixa 3 | 13-17 anos |
| Mínimo de noites | 2 noites em dias normais |
| Temporada Carnaval | 21/02-01/03, mínimo 4 noites |

---

## Se algo der errado

**"Meus clientes podem cancelar de graça?"**
Depende da política que você escolher. Na política "Flexível", você define o prazo. Se cancela depois desse prazo, não há reembolso.

**"Posso ter regras diferentes para cada tipo de quarto?"**
Algumas seções sim, outras não. Consulte a UI para ver quais campos permitem configuração por tipo.

**"E se eu mudar de ideia sobre Carnaval?"**
Clique em **Editar** na temporada ou exceção e mude/delete. Se já tem reservas, a política atual delas não muda (elas "congelam").

**"Onde fico o preço da temporada?"**
Preço fica em **Configurações > Tarifas** (calendário). Você define manualmente cada dia ou em lote, não em "Temporadas".

---

## Próximo passo

Quando terminar, vá para "Como conectar o WhatsApp" para ativar o Concierge IA.

## Artigos relacionados

- Como definir preços e tarifas
- Como conectar o WhatsApp
- Checklist de configuração inicial
