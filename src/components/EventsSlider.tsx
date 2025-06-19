import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const EventsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: 'Digital Literacy Workshop',
      date: 'March 15, 2024',
      location: 'Community Center, Delhi',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Empowering rural communities with essential digital skills for the modern world.'
    },
    {
      title: 'Girl Child Education Drive',
      date: 'March 22, 2024',
      location: 'Various Villages, Rajasthan',
      image: 'https://images.pexels.com/photos/8471791/pexels-photo-8471791.jpeg',
      description: 'Promoting education for girls and breaking barriers to learning.'
    },
    {
      title: 'Teacher Training Program',
      date: 'April 5, 2024',
      location: 'Training Center, Mumbai',
      image: 'https://images.pexels.com/photos/8926554/pexels-photo-8926554.jpeg',
      description: 'Enhancing teaching methodologies and educational outcomes.'
    },
    {
      title: 'Skill Development Workshop',
      date: 'April 18, 2024',
      location: 'Vocational Center, Bangalore',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      description: 'Building practical skills for sustainable livelihoods.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Events & Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our ongoing efforts to transform communities through education and development programs.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-4xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{event.title}</h3>
                        <p className="text-lg mb-4 text-gray-200">{event.description}</p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-orange-400" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;