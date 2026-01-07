import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Compass } from "lucide-react";
import sollutaLogo from "@/assets/solluta-logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const HeroLimpaNome = () => {
  const scrollToContact = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-solluta-light/20 via-background to-solluta-medium/10" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-8">
                <Compass className="w-4 h-4 text-accent" />
                <span className="text-foreground/80 text-sm font-medium">
                  Assessoria Financeira Especializada
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                Nome Limpo,{" "}
                <span className="text-accent">Vida Nova</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Chega de portas fechadas. A <strong className="text-foreground">Solluta</strong> tem o caminho legal para remover restrições do seu CPF e devolver sua liberdade financeira.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                {["100% Legal", "Resultados Rápidos", "Atendimento Humanizado"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/70">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={scrollToContact}
                  className="group bg-gradient-to-r from-solluta-medium to-solluta-dark hover:from-solluta-dark hover:to-solluta-medium text-primary-foreground"
                  size="lg"
                >
                  Quero Limpar Meu Nome
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Logo/Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-75" />

                {/* Logo container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                  <img
                    src={sollutaLogo}
                    alt="Solluta - Assessoria Financeira"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">500+ clientes atendidos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLimpaNome;
