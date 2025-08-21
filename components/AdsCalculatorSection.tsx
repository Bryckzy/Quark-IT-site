
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
    const [view, setView] = useState('monthly'); // 'monthly' or 'annual'
    const investmentPresets = [50, 100, 500];

    const handleInvestmentChange = (value: number) => {
        const minVal = 30;
        const maxVal = 1000;
        if (value < minVal) setInvestment(minVal);
        else if (value > maxVal) setInvestment(maxVal);
        else setInvestment(value);
    };

    const {
        reach, clicks, leads, cpl,
        reachUnit, clicksUnit, leadsUnit,
        mediaInvestmentLabel, mediaInvestmentValue,
        totalInvestmentLabel, totalInvestmentValue,
        summaryTitle,
        whatsappLink,
        managementFeeTitle,
        managementFeeValue,
        managementFeeSubtitle
    } = useMemo(() => {
        const monthlyMinReach = Math.round(investment * 20);
        const monthlyMaxReach = Math.round(investment * 45);
        const monthlyMinClicks = Math.round(monthlyMinReach * 0.015);
        const monthlyMaxClicks = Math.round(monthlyMaxReach * 0.03);

        const highCPLRate = 5.0;
        const lowCPLRate = 2.0;
        const monthlyMinLeads = Math.round(investment / highCPLRate);
        const monthlyMaxLeads = Math.round(investment / lowCPLRate);

        const monthlyManagementFee = 99.90;
        const annualManagementFee = 899.90;

        const dynamicWhatsappLink = `https://wa.me/5511911221418?text=${encodeURIComponent(`Olá! Gostaria de começar com um investimento de R$${investment}/mês.`)}`;
        
        const formatNumber = (num) => num.toLocaleString('pt-BR');
        const formatCurrency = (num) => num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        const savings = Math.round(((monthlyManagementFee * 12) - annualManagementFee) / (monthlyManagementFee * 12) * 100);

        const data = {
            cpl: `R$${lowCPLRate.toFixed(2).replace('.',',')} - R$${highCPLRate.toFixed(2).replace('.',',')}`,
            whatsappLink: dynamicWhatsappLink,
            reach: `${formatNumber(monthlyMinReach)} - ${formatNumber(monthlyMaxReach)}`,
            clicks: `${formatNumber(monthlyMinClicks)} - ${formatNumber(monthlyMaxClicks)}`,
            leads: `${formatNumber(monthlyMinLeads)} - ${formatNumber(monthlyMaxLeads)}`,
            reachUnit: 'pessoas/mês',
            clicksUnit: 'cliques/mês',
            leadsUnit: 'contatos/mês',
            summaryTitle: '3. Resumo Mensal',
            mediaInvestmentLabel: 'Investimento Mensal em Mídia',
            mediaInvestmentValue: formatCurrency(investment),
            totalInvestmentLabel: 'Investimento Total Projetado',
            totalInvestmentValue: formatCurrency(investment + monthlyManagementFee),
            managementFeeTitle: 'Taxa de Gestão Mensal',
            managementFeeValue: formatCurrency(monthlyManagementFee),
            managementFeeSubtitle: `Economize ${savings}% no plano anual!`,
        };

        if (view === 'annual') {
            data.reach = `${formatNumber(monthlyMinReach * 12)} - ${formatNumber(monthlyMaxReach * 12)}`;
            data.clicks = `${formatNumber(monthlyMinClicks * 12)} - ${formatNumber(monthlyMaxClicks * 12)}`;
            data.leads = `${formatNumber(monthlyMinLeads * 12)} - ${formatNumber(monthlyMaxLeads * 12)}`;
            data.reachUnit = 'pessoas/ano';
            data.clicksUnit = 'cliques/ano';
            data.leadsUnit = 'contatos/ano';
            data.summaryTitle = '3. Resumo Anual';
            data.mediaInvestmentLabel = 'Investimento Anual em Mídia';
            data.mediaInvestmentValue = formatCurrency(investment * 12);
            data.totalInvestmentLabel = 'Investimento Total Projetado';
            data.totalInvestmentValue = formatCurrency((investment * 12) + annualManagementFee);
            data.managementFeeTitle = 'Taxa de Gestão Anual';
            data.managementFeeValue = formatCurrency(annualManagementFee);
            data.managementFeeSubtitle = `Pagamento único com ${savings}% de desconto.`;
        }

        return data;
    }, [investment, view]);

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
                    <div className="flex justify-center mb-8">
                        <div className="relative flex items-center p-1 bg-black/30 border border-white/10 rounded-full">
                            <button onClick={() => setView('monthly')} className={`relative z-10 w-32 md:w-36 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${view === 'monthly' ? 'text-white' : 'text-gray-400'}`} aria-pressed={view === 'monthly'}>
                                Mensal
                            </button>
                            <button onClick={() => setView('annual')} className={`relative z-10 w-32 md:w-36 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${view === 'annual' ? 'text-white' : 'text-gray-400'}`} aria-pressed={view === 'annual'}>
                                Anual
                            </button>
                            <span
                                aria-hidden="true"
                                className={`absolute top-1 bottom-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-transform duration-300 ease-in-out ${
                                    view === 'annual' ? 'transform translate-x-full' : 'transform translate-x-0'
                                }`}
                                style={{ width: 'calc(50% - 4px)', left: '4px' }}
                            ></span>
                        </div>
                    </div>
                    
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
                                <div className="flex items-center gap-2 mt-4">
                                    {investmentPresets.map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => handleInvestmentChange(preset)}
                                            className={`flex-1 py-2 px-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                                                investment === preset
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                                                    : 'bg-black/30 text-gray-300 hover:bg-white/10 hover:text-white'
                                            }`}
                                        >
                                            R${preset}
                                        </button>
                                    ))}
                                </div>
                            </div>
                             <div className="bg-[#0c0a1a]/50 p-4 rounded-lg text-center">
                                <p className="text-sm text-white font-bold">{managementFeeTitle}</p>
                                <p className="text-2xl gradient-text font-black">{managementFeeValue}</p>
                                <p className="text-xs text-gray-400">{managementFeeSubtitle}</p>
                            </div>
                        </div>

                        {/* Column 2: Results */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-xl font-bold text-white border-b-2 border-pink-500/30 pb-2">2. Projeção de Resultados</h3>
                            <div className="grid grid-cols-2 gap-4 flex-grow">
                                <MetricCard icon={<TrendingUpIcon className="w-8 h-8 text-purple-300"/>} label="Alcance Estimado" value={reach} unit={reachUnit} colorClass="border-purple-500/20" />
                                <MetricCard icon={<MouseClickIcon className="w-8 h-8 text-pink-400"/>} label="Cliques Potenciais" value={clicks} unit={clicksUnit} colorClass="border-pink-500/20" />
                                <MetricCard icon={<UserPlusIcon className="w-8 h-8 text-green-400"/>} label="Leads Potenciais" value={leads} unit={leadsUnit} colorClass="border-green-500/20" />
                                <MetricCard icon={<CurrencyDollarIcon className="w-8 h-8 text-yellow-400"/>} label="Custo por Lead (CPL)" value={cpl} unit="por contato" colorClass="border-yellow-500/20" />
                            </div>
                        </div>
                        
                        {/* Column 3: Summary & CTA */}
                        <div className="flex flex-col gap-6 lg:mt-10">
                             <div className="bg-gradient-to-br from-purple-600/30 to-pink-500/30 p-6 rounded-lg h-full flex flex-col justify-center text-center shadow-2xl">
                                <h3 className="text-xl font-bold text-white pb-2 mb-4">{summaryTitle}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-white/80">{mediaInvestmentLabel}</p>
                                        <p className="text-2xl font-bold text-white">{mediaInvestmentValue}</p>
                                    </div>
                                    <div className="w-full h-px bg-white/20"></div>
                                    <div>
                                        <p className="text-sm text-white/80">{totalInvestmentLabel}</p>
                                        <p className="text-3xl font-black gradient-text">{totalInvestmentValue}</p>
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