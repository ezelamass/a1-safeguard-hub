import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button-variants';
import aboutImage from '@/assets/about-team.jpg';

export const AboutPreview = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-azulNoche">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Equipo A1 Broker"
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-primary-700/20 border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Desde 2016
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Quiénes Somos
            </h2>

            <div className="space-y-4 text-base md:text-lg text-gray-200 mb-8">
              <p>
                Somos A1 Broker Seguros, una empresa dedicada a brindar
                soluciones integrales de seguros con más de 8 años de
                experiencia en el mercado argentino.
              </p>
              <p>
                Con{" "}
                <span className="font-semibold text-primary-300">
                  más de 25,000 clientes satisfechos
                </span>
                , nos especializamos en encontrar la mejor cobertura al mejor
                precio, trabajando con las principales aseguradoras del país.
              </p>
              <p>
                Nuestra{" "}
                <span className="font-semibold text-white">
                  Matrícula SSN 84872
                </span>{" "}
                nos avala como broker registrado ante la Superintendencia de
                Seguros de la Nación.
              </p>
            </div>

            <Button variant="outline" size="lg" asChild>
              <Link to="/nosotros" className="group">
                Conocenos Más
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
