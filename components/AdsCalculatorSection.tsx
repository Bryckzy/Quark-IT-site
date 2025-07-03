
import React, { useState, useMemo } from 'react';
import { TrendingUpIcon, MouseClickIcon } from './icons';

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%21+Gostei+da+simula%C3%A7%C3%A3o+de+an%C3%BAncios+e+quero+saber+mais.";

const AdsCalculatorSection: React.FC = () => {
    const [investment, setInvestment] = useState(150);

    const handleInvestmentChange = (value: number) => {
        if (value < 30) {
            setInvestment(30);
        } else if (value > 1000) {
            setInvestment(1000);
        } else {
            setInvestment(value);
        }
    };

    const { minReach, maxReach, minClicks, maxClicks } = useMemo(() => {
        const min_reach = Math.round(investment * 20);
        const max_reach = Math.round(investment * 45);
        const min_clicks = Math.round(min_reach * 0.01);
        const max_clicks = Math.round(max_reach * 0.025);
        
        return { 
            minReach: min_reach.toLocaleString('pt-BR'), 
            maxReach: max_reach.toLocaleString('pt-BR'),
            minClicks: min_clicks.toLocaleString('pt-BR'),
            maxClicks: max_clicks.toLocaleString('pt-BR')
        };
    }, [investment]);

    return (
        <section id="simulador" className="py-20">
             <style>{`
                input[type="range"] {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 100%;
                    height: 10px;
                    background: #110f24;
                    border-radius: 9999px;
                    outline: none;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 28px;
                    height: 28px;
                    background-image: linear-gradient(to right, #ec4899, #8b5cf6);
                    cursor: grab;
                    border-radius: 9999px;
                    border: 3px solid white;
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
                    transition: transform 0.2s;
                }
                 input[type="range"]:active::-webkit-slider-thumb {
                    transform: scale(1.1);
                    cursor: grabbing;
                }
                input[type="range"]::-moz-range-thumb {
                    width: 28px;
                    height: 28px;
                    background-image: linear-gradient(to right, #ec4899, #8b5cf6);
                    cursor: grab;
                    border-radius: 9999px;
                    border: 3px solid white;
                    box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
                }
                 input[type="range"]:active::-moz-range-thumb {
                    cursor: grabbing;
                }
                /* Hide number input arrows */
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { 
                  -webkit-appearance: none; 
                  margin: 0; 
                }
                input[type=number] {
                  -moz-appearance: textfield;
                }
            `}</style>
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simule o Impacto dos Seus <span className="gradient-text">Anúncios</span></h2>
                    <p className="text-lg text-gray-300">
                        Veja como seu investimento em mídia pode se transformar em alcance e cliques. Ajuste o valor e descubra o potencial de crescimento do seu negócio.
                    </p>
                </div>

                <div className="bg-[#110f24]/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl shadow-purple-500/10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Control Panel */}
                        <div className="bg-[#0c0a1a]/50 p-6 rounded-lg">
                            <label htmlFor="investment-input" className="block text-lg font-bold text-white mb-2">
                                Investimento Mensal em Mídia
                            </label>
                            <p className="text-sm text-gray-400 mb-4">Arraste o slider ou digite o valor que planeja investir.</p>
                            <div className="flex items-center bg-black/30 rounded-lg p-2">
                                <span className="text-purple-300 font-bold px-3">R$</span>
                                <input
                                    id="investment-input"
                                    type="number"
                                    value={investment}
                                    onChange={(e) => handleInvestmentChange(Number(e.target.value))}
                                    className="w-full bg-transparent text-white text-3xl font-bold focus:outline-none"
                                    aria-label="Investimento Mensal"
                                />
                            </div>
                             <div className="mt-6">
                                <input
                                    id="investment-slider"
                                    type="range"
                                    min="30"
                                    max="1000"
                                    step="5"
                                    value={investment}
                                    onChange={(e) => handleInvestmentChange(Number(e.target.value))}
                                    aria-label="Simulador de Investimento em Mídia"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>R$30</span>
                                    <span>R$1000</span>
                                </div>
                            </div>
                        </div>

                        {/* Results Panel */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 p-6 rounded-lg text-center">
                                <div className="flex justify-center mb-3">
                                    <TrendingUpIcon className="w-10 h-10 text-purple-300"/>
                                </div>
                                <p className="text-sm text-purple-200">Alcance Estimado</p>
                                <p className="text-2xl md:text-3xl font-bold text-white">{minReach} - {maxReach}</p>
                                <p className="text-xs text-gray-400">pessoas/mês</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 p-6 rounded-lg text-center">
                                <div className="flex justify-center mb-3">
                                    <MouseClickIcon className="w-10 h-10 text-pink-400" />
                                </div>
                                <p className="text-sm text-pink-300">Cliques Potenciais no Link</p>
                                <p className="text-2xl md:text-3xl font-bold text-white">{minClicks} - {maxClicks}</p>
                                <p className="text-xs text-gray-400">cliques/mês</p>
                            </div>
                        </div>
                    </div>
                    {/* CTA and Disclaimer */}
                    <div className="mt-8 text-center">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                            Quero Impulsionar Meu Negócio
                        </a>
                         <p className="text-xs text-gray-400 mt-4 max-w-lg mx-auto">
                            * Os resultados são estimativas baseadas em dados de mercado e podem variar conforme a qualidade do criativo, público-alvo e concorrência no leilão de anúncios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdsCalculatorSection;
