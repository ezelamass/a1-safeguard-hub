import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Car, Briefcase, Home, Heart, Smartphone } from "lucide-react";
import { COVERAGE_CATEGORIES } from "@/utils/constants";

const categoryIcons: Record<string, React.ElementType> = {
  "Movilidad": Car,
  "Empresas y Trabajo": Briefcase,
  "Hogar y Propiedad": Home,
  "Salud y Personas": Heart,
  "Vida Urbana y Tecnología": Smartphone,
};

export const CoverageCategories = () => {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Todas Nuestras Coberturas
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Protección integral para cada aspecto de tu vida personal y profesional
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {COVERAGE_CATEGORIES.map((category, categoryIndex) => {
            const CategoryIcon = categoryIcons[category.category] || Car;
            
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>

                {/* Section Description */}
                {(category as any).sectionDescription && (
                  <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed max-w-3xl">
                    {(category as any).sectionDescription}
                  </p>
                )}

                {/* Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      className="bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-xl p-4 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-4">
            ¿No encontrás lo que buscás? Consultanos, tenemos soluciones para cada necesidad.
          </p>
          <a
            href="https://wa.me/5491133258129"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-success hover:bg-success/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            💬 Consultanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
