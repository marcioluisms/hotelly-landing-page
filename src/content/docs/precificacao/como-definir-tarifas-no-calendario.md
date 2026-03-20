---
título: "Como definir tarifas no calendário"
módulo: precificacao
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "precificacao-tarifas-calendario"
última_revisão: 2026-03-20
descrição: "Defina e ajuste tarifas por data no Calendário de Tarifas do Hotelly. Controle visual completo."
revisado_por_engenharia: true
---

# Como definir tarifas no calendário

> **Objetivo:** Ao final deste guia, você saberá configurar preços por tipo de quarto e data usando o calendário de tarifas, incluindo edição em lote e modelos semanais.

## Passo a passo

1. No menu lateral, clique em **Configurações** > **Tarifas**.
2. O calendário exibe um grid com colunas por dia (formato: dia da semana + DD/MM) e linhas por tipo de quarto.

### Editar preço de um dia

3. Clique na célula de uma data para selecioná-la.
4. Use **Shift+clique** para selecionar um intervalo de datas.
5. Use **Esc** para limpar a seleção.
6. Na aba **"Preços"**, preencha os campos da célula:

| Campo | O que é |
|---|---|
| **Tarifa base** | Preço da diária por noite |
| **Adulto extra** | Valor adicional por adulto além da capacidade base |
| **Desc. uso single** | Desconto quando apenas 1 hóspede ocupa o quarto |
| **Criança [min]-[max] anos** | Preço por criança em cada faixa de idade (até 3 faixas) |

### Edição em lote

7. Selecione várias datas e use o painel **"Editar seleção"**:
   - Filtre por **"Tipos de Quarto"** — "Todos os tipos de quarto" ou selecione específicos
   - Escolha o modo de ajuste:
     - **"Fixo"** — define valor exato (campos vazios não são alterados)
     - **"+%"** — ajuste percentual (ex: "+10" ou "-5")
     - **"+R$"** — valor a adicionar/subtrair com botões **"+"** / **"−"**
   - Clique em **"Copiar semana anterior"** para replicar valores
   - Clique em **"Limpar seleção"** para desmarcar

### Restrições por data

8. Alterne para a aba **"Restrições"** para configurar por data:

| Campo | O que faz |
|---|---|
| **Fechar check-in** | Impede check-in nessa data |
| **Fechar check-out** | Impede check-out nessa data |
| **Bloquear datas** | Bloqueia a data completamente |
| **Min. noites** | Estadia mínima |
| **Max. noites** | Estadia máxima |

### Modelo semanal

9. Clique em **"Modelo semanal"** para criar padrões reutilizáveis:
   - Defina valores para cada dia (Dom a Sáb)
   - Salve com um nome (ex: "Padrão de semana", "Fds")
   - Carregue modelos salvos com o botão **"Carregar"**
   - Aplique com **"Aplicar modelo"**

### Salvar

10. Quando houver alterações, um banner mostra "X data(s) com alterações não salvas".
11. Clique em **"Salvar alterações"** (ou **"Salvar alterações (X)"**).

## Se algo der errado

| Problema | Solução |
|---|---|
| "Tarifa indisponível" ao criar reserva | Não há tarifa definida para o tipo de quarto no período. Defina os preços aqui primeiro. |
| Preço não salvou | Verifique se clicou em "Salvar alterações". O banner amarelo indica alterações pendentes. |

---

