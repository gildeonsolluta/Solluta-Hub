import SollutaLogoSuperendividamento from "./SollutaLogoSuperendividamento";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const HeaderSuperendividamento = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/">
          <SollutaLogoSuperendividamento />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default HeaderSuperendividamento;
