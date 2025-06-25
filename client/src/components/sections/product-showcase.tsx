import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ProductModal } from "@/components/ui/product-modal";
import { PRODUCTS } from "@/lib/constants";
import { Product } from "@/lib/types";

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-navy-800 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Premium Product Portfolio
        </motion.h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              className={`${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard 
                variant="dark" 
                hover
                className={`overflow-hidden group cursor-pointer bg-white/95 backdrop-blur-lg border-gray-200/50 ${
                  index === 0 ? "h-full" : ""
                }`}
                onClick={() => openProductModal(product)}
              >
                <div 
                  className={`bg-cover bg-center ${
                    index === 0 ? "h-64 lg:h-full" : "h-48"
                  }`}
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className={`${index === 0 ? "absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent flex flex-col justify-end" : ""} p-6`}>
                  <h3 className={`${index === 0 ? "text-2xl text-white" : "text-xl text-navy-800"} font-semibold mb-2`}>
                    {product.name}
                  </h3>
                  <p className={`${index === 0 ? "text-gray-200" : "text-gray-700"} text-sm mb-4`}>
                    {product.description}
                  </p>
                  <Button
                    variant={index === 0 ? "default" : "ghost"}
                    className={`${
                      index === 0 
                        ? "bg-red-600 hover:bg-red-700 text-white self-start" 
                        : "text-red-600 hover:text-red-700 p-0 h-auto font-semibold"
                    } transition-colors`}
                  >
                    {index === 0 ? "View Details" : "Learn More →"}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      <ProductModal
        product={selectedProduct}
        open={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
