import React from 'react';
import { Sparkles, Layers, Users, RefreshCw, Folder, Clock, Image, Calendar } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: '🧫',
      title: 'Aulas mais práticas e participativas',
      text: 'Atividades que facilitam a saída do modelo puramente expositivo e colocam propostas na mão dos estudantes.',
      benefitTag: 'Mais engajamento',
    },
    {
      icon: '🎯',
      title: 'Maior variedade de formatos',
      text: 'Formatos diferentes para trabalhar o mesmo conteúdo, oferecendo opções para turmas com diferentes níveis de aprendizagem.',
      benefitTag: 'Flexibilidade',
    },
    {
      icon: '🙋',
      title: 'Mais espaço para participação',
      text: 'Propostas com jogos e dinâmicas que podem ajudar a estimular respostas e discussões construtivas durante a aula.',
      benefitTag: 'Interatividade',
    },
    {
      icon: '🔄',
      title: 'Revisão mais dinâmica e rápida',
      text: 'Recursos ágeis para retomar conteúdos prévios em 10 minutos sem precisar elaborar fichas do zero.',
      benefitTag: 'Retenção',
    },
    {
      icon: '🗂️',
      title: 'Material 100% organizado',
      text: 'Cada tema no seu devido lugar, facilitando a consulta rápida mesmo no meio do intervalo entre aulas.',
      benefitTag: 'Praticidade',
    },
    {
      icon: '⏱️',
      title: 'Economia real de tempo no planejamento',
      text: 'Em vez de passar horas procurando e formatando, você escolhe, abre e decide como quer utilizar.',
      benefitTag: 'Tempo livre',
    },
    {
      icon: '🖼️',
      title: 'Recursos visuais e esquemas claros',
      text: 'Modelos e representações gráficas que facilitam a visualização de conceitos abstratos da Química.',
      benefitTag: 'Didática visual',
    },
    {
      icon: '📌',
      title: 'Para cada momento da sequência didática',
      text: 'Opções adequadas para introdução do assunto, fixação prática, checagem rápida ou fechamento de bimestre.',
      benefitTag: 'Versatilidade',
    },
  ];

  return (
    <section className="bg-secondary/40 px-5 py-14 sm:px-8 sm:py-20 border-t border-border">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Section Header with Secondary Promise */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cta/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-cta">
            <Sparkles className="h-3.5 w-3.5" />
            Variedade pedagógica & praticidade
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mais variedade para suas aulas.{' '}
            <span className="text-mark">Menos tempo começando do zero.</span>
          </h2>

          {/* Secondary Promise Highlight */}
          <div className="mx-auto mt-5 max-w-2xl rounded-2xl bg-card border border-border p-4 shadow-sm text-sm sm:text-base text-foreground/90 font-medium">
            <p>
              <strong className="text-royal font-extrabold">Benefício adicional:</strong> Mais variedade para trabalhar conteúdos e criar aulas mais práticas e participativas — ajudando a transformar conteúdos difíceis em momentos de maior atenção da turma.
            </p>
          </div>
        </div>

        {/* 8 Benefits Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">{b.icon}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">
                    {b.benefitTag}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-base font-extrabold text-foreground leading-snug">
                  {b.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {b.text}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/70 text-[0.7rem] font-bold text-royal flex items-center gap-1">
                <span>✓ Facilita sua rotina</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
