import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl lg:text-5xl font-bold text-[#b89e5a]">{value}</p>
    <p className="text-gray-400 mt-1">{label}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="bg-[#242424] py-20 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#1E1E1E] to-transparent"></div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase text-[#b89e5a]">About Us</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            Where Creative Thought Meets Timeless Design
          </h3>
          <p className="text-gray-400">
            Manovaa, meaning 'Of the Mind', is a design studio built on the philosophy that every space should be a reflection of its inhabitants' personality and soul. We craft environments that are both intellectually stimulating and emotionally resonant.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <StatCard value="150+" label="Projects" />
            <StatCard value="12+" label="Years of Experience" />
            <StatCard value="50+" label="Happy Clients" />
            <StatCard value="12" label="Design Awards" />
          </div>
          <div className="pt-6">
            <a href="#/contact" className="bg-[#b89e5a] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#b89e5a]/20">
              Contact Us
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-4 h-[500px]">
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop" alt="Modern living room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1537726235470-8504e3b77c06?q=80&w=1300&auto=format&fit=crop" alt="Interior detail" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop" alt="Interior detail" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;