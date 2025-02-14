
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

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
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/downtown-header.webp"
            alt="Palm Jumeirah"
            className="w-full h-full object-cover object-center"
            style={{
              transform: `scale(1.1) translateY(${scrollY * 0.2}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-normal text-white tracking-wider leading-tight">
              PALM <br /> JUMEIRAH
            </h1>
            <div className="w-24 h-[1px] bg-white/40 mx-auto"></div>
            <p className="text-white text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Experience Unparalleled Luxury Living in Dubai's Most Iconic Location
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
                className="flex-1 px-4 py-2 bg-luxury-800/50 border border-luxury-700 rounded-sm focus:outline-none focus:border-golden-400 transition"
              />
              <button className="px-6 py-2 bg-golden-500 text-luxury-900 rounded-sm hover:bg-golden-400 transition">
                Join
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-900 text-luxury-400 py-12 border-t border-luxury-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-golden-400 text-lg mb-4">CONTACT US</h3>
              <p className="text-sm hover:text-golden-300 transition-colors">Dubai, UAE</p>
              <p className="text-sm hover:text-golden-300 transition-colors">+971 4 XXX XXXX</p>
              <p className="text-sm hover:text-golden-300 transition-colors">info@example.com</p>
            </div>
            <div>
              <h3 className="text-golden-400 text-lg mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-golden-300 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Properties</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Contact</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-golden-400 text-lg mb-4">FOLLOW US</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Facebook</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">LinkedIn</li>
              </ul>
            </div>
            <div>
              <h3 className="text-golden-400 text-lg mb-4">LEGAL</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-golden-300 transition-colors cursor-pointer">Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-luxury-800 text-center text-sm text-luxury-500">
            © 2024 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
