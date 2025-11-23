import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-insurance.jpg";
export const Hero = () => {
  return <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-azulNoche/85" />
        <img src={heroImage} alt="A1 Broker Seguros" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-br from-azulNoche/90 via-primary-700/30 to-transparent" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" animate={{
        y: [0, -30, 0],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/10 rounded-full blur-3xl" animate={{
        y: [0, 30, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            Aseguramos Tu{" "}
            <span className="text-accent-100">Tranquilidad</span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl font-medium text-white/90 mb-10 max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }}>
            Encontrá el seguro que necesitás con los mejores profesionales del
            mercado
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }}>
            <Button variant="primary" size="lg" asChild>
              <Link to="/cotizar">Cotizar Ahora</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contacto">Contactar</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}>
        
      </motion.div>
    </section>;
};