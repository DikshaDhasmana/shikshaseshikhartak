import React from 'react';
import { Users, Target, Award, TrendingUp, BookOpen, Heart, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '2015', event: 'Founded with a vision to transform education' },
    { year: '2017', event: 'Reached 1,000 students across 10 communities' },
    { year: '2019', event: 'Launched digital literacy programs' },
    { year: '2021', event: 'Established 50+ learning centers' },
    { year: '2023', event: 'Impacted 10,000+ lives through various programs' },
    { year: '2024', event: 'Expanded to 150+ communities nationwide' }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Students Educated', color: 'text-blue-600' },
    { icon: BookOpen, number: '150+', label: 'Communities Served', color: 'text-green-600' },
    { icon: Award, number: '50+', label: 'Learning Centers', color: 'text-purple-600' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            For nearly a decade, we've been committed to transforming lives through education, 
            building stronger communities, and creating sustainable change across India.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Shiksha Se Shikhar Tak was born from a simple yet powerful belief: every child, 
                  regardless of their circumstances, deserves access to quality education that can 
                  transform their future.
                </p>
                <p>
                  Founded in 2015 by a group of passionate educators and social workers, our 
                  organization started with a small learning center in rural Delhi. What began 
                  as a grassroots initiative has grown into a nationwide movement, touching the 
                  lives of thousands of children and families.
                </p>
                <p>
                  Today, we operate across 150+ communities, running comprehensive programs that 
                  address not just academic learning, but also digital literacy, skill development, 
                  and community empowerment. Our holistic approach ensures that education becomes 
                  a catalyst for sustainable development.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Our story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">9+ Years</div>
                <div className="text-sm">of Dedicated Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These numbers represent real lives transformed, communities empowered, 
              and futures brightened through our collective efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center p-4 rounded-full bg-gray-100 mb-6`}>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that mark our growth and the expanding impact of our mission.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a comprehensive, community-centered approach that addresses 
              the root causes of educational inequality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Community-Centered',
                description: 'We work closely with local communities to understand their unique needs and challenges.'
              },
              {
                icon: Lightbulb,
                title: 'Innovation-Driven',
                description: 'We leverage technology and innovative teaching methods to enhance learning outcomes.'
              },
              {
                icon: Globe,
                title: 'Sustainable Impact',
                description: 'Our programs are designed for long-term sustainability and community ownership.'
              },
              {
                icon: Users,
                title: 'Collaborative',
                description: 'We partner with local organizations, government, and volunteers to maximize impact.'
              }
            ].map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;