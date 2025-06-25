import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">KG</span>
              </div>
              <span className="text-white font-semibold text-2xl">KG International</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of precision bearings and industrial solutions, trusted by global industries for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Ball Bearings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Roller Bearings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Thrust Bearings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Needle Bearings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Spherical Bearings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Warranty</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Industrial Ave, Manufacturing District</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@kginternational.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 8AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} KG International Bearings. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
