---
título: "Como usar a Trilha de Auditoria"
módulo: financeiro
perfil: [owner, manager, finance]
nível: básico
tipo: como-fazer
helpArticleId: "financeiro-trilha-auditoria"
última_revisão: 2026-03-20
descrição: "Consulte a Trilha de Auditoria do Hotelly: registro imutável de cancelamentos, reembolsos e alterações."
revisado_por_engenharia: true
---

# Como usar a Trilha de Auditoria

> **Objetivo:** Ao final deste guia, você saberá consultar o histórico completo de ações realizadas no sistema — quem fez o quê, quando e em qual recurso.

## O que é

A Trilha de Auditoria registra automaticamente toda ação relevante no Hotelly: reservas criadas, check-ins, pagamentos, alterações de preço, mudanças de configuração. É o "log" completo da operação, essencial para transparência e resolução de divergências.

## Passo a passo

1. No menu, clique em **Configurações** > **Trilha de Auditoria**.

### Filtrar registros

2. Use os filtros disponíveis:
   - **"Ação"** — tipo de ação realizada. Exemplos: "Criou", "Alterou", "Excluiu", "Check-in", "Check-out", "Cancelou", "Atribuiu quarto", "Adicionou extra", "Mudou status", "Alterou hóspedes", "Alterou datas"
   - **"Recurso"** — tipo de item afetado. Exemplos: "Reserva", "Quarto", "Tipo de quarto", "Hóspede", "Extra", "Minibar", "Tarifas", "Propriedade", "Pagamento", "Override concierge", "Governança", "Manutenção"
   - **"Data inicial"** e **"Data final"** — intervalo de tempo
3. Para remover filtros, clique em **"Limpar"**.

### Consultar a tabela

4. A tabela mostra: **Data**, **Usuário**, **Ação**, **Recurso** e **Detalhes**.
5. Use a paginação no rodapé: "X registro(s) · Página X de Y" com botões **"← Anterior"** e **"Próximo →"**.

### Ver detalhes de uma ação

6. Clique em um registro para abrir o dialog **"Detalhes da Ação"**, que mostra: data, ação, recurso, ID do recurso, usuário, papel (função do usuário) e detalhes completos da alteração.

## Cenários de uso

- **"Quem cancelou essa reserva?"** — filtre por Ação: "Cancelou" + Recurso: "Reserva"
- **"Que mudanças de preço foram feitas esta semana?"** — filtre por Recurso: "Tarifas" + período
- **"O que a Maria fez hoje?"** — consulte a tabela filtrando pelo período de hoje e procure o nome na coluna Usuário
- **"Houve alteração nas políticas?"** — filtre por Recurso: "Política cancelamento" ou "Política garantia"

## Se algo der errado

| Problema | Solução |
|---|---|
| "Nenhum registro encontrado." | Os filtros podem estar muito restritivos. Clique em **"Limpar"** e tente novamente com filtros mais amplos. |
| Não encontro uma ação específica | Nem toda micro-ação gera registro. Ações de leitura (consultar, visualizar) não são registradas — apenas criação, alteração e exclusão. |

---

