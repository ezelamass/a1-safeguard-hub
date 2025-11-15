import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import segurosVidaImg from "@/assets/seguros-vida.jpg";

export const SegurosVidaSection = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contenido izquierda */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Protección Financiera Integral
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              SEGUROS DE VIDA: Blindando la Estabilidad Financiera del Mañana
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Los Seguros de Personas constituyen la columna vertebral de cualquier planificación patrimonial seria. No son solo una cobertura, sino una herramienta financiera crucial diseñada para mitigar el riesgo de eventos imprevistos que puedan comprometer la solvencia y calidad de vida de sus dependientes.
              </p>
              <p>
                En A1 Broker, analizamos su perfil de riesgo y sus objetivos a largo plazo para estructurar una protección que garantice la continuidad del ingreso y el estatus económico familiar ante la ausencia o la incapacidad laboral.
              </p>
              <p className="font-semibold text-gray-900">
                Nuestra promesa es convertir la incertidumbre en un capital predecible y blindado.
              </p>
            </div>

            <Button 
              size="lg" 
              className="mt-8 bg-accent-600 hover:bg-accent-500 text-white"
            >
              Consultoría Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Imagen derecha */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={segurosVidaImg}
              alt="Familia protegida con seguros de vida"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
