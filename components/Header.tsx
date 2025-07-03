
import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './icons';

interface HeaderProps {
    whatsappLink: string;
}

const Header: React.FC<HeaderProps> = ({ whatsappLink }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "py-2 px-4 text-gray-300 hover:text-white transition-colors duration-300";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a href="#inicio" className="text-2xl font-bold gradient-text">
                    Quark IT
                </a>
                
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#inicio" className={navLinkClasses}>Início</a>
                    <a href="#planos" className={navLinkClasses}>Planos</a>
                    <a href="#simulador" className={navLinkClasses}>Simulador</a>
                    <a href="#quem-somos" className={navLinkClasses}>Quem Somos</a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 flex items-center gap-2">
                        <WhatsAppIcon className="h-5 w-5" /> Fale com a Gente
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-lg pb-4">
                    <a href="#inicio" className={`block text-center ${navLinkClasses}`} onClick={() => setIsMenuOpen(false)}>Início</a>
                    <a href="#planos" className={`block text-center ${navLinkClasses}`} onClick={() => setIsMenuOpen(false)}>Planos</a>
                    <a href="#simulador" className={`block text-center ${navLinkClasses}`} onClick={() => setIsMenuOpen(false)}>Simulador</a>
                    <a href="#quem-somos" className={`block text-center ${navLinkClasses}`} onClick={() => setIsMenuOpen(false)}>Quem Somos</a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-full transition-all duration-300 mx-4 mt-2" onClick={() => setIsMenuOpen(false)}>
                        Fale com a Gente
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
