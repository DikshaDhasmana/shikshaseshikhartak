import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Shiksha Se Shikhar Tak" className="h-12 w-auto" />
              <span className="font-bold text-lg">Shiksha Se Shikhar Tak</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering communities through education and sustainable development initiatives. 
              Together, we build a brighter future for all.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/ShikshaSeShikharTak/" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/shiksha-se-shikhar-tak-ngo" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link to="/csr" className="text-gray-300 hover:text-white transition-colors duration-200">
                  CSR
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">shikshaseshikhartak@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  +91 98990 09330 <br /> +91 82870 93100
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  Sector 2C/256, First Floor <br />
                  Near Mewar Institute, Vasundhara <br />
                  Ghaziabad, Uttar Pradesh - 201012
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shiksha Se Shikhar Tak. All rights reserved. | 
            <span className="ml-1 text-orange-400">Made with ❤️ for Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
