import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { CHECKOUT_CONFIG } from '../data/content';

interface HeaderHeroProps {
  onCtaClick?: () => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ onCtaClick }) => {
  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = CHECKOUT_CONFIG.basicUrl;
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
      {/* Decorative background grid and ambient glows */}
      <div className="grid-lab absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 top-20 hidden size-96 rounded-full bg-cyan/15 blur-3xl sm:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-10 hidden size-96 rounded-full bg-highlight/10 blur-3xl sm:block" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14 lg:py-16 text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-highlight/35 bg-highlight/15 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-highlight shadow-card sm:text-sm">
          <span>🧪</span>
          <span>Material para professores de Química</span>
        </div>

        {/* 1. Main Headline - Visually Dominant as requested */}
        <h1 className="mt-5 font-heading text-[2.25rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.65rem] max-w-4xl mx-auto">
          Pare de perder horas{' '}
          <span className="text-highlight underline decoration-highlight/40 underline-offset-4">
            criando atividades
          </span>{' '}
          de Química do zero.
        </h1>

        {/* 2. Subheadline */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/90 sm:text-xl">
          Tenha <strong>300 atividades prontas</strong> para aplicar, adaptar ou imprimir — organizadas por temas para você encontrar rapidamente o que precisa para cada aula.
        </p>

        {/* 3. MOCKUP LOGO ABAIXO DA SUBHEADLINE (Conforme solicitado) */}
        <div className="relative mx-auto mt-8 sm:mt-10 w-full max-w-2xl">
          {/* Subtle Ambient Glow Behind Mockup */}
          <div className="absolute inset-4 hidden rounded-[3rem] bg-cyan/20 blur-3xl sm:block" aria-hidden="true" />
          
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy/50 p-2 shadow-float backdrop-blur-sm sm:rounded-3xl sm:p-3">
            <img
              src="/assets/mockup-hero-pt.webp"
              alt="Mockup do material 300 Atividades de Química para Ensino Médio"
              width={1024}
              height={768}
              loading="eager"
              className="w-full rounded-xl object-contain shadow-lg sm:rounded-2xl"
              onError={(e) => {
                // Fallback to original CDN if needed
                const img = e.currentTarget;
                if (!img.dataset.failed) {
                  img.dataset.failed = 'true';
                  img.src = 'https://universodaquimica.lovable.app/__l5e/assets-v1/561e20a7-63c0-4a29-8e35-bf9bece3f30a/mockup-hero-pt.webp';
                }
              }}
            />
          </div>

          {/* Floating Highlight Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-highlight/40 bg-highlight px-5 py-2 font-heading text-xs font-extrabold uppercase tracking-wide text-highlight-foreground shadow-float sm:text-sm">
            ✨ 300 atividades + 4 bônus exclusivos
          </div>
        </div>

        {/* 4. Secondary Benefit Sequence (Logo abaixo do mockup) */}
        <div className="mt-12 sm:mt-14 max-w-xl mx-auto">
          <ul className="grid gap-2.5 text-left sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
            {[
              '300 atividades de Química',
              '1º, 2º e 3º ano do Ensino Médio',
              'Organizadas por temas',
              'Prontas para aplicar, adaptar ou imprimir',
              '+ 4 bônus exclusivos incluídos',
            ].map((benefit, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-2.5 text-sm font-semibold text-navy-foreground/95 sm:text-base ${
                  idx === 4 ? 'sm:col-span-2 sm:justify-center' : ''
                }`}
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta text-cta-foreground shadow-sm">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. CTA & Trust badges */}
        <div className="mt-9 flex flex-col items-center gap-3.5">
          <a
            href="#oferta"
            onClick={handleScrollToOffer}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-center font-heading text-base font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover sm:w-auto sm:text-lg"
          >
            <span>QUERO AS 300 ATIVIDADES</span>
            <Sparkles className="h-5 w-5" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center text-xs font-semibold text-navy-foreground/80 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-highlight" />
              Compra segura
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-cyan" />
              Acesso imediato
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              🛡️ Garantia incondicional de 7 dias
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};
