import React from 'react';
import { Heart, Users, BookOpen, Home } from 'lucide-react';
import donationqr from '../assets/donationqr.jpg'; // 👈 add your QR image in assets folder

const Donate: React.FC = () => {
  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Provide books, stationery, and learning materials to underprivileged children.',
      percentage: 45,
    },
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Professional development programs for educators in rural communities.',
      percentage: 25,
    },
    {
      icon: Home,
      title: 'Infrastructure',
      description: 'Building and maintaining learning centers and digital labs.',
      percentage: 20,
    },
    {
      icon: Heart,
      title: 'Community Programs',
      description: 'Health, nutrition, and family support initiatives.',
      percentage: 10,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-full mb-8">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto">
            Your contribution directly impacts lives, providing education and opportunities 
            to those who need it most. Every donation counts.
          </p>
        </div>
      </section>

      {/* QR Donation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Donate Instantly via QR
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Scan the QR code below to make a quick and secure donation. 
            Every contribution helps us bring education and hope to more children.
          </p>

          {/* QR Image */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <img
                src={donationqr}
                alt="Donation QR"
                className="w-64 h-64 object-contain mx-auto"
              />
            </div>
          </div>

          {/* Button */}
          <a
            href="https://forms.gle/yuSRryChpMuH31mn6" // 👈 replace with your Google Form or donor page
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300"
          >
            Fill Donor Details Form
          </a>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Your Donation is Used
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Here's exactly how your contributions 
              are allocated across our various programs and initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-3">{area.percentage}%</div>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tax Benefits Available</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your donation is eligible for tax deduction under Section 80G of the Income Tax Act. 
              You can claim up to 50% of your donation as a tax deduction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Section 80G</div>
                <p className="text-blue-100">Certified under Income Tax Act</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">50% Deduction</div>
                <p className="text-blue-100">On your taxable income</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-2xl font-bold mb-2">Official Receipt</div>
                <p className="text-blue-100">Provided for all donations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
