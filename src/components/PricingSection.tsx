import React from 'react';
import { Check, X, ShieldCheck, Zap, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../data/content';
import { trackPixelEvent } from '../utils/pixel';

export const PricingSection: React.FC = () => {
  const handleCheckoutClick = (plan: 'basic' | 'complete', e?: React.MouseEvent) => {
    trackPixelEvent('InitiateCheckout', {
      content_name: plan === 'basic' ? 'Pacote Básico de Entrada (300 Atividades)' : 'Pacote Completo + 4 Bônus + Vitalício',
      value: plan === 'basic' ? 10.00 : 27.90,
      currency: 'BRL',
    });
  };

  const comparisonRows = [
    {
      feature: '300 Atividades de Química',
      description: 'Atividades completas para 1º, 2º e 3º ano do Ensino Médio',
      basic: true,
      complete: true,
    },
    {
      feature: 'Organização Temática por Conteúdos',
      description: 'Estruturado em pastas por temas curriculares essenciais',
      basic: true,
      complete: true,
    },
    {
      feature: 'Formato Pronto para Aplicar ou Imprimir',
      description: 'Pode ser projetado na tela ou impresso em impressora comum',
      basic: true,
      complete: true,
    },
    {
      feature: 'Acesso Digital Imediato no E-mail',
      description: 'Receba seus dados de acesso imediatamente após o pagamento',
      basic: true,
      complete: true,
    },
    {
      feature: 'BÔNUS 1: FlashCards de Química',
      description: 'Cartões didáticos visuais para revisão rápida em aula',
      basic: false,
      complete: true,
    },
    {
      feature: 'BÔNUS 2: Exercícios Pedagógicos',
      description: 'Listas de fixação diagramadas com gabaritos comentados',
      basic: false,
      complete: true,
    },
    {
      feature: 'BÔNUS 3: Quizzes de Química',
      description: 'Perguntas formuladas para diagnósticos rápidos e participação',
      basic: false,
      complete: true,
    },
    {
      feature: 'BÔNUS 4: Bingo de Química',
      description: 'Dinâmica lúdica completa com cartelas e fichas de chamada',
      basic: false,
      complete: true,
    },
    {
      feature: 'Acesso Vitalício sem Expiração',
      description: 'Consulte, baixe e utilize em qualquer ano letivo sem mensalidades',
      basic: false,
      complete: true,
    },
    {
      feature: 'Garantia Incondicional de 7 Dias',
      description: 'Satisfação garantida ou 100% do seu dinheiro de volta',
      basic: true,
      complete: true,
    },
  ];

  return (
    <section id="oferta" className="scroll-mt-6 bg-gradient-navy px-5 py-14 text-navy-foreground sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-highlight/40 bg-highlight/15 px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-highlight shadow-card">
            <Sparkles className="h-3.5 w-3.5" />
            Escolha a sua opção de acesso
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tenha uma biblioteca com <span className="text-highlight">300 atividades de Química</span> pronta para consultar quando precisar.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            Investimento único com acesso digital. Sem assinaturas recorrentes ou cobranças surpresa.
          </p>
        </div>

        {/* Big Product Image Showcase */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-navy/60 p-2 shadow-float backdrop-blur-sm sm:p-4">
            <img
              src="/assets/pacote-completo.webp"
              alt="Pacote completo com 300 atividades de Química, acesso vitalício e 4 bônus exclusivos"
              loading="lazy"
              width={960}
              height={960}
              className="w-full rounded-2xl object-cover shadow-card"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.failed) {
                  img.dataset.failed = 'true';
                  img.src = 'https://universodaquimica.lovable.app/__l5e/assets-v1/1155631f-feb7-46db-b074-c825b44d25a1/pacote-completo.webp';
                }
              }}
            />
          </div>
        </div>

        {/* 2 Main Offer Cards (Basic vs Complete) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          
          {/* PACOTE BÁSICO - R$ 10,00 */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white p-6 text-card-foreground shadow-float sm:p-8">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 font-heading text-xs font-extrabold uppercase tracking-wide text-secondary-foreground">
                  Pacote Básico de Entrada
                </span>
                <span className="text-xs font-bold text-muted-foreground">
                  Pagamento Único
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Valor Promocional
                </p>
                <div className="mt-1 flex items-baseline gap-1 font-heading text-5xl font-extrabold leading-none text-foreground sm:text-6xl">
                  <span>R$ 10,</span>
                  <span className="text-3xl align-top sm:text-4xl">00</span>
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">
                  Acesso digital imediato às 300 atividades
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-foreground">
                  O que você recebe por R$ 10:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    '300 Atividades de Química',
                    'Organização por temas curriculares',
                    'Conteúdos para 1º, 2º e 3º ano',
                    'Prontas para aplicar, adaptar ou imprimir',
                    'Garantia incondicional de 7 dias',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                  {[
                    'Sem os 4 bônus complementares',
                    'Acesso básico padrão',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground/60 line-through">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={CHECKOUT_CONFIG.basicUrl}
                onClick={() => handleCheckoutClick('basic')}
                className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-border bg-card px-6 py-4 font-heading text-sm font-extrabold uppercase tracking-wide text-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:border-foreground/30 sm:text-base text-center"
              >
                <span>QUERO O PACOTE BÁSICO (R$ 10,00)</span>
              </a>
              <p className="mt-3 text-center text-xs font-bold text-muted-foreground">
                🔒 Compra segura • 🛡️ 7 dias de garantia
              </p>
            </div>
          </div>

          {/* PACOTE COMPLETO - R$ 27,90 (MAIS RECOMENDADO) */}
          <div className="relative flex flex-col justify-between rounded-3xl border-2 border-highlight bg-card p-6 text-card-foreground shadow-float sm:p-8 ring-4 ring-highlight/20">
            {/* Top highlight ribbon */}
            <div className="absolute -top-4 right-6 rounded-full bg-highlight px-4 py-1.5 font-heading text-xs font-extrabold uppercase tracking-wider text-highlight-foreground shadow-card">
              ⭐ Mais Escolhido pelos Professores
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex rounded-full bg-royal px-3 py-1 font-heading text-xs font-extrabold uppercase tracking-wide text-royal-foreground">
                  Pacote Completo + 4 Bônus + Vitalício
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">De R$ 67,90 por</span>
                  <span className="rounded-md bg-cta/15 px-2 py-0.5 text-xs font-extrabold text-cta">Quase 60% OFF</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1 font-heading text-5xl font-extrabold leading-none text-foreground sm:text-6xl">
                  <span>R$ 27,</span>
                  <span className="text-3xl align-top sm:text-4xl">90</span>
                </div>
                <p className="mt-2 text-xs font-bold text-cta">
                  ⚡ Pagamento único • Acesso vitalício para sempre
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-foreground">
                  O que você recebe a mais pagando R$ 27,90:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { text: '300 Atividades de Química Completas (1º, 2º e 3º ano)', isBonus: false },
                    { text: 'ACESSO VITALÍCIO: Use hoje, no próximo mês e nos próximos anos letivos', isBonus: false },
                    { text: 'BÔNUS 1: FlashCards de Química para revisões relâmpago', isBonus: true },
                    { text: 'BÔNUS 2: Exercícios Pedagógicos com listas complementares', isBonus: true },
                    { text: 'BÔNUS 3: Quizzes de Química para dinamizar a aula', isBonus: true },
                    { text: 'BÔNUS 4: Bingo de Química para fechar conteúdos de forma lúdica', isBonus: true },
                    { text: 'Suporte pedagógico e atualizações de novas atividades', isBonus: false },
                    { text: 'Garantia incondicional de 7 dias', isBonus: false },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-bold text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta" strokeWidth={3} />
                      <span className="leading-snug">
                        {item.isBonus && (
                          <span className="mr-1 inline-block rounded bg-highlight/25 px-1 text-[0.65rem] font-extrabold text-foreground">
                            BÔNUS
                          </span>
                        )}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={CHECKOUT_CONFIG.completeUrl}
                onClick={() => handleCheckoutClick('complete')}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4.5 font-heading text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cta-hover sm:text-lg text-center"
              >
                <span>QUERO O PACOTE COMPLETO</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-3 text-center text-xs font-bold text-muted-foreground">
                🔒 Compra 100% Segura • Pix ou Cartão • Acesso Imediato
              </p>
            </div>
          </div>

        </div>

        {/* Visual Comparison Matrix */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/15 bg-card text-foreground shadow-float">
          <div className="border-b border-border bg-secondary/80 px-6 py-5 sm:px-8 text-center sm:text-left">
            <h3 className="font-heading text-lg font-extrabold text-foreground sm:text-xl">
              Comparativo direto: Qual plano é o melhor para você?
            </h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Sem pegadinhas ou taxas escondidas. Entenda com clareza o conteúdo de cada oferta.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="p-4 sm:px-6 font-heading font-extrabold text-foreground">Recurso / Conteúdo</th>
                  <th className="p-4 sm:px-6 text-center font-heading font-extrabold text-foreground w-36 sm:w-44 bg-muted/10">
                    <div>Pacote Básico</div>
                    <div className="text-xs font-bold text-royal mt-0.5">R$ 10,00</div>
                  </th>
                  <th className="p-4 sm:px-6 text-center font-heading font-extrabold text-foreground w-40 sm:w-48 bg-highlight/10">
                    <div>Pacote Completo</div>
                    <div className="text-xs font-bold text-cta mt-0.5">R$ 27,90</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-card' : 'bg-secondary/30'}>
                    <td className="p-4 sm:px-6">
                      <div className="font-bold text-foreground">{row.feature}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{row.description}</div>
                    </td>
                    <td className="p-4 sm:px-6 text-center bg-muted/5">
                      {row.basic ? (
                        <Check className="mx-auto h-5 w-5 text-cta" strokeWidth={3} />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-muted-foreground/40" strokeWidth={2} />
                      )}
                    </td>
                    <td className="p-4 sm:px-6 text-center bg-highlight/5">
                      {row.complete ? (
                        <Check className="mx-auto h-5 w-5 text-cta" strokeWidth={3} />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-muted-foreground/40" strokeWidth={2} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom CTAs */}
          <div className="grid gap-3 border-t border-border bg-secondary/60 p-4 sm:grid-cols-2 sm:p-6">
            <a
              href={CHECKOUT_CONFIG.basicUrl}
              onClick={() => handleCheckoutClick('basic')}
              className="flex items-center justify-center rounded-full border border-border bg-card py-3 font-heading text-xs font-extrabold uppercase text-foreground hover:bg-muted transition-colors"
            >
              Escolher Pacote Básico (R$ 10,00)
            </a>
            <a
              href={CHECKOUT_CONFIG.completeUrl}
              onClick={() => handleCheckoutClick('complete')}
              className="flex items-center justify-center gap-1.5 rounded-full bg-cta py-3 font-heading text-xs font-extrabold uppercase text-cta-foreground shadow-cta hover:bg-cta-hover transition-colors"
            >
              <span>Escolher Pacote Completo (R$ 27,90)</span>
              <Sparkles className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
