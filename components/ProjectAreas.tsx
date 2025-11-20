import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface ProjectAreasProps {
    projectId: number;
}

const ProjectAreas: React.FC<ProjectAreasProps> = ({ projectId }) => {
    const [activeTab, setActiveTab] = useState<'hall' | 'kitchen' | 'bedroom'>('hall');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Image galleries for each area - customizable per project
    const areaGalleries = {
        hall: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551632786-de05b6f91721?q=80&w=1400&auto=format&fit=crop",
        ],
        kitchen: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1604857521633-6403f3a0dcc0?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1400&auto=format&fit=crop",
        ],
        bedroom: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617325247661-675ab4b64ef0?q=80&w=1400&auto=format&fit=crop",
        ],
    };

    const tabs = [
        { id: 'hall', label: 'Hall' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'bedroom', label: 'Bedroom' },
    ] as const;

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    return (
        <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-8">Project Areas</h2>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-gray-700">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-4 px-1 font-semibold text-lg transition-all duration-300 relative group ${
                            activeTab === tab.id
                                ? 'text-[#b89e5a]'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b89e5a] rounded-t-sm"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Image Gallery for Active Tab */}
            <div className="relative">
                <div
                    className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth"
                    style={{
                        scrollBehavior: 'smooth',
                    }}
                >
                    {areaGalleries[activeTab].map((img, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => handleImageClick(idx)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleImageClick(idx);
                                }
                            }}
                            aria-label={`Open ${activeTab} image ${idx + 1}`}
                        >
                            <img
                                src={img}
                                alt={`${activeTab} - Image ${idx + 1}`}
                                className="h-72 w-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Indicators */}
                <div className="absolute top-0 right-0 w-24 h-72 bg-gradient-to-l from-[#242424] to-transparent pointer-events-none rounded-lg"></div>
            </div>

            {/* Image Modal */}
            <ImageModal
                isOpen={isModalOpen}
                images={areaGalleries[activeTab]}
                initialIndex={selectedImageIndex}
                onClose={() => setIsModalOpen(false)}
                category={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            />

            {/* Info Text */}
            <p className="text-gray-400 text-sm mt-4">
                Click any image to view in fullscreen • Scroll horizontally to view more images in the {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} section.
            </p>
        </div>
    );
};

export default ProjectAreas;
