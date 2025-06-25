import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onDownloadBrochure: () => void;
  onLearnMore: () => void;
}

export function Hero({ onDownloadBrochure, onLearnMore }: HeroProps) {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background bearing image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-navy-900 bg-opacity-60" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 md:p-16">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              KG International <span className="text-red-600">Bearings</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-4 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Precision Engineering for Industrial Excellence
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Leading manufacturer of high-performance bearings and industrial solutions. 
              Trusted by global industries for over a decade with cutting-edge technology and unmatched quality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={onDownloadBrochure}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
              
              <Button
                onClick={onLearnMore}
                variant="outline"
                size="lg"
                className="glass-morphism border-white/20 hover:bg-white hover:bg-opacity-20 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <ArrowRight className="w-5 h-5" />
                Learn More
              </Button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
