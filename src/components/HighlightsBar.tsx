import React from 'react';

export const HighlightsBar: React.FC = () => {
  const items = [
    {
      icon: '🧪',
      title: '300 Atividades',
      text: 'Material completo de Química para o Ensino Médio',
    },
    {
      icon: '🎁',
      title: '4 Bônus Exclusivos',
      text: 'Recursos pedagógicos extras incluídos',
    },
    {
      icon: '♾️',
      title: 'Acesso Vitalício',
      text: 'Compre uma vez e consulte quando quiser',
    },
    {
      icon: '📚',
      title: 'Organizado por Temas',
      text: 'Encontre rapidamente o conteúdo da aula',
    },
    {
      icon: '🛡️',
      title: 'Garantia de 7 Dias',
      text: 'Compra 100% protegida e sem riscos',
    },
  ];

  return (
    <div className="border-b border-border bg-secondary px-5 py-5 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 lg:flex-col lg:items-center lg:text-center ${
              index === items.length - 1 ? 'col-span-2 sm:col-span-1' : ''
            }`}
          >
            <span className="text-2xl leading-none" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <p className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                {item.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
