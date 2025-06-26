import { motion } from "framer-motion";
import { CLIENT_LOGOS } from "@/lib/constants";

export function TrustedBy() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-navy-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div 
            className="flex items-center logo-scroll"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Duplicate logos for seamless scrolling */}
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    {logo.logo}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}