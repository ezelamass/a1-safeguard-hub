import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { TripleCarousel } from "./TripleCarousel";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-azulNoche">
      {/* Content */}
      <div className="container mx-auto px-4 py-12 z-10 relative">
        <div className="flex items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-xl">
            <motion.p
              className="text-sm md:text-base font-medium text-gray-400 mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Solución de seguros líder en Argentina
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Seguros a tu medida
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Encontrá la cobertura que necesitás con una experiencia simple, rápida y confiable.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="primary" size="lg" asChild>
                <Link to="/cotizar">Cotizar Ahora</Link>
              </Button>
              <Link 
                to="/nosotros" 
                className="text-white font-medium flex items-center gap-2 hover:text-primary-300 transition-colors"
              >
                Más información
              </Link>
            </motion.div>
          </div>

          {/* Right side - Triple Carousel */}
          <TripleCarousel />
        </div>
      </div>
    </section>
  );
};
