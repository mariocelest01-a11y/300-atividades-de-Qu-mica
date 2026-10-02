import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MechanismSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      action: 'ESCOLHA O TEMA',
      desc: 'Encontre o conteúdo que deseja trabalhar com a sua turma.',
      details: 'Acesse a biblioteca e navegue pelos temas do 1º, 2º ou 3º ano do Ensino Médio de forma organizada.',
      accent: 'text-royal',
      border: 'border-royal/30',
      bgBadge: 'bg-royal/10',
    },
    {
      step: '02',
      action: 'ABRA A ATIVIDADE',
      desc: 'Veja a atividade pronta para aquele conteúdo.',
      details: 'Consulte os enunciados, objetivos, ilustrações didáticas e as orientações de aplicação em poucos cliques.',
      accent: 'text-cta',
      border: 'border-cta/30',
      bgBadge: 'bg-cta/10',
    },
    {
      step: '03',
      action: 'APLIQUE, ADAPTE OU IMPRIMA',
      desc: 'Use a atividade como está ou adapte de acordo com a sua turma.',
      details: 'Projete na tela para resolver com toda a classe, conduza dinâmicas em grupo ou imprima folhas de exercícios.',
      accent: 'text-cyan',
      border: 'border-cyan/30',
      bgBadge: 'bg-cyan/10',
    },
  ];

  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cta/10 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-cta">
            <Sparkles className="h-3.5 w-3.5" />
            Mecanismo simples & direto
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Como funciona: <span className="text-mark">Escolha. Abra. Aplique.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Três passos simples para você sair da procura exaustiva e chegar rapidamente à atividade de Química que precisa para a sua aula.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`relative overflow-hidden rounded-3xl border ${item.border} bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 sm:p-8`}
            >
              <div className="flex items-baseline justify-between">
                <span className={`font-heading text-5xl font-extrabold ${item.accent}`}>
                  {item.step}
                </span>
                <span className={`rounded-full px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider ${item.bgBadge} ${item.accent}`}>
                  Passo {item.step}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-xl font-extrabold text-foreground sm:text-2xl">
                {item.action}
              </h3>
              
              <p className="mt-2 text-sm font-semibold text-foreground/80 sm:text-base">
                {item.desc}
              </p>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.details}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-muted text-muted-foreground shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="mt-10 rounded-2xl bg-secondary/80 border border-border p-4 text-center text-xs font-semibold text-muted-foreground sm:text-sm">
          💡 <strong>Importante:</strong> Você tem total liberdade pedagógica. Não é necessário imprimir nada se preferir trabalhar diretamente no projetor, slide ou dispositivo digital.
        </div>

      </div>
    </section>
  );
};
