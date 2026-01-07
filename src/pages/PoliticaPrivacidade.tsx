import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: Eye,
      title: "Quais dados coletamos?",
      content: "Quando você preenche nossos formulários ou nos chama no WhatsApp, coletamos dados como seu nome, CPF, e-mail e telefone."
    },
    {
      icon: FileText,
      title: "Para que usamos seus dados?",
      content: "Usamos essas informações exclusivamente para:",
      list: [
        "Entrar em contato com você para oferecer a consultoria solicitada.",
        "Realizar os cálculos iniciais em nossas calculadoras de dívidas e juros.",
        "Enviar atualizações sobre o seu atendimento."
      ]
    },
    {
      icon: Lock,
      title: "Segurança e Confiança",
      content: "Seus dados são armazenados em ambiente seguro e nunca são vendidos ou compartilhados com terceiros para fins publicitários. Seguimos rigorosamente as normas de proteção de dados (LGPD)."
    },
    {
      icon: UserCheck,
      title: "Seus Direitos",
      content: "A qualquer momento, você pode solicitar a exclusão dos seus dados de nossa base de contatos. Basta nos enviar uma mensagem."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-solluta-navy via-solluta-blue to-solluta-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-solluta-blue/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-solluta-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-solluta-lightBlue/10 rounded-full blur-3xl" />
        
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
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
              Política de Privacidade
            </h1>
          </div>
          
          <p className="text-xl text-white/80 max-w-2xl">
            Na Solluta, a sua privacidade é nossa prioridade.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction Card */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              Como cuidamos dos seus dados na Solluta
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Esta política explica como tratamos as informações que você compartilha conosco ao buscar nossa assessoria. Estamos comprometidos em proteger sua privacidade em todas as etapas.
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-solluta-blue/30"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-solluta-blue/10 rounded-xl group-hover:bg-solluta-blue/20 transition-colors">
                    <section.icon className="w-6 h-6 text-solluta-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 font-display">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="mt-4 space-y-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-solluta-blue mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LGPD Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-green-500/10 text-green-700 dark:text-green-400 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Em conformidade com a LGPD</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
