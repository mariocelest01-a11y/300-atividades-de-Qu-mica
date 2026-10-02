import React from 'react';
import { Gift, Check, Sparkles } from 'lucide-react';
import { BONUSES } from '../data/content';

export const BonusesSection: React.FC = () => {
  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-highlight/20 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-highlight-foreground">
            <Gift className="h-3.5 w-3.5" />
            Recursos complementares de presente
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            E você ainda recebe 4 bônus para deixar suas aulas{' '}
            <span className="text-mark">ainda mais completas</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quatro materiais extras desenvolvidos especificamente para apoiar a revisão, fixação e os momentos finais da aula.
          </p>
        </div>

        {/* 4 Bonuses Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BONUSES.map((bonus, idx) => (
            <article
              key={bonus.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div>
                {/* Bonus Cover Image */}
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <img
                    src={bonus.cover}
                    alt={bonus.alt}
                    loading="lazy"
                    width={720}
                    height={720}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.failed) {
                        img.dataset.failed = 'true';
                        img.src = `https://universodaquimica.lovable.app${bonus.cover.replace('/assets/', '/__l5e/assets-v1/')}`;
                      }
                    }}
                  />
                  
                  {/* Badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-highlight px-3 py-1 font-heading text-[0.65rem] font-extrabold uppercase tracking-wide text-highlight-foreground shadow-card">
                    Bônus #{idx + 1}
                  </span>

                  <span className="absolute bottom-3 right-3 rounded-full bg-card/90 backdrop-blur-sm px-2.5 py-0.5 text-[0.65rem] font-bold text-foreground shadow-sm">
                    Incluso no pacote
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wide text-royal">
                    {bonus.subtitle}
                  </span>
                  
                  <h3 className="mt-1 font-heading text-lg font-extrabold text-foreground">
                    {bonus.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {bonus.text}
                  </p>

                  <div className="mt-4 rounded-xl bg-secondary/80 p-3 border border-border/60">
                    <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-royal">
                      Como ajuda o professor:
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/80">
                      {bonus.howItHelps}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-cta">
                  <Check className="h-4 w-4" strokeWidth={3} />
                  <span>Acesso digital liberado na compra</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Micro reassurance */}
        <div className="mt-8 text-center text-xs font-semibold text-muted-foreground">
          🎁 Todos os 4 bônus são digitais e liberados junto com o pacote de atividades.
        </div>

      </div>
    </section>
  );
};
