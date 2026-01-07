import { Eye, Heart, ShieldCheck } from "lucide-react";

const diferenciais = [
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "Clareza em cada etapa do processo. Você sempre saberá exatamente o que está acontecendo com seu caso e quais são os próximos passos.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança Consolidada",
    description:
      "Anos de experiência e milhares de casos resolvidos com sucesso. Nossa reputação é construída sobre resultados concretos.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Entendemos que cada cliente é único. Oferecemos suporte personalizado e acolhedor em todas as etapas da sua jornada.",
  },
];

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Por que escolher a Solluta
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência em cada detalhe do nosso atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl shadow-solluta-sm hover:shadow-solluta-lg transition-all duration-300 border border-border/50 hover:border-accent/40 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-accent/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-300 group-hover:scale-105 shadow-solluta-sm">
                  <item.icon className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-105" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
