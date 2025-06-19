import React, { useState } from 'react';
import { Heart, Shield, CheckCircle, Users, BookOpen, Home, CreditCard, Smartphone, Building } from 'lucide-react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'monthly' | 'one-time'>('one-time');

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const impactAreas = [
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Provide books, stationery, and learning materials to underprivileged children.',
      percentage: 45
    },
    {
      icon: Users,
      title: 'Teacher Training',
      description: 'Professional development programs for educators in rural communities.',
      percentage: 25
    },
    {
      icon: Home,
      title: 'Infrastructure',
      description: 'Building and maintaining learning centers and digital labs.',
      percentage: 20
    },
    {
      icon: Heart,
      title: 'Community Programs',
      description: 'Health, nutrition, and family support initiatives.',
      percentage: 10
    }
  ];

  const donationImpacts = [
    { amount: 500, impact: 'Provides school supplies for 5 children for a month' },
    { amount: 1000, impact: 'Sponsors a child\'s education for 2 months' },
    { amount: 2500, impact: 'Funds a teacher\'s training workshop' },
    { amount: 5000, impact: 'Sets up a basic learning center' },
    { amount: 10000, impact: 'Sponsors a complete digital literacy program' }
  ];

  const getSelectedAmountValue = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  const getImpactDescription = () => {
    const amount = getSelectedAmountValue();
    const impact = donationImpacts.find(item => item.amount <= amount);
    return impact ? impact.impact : 'Your contribution will make a significant difference';
  };

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

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Contribution
                </h2>
                <p className="text-xl text-gray-600">
                  Select an amount below or enter a custom donation amount.
                </p>
              </div>

              {/* Donation Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-full">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                      donationType === 'one-time'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                      donationType === 'monthly'
                        ? 'bg-orange-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 font-semibold text-lg transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter a custom amount:
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Impact Description */}
              {getSelectedAmountValue() > 0 && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2">Your Impact:</h3>
                      <p className="text-green-700">{getImpactDescription()}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 cursor-pointer">
                    <CreditCard className="h-6 w-6 text-gray-600 mr-3" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 cursor-pointer">
                    <Smartphone className="h-6 w-6 text-gray-600 mr-3" />
                    <span className="font-medium">UPI/Mobile Wallet</span>
                  </div>
                  <div className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-orange-300 cursor-pointer">
                    <Building className="h-6 w-6 text-gray-600 mr-3" />
                    <span className="font-medium">Net Banking</span>
                  </div>
                </div>
              </div>

              {/* Donate Button */}
              <button
                disabled={getSelectedAmountValue() === 0}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                  getSelectedAmountValue() > 0
                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {getSelectedAmountValue() > 0
                  ? `Donate ₹${getSelectedAmountValue().toLocaleString()} ${donationType === 'monthly' ? '/month' : ''}`
                  : 'Select an amount to continue'
                }
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-2" />
                <span>Your payment is secured with 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tax Benefits Available
            </h2>
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