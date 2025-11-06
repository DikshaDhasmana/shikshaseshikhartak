import React from 'react';
import { Phone } from 'lucide-react';
import rajnijoshi from '../assets/rajnijoshi.jpg';
import neetukanduliya from '../assets/neetukanduliya.jpg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajni Dhoundiyal Joshi',
      role: 'Founder & President',
      image: rajnijoshi,
      phone: '',
    },
    {
      name: 'Neetu Kanduliya',
      role: 'Vice President',
      image: neetukanduliya,
      phone: '',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Dedicated professionals working tirelessly to transform communities through 
            education and sustainable development initiatives.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals who lead our mission and drive our impact 
              across communities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex space-x-4">
                        <a
                          href={`mailto:${member.phone}`}
                          className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                        >
                          <Phone className="h-5 w-5 text-gray-700" />
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-orange-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              We're always looking for passionate individuals who share our vision of 
              transforming lives through education. Whether as a volunteer, educator, 
              or team member, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:shikshaseshikhartak.gmail.com"
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