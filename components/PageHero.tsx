import React from 'react';

const PageHero: React.FC<{ title: string; subtitle: string; bgImage: string }> = ({ title, subtitle, bgImage }) => (
  <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute inset-0 bg-black/70 z-10"></div>
    <img
      src={bgImage}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 px-4 container mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-2">
        {title}
      </h1>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        {subtitle}
      </p>
    </div>
  </section>
);

export default PageHero;
