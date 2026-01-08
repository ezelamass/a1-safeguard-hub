import { motion } from "framer-motion";
import { Heart, Stethoscope, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import medicinaImg from "@/assets/medicina-privada.jpg";

const features = [
  {
    icon: Heart,
    title: "Cobertura Integral",
    content:
      "Acceso a las mejores prepagas del mercado con planes adaptados a cada etapa de vida y necesidad médica.",
  },
  {
    icon: Stethoscope,
    title: "Red de Profesionales",
    content:
      "Cartillas médicas con los especialistas más reconocidos y centros de salud de primer nivel.",
  },
  {
    icon: Clock,
    title: "Atención Inmediata",
    content:
      "Urgencias y emergencias cubiertas las 24 horas, los 365 días del año en todo el país.",
  },
  {
    icon: Shield,
    title: "Sin Preexistencias",
    content:
      "Asesoramiento para gestionar coberturas incluso con condiciones médicas preexistentes.",
  },
];

export const MedicinaSection = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 bg-azulNoche relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-a1pink rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-a1violet rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-900/90 to-pink-800/90 border border-a1pink/50 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(244,114,182,0.4),0_0_40px_rgba(244,114,182,0.2)]">
              <Heart className="w-4 h-4 text-a1pink" />
              Medicina Prepaga
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Salud Premium: Acceso a la Mejor Atención Médica
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed"
          >
            En A1 Broker, gestionamos su acceso a los planes de salud más
            completos del mercado. Comparamos, negociamos y le garantizamos
            la cobertura médica que usted y su familia merecen, con el respaldo
            de las principales prepagas del país.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 text-a1pink mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={medicinaImg}
              alt="Medicina prepaga de calidad"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button variant="primary" size="lg" asChild>
            <Link to="/cotizar">Cotizar Mi Plan de Salud</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
