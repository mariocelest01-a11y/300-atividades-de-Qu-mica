import React from 'react';
import { X, Check, Clock, Search, HelpCircle, ArrowRight } from 'lucide-react';

export const PainSection: React.FC = () => {
  const painSteps = [
    { num: '1', text: 'Você pesquisa uma ideia na internet.' },
    { num: '2', text: 'Encontra outra proposta incompleta.' },
    { num: '3', text: 'Precisa adaptar a formatação e a linguagem.' },
    { num: '4', text: 'Cria novas perguntas e gabarito.' },
    { num: '5', text: 'Procura imagens, esquemas e materiais.' },
    { num: '6', text: 'Organiza tudo para caber na folha ou no slide.' },
  ];

  const beforeItems = [
    'Pesquisar ideias por horas na internet',
    'Criar e diagramar atividades do zero',
    'Repetir sempre o mesmo formato tradicional',
    'Preparar materiais tarde da noite ou no fim de semana',
    'Pouca variedade de dinâmicas pronta para usar',
  ];

  const afterItems = [
    'Abrir a biblioteca e escolher o tema da aula em segundos',
    'Encontrar a atividade pronta com instruções claras',
    'Adaptar rapidamente para o nível da sua turma',
    'Aplicar projetando na tela ou imprimindo',
    'Ganhar variedade sem sacrificar seu tempo de descanso',
  ];

  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Pain Headline & Subhead */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3.5 py-1.5 font-heading text-xs font-bold uppercase tracking-wider text-destructive">
            <Clock className="h-3.5 w-3.5" />
            A realidade da rotina docente
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Você realmente precisa passar mais uma noite{' '}
            <span className="text-mark">procurando atividades</span> para a próxima aula?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Entre preparar o conteúdo, corrigir atividades e lidar com toda a rotina escolar, ainda existe uma tarefa que pode consumir horas: encontrar ou criar uma atividade que realmente faça sentido para a turma.
          </p>
        </div>

        {/* The Pain Loop Timeline */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <p className="font-heading text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
            O ciclo que consome o seu tempo:
          </p>
          
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {painSteps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-secondary/40 p-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted font-heading text-xs font-extrabold text-foreground">
                  {step.num}
                </span>
                <p className="text-sm font-medium text-foreground/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-muted/60 p-4 text-center text-sm font-semibold text-foreground/80 sm:text-base">
            <span className="text-destructive font-bold">E quando você percebe:</span> passou boa parte da sua noite ou do seu fim de semana preparando uma única atividade.
          </div>
        </div>

        {/* Transition Question */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-royal/30 bg-royal/10 px-4 py-2 text-royal font-heading text-sm font-bold">
            <HelpCircle className="h-4 w-4" />
            <span>Uma mudança simples de perspectiva</span>
          </div>
          <h3 className="mt-4 font-heading text-2xl font-extrabold text-foreground sm:text-3xl">
            E se, em vez de começar do zero, você pudesse começar com uma <span className="text-mark">atividade pronta</span>?
          </h3>
        </div>

        {/* Antes vs Depois Contrast Box */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          
          {/* SEM O MATERIAL (Antes) */}
          <div className="rounded-3xl border border-border bg-secondary/60 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <span className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                Antes • Sem o material
              </span>
              <span className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-bold text-destructive">
                Desgaste & Espera
              </span>
            </div>
            
            <ul className="mt-6 space-y-4">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-foreground/75 sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/15 text-xs font-extrabold text-destructive">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COM O MATERIAL (Depois) */}
          <div className="rounded-3xl bg-gradient-navy p-6 text-navy-foreground shadow-float sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-highlight">
                Depois • Com o Universo da Química
              </span>
              <span className="rounded-full bg-cta/20 px-2.5 py-0.5 text-xs font-bold text-cta">
                Praticidade & Economia
              </span>
            </div>
            
            <ul className="mt-6 space-y-4">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta text-xs font-extrabold text-cta-foreground shadow-sm">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-white/95 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
