import React from 'react';
import lorIntegreon from '../assets/lorintegreon.jpg';
import lorBLS from '../assets/lorbls.jpg';

// Import company logos
import integreon_logo from '../assets/integreon_logo.jpeg';
import bls_logo from '../assets/bls_logo.png';
import powerparts_logo from '../assets/powerparts_logo.jpeg';
import gainwell_logo from '../assets/gainwell_logo.jpeg';
import capgemini_logo from '../assets/capgemini_logo.png';

const CSR: React.FC = () => {
  const companies = [
    { name: 'Integreon Managed Solutions (India) Pvt. Ltd.', logo: integreon_logo },
    { name: 'Big Language Solutions', logo: bls_logo },
    { name: 'Power Parts Private Limited', logo: powerparts_logo },
    { name: 'Gainwell Commosales Private Limited', logo: gainwell_logo },
    { name: 'Capgemini India', logo: capgemini_logo },
  ];

  const lors = [
    { src: lorIntegreon, alt: 'Letter of Recommendation from Integreon Managed Solutions' },
    { src: lorBLS, alt: 'Letter of Recommendation from Big Language Solutions' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CSR Partnerships
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Over the past decade, we have successfully collaborated with numerous reputable companies on a variety of initiatives.
          </p>
        </div>
      </section>

      {/* Companies Partnered With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Companies Partnered With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are proud to have collaborated with these esteemed organizations to drive positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="mx-auto mb-6 h-24 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition of Our Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition of Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Letters of recommendation from our valued partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lors.map((lor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={lor.src}
                  alt={lor.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
