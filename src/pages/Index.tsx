import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Servicos />
        <Sobre />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
