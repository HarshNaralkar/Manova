import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesPreview from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import ThreeDModel from '../components/ThreeDModel';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <ServicesPreview />

    {/* New 3D Model Section */}
    <section className="bg-[#1E1E1E] py-20 sm:py-24 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                Immerse Yourself in Our Designs
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-12">
                Explore a virtual tour of one of our signature spaces. Use your mouse to look around, pan, and zoom.
            </p>
            <div className="bg-black/20 rounded-xl border border-gray-800/50 overflow-hidden">
                <ThreeDModel />
            </div>
        </div>
    </section>

    <Portfolio />
  </>
);

export default HomePage;