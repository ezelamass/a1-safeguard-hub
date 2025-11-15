import { motion } from "framer-motion";
import { Shield, FileCheck, Scale, Users } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const pillars = [
  {
    icon: Shield,
    title: "Selección Rigurosa de Aseguradoras",
    content:
      "Analizamos la solidez financiera, el rating y la capacidad de respuesta de las principales compañías del mercado. Esto garantiza que su riesgo esté siempre respaldado por las entidades más solventes.",
  },
  {
    icon: FileCheck,
    title: "Coberturas a la Medida, No Estándar",
    content:
      "Diseñamos pólizas adaptadas a su perfil de riesgo específico, eliminando coberturas innecesarias y reforzando aquellas críticas para su patrimonio y operación.",
  },
  {
    icon: Scale,
    title: "Equilibrio Óptimo: Valor vs. Precio",
    content:
      "No buscamos simplemente el precio más bajo, sino la mejor relación entre cobertura, servicio y costo. Negociamos en su nombre con las aseguradoras para maximizar beneficios.",
  },
  {
    icon: Users,
    title: "Asesoramiento y Acompañamiento 360°",
    content:
      "Estamos presentes en cada etapa: desde el análisis inicial, pasando por la gestión de siniestros, hasta la renovación y actualización periódica de sus pólizas.",
  },
];

export const SegurosSection = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-4"
          >
            SEGUROS PATRIMONIALES
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Más Allá de la Cobertura: La Gestión de Riesgos con Rigor de Élite
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed"
          >
            En A1 Broker, nuestra labor como brokers de nivel premium es
            estructurar la protección más robusta y eficiente para su capital y
            su vida. No actuamos como simples intermediarios; somos analistas de
            riesgo dedicados a optimizar cada aspecto de su seguridad
            financiera.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 group"
            >
              <pillar.icon className="w-12 h-12 text-accent-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{pillar.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-white mb-8">
            En A1 Broker, usted invierte en certidumbre.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="bg-accent-600 hover:bg-accent-500"
            asChild
          >
            <Link to="/cotizar">Cotizar Mis Seguros</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
