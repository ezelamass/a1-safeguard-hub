import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp, Target, Headphones, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";

const credentials = [
  {
    icon: BadgeCheck,
    title: "Garantía Legal y de Cumplimiento",
    description: "Rigor Regulatorio Total: A1 Broker opera bajo la Matrícula SSN 84872 de la Superintendencia de Seguros de la Nación, asegurando el máximo nivel de cumplimiento y transparencia en cada operación."
  },
  {
    icon: TrendingUp,
    title: "Experiencia y Liderazgo",
    description: "Liderazgo con Trayectoria: Desde 2016, hemos ayudado a 25000 clientes a optimizar su gestión de riesgos. Nuestra experiencia es la base de su seguridad."
  },
  {
    icon: Target,
    title: "Independencia y Oferta",
    description: "Independencia al Servicio del Cliente: Como brokers independientes, nuestro enfoque es usted. Analizamos las mejores opciones del mercado para estructurar una solución multimarca que maximice su cobertura y optimice su inversión."
  },
  {
    icon: Headphones,
    title: "Enfoque en el Cliente",
    description: "Servicio Proactivo: Nuestro compromiso no termina con la emisión de la póliza. Brindamos asesoría continua y gestión de siniestros ágil, garantizando una respuesta inmediata cuando más nos necesita."
  }
];

export const CredencialesSection = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 bg-azulNoche">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-white text-center mb-12"
        >
          Por Qué Confiar en A1 Broker
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border-l-4 border-primary-500 hover:bg-gray-900/70 transition-all"
              >
                <Icon className="w-12 h-12 text-primary-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {credential.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {credential.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Conocenos Más Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/nosotros" className="group">
              Conocenos Más
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
