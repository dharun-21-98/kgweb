import { useState } from "react";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { MarketPositioning } from "@/components/sections/market-positioning";
import { CompanyHighlights } from "@/components/sections/company-highlights";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Footer } from "@/components/sections/footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useState as useFormState } from "react";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [contactForm, setContactForm] = useFormState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [brochureForm, setBrochureForm] = useFormState({
    name: "",
    email: "",
  });
  const { toast } = useToast();

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleDownloadBrochure = () => {
    setIsBrochureModalOpen(true);
  };

  const handleLearnMore = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/contact", {
        ...contactForm,
        type: "contact",
      });
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setContactForm({ name: "", email: "", company: "", message: "" });
      setIsContactModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiRequest("POST", "/api/download-brochure", brochureForm);
      toast({
        title: "Brochure Request Sent",
        description: "Download link has been sent to your email.",
      });
      setBrochureForm({ name: "", email: "" });
      setIsBrochureModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process brochure request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero 
        onDownloadBrochure={handleDownloadBrochure}
        onLearnMore={handleLearnMore}
      />
      <TrustedBy />
      <WhyChooseUs />
      <MarketPositioning />
      <CompanyHighlights />
      <ProductShowcase />
      <Footer />

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={contactForm.company}
                onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                required
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Brochure Modal */}
      <Dialog open={isBrochureModalOpen} onOpenChange={setIsBrochureModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Download Brochure</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleBrochureSubmit} className="space-y-4">
            <div>
              <Label htmlFor="brochure-name">Name *</Label>
              <Input
                id="brochure-name"
                required
                value={brochureForm.name}
                onChange={(e) => setBrochureForm(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="brochure-email">Email *</Label>
              <Input
                id="brochure-email"
                type="email"
                required
                value={brochureForm.email}
                onChange={(e) => setBrochureForm(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Download Brochure
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
