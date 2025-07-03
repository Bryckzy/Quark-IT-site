import React, { useState } from 'react';

const timelineData = [
  {
    year: '2020',
    emoji: '🧩',
    title: 'Fundação da Quark IT',
    description: 'Iniciamos como um e-commerce de tecnologia, explorando o mercado e aprendendo com cada venda.',
  },
  {
    year: '2021–2022',
    emoji: '🧠',
    title: 'Validação e Aprendizado',
    description: 'Analisamos o mercado e percebemos que nosso valor estava em aplicar a tecnologia, não apenas vendê-la.',
  },
  {
    year: 'Set/2023',
    emoji: '🔄',
    title: 'A Grande Reformulação',
    description: 'Deixamos de ser loja para nos tornarmos uma consultoria de tecnologia, focada em IA e automação.',
  },
  {
    year: '2024',
    emoji: '🚀',
    title: 'Lançamento do Studio',
    description: 'Nasce o Quark IT Studio, com foco em criar sites, SEO e branding para pequenos negócios decolarem.',
  },
  {
    year: '2025',
    emoji: '🌐',
    title: 'Expansão do Ecossistema',
    description: 'Nossa visão para o futuro: um hub digital completo que integra consultoria, execução e automação para o crescimento de empresas.',
  },
];

const HistorySection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(timelineData[timelineData.length - 2].year);

  const selectedItem = timelineData.find(item => item.year === selectedYear);

  return (
    <section id="quem-somos" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos: <span className="gradient-text">Nossa Jornada</span></h2>
            <p className="text-gray-300 leading-relaxed">
                A Quark IT nasceu com um espírito inquieto: usar a tecnologia para resolver problemas reais com simplicidade e inteligência. O que começou como um e-commerce em 2020, evoluiu para o Quark IT Studio em 2024, um braço focado em marketing, sites e SEO para pequenos negócios. Hoje, somos um ecossistema que combina tecnologia e branding para empresas que querem crescer de verdade — sem enrolação, com resultado.
            </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Year Selector */}
          <div className="flex justify-center items-center flex-wrap gap-2 md:gap-6 mb-8 p-2 bg-black/20 border border-white/10 rounded-full">
            {timelineData.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-3 py-2 md:px-5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedYear === item.year
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'bg-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Content Card */}
          {selectedItem && (
            <div className="bg-[#110f24]/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl shadow-purple-500/10 min-h-[240px] flex flex-col justify-center animate-fadeInUp">
                <div className="text-center">
                    <span className="text-5xl mb-4 inline-block">{selectedItem.emoji}</span>
                    <h3 className="text-2xl font-bold mb-2 text-white">{selectedItem.title}</h3>
                    <p className="text-gray-300 max-w-xl mx-auto">
                        {selectedItem.description}
                    </p>
                </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
