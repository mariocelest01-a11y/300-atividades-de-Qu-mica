import React, { useState } from 'react';
import { Layers, FolderCheck, Check, Sparkles } from 'lucide-react';
import { THEMES, TopicItem } from '../data/content';

export const ThemesSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-royal">
            <FolderCheck className="h-3.5 w-3.5" />
            Organização completa por conteúdos
          </span>
          
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo o que você precisa <span className="text-mark">em um só lugar</span>.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Você não precisa procurar atividade por atividade na internet. Os conteúdos ficam reunidos e categorizados para você consultar com agilidade.
          </p>

          <p className="mt-2 text-sm font-semibold text-royal">
            Contempla conteúdos essenciais do 1º, 2º e 3º ano do Ensino Médio.
          </p>
        </div>

        {/* 8 Themes Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((theme) => {
            const isSelected = selectedTheme === theme.id;
            return (
              <article
                key={theme.id}
                onClick={() => setSelectedTheme(isSelected ? null : theme.id)}
                className={`group cursor-pointer rounded-3xl border p-6 transition-all duration-300 ${
                  isSelected
                    ? 'border-royal bg-royal/5 shadow-float -translate-y-1'
                    : 'border-border bg-card shadow-card hover:-translate-y-1 hover:border-royal/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">
                    {theme.icon}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wide text-secondary-foreground">
                    {theme.year.split(' ')[0]} {theme.year.split(' ')[1]}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-lg font-extrabold text-foreground group-hover:text-royal transition-colors">
                  {theme.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {theme.text}
                </p>

                {/* Subtopics / Highlights */}
                <div className="mt-4 border-t border-border/70 pt-3">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-wider text-muted-foreground">
                    Tópicos abordados:
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {theme.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-xs text-foreground/80">
                        <Check className="h-3 w-3 shrink-0 text-cta" strokeWidth={3} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Central Summary Banner */}
        <div className="mt-12 rounded-3xl bg-secondary/80 border border-border p-6 text-center sm:p-8">
          <h4 className="font-heading text-lg font-extrabold text-foreground sm:text-xl">
            Sem perda de tempo procurando em múltiplos sites e pastas perdidas
          </h4>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm">
            Toda a biblioteca foi estruturada pedagogicamente para que, em menos de 2 minutos, você localize a atividade certa para a sua próxima aula.
          </p>
        </div>

      </div>
    </section>
  );
};
