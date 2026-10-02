import React from 'react';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../data/content';

export const FinalCtaSection: React.FC = () => {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = CHECKOUT_CONFIG.basicUrl;
    }
  };

  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-3xl border border-border bg-secondary/80 p-8 text-center shadow-card sm:p-14">
          
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-royal">
            <Sparkles className="h-3.5 w-3.5" />
            Comece hoje mesmo
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Na próxima vez que você precisar preparar uma aula,{' '}
            <span className="text-mark">comece com o material pronto</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tenha sua biblioteca com 300 atividades de Química disponível sempre que precisar. Escolha o conteúdo, abra a proposta e aplique com facilidade.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-bold text-royal shadow-sm">
            <span>✨</span>
            <span>Escolha. Abra. Aplique.</span>
          </div>

          <div className="mx-auto mt-8 max-w-md">
            <a
              href="#oferta"
              onClick={handleScrollToOffer}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 font-heading text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cta-hover sm:text-lg text-center"
            >
              <span>QUERO AS 300 ATIVIDADES</span>
            </a>

            <p className="mt-3 text-sm font-bold text-foreground">
              A partir de R$ 10,00 • Pagamento único sem mensalidades
            </p>

            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              🔒 Compra segura • ⚡ Acesso imediato no e-mail • 🛡️ Garantia de 7 dias
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
