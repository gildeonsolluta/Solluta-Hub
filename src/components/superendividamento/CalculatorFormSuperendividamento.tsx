import { useState } from "react";
import { User, Wallet } from "lucide-react";

interface CalculatorFormProps {
  onCalculate: (data: { nome: string; renda: number; divida: number }) => void;
  isLoading: boolean;
}

export function CalculatorFormSuperendividamento({ onCalculate, isLoading }: CalculatorFormProps) {
  const [nome, setNome] = useState(() => {
    return localStorage.getItem("superendividamento_form_nome") || "";
  });
  const [renda, setRenda] = useState("");
  const [divida, setDivida] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rendaLimpa = renda.replace(/\./g, "").replace(",", ".");
    const rendaNum = parseFloat(rendaLimpa);
    const dividaNum = parseFloat(divida) || 0;

    if (nome.trim() && rendaNum > 0) {
      onCalculate({ nome: nome.trim(), renda: rendaNum, divida: dividaNum });
    }
  };

  const formatCurrencyInput = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (!numbers) return "";

    if (numbers.length === 1) {
      return `0,0${numbers}`;
    }

    if (numbers.length === 2) {
      return `0,${numbers}`;
    }

    const centavos = numbers.slice(-2);
    const inteiros = numbers.slice(0, -2);
    const inteirosLimpos = inteiros.replace(/^0+/, "") || "0";

    if (inteirosLimpos === "0" && centavos !== "00") {
      return `0,${centavos}`;
    }

    const formattedInteiros = inteirosLimpos
      .split("")
      .reverse()
      .reduce((acc, digit, index) => {
        if (index > 0 && index % 3 === 0) {
          return digit + "." + acc;
        }
        return digit + acc;
      }, "");

    return `${formattedInteiros},${centavos}`;
  };

  const handleRendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value);
    setRenda(formatted);
  };

  const isRendaValid = () => {
    if (!renda) return false;
    const rendaLimpa = renda.replace(/\./g, "").replace(",", ".");
    const rendaNum = parseFloat(rendaLimpa);
    return rendaNum > 0;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Nome */}
      <div className="space-y-2">
        <label
          htmlFor="nome"
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <User className="w-4 h-4 text-primary dark:text-accent" />
          Nome Completo
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          className="input-styled"
          required
        />
      </div>

      {/* Renda */}
      <div className="space-y-2">
        <label
          htmlFor="renda"
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <Wallet className="w-4 h-4 text-primary dark:text-accent" />
          Renda Líquida Mensal
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
            R$
          </span>
          <input
            type="text"
            id="renda"
            value={renda}
            onChange={handleRendaChange}
            placeholder="5.000,00"
            className="input-styled pl-12"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !nome.trim() || !isRendaValid()}
        className="btn-primary mt-6"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12" cy="12" r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Calculando...
          </span>
        ) : (
          "Calcular e Salvar Proposta"
        )}
      </button>
    </form>
  );
}
