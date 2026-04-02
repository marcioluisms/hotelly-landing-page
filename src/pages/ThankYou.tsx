import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Obrigado — Hotelly</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-lg w-full text-center">
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-success-subtle flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-success text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Bem-vindo ao Hotelly!
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Sua assinatura foi confirmada com sucesso. Enviamos um email com o link de acesso ao seu painel.
          </p>

          {/* Next steps */}
          <div className="bg-card border border-border rounded-2xl p-6 text-left mb-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Próximos passos
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Verifique seu email</p>
                  <p className="text-xs text-muted-foreground">Você receberá um convite para criar sua conta no painel administrativo.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Crie sua conta</p>
                  <p className="text-xs text-muted-foreground">Acesse o link do convite e faça seu cadastro. Leva menos de 1 minuto.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="text-sm font-medium text-foreground">Onboarding com a equipe</p>
                  <p className="text-xs text-muted-foreground">Nossa equipe entra em contato em até 24h para configurar quartos, preços, políticas e a IA no WhatsApp.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* CTA to admin */}
          <a
            href="https://adm.hotelly.ia.br"
            className="inline-block w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors mb-4"
          >
            Acessar painel administrativo
          </a>

          <Link
            to="/"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar ao site
          </Link>
        </div>
      </main>
    </>
  );
}
