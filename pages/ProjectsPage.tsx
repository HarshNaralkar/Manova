import React from 'react';
import PageHero from '../components/PageHero';

const ProjectsPage: React.FC = () => {
    const projects = [
        { img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop", title: "Modern Residence", cat: "Residential" },
        { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", title: "Luxury Villa", cat: "Residential" },
        { img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop", title: "Corporate Office", cat: "Commercial" },
        { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop", title: "Minimalist Apartment", cat: "Residential" },
        { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop", title: "Cozy Living Space", cat: "Residential" },
        { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop", title: "Boutique Hotel Lobby", cat: "Commercial" },
    ];
    return (
        <>
            <PageHero title="Our Projects" subtitle="A showcase of our finest work, blending aesthetics with functionality." bgImage="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop" />
            <div className="py-20 sm:py-24 lg:py-32 bg-[#242424]">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <div key={i} className="group rounded-lg overflow-hidden shadow-2xl bg-[#1E1E1E]">
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
