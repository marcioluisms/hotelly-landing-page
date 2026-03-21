# Glossario Completo da UI do Hotelly

**Gerado por:** Engenharia
**Data:** 2026-03-20
**Fonte:** Codigo-fonte do hotelly-admin (Next.js) e hotelly-v2 (FastAPI)

> Este documento e a referencia canonica para todos os termos visiveis na interface do Hotelly. Marketing deve usar estes termos ao redigir documentacao, artigos do Help Center e knowledge base do Copilot.

---

## 1. Mapa de Navegacao Completo

```
Menu lateral principal:
|
+-- Painel
|   +-- Inicio                          → /p/{id}/
|   +-- Mapa de Quartos                 → /p/{id}/frontdesk/occupancy
|   +-- Reservas                        → /p/{id}/reservations
|   +-- Hospedes                        → /p/{id}/guests
|
+-- Operacao
|   +-- Limpeza                         → /p/{id}/frontdesk/governance
|   +-- Prioridades                     → /p/{id}/frontdesk/governance/maestro
|   +-- Disponibilidade                 → /p/{id}/inventory
|   +-- Cafe da Manha                   → /p/{id}/frontdesk/breakfast
|
+-- Receita
|   +-- Relatorios                      → /p/{id}/financial
|   +-- Auditoria                       → /p/{id}/audit-trail  (*)
|   +-- Preco Dinamico                  → /p/{id}/revenue
|
+-- Configuracoes
    +-- Quartos                         → /p/{id}/accommodations
    |   +-- aba "Tipos de Quarto"            → /p/{id}/accommodations/categories
    |   +-- aba "Quartos"               → /p/{id}/accommodations/rooms
    +-- Tarifas                         → /p/{id}/rates
    +-- Trilha de Auditoria             → /p/{id}/audit-trail  (*)
    +-- Propriedade                     → /p/{id}/settings
        |
        +-- grupo "Pousada"
        |   +-- Dados Gerais
        |   +-- Estabelecimento
        |   +-- Perfil
        |   +-- Equipe
        |
        +-- grupo "Regras"
        |   +-- Cancelamento
        |   +-- Regras de Reserva
        |   +-- Sinal
        |   +-- Criancas
        |   +-- Disponibilidade
        |   +-- Temporadas
        |
        +-- grupo "Produtos"
        |   +-- Frigobar
        |   +-- Extras
        |
        +-- grupo "Canais"
        |   +-- Motor de Reservas
        |   +-- Portal do Hospede
        |   +-- Concierge IA
        |   +-- Avaliacoes
        |
        +-- grupo "Integracoes"
            +-- Mercado Pago
|
+-- Atendimento
    +-- Suporte                         → /p/{id}/support
    +-- Ajuda                           → /p/{id}/ajuda

(*) Trilha de Auditoria aparece tanto em Receita quanto em Configuracoes
```

---

## 2. Glossario por Modulo

---

### 2.1 Inicio (Dashboard)

**Pagina:** `/p/{id}/`
**Titulo:** "Inicio"
**Subtitulo:** data por extenso (ex: "sexta-feira, 20 de marco de 2026")

#### Cards KPI
| Label | Descricao |
|---|---|
| Chegadas | Check-ins previstos para hoje |
| Saidas | Check-outs previstos para hoje |
| Hospedados | Hospedes em casa agora |
| Total PAX | Total de pessoas (adultos + criancas) |
| Pag. Pendente | Reservas com pagamento pendente |

#### Secao "Operacoes do Dia"
- Subsecoes: **"Check-in"** e **"Check-out"** (com badge de contagem)
- Colunas check-in: "Hospede", "Quarto", "PAX", "Status"
- Colunas check-out: "Hospede", "Quarto", "PAX", "Saldo"
- Botoes de acao: **"Check-in"**, **"Check-out"**
- Badges financeiros: **"Saldo ok"** (verde), **"Ag. Pagamento"** (amarelo), **"Alerta critico"** (vermelho), **"Credito"** (azul)
- Vazios: "Sem check-ins previstos.", "Sem check-outs previstos."

#### Secao "Status dos Quartos"
- Labels: **"Limpo"**, **"Sujo"**, **"Manutencao"**, **"Limpando"**

#### Secao "Logs tecnicos"
- Vazio: "Sem erros recentes."

---

### 2.2 Mapa de Quartos

**Pagina:** `/p/{id}/frontdesk/occupancy`
**Titulo:** "Mapa de Quartos"
**Subtitulo:** "Visualize a disponibilidade e o status dos quartos em tempo real"

#### Navegacao
- Botoes: **"← 30d"**, **"Hoje"**, **"30d →"**

#### Grid
- Coluna fixa: **"Quarto"**
- Colunas de data: abreviacao do dia (seg, ter, qua, qui, sex, sab, dom) + DD/MM

#### Legenda de status de reserva
| Label | Cor |
|---|---|
| Confirmada | azul/info |
| Hospedado | verde/success |
| Saiu | cinza/muted |
| Pendente | amarelo/warning |
| Ag. Pagamento | laranja/warning |
| Cancelada | vermelho/destructive |
| Manutencao | listras diagonais |

#### Status de governanca nos quartos
| Label | Cor |
|---|---|
| Sujo | vermelho |
| Limpando | laranja |
| Limpo | cinza |
| Manutencao | roxo |

---

### 2.3 Reservas

**Pagina:** `/p/{id}/reservations`
**Titulo:** "Reservas"
**Subtitulo:** "Gerencie as reservas ativas e o status de ocupacao."

#### Botoes do topo
- **"Exportar CSV"**
- **"Criar Reserva"**

#### Filtros
- **"Status"** (dropdown): "Todos", "Confirmada", "Pendente", "Ag. Pagamento", "Hospedado", "Check-out", "Cancelada"
- **"De"** / **"Ate"** (datas)
- **"Filtrar"**, **"Limpar"**

#### Colunas da tabela
| Coluna | Conteudo |
|---|---|
| Hospede | Nome + quarto + datas + badge "Online" |
| Status | Badge colorido |
| Saldo | Valor em R$ (vermelho se devedor, verde se credito) |
| Acoes | "Garantir reserva", "Fazer Check-in", "Fazer Check-out" |

#### Vazio
- "Nenhuma reserva encontrada"
- "Ajuste os filtros ou crie uma nova reserva."

