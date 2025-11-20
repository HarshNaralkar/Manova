import React from 'react';
import Hero from '../components/Landingpage';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import ThreeDModel from '../components/ThreeDModel';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <div className="py-20 sm:py-24 lg:py-32 bg-[#1E1E1E]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ThreeDModel />
      </div>
    </div>
    <Portfolio />
  </>
);

export default HomePage;