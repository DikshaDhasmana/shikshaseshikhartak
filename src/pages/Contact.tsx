import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icons for react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Have questions about our programs? Want to volunteer or partner with us? 
            We'd love to hear from you and explore how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to us via email, phone, or visit our office — we’re happy to connect and collaborate.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Email */}
            <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Mail className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">shikshaseshikhartak@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 98990 09330, +91 82870 93100</p>
            </div>

            {/* Address */}
            <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <MapPin className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                Sector 2C/256, First Floor<br />
                Near Mewar Institute, Vasundhara<br />
                Ghaziabad, Uttar Pradesh - 201012
              </p>
            </div>

            {/* Office Hours */}
            <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Clock className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/ShikshaSeShikharTak/"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/shiksha-se-shikhar-tak-ngo"
                className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-xl text-gray-600">
              Located in Vasundhara, Ghaziabad — easily accessible by metro and public transport.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <MapContainer
              center={[28.66875, 77.37558]}
              zoom={16}
              style={{ height: '400px', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[28.66875, 77.37558]}>
                <Popup>
                  Shiksha Se Shikhar Tak<br />
                  Sector 2C/256, First Floor<br />
                  Near Mewar Institute, Vasundhara<br />
                  Ghaziabad, Uttar Pradesh - 201012
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
