import HeroLimpaNome from "@/components/limpanome/HeroLimpaNome";
import PainSectionLimpaNome from "@/components/limpanome/PainSectionLimpaNome";
import StepsSectionLimpaNome from "@/components/limpanome/StepsSectionLimpaNome";
import AuthoritySectionLimpaNome from "@/components/limpanome/AuthoritySectionLimpaNome";
import CTASectionLimpaNome from "@/components/limpanome/CTASectionLimpaNome";
import FooterLimpaNome from "@/components/limpanome/FooterLimpaNome";
import WhatsAppButtonLimpaNome from "@/components/limpanome/WhatsAppButtonLimpaNome";

const LimpaNome = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroLimpaNome />
        <PainSectionLimpaNome />
        <StepsSectionLimpaNome />
        <AuthoritySectionLimpaNome />
        <CTASectionLimpaNome />
      </main>
      <FooterLimpaNome />
      <WhatsAppButtonLimpaNome />
    </div>
  );
};

export default LimpaNome;
