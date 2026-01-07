import { useState } from "react";
import { toast } from "sonner";
import { CalculatorFormSuperendividamento } from "./CalculatorFormSuperendividamento";
import { ResultsDisplaySuperendividamento } from "./ResultsDisplaySuperendividamento";
import ThemeToggle from "@/components/ThemeToggle";
import sollutaLogo from "@/assets/solluta-logo.png";
import { ArrowLeft } from "lucide-react";
import { LANDING_PAGES } from "@/config/landingPages";

interface CalculationResult {
  parcelaMaxima: number;
  dividaRevisada: number;
  desagio: number;
}

const MAX_INSTALLMENTS = 60;
const MAX_PERCENTAGE = 0.30;
const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycbw1IA9RCgYmbeZgo0wgZD6V-mhaaZ2SwO6W_zM4kbCZeUkKKL-MHv2f6h484e_GnVnimQ/exec";

export function SuperendividamentoCalculator() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateAndSave = async (data: { nome: string; renda: number; divida: number }) => {
    setIsLoading(true);
    setResult(null);

    try {
      const parcelaMaxima = data.renda * MAX_PERCENTAGE;
      const dividaRevisada = parcelaMaxima * MAX_INSTALLMENTS;
      const desagio = Math.max(0, data.divida - dividaRevisada);

      await fetch(GOOGLE_SHEETS_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tipo: "calculadora",
          nome: data.nome.trim(),
          parcelaRevisada: parcelaMaxima,
          desagio: desagio,
        }),
      });

      setResult({
        parcelaMaxima,
        dividaRevisada,
        desagio,
      });

      toast.success("Cálculo realizado e enviado para a planilha!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast.error("Erro ao enviar a proposta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-lg">
        {/* Back Link */}
        <a 
          href={LANDING_PAGES.SUPERENDIVIDAMENTO}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a Landing Page
        </a>

        {/* Card Container */}
        <div className="card-elevated p-6 md:p-8">
          {/* Header */}
          <header className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src={sollutaLogo}
                alt="Solluta Logo"
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-primary dark:text-accent">
              Plano de Pagamento de Dívidas
            </h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Lei do Superendividamento 14.181/2021
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              30% da renda líquida por 60 meses
            </p>
          </header>

          {/* Form */}
          <CalculatorFormSuperendividamento onCalculate={calculateAndSave} isLoading={isLoading} />

          {/* Results */}
          {result && (
            <div className="mt-8 pt-6 border-t border-border">
              <ResultsDisplaySuperendividamento
                parcelaMaxima={result.parcelaMaxima}
                dividaRevisada={result.dividaRevisada}
                desagio={result.desagio}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Solluta Soluções Financeiras. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
