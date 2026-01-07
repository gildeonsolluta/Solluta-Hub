import { XCircle, AlertTriangle, TrendingDown, Sparkles } from "lucide-react";

const PainSectionLimpaNome = () => {
  const painPoints = [
    {
      icon: XCircle,
      text: "Ter o pedido de crédito negado",
    },
    {
      icon: TrendingDown,
      text: "Não conseguir financiar um carro para a família",
    },
    {
      icon: AlertTriangle,
      text: "Oportunidades de emprego perdidas por restrições no CPF",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Entendemos sua dor
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Cansado de Viver com o{" "}
              <span className="text-destructive">Crédito Bloqueado?</span>
            </h2>
          </div>

          {/* Pain points card */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-center">
              Você sabe o quanto é <strong className="text-foreground">frustrante</strong>...
            </p>

            <div className="space-y-4 mb-10">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-destructive/5 border border-destructive/10 rounded-2xl transition-all duration-300 hover:bg-destructive/10 hover:border-destructive/20 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground text-lg font-medium">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-muted-foreground">
                Essa situação <strong className="text-foreground">não precisa ser permanente.</strong>
              </p>
            </div>
          </div>

          {/* Solution teaser */}
          <div className="bg-gradient-to-r from-solluta-medium to-solluta-dark rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
              </div>
              <p className="text-xl md:text-2xl font-display font-semibold text-primary-foreground leading-relaxed max-w-2xl mx-auto">
                A <span className="text-accent font-bold">Solluta</span> utiliza o caminho mais rápido para você{" "}
                <span className="underline decoration-accent decoration-2 underline-offset-4">
                  sair do vermelho e voltar ao azul!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSectionLimpaNome;
