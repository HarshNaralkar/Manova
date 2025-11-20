import React, { useState, useEffect } from 'react';
import ThreeDModel from '../components/ThreeDModel';
import ProjectAreas from '../components/ProjectAreas';

interface Project {
    id: number;
    img: string;
    title: string;
    cat: string;
    description: string;
    images: string[];
}

const ProjectDetailPage: React.FC = () => {
    const [project, setProject] = useState<Project | null>(null);

    const projects: Project[] = [
        { 
            id: 1,
            img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", 
            title: "Modern Residence", 
            cat: "Residential",
            description: "A contemporary residential design featuring clean lines and minimalist aesthetics. This project showcases innovative space utilization and modern furnishing.",
            images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1537726235470-8504e3b77c06?q=80&w=1300&auto=format&fit=crop"
            ]
        },
        { 
            id: 2,
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", 
            title: "Luxury Villa", 
            cat: "Residential",
            description: "Elegant luxury villa with premium finishes and sophisticated design elements. Every detail has been carefully curated for ultimate comfort and elegance.",
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560185007-c5ca9d2c015d?q=80&w=1920&auto=format&fit=crop"
            ]
        },
        { 
            id: 3,
            img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop", 
            title: "Corporate Office", 
            cat: "Commercial",
            description: "Modern corporate office space designed for productivity and collaboration. Features open layouts with breakout areas and executive spaces.",
            images: [
                "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            ]
        },
        { 
            id: 4,
            img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop", 
            title: "Minimalist Apartment", 
            cat: "Residential",
            description: "Sleek minimalist apartment with functional design and optimal space utilization. A perfect blend of style and practicality.",
            images: [
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1920&auto=format&fit=crop"
            ]
        },
        { 
            id: 5,
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop", 
            title: "Cozy Living Space", 
            cat: "Residential",
            description: "Warm and inviting residential space with comfortable furnishings and ambient lighting. Creates the perfect sanctuary for relaxation.",
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1617104677241-c75002a823f6?q=80&w=1920&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1920&auto=format&fit=crop"
            ]
        },
        { 
            id: 6,
            img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop", 
            title: "Boutique Hotel Lobby", 
            cat: "Commercial",
            description: "Sophisticated boutique hotel lobby showcasing luxury and contemporary design. An inviting space that sets the tone for guests.",
            images: [
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            ]
        },
    ];

    useEffect(() => {
        const hash = window.location.hash;
        const projectId = parseInt(hash.split('/')[2]);
        const foundProject = projects.find(p => p.id === projectId);
        if (foundProject) {
            setProject(foundProject);
        }
    }, []);

    if (!project) {
        return <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="bg-[#242424] min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="mb-8">
                    <p className="text-sm text-[#b89e5a] font-semibold">{project.cat}</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">{project.title}</h1>
                </div>

                <div className="mb-12">
                    <img src={project.img} alt={project.title} className="w-full h-96 object-cover rounded-lg" />
                </div>

                <div className="mb-12">
                    <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">3D Experience</h2>
                    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800/50">
                        <ThreeDModel />
                    </div>
                </div>

                <ProjectAreas projectId={project.id} />

                {/* <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-white mb-6">Gallery</h2>
                    <div className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="flex-shrink-0">
                                <img 
                                    src={img} 
                                    alt={`${project.title} - Image ${idx + 1}`} 
                                    className="h-64 w-80 object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div> */}

                <div className="mt-12 text-center">
                    <a 
                        href="#/projects" 
                        className="inline-block bg-[#b89e5a] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 shadow-lg shadow-[#b89e5a]/20"
                    >
                        Back to Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
