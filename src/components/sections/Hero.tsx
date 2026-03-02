import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { TripleCarousel } from "./TripleCarousel";
import { CheckCircle2, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-azulNoche">
      {/* Content */}
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-xl text-center lg:text-left mt-16 lg:mt-0">
            <motion.p
              className="text-sm md:text-base font-medium text-gray-400 mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Administradora de Seguros líder en Argentina
            </motion.p>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cobertura a tu medida
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-gray-300 mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Encontrá la cobertura que necesitás con una experiencia simple, rápida y confiable.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="primary" size="lg" asChild>
                <a href="tel:+5491133258129">Llamanos</a>
              </Button>
              <Link 
                to="/nosotros" 
                className="text-white font-medium flex items-center justify-center lg:justify-start gap-2 hover:text-primary-300 transition-colors"
              >
                Más información
              </Link>
            </motion.div>

            {/* Valor Agregado - Mini Benefits */}
            <motion.div
              className="mt-8 lg:mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex flex-col items-center text-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span><strong className="text-white">Sin costos de gestión</strong></span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                <span><strong className="text-white">Multimarca</strong></span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 text-sm text-gray-300">
                <Clock className="w-5 h-5 text-accent-400" />
                <span><strong className="text-white">Respuesta en 10'</strong></span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Triple Carousel */}
          <TripleCarousel />
        </div>
      </div>
    </section>
  );
};
