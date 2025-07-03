
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 text-center py-8 px-6 mt-20">
      <div className="container mx-auto text-gray-400">
        <p className="font-bold text-white mb-2">Quark IT</p>
        <p className="mb-4">Soluções digitais inteligentes pra quem quer vender de verdade.</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Quark IT. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
