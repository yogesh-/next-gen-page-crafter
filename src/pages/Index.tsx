
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/lovable-uploads/8f1f543c-e947-45a9-99e9-855e54fe7ec6.png"
            alt="Palm Jumeirah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide">
              PALM JUMEIRAH
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light">
              Luxury Living Redefined
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-50">
        <div className="container mx-auto">
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
                <p className="text-xs text-luxury-500 tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-center mb-12">
            NEW PROPERTIES IN DUBAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/400x300?luxury,apartment&sig=${index}`}
                    alt="Luxury Property"
                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm">From AED 1.5M</p>
                    <h3 className="text-white text-lg">Luxury Apartment {index + 1}</h3>
                  </div>
                </div>
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
