
import React, { useState, useMemo } from 'react';
import { TrendingUpIcon, MouseClickIcon, UserPlusIcon, CurrencyDollarIcon } from './icons';

const MetricCard = ({ icon, label, value, unit, colorClass }) => (
    <div className={`bg-black/20 p-4 rounded-xl text-center h-full flex flex-col justify-center border border-white/10 ${colorClass}`}>
        <div className="flex justify-center mb-2">
            {icon}
        </div>
        <p className="text-sm opacity-80">{label}</p>
        <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
        {unit && <p className="text-xs opacity-60">{unit}</p>}
    </div>
);


const AdsCalculatorSection: React.FC = () => {
    const [investment, setInvestment] = useState(150);

    const handleInvestmentChange = (value: number) => {
        const minVal = 30;
        const maxVal = 1000;
        if (value < minVal) setInvestment(minVal);
        else if (value > maxVal) setInvestment(maxVal);
        else setInvestment(value);
    };

    const { 
        minReach, maxReach, 
        minClicks, maxClicks,
        minLeads, maxLeads,
        minCPL, maxCPL,
        annualInvestment,
        totalAnnualInvestment,
        whatsappLink
    } = useMemo(() => {
        const minReachVal = Math.round(investment * 20);
        const maxReachVal = Math.round(investment * 45);
        const minClicksVal = Math.round(minReachVal * 0.015);
        const maxClicksVal = Math.round(maxReachVal * 0.03);
        const minLeadsVal = Math.round(minClicksVal * 0.02);
        const maxLeadsVal = Math.round(maxClicksVal * 0.05);
        
        const maxCPLVal = minLeadsVal > 0 ? (investment / minLeadsVal) : 0;
        const minCPLVal = maxLeadsVal > 0 ? (investment / maxLeadsVal) : 0;

        const annualInvestmentVal = investment * 12;
        const totalAnnualInvestmentVal = annualInvestmentVal + 200;
        
        const formattedWhatsappText = encodeURIComponent(`Olá! Gostaria de começar com um investimento de R$${investment}/mês. Poderiam me ajudar?`);
        const dynamicWhatsappLink = `https://wa.me/5511999999999?text=${formattedWhatsappText}`;

        return { 
            minReach: minReachVal.toLocaleString('pt-BR'), 
            maxReach: maxReachVal.toLocaleString('pt-BR'),
            minClicks: minClicksVal.toLocaleString('pt-BR'),
            maxClicks: maxClicksVal.toLocaleString('pt-BR'),
            minLeads: minLeadsVal.toLocaleString('pt-BR'),
            maxLeads: maxLeadsVal.toLocaleString('pt-BR'),
            minCPL: minCPLVal.toFixed(2).replace('.',','),
            maxCPL: maxCPLVal.toFixed(2).replace('.',','),
            annualInvestment: annualInvestmentVal.toLocaleString('pt-BR'),
            totalAnnualInvestment: totalAnnualInvestmentVal.toLocaleString('pt-BR'),
            whatsappLink: dynamicWhatsappLink
        };
    }, [investment]);

    return (
        <section id="simulador" className="py-20">
             <style>{`
                input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 10px; background: #110f24; border-radius: 9999px; outline: none; border: 1px solid rgba(255, 255, 255, 0.1); }
                input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 28px; height: 28px; background-image: linear-gradient(to right, #ec4899, #8b5cf6); cursor: grab; border-radius: 9999px; border: 3px solid white; box-shadow: 0 0 10px rgba(139, 92, 246, 0.7); transition: transform 0.2s; }
                input[type="range"]:active::-webkit-slider-thumb { transform: scale(1.1); cursor: grabbing; }
                input[type="range"]::-moz-range-thumb { width: 28px; height: 28px; background-image: linear-gradient(to right, #ec4899, #8b5cf6); cursor: grab; border-radius: 9999px; border: 3px solid white; box-shadow: 0 0 10px rgba(139, 92, 246, 0.7); }
                input[type="range"]:active::-moz-range-thumb { cursor: grabbing; }
                input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
                input[type=number] { -moz-appearance: textfield; }
            `}</style>
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Painel de Crescimento: <span className="gradient-text">Projete Seu Sucesso</span></h2>
                    <p className="text-lg text-gray-300">
                        Use nosso painel interativo para visualizar como seu investimento se converte em resultados reais e planejar o crescimento do seu negócio.
                    </p>
                </div>

                <div className="bg-[#110f24]/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl shadow-purple-500/10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Column 1: Controls */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white border-b-2 border-purple-500/30 pb-2">1. Controle de Investimento</h3>
                            <div className="bg-[#0c0a1a]/50 p-4 rounded-lg">
                                <label htmlFor="investment-input" className="block text-sm font-bold text-white mb-2">Investimento Mensal em Mídia</label>
                                <div className="flex items-center bg-black/30 rounded-lg p-2">
                                    <span className="text-purple-300 font-bold px-3">R$</span>
                                    <input id="investment-input" type="number" value={investment} onChange={(e) => handleInvestmentChange(Number(e.target.value))} className="w-full bg-transparent text-white text-3xl font-bold focus:outline-none" />
                                </div>
                                <input id="investment-slider" type="range" min="30" max="1000" step="5" value={investment} onChange={(e) => handleInvestmentChange(Number(e.target.value))} className="mt-4" />
                            </div>
                            <div className="bg-[#0c0a1a]/50 p-4 rounded-lg text-center">
                                <p className="text-sm text-white font-bold">Taxa de Gestão Anual</p>
                                <p className="text-2xl gradient-text font-black">R$200</p>
                                <p className="text-xs text-gray-400">(~R$16,67/mês)</p>
                            </div>
                        </div>

                        {/* Column 2: Results */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white border-b-2 border-pink-500/30 pb-2">2. Projeção de Resultados</h3>
                            <div className="grid grid-cols-2 gap-4 flex-grow">
                                <MetricCard icon={<TrendingUpIcon className="w-8 h-8 text-purple-300"/>} label="Alcance Estimado" value={`${minReach} - ${maxReach}`} unit="pessoas/mês" colorClass="border-purple-500/20" />
                                <MetricCard icon={<MouseClickIcon className="w-8 h-8 text-pink-400"/>} label="Cliques Potenciais" value={`${minClicks} - ${maxClicks}`} unit="cliques/mês" colorClass="border-pink-500/20" />
                                <MetricCard icon={<UserPlusIcon className="w-8 h-8 text-green-400"/>} label="Leads Potenciais" value={`${minLeads} - ${maxLeads}`} unit="contatos/mês" colorClass="border-green-500/20" />
                                <MetricCard icon={<CurrencyDollarIcon className="w-8 h-8 text-yellow-400"/>} label="Custo por Lead (CPL)" value={`R$${minCPL} - R$${maxCPL}`} unit="por contato" colorClass="border-yellow-500/20" />
                            </div>
                        </div>
                        
                        {/* Column 3: Summary & CTA */}
                        <div className="flex flex-col gap-6 lg:mt-10">
                             <div className="bg-gradient-to-br from-purple-600/30 to-pink-500/30 p-6 rounded-lg h-full flex flex-col justify-center text-center shadow-2xl">
                                <h3 className="text-xl font-bold text-white pb-2 mb-4">3. Resumo Anual</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-white/80">Investimento Anual em Mídia</p>
                                        <p className="text-2xl font-bold text-white">R$ {annualInvestment}</p>
                                    </div>
                                    <div className="w-full h-px bg-white/20"></div>
                                    <div>
                                        <p className="text-sm text-white/80">Investimento Total Projetado</p>
                                        <p className="text-3xl font-black gradient-text">R$ {totalAnnualInvestment}</p>
                                    </div>
                                </div>
                            </div>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                                Começar com R${investment}/mês
                            </a>
                        </div>
                    </div>
                    
                    <p className="text-xs text-gray-400 mt-8 text-center max-w-3xl mx-auto">
                        * Os resultados são estimativas baseadas em dados de mercado para campanhas bem otimizadas e podem variar conforme a qualidade do criativo, público-alvo e concorrência no leilão de anúncios. O CPL (Custo por Lead) é uma projeção da eficiência da campanha.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AdsCalculatorSection;