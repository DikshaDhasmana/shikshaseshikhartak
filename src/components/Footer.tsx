import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Shiksha Se Shikhar Tak" className="h-12 w-auto" />
              <span className="font-bold text-l">Shiksha Se Shikhar Tak</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering communities through education and sustainable development initiatives.
              Together, we build a brighter future for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                About Us
              </Link>
              <Link to="/team" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Our Team
              </Link>
              <Link to="/events" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Events & Initiatives
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">shikshaseshikhartak@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 98990 09330<br/>+91 82870 93100</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300">
                  Sector 2C/256, First Floor<br />
                  Near Mewar Institute, Vasundhara<br />
                  Ghaziabad, Uttar Pradesh - 201012
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-500">Stay Updated</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates on our initiatives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Shiksha Se Shikhar Tak. All rights reserved. | 
            <span className="ml-2">Made with ❤️ for Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;