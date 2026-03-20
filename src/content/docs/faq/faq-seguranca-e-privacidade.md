---
título: "Perguntas frequentes sobre segurança e privacidade"
módulo: configuracoes
perfil: [owner, manager]
nível: básico
tipo: conceito
helpArticleId: "faq-seguranca-privacidade"
última_revisão: 2026-03-20
descrição: "Dúvidas sobre segurança e privacidade no Hotelly: criptografia, LGPD, acesso e proteção de dados."
revisado_por_engenharia: true
---

# Perguntas frequentes sobre segurança e privacidade

## Meus dados e os dos hóspedes estão protegidos?

Sim. O Hotelly usa criptografia AES-256-GCM para credenciais sensíveis e tokens JWT para autenticação. Dados pessoais (PII) dos hóspedes nunca aparecem em logs do sistema.

## O Hotelly está em conformidade com a LGPD?

O Hotelly segue práticas alinhadas à LGPD: coleta apenas dados necessários para a operação, protege informações sensíveis com criptografia, e oferece a Trilha de Auditoria para rastreabilidade de ações. O hoteleiro, como controlador dos dados, deve garantir que obtém o consentimento adequado dos hóspedes.

## Quem pode ver os dados dos hóspedes?

Depende do perfil. Proprietário e Gerente veem todos os dados. Recepcionista vê dados necessários para check-in e atendimento. Governança vê apenas informações de limpeza. Financeiro vê valores, não dados pessoais detalhados. Visualizador vê informações gerais sem poder executar ações.

## O que acontece com meus dados se eu cancelar a assinatura?

Os dados são preservados mesmo após o cancelamento. A política de retenção garante que seu histórico de reservas, hóspedes e financeiro não é deletado.

## A IA do Concierge armazena conversas dos hóspedes?

As conversas são processadas para gerar respostas, mas o Concierge IA opera com guardrails rígidos: só responde com base na knowledge base configurada e nos dados do sistema. Ele não "aprende" com conversas anteriores nem compartilha informações entre hóspedes diferentes.

## Como funciona a autenticação?

O acesso ao dashboard é por email e senha com tokens JWT. O Portal do Hóspede usa magic link (link único por email, sem necessidade de senha). O check-in digital usa link direto, também sem criação de conta.

---

