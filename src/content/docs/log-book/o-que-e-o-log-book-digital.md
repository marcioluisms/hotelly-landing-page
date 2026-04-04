---
título: "O que é o Log Book Digital"
módulo: log-book
perfil: [owner, manager, front_desk, housekeeper, viewer]
nível: básico
tipo: conceito
helpArticleId: "log-book-conceito"
última_revisão: 2026-04-05
descrição: "Conheça o Log Book Digital: o caderno eletrônico onde sua equipe registra ocorrências, tarefas e observações de cada turno."
revisado_por_engenharia: true
---

# O que é o Log Book Digital

> **Em uma frase:** Log Book Digital é o caderno eletrônico de turno onde a equipe registra ocorrências, tarefas pendentes e observações, sem papel, sem WhatsApp, tudo centralizado e acessível.

## Por que isso importa para você

Quando um turno termina e o próximo começa, o conhecimento desaparece. O recepcionista noturno sabe que a escada teve infiltração, mas o manager do dia não. Alguém prometeu um berço para o hóspede do quarto 12, mas ninguém lembrou. Sem informação, cada funcionário recomeça do zero, gerando retrabalho, erros e insatisfação.

O Log Book Digital resolve isso: toda ocorrência, tarefa e observação fica registrada digitalmente. Quando o turno muda, a próxima pessoa lê o log, confirma que entendeu ("passagem de turno") e continua de onde parou. Nada se perde.

## O problema que resolve

### Antes (papel + WhatsApp)
- Anotações espalhadas em cadernos diferentes
- Recados deixados em conversas de grupo, misturados com fofoca
- Ninguém sabe se o turno anterior deixou algum recado
- Check-out é caótico: quem avisa o próximo turno?
- Informação se perde quando alguém sai da empresa

### Depois (Log Book Digital)
- Um único lugar para toda comunicação operacional
- Histórico permanente e rastreável
- Passagem de turno estruturada: confirmar leitura é obrigatório
- Abertura e fechamento de turno automático
- Relatórios de incidentes por período

## Os 5 tipos de entrada

Quando alguém registra algo no Log Book, precisa escolher a categoria. Cada uma tem regras de quem pode registrar:

| Categoria | O que registrar | Quem pode registrar |
|---|---|---|
| **Manutenção** | Quebras, infiltrações, problemas técnicos, itens que precisam reparo | Owner, Manager, Front Desk, Housekeeper |
| **Hóspede** | Solicitações especiais, reclamações, elogios, incidentes | Owner, Manager, Front Desk |
| **Operação** | Avisos de turno, tarefas pendentes, visitas de fornecedores | Owner, Manager, Front Desk |
| **Financeiro** | Discrepâncias de caixa, pagamentos pendentes, taxas extras | Owner, Manager |
| **Geral** | Tudo que não se encaixa nas categorias acima | Owner, Manager, Front Desk |

**Nota:** Housekeepers (camareiras) podem registrar apenas em **Manutenção** e **Hóspede**. Viewers podem ler tudo, mas não podem registrar.

## A Passagem de Turno (shift handover)

Quando um turno termina, o sistema gera uma **passagem de turno**: um resumo de tudo que ficou aberto ou pendente naquele turno.

O próximo funcionário, ao chegar:

1. **Lê** o log completo do turno anterior
2. **Confirma** que entendeu (clica em "Confirmar leitura")
3. **Continua** resolvendo os itens pendentes

Se não confirmar a leitura, o sistema bloqueia a abertura de um novo turno, garantindo que ninguém "perde" informação.

## O resumo de turno (shift summary)

O Log Book mostra sempre um **resumo em tempo real** do turno atual:

- Itens abertos de cada categoria
- Status de cada item (novo, acompanhando, resolvido)
- Quem registrou e quando
- Prioridade de cada item

Assim, o manager consegue um snapshot rápido: "Temos 3 manutenções abertos hoje? Qual é crítico?"

## Controle de acesso (RBAC)

Cada perfil tem limites diferentes no Log Book:

| Perfil | Pode registrar | Pode ver | Nota |
|---|---|---|---|
| **Owner** | Todas as categorias | Todas as entradas | Acesso irrestrito |
| **Manager** | Todas as categorias | Todas as entradas | Supervisiona turno |
| **Front Desk** | Manutenção, Hóspede, Operação, Financeiro, Geral | Todas as entradas | Registra no seu turno |
| **Housekeeper** | Apenas Manutenção e Hóspede | Apenas suas categorias + Hóspede | Acesso limitado |
| **Viewer** | Nenhuma (somente leitura) | Todas as entradas | Consultivo apenas |

## Artigos relacionados

- [Como registrar uma entrada no Log Book](como-registrar-uma-entrada-no-log-book.md)
- [Como fazer a passagem de turno](como-fazer-a-passagem-de-turno.md)
- [Entendendo as categorias do Log Book](entendendo-as-categorias-do-log-book.md)

---

