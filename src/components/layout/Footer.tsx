import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-sm leading-none">
                  SR CLEANROOM &
                </span>
                <span className="font-bold text-white text-sm leading-none">
                  ENGINEERING PROJECT
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of contamination control solutions for pharmaceuticals, 
              hospitals, chemicals, and food & beverages industries.
            </p>
            <div className="text-sm text-primary-glow font-semibold">
              Shaping Controlled Environment
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-glow">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-primary transition-smooth">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-light">Services</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">Cleanroom Equipment & Infrastructure</div>
              <div className="text-gray-300">HVAC Consultants & Contractors</div>
              <div className="text-gray-300">Pharmaceutical Turnkey Projects</div>
              <div className="text-gray-300">Purified Water Systems</div>
              <div className="text-gray-300">Process Equipment Manufacturing</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-light">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>Ankleshwar, Ahmedabad</div>
                  <div>& Vadodara, India</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 XXXX XXXX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">info@srcleanroom.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">www.srcleanroom.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © 2024 SR Cleanroom & Engineering Project. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>Certified by:</span>
                <span className="bg-white/10 px-2 py-1 rounded">QCFI</span>
                <span className="bg-white/10 px-2 py-1 rounded">NFPA</span>
                <span className="bg-white/10 px-2 py-1 rounded">IAF</span>
                <span className="bg-white/10 px-2 py-1 rounded">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;