#### Rodape
- "Mostrando X a Y de Z resultado(s)"

---

#### Dialog "Criar Reserva"

| Campo | Label | Tipo | Notas |
|---|---|---|---|
| Hospede | "Hospede" | busca + criar inline | Placeholder: "Buscar por nome, email, telefone ou CPF..." |
| Check-in | "Check-in" | date | obrigatorio |
| Check-out | "Check-out" | date | obrigatorio |
| Tipo de Quarto | "Tipo de Quarto" | dropdown | Mostra tipos de quarto com disponibilidade |
| Quarto | "Quarto *" | dropdown | Depende do tipo de quarto |
| Adultos | "Adultos" | numero | 1-4 |
| Criancas | "Criancas (N)" | lista dinamica | Botao "+ Crianca", dropdown de idade por crianca |
| Valor total | "Valor total" | moeda (R$) | CurrencyInput |

- Botoes: **"Cancelar"**, **"Criar reserva"**
- Criar hospede inline: campos "Nome completo *", "Email (opcional)", "Telefone (opcional)", "CPF (opcional)"

---

#### Detalhe da Reserva

**Pagina:** `/p/{id}/reservations/{reservationId}`
**Titulo:** "Reserva: [Nome do Hospede]"
**Subtitulo:** "[check-in] – [check-out] · N noite(s)"

##### Card "Detalhes"
- Campos: Hospede, Check-in, Check-out, Valor Total, Quarto ("Nao atribuido" se vazio), Hospedes ("N adulto(s) + M crianca(s)")

##### Card "Acoes"
| Botao | Quando aparece |
|---|---|
| Reenviar link | Sempre (envia link de pagamento) |
| Fazer Check-in | Status confirmed |
| Fazer Check-out | Status in_house |
| Alterar quarto / Atribuir quarto | Sempre |
| Alterar datas | Sempre |
| Editar Hospedes | Sempre |
| Adicionar Extra | Sempre |
| Adicionar Frigobar | Sempre |
| Informar Pagamento | Sempre |
| Ver calculo da garantia | Sempre |
| Cancelar reserva | Status != checked_out/cancelled |

##### Card "Financeiro"
- Linhas: "Hospedagem", "Extras", "Frigobar", **"Total cobrancas"**, **"Pagamentos recebidos"**, **"Saldo devedor"** / **"Saldo"**
- Tabela de extras: "Item", "Modo", "Preco unit.", "Qtd", "Total"
- Tabela de frigobar: "Item", "Qtd", "Total"
- Tabela de pagamentos: "Metodo", "Data", "Valor"
- Metodos de pagamento: "Pix", "Dinheiro", "Cartao de credito", "Cartao de debito", "Transferencia"
- Badge estorno: "estornado"

##### Card "Historico"
- Eventos: "Reserva criada", "Reserva confirmada", "Reserva cancelada", "Check-in realizado", "Check-out realizado", "Reserva atualizada", "Quarto atribuido", "Datas alteradas", "Extra adicionado", "Pagamento registrado"

---

#### Dialogs de Acao

| Dialog | Titulo | Campos | Botoes |
|---|---|---|---|
| Atribuir quarto | "Atribuir quarto" | Dropdown de quartos disponiveis | "Cancelar", "Confirmar" |
| Alterar datas | "Alterar datas da reserva" | Check-in, Check-out, Ajuste (R$), Motivo do ajuste | "Cancelar", "Confirmar" |
| Editar hospedes | "Editar hospedes" | Adultos (numero), Criancas (lista) | "Cancelar", "Confirmar Alteracao" |
| Adicionar extra | "Adicionar Extra" | Select de extra, Quantidade | "Cancelar", "Confirmar" |
| Adicionar frigobar | "Adicionar Frigobar" | Lista de itens com [−] qtd [+] | "Cancelar", "Confirmar" |
| Informar pagamento | "Informar Pagamento" | Valor (R$), Forma de pagamento, Observacoes (opcional) | "Cancelar", "Confirmar" |
| Cancelar reserva | "Cancelar reserva" | Motivo do cancelamento | "Voltar", "Confirmar cancelamento" |
| Garantir reserva | "Garantir Reserva" | Justificativa * | "Cancelar", "Garantir reserva" |

---

### 2.4 Hospedes

**Pagina:** `/p/{id}/guests`
**Titulo:** "Hospedes"
**Subtitulo:** "Gerencie o cadastro de hospedes da pousada."

#### Topo
- Botao: **"Cadastrar Hospede"**
- Busca: placeholder "Buscar por nome, email, telefone ou CPF..."

#### Colunas
| Coluna | Conteudo |
|---|---|
| Hospede | Nome (link) + "Cadastrado em [data]" |
| Contato | Email + Telefone |
| Documento | CPF |
| Acoes | "Ver Ficha" |

#### Dialog Cadastrar/Editar
- Titulo criar: **"Cadastrar Hospede"**
- Titulo editar: **"Editar Hospede"**
- Campos: "Nome *", "Email", "Telefone", "CPF"

#### Detalhe do Hospede (`/p/{id}/guests/{guestId}`)
- Titulo: Nome do hospede
- Subtitulo: "Cliente desde [data]"

##### Cards metrica
| Label | Icone |
|---|---|
| Estadias | Calendar |
| Receita total | Credit Card |
| Ultima estadia | Calendar |

##### Secoes
- **"TAGS"** — badges coloridos: "vip" (amber), "corporativo" (blue), "recorrente" (green)
- **"DADOS PESSOAIS"** — Email, Telefone, Documento, Tipo, Nacionalidade, Nascimento, Genero, Profissao
- **"ENDERECO"** — Rua, Numero, Complemento, Bairro, Cidade, Estado, CEP, Pais
- **"NOTAS INTERNAS"** — textarea + lista de notas com autor e timestamp
- **"HISTORICO DE ESTADIAS"** — tabela: Check-in, Check-out, Quarto, Status, Hospedes, Valor

---

### 2.5 Limpeza

**Pagina:** `/p/{id}/frontdesk/governance`
**Titulo:** "Limpeza"
**Subtitulo:** "Gerencie o status de limpeza e manutencao dos quartos"

#### Botoes de status por quarto
| Botao | Cor |
|---|---|
| Sujo | vermelho |
| Limpando | laranja |
| Limpo | verde |

