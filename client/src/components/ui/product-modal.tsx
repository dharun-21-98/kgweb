import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { Download, Mail, X } from "lucide-react";
import { GlassCard } from "./glass-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductModal({ product, open, onClose }: ProductModalProps) {
  const { toast } = useToast();

  if (!product) return null;

  const handleDownloadSpec = async () => {
    try {
      // Mock download functionality
      toast({
        title: "Specification Sheet",
        description: "Download link has been sent to your email.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download specification sheet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRequestQuote = async () => {
    try {
      // Mock quote request functionality
      toast({
        title: "Quote Request",
        description: "Quote request submitted successfully. We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-navy-900 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
            
            {/* Specifications Grid */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <GlassCard variant="dark" className="p-4">
                  <span className="text-gray-400 text-sm block">Material</span>
                  <p className="text-white font-medium">{product.specs.material}</p>
                </GlassCard>
                <GlassCard variant="dark" className="p-4">
                  <span className="text-gray-400 text-sm block">Load Rating</span>
                  <p className="text-white font-medium">{product.specs.loadRating}</p>
                </GlassCard>
                <GlassCard variant="dark" className="p-4">
                  <span className="text-gray-400 text-sm block">Temperature</span>
                  <p className="text-white font-medium">{product.specs.temperature}</p>
                </GlassCard>
                <GlassCard variant="dark" className="p-4">
                  <span className="text-gray-400 text-sm block">Precision</span>
                  <p className="text-white font-medium">{product.specs.precision}</p>
                </GlassCard>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={handleDownloadSpec}
                className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Spec Sheet
              </Button>
              <Button 
                variant="outline"
                onClick={handleRequestQuote}
                className="border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
