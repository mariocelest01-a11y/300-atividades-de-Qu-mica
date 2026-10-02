import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { PREVIEW_ACTIVITIES, ActivityPreview } from '../data/content';
import { ActivityModal } from './ActivityModal';

export const InsideLookSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedActivity, setSelectedActivity] = useState<ActivityPreview | null>(null);
  const [filterYear, setFilterYear] = useState<string>('all');

  const scroll = (direction: number) => {
    if (scrollContainerRef.current) {
      const offset = direction * scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const filteredActivities = filterYear === 'all'
    ? PREVIEW_ACTIVITIES
    : filterYear === '1'
    ? PREVIEW_ACTIVITIES.filter(a => a.year.includes('1º'))
    : PREVIEW_ACTIVITIES.filter(a => a.year.includes('2º') || a.year.includes('3º'));

  return (
    <section className="bg-secondary px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/10 px-3.5 py-1 font-heading text-xs font-extrabold uppercase tracking-wider text-royal">
              <Eye className="h-3.5 w-3.5" />
              Transparência pedagógica
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Veja algumas das atividades que você vai encontrar <span className="text-mark">por dentro</span>
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Confira páginas reais das atividades incluídas no material. Toque em qualquer atividade para ampliar e ver detalhes.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              onClick={() => scroll(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted"
              aria-label="Ver páginas anteriores"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-muted"
              aria-label="Ver próximas páginas"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setFilterYear('all')}
            className={`rounded-full px-4 py-1.5 font-heading text-xs font-extrabold transition-colors ${
              filterYear === 'all'
                ? 'bg-royal text-white shadow-card'
                : 'bg-card text-muted-foreground border border-border hover:bg-muted/80'
            }`}
          >
            Todas as páginas reais (8 demonstrativas)
          </button>
          <button
            onClick={() => setFilterYear('1')}
            className={`rounded-full px-4 py-1.5 font-heading text-xs font-extrabold transition-colors ${
              filterYear === '1'
                ? 'bg-royal text-white shadow-card'
                : 'bg-card text-muted-foreground border border-border hover:bg-muted/80'
            }`}
          >
            1º Ano do Ensino Médio
          </button>
          <button
            onClick={() => setFilterYear('23')}
            className={`rounded-full px-4 py-1.5 font-heading text-xs font-extrabold transition-colors ${
              filterYear === '23'
                ? 'bg-royal text-white shadow-card'
                : 'bg-card text-muted-foreground border border-border hover:bg-muted/80'
            }`}
          >
            2º e 3º Ano do Ensino Médio
          </button>
        </div>

        {/* Carousel / Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {filteredActivities.map((act) => (
            <figure
              key={act.id}
              className="group w-[84vw] max-w-[22rem] shrink-0 snap-center sm:w-[46%] sm:max-w-none lg:w-[31%]"
            >
              <button
                type="button"
                onClick={() => setSelectedActivity(act)}
                className="h-auto w-full whitespace-normal p-0 text-left focus:outline-none"
                aria-label={`Ampliar atividade: ${act.title}`}
              >
                <div className="block w-full">
                  {/* Card Container */}
                  <div className="relative aspect-[7/10] overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-float">
                    
                    {/* Activity Number Badge */}
                    <span className="absolute left-4 top-4 z-20 rounded-md bg-royal px-2.5 py-1 font-heading text-xs font-extrabold text-white shadow-card">
                      #{act.number}
                    </span>

                    {/* Zoom Icon Button overlay */}
                    <span className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-royal shadow-card backdrop-blur-sm transition-transform duration-200 group-hover:scale-110">
                      <ZoomIn className="h-4 w-4" />
                    </span>

                    {/* Real Page Image */}
                    <div className="h-full w-full overflow-hidden rounded-xl bg-muted/20">
                      <img
                        src={act.src}
                        alt={act.alt}
                        width={900}
                        height={1260}
                        loading="lazy"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Caption & Title */}
                  <div className="mt-3 px-2 text-center">
                    <span className="inline-block rounded-full bg-royal/10 px-2.5 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-royal">
                      {act.topic}
                    </span>
                    <h3 className="mt-1 font-heading text-base font-extrabold text-foreground group-hover:text-royal transition-colors">
                      {act.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Toque para ver a atividade em detalhes
                    </p>
                  </div>
                </div>
              </button>
            </figure>
          ))}
        </div>

        {/* Mobile Swipe Indicators */}
        <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
          <button
            onClick={() => scroll(-1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground"
            aria-label="Ver página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-heading text-xs font-bold text-muted-foreground">
            Deslize para navegar pelas páginas reais
          </span>
          <button
            onClick={() => scroll(1)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground"
            aria-label="Ver próxima página"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Banner inside Preview */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-5 text-center shadow-card sm:p-6">
          <p className="font-heading text-sm font-extrabold text-foreground sm:text-base">
            Essas são apenas 8 amostras de um acervo total com <span className="text-royal">300 atividades completas</span>.
          </p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Tudo organizado em pastas temáticas para o 1º, 2º e 3º ano do Ensino Médio.
          </p>
        </div>

      </div>

      {/* Full Preview Modal */}
      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
};
