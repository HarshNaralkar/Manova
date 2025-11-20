import React from 'react';
import PageHero from '../components/PageHero';

interface Project {
    id: number;
    img: string;
    title: string;
    cat: string;
    description: string;
    images: string[];
}

const ProjectsPage: React.FC = () => {
    const projects: Project[] = [
        { 
            id: 1,
            img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", 
            title: "Modern Residence", 
            cat: "Residential",
            description: "A contemporary residential design featuring clean lines and minimalist aesthetics.",
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
            description: "Elegant luxury villa with premium finishes and sophisticated design elements.",
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
            description: "Modern corporate office space designed for productivity and collaboration.",
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
            description: "Sleek minimalist apartment with functional design and optimal space utilization.",
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
            description: "Warm and inviting residential space with comfortable furnishings and ambient lighting.",
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
            description: "Sophisticated boutique hotel lobby showcasing luxury and contemporary design.",
            images: [
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1540932239986-310128078ceb?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            ]
        },
    ];

    const handleProjectClick = (projectId: number) => {
        window.location.hash = `#/project-detail/${projectId}`;
    };

    return (
        <>
            <PageHero title="Our Projects" subtitle="A showcase of our finest work, blending aesthetics with functionality." bgImage="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop" />
            <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p) => (
                            <div 
                                key={p.id} 
                                className="group rounded-lg overflow-hidden shadow-2xl bg-[#1E1E1E] cursor-pointer"
                                onClick={() => handleProjectClick(p.id)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => e.key === 'Enter' && handleProjectClick(p.id)}
                            >
                                <div className="overflow-hidden h-64">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"/>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-[#b89e5a]">{p.cat}</p>
                                    <h3 className="text-xl font-serif font-bold text-white mt-1">{p.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;
