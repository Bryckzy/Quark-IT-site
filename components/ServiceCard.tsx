import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, children }) => {
  return (
    <div className="group relative bg-[#110f24] p-8 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

export default ServiceCard;