- Botao de frigobar (icone de taca) por quarto
- Quartos agrupados por tipo de quarto
- Vazio: "Nenhum quarto ativo cadastrado."

---

### 2.6 Prioridades (Maestro)

**Pagina:** `/p/{id}/frontdesk/governance/maestro`
**Titulo:** "Prioridades"
**Subtitulo:** "SLA e produtividade da equipe de limpeza"

#### Cards resumo
| Label | Cor |
|---|---|
| Sujos | vermelho |
| Limpando | laranja |
| Limpos | cinza |
| Manutencao | roxo |

#### Niveis de prioridade
| Label | Cor |
|---|---|
| P1 Critico | vermelho |
| P2 Alto | laranja |
| P3 Medio | laranja |
| P4 Baixo | cinza |

#### SLA
- Titulo: **"Janela de Prontidao (SLA 4h)"**
- Metricas: "X dentro do SLA", "X SLA estourado" (vermelho), "X total pendentes"

#### Secoes de quartos
- **"Quartos pendentes"** — por quarto: nome, tipo de quarto, badge "TURNOVER", prioridade, badge "Chegada: [nome]", tempo decorrido, alerta "SLA"
- Botoes: **"Iniciar Limpeza"** (se sujo), **"Finalizar"** (se limpando), **"Voltar"** (se limpando)
- **"Em manutencao"** — badge "MANUTENCAO", datas, motivo
- **"Manutencoes Programadas"** — nome, datas, motivo
- **"Produtividade (hoje)"** — por funcionario: "X quartos", "~Xmin/quarto"

#### Vazio
- "Todos os quartos estao limpos" / "Nenhuma acao de governanca pendente"

#### Export
- Botao: **"Exportar CSV"**
- Colunas: "Quarto", "Status", "Prioridade", "Tempo no Status", "Prazo de Limpeza", "Responsavel"

---

### 2.7 Disponibilidade (Heatmap de Inventario)

**Pagina:** `/p/{id}/inventory`
**Titulo:** "Disponibilidade"
**Subtitulo:** "Mapa de calor de disponibilidade por tipo de quarto"

#### Controles
- Periodos: **"7d"**, **"15d"**, **"30d"**
- Navegacao: **"← Xd"**, **"Hoje"**, **"Xd →"**

#### Grid
- Coluna fixa: **"Tipo de Quarto"**
- Celula: numero disponivel / capacidade efetiva

#### Legenda de ocupacao
| Label | Faixa |
|---|---|
| 0-19% | Muito baixa |
| 20-39% | Baixa |
| 40-59% | Moderada |
| 60-79% | Alta |
| 80-99% | Muito alta |
| 100% | Lotado |
| Overbooking | Acima da capacidade |

- Badge **"UPGRADE"** (sinal de upgrade)
- Texto: "Disponivel / Capacidade efetiva"

#### Popover da celula
- Titulo: "[Tipo de Quarto] — [data]"
- Linhas: "Inventario total", "Bloqueados (manutencao)", "Capacidade efetiva", "Reservados", "Retidos (holds)", "Disponivel", "Ocupacao X%"
- Alerta: "Overbooking detectado" (se aplicavel)

---

### 2.8 Cafe da Manha

**Pagina:** `/p/{id}/frontdesk/breakfast`
**Titulo:** "Cafe da Manha"
**Subtitulo:** "Planeje o Cafe da Manha com seguranca"

#### Navegacao
- **"← Ontem"**, input de data, **"Hoje"**, **"Amanha →"**

#### Cards resumo
| Label | Cor |
|---|---|
| Quartos | azul |
| Adultos | azul |
| Criancas | verde |
| Total hospedes | laranja |

#### Tabela
- Colunas: "Hospede", "Quarto", "Check-in", "Check-out", "Adultos", "Criancas", "Total"
- Rodape: soma de adultos, criancas e total
- Secao: **"Idades das criancas"** — badges "[quarto]: X ano(s)"
- Vazio: "Nenhum hospede hospedado nesta data."

---

### 2.9 Relatorios

**Pagina:** `/p/{id}/financial`
**Titulo:** "Relatorios"
**Subtitulo:** "Indicadores de receita, ocupacao e performance"

#### Regimes contabeis (abas)
- **"Data de Transacao (Caixa)"**
- **"Data de Estadia (Competencia)"** — badge: "Foco: Entrega de Servico"

#### Cards KPI
| Label | Tooltip |
|---|---|
| Receita liquida (caixa) / Receita competencia (competencia) | "Receita total recebida no periodo (caixa)" / "Receita reconhecida por data de estadia (competencia)" |
| Saldo em Adiantamentos | "Receita diferida: valor recebido antecipadamente ainda nao consumido pela estadia" |
| Ocupacao | — |
| ADR | "Average Daily Rate: receita media por quarto vendido" |
| RevPAR | "Revenue Per Available Room: receita por quarto disponivel" |

#### Grafico
- Titulo: **"Receita liquida por dia"**
- Tooltips: "Receita: ", "Ocupacao: "

#### Controles
- Botao de periodo: **"Selecionar periodo"**
- Botao: **"Exportar CSV"**

---

### 2.10 Trilha de Auditoria

**Pagina:** `/p/{id}/audit-trail`
**Titulo:** "Trilha de Auditoria"
**Subtitulo:** "Historico de acoes realizadas na propriedade"

#### Filtros
- **"Acao"**: "Todas as acoes", "Criou", "Alterou", "Excluiu", "Check-in", "Check-out", "Cancelou", "Atribuiu quarto", "Moveu", "Modificou", "Adicionou extra", "Mudou status", "Alterou hospedes", "Alterou datas", "Aprovou", "Rejeitou"
- **"Recurso"**: "Todos os recursos", "Reserva", "Quarto", "Tipo de quarto", "Hospede", "Extra", "Minibar", "Tarifas", "Propriedade", "Politica cancelamento", "Politica garantia", "Pacote sazonal", "Pagamento", "Override concierge", "Governanca", "Manutencao"
- **"Data inicial"**, **"Data final"**
- **"Limpar"**

#### Tabela
- Colunas: "Data", "Usuario", "Acao", "Recurso", "Detalhes"
- Paginacao: "X registro(s) · Pagina X de Y", **"← Anterior"**, **"Proximo →"**
- Vazio: "Nenhum registro encontrado."

