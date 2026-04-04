---
título: "Como definir preços e tarifas"
módulo: primeiros-passos
perfil: [owner, manager]
nível: básico
tipo: configuração
helpArticleId: primeiros-passos-precos-tarifas
última_revisão: 2026-03-20
descrição: "Configure tarifas por tipo de quarto no Hotelly. Defina valores para cada período e comece a receber reservas."
revisado_por_engenharia: true
validacao_final: 2026-03-20
---

# Como definir preços e tarifas

Você vai definir o preço de cada tipo de quarto para cada dia do mês. É um calendário interativo: clique em um dia, preencha o preço e pronto. Leva 20 minutos.

## O conceito fundamental

A **precificação é por data e por tipo**. Você não tem um "preço base único": cada dia tem sua própria tarifa. Isto permite ajustar preços para Carnaval, feriados, fins de semana e dias vazios.

Exemplo:
- Domingo → R$ 100 (dia vazio)
- Sexta-feira → R$ 200 (alta demanda)
- Carnaval → R$ 500 (temporada especial)

## Passo a passo

### 1. Acesse as tarifas
No dashboard, vá em **Configurações** > **Tarifas**.

### 2. Você verá um calendário
O calendário mostra um grid com:
- **Linhas:** Cada tipo de quarto que você criou
- **Colunas:** Cada dia do mês
- **Células:** O preço para aquele dia + tipo

### 3. Clique em uma célula para editar
Ao clicar em um dia + tipo, abre um popover com 6 campos:

**1. Tarifa base** — O preço por noite para ocupação padrão (2 adultos)

**2. Adulto extra** — Valor adicional por cada adulto além da ocupação base
Exemplo: Se a base é para 2 adultos, o adulto extra custa R$ 50

**3. Desc. uso single** — Desconto se apenas 1 pessoa ocupa o quarto
Exemplo: Quarto normal custa R$ 200, single custa R$ 150 (desconto de R$ 50)

**4. Criança faixa 1** — Preço para crianças (ex: 0-5 anos)

**5. Criança faixa 2** — Preço para crianças (ex: 6-12 anos)

**6. Criança faixa 3** — Preço para adolescentes (ex: 13-17 anos)

### 4. Preencha e salve
Complete os campos que aplicam ao seu modelo de preço e clique **Salvar**.

### 5. Aplicar para vários dias
Você pode:
- Editar um dia por vez
- Selecionar um range de datas e aplicar a mesma tarifa em lote

Exemplo: "Dias 1-10 do mês, todos os tipos, tarifa padrão R$ 200"

## Exemplo: Estrutura de uma Hospedagem

Para uma hospedagem com 2 tipos ("Simples" e "Duplo"), o calendário ficaria assim:

| Data | Simples (Tarifa) | Simples (Adulto Extra) | Duplo (Tarifa) | Duplo (Adulto Extra) |
|---|---|---|---|---|
| 1º mar | R$ 100 | R$ 30 | R$ 180 | R$ 50 |
| 2º mar | R$ 100 | R$ 30 | R$ 180 | R$ 50 |
| ... | ... | ... | ... | ... |
| 15º mar (Sexta) | R$ 120 | R$ 35 | R$ 220 | R$ 60 |

## Precificação dinâmica (separado)

Você pode ativar a **precificação dinâmica** em **Configurações > Propriedade > Pricing Dinâmico**. Isto faz o sistema sugerir preços automaticamente baseado em ocupação e feriados. Veja o artigo correspondente para mais detalhes.

## Se você tem preços muito variáveis

**Exemplo:** Você cobra R$ 100 em dias vazios, R$ 200 em dias normais, R$ 400 em Carnaval.

**Solução:** Defina manualmente cada período:
1. Dias 1-10: defina as tarifas de baixa temporada
2. Dias 11-20: defina as tarifas normais
3. Carnaval (21-26): defina as tarifas altas

Você também pode criar **Temporadas** em **Configurações > Propriedade > Regras > Temporadas** para períodos especiais com mínimo de noites.

## Se algo der errado

**"Meu preço é muito variável. Qual coloco cada dia?"**
Use a lógica: dias vazios mais baratos, fins de semana e feriados mais caros.

**"Posso mudar o preço depois?"**
Sim, a qualquer momento. Clique em **Editar** a célula e mude. Não afeta reservas já confirmadas.

**"Como faço preços sazonais como Carnaval?"**
Você pode:
1. Editar manualmente cada dia de Carnaval neste calendário
2. Ou usar **Temporadas** para automatizar períodos com mínimo de noites

Veja "Como configurar políticas" para saber como criar temporadas com restrições.

**"Onde fico os piso e teto (preços mínimo e máximo)?"**
Piso e teto são configurados em **Configurações > Propriedade > Pricing Dinâmico**, não aqui. Eles só aplicam se você usar precificação dinâmica.

## Próximo passo

Quando terminar, vá para "Como configurar políticas" para definir cancelamento, garantia e períodos sazonais.

