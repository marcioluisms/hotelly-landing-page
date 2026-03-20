---
título: "Como usar o Preço Dinâmico"
módulo: precificacao
perfil: [owner, manager]
nível: intermediário
tipo: como-fazer
helpArticleId: "precificacao-preco-dinamico"
última_revisão: 2026-03-20
descrição: "Ative o preço dinâmico no Hotelly para ajustar tarifas automaticamente com base na ocupação."
revisado_por_engenharia: true
---

# Como usar o Preço Dinâmico

> **Objetivo:** Ao final deste guia, você saberá consultar as sugestões de preço do motor de precificação, aplicar recomendações e ajustar a estratégia por tipo de quarto.

## O que é

O Preço Dinâmico é o motor inteligente de precificação do Hotelly. Ele analisa a ocupação prevista para os próximos 120 dias e sugere preços otimizados para cada tipo de quarto, respeitando os limites (piso e teto) que você define.

## Passo a passo

1. No menu lateral, clique em **Receita** > **Preço Dinâmico**.

### Visualizar sugestões

2. O calendário mostra os próximos dias com indicadores de cor por faixa de ocupação:

| Cor | Faixa |
|---|---|
| Azul | Baixa ocupação (<30%) |
| Verde | Moderada (30-70%) |
| Laranja | Alta (70-95%) |
| Vermelho | Crítica (>95%) |

3. Escolha o período de visualização: **"30d"**, **"60d"**, **"90d"** ou **"120d"**.
4. Clique em **"↻ Atualizar"** para recalcular sugestões.

### Consultar sugestão de um dia

5. Clique em um dia para ver o painel com:
   - **"Atual"** — seu preço vigente
   - **"Recomendado"** — preço sugerido pelo motor
   - **"Ocupação"** — taxa de ocupação prevista
   - Badge **"Pico"** (se for feriado ou evento cadastrado)

### Aplicar uma sugestão

6. Clique em **"Aplicar preço"** para aceitar a sugestão do motor para aquele dia.
7. Ou clique em **"Aplicar sugestões (X)"** na toolbar para aceitar todas as sugestões pendentes de uma vez.
8. Para descartar alterações, clique em **"Descartar"**.

## Configurar o motor

1. Clique em **"⚙ Configurar"** (badge mostra quantos tipos de quarto estão com o motor ativo).
2. No painel **"Configuração do Motor de Precificação"**, para cada tipo de quarto configure:
   - **"Agressividade"** — "Conservador" (variações menores), "Padrão" ou "Agressivo" (variações maiores)
   - **"Piso (R$)"** — preço mínimo (o motor nunca sugere abaixo)
   - **"Teto (R$)"** — preço máximo (deixe vazio para sem teto)
3. Ative o badge **"Ativo"** para cada tipo de quarto desejado.
4. Clique em **"Salvar"**.

## Cadastrar feriados e picos

1. No painel **"Calendário de Picos e Feriados"**, clique em **"Adicionar"**.
2. Escolha um preset ("Carnaval +30%", "Ano Novo +35%", "Feriado Nacional +15%", "Evento Local +10%", "Alta Temporada +20%") ou crie um personalizado.
3. Preencha: **"Data"**, **"Descrição"**, **"Fator"** (percentual de ajuste).
4. O evento aparece em **"Próximos eventos"**. Eventos passados ficam em **"Eventos passados"**.

Quando não há eventos: "Nenhum evento de pico cadastrado."

## Se algo der errado

| Problema | Solução |
|---|---|
| Motor não sugere preços para um tipo de quarto | Verifique se o motor está **"Ativo"** para esse tipo na configuração. |
| Sugestões parecem muito altas ou baixas | Ajuste a agressividade (Conservador para variações menores) e defina piso/teto adequados. |
| Feriado não está refletido nas sugestões | Cadastre o evento no Calendário de Picos e Feriados para que o motor considere. |

---