#### Dialog detalhe
- Titulo: "Detalhes da Acao"
- Labels: "DATA", "ACAO", "RECURSO", "ID DO RECURSO", "USUARIO", "PAPEL", "DETALHES"

---

### 2.11 Preco Dinamico

**Pagina:** `/p/{id}/revenue`
**Titulo:** "Preco Dinamico"
**Subtitulo:** "Precos sugeridos para os proximos 120 dias"

#### Toolbar
- Periodos: **"30d"**, **"60d"**, **"90d"**, **"120d"**
- **"↻ Atualizar"**
- **"⚙ Configurar"** (com badge "X ativos")

#### Legenda
| Label | Faixa |
|---|---|
| Baixa ocupacao (<30%) | azul |
| Moderada (30-70%) | verde |
| Alta (70-95%) | laranja |
| Critica (>95%) | vermelho |
| Feriado / pico | indicador especial |

#### Painel de dia
- Labels: **"Atual"**, **"Recomendado"**, **"Ocupacao"**
- Badge: **"Pico"**
- Botao: **"Aplicar preco"**

#### Painel de configuracao
- Titulo: **"Configuracao do Motor de Precificacao"**
- Badge: **"Ativo"**
- Campos por tipo de quarto:
  - **"Agressividade"**: "Conservador", "Padrao", "Agressivo"
  - **"Piso (R$)"**: CurrencyInput
  - **"Teto (R$)"**: CurrencyInput — helper: "vazio = sem teto"
- Botao: **"Salvar"**

#### Calendario de Picos e Feriados
- Titulo: **"Calendario de Picos e Feriados"**
- Presets: "Carnaval (+30%)", "Ano Novo (+35%)", "Feriado Nacional (+15%)", "Evento Local (+10%)", "Alta Temporada (+20%)"
- Campos: **"Data"**, **"Descricao"**, **"Fator"**
- Secoes: **"Proximos eventos"**, **"Eventos passados (X)"**
- Vazio: "Nenhum evento de pico cadastrado."
- Botao: **"Adicionar"**

---

### 2.12 Suporte

**Pagina:** `/p/{id}/support`
**Titulo:** "Suporte"
**Subtitulo:** "Envie e acompanhe seus tickets de suporte"

#### Controles
- Botao: **"+ Novo ticket"**
- Filtro **"Status"**: "Todos", "Aberto", "Em andamento", "Aguardando resposta", "Resolvido", "Fechado"

#### Dialog criar ticket
- Titulo: **"Novo ticket de suporte"**
- Campos: **"Assunto"**, **"Categoria"** (dropdown: "Sem categoria", "Cobranca", "Funcionalidade", "Problema tecnico", "Onboarding", "Outro"), **"Mensagem"**
- Botao: **"+ Criar ticket"**

#### Vazio
- "Nenhum ticket encontrado"
- "Crie um ticket para entrar em contato com o suporte"

---

### 2.13 Configuracoes > Quartos > Tipos de Quarto

**Pagina:** `/p/{id}/accommodations/categories`
**Titulo pagina:** "Quartos"
**Subtitulo:** "Gerencie as tipos de quarto e as unidades individuais do seu estabelecimento"
**Aba ativa:** "Tipos de Quarto"

#### Botao
- **"Novo Tipo de Quarto"**

#### Tabela
- Colunas: "Nome", "Descricao", "Capacidade", acoes
- Capacidade: "X hospede(s)"
- Acoes por linha: **"Editar"**, **"Remover"**
- Vazio: "Nenhum tipo de quarto cadastrado."

#### Dialog Novo/Editar Tipo de Quarto
- Titulo criar: **"Novo Tipo de Quarto"**
- Titulo editar: **"Editar Tipo de Quarto"**

| Campo | Label | Tipo | Placeholder |
|---|---|---|---|
| Nome | "Nome" | texto | "Ex: Suite Master" |
| Descricao | "Descricao (opcional)" | texto | "Descricao do tipo de quarto" |
| Capacidade | "Capacidade maxima (hospedes)" | numero | min 1, max 20 |

- Botoes criar: **"Cancelar"**, **"Criar"**
- Botoes editar: **"Cancelar"**/**"Fechar"**, **"Salvar"**

#### Dialog Remover
- Titulo: **"Remover tipo de quarto"**
- Texto: "Tem certeza que deseja remover este tipo de quarto? Tipos com quartos vinculadas nao podem ser removidas."
- Erro: "Esta tipo de quarto possui quartos vinculados e nao pode ser removida."
- Botoes: **"Cancelar"**, **"Remover"**

---

### 2.14 Configuracoes > Quartos > Quartos

**Pagina:** `/p/{id}/accommodations/rooms`
**Aba ativa:** "Quartos"

#### Botao
- **"Novo Quarto"**
- Badge de limite: "X / Y quartos"

#### Tabela
- Colunas: "Quarto", "Tipo de Quarto", "Atualizar status", "Situacao", acoes
- Vazio: "Nenhum quarto cadastrado."

#### Dialog Nova/Editar Quarto
- Titulo criar: **"Novo Quarto"**
- Titulo editar: **"Editar Quarto"**

| Campo | Label | Tipo | Placeholder |
|---|---|---|---|
| Nome/Numero | "Nome / Numero" | texto | "Ex: 101" |
| Tipo de Quarto | "Tipo de Quarto" | dropdown | tipos de quarto cadastrados |
| Ativa | "Quarto ativo" | checkbox | marcado por padrao |

- Botoes criar: **"Cancelar"**, **"Criar"**
- Botoes editar: **"Cancelar"**/**"Fechar"**, **"Salvar"**, **"Remover"**

#### Dialog Manutencao
- Titulo: **"Manutencao — [nome do quarto]"**
- Secao: **"PERIODOS CADASTRADOS"** — formato: "inicio → fim | motivo | (observacoes)"
- Botoes: **"Editar"**, **"Remover"** (com confirmacao "Confirmar?" → "Sim"/"Nao")
- Secao: **"ADICIONAR BLOQUEIO"**
- Campos: **"Inicio"**, **"Fim"**, **"Motivo"**, **"Observacoes (opcional)"**
- Botoes: **"Cancelar"**, **"Criar bloqueio"**

---

### 2.15 Configuracoes > Tarifas

**Pagina:** `/p/{id}/rates`
**Titulo:** "Tarifas"
**Subtitulo:** "Gerencie os valores de diarias por tipo de quarto e periodo"

