// pages/Home.tsx

import React from 'react';
import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ImproveSkills />
    </div>
  );
};

export default Home;
