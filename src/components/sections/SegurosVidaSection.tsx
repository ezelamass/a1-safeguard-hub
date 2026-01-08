import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { ArrowRight, Users, PiggyBank, TrendingUp, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import segurosVidaImg from "@/assets/seguros-vida.jpg";

const features = [
  {
    icon: Users,
    title: "Protección Familiar",
    content: "Garantice el bienestar económico de sus seres queridos ante cualquier eventualidad.",
  },
  {
    icon: PiggyBank,
    title: "Ahorro y Capitalización",
    content: "Combine protección con inversión inteligente para construir su patrimonio.",
  },
  {
    icon: TrendingUp,
    title: "Planificación de Retiro",
    content: "Diseñe hoy la jubilación que desea, con rendimientos garantizados.",
  },
  {
    icon: Heart,
    title: "Vida Puro",
    content: "Cobertura esencial a bajo costo para máxima tranquilidad.",
  },
];

export const SegurosVidaSection = () => {
  const { ref, inView } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-a1violet rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-a1pink rounded-full blur-3xl" />
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
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/90 to-violet-800/90 border border-a1violet/50 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(167,139,250,0.4),0_0_40px_rgba(167,139,250,0.2)]">
              <Users className="w-4 h-4 text-a1violet" />
              Seguros de Vida
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Blindando la Estabilidad Financiera del Mañana
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/90 leading-relaxed"
          >
            Los Seguros de Personas constituyen la columna vertebral de cualquier
            planificación patrimonial seria. En A1 Broker, analizamos su perfil de
            riesgo y sus objetivos a largo plazo para estructurar una protección
            que garantice la continuidad del ingreso y el estatus económico familiar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={segurosVidaImg}
              alt="Familia protegida con seguros de vida"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 text-a1violet mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-white mb-8">
            Nuestra promesa es convertir la incertidumbre en un capital predecible y blindado.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link to="/cotizar">
              Consultoría Personalizada
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
