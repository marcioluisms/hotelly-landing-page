---
título: "Como criar uma reserva"
módulo: reservas
perfil: [owner, manager, front_desk]
nível: básico
tipo: como-fazer
helpArticleId: "reservas-criar-reserva"
última_revisão: 2026-03-20
descrição: "Crie uma reserva manual no Hotelly: escolha datas, tipo de quarto, hóspede e finalize com pagamento."
revisado_por_engenharia: true
---

# Como criar uma reserva

> **Objetivo:** Ao final deste guia, você saberá criar uma reserva manualmente pelo painel, incluindo buscar ou cadastrar o hóspede, escolher datas, tipo de quarto e quarto.

## Pré-requisitos

- Pelo menos um tipo de quarto cadastrado com quartos ativos
- Tarifas definidas para o período desejado

## Passo a passo

1. No menu, clique em **Painel** > **Reservas**.
2. Clique no botão **"Criar Reserva"** no canto superior direito.
3. No campo **"Hóspede"**, busque pelo nome, email, telefone ou CPF. Se o hóspede não estiver cadastrado, clique em **"Cadastrar novo hóspede"** e preencha os dados básicos (nome é obrigatório; email, telefone e CPF são opcionais).
4. Selecione as datas de **"Check-in"** e **"Check-out"**.
5. No campo **"Tipo de Quarto"**, escolha o tipo desejado. O sistema mostra apenas tipos com disponibilidade no período.
6. No campo **"Quarto"**, escolha a unidade específica. Esse campo depende do tipo selecionado.
7. Informe o número de **"Adultos"** (1 a 4).
8. Se houver crianças, clique em **"+ Criança"** e selecione a idade de cada uma no dropdown.
9. O campo **"Valor total"** é preenchido automaticamente com base na tarifa. Você pode ajustar o valor manualmente se necessário.
10. Clique em **"Criar reserva"**.

## O que acontece depois

- A reserva é criada com status **"Ag. Pagamento"** (aguardando pagamento).
- Um link de pagamento é gerado automaticamente (se o Mercado Pago estiver conectado).
- A reserva aparece na lista de reservas e no Mapa de Quartos.
- Quando o hóspede pagar o percentual mínimo configurado em Dados Gerais, o status muda para **"Confirmada"** automaticamente.

## Se algo der errado

| Problema | Solução |
|---|---|
| "Sem disponibilidade" ao selecionar tipo de quarto | Verifique se há quartos ativos nesse tipo e se não há reservas conflitantes no período. Confira em **Operação** > **Disponibilidade**. |
| "Tarifa indisponível" | Defina tarifas para o período em **Configurações** > **Tarifas**. O sistema não permite criar reserva sem tarifa. |
| Hóspede não aparece na busca | Verifique a grafia. Se não encontrar, cadastre um novo hóspede diretamente no dialog. |
| "Sem inventário configurado" | Cadastre quartos em **Configurações** > **Quartos** antes de criar reservas. |

---

