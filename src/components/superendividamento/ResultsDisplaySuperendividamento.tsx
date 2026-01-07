import { CheckCircle, TrendingDown, Calculator, AlertTriangle } from "lucide-react";

interface ResultsDisplayProps {
  parcelaMaxima: number;
  dividaRevisada: number;
  desagio: number;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export function ResultsDisplaySuperendividamento({
  parcelaMaxima,
  dividaRevisada,
  desagio,
}: ResultsDisplayProps) {
  return (
    <div className="animate-slide-up space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-primary dark:text-accent" />
        <h2 className="text-lg font-bold text-foreground">
          Resultado da Proposta de Repactuação
        </h2>
      </div>

      {/* Parcela Máxima */}
      <div className="result-card-success">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-green-500/20">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">
              Parcela Máxima Mensal (30% da Renda)
            </p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
              {formatCurrency(parcelaMaxima)}
            </p>
          </div>
        </div>
      </div>

      {/* Dívida Revisada */}
      <div className="result-card-success">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-green-500/20">
            <TrendingDown className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">
              Total da Dívida Revisada (60 parcelas)
            </p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
              {formatCurrency(dividaRevisada)}
            </p>
          </div>
        </div>
      </div>

      {/* Deságio */}
      <div className="result-card-warning">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-amber-500/20">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">
              Deságio / Valor em Excesso a Ser Negociado
            </p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">
              {formatCurrency(desagio)}
            </p>
            {desagio > 0 && (
              <p className="text-xs text-muted-foreground mt-2">
                Este valor excede sua capacidade de pagamento e pode ser negociado para redução.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Status de envio */}
      <div className="mt-4 p-3 rounded-lg bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 animate-scale-in">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            Proposta enviada para a planilha!
          </p>
        </div>
      </div>
    </div>
  );
}
