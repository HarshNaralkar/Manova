import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => (
     <>
        <PageHero title="Our Services" subtitle="Tailored design solutions that bring your vision to life." bgImage="https://images.unsplash.com/photo-1556702585-eb5f77047f40?q=80&w=1964&auto=format&fit=crop" />
        <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} title="Residential Design" desc="Crafting personalized and comfortable living spaces that feel like home from the moment you step inside."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} title="Commercial Design" desc="Designing inspiring and functional commercial environments that enhance productivity and brand identity."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} title="3D Visualization" desc="Bringing your projects to life with stunningly realistic 3D renders and virtual walkthroughs."/>
                <ServiceCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>} title="Design Consultancy" desc="Expert advice and creative direction to elevate your design projects from concept to completion."/>
            </div>
        </div>
     </>
);

export default ServicesPage;
