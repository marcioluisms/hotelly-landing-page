---
título: "LGPD e proteção de dados no Hotelly"
módulo: configuracoes
perfil: [owner, manager]
nível: intermediário
tipo: conceito
helpArticleId: "lgpd-protecao-dados"
última_revisão: 2026-03-20
descrição: "Como o Hotelly protege os dados dos hóspedes: criptografia, RBAC, trilha de auditoria e LGPD."
revisado_por_engenharia: true
---

# LGPD e proteção de dados no Hotelly

## O que é a LGPD

A Lei Geral de Proteção de Dados (Lei 13.709/2018) regulamenta o tratamento de dados pessoais no Brasil. Para meios de hospedagem, isso inclui os dados dos hóspedes: nome, CPF, e-mail, telefone, documento de identidade e dados de pagamento.

## Papéis na LGPD

Na relação com o Hotelly, o **hoteleiro é o controlador** dos dados — ele decide por que e como coleta as informações dos hóspedes. O **Hotelly é o operador** — processa os dados conforme as instruções do controlador, dentro do sistema.

Isso significa que é responsabilidade do hoteleiro garantir que o hóspede esteja ciente da coleta e uso dos seus dados, obter consentimento quando necessário, e atender solicitações de acesso ou exclusão de dados.

## O que o Hotelly faz para proteger dados

**Criptografia:** Credenciais sensíveis são protegidas com AES-256-GCM. Tokens de autenticação usam JWT com expiração automática.

**Controle de acesso (RBAC):** Cada perfil vê apenas os dados que precisa. Governança não acessa dados pessoais de hóspedes. Financeiro não vê documentos de identidade. Visualizador não executa ações.

**Trilha de Auditoria:** Toda ação sensível (cancelamento, reembolso, alteração de dados, mudança de permissão) é registrada com quem fez, quando e o que mudou. O registro é imutável — não pode ser editado ou apagado.

**Proteção de PII em logs:** Dados pessoais dos hóspedes (PII) nunca aparecem nos logs do sistema. Isso evita exposição acidental em caso de análise técnica.

**Retenção de dados:** Os dados são preservados mesmo após cancelamento da assinatura, conforme a política de retenção. Solicitações de exclusão definitiva podem ser feitas ao suporte.

## Responsabilidades do hoteleiro

Como controlador dos dados, o hoteleiro deve garantir que o check-in digital e o cadastro de hóspedes informem ao hóspede quais dados são coletados e por quê, que solicitações de acesso ou exclusão de dados pessoais sejam encaminhadas ao suporte quando necessário, e que o acesso ao sistema seja restrito a membros autorizados da equipe (usando os perfis RBAC disponíveis).

## Recomendação

Mantenha os perfis de acesso da equipe atualizados. Remova membros que saíram da operação. Use o perfil mais restritivo possível para cada função — isso protege os dados dos hóspedes e reduz riscos.

---

