import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Purpose & Promise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by purpose, guided by values, and committed to creating lasting impact 
            in communities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              To provide quality education and sustainable development opportunities to underserved 
              communities, empowering individuals to break the cycle of poverty and achieve their 
              full potential through learning and skill development.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 text-orange-500 mr-3" />
                <span>Community-centered approach</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Heart className="h-5 w-5 text-orange-500 mr-3" />
                <span>Sustainable impact focus</span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Eye className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              A world where every individual, regardless of their background or circumstances, 
              has access to quality education and the opportunity to build a dignified, 
              self-reliant life for themselves and their families.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 italic">
                "Education is the most powerful weapon which you can use to change the world." 
                - Nelson Mandela
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Transparency and honesty in all our actions',
                icon: '🤝'
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest quality in education',
                icon: '⭐'
              },
              {
                title: 'Inclusivity',
                description: 'Equal opportunities for all, regardless of background',
                icon: '🌈'
              },
              {
                title: 'Innovation',
                description: 'Creative solutions for educational challenges',
                icon: '💡'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;