#### Toolbar
- Seletor de periodo (date range)
- Abas: **"Precos"**, **"Restricoes"**
- **"Modelo semanal"**
- **"Aplicar sugestoes (X)"** (se houver recomendacoes)
- **"Descartar"**
- **"Salvar alteracoes"** / **"Salvar alteracoes (X)"**

#### Grid do calendario
- Colunas: dia da semana + DD/MM (ex: "Seg 15/03")
- Banner: "X data(s) com alteracoes nao salvas"
- Instrucao: "Clique em uma data para selecionar · Shift+clique para intervalo · Esc para limpar"

#### Campos por celula (aba Precos)
| Campo | Label |
|---|---|
| Tarifa base | "Tarifa base" |
| Adulto extra | "Adulto extra" |
| Desconto single | "Desc. uso single" |
| Crianca faixa 1 | "Crianca [min]-[max] anos" |
| Crianca faixa 2 | "Crianca [min]-[max] anos" |
| Crianca faixa 3 | "Crianca [min]-[max] anos" |

#### Campos por celula (aba Restricoes)
| Campo | Label | Tipo |
|---|---|---|
| Fechar check-in | "Fechar check-in" | checkbox |
| Fechar check-out | "Fechar check-out" | checkbox |
| Bloquear datas | "Bloquear datas" | checkbox |
| Min noites | "Min. noites" | numero |
| Max noites | "Max. noites" | numero |

#### Painel de edicao em lote
- Titulo: **"Editar selecao"**
- Subtitulo: "X data(s)"
- Filtro: **"Tipos de Quarto"** — "Todas os tipos de quarto" ou "X selecionado(s)"
- Modos: **"Fixo"**, **"+%"**, **"+R$"**
- Modo fixo: campos de valor + "Campos vazios nao serao alterados."
- Modo %: "Ajuste percentual" (placeholder: "+10 ou -5") + "%"
- Modo R$: "Valor a adicionar/subtrair" com botoes **"+"** / **"−"**
- **"Copiar semana anterior"**
- **"Limpar selecao"**

#### Dialog Modelo Semanal
- Dias: "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
- Secao: **"Modelos salvos"** — botao **"Carregar"** por modelo
- Salvar: campo **"Nome do modelo"** (placeholder: "Ex: Padrao de semana, Fds") + **"Salvar modelo"**
- Botoes: **"Aplicar modelo"**, **"Fechar"**

---

### 2.16 Configuracoes > Propriedade

**Pagina:** `/p/{id}/settings`
**Titulo:** "Propriedade"
**Subtitulo:** "Gerencie todos os parametros da propriedade em um so lugar"

---

#### 2.16.1 Dados Gerais
**Titulo:** "Dados Gerais"
**Subtitulo:** "Nome da pousada, horarios de entrada e saida e percentual minimo para confirmar reservas."

| Campo | Label | Tipo | Helper |
|---|---|---|---|
| Nome | "Nome" | texto | — |
| Check-in | "Horario de check-in" | time (HH:MM) | — |
| Check-out | "Horario de check-out" | time (HH:MM) | — |
| Confirmacao | "Pagamento minimo para confirmar (%)" | numero | "A reserva e confirmada quando o hospede pagar este percentual do valor total." |

---

#### 2.16.2 Dados do Estabelecimento
**Titulo:** "Dados do Estabelecimento"
**Subtitulo:** "Endereco, contato e dados fiscais da propriedade."

##### Endereco

| Campo | Label | Tipo | Placeholder |
|---|---|---|---|
| Rua | "Rua / Logradouro" | texto | — |
| Numero | "Numero" | texto | — |
| Complemento | "Complemento" | texto | "Apto, Sala, Bloco..." |
| Bairro | "Bairro" | texto | — |
| Cidade | "Cidade" | texto | — |
| UF | "UF" | dropdown (27 estados) | — |
| CEP | "CEP" | texto com mascara | "00000-000" |

##### Contato

| Campo | Label | Tipo | Placeholder |
|---|---|---|---|
| Telefone | "Telefone" | texto com mascara | "(00) 00000-0000" |
| E-mail | "E-mail" | email | "contato@pousada.com.br" |

##### Dados Fiscais

| Campo | Label | Tipo | Placeholder |
|---|---|---|---|
| Tipo | "Tipo" | dropdown (CNPJ/CPF) | — |
| Documento | "CNPJ" ou "CPF" (dinamico) | texto com mascara | "00.000.000/0000-00" ou "000.000.000-00" |
| Inscricao Estadual | "Inscricao Estadual" | texto | "Opcional" |

Trocar tipo (CNPJ/CPF) limpa o campo documento e troca a mascara.
Valores armazenados sem formatacao (apenas digitos).

---

#### 2.16.3 Perfil
**Titulo:** "Perfil"
**Subtitulo:** "Texto sobre sua pousada, comodidades e localizacao — usado pelo assistente virtual para responder hospedes."

| Campo | Label | Helper |
|---|---|---|
| Descricao | "Descricao geral" | "Texto principal sobre sua propriedade, usado pelo assistente virtual." |
| Comodidades | "Comodidades" | "Servicos e facilidades oferecidos." Placeholder: "Ex: Piscina". Vazio: "Nenhuma comodidade cadastrada." |
| Localizacao | "Destaques de localizacao" | "Pontos turisticos, acessos e diferenciais." |
| Depoimentos | "Temas dos depoimentos" (somente leitura) | Sub: "Pontos fortes", "Pontos de atencao" |

---

#### 2.16.4 Equipe
**Titulo:** "Equipe"
**Subtitulo:** "Convide pessoas para acessar o sistema e defina o que cada uma pode fazer."

##### Tabela
- Colunas: "Email", "Funcao", "Status", acoes
- Status: **"Ativo"** (verde), **"Pendente"** (amarelo com relogio), **"Voce"** (azul)
- Badge de limite: "X / Y usuarios"

##### Form de convite
- Botao: **"+ Convidar membro"** (ou **"Convidar membro"**)
- Campos: **"Email"** (placeholder: "usuario@exemplo.com"), **"Funcao"** (dropdown)
- Botoes: **"Cancelar"**, **"Convidar"**

##### Roles disponiveis para convite
| Valor backend | Label na UI |
|---|---|
| manager | Gerente |
| finance | Financeiro |
| front_desk | Recepcionista |
| housekeeper | Governanca |
| viewer | Visualizador |

