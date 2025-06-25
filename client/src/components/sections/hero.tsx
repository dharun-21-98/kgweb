import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBearingImage from "@assets/image_1750858851431.jpg";

interface HeroProps {
  onDownloadBrochure: () => void;
  onLearnMore: () => void;
}

export function Hero({ onDownloadBrochure, onLearnMore }: HeroProps) {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background bearing image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBearingImage})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/90" />
      
      {/* Grid layout with content */}
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2 items-center">
        {/* Left side - Main content */}
        <div className="px-6 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              KG International
              <br />
              <span className="text-red-600">Bearings</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-200 mb-6 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Precision Engineering for Industrial Excellence
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Leading manufacturer of high-performance bearings and industrial solutions. 
              Trusted by global industries for over a decade with cutting-edge technology and unmatched quality.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={onDownloadBrochure}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 px-8 py-4"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
              
              <Button
                onClick={onLearnMore}
                variant="outline"
                size="lg"
                className="border-2 border-white/30 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 px-8 py-4"
              >
                <ArrowRight className="w-5 h-5" />
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right side - Visual element */}
        <div className="hidden lg:flex items-center justify-center px-16 py-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <GlassCard className="p-8 bg-navy-900/80 backdrop-blur-lg border-white/20 max-w-md">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">KG</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Premium Quality
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  ISO certified manufacturing with precision engineering and rigorous quality control for mission-critical applications.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">1M+</div>
                    <div className="text-gray-300 text-sm">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">10+</div>
                    <div className="text-gray-300 text-sm">Years</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
