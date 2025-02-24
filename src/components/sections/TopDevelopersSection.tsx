import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TopDevelopersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-12">TOP DUBAI DEVELOPERS</h2>
        <Carousel className="w-full max-w-7xl mx-auto" opts={{ loop: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {[1, 2, 3, 4].map((_, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={`https://picsum.photos/768/822`}
                      alt={`Developer ${index + 1}`}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-xl md:text-2xl">Developer {index + 1}</h3>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-2 border-black/20 text-black hover:bg-black hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 border-2 border-black/20 text-black hover:bg-black hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default TopDevelopersSection;
