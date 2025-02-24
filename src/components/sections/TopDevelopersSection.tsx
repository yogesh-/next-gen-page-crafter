
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TopDevelopersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">TOP DUBAI DEVELOPERS</h2>
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent className="-ml-4">
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative w-[400px] h-[300px] overflow-hidden rounded-lg">
                    <img
                      src={`https://picsum.photos/768/822`}
                      alt={`Developer ${index + 1}`}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-3xl">Developer {index + 1}</h3>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:left-4 border-2 border-golden-400 text-golden-400 hover:bg-golden-500 hover:text-luxury-900 hover:border-golden-500" />
          <CarouselNext className="right-1 md:right-4 border-2 border-golden-400 text-golden-400 hover:bg-golden-500 hover:text-luxury-900 hover:border-golden-500" />
        </Carousel>
      </div>
    </section>
  );
};

export default TopDevelopersSection;
