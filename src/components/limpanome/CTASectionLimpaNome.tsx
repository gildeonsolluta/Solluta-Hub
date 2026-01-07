import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield, Clock } from "lucide-react";

const CTASectionLimpaNome = () => {
  const benefits = [
    { icon: Shield, text: "Consultoria Gratuita" },
    { icon: Clock, text: "Resposta em 24h" },
    { icon: MessageCircle, text: "Atendimento Humanizado" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5521991249699?text=Olá, Quero limpar meu nome!", "_blank");
  };

  return (
    <section id="cta-final" className="py-24 md:py-32 bg-gradient-to-r from-solluta-medium to-solluta-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-primary-foreground/90 text-sm font-medium">
              Vagas Limitadas para Atendimento Esta Semana
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Chega de Restrições.{" "}
            <span className="text-accent">
              Tome o Controle
            </span>{" "}
            da Sua Vida!
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Clique no botão abaixo e descubra como a <strong className="text-primary-foreground">Solluta</strong> pode limpar seu nome e abrir as portas para um futuro com crédito.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <benefit.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 h-auto"
            size="lg"
          >
            Quero Falar com um Especialista
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Disclaimer */}
          <p className="mt-8 text-sm text-primary-foreground/50">
            Atendimento disponível de segunda a sexta, das 10h às 16h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASectionLimpaNome;
