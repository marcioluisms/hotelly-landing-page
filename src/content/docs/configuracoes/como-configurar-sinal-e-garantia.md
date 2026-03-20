---
título: "Como configurar o sinal de reserva (garantia)"
módulo: configuracoes
perfil: [owner, manager]
nível: básico
tipo: como-fazer
helpArticleId: "configuracoes-sinal-garantia"
última_revisão: 2026-03-20
descrição: "Configure a exigência de sinal ou garantia para confirmação de reservas no Hotelly."
revisado_por_engenharia: true
---

# Como configurar o sinal de reserva (garantia)

> **Objetivo:** Ao final deste guia, você saberá definir o percentual de sinal que o hóspede precisa pagar para garantir a reserva, incluindo exceções para alta temporada.

## Passo a passo

1. No menu lateral, clique em **Configurações** > **Propriedade**.
2. Na seção **"Regras"**, clique em **Sinal**.

### Sinal padrão

3. No campo **"Percentual do sinal (%)"**, defina o valor padrão (ex: 30%).
   - Helper: "Valor cobrado quando nenhuma exceção sazonal se aplica ao período da estadia."
4. Preencha a **"Descrição"** (opcional) para registrar a política.

### Exceções por temporada

5. Para cobrar sinal diferente em períodos especiais, clique em **"Adicionar"**.
6. Preencha:
   - **"Nome"** — nome do período (ex: "Réveillon", "Carnaval", "Alta Temporada")
   - **"Início"** — data de início
   - **"Fim"** — data de término
   - **"Sinal (%)"** — percentual específico para o período (ex: 50%)
   - **"Peso"** — número para resolver conflitos: "Se dois períodos se sobrepõem, o de maior peso prevalece."
7. Clique em **"Criar Exceção"**.

## O que acontece depois

- A mensagem **"Sinal salvo."** confirma a operação.
- O sistema calcula automaticamente o valor mínimo para confirmar cada reserva: valor total × percentual de sinal.
- Quando o hóspede paga o sinal mínimo, a reserva muda de "Ag. Pagamento" para "Confirmada" automaticamente.

Quando não há exceções: "Nenhuma exceção configurada. O sinal padrão será aplicado em todos os períodos."

## Exemplo

- Sinal padrão: 30%
- Exceção "Réveillon": 50% (28/12 a 02/01), peso 10
- Exceção "Alta Temporada": 40% (15/12 a 28/02), peso 5

Uma reserva para 30/12: como Réveillon (peso 10) e Alta Temporada (peso 5) se sobrepõem, o Réveillon prevalece → sinal de 50%.

## Se algo der errado

| Problema | Solução |
|---|---|
| Reserva confirmou com pagamento abaixo do esperado | Verifique o percentual em Dados Gerais > "Pagamento mínimo para confirmar (%)" — esse campo também influencia a confirmação. |
| Exceção não está sendo aplicada | Verifique se as datas da reserva caem dentro do período da exceção e se a exceção está salva. |

---

