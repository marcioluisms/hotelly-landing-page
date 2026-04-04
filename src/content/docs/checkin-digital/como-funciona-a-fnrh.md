---
título: "Como funciona a FNRH no Hotelly"
módulo: checkin-digital
perfil: [owner, manager, front_desk]
nível: básico
tipo: conceito
helpArticleId: "checkin-digital-fnrh"
última_revisão: 2026-03-20
descrição: "Entenda como o Hotelly envia a FNRH automaticamente ao Serpro — sem portal externo e sem custo."
revisado_por_engenharia: true
---

# Como funciona a FNRH no Hotelly

> **Em uma frase:** A FNRH (Ficha Nacional de Registro de Hóspedes) é uma obrigação legal para meios de hospedagem no Brasil, e o Hotelly envia os dados automaticamente ao governo após o check-in digital, sem papel, sem digitação manual.

## Por que isso importa para você

Todo meio de hospedagem no Brasil é obrigado a enviar a ficha de hóspedes à SETUR/Serpro. Fazer isso manualmente (fichas de papel, digitação no sistema do governo) consome tempo e está sujeito a erros e multas. O Hotelly automatiza o processo inteiro.

## Como funciona

1. O hóspede preenche o check-in digital (formulário pelo celular)
2. Os dados são validados automaticamente pelo Hotelly
3. O sistema traduz os campos para o formato exigido pelo Serpro FNRH Digital V2
4. Os dados são enviados automaticamente à API do Serpro
5. Se houver falha no envio, o sistema faz retry automático

**Dados enviados:** nome completo, documento, nacionalidade, nascimento, gênero, profissão, endereço de origem, motivo da viagem, destino, datas de check-in e check-out.

## Segurança dos dados

- As credenciais da FNRH são criptografadas com AES-256-GCM por propriedade
- Dados pessoais (PII) nunca aparecem em logs do sistema
- O envio é feito por tarefas assíncronas seguras

## Custo

A API do Serpro FNRH Digital V2 é **gratuita** para meios de hospedagem. Não há custo adicional para o hoteleiro.

## Se algo der errado

| Problema | Solução |
|---|---|
| Hóspede não preencheu o check-in digital | Você pode registrar os dados manualmente e o sistema envia a FNRH da mesma forma. |
| Envio falhou | O sistema faz retry automático. Se persistir, abra um ticket de suporte. |
| Hóspede estrangeiro sem CPF | O formulário aceita passaporte e RNE. O campo de documento se adapta ao tipo selecionado. |

