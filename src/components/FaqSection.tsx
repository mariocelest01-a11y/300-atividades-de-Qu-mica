import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 border-t border-border">
      <div className="mx-auto w-full max-w-4xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-royal">
            <HelpCircle className="h-3.5 w-3.5" />
            Tire suas dúvidas
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Perguntas Frequentes
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Respostas diretas e transparentes sobre o acesso, conteúdo e utilização do material.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-heading text-base font-extrabold text-foreground sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <div
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-royal/10 text-royal' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border/60 bg-muted/20 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer note */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          Ainda ficou com alguma dúvida? O suporte ao professor está disponível após a compra diretamente pela plataforma.
        </div>

      </div>
    </section>
  );
};
