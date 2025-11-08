import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { INSURANCE_COMPANIES } from '@/utils/constants';
import 'swiper/css';

export const PartnersCarousel = () => {
  const { ref, inView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12"
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
                <div className="flex items-center justify-center h-16 md:h-20 px-4 py-2 bg-white rounded-lg shadow-sm transition-all hover:shadow-md grayscale hover:grayscale-0">
                  <span className="text-base md:text-lg font-semibold text-gray-700">
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
