
import React from 'react';
import { Eye, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye size={24} className="text-white" />
              <span className="text-xl font-heading font-bold text-white">Vision Cart</span>
            </div>
            <p className="text-gray-300 mb-6">
              Premium eyewear that combines cutting-edge technology with stylish design for the perfect vision experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coral transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-coral transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-300 hover:text-coral transition-colors">Collection</Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-300 hover:text-coral transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-coral transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-coral transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/eye-testing" className="text-gray-300 hover:text-coral transition-colors">Eye Testing</Link>
              </li>
              <li>
                <Link to="/frame-fitting" className="text-gray-300 hover:text-coral transition-colors">Frame Fitting</Link>
              </li>
              <li>
                <Link to="/lens-consultation" className="text-gray-300 hover:text-coral transition-colors">Lens Consultation</Link>
              </li>
              <li>
                <Link to="/repairs" className="text-gray-300 hover:text-coral transition-colors">Repairs & Adjustments</Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-300 hover:text-coral transition-colors">Insurance Partners</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-coral mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Vision Cart, Main Market, Rampur, Uttar Pradesh, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-coral flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-coral transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-coral flex-shrink-0" />
                <a href="mailto:info@visioncart.com" className="text-gray-300 hover:text-coral transition-colors">
                  info@visioncart.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vision Cart. All rights reserved. Owner: Ankit Srivastava</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
