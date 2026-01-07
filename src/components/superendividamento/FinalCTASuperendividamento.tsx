import { MessageCircle, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASuperendividamento = () => {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/5521991249699?text=${encodeURIComponent("Olá, quero sair das dívidas!")}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-accent/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Equipe Especializada
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Pare de Fazer Acordos que Não Funcionam!
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            A Lei 14.181 foi feita para proteger você. Não confie em promessas
            vazias. Nossa equipe tem o conhecimento jurídico necessário para
            aplicar essa lei em seu favor, garantindo que o recomeço seja
            definitivo.{" "}
            <strong className="text-accent">
              Seu alívio financeiro começa aqui.
            </strong>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Processo 100% Legal</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm">+5.000 Clientes Atendidos</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <Button
              onClick={handleWhatsApp}
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-6"
            >
              <MessageCircle className="w-6 h-6 mr-2" fill="currentColor" />
              Quero Sair do Endividamento
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-6">
            Atendimento via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASuperendividamento;
