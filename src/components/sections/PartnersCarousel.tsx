import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { INSURANCE_COMPANIES } from '@/utils/constants';
import 'swiper/css';

export const PartnersCarousel = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-16 bg-azulNoche">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trabajamos con las mejores aseguradoras
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-4"
          >
            {INSURANCE_COMPANIES.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-16 md:h-20 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50 shadow-sm transition-all hover:bg-gray-900/70 hover:border-primary-500/50">
                  <span className="text-base md:text-lg font-semibold text-gray-200">
                    {company}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
