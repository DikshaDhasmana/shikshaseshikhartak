import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';
import gyansurbhi from '../assets/gyansurbhi.png';
import shaktiaarogya from '../assets/shaktiaarogya.png';
import sattvikyatra from '../assets/sattvikyatra.png';
import sashakt from '../assets/sashakt.png';
import aarohan from '../assets/aarohan.png';
import posh from '../assets/posh.jpeg';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  // ✅ Initiatives data
  const initiatives = [
    {
      id: 1,
      title: 'Gyan Surbhi',
      image: gyansurbhi,
      description:
        'A flagship initiative of "Shiksha Se Shikhar Tak," dedicated to educating and empowering underprivileged children. By providing academic support, essential learning resources, and creative opportunities, we aim to nurture holistic development and transform lives through education.',
    },
    {
      id: 2,
      title: 'Shakti Aarogya',
      image: shaktiaarogya,
      description:
        'Focused on improving the health and sanitation of underserved communities through free medical checkups, hygiene awareness, and healthcare access for all.',
    },
    {
      id: 3,
      title: 'Sattvik Yatra',
      image: sattvikyatra,
      description:
        'Dedicated to the holistic development of Uttarakhand through education, healthcare, infrastructure, and sustainable community-driven solutions.',
    },
    {
      id: 4,
      title: 'Sashakt',
      image: sashakt,
      description:
        'Focused on empowering women through self-defense and skill-building programs to foster independence and confidence.',
    },
    {
      id: 5,
      title: 'Aarohan',
      image: aarohan,
      description:
        'Empowering individuals by enhancing their skills and creating meaningful employment opportunities through vocational and practical training.',
    },
    {
      id: 5,
      title: 'POSH Training and Compliance',
      image: posh,
      description:
        'Delivered 100+ POSH/POCSO/D&I workshops across corporates and institutions. Building compliant, inclusive & future-ready workplaces.',
    },
  ];

  // ✅ Just show all initiatives (filter logic removed)
  const filteredEvents = initiatives;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Events & Initiatives
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
            Discover our ongoing programs, workshops, and community initiatives that
            are making a real difference in education and development across India.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((initiative) => (
              <div
                key={initiative.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
