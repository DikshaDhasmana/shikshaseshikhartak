import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events = [
    {
      id: 1,
      title: 'Digital Literacy Workshop',
      date: '2024-04-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Community Center, Delhi',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Comprehensive training program to help community members develop essential digital skills for the modern world. Participants will learn basic computer operations, internet usage, and digital safety.',
      participants: 150,
      status: 'upcoming',
      category: 'Training'
    },
    {
      id: 2,
      title: 'Girl Child Education Summit',
      date: '2024-03-22',
      time: '9:00 AM - 5:00 PM',
      location: 'Various Villages, Rajasthan',
      image: 'https://images.pexels.com/photos/8471791/pexels-photo-8471791.jpeg',
      description: 'A comprehensive initiative focused on promoting education for girls and addressing barriers that prevent them from accessing quality learning opportunities.',
      participants: 300,
      status: 'past',
      category: 'Advocacy'
    },
    {
      id: 3,
      title: 'Teacher Training Program',
      date: '2024-05-10',
      time: '8:00 AM - 6:00 PM',
      location: 'Training Center, Mumbai',
      image: 'https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg',
      description: 'Professional development workshop for educators focusing on modern teaching methodologies, classroom management, and student engagement techniques.',
      participants: 80,
      status: 'upcoming',
      category: 'Training'
    },
    {
      id: 4,
      title: 'Community Health & Education Fair',
      date: '2024-02-28',
      time: '10:00 AM - 3:00 PM',
      location: 'Central Park, Bangalore',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'A community gathering combining health awareness, educational resources, and family engagement activities to promote holistic well-being.',
      participants: 500,
      status: 'past',
      category: 'Community'
    },
    {
      id: 5,
      title: 'Adult Literacy Campaign Launch',
      date: '2024-06-05',
      time: '11:00 AM - 2:00 PM',
      location: 'Government School, Pune',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Launching our new adult literacy program designed to help adults develop reading, writing, and basic numeracy skills for personal and professional growth.',
      participants: 200,
      status: 'upcoming',
      category: 'Launch'
    },
    {
      id: 6,
      title: 'Educational Technology Expo',
      date: '2024-01-15',
      time: '9:00 AM - 7:00 PM',
      location: 'Tech Hub, Hyderabad',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      description: 'Showcasing innovative educational technologies and digital learning tools that can transform the learning experience in underserved communities.',
      participants: 350,
      status: 'past',
      category: 'Exhibition'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    return event.status === activeFilter;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isUpcoming = (dateStr: string) => {
    return new Date(dateStr) > new Date();
  };

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
            Discover our ongoing programs, workshops, and community initiatives that are 
            making a real difference in education and development across India.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Browse Our Events
            </h2>
            
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All Events
                </button>
                <button
                  onClick={() => setActiveFilter('upcoming')}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeFilter === 'upcoming'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveFilter('past')}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeFilter === 'past'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      isUpcoming(event.date)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      isUpcoming(event.date)
                        ? 'bg-blue-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {isUpcoming(event.date) ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-3 text-blue-500" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-3 text-green-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 text-red-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-3 text-purple-500" />
                      <span className="text-sm">{event.participants} participants</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your filter to see more events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Our Events
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive updates about upcoming events, 
              workshops, and community initiatives. Be the first to know about opportunities 
              to get involved and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;