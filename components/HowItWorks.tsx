import React from 'react';

const ServiceItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="relative pl-8">
     <div className="absolute left-0 top-1 text-[#b89e5a] font-bold text-xl">•</div>
    <h4 className="font-bold text-white text-lg">{title}</h4>
    <p className="text-gray-400 mt-1">{description}</p>
  </div>
);


const ServicesPreview: React.FC = () => {
  return (
    <section className="bg-[#1E1E1E] py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="rounded-xl overflow-hidden shadow-2xl h-[500px] md:h-[600px]">
          <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1887&auto=format&fit=crop" alt="Stylish office space" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-8">
          <h2 className="text-sm font-bold uppercase text-[#b89e5a]">Our Services</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            A Thoughtful Approach to Design
          </h3>
          <div className="space-y-6">
              <ServiceItem title="Residential Design" description="Crafting personalized and comfortable living spaces that reflect your unique style." />
              <ServiceItem title="Commercial Spaces" description="Designing functional and inspiring environments for businesses to thrive." />
              <ServiceItem title="3D Visualization" description="Bringing your vision to life with photorealistic renders and virtual tours before construction begins." />
          </div>
          <div className="pt-6">
            <a href="#/services" className="inline-block bg-[#b89e5a] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#b89e5a]/20">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;