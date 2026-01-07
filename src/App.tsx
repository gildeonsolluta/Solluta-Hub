import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import CalculadoraSuperendividamento from "./pages/CalculadoraSuperendividamento";
import Superendividamento from "./pages/Superendividamento";
import LimpaNome from "./pages/LimpaNome";
import Previdenciario from "./pages/Previdenciario";
import RevisaoVeiculos from "./pages/RevisaoVeiculos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosUso />} />
          {/* Landing Pages - Rotas locais no mesmo domínio */}
          <Route path="/superendividamento" element={<Superendividamento />} />
          <Route path="/limpa-nome" element={<LimpaNome />} />
          <Route path="/previdenciario" element={<Previdenciario />} />
          <Route path="/revisao-veiculos" element={<RevisaoVeiculos />} />
          {/* Calculadora */}
          <Route path="/calculadora-superendividamento" element={<CalculadoraSuperendividamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
