import React, { useRef } from 'react';
import { Star, MessageCircle, Instagram, Facebook, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const offset = direction * scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const getSourceIcon = (source: TestimonialItem['source']) => {
    switch (source) {
      case 'WhatsApp':
        return {
          icon: MessageCircle,
          color: 'text-cta',
          bg: 'bg-cta/10',
          label: 'WhatsApp',
        };
      case 'Instagram':
        return {
          icon: Instagram,
          color: 'text-royal',
          bg: 'bg-royal/10',
          label: 'Instagram',
        };
      case 'Facebook':
        return {
          icon: Facebook,
          color: 'text-blue-600',
          bg: 'bg-blue-500/10',
          label: 'Facebook',
        };
    }
  };

  return (
    <section className="bg-secondary/60 px-5 py-14 sm:px-8 sm:py-20 border-y border-border">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cta/15 px-3.5 py-1 font-heading text-xs font-extrabold uppercase tracking-wider text-cta">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Depoimentos reais de quem usa
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              +1.541 professores <span className="text-mark">transformaram suas aulas</span>
            </h2>

            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Veja o que professores de Química de todo o Brasil dizem sobre a praticidade e a organização do material.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted"
              aria-label="Ver depoimentos anteriores"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted"
              aria-label="Ver próximos depoimentos"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Testimonials Slider */}
        <div
          ref={scrollRef}
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {TESTIMONIALS.map((t, idx) => {
            const badge = getSourceIcon(t.source);
            const Icon = badge.icon;
            return (
              <article
                key={idx}
                className="flex w-[85vw] max-w-[340px] shrink-0 snap-center flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float sm:w-[320px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`grid h-8 w-8 place-items-center rounded-full ${badge.bg}`}>
                        <Icon className={`h-4 w-4 ${badge.color}`} />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {badge.label}
                      </span>
                    </div>

                    {/* 5 Stars */}
                    <div className="flex gap-0.5" aria-label="Avaliação de 5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-highlight text-highlight"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="mt-4 text-sm font-medium leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-border pt-3">
                  <p className="font-heading text-sm font-extrabold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile helper */}
        <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
          <button
            onClick={() => scroll(-1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground"
            aria-label="Ver anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-heading text-xs font-bold text-muted-foreground">
            Deslize para ver os {TESTIMONIALS.length} relatos reais
          </span>
          <button
            onClick={() => scroll(1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground"
            aria-label="Ver próximo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-6 text-center text-xs font-bold text-muted-foreground">
          Depoimentos verificados de professores que utilizam o Universo da Química.
        </p>

      </div>
    </section>
  );
};
