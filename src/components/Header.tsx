import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import sollutaLogo from "@/assets/solluta-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-lg shadow-solluta-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={sollutaLogo} alt="Solluta Logo" className="h-10 w-10 object-contain" />
            <span className={`font-display text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              Solluta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className={`font-body text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant={isScrolled ? "default" : "hero"} 
              size="sm"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className={`p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/20 animate-fade-in bg-card/98 backdrop-blur-lg rounded-b-lg shadow-solluta-md">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-body text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/5 transition-all duration-300 py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={`/${link.href}`}
                    className="font-body text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/5 transition-all duration-300 py-3 px-4 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button variant="default" size="sm" className="mt-2 mx-4">
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
