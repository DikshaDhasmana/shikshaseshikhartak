import React from 'react';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import EventsSlider from '../components/EventsSlider';
import DonateSection from '../components/DonateSection';
import FacebookPosts from '../components/FacebookPosts';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <MissionVision />
      <EventsSlider />
      <DonateSection />
      <FacebookPosts />
    </div>
  );
};

export default Home;