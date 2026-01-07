import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Calculator, CheckCircle, Copyright, MessageSquare, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: FileText,
      title: "Finalidade do Site",
      content: "Este site é uma plataforma de divulgação da nossa assessoria financeira e previdenciária. As informações aqui contidas servem como guia informativo e não substituem uma análise personalizada do seu caso."
    },
    {
      icon: Calculator,
      title: "Uso das Calculadoras",
      content: "Nossas calculadoras de juros e superendividamento fornecem estimativas baseadas nos dados que você insere. O resultado final e a estratégia de assessoria serão confirmados após análise dos documentos por nossos especialistas."
    },
    {
      icon: CheckCircle,
      title: "Precisão das Informações",
      content: "Ao preencher cadastros, você se compromete a fornecer informações verdadeiras para que nossa equipe possa realizar o diagnóstico correto da sua situação."
    },
    {
      icon: Copyright,
      title: "Propriedade Intelectual",
      content: "Todo o conteúdo deste site (textos, logotipos e design) pertence à Solluta e não pode ser copiado ou utilizado sem autorização."
    },
    {
      icon: MessageSquare,
      title: "Atendimento",
      content: "Nosso contato principal é realizado via WhatsApp ou e-mail, sempre prezando pela transparência e ética profissional."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-solluta-navy via-solluta-blue to-solluta-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-solluta-lightBlue/20 via-transparent to-transparent" />
        <div className="absolute top-10 left-20 w-80 h-80 bg-solluta-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-solluta-lightBlue/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
              Termos de Uso
            </h1>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl">
            Regras e condições para utilização do site Solluta.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction Card */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              Regras de uso do site Solluta
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ao navegar em nosso site e utilizar nossos serviços de consultoria, você concorda com as seguintes condições. Leia atentamente cada seção abaixo.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-solluta-blue/30"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-solluta-blue/10 rounded-xl group-hover:bg-solluta-blue/20 transition-colors flex-shrink-0">
                    <section.icon className="w-6 h-6 text-solluta-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-medium text-solluta-blue bg-solluta-blue/10 px-3 py-1 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground font-display">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Notice */}
          <div className="mt-12 bg-solluta-navy/5 dark:bg-solluta-navy/20 border border-solluta-navy/10 dark:border-solluta-navy/30 rounded-2xl p-8 text-center">
            <Scale className="w-10 h-10 text-solluta-blue mx-auto mb-4" />
            <p className="text-foreground font-medium text-lg">
              Ao utilizar nossos serviços, você declara estar de acordo com estes termos.
            </p>
            <p className="text-muted-foreground mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermosUso;
