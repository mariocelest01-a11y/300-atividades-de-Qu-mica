import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../data/content';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-background px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid items-center gap-6 rounded-3xl border border-border bg-secondary/60 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-10 shadow-card">
          
          {/* Badge Icon */}
          <div className="mx-auto grid h-28 w-28 shrink-0 place-items-center rounded-full bg-gradient-royal text-center text-white shadow-float sm:h-36 sm:w-36">
            <div>
              <span className="font-heading text-4xl font-extrabold sm:text-5xl">
                {CHECKOUT_CONFIG.guaranteeDays}
              </span>
              <span className="block text-[0.65rem] font-extrabold uppercase tracking-widest sm:text-xs">
                Dias de Garantia
              </span>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-cta/15 px-3 py-1 font-heading text-xs font-bold text-cta">
              <ShieldCheck className="h-4 w-4" />
              <span>Compra 100% Protegida</span>
            </div>

            <h3 className="mt-3 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
              Teste o material com tranquilidade por 7 dias.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Acesse a biblioteca, confira as atividades dos conteúdos que você vai trabalhar nas próximas semanas e avalie a praticidade na sua rotina.
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Se por qualquer motivo você considerar que o material não facilitou o seu planejamento de aulas, basta solicitar o reembolso dentro do prazo pela própria plataforma da Kiwify. Simples, sem burocracia e com devolução total do valor pago.
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-foreground/80">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Risco zero
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Reembolso integral
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-cta" /> Suporte humanizado
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
