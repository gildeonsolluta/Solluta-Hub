import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-solluta-silver rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-solluta-steel rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solluta-navy/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-white/90 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
              Assessoria Financeira e Previdenciária
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-up drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
            Solluta: Consultoria Especializada para sua{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Liberdade Financeira</span>
            </span>{" "}
            e Direitos
          </h1>

          <p className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Transformamos complexidade em soluções claras. Nossa equipe de especialistas 
            está pronta para guiar você rumo à estabilidade financeira e garantir seus direitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              Consulta Gratuita
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "5.000+", label: "Clientes Atendidos" },
              { value: "98%", label: "Taxa de Sucesso" },
              { value: "5+", label: "Anos de Experiência" },
              { value: "24h", label: "Retorno Garantido" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
