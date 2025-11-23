import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '@/utils/constants';
import step1Image from '@/assets/step-1-quote.jpg';
import step2Image from '@/assets/step-2-compare.jpg';
import step3Image from '@/assets/step-3-contract.jpg';

const stepImages = [step1Image, step2Image, step3Image];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return;

      const scrollTop = scrollSectionRef.current.scrollTop;
      const sectionHeight = scrollSectionRef.current.clientHeight;

      // Calculate which step should be active based on scroll position
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
    <section className="bg-white py-4 md:py-6">
      {/* Header */}
      <div className="container mx-auto px-4 mb-">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contratá tu seguro en tres simples pasos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Un proceso simple y transparente
          </p>
        </div>
      </div>

      {/* Fixed frame with scroll-driven content changes */}
      <div className="relative">
        {/* Invisible scroll container to capture scroll events */}
        <div
          ref={scrollSectionRef}
          className="absolute inset-0 overflow-y-scroll opacity-0 pointer-events-auto"
          style={{
            height: '100vh',
            scrollSnapType: 'y mandatory',
          }}
        >
          {/* Create scroll sections for each step */}
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

        {/* Fixed visible content that changes based on scroll */}
        <div
          ref={containerRef}
          className="container mx-auto px-4"
          style={{ height: '100vh' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
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

            {/* Right side - Timeline with inline content */}
            <div className="order-1 lg:order-2 flex items-center">
              <div className="flex flex-col gap-0 w-full">
                {/* Timeline with content appearing next to active step */}
                {HOW_IT_WORKS_STEPS.map((s, i) => (
                  <div key={s.number} className="flex items-start gap-6">
                    {/* Step indicator column */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300 flex-shrink-0 ${activeStep === i
                          ? 'bg-primary-600 text-white shadow-lg'
                          : activeStep > i
                            ? 'bg-primary-200 text-primary-700'
                            : 'bg-gray-200 text-gray-500'
                          }`}
                        animate={activeStep === i ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {s.number}
                      </motion.div>

                      {/* Connecting line */}
                      {i < HOW_IT_WORKS_STEPS.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 min-h-[120px] transition-all duration-300 ${activeStep > i ? 'bg-primary-400' : 'bg-gray-300'
                            }`}
                        />
                      )}
                    </div>

                    {/* Content appears only next to active step */}
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
    </section>
  );
};
