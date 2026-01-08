import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '@/utils/constants';

const stepImages = ['/steps/step-1.png', '/steps/step-2.png', '/steps/step-3.png'];

// Mobile version - simple list with images below each step
const MobileHowItWorks = () => {
  return (
    <div className="lg:hidden container mx-auto px-4">
      <div className="space-y-8">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="space-y-4"
          >
            {/* Step number and content */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-a1pink to-a1violet flex items-center justify-center font-bold text-lg text-white shadow-lg flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            
            {/* Image below the step */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={stepImages[i]}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Desktop version - scroll-driven with animated image
const DesktopHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return;

      const scrollTop = scrollSectionRef.current.scrollTop;
      const sectionHeight = scrollSectionRef.current.clientHeight;

      const stepIndex = Math.min(
        Math.floor(scrollTop / sectionHeight),
        HOW_IT_WORKS_STEPS.length - 1
      );

      setActiveStep(stepIndex);
    };

    const scrollSection = scrollSectionRef.current;
    if (scrollSection) {
      scrollSection.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollSection) {
        scrollSection.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const currentStep = HOW_IT_WORKS_STEPS[activeStep];

  return (
    <div className="hidden lg:block relative">
      {/* Invisible scroll container */}
      <div
        ref={scrollSectionRef}
        className="absolute inset-0 overflow-y-scroll opacity-0 pointer-events-auto"
        style={{
          height: '100vh',
          scrollSnapType: 'y mandatory',
        }}
      >
        {HOW_IT_WORKS_STEPS.map((_, index) => (
          <div
            key={index}
            style={{
              height: '100vh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          />
        ))}
      </div>

      {/* Fixed visible content */}
      <div
        ref={containerRef}
        className="container mx-auto px-4"
        style={{ height: '100vh' }}
      >
        <div className="grid grid-cols-2 gap-16 h-full items-center">
          {/* Left side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={stepImages[activeStep]}
                    alt={currentStep.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right side - Timeline */}
          <div className="flex items-center">
            <div className="flex flex-col gap-0 w-full">
              {HOW_IT_WORKS_STEPS.map((s, i) => (
                <div key={s.number} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 flex-shrink-0 ${
                        activeStep === i
                          ? 'bg-gradient-to-r from-a1pink to-a1violet text-white shadow-lg'
                          : activeStep > i
                            ? 'bg-gradient-to-r from-a1pink/40 to-a1violet/40 text-white'
                            : 'bg-gray-200 text-gray-500'
                      }`}
                      animate={activeStep === i ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {s.number}
                    </motion.div>

                    {i < HOW_IT_WORKS_STEPS.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 min-h-[120px] transition-all duration-300 ${
                          activeStep > i 
                            ? 'bg-gradient-to-b from-a1pink to-a1violet' 
                            : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-8">
                    <AnimatePresence mode="wait">
                      {activeStep === i && (
                        <motion.div
                          key={`content-${i}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            {s.title}
                          </h3>
                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {s.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="bg-white py-8 md:py-6">
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contratá tu seguro en tres simples pasos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Un proceso simple y transparente
          </p>
        </div>
      </div>

      <MobileHowItWorks />
      <DesktopHowItWorks />
    </section>
  );
};
