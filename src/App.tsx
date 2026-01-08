import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import MedicinaPrivada from "./pages/MedicinaPrivada";
import Cotizar from "./pages/Cotizar";
import NotFound from "./pages/NotFound";
import MedicinaPrepagas from "./pages/productos/MedicinaPrepagas";
import Seguros from "./pages/productos/Seguros";
import SegurosVida from "./pages/productos/SegurosVida";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/medicina-prepaga" element={<MedicinaPrivada />} />
          <Route path="/cotizar" element={<Cotizar />} />
          
          {/* Medicina Prepaga Routes */}
          <Route path="/medicina-prepaga/:provider" element={<MedicinaPrepagas />} />
          
          {/* Seguros Routes */}
          <Route path="/seguros/:type" element={<Seguros />} />
          
          {/* Seguros de Vida Routes */}
          <Route path="/seguros-vida/:type" element={<SegurosVida />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
