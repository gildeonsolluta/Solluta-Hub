import sollutaLogo from "@/assets/solluta-logo.png";
import { Link } from "react-router-dom";

const FooterLimpaNome = () => {
  return (
    <footer className="bg-primary py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={sollutaLogo}
              alt="Solluta"
              className="w-12 h-12 object-contain"
            />
            <span className="font-display text-2xl font-bold text-primary-foreground">
              Solluta
            </span>
          </Link>

          {/* Legal text */}
          <p className="text-primary-foreground/60 text-sm text-center md:text-right max-w-md">
            Solluta Soluções Financeiras © {new Date().getFullYear()}. Todos os direitos reservados.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="text-primary-foreground/40 text-xs text-center">
            Este site não constitui promessa de resultado. Cada caso é analisado individualmente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLimpaNome;
