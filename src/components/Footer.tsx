import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy px-5 pb-28 pt-14 text-navy-foreground sm:px-8 lg:pb-14">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Brand & info */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">🧪</span>
            <p className="font-heading text-xl font-extrabold tracking-tight text-white">
              Universo da Química
            </p>
          </div>

          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-navy-foreground/75">
            Produto digital educacional desenvolvido para apoiar professores de Química do Ensino Médio no planejamento, variedade de dinâmicas e na aplicação de atividades curriculares.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-navy-foreground/65">
            <a
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors"
            >
              Garantir Material
            </a>
            <span>•</span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Política de Privacidade
            </span>
            <span>•</span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Termos de Uso
            </span>
            <span>•</span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Contato & Suporte ao Professor
            </span>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-navy-foreground/50">
          <p>
            © {new Date().getFullYear()} Universo da Química. Todos os direitos reservados. Material digital educacional. Resultados de aprendizagem variam conforme contexto, aplicação e perfil pedagógico de cada turma.
          </p>
          <p className="mt-1.5 text-[0.68rem] text-navy-foreground/40">
            Este site não possui vínculo institucional direto com a Meta (Facebook/Instagram). As marcas citadas são de propriedade de seus respectivos titulares.
          </p>
        </div>

      </div>
    </footer>
  );
};
