import SollutaLogoSuperendividamento from "./SollutaLogoSuperendividamento";
import { Shield } from "lucide-react";

const FooterSuperendividamento = () => {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-background/10 p-2 rounded-lg">
              <SollutaLogoSuperendividamento className="[&>span]:text-primary-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Shield className="w-4 h-4" />
            <span>Lei 14.181 - Proteção ao Consumidor Superendividado</span>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Solluta Soluções Financeiras. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            Este site não é uma oferta de crédito. Consultoria Financeira
            especializada em renegociação de dívidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSuperendividamento;
