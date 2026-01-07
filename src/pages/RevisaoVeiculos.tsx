import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Car, FileSearch, Scale, TrendingDown, ShieldCheck, MessageCircle, Users, Award } from "lucide-react";
import sollutaLogo from "@/assets/solluta-logo.png";
import { Link } from "react-router-dom";

const RevisaoVeiculos = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5521991249699?text=Olá! Quero falar com um especialista sobre a proteção do meu veículo.", "_blank");
  };

  const steps = [
    { icon: FileSearch, number: "1", title: "Análise do Contrato", description: "Verificamos se há juros e tarifas ilegais em seu financiamento." },
    { icon: Scale, number: "2", title: "Defesa Imediata", description: "Entramos com a ação necessária para reverter a cobrança abusiva." },
    { icon: TrendingDown, number: "3", title: "Redução da Parcela", description: "Com a revisão, o valor real da sua dívida é estabelecido." },
    { icon: ShieldCheck, number: "4", title: "Seu Veículo Protegido", description: "Você continua usando seu carro enquanto discutimos o valor justo." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={sollutaLogo} alt="Solluta" className="h-12 w-auto" />
            <span className="font-display font-bold text-xl text-primary">Solluta</span>
          </Link>
          <span className="hidden sm:block text-sm text-muted-foreground">Atendimento 24h para urgências</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen bg-background overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_hsl(var(--primary))_0%,_transparent_50%)]" />
        </div>
        <div className="container relative z-10 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold animate-pulse mb-6">
              <AlertTriangle className="w-4 h-4" />
              ALERTA MÁXIMO
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-primary leading-tight mb-6">
              Seu Carro ou Moto Corre Risco?{" "}
              <span className="text-accent">Bloqueie a Busca e Apreensão HOJE!</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              Recebeu intimação ou está com parcelas atrasadas? Nossa equipe jurídica é especializada em proteger seu veículo e reduzir suas parcelas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-accent" /><span>Proteção Imediata</span></div>
              <div className="flex items-center gap-2"><Car className="w-5 h-5 text-accent" /><span>Continue Usando Seu Veículo</span></div>
            </div>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-gradient-to-r from-solluta-medium to-solluta-dark text-lg px-8 py-6 h-auto">
              <MessageCircle className="mr-2" /> Proteger Meu Veículo Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Defense Steps */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Nosso Plano de Defesa Contra a Busca e Apreensão
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para proteger você e seu veículo
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50">
                <div className="w-12 h-12 bg-gradient-to-r from-solluta-medium to-solluta-dark rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-solluta-medium to-solluta-dark text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">
              Você Não Está Sozinho Contra os Bancos.
            </h2>
            <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
              A Solluta tem a experiência necessária para enfrentar as financeiras e garantir que você pague apenas o que é devido, <strong>mantendo seu veículo</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-8 py-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 opacity-80" />
                <span className="font-bold">+500 Veículos Salvos</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 opacity-80" />
                <span className="font-bold">Equipe Especializada</span>
              </div>
            </div>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto">
              <MessageCircle className="mr-2" /> Falar com Especialista Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-solluta-medium to-solluta-dark text-primary-foreground py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={sollutaLogo} alt="Solluta" className="h-10 w-auto" />
              <span className="font-display font-bold text-lg">Solluta</span>
            </Link>
            <p className="text-sm opacity-80 text-center">© {new Date().getFullYear()} Solluta Soluções Financeiras. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a href={`https://wa.me/+5521991249699?text=${encodeURIComponent("Olá! Preciso de ajuda urgente para proteger meu veículo.")}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-6 rounded-full shadow-xl hover:-translate-y-1 transition-all" aria-label="WhatsApp">
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">Entre Em Contato</span>
      </a>
    </div>
  );
};

export default RevisaoVeiculos;
