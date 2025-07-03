import React from 'react';

interface IconProps {
  className?: string;
}

export const SiteIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const SeoIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z" />
    </svg>
);

export const AdsIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.834 9.168-4.433" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = "w-8 h-8" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.84 3.11 1.33 4.81 1.33h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91zM17.22 15.2c-.22-.11-1.3-.64-1.5-.72c-.2-.08-.35-.11-.49.11c-.15.22-.57.72-.7 1.11c-.13.15-.26.17-.48.06c-.22-.11-1-.37-1.9-1.18c-.7-.64-1.18-1.43-1.32-1.67c-.14-.24-.01-.37.1-.48c.1-.11.22-.28.33-.42c.11-.14.15-.24.22-.4c.08-.16.04-.3-.02-.41c-.06-.11-.49-1.18-.68-1.61c-.18-.42-.37-.36-.49-.36h-.45c-.14 0-.37.04-.57.26c-.2.22-.76.75-.76 1.83c0 1.08.78 2.12.89 2.27c.11.15 1.53 2.34 3.72 3.28c.52.23.93.37 1.26.47c.56.17 1.07.15 1.47.09c.45-.07 1.3-.53 1.48-1.04c.19-.51.19-.95.13-1.04c-.06-.09-.2-.15-.41-.26z" />
    </svg>
);
