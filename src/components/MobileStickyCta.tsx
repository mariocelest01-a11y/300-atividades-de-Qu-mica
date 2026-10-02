import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the first 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleScrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-card/95 px-4 py-2.5 shadow-2xl backdrop-blur-md lg:hidden animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <div className="shrink-0 text-left">
          <p className="text-[0.62rem] font-bold uppercase tracking-wider text-muted-foreground">
            A partir de
          </p>
          <p className="font-heading text-lg font-extrabold leading-tight text-foreground">
            R$ 10,00
          </p>
        </div>

        <a
          href="#oferta"
          onClick={handleScrollToOffer}
          className="flex min-h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-cta px-4 py-2.5 text-center font-heading text-xs font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform active:scale-98"
        >
          <span>QUERO AS 300 ATIVIDADES</span>
          <Sparkles className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};
