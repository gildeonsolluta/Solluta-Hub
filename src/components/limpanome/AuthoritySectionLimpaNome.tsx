import { Award, Users, Eye, CheckCircle } from "lucide-react";

const AuthoritySectionLimpaNome = () => {
  const features = [
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de atuação focada em Assessoria Financeira e Previdenciária.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Seu caso é único, e o tratamento também. Foco total em sua recuperação.",
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Você acompanha cada passo do processo, sem surpresas.",
    },
  ];

  const stats = [
    { number: "500+", label: "Clientes Atendidos" },
    { number: "93%", label: "Taxa de Sucesso" },
    { number: "48h", label: "Tempo de Resposta" },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Por que escolher a Solluta
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Resultados{" "}
            <span className="text-accent">Falam por Nós</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-solluta-medium to-solluta-dark rounded-3xl p-8 md:p-10 mb-16 max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/70 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border/50 shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["Processo 100% Legal", "Sigilo Absoluto", "Sem Taxas Ocultas"].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 px-5 py-3 rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-foreground font-medium text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySectionLimpaNome;
