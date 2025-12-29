import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import aarohan from '../assets/aarohan.png';
import gyansurbhi from '../assets/gyansurbhi.png';
import sashakt from '../assets/sashakt.png';
import sattvikyatra from '../assets/sattvikyatra.png';
import shaktiaarogya from '../assets/shaktiaarogya.png';
import posh from '../assets/posh.jpeg';

const InitiativesSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const initiatives = [
    {
      title: 'Gyan Surbhi',
      image: gyansurbhi,
      description: 'Educating and empowering underprivileged children.'
    },
    {
      title: 'Shakti Aarogya',
      image: shaktiaarogya,
      description: 'Empowering Health initiative focuses on improving the health and sanitation of underserved communities.'
    },
    {
      title: 'Sattvik Yatra',
      image: sattvikyatra,
      description: 'Dedicated to the holistic development of Uttarakhand, focusing on education, healthcare, infrastructure, and sustainable practices.'
    },
    {
      title: 'Sashakt',
      image: sashakt,
      description: 'Empowering women through self-defense and other skill- building activities'
    },
    {
      title: 'Aarohan',
      image: aarohan,
      description: 'Empowering individuals by enhancing their skills and creating meaningful employment opportunities.'
    },    
    {
      title: 'POSH Training and Compliance',
      image: posh,
      description: 'Conducting awareness programs and creating a safe and inclusive workplace.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % initiatives.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [initiatives.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % initiatives.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Initiatives
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
              {initiatives.map((initiative, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-4xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{initiative.title}</h3>
                        <p className="text-lg mb-4 text-gray-200">{initiative.description}</p>
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
            {initiatives.map((_, index) => (
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

export default InitiativesSlider;
