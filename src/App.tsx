import React from 'react';
import { HeaderHero } from './components/HeaderHero';
import { HighlightsBar } from './components/HighlightsBar';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { MechanismSection } from './components/MechanismSection';
import { InsideLookSection } from './components/InsideLookSection';
import { ThemesSection } from './components/ThemesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileStickyCta } from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan/30 selection:text-foreground">
      {/* 1. Dobra Principal: Headline dominante, subheadline, benefícios, CTA e mockup */}
      <HeaderHero />

      {/* 2. Barra de destaques: 300 atividades, 4 bônus, vitalício, organizado, garantia */}
      <HighlightsBar />

      <main className="overflow-x-hidden">
        {/* 3. Seção de Dor: Rotina do professor, loop de preparação, pergunta de transição e Antes vs Depois */}
        <PainSection />

        {/* 4. Apresentação da Solução: Universo da Química e transformação Característica -> Benefício */}
        <SolutionSection />

        {/* 5. Mecanismo Central: "ESCOLHA. ABRA. APLIQUE." em 3 passos visuais */}
        <MechanismSection />

        {/* 6. Veja por Dentro: Páginas reais das atividades com zoom e detalhamento pedagógico */}
        <InsideLookSection />

        {/* 7. Organização dos Conteúdos: 8 temas essenciais para 1º, 2º e 3º ano do Ensino Médio */}
        <ThemesSection />

        {/* 8. Benefícios: Mais variedade com promessa secundária integrada */}
        <BenefitsSection />

        {/* 9. Os 4 Bônus Exclusivos com capas, utilidade pedagógica e valor percebido */}
        <BonusesSection />

        {/* 10. Prova Social: Os 21 depoimentos reais de professores da página original */}
        <TestimonialsSection />

        {/* 11. Ofertas e Preço: Pacote Básico (R$ 10,00) vs Pacote Completo (R$ 27,90) e matriz comparativa */}
        <PricingSection />

        {/* 12. Garantia incondicional de 7 dias com risco zero */}
        <GuaranteeSection />

        {/* 13. Perguntas Frequentes (FAQ) com respostas claras para as objeções */}
        <FaqSection />

        {/* 14. Chamada Final para Ação */}
        <FinalCtaSection />
      </main>

      {/* 15. Rodapé institucional com avisos legais e contatos */}
      <Footer />

      {/* 16. CTA Fixo Discreto no Mobile */}
      <MobileStickyCta />
    </div>
  );
}
