import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import InitiativesSlider from '../components/InitiativesSlider';
import DonateSection from '../components/DonateSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <MissionVision />
      <InitiativesSlider />
      <DonateSection />
    </div>
  );
};

export default Home;