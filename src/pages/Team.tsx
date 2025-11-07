import React from 'react';
import { Phone } from 'lucide-react';

// Team images
import rajanijoshi from '../assets/rajanijoshi.jpeg';
import neetukanduliya from '../assets/neetukanduliya.jpeg';
import dimpibora from '../assets/dimpibora.jpeg';
import bhuvanjoshi from '../assets/bhuvanjoshi.jpeg';
import nagendrapokhriyal from '../assets/nagendrapokhriyal.jpeg';
import neerajrawat from '../assets/neerajrawat.jpeg';
import rajivbhardwaj from '../assets/rajivbhardwaj.jpeg';
import rakeshbhandari from '../assets/rakeshbhandari.jpeg';
import richakhankriyal from '../assets/richakhankriyal.jpeg';
import shraddhatiwari from '../assets/shraddhatiwari.jpeg';
import ajaytyagi from '../assets/ajaytyagi.jpeg';
import narendrapayal from '../assets/narendrapayal.jpeg';

const Team: React.FC = () => {
  const teamMembers = [
    { name: 'Rajani Dhoundiyal Joshi', role: 'Founder & President', image: rajanijoshi, phone: '' },
    { name: 'Neetu Kanduliya', role: 'Vice President', image: neetukanduliya, phone: '' },
    { name: 'Dimpi Bora', role: 'Vice President', image: dimpibora, phone: '' },
    { name: 'Ajay Tyagi', role: 'General Secretary', image: ajaytyagi, phone: '' },
    { name: 'Shraddha Tiwari', role: 'Secretary', image: shraddhatiwari, phone: '' },
    { name: 'Neeraj Rawat', role: 'Secretary', image: neerajrawat, phone: '' },
    { name: 'Nagendra Pokhriyal', role: 'Treasurer', image: nagendrapokhriyal, phone: '' },
    { name: 'Bhuvan Chand Joshi', role: 'Legal Advisor', image: bhuvanjoshi, phone: '' },
    { name: 'Rajiv Bhardwaj', role: 'Executive Member', image: rajivbhardwaj, phone: '' },
    { name: 'Rakesh Bhandari', role: 'Executive Member', image: rakeshbhandari, phone: '' },
    { name: 'Richa Khankriyal', role: 'Executive Member', image: richakhankriyal, phone: '' },
    { name: 'Narendra Singh Payal', role: 'Executive Member', image: narendrapayal, phone: '' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet Our Team</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Dedicated professionals working tirelessly to transform communities through education and sustainable development initiatives.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-[420px] flex justify-center items-center bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-auto max-w-full object-contain"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-5">
                    <a
                      href={`mailto:${member.phone || 'shikshaseshikhartak@gmail.com'}`}
                      className="bg-white p-3 rounded-full shadow hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-orange-600 rounded-3xl p-12 text-center text-white shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              We're always looking for passionate individuals who share our vision of transforming lives through education.
              Whether as a volunteer, educator, or team member, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shikshaseshikhartak@gmail.com"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
