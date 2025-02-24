
import { motion } from "framer-motion";

const CommunitiesSection = () => {
  return (
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
                  <p className="text-white/80 text-sm">Starting from AED 2.5M</p>
                  <h3 className="text-white text-lg">Community {index + 1}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
