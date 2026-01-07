import { Award, CheckCircle2, Target, Users } from "lucide-react";

const valores = [
  { icon: Target, label: "Foco em Resultados" },
  { icon: Users, label: "Compromisso com o Cliente" },
  { icon: Award, label: "Excelência Profissional" },
];

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Solluta
            </h2>
            
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Solluta</strong> nasceu com o propósito de transformar 
                a vida financeira de milhares de brasileiros. Somos uma empresa de consultoria especializada 
                em assessoria financeira e previdenciária, comprometida em oferecer soluções personalizadas 
                para cada cliente.
              </p>
              <p>
                Nossa equipe de <strong className="text-foreground">especialistas experientes</strong> trabalha 
                incansavelmente para garantir que você tenha acesso às melhores estratégias de regularização 
                de dívidas, recuperação de crédito e garantia de benefícios previdenciários.
              </p>
              <p>
                Acreditamos que todos merecem uma segunda chance financeira. Por isso, oferecemos um 
                atendimento <strong className="text-foreground">humanizado e transparente</strong>, 
                acompanhando cada etapa do processo até a conquista dos seus objetivos.
              </p>
            </div>

            {/* Checkmarks */}
            <div className="mt-8 space-y-3">
              {[
                "Atendimento personalizado para cada situação",
                "Consultores especializados em finanças e previdência",
                "Resultados comprovados por milhares de clientes",
                "Suporte contínuo durante todo o processo",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-body text-foreground/80 group-hover:text-foreground transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white shadow-solluta-lg hover:shadow-solluta-lg hover:shadow-glow transition-all duration-500">
              <h3 className="font-display text-2xl font-bold mb-6 text-white drop-shadow-md">
                Nossos Valores
              </h3>
              
              <div className="space-y-6">
                {valores.map((valor, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-solluta-sm">
                      <valor.icon className="w-6 h-6 text-white group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <span className="font-body text-lg font-medium text-white group-hover:text-white/95 transition-colors duration-300">{valor.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold mb-2 text-white drop-shadow-md">5+</p>
                  <p className="font-body text-white/90">
                    Anos transformando vidas financeiras
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
