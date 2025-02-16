import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  const [activeTab, setActiveTab] = useState("OFF-PLAN");
  const [activeProperty, setActiveProperty] = useState("NAD AL SHEBA GARDENS PHASE 7");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const propertyTabs = {
    "OFF-PLAN": ["NAD AL SHEBA GARDENS PHASE 7", "GOLF DALE AT EMAAR SOUTH", "GOLF ACRES AT EMAAR SOUTH"],
    "RESALES & RENTALS": ["DOWNTOWN VIEWS", "MARINA HEIGHTS", "PALM RESIDENCE"],
    "EXCLUSIVE": ["JUMEIRAH BAY", "ZABEEL PALACE", "EMIRATES HILLS"],
  };

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
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center font-light mb-12"
          >
            NEW PROPERTIES IN DUBAI
          </motion.h2>
          
          {/* Property Type Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {Object.keys(propertyTabs).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-3 py-1 rounded-full text-xs md:text-sm transition-all duration-300 
                  ${type === activeTab 
                    ? "bg-luxury-900 text-white" 
                    : "bg-transparent border border-luxury-200 text-luxury-600 hover:bg-luxury-50"}`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          {/* Property Display Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-luxury-200"
          >
            {/* Property Navigation */}
            <div className="border-b border-luxury-200 overflow-x-auto">
              <div className="flex min-w-max p-4 gap-4">
                {propertyTabs[activeTab].map((property) => (
                  <button
                    key={property}
                    onClick={() => setActiveProperty(property)}
                    className={`px-4 py-2 text-sm transition-all duration-300 rounded-md whitespace-nowrap
                      ${property === activeProperty 
                        ? "bg-luxury-900 text-white" 
                        : "bg-transparent border border-luxury-200 text-luxury-600 hover:bg-luxury-50"}`}
                  >
                    {property}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <img
                  src="/lovable-uploads/97b27f15-e5ad-41be-bea9-42336cd58679.png"
                  alt="Nad Al Sheba Gardens"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-light">Key Highlights</h3>
                <ul className="space-y-4 text-luxury-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>Exquisite 3-bedroom townhouses and 4 to 7-bedroom villas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>Swimmable lagoon surrounded by lush greenery.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>Architectural designs with bronze accents and large windows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>G+1 and G+2 townhouse layouts available.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>Double-height ceilings and open-plan layouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-luxury-900 shrink-0"></span>
                    <span>Exclusive community amenities including yoga lawns wave pools.</span>
                  </li>
                </ul>

                <div className="pt-6">
                  <h3 className="text-2xl font-light mb-2">Nad Al Sheba Gardens Phase 7</h3>
                  <p className="text-luxury-600 mb-4">3-7 Bedroom spacious Villa, Townhouse</p>
                  <p className="text-2xl font-light mb-6">AED 6.8 M</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-luxury-900 text-white rounded hover:bg-luxury-800 transition-colors">
                      REGISTER NOW
                    </button>
                    <button className="px-8 py-3 bg-luxury-50 text-luxury-900 rounded hover:bg-luxury-100 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Floorplans
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Developers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">TOP DUBAI DEVELOPERS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
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
                    src={`https://picsum.photos/600/400`}
                    alt={`Developer ${index + 1}`}
                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-xl">Developer {index + 1}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
