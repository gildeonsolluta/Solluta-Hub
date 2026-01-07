import HeaderSuperendividamento from "@/components/superendividamento/HeaderSuperendividamento";
import HeroSuperendividamento from "@/components/superendividamento/HeroSuperendividamento";
import BenefitsSuperendividamento from "@/components/superendividamento/BenefitsSuperendividamento";
import LeadFormSuperendividamento from "@/components/superendividamento/LeadFormSuperendividamento";
import FinalCTASuperendividamento from "@/components/superendividamento/FinalCTASuperendividamento";
import FooterSuperendividamento from "@/components/superendividamento/FooterSuperendividamento";
import WhatsAppButtonSuperendividamento from "@/components/superendividamento/WhatsAppButtonSuperendividamento";

const Superendividamento = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderSuperendividamento />
      <main className="pt-16">
        <HeroSuperendividamento />
        <LeadFormSuperendividamento />
        <BenefitsSuperendividamento />
        <FinalCTASuperendividamento />
      </main>
      <FooterSuperendividamento />
      <WhatsAppButtonSuperendividamento />
    </div>
  );
};

export default Superendividamento;