##### Role nao convidavel
| Valor backend | Label na UI |
|---|---|
| owner | Proprietario |

---

#### 2.16.5 Cancelamento
**Titulo:** "Cancelamento"
**Subtitulo:** "Define se o hospede pode cancelar de graca, ate quantos dias antes, e qual a multa."

| Campo | Label | Opcoes |
|---|---|---|
| Tipo | "Tipo de cancelamento" | **"Gratuito"**, **"Flexivel"**, **"Sem reembolso"** |
| Prazo | "Cancelamento gratis ate quantos dias antes do check-in?" | numero (0-365) |
| Multa | "Multa (%)" | numero (0-100) |
| Obs | "Observacoes" | textarea |

Helper: "Gratuito: sem multa. Flexivel: gratis ate X dias antes, depois cobra multa. Sem reembolso: multa total."

---

#### 2.16.6 Regras de Reserva
**Titulo:** "Regras de Reserva"
**Subtitulo:** "Prazos de pagamento, multa por nao-comparecimento, saida antecipada e validade de reservas nao pagas."

##### Prazos de Pagamento
| Campo | Label |
|---|---|
| Limite | "Separacao entre prazo longo e curto (horas)" |
| Longo | "Prazo longo — horas para pagar" |
| Curto | "Prazo curto — horas para pagar" |

##### Cancelamento
| Campo | Label |
|---|---|
| Gratis ate | "Cancelamento gratuito ate (horas antes)" |
| Penalidade | "Penalidade cancelamento tardio (%)" |

##### Nao-comparecimento e Saida Antecipada
| Campo | Label |
|---|---|
| No-show | "Multa por nao-comparecimento (%)" |
| Limite chegada | "Horario limite de chegada (0-23h)" |
| Saida antecipada | "Diarias cobradas por saida antecipada" |

##### Validade da Reserva
| Campo | Label |
|---|---|
| Direta | "Reserva direta (horas)" |
| OTA | "Booking, Airbnb e similares (horas)" |

##### Tabelas de Retencao
- Titulo: "Multa por Cancelamento — {Reserva Direta | Booking, Airbnb e similares}"
- Colunas: "A partir de (dias)", "Ate (dias)" (placeholder: "∞"), "Retencao (%)"
- Botao: **"Adicionar faixa"**
- Vazio: "Nenhuma faixa configurada."

---

#### 2.16.7 Sinal
**Titulo:** "Sinal"
**Subtitulo:** "Percentual do valor total que o hospede precisa pagar para garantir a reserva, com excecoes para alta temporada."

##### Sinal Padrao
| Campo | Label | Helper |
|---|---|---|
| Percentual | "Percentual do sinal (%)" | "Valor cobrado quando nenhuma excecao sazonal se aplica ao periodo da estadia." |
| Descricao | "Descricao" | — |

##### Excecoes por Temporada
- Botao: **"Adicionar"**
- Vazio: "Nenhuma excecao configurada. O sinal padrao sera aplicado em todos os periodos."

| Campo | Label | Placeholder |
|---|---|---|
| Nome | "Nome" | "Ex: Reveillon, Carnaval, Alta Temporada" |
| Inicio | "Inicio" | date |
| Fim | "Fim" | date |
| Sinal | "Sinal (%)" | 0-100 |
| Peso | "Peso" | numero |

- Botoes: **"Cancelar"**, **"Criar Excecao"**
- Helper peso: "Se dois periodos se sobrepoem, o de maior peso prevalece."

---

#### 2.16.8 Criancas
**Titulo:** "Criancas"
**Subtitulo:** "Faixas de idade para diferenciar precos de criancas nas reservas (ex: 0-3 anos, 4-12 anos)."

- Tabela editavel: "Faixa", "Idade min.", "Idade max."
- Faixa 1 min fixo em 0, faixa 3 max fixo em 17

---

#### 2.16.9 Disponibilidade (Restricoes)
**Titulo:** "Disponibilidade"
**Subtitulo:** "Defina minimo e maximo de noites, bloqueie datas ou feche check-in/check-out por tipo de quarto."

| Campo | Label | Tipo |
|---|---|---|
| Tipo | "Tipo de quarto" | dropdown |
| Min | "Min. noites" | numero |
| Max | "Max. noites" | numero |
| Check-in | "Fechar check-in" | checkbox |
| Check-out | "Fechar check-out" | checkbox |
| Bloquear | "Bloquear datas" | checkbox |

- Botao: **"Aplicar para 365 dias"**

---

#### 2.16.10 Temporadas
**Titulo:** "Temporadas"
**Subtitulo:** "Estadia minima obrigatoria em feriados e alta temporada (ex: minimo 3 noites no Reveillon)."

- Botao: **"Adicionar"**
- Vazio: "Nenhum pacote configurado. Reservas de qualquer duracao serao aceitas (respeitando restricoes por tipo de quarto, se houver)."

| Campo | Label | Placeholder |
|---|---|---|
| Nome | "Nome do Pacote" | "Ex: Reveillon, Carnaval, Semana Santa" |
| Inicio | "Inicio" | date |
| Fim | "Fim" | date |
| Min noites | "Minimo de Noites" | numero |
| Check-in fixo | "Check-in Fixo" | date (opcional) |

- Helper check-in fixo: "Opcional. Se preenchido, reservas so podem iniciar nesta data."
- Botoes: **"Cancelar"**, **"Criar Pacote"**
- Toggle ativo/inativo por pacote

---

#### 2.16.11 Frigobar
**Titulo:** "Frigobar"
**Subtitulo:** "Cadastre os itens e precos do frigobar dos quartos."

- Tabela: "Nome", "Preco", acoes (Editar/Remover)
- Criar: campos **"Nome"** (placeholder: "Ex: Agua mineral"), **"Preco (R$)"**
- Botoes: **"Cancelar"**, **"Criar"**

---

#### 2.16.12 Extras
**Titulo:** "Extras"
**Subtitulo:** "Servicos avulsos com cobranca adicional, como cafe da manha, estacionamento ou passeios."

- Tabela: "Nome", "Modo", "Preco", acoes (Editar/Remover)
- Modos de cobranca:
  - "Por unidade" (PER_UNIT)
  - "Por noite" (PER_NIGHT)
  - "Por hospede" (PER_GUEST)
  - "Por hospede/noite" (PER_GUEST_PER_NIGHT)
