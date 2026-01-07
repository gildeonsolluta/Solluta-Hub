import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import sollutaLogo from "@/assets/solluta-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solluta-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-solluta-steel rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-solluta-silver rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={sollutaLogo} alt="Solluta Logo" className="h-12 w-12 object-contain" />
              <span className="font-display text-3xl font-bold">Solluta</span>
            </div>
            <p className="font-body text-white max-w-md leading-relaxed">
              Consultoria especializada em assessoria financeira e previdenciária. 
              Transformando vidas através de soluções personalizadas e atendimento humanizado.
            </p>
          </div>

          {/* Links Rápidos e Contatos */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Links Rápidos */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-6">Links Rápidos</h4>
                <ul className="space-y-3">
                  {[
                    { href: "#inicio", label: "Início" },
                    { href: "#diferenciais", label: "Diferenciais" },
                    { href: "#servicos", label: "Serviços" },
                    { href: "#sobre", label: "Sobre Nós" },
                    { href: "#faq", label: "FAQ" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-body text-white/90 hover:text-white transition-all duration-300 relative group inline-block"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contatos */}
              <div>
                <h4 className="font-display text-lg font-semibold mb-6">Contato</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3 group">
                    <Phone className="w-5 h-5 mt-0.5 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <div className="font-body text-white/90 group-hover:text-white transition-colors duration-300">
                      <span className="block font-medium">(21) 99124-9699</span>
                      <span className="block text-sm text-white/70">Seg - Sex, 10h às 16h</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <Mail className="w-5 h-5 mt-0.5 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <a 
                      href="mailto:sollutasolucoesfinanceiras@gmail.com"
                      className="font-body text-white/90 group-hover:text-white transition-colors duration-300 break-words hover:underline"
                    >
                      sollutasolucoesfinanceiras@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <MapPin className="w-5 h-5 mt-0.5 text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="font-body text-white/90 group-hover:text-white transition-colors duration-300">
                      Rio de Janeiro, RJ - Brasil
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-10 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-white">
              © {currentYear} Solluta Soluções Financeiras. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/politica-de-privacidade" className="font-body text-sm text-white/80 hover:text-white transition-all duration-300 relative group">
                Política de Privacidade
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/termos-de-uso" className="font-body text-sm text-white/80 hover:text-white transition-all duration-300 relative group">
                Termos de Uso
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
