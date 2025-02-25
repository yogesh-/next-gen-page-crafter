
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HeroSectionProps {
  scrollY: number;
}

const slides = [
  {
    image: "/lovable-uploads/downtown-header.webp",
    title: "PALM JUMEIRAH",
    description: "Experience Unparalleled Luxury Living in Dubai's Most Iconic Location",
  },
  {
    image: "https://images.unsplash.com/photo-1582867424563-36cd31b1b42b?q=80&w=2070",
    title: "DUBAI MARINA",
    description: "Discover Waterfront Living at its Finest in the Heart of New Dubai",
  },
  {
    image: "https://images.unsplash.com/photo-1700140835404-0d10ee8bc2af?q=80&w=2070",
    title: "DOWNTOWN DUBAI",
    description: "Live in the Center of It All, Next to the Iconic Burj Khalifa",
  },
];

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 relative w-full h-screen">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: `scale(1.1) translateY(${scrollY * 0.2}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
              </div>
              <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h1 className="text-6xl md:text-8xl font-normal text-white tracking-wider leading-tight">
                    {slide.title}
                  </h1>
                  <div className="w-24 h-[1px] bg-white mx-auto"></div>
                  <p className="text-white text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 px-8 py-3 border border-white text-white hover:bg-white hover:text-luxury-900 transition-all duration-300 text-lg tracking-wide"
                  >
                    Discover More
                  </motion.button>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 md:left-4 border-2 border-white text-white hover:bg-white hover:text-luxury-900" />
        <CarouselNext className="right-1 md:right-4 border-2 border-white text-white hover:bg-white hover:text-luxury-900" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
