import { CreditCard, Car, FileText, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LANDING_PAGES } from "@/config/landingPages";

const servicos = [
  {
    icon: CreditCard,
    title: "Limpa Nome",
    description:
      "Regularize sua situação cadastral e recupere seu crédito. Negociamos diretamente com credores para encontrar as melhores condições de quitação.",
    features: ["Análise completa de dívidas", "Garantia 1 ano de proteção", "Acompanhamento integral"],
    link: LANDING_PAGES.LIMPA_NOME,
    external: false,
  },
  {
    icon: FileText,
    title: "Superendividamento",
    description:
      "Soluções personalizadas para reorganizar suas finanças e sair do ciclo de endividamento com planejamento estratégico.",
    features: ["Plano de pagamento viável", "Unificação de todas as dívidas", "Educação financeira"],
    link: LANDING_PAGES.SUPERENDIVIDAMENTO,
    external: false,
  },
  {
    icon: Car,
    title: "Revisão de Veículos",
    description:
      "Análise detalhada de contratos de financiamento veicular para identificar cobranças indevidas e reduzir parcelas.",
    features: ["Revisão contratual", "Identificação de abusos", "Redução de parcelas"],
    link: LANDING_PAGES.BUSCA_E_APREENSAO,
    external: false,
  },
  {
    icon: Users,
    title: "Assessoria Previdenciária",
    description:
      "Orientação completa sobre aposentadoria, benefícios do INSS e planejamento previdenciário para garantir seus direitos.",
    features: ["Cálculo de benefícios", "Planejamento de aposentadoria", "Recursos administrativos"],
    link: LANDING_PAGES.PREVIDENCIARIO,
    external: false,
  },
];

const Servicos = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            O que oferecemos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções especializadas para cada necessidade financeira e previdenciária
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-solluta-sm hover:shadow-solluta-lg transition-all duration-500 border border-border/50 hover:border-accent/40 hover:-translate-y-2 flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-solluta-sm group-hover:shadow-solluta-md group-hover:scale-110 transition-all duration-300">
                    <servico.icon className="w-7 h-7 text-primary-foreground group-hover:rotate-6 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {servico.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {servico.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {servico.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {servico.link ? (
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-2 hover:border-accent hover:bg-accent/5" 
                    asChild
                  >
                    {servico.external ? (
                      <a href={servico.link} target="_blank" rel="noopener noreferrer">
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                      </a>
                    ) : (
                      <Link to={servico.link}>
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                      </Link>
                    )}
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full group/btn border-2 hover:border-accent hover:bg-accent/5">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
