import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Shiksha Se</span>
            <span className="block text-orange-400">Shikhar Tak</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering communities through education and sustainable development. 
            Join us in our mission to create lasting change and build a brighter future for all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/donate"
              className="group bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              to="/about"
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn More</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">10,000+</div>
              <div className="text-white font-medium">Students Educated</div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">150+</div>
              <div className="text-white font-medium">Communities Served</div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-white font-medium">Active Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;