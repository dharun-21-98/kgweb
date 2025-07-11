import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Cog, Shield, Headphones } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap = {
  cogs: Cog,
  shield: Shield,
  headphones: Headphones,
};

export function WhyChooseUs() {
  return (
        <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#d0f2eb', backdropFilter: 'blur(10px)' }}>
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.postimg.cc/j50ghNj4/shavr-ik-t-Jh73-V0-Jzw0-unsplash.jpg')"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-red-600">KG ?</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="p-8 h-full bg-navy-900 rounded-2xl border border-white/20 hover:scale-105 cursor-pointer transition-all duration-300 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold mr-4">
                      {item.number}
                    </div>
                    <IconComponent className="w-10 h-10 text-red-500" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-white leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
