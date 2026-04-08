# Reativar CTAs — Checklist de Lançamento

Todos os botões de CTA foram desativados em 2026-04-08 (pré-lançamento).
Para reativar, siga os passos abaixo.

---

## 1. `.env.production`

Mudar:
```
VITE_ENABLE_CHECKOUT_MODAL=false
```
Para:
```
VITE_ENABLE_CHECKOUT_MODAL=true
```

---

## 2. `src/pages/Home.tsx`

### Botão "Começar →" na hero

Substituir:
```tsx
<div className="flex flex-col items-start gap-3">
  <div className="w-full sm:w-auto text-center bg-primary/50 text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl cursor-default select-none opacity-80">
    🚀 Lançamento em Breve
  </div>
  <p className="text-xs text-muted-foreground">Estamos finalizando os últimos detalhes. Em breve você poderá começar.</p>
</div>
```
Por:
```tsx
<div className="flex flex-col items-start gap-3">
  <button
    onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
    className="w-full sm:w-auto text-center bg-primary-dark text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl hover:bg-primary-dark/90 transition-colors cursor-pointer"
  >
    Começar →
  </button>
  <p className="text-xs text-muted-foreground">Onboarding assistido pela equipe Hotelly. Sem fidelidade.</p>
</div>
```

### Header e Footer — restaurar props condicionais

```tsx
// Header
<Header onCtaClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })} />

// HomePricing
<HomePricing onPlanSelect={(plan) => checkout.openModal(plan, 'pricing')} />

// Footer
<LazyFooter onCtaClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })} />
```

---

## 3. `src/components/Header.tsx`

### Botão "Assinar" — desktop

Substituir:
```tsx
<div className="text-center bg-primary/50 text-primary-foreground font-bold py-2.5 px-6 rounded-lg text-sm cursor-default select-none opacity-80">
  🚀 Lançamento em Breve
</div>
```
Por:
```tsx
<button
  onClick={onCtaClick}
  className="text-center bg-primary-dark text-primary-foreground font-bold py-2.5 px-6 rounded-lg text-sm hover:bg-primary-dark/90 transition-colors cursor-pointer"
>
  Assinar
</button>
```

### Botão "Assinar" — mobile

Substituir:
```tsx
<div className="text-center bg-primary/50 text-primary-foreground font-bold py-3 px-6 rounded-lg text-sm cursor-default select-none opacity-80">
  🚀 Lançamento em Breve
</div>
```
Por:
```tsx
<button
  onClick={() => { setMenuOpen(false); onCtaClick?.(); }}
  className="text-center bg-primary-dark text-primary-foreground font-bold py-3 px-6 rounded-lg text-sm hover:bg-primary-dark/90 transition-colors cursor-pointer"
>
  Assinar
</button>
```

---

## 4. `src/components/Footer.tsx`

Substituir:
```tsx
<div className="text-center bg-primary/50 text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl cursor-default select-none opacity-80">
  🚀 Lançamento em Breve
</div>
```
Por:
```tsx
<button
  onClick={onCtaClick}
  className="text-center bg-primary-dark text-primary-foreground text-lg font-bold px-8 py-4 rounded-xl hover:bg-primary-dark/90 transition-colors cursor-pointer"
>
  Começar →
</button>
```

---

## 5. `src/components/chat/chatConfig.ts`

Substituir:
```ts
export const CTA_SIGNUP_URL = '';
```
Por:
```ts
export const CTA_SIGNUP_URL =
  'https://adm.hotelly.ia.br/sign-up?utm_source=landing_page&utm_medium=cta&utm_content=mascote_ia';
```

---

## 6. `src/pages/ThankYou.tsx`

Substituir:
```tsx
{/* CTA to admin — desativado até o lançamento oficial */}
{/* URL original: https://adm.hotelly.ia.br */}
<div className="inline-block w-full py-4 rounded-xl bg-primary/50 text-primary-foreground font-bold text-base cursor-default select-none opacity-80 mb-4">
  🚀 Lançamento em Breve
</div>
```
Por:
```tsx
{/* CTA to admin */}
<a
  href="https://adm.hotelly.ia.br"
  className="inline-block w-full py-4 rounded-xl bg-primary-dark text-primary-foreground font-bold text-base hover:bg-primary-dark/90 transition-colors mb-4"
>
  Acessar painel administrativo
</a>
```

---

## 7. Painel do Cloudflare Pages

Em Configurações → Variáveis e segredos, confirmar:
```
VITE_ENABLE_CHECKOUT_MODAL = true
```

Após todas as alterações, fazer deploy. Os botões voltam ativos automaticamente.
