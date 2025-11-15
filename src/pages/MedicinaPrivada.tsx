import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button-variants";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Heart, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp } from "@/utils/animations";
import medicinaPrivadaImg from "@/assets/medicina-privada.jpg";

const MedicinaPrivada = () => {
  const { ref, inView } = useScrollAnimation();

  const features = [
    {
      icon: MapPin,
      title: "Cobertura Geográfica",
      description: "Acceso a centros médicos en todo el país",
    },
    {
      icon: Heart,
      title: "Cartilla Médica Premium",
      description: "Clínicas de preferencia y profesionales de alto nivel",
    },
    {
      icon: TrendingUp,
      title: "Relación Costo-Beneficio",
      description: "Planes ajustados a su presupuesto",
    },
    {
      icon: Award,
      title: "Acceso Preferencial",
      description: "Atención prioritaria y servicios exclusivos",
    },
  ];

  return (
    <Layout>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={medicinaPrivadaImg}
                alt="Medicina Privada - Consulta médica profesional"
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
              />
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              {/* Badge */}
              <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Elegí tu Prepaga Ya!
              </div>

              {/* Título */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                MEDICINA PRIVADA: Estructurando el Cuidado de su Bienestar
              </h1>

              {/* Cuerpo de Texto */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  En A1 Broker, entendemos que la salud es el activo más importante de usted y su familia. Por ello, nuestra asesoría en Medicina Privada va más allá de la simple cotización.
                </p>
                <p>
                  Nuestro valor estratégico reside en el análisis exhaustivo. Consideramos factores críticos como la cobertura geográfica, la cartilla médica especializada (clínicas de preferencia y profesionales de alto nivel) y la relación costo-beneficio del plan.
                </p>
                <p>
                  Le asistimos en la selección de la prepaga que no solo se ajuste a su presupuesto, sino que garantice la atención de máxima calidad y el acceso preferencial que usted merece. Permítanos asegurar su tranquilidad y la de quienes más quiere.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-lg"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              >
                <Button variant="primary" size="lg" asChild>
                  <Link to="/cotizar" className="inline-flex items-center space-x-2">
                    <span>ANÁLISIS GRATUITO: Solicite una Consultoría</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default MedicinaPrivada;