- Criar: campos **"Nome"** (placeholder: "Ex: Cafe da manha"), **"Modo de cobranca"**, **"Descricao (opcional)"**, **"Preco padrao (R$)"**
- Botoes: **"Cancelar"**, **"Criar"**

---

#### 2.16.13 Motor de Reservas
**Titulo:** "Motor de Reservas"
**Subtitulo:** "Ative reservas online para hospedes fazerem reservas diretamente pelo site."

- Toggle: **"Reservas online ativas"** / **"Reservas online desativadas"**
- Quando ativo:
  - Campo: **"Slug (URL)"** (placeholder: "pousada-sol") — helper com URL completa
  - Link: **"Abrir pagina de reservas →"**
  - Secao: **"Codigo do Widget"** — botao **"Copiar"**

---

#### 2.16.14 Portal do Hospede
**Titulo:** "Portal do Hospede"
**Subtitulo:** "Permite que hospedes acompanhem suas reservas e baixem comprovantes online."

- Toggle: **"Portal ativo"** / **"Portal desativado"**

---

#### 2.16.15 Concierge IA
**Titulo:** "Concierge IA"
**Subtitulo:** "Status atual do assistente WhatsApp. Atualiza automaticamente."

##### Card Status
| Motivo (backend) | Label na UI |
|---|---|
| disabled | "Concierge desativado" |
| override_activate | "Ativado por override" |
| override_deactivate | "Pausado por override" |
| inside_business_hours | "Dentro do expediente" |
| outside_business_hours | "Fora do expediente" |
| no_business_hours_configured | "Sem horarios configurados" |
| timezone_error | "Erro de timezone" |

- Texto: "O concierge esta respondendo mensagens" / "O concierge nao esta respondendo mensagens"

##### Card Horario Comercial
- Titulo: **"Horario Comercial"**
- Dias: "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"
- Formato: toggle + dia + hora inicio + "as" + hora fim
- Badge: **"Noturno"** (se cruza meia-noite)
- Helper: "Turnos que cruzam meia-noite sao suportados. O concierge IA responde fora dos horarios configurados."

##### Card Overrides
- Titulo: **"Overrides"**
- Botao: **"Novo Override"**
- Radio: **"Ativar concierge"** / **"Pausar concierge"**
- Campos: **"Inicio"**, **"Fim"** (datetime-local), **"Motivo (opcional)"**
- Botoes: **"Cancelar"**, **"Criar Override"**
- Vazio: "Nenhum override ativo ou agendado."

---

#### 2.16.16 Monitor de Avaliacoes
**Titulo:** "Monitor de Avaliacoes"
**Subtitulo:** "Acompanhe suas avaliacoes no Google automaticamente."

- Quando configurado: provider "Google", Nota, Total de avaliacoes, Ultima verificacao, link **"Ver no Maps"**
- Quando nao configurado: botao **"Configurar monitor"**
- Setup: campos **"Google Place ID"**, **"URL do Google Maps"**, botao **"Ativar monitor"**

---

#### 2.16.17 Mercado Pago
**Titulo:** "Mercado Pago"
**Subtitulo:** "Conecte sua conta do Mercado Pago para receber pagamentos via PIX, cartao de credito e outros meios."

- Desconectado: status **"Nao conectado"**, helper "Conecte sua conta para receber via PIX com liquidacao D+1.", botao **"Conectar Mercado Pago"**
- Conectado: status **"Conectado"**, "ID da conta: [id]", link **"Desconectar Mercado Pago"**
- Confirmacao desconexao: "Tem certeza que deseja desconectar o Mercado Pago? Links de pagamento pendentes deixarao de funcionar." — botoes **"Cancelar"**, **"Sim, desconectar"**

---

### 2.17 Copilot (Chat IA)

- Posicao: canto inferior direito (fixo)
- Icone fechado: logomarca Hotelly (botao circular 52px)
- Painel aberto: largura 400px, altura max 600px
- Titulo: **"Hotelly Copilot"**
- Placeholder: **"Digite sua pergunta..."**
- Botao: **"Enviar"**
- Header: "Ola! Pergunte sobre quartos, reservas ou o resumo do dia."

---

## 3. Estados e Status por Entidade

### 3.1 Reserva

| Valor backend | Label na UI | Cor |
|---|---|---|
| pending_payment | "Ag. Pagamento" / "Pendente" | laranja/amarelo |
| confirmed | "Confirmada" | azul |
| in_house | "Hospedado" | verde |
| checked_out | "Check-out" / "Saiu" | cinza |
| cancelled | "Cancelada" | vermelho |

**Transicoes:**
```
pending_payment → confirmed | cancelled
confirmed       → in_house  | cancelled
in_house        → checked_out
```

### 3.2 Quarto (Governanca)

| Valor backend | Label na UI | Cor |
|---|---|---|
| dirty | "Sujo" | vermelho |
| cleaning | "Limpando" | laranja |
| clean | "Limpo" | verde |
| maintenance | "Manutencao" | roxo |

### 3.3 Pagamento (gateway)

| Valor backend | Label na UI |
|---|---|
| created | Pagamento criado |
| pending | Processando |
| succeeded | Pago |
| failed | Falhou |
| needs_manual | Revisao manual |

### 3.4 Pagamento manual (folio)

**Metodos:**
| Valor backend | Label na UI |
|---|---|
| credit_card | "Cartao de credito" |
| debit_card | "Cartao de debito" |
| cash | "Dinheiro" |
| pix | "Pix" |
| transfer | "Transferencia" |

**Status:**
| Valor backend | Label na UI |
|---|---|
| captured | (normal, sem badge) |
| voided | "estornado" |

### 3.5 Convite de equipe

| Valor backend | Label na UI | Cor |
|---|---|---|
| pending | "Pendente" (com icone relogio) | amarelo |
| accepted | "Ativo" (com checkmark) | verde |
| expired | Expirado | — |
| cancelled | Cancelado | — |

### 3.6 Check-in digital

| Valor backend | Descricao |
|---|---|
| not_started | Nenhuma acao |
| link_sent | Link enviado ao hospede |
| in_progress | Hospede preenchendo FNRH |
| completed | FNRH capturada e validada |

### 3.7 Ticket de suporte

