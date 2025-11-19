import React, { useState } from 'react';
import PageHero from '../components/PageHero';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${
            active ? 'bg-[#b89e5a] text-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'
        }`}
    >
        {children}
    </button>
);

const images = [
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537726235470-8504e3b77c06?q=80&w=1300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
];

const videos = [
    { thumb: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1920&auto=format&fit=crop", title: "Elegant Living Room Tour" },
    { thumb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1920&auto=format&fit=crop", title: "Modern Kitchen Walkthrough" },
    { thumb: "https://images.unsplash.com/photo-1617104677241-c75002a823f6?q=80&w=1920&auto=format&fit=crop", title: "Bedroom Design Details" },
    { thumb: "https://images.unsplash.com/photo-1560185007-c5ca9d2c015d?q=80&w=1920&auto=format&fit=crop", title: "Luxury Bathroom Features" },
];


const GalleryPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'images' | 'videos' | 'panorama'>('images');

    return (
        <>
            <PageHero title="Gallery" subtitle="Explore our curated collection of designs and visualizations." bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" />
            <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12">
                        <TabButton active={activeTab === 'images'} onClick={() => setActiveTab('images')}>Images</TabButton>
                        <TabButton active={activeTab === 'videos'} onClick={() => setActiveTab('videos')}>Videos</TabButton>
                        <TabButton active={activeTab === 'panorama'} onClick={() => setActiveTab('panorama')}>3D Panorama</TabButton>
                    </div>

                    <div>
                        {activeTab === 'images' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {images.map((img, i) => (
                                    <div key={i} className="group rounded-lg overflow-hidden shadow-2xl bg-[#1E1E1E]">
                                        <div className="overflow-hidden h-64">
                                            <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'videos' && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {videos.map((video, i) => (
                                    <div key={i} className="group rounded-lg overflow-hidden shadow-2xl bg-[#1E1E1E] relative">
                                        <div className="overflow-hidden h-64">
                                            <img src={video.thumb} alt={video.title} className="w-full h-full object-cover"/>
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-serif text-white">{video.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'panorama' && (
                            <div className="text-center py-20">
                                <h3 className="text-3xl font-serif text-white">Coming Soon</h3>
                                <p className="text-gray-400 mt-2">Our interactive 3D panorama experiences are currently in development.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryPage;
