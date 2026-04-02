import React, { useState } from 'react';
import { PLAN_MAP } from './checkout.types';
import type { PlanSlug, ModalStatus } from './checkout.types';

interface CheckoutModalContentProps {
  plan: PlanSlug;
  status: ModalStatus;
  errorMessage: string;
  onSubmit: (form: { email: string; propertyName: string }) => void;
  onClose: () => void;
}

export default function CheckoutModalContent({
  plan,
  status,
  errorMessage,
  onSubmit,
  onClose,
}: CheckoutModalContentProps) {
  const [email, setEmail] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const info = PLAN_MAP[plan];
  const isLoading = status === 'validating' || status === 'submitting';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit({ email, propertyName });
  };

  return (
    <div className="p-6 sm:p-8">
      {/* Plan badge */}
      <div className="mb-6">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${info.badgeClass}`}>
          {info.name}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-headline font-bold text-foreground mb-4">
        Ótima escolha. Você está entrando para o{' '}
        <span className="text-primary">{info.name}</span>.
      </h2>

      {/* Body copy */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        Ao continuar, você inicia sua assinatura do Hotelly por{' '}
        <strong className="text-foreground">{info.price}/mês</strong> e já pode acessar sua
        central de reservas. Nossa equipe entra em contato em até 24h para configurar tudo com
        você — quartos, preços, políticas e a IA no WhatsApp da sua hospedagem.
      </p>
      <p className="text-xs text-muted-foreground mb-6">
        Pagamento seguro via Stripe — a mesma plataforma usada por Amazon e Google.
        <br />
        Sem fidelidade. Cancele quando quiser.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="checkout-email" className="block text-sm font-medium text-foreground mb-1.5">
            Seu email
          </label>
          <input
            id="checkout-email"
            type="email"
            required
            autoComplete="email"
            placeholder="você@suahospedagem.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="checkout-property" className="block text-sm font-medium text-foreground mb-1.5">
            Nome da sua hospedagem
          </label>
          <input
            id="checkout-property"
            type="text"
            required
            autoComplete="organization"
            placeholder="Pousada Sol Nascente"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            disabled={isLoading}
            minLength={2}
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50"
          />
        </div>

        {/* Error message */}
        {status === 'error' && errorMessage && (
          <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
            {errorMessage}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Redirecionando para pagamento seguro...
              </span>
            ) : (
              'Continuar para pagamento →'
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-transparent text-muted-foreground font-medium text-sm hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
          >
            Voltar
          </button>
        </div>

        {/* Security seal */}
        <p className="text-center text-xs text-muted-foreground/70 pt-1">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">lock</span>
            Pagamento seguro via Stripe
          </span>
        </p>
      </form>
    </div>
  );
}
