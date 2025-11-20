import React, { useState } from 'react';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const portfolioImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
];

const TabButton: React.FC<{ active?: boolean; children: React.ReactNode }> = ({ active, children }) => (
    <button className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
        {children}
    </button>
)

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === portfolioImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[70vh] md:h-screen w-full bg-black flex items-center justify-center">
      <div className="absolute inset-0">
        {portfolioImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Portfolio image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <button onClick={handlePrev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button onClick={handleNext} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-lg px-4">
        <div className="bg-black/50 backdrop-blur-md rounded-full p-2 flex items-center justify-between text-white text-xs">
            <TabButton active>● Images <span className="text-gray-400 ml-1">12 Previews</span></TabButton>
            <TabButton>● Videos <span className="text-gray-400 ml-1">10 Previews</span></TabButton>
            <TabButton>● 360° Panoramas <span className="text-gray-400 ml-1">Coming Soon...</span></TabButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;