import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como a Solluta ajuda a limpar meu nome?",
    answer:
      "Nós mapeamos suas pendências no SPC e Serasa e utilizamos mecanismos legais para remover as restrições do seu nome, separando o seu direito de ter crédito da negociação do débito.",
  },
  {
    question: "O que é a Lei do Superendividamento?",
    answer:
      "A Lei do Superendividamento força os credores a aceitarem propostas justas. Através dela, a Solluta conquista descontos de até 70% e prazos de pagamento de até 5 anos (60x) para você quitar tudo com dignidade.",
  },
  {
    question: "Posso perder meu carro se as parcelas estiverem atrasadas?",
    answer:
      "Existe o risco, mas nossa consultoria atua na revisão das taxas abusivas para equilibrar o contrato e evitar a perda do bem.",
  },
  {
    question: "Quanto tempo demora para sair um benefício do INSS?",
    answer:
      "O tempo varia, mas nossa assessoria agiliza a documentação para que o processo seja o mais rápido possível e com o valor correto.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Tire suas dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-solluta-sm data-[state=open]:shadow-solluta-md data-[state=open]:border-accent/40 transition-all duration-300 hover:shadow-solluta-md hover:border-accent/30 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="font-body text-left font-semibold text-foreground hover:text-accent py-5 hover:no-underline transition-colors duration-300 data-[state=open]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed data-[state=open]:text-foreground/90 transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
