
import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "YEARS OF EXPERIENCE" },
  { number: "100+", label: "LUXURY PROPERTIES" },
  { number: "17+", label: "AWARDS WON" },
  { number: "800+", label: "SATISFIED CLIENTS" },
  { number: "20B+", label: "IN SALES" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <p className="text-3xl font-light text-accent">{stat.number}</p>
              <p className="text-xs text-luxury-500 tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
