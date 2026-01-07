import { Search, Zap, CreditCard } from "lucide-react";

const StepsSectionLimpaNome = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análise Completa",
      description: "Verificamos seu caso e identificamos todas as irregularidades. Garantimos base legal correta para o sucesso.",
      gradient: "from-primary to-primary/70",
    },
    {
      number: "02",
      icon: Zap,
      title: "Ação Rápida de Desnegativação",
      description: "Entramos com medidas para limpar seu nome enquanto discutimos o valor real da dívida.",
      gradient: "from-accent to-accent/70",
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Crédito de Volta",
      description: "Com o nome limpo, você volta a ter poder de compra e pode realizar seus sonhos sem restrições.",
      gradient: "from-secondary to-secondary/70",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Processo Simplificado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Limpe Seu Nome em{" "}
            <span className="text-accent">3 Passos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Um processo transparente, eficiente e totalmente dentro da lei
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-border via-accent/30 to-border z-0" />
                )}

                {/* Card */}
                <div className="bg-card rounded-2xl border border-border/50 shadow-lg p-8 h-full relative overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Step number */}
                  <div className="absolute top-4 right-4 font-display text-6xl font-bold text-muted/20 group-hover:text-accent/20 transition-colors">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSectionLimpaNome;
