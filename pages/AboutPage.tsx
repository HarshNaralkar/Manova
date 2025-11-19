import React from 'react';
import PageHero from '../components/PageHero';

const AboutPage: React.FC = () => (
     <>
        <PageHero title="About Manovaa" subtitle="We design experiences, not just spaces." bgImage="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop" />
        <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Our Philosophy</h2>
                    <p className="text-gray-400 mt-4">At Manovaa Designs, we believe that great design is a dialogue between form and function, space and soul. It's about creating environments that are not only beautiful but also deeply personal and meaningful. Our approach is collaborative, detail-oriented, and dedicated to achieving the unique vision of each client.</p>
                    <p className="text-gray-400 mt-4">We source the finest materials, collaborate with skilled artisans, and manage every project with meticulous attention to detail, ensuring a seamless journey from concept to completion.</p>
                </div>
                <div className="h-96 rounded-lg overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1558992296-2f2eb944357c?q=80&w=1887&auto=format&fit=crop" alt="Design team discussion" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
     </>
);

export default AboutPage;
