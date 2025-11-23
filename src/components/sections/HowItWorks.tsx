import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HOW_IT_WORKS_STEPS } from '@/utils/constants';
import step1Image from '@/assets/step-1-quote.jpg';
import step2Image from '@/assets/step-2-compare.jpg';
import step3Image from '@/assets/step-3-contract.jpg';

const stepImages = [step1Image, step2Image, step3Image];

export const HowItWorks = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-azulNoche">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cómo Contratás tu Seguro
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Un proceso simple y transparente en 3 pasos
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line - visible only on desktop */}
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 border-t-2 border-dashed border-primary-500/50 -z-10" />

            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-500/50 transition-all">
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-600 text-white flex items-center justify-center z-10 shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={stepImages[index]}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