| Valor backend | Label na UI |
|---|---|
| triage | (triagem interna) |
| open | "Aberto" |
| in_progress | "Em andamento" |
| waiting_customer | "Aguardando resposta" |
| resolved | "Resolvido" |
| closed | "Fechado" |

### 3.8 Pricing dinamico (agressividade)

| Valor backend | Label na UI |
|---|---|
| conservative | "Conservador" |
| standard | "Padrao" |
| aggressive | "Agressivo" |

### 3.9 Fonte da reserva

| Valor backend | Descricao |
|---|---|
| staff | Criada manualmente pelo front desk |
| booking_engine | Motor de reservas (site) |
| channel_manager | OTA / Channel Manager |

### 3.10 Modo de cobranca de extras

| Valor backend | Label na UI |
|---|---|
| PER_UNIT | "Por unidade" |
| PER_NIGHT | "Por noite" |
| PER_GUEST | "Por hospede" |
| PER_GUEST_PER_NIGHT | "Por hospede/noite" |

### 3.11 Regime contabil

| Valor backend | Label na UI |
|---|---|
| CASH | "Data de Transacao (Caixa)" |
| ACCRUAL | "Data de Estadia (Competencia)" |

### 3.12 Assinatura (plataforma)

| Valor backend | Descricao |
|---|---|
| trialing | Trial gratuito |
| active | Assinatura ativa |
| past_due | Pagamento atrasado |
| canceled | Cancelada |
| unpaid | Suspensa |

### 3.13 Plano

| Valor backend |
|---|
| starter |
| professional |
| enterprise |

### 3.14 Roles (RBAC)

| Valor backend | Label na UI | Convidavel? |
|---|---|---|
| owner | "Proprietario" | Nao |
| manager | "Gerente" | Sim |
| finance | "Financeiro" | Sim |
| front_desk | "Recepcionista" | Sim |
| housekeeper | "Governanca" | Sim |
| viewer | "Visualizador" | Sim |

### 3.15 Tipo de override do concierge

| Valor backend | Label na UI |
|---|---|
| activate | "Ativar concierge" |
| deactivate | "Pausar concierge" |

### 3.16 Pacote sazonal

| Valor backend | Descricao |
|---|---|
| ativo = true | Pacote ativo e aplicado pelo motor de cotacao |
| ativo = false | Pacote inativo/arquivado |

---

## 4. Mensagens de Sucesso e Erro Comuns

### Sucesso (toasts)
| Contexto | Mensagem |
|---|---|
| Dados gerais | "Dados gerais salvos." |
| Perfil | "Perfil salvo." |
| Convite | "Convite enviado com sucesso." |
| Cancelar convite | "Convite cancelado." |
| Remover membro | "Membro removido." |
| Cancelamento | "Politica de cancelamento salva." |
| Regras reserva | "Politicas de reserva salvas." |
| Sinal | "Sinal salvo." |
| Criancas | "Politica de criancas salva." |
| Restricoes | "Restricoes aplicadas para 365 dias." |
| Temporada criar | "Pacote \"[nome]\" criado." |
| Temporada ativar | "Pacote \"[nome]\" ativado." |
| Temporada desativar | "Pacote \"[nome]\" desativado." |
| Temporada remover | "Pacote removido." |
| Frigobar | "Item do frigobar criado." / "Item atualizado." / "Item removido." |
| Extra | "Extra criado." / "Extra atualizado." / "Extra removido." |
| Motor reservas | "Motor de reservas atualizado." |
| Portal hospede | "Portal do hospede atualizado." |
| Horarios | "Horarios salvos." |
| Override | "Override criado." / "Override removido." / "Override cancelado." |
| Monitor avaliacoes | "Monitor de avaliacoes configurado." / "Monitor removido." |
| MP desconectar | "Mercado Pago desconectado." |
| Check-in | "Check-in realizado com sucesso." |
| Check-out | "Check-out realizado com sucesso." |
| Quarto atribuido | "Quarto atribuido! Atualizando..." |
| Datas | "Alteracao solicitada. Recarregue em instantes." |
| Hospedes | "Hospedes atualizados com sucesso." |
| Extra reserva | "Extra adicionado! Atualizando..." |
| Frigobar reserva | "Consumo de frigobar registrado" |
| Link pagamento | "Enfileirado" |
| Cancelar reserva | "Reserva cancelada com sucesso." |
| Ticket suporte | "Ticket criado com sucesso" |

### Erros comuns
| Contexto | Mensagem |
|---|---|
| Governanca quarto | "Quarto ainda nao liberado pela governanca." |
| Quarto nao atribuido | "Quarto nao atribuido." |
| Conflito quarto | "Este quarto ja esta ocupado neste periodo. Escolha outro quarto." |
| Sem disponibilidade | "Sem disponibilidade" |
| Sem inventario | "Sem inventario configurado" |
| Tarifa ausente | "Tarifa indisponivel" |
| Concorrencia | "Reserva foi alterada por outro atendente. Recarregue a pagina." / "Dados foram modificados por outro usuario. Recarregue a pagina." |
| Saldo checkout | "Saldo devedor de [valor]. Regularize o pagamento antes do check-out." |
| Extra vinculado | "Extra vinculado a reservas, nao pode ser removido." |
| Limite plano | "Limite de usuarios atingido. Faca upgrade para adicionar mais." / "Limite de quartos atingido. Faca upgrade para adicionar mais." |

---

## 5. Padroes de Interface

### Formatacao
- **Moeda:** formato BRL "1.234,56" (separador milhar: ".", decimal: ",") — CurrencyInput
- **Data display:** DD/MM/YYYY
- **Data input:** YYYY-MM-DD (HTML date)
- **DateTime:** DD/MM/YYYY HH:MM
- **Horario:** HH:MM (24h)

### Botoes padrao
| Acao | Label padrao | Variante loading |
|---|---|---|
| Criar | "Criar" | "Criando..." |
| Salvar | "Salvar" | "Salvando..." |
| Convidar | "Convidar" | "Convidando..." |
| Confirmar | "Confirmar" | "Enviando..." |
| Remover | "Remover" | — |
| Cancelar | "Cancelar" | — |
| Fechar | "Fechar" | — |

### Confirmacao destrutiva
- Padrao: "Confirmar?" → "Sim" / "Nao"
- Ou dialog com texto explicativo + botoes "Cancelar" / "[Acao]"
