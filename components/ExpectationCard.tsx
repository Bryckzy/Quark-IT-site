import React from 'react';

interface ExpectationCardProps {
    icon: React.ReactNode;
    children: React.ReactNode;
}

const ExpectationCard: React.FC<ExpectationCardProps> = ({ icon, children }) => {
    return (
        <div className="bg-[#110f24]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col justify-center items-center">
            <div className="text-purple-400 mb-4 inline-block">
                {icon}
            </div>
            <p className="text-lg text-white font-medium">
                {children}
            </p>
        </div>
    );
};

export default ExpectationCard;