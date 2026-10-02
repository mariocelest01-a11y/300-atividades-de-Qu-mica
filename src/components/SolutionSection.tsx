import React from 'react';
import { Sparkles, Layers, Compass, BookOpen, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const featureBenefits = [
    {
      feature: '300 atividades completas',
      benefit: 'Mais opções para escolher sem precisar criar tudo do zero.',
      detail: 'Você sempre terá uma proposta à mão para 1º, 2º e 3º ano do Ensino Médio.',
      icon: '🧪',
    },
    {
      feature: 'Organizadas por temas e conteúdos',
      benefit: 'Encontre mais rapidamente uma atividade relacionada ao que está ensinando.',
      detail: 'Sem pastas desorganizadas ou buscas intermináveis na internet.',
      icon: '📂',
    },
    {
      feature: 'Atividades com propostas variadas',
      benefit: 'Tenha mais possibilidades para variar a dinâmica das suas aulas.',
      detail: 'Dinâmicas visuais, jogos rápidos, desafios conceituais e exercícios diretos.',
      icon: '🎯',
    },
    {
      feature: 'Formato digital e flexível',
      benefit: 'Decida livremente como deseja aplicar com cada turma.',
      detail: 'Pode ser projetada no quadro, usada no celular ou impressa em papel.',
      icon: '✨',
    },
  ];

  return (
    <section className="bg-secondary/50 px-5 py-14 sm:px-8 sm:py-20 border-y border-border">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Solution Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-royal">
            <Sparkles className="h-3.5 w-3.5" />
            A solução prática para a sua rotina
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Conheça o <span className="text-royal">Universo da Química</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Uma biblioteca com <strong>300 atividades de Química organizadas por temas</strong>, criada para ajudar você a encontrar rapidamente uma atividade para diferentes momentos das suas aulas.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Em vez de começar cada atividade do zero, você escolhe o conteúdo, encontra uma proposta pronta e decide como quer utilizá-la.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cta/30 bg-cta/10 px-5 py-2 font-heading text-sm font-extrabold text-cta sm:text-base">
            <span>✨</span>
            <span>Escolha. Abra. Aplique.</span>
          </div>
        </div>

        {/* Feature -> Benefit Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featureBenefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Benefício real
                  </span>
                </div>
                
                {/* Feature tag */}
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-royal">
                  {item.feature}
                </p>
                
                {/* Real Benefit */}
                <h3 className="mt-1 font-heading text-base font-extrabold leading-snug text-foreground">
                  {item.benefit}
                </h3>
              </div>

              <div className="mt-4 border-t border-border pt-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
