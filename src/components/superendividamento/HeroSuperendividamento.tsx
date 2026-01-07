import { Shield, TrendingDown, Scale } from "lucide-react";

const HeroSuperendividamento = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute bottom-1/3 left-[10%] hidden lg:block icon-float" style={{ animationDelay: "1s" }}>
        <TrendingDown className="w-12 h-12 text-accent/20" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Lei 14.181 - Proteção Garantida
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Basta! Livre-se das Dívidas Impagáveis e{" "}
            <span className="text-accent">Preserve Seu Mínimo Existencial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Se suas contas ultrapassam sua capacidade de pagar, a Lei do
            Superendividamento (14.181) é a solução. A Solluta renegocia todas as
            suas dívidas em um só lugar, legalmente.
          </p>

          {/* Urgency Call */}
          <p className="text-base md:text-lg font-semibold text-accent mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Pare de se sacrificar! A lei garante seu direito de viver com
            dignidade enquanto você paga o que é justo.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={scrollToForm}
              className="btn-cta text-lg px-10 py-5 rounded-xl flex items-center gap-2"
            >
              Preencher Formulário e Calcular
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">100% Sigiloso</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <TrendingDown className="w-5 h-5 text-accent" />
              <span className="text-sm">Redução de até 90%</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Scale className="w-5 h-5 text-accent" />
              <span className="text-sm">Respaldo Jurídico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSuperendividamento;
