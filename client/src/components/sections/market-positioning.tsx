import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, IdCard, Star } from "lucide-react";

export function MarketPositioning() {
  const qualityMetrics = [
    { label: "Precision Rating", value: 98.5 },
    { label: "Durability Index", value: 96.2 },
    { label: "Performance Consistency", value: 97.8 },
    { label: "Customer Satisfaction", value: 99.1 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Market Leadership Through Innovation
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Quality Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="light" className="p-8 bg-white/90 backdrop-blur-lg border-gray-200/50">
              <h3 className="text-2xl font-semibold text-navy-800 mb-8">
                Quality Comparison
              </h3>
              
              <div className="space-y-6">
                {qualityMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{metric.label}</span>
                      <span className="text-navy-800 font-semibold">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div 
                        className="bg-red-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
          
          {/* Product Leadership Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-navy-800 mb-6">
              Setting Industry Standards
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our commitment to excellence has positioned KG International as the preferred choice for mission-critical applications across industries. Through continuous innovation and rigorous quality control, we consistently exceed customer expectations.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              From aerospace to automotive, from heavy machinery to precision instruments, our bearings deliver the reliability and performance that industry leaders demand. Our advanced manufacturing capabilities and stringent testing protocols ensure every product meets the highest standards.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-navy-100 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-navy-800 font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center bg-navy-100 px-4 py-2 rounded-lg">
                <IdCard className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-navy-800 font-medium">Industry Leader</span>
              </div>
              <div className="flex items-center bg-navy-100 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-navy-800 font-medium">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
