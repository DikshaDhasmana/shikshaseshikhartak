import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Home, ArrowRight } from 'lucide-react';

const DonateSection: React.FC = () => {
  const donationImpacts = [
    {
      icon: BookOpen,
      amount: '₹500',
      impact: 'Provides educational materials for 5 children for a month',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Users,
      amount: '₹1,500',
      impact: 'Sponsors a child\'s education for an entire month',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Home,
      amount: '₹5,000',
      impact: 'Sets up a learning center in a rural community',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
            <Heart className="h-8 w-8 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution creates lasting impact in communities. Every donation, 
            big or small, helps us build a brighter future through education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {donationImpacts.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className={`inline-flex items-center justify-center p-4 rounded-full mb-6 ${item.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-4">{item.amount}</div>
                <p className="text-gray-600">{item.impact}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Your Support Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>100% Transparency:</strong> Every rupee is accounted for and used directly for educational programs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Direct Impact:</strong> Your donation reaches beneficiaries without unnecessary overhead.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Regular Updates:</strong> Stay informed about how your contribution is making a difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Ready to Make an Impact?</h4>
                <p className="mb-6 text-orange-100">
                  Join thousands of supporters who are transforming lives through education.
                </p>
                <Link
                  to="/donate"
                  className="group inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;