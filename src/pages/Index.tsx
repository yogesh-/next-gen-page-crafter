import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import NewProperties from "../components/NewProperties";

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

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Slideshow */}
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
                    <div className="w-24 h-[1px] bg-white/40 mx-auto"></div>
                    <p className="text-white text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wide"
                    >
                      Discover More
                    </motion.button>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:left-4 border-2 border-white text-black hover:bg-white" />
          <CarouselNext className="right-1 md:right-4 border-2 border-white text-black hover:bg-white" />
        </Carousel>
      </section>

      {/* New Properties Section */}
      <NewProperties />

      {/* Top Developers Section */}
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

      {/* Communities Section */}
      <section className="py-16 bg-luxury-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">COMMUNITIES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={`https://picsum.photos/400/300`}
                    alt={`Community ${index + 1}`}
                    className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm">Starting from AED 2.5M</p>
                    <h3 className="text-white text-lg">Community {index + 1}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { number: "30+", label: "YEARS OF EXPERIENCE" },
              { number: "100+", label: "LUXURY PROPERTIES" },
              { number: "17+", label: "AWARDS WON" },
              { number: "800+", label: "SATISFIED CLIENTS" },
              { number: "20B+", label: "IN SALES" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <p className="text-3xl font-light text-luxury-800">{stat.number}</p>
                <p className="text-xs text-luxury-500 tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-luxury-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">JOIN OUR NEWSLETTER</h2>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-sm focus:outline-none focus:border-white/40 transition"
              />
              <button className="px-6 py-2 bg-white text-luxury-900 rounded-sm hover:bg-white/90 transition">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-900 text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg mb-4">CONTACT US</h3>
              <p className="text-sm">Dubai, UAE</p>
              <p className="text-sm">+971 4 XXX XXXX</p>
              <p className="text-sm">info@example.com</p>
            </div>
            <div>
              <h3 className="text-white text-lg mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Properties</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg mb-4">FOLLOW US</h3>
              <ul className="space-y-2 text-sm">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg mb-4">LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
            © 2024 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
