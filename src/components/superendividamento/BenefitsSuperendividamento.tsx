import { Users, Calculator, PhoneOff, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Negociação Única",
    description:
      "Acabamos com a confusão! Reunimos todas as suas dívidas (cartão de crédito, cheque especial, empréstimos) em um único processo judicial.",
  },
  {
    icon: Calculator,
    title: "Plano de Pagamento Justo",
    description:
      "Criamos um plano que realmente cabe no seu orçamento, preservando o valor mínimo que você precisa para despesas básicas (moradia, saúde, alimentação).",
  },
  {
    icon: PhoneOff,
    title: "Fim das Cobranças Agressivas",
    description:
      "Uma vez iniciado o processo, as ligações e pressões dos credores são suspensas, dando a você a paz necessária para recomeçar.",
  },
];

const BenefitsSuperendividamento = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            O Que a Solluta Faz por Você com a Lei do Superendividamento?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe especializada aplica a Lei 14.181 em seu favor,
            garantindo proteção legal e um recomeço financeiro digno.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-accent font-medium">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Garantido por Lei</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSuperendividamento;
