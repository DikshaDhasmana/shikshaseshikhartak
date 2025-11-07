import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, BookOpen } from 'lucide-react';
import banner from '../assets/banner.png';

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[90vh] sm:min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: banner ? `url(${banner})` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32 md:py-40">
        <div className="animate-fade-in-up">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span>Shiksha Se</span>{' '}
            <span className="text-orange-400">Shikhar Tak</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Providing free and quality education to underprivileged children
            from slums, economically weaker sections, and marginalized
            communities. Empowering women through self-defense training,
            counselling, and skill development. Join us in bridging educational
            gaps and building a brighter future for all.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/donate"
              className="group bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              to="/about"
              className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>Learn More</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-5 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">
                10,000+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-white font-medium">
                Children Educated
              </div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-5 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">
                5,000+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-white font-medium">
                Women Empowered
              </div>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-5 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">
                2,00,000+
              </div>
              <div className="text-sm sm:text-base md:text-lg text-white font-medium">
                Girls Trained in Self-Defence
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
