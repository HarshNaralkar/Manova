
import React from 'react';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        alt="Luxurious interior living room"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-4 animate-fade-in-up">
          Designing with Intention, Crafting with Soul
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Manovaa Designs transforms spaces into thoughtful, personalized environments that reflect the mind's creativity.
        </p>
      </div>
       <div className="absolute bottom-10 z-20 animate-bounce">
        <ArrowDownIcon className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
