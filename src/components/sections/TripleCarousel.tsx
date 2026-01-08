import { motion } from "framer-motion";

// Get all carousel images from public/carrousel folder
const CAROUSEL_IMAGES = [
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.57 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.57.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.58 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.58 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.58 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.58 (4).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.58.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.59 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.59 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.59 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.24.59.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.00 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.00 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.00 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.00.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.01 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.01 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.01 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.01 (4).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.01.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.02 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.02 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.02 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.02 (4).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.02.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.03 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.03 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.03 (3).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.03 (4).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.03.jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.04 (1).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.04 (2).jpeg",
  "/carrousel/WhatsApp Image 2026-01-08 at 17.25.04.jpeg",
];

// Split images into 3 columns for desktop
const column1 = CAROUSEL_IMAGES.slice(0, 11);
const column2 = CAROUSEL_IMAGES.slice(22, 33);
const column3 = CAROUSEL_IMAGES.slice(11, 22);

// Split images into 2 columns for mobile
const mobileColumn1 = CAROUSEL_IMAGES.slice(0, 17);
const mobileColumn2 = CAROUSEL_IMAGES.slice(17, 34);

interface CarouselColumnProps {
  images: string[];
  direction: "up" | "down";
  duration: number;
  imageHeight?: string;
}

const CarouselColumn = ({ images, direction, duration, imageHeight = "180px" }: CarouselColumnProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];
  
  const totalHeight = images.length * 200; // approximate height per image including gap
  
  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        className="flex flex-col gap-3 md:gap-4"
        initial={{ y: direction === "up" ? 0 : -totalHeight }}
        animate={{
          y: direction === "up" ? -totalHeight : 0,
        }}
        transition={{
          y: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="w-full rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0"
            style={{ height: imageHeight }}
          >
            <img
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TripleCarousel = () => {
  return (
    <>
      {/* Desktop - 3 columns */}
      <div className="hidden lg:flex gap-4 h-[calc(100vh-80px)] w-full max-w-[550px] relative overflow-hidden">
        <div className="flex-1 h-full overflow-hidden">
          <CarouselColumn images={column1} direction="up" duration={30} />
        </div>
        
        <div className="flex-1 h-full overflow-hidden">
          <CarouselColumn images={column2} direction="down" duration={35} />
        </div>
        
        <div className="flex-1 h-full overflow-hidden">
          <CarouselColumn images={column3} direction="up" duration={28} />
        </div>

        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-azulNoche via-azulNoche/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-azulNoche via-azulNoche/80 to-transparent pointer-events-none z-10" />
      </div>

      {/* Mobile - 2 columns */}
      <div className="flex lg:hidden gap-3 h-[350px] w-full relative overflow-hidden mt-8">
        <div className="flex-1 h-full overflow-hidden">
          <CarouselColumn images={mobileColumn1} direction="up" duration={25} imageHeight="140px" />
        </div>
        
        <div className="flex-1 h-full overflow-hidden">
          <CarouselColumn images={mobileColumn2} direction="down" duration={30} imageHeight="140px" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-azulNoche via-azulNoche/80 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-azulNoche via-azulNoche/80 to-transparent pointer-events-none z-10" />
      </div>
    </>
  );
};
