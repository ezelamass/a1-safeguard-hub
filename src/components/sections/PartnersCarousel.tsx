import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

const PARTNERS = [
  { name: "Allianz", logo: "/partners/Allianz.jpg" },
  { name: "BBVA", logo: "/partners/BBVA.jpg" },
  { name: "Federación Patronal", logo: "/partners/Federacion Patronal.png" },
  { name: "Galeno", logo: "/partners/Galeno Medicina prepaga.jpg" },
  { name: "Galicia", logo: "/partners/Galicia.png" },
  { name: "La Segunda", logo: "/partners/La 2da.png" },
  { name: "La Caja", logo: "/partners/La Caja.png" },
  { name: "Mercantil Andina", logo: "/partners/La Mercantil.png" },
  { name: "Mapfre", logo: "/partners/Maphre.png" },
  { name: "Omint", logo: "/partners/Omint.png" },
  { name: "Prevención Salud", logo: "/partners/Prevención Salud.png" },
  { name: "RUS", logo: "/partners/RUS.jpg" },
  { name: "Sancor Seguros", logo: "/partners/Sancor Seguros.png" },
  { name: "Swiss Medical", logo: "/partners/Swiss Medical Medicna Privada.png" },
  { name: "Zurich", logo: "/partners/Zurich.jpg" },
];

export const PartnersCarousel = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-16 bg-azulNoche overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trabajamos con las mejores aseguradoras
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full"
      >
        <InfiniteSlider gap={24} duration={40} durationOnHover={60} className="w-full py-4">
          {PARTNERS.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-32 md:w-40 h-20 md:h-24 flex items-center justify-center bg-white rounded-xl p-2 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Fade edges effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-azulNoche to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-azulNoche to-transparent z-10"></div>
      </motion.div>
    </section>
  );
};
