import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, Shield, Heart, FileText, CheckCircle2, Zap, Eye, Award, MessageCircle, ClipboardCheck } from "lucide-react";
import sollutaLogo from "@/assets/solluta-logo.png";
import { Link } from "react-router-dom";

const Previdenciario = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5521991249699?text=Olá, gostaria de informações sobre benefícios previdenciários", "_blank");
  };

  const services = [
    { icon: Baby, title: "Salário Maternidade", description: "Auxílio para mães e pais, garantindo o recebimento rápido e integral durante o período de licença.", highlight: true },
    { icon: Shield, title: "Aposentadoria", description: "Planejamento completo para escolher a melhor regra e garantir o teto máximo do seu benefício." },
    { icon: Heart, title: "BPC/LOAS", description: "Assessoria para benefícios assistenciais de idosos e pessoas com deficiência." },
    { icon: FileText, title: "Outros Benefícios", description: "Auxílio-doença, pensão por morte e revisões de valores já concedidos." },
  ];

  const benefits = [
    { icon: CheckCircle2, title: "Zero Burocracia", description: "Eliminamos o estresse de lidar com papéis e exigências do INSS." },
    { icon: Award, title: "Análise Maximizada", description: "Nossa consultoria busca o melhor benefício, não apenas o primeiro." },
    { icon: Zap, title: "Agilidade e Transparência", description: "Processos claros e comunicação constante." },
    { icon: Eye, title: "Experiência Comprovada", description: "Focados em fazer o seu direito sair do papel e chegar à sua conta." },
  ];

  const steps = [
    { number: "01", icon: MessageCircle, title: "Contato e Avaliação Gratuita", description: "Você nos envia seu histórico e tiramos todas as suas dúvidas pelo WhatsApp." },
    { number: "02", icon: ClipboardCheck, title: "Planejamento Personalizado", description: "Nossa equipe prepara o processo e garante que toda a documentação esteja perfeita." },
    { number: "03", icon: CheckCircle2, title: "Concessão do Benefício", description: "Acompanhamos o processo até a aprovação e garantimos que o valor esteja correto." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 py-32 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Salário Maternidade: Garanta Seu Direito com a Solluta
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Não perca tempo com a burocracia do INSS. Somos sua assessoria especializada para garantir que você receba o salário maternidade de forma rápida e integral.
            </p>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-gradient-to-r from-solluta-medium to-solluta-dark">
              Quero Garantir Meu Benefício <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Nossos Principais Benefícios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border ${service.highlight ? 'border-accent' : 'border-border/50'}`}>
                <service.icon className={`w-12 h-12 mb-4 ${service.highlight ? 'text-accent' : 'text-primary'}`} />
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Por Que Contar com Nossa Assessoria?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50">
                <benefit.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">Receber Seu Benefício É Mais Simples do Que Parece</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-8 bg-card rounded-xl p-6 shadow-md border border-border/50">
                <div className="w-16 h-16 bg-gradient-to-r from-solluta-medium to-solluta-dark rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-secondary via-secondary to-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Seu Futuro não Pode Esperar. Fale Conosco Hoje!</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10">Não deixe seu direito ser negado. Clique no botão abaixo e tenha a tranquilidade de quem sabe que está sendo bem assessorado.</p>
            <Button onClick={handleWhatsAppClick} size="lg" className="bg-white text-primary hover:bg-white/90 shadow-2xl">
              <MessageCircle className="mr-2" /> Garantir Meu Benefício pelo WhatsApp!
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-4">
              <img src={sollutaLogo} alt="Solluta" className="h-12 w-auto" />
              <span className="font-display font-bold text-xl">Solluta</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm">© {new Date().getFullYear()} Solluta Soluções Financeiras. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button onClick={handleWhatsAppClick} className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all" aria-label="WhatsApp">
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default Previdenciario;
