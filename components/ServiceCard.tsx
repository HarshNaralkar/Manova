import React from 'react';

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
    <div className="bg-[#1E1E1E]/50 p-8 rounded-xl border border-gray-800/50 shadow-lg backdrop-blur-sm">
        <div className="text-[#b89e5a] mb-4">{icon}</div>
        <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
)

export default ServiceCard;
