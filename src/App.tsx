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
import RedirectToLandingPage from "./components/RedirectToLandingPage";
import { LANDING_PAGES } from "./config/landingPages";

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
          {/* Redirecionamentos para landing pages externas */}
          <Route 
            path="/superendividamento" 
            element={<RedirectToLandingPage url={LANDING_PAGES.SUPERENDIVIDAMENTO} />} 
          />
          <Route 
            path="/limpa-nome" 
            element={<RedirectToLandingPage url={LANDING_PAGES.LIMPA_NOME} />} 
          />
          <Route 
            path="/previdenciario" 
            element={<RedirectToLandingPage url={LANDING_PAGES.PREVIDENCIARIO} />} 
          />
          <Route 
            path="/revisao-veiculos" 
            element={<RedirectToLandingPage url={LANDING_PAGES.BUSCA_E_APREENSAO} />} 
          />
          {/* Calculadora ainda mantida localmente */}
          <Route path="/calculadora-superendividamento" element={<CalculadoraSuperendividamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
