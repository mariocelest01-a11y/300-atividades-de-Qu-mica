import React, { useEffect } from 'react';
import { X, ZoomIn, CheckCircle, BookOpen, Layers } from 'lucide-react';
import { ActivityPreview } from '../data/content';

interface ActivityModalProps {
  activity: ActivityPreview | null;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  useEffect(() => {
    if (!activity) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activity, onClose]);

  if (!activity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-card shadow-2xl transition-all">
        
        {/* Header Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-border bg-secondary/80 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-royal font-heading text-xs font-extrabold text-white">
              {activity.number}
            </span>
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-royal">
                Página real do material • {activity.year}
              </span>
              <h3 id="activity-modal-title" className="font-heading text-lg font-extrabold text-foreground sm:text-xl">
                {activity.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground focus:outline-none"
            aria-label="Fechar prévia"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            
            {/* Real Page Image */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-2 shadow-inner">
              <img
                src={activity.src}
                alt={activity.alt}
                width={900}
                height={1260}
                className="mx-auto h-auto max-h-[68vh] w-full rounded-xl object-contain shadow-card"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.failed) {
                    img.dataset.failed = 'true';
                    img.src = `https://universodaquimica.lovable.app${activity.src.replace('/assets/', '/__l5e/assets-v1/')}`;
                  }
                }}
              />
              <div className="mt-2 text-center text-xs text-muted-foreground">
                🔎 Formato de impressão nítido em alta resolução
              </div>
            </div>

            {/* Pedagogical Details */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                <span className="text-xs font-bold uppercase tracking-wide text-royal">
                  Tema Curricular
                </span>
                <p className="mt-0.5 font-heading text-base font-extrabold text-foreground">
                  {activity.topic}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Habilidade BNCC: <strong className="text-foreground">{activity.skillsBNCC}</strong>
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-extrabold text-foreground">
                  Proposta Pedagógica:
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-extrabold text-foreground">
                  Como você pode aplicar:
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {activity.howToUse}
                </p>
              </div>

              <div className="rounded-2xl border border-cta/30 bg-cta/10 p-4 text-xs font-medium text-foreground">
                <span className="font-bold text-cta">✓ Pronto para usar:</span> Você recebe o arquivo diagramado pronto para abrir, projetar ou imprimir conforme o planejamento da semana.
              </div>

              <div className="pt-2">
                <a
                  href="#oferta"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-cta py-3 font-heading text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta hover:bg-cta-hover transition-colors"
                >
                  <span>Garantir esta e mais 299 atividades</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
