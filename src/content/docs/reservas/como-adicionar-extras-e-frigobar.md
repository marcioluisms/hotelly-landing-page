---
título: "Como adicionar extras e frigobar à reserva"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-extras-frigobar"
última_revisão: 2026-03-20
descrição: "Adicione serviços extras e consumo de frigobar a uma reserva. Os valores vão direto para o folio."
revisado_por_engenharia: true
---

# Como adicionar extras e frigobar à reserva

> **Objetivo:** Ao final deste guia, você saberá registrar serviços extras (café da manhã, passeios, estacionamento) e consumo de frigobar na conta do hóspede.

## Pré-requisitos

- Extras precisam estar cadastrados em **Configurações** > **Propriedade** > **Extras**
- Itens de frigobar precisam estar cadastrados em **Configurações** > **Propriedade** > **Frigobar**

## Adicionar um extra

1. No menu, clique em **Painel** > **Reservas**.
2. Clique no nome do hóspede para abrir o detalhe da reserva.
3. No card **"Ações"**, clique em **"Adicionar Extra"**.
4. No dialog **"Adicionar Extra"**:
   - Selecione o extra desejado no dropdown
   - Informe a **quantidade**
5. Clique em **"Confirmar"**.

O valor é calculado automaticamente com base no modo de cobrança do extra:

| Modo | Como calcula |
|---|---|
| Por unidade | Preço × quantidade |
| Por noite | Preço × número de noites da estadia |
| Por hóspede | Preço × número de hóspedes |
| Por hóspede/noite | Preço × hóspedes × noites |

## Adicionar consumo de frigobar

1. Abra o detalhe da reserva.
2. No card **"Ações"**, clique em **"Adicionar Frigobar"**.
3. No dialog **"Adicionar Frigobar"**, use os botões **[−]** e **[+]** para ajustar a quantidade de cada item consumido.
4. Clique em **"Confirmar"**.

## O que acontece depois

- **Extras:** aparecem na tabela de extras no card **"Financeiro"** com colunas: Item, Modo, Preço unit., Qtd, Total.
- **Frigobar:** aparece na tabela de frigobar com colunas: Item, Qtd, Total.
- O **"Total cobranças"** e o **"Saldo devedor"** são recalculados automaticamente.
- A mensagem **"Extra adicionado! Atualizando..."** ou **"Consumo de frigobar registrado"** confirma a operação.

## Se algo der errado

| Problema | Solução |
|---|---|
| Dropdown de extras está vazio | Cadastre extras em **Configurações** > **Propriedade** > **Extras** primeiro. |
| "Extra vinculado a reservas, não pode ser removido." | Um extra em uso não pode ser excluído do cadastro. Você pode desativá-lo para impedir novas adições. |
| Lista de frigobar está vazia | Cadastre itens em **Configurações** > **Propriedade** > **Frigobar** primeiro. |

---

