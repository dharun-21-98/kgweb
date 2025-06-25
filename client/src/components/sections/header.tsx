import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-morphism" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KG</span>
            </div>
            <span className="text-white font-semibold text-xl">KG International</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("products")}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              KG Filter
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              KG Bearings
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              KG Truck Solutions
            </button>
            <Button 
              onClick={onContactClick}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 glass-morphism rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-red-400 transition-colors text-left"
              >
                KG Filter
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-red-400 transition-colors text-left"
              >
                KG Bearings
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-red-400 transition-colors text-left"
              >
                KG Truck Solutions
              </button>
              <Button 
                onClick={onContactClick}
                className="bg-red-600 hover:bg-red-700 text-white self-start"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
