# Direção visual — Hotelly

A landing page usa a ideia de uma central de inteligência conectada: composição editorial, linhas de conexão, superfícies discretas e detalhes em latão. O conteúdo aprovado permanece em `src/data/home.ts`.

## Identidade preservada

- Fundo: #0f141b. Texto principal: #e7eaef.
- Azul de marca: #7fa6e0. Latão: #e5b451, reservado a ações e destaques.
- Fontes locais: Manrope para títulos; Inter para corpo e interface.
- Logotipo e ícone originais, sem modificações.

## Componentes e comportamento

- A abertura combina a proposta de valor com um mapa ilustrativo do sistema.
- Quatro botões selecionam atendimento, reservas, operação e gestão. A seleção é manual, usa `aria-pressed` e atualiza uma região de anúncio acessível.
- Conversa, jornada, operação, composição dos custos e gestão têm composições próprias para evitar repetição de cartões.
- Funcionalidades e dúvidas usam expansão nativa (`details`), acessível por teclado. Todas as informações permanecem no HTML gerado.
- Links de WhatsApp, acesso ao sistema e Sazão continuam usando os endereços existentes.
- A ilustração não representa dados reais. Não há indicadores inventados de receita, ocupação ou resultados.

## Responsividade e movimento

- Composição de duas colunas em telas grandes; abertura em uma coluna abaixo de 900px.
- Seções empilhadas abaixo de 640px; margens de 20px no celular.
- Animação breve de entrada, sem movimento contínuo ou troca automática de conteúdo.
- Preferência de movimento reduzido desativa animações e rolagem suave.
- Foco visível, acesso direto ao conteúdo, controles com altura mínima de 44px e fechamento do menu por Escape.

## Validação

Executar `npm run lint` e `npm run build`. Conferir também o HTML de produção no navegador: 320, 390, 768, 1024 e 1440px; menu móvel; seleção das quatro áreas; expansões; links internos; foco de teclado; movimento reduzido. Publicação não faz parte desta reforma local.
