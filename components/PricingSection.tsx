
import React, { useState } from 'react';
import { SiteIcon, SeoIcon, AdsIcon, CheckCircleIcon, RocketIcon, ShieldIcon, CrownIcon } from './icons';

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%21+Vim+pelo+site+e+tenho+interesse+em+um+de+seus+planos.";

const products = [
    {
        icon: <SiteIcon className="w-8 h-8 text-white" />,
        title: 'Site Profissional',
        price: 'R$150',
        priceDetail: 'pagamento único',
        description: 'Tenha um site bonito, rápido e pronto para impressionar em até 48h.',
        features: ['Página única com até 5 blocos', 'Responsivo (mobile + desktop)', 'Botão direto para WhatsApp', 'Hospedagem gratuita por 30 dias'],
        idealFor: 'Negócios locais, autônomos, pequenos comércios e serviços.',
        gradientClass: 'from-green-400 to-cyan-500',
        shadowClass: 'hover:shadow-cyan-500/30'
    },
    {
        icon: <SeoIcon className="w-8 h-8 text-white" />,
        title: 'SEO Local',
        price: 'R$200',
        priceDetail: 'pagamento único',
        description: 'Coloque sua empresa no mapa do Google e seja encontrado por clientes na sua região.',
        features: ['Cadastro/otimização no Google Meu Negócio', 'Inserção de palavras-chave locais', 'Atualização de fotos, links e dados', 'Relatório simples de visibilidade'],
        idealFor: 'Negócios físicos que querem ser encontrados nas buscas como "perto de mim".',
        gradientClass: 'from-orange-400 to-amber-500',
        shadowClass: 'hover:shadow-amber-500/30'
    },
    {
        icon: <AdsIcon className="w-8 h-8 text-white" />,
        title: 'Gestão de Meta Ads*',
        price: 'A partir de R$200',
        priceDetail: '/mês',
        description: 'Campanhas inteligentes no Instagram e Facebook para atrair clientes qualificados.',
        features: ['Criação de até 2 campanhas mensais', 'Segmentação por localização e interesse', 'Suporte na definição de objetivos', 'Relatórios mensais de desempenho'],
        idealFor: 'Quem quer vender em escala sem queimar caixa com anúncios.',
        gradientClass: 'from-pink-500 to-rose-500',
        shadowClass: 'hover:shadow-rose-500/30'
    }
];

const plans = [
    {
        icon: <RocketIcon className="w-8 h-8 text-white" />,
        title: 'Plano Impulso Digital',
        price: 'R$349',
        priceDetail: 'pagamento único',
        description: 'Presença digital básica e eficaz, entregue em até 4 dias úteis.',
        features: ['Site one-page responsivo', 'SEO local + Google Meu Negócio', 'Integração com WhatsApp'],
        gradientClass: 'from-sky-400 to-indigo-500',
        shadowClass: 'hover:shadow-indigo-500/30'
    },
    {
        icon: <ShieldIcon className="w-8 h-8 text-white" />,
        title: 'Plano Presença Forte',
        price: 'R$1.799',
        priceDetail: 'pagamento único',
        description: 'Para empresas que querem crescer com tráfego e identidade visual forte.',
        features: ['Site de até 5 seções', 'SEO com palavras-chave personalizadas', 'Identidade visual básica (logo, cores)', '30 dias de gestão Meta Ads (sem verba)', 'Suporte no WhatsApp'],
        gradientClass: 'from-purple-500 to-violet-600',
        shadowClass: 'hover:shadow-violet-600/40',
        highlight: true,
        badge: 'Mais Popular'
    },
    {
        icon: <CrownIcon className="w-8 h-8 text-white" />,
        title: 'Plano Estratégia Total',
        price: 'R$4.899',
        priceDetail: 'pagamento único',
        description: 'Uma equipe digital completa cuidando do crescimento do seu negócio.',
        features: ['Site premium (até 7 pgs ou e-commerce)', 'SEO avançado com análise de concorrência', 'Campanhas Meta Ads + Google Ads', 'CRM leve (Notion/Trello)', 'Identidade visual completa', 'Mentorias quinzenais', 'Planejamento de conteúdo'],
        gradientClass: 'from-amber-400 to-yellow-500',
        shadowClass: 'hover:shadow-yellow-500/30'
    }
];

const ToggleButton = ({ showPlans, setShowPlans }) => (
    <div className="flex justify-center mb-12">
        <div className="relative flex items-center p-1 bg-black/30 border border-white/10 rounded-full">
            <button
                onClick={() => setShowPlans(false)}
                className={`relative z-10 w-40 md:w-48 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${!showPlans ? 'text-white' : 'text-gray-400'}`}
                aria-pressed={!showPlans}
            >
                Produtos Individuais
            </button>
            <button
                onClick={() => setShowPlans(true)}
                className={`relative z-10 w-40 md:w-48 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${showPlans ? 'text-white' : 'text-gray-400'}`}
                aria-pressed={showPlans}
            >
                Planos Combinados
            </button>
            <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full transition-transform duration-300 ease-in-out ${
                    showPlans ? 'transform translate-x-full' : 'transform translate-x-0'
                }`}
                style={{ width: 'calc(50% - 4px)', left: '4px' }}
            ></span>
        </div>
    </div>
);

const PricingCard = ({ item }) => (
    <div className={`bg-[#1d1a33] rounded-2xl h-full flex flex-col shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-white/10 ${item.shadowClass}`}>
        {/* Gradient Header */}
        <div className={`px-8 py-6 bg-gradient-to-r ${item.gradientClass}`}>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-black/20 backdrop-blur-sm">
                    {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>
        </div>

        <div className="p-8 flex-grow flex flex-col">
             <div className="mb-6">
                <span className="text-4xl font-black gradient-text">{item.price}</span>
                <span className="text-gray-400 ml-2">{item.priceDetail}</span>
            </div>
            
            <p className="text-gray-300 mb-6 min-h-[60px]">{item.description}</p>
            
            <ul className="space-y-3 mb-8 flex-grow">
                {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>

            {item.idealFor && (
                <p className="text-xs text-purple-200/70 italic bg-purple-500/10 p-3 rounded-lg mt-auto">
                    <strong>Ideal para:</strong> {item.idealFor}
                </p>
            )}
        </div>
        
        <div className="p-8 pt-0 mt-auto">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-white/10 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Contratar Agora
            </a>
        </div>
    </div>
);


const PricingSection: React.FC = () => {
    const [showPlans, setShowPlans] = useState(false);
    const [vacancies] = useState(3);

    return (
        <section id="planos" className="py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos e Preços Flexíveis</h2>
                    <p className="text-lg text-gray-300">
                        Escolha a solução ideal para o seu momento. Desde produtos individuais até pacotes completos para uma transformação digital.
                    </p>
                </div>
                
                <div className="text-center mb-12 bg-gradient-to-r from-yellow-400/10 via-yellow-500/20 to-yellow-400/10 border-t-2 border-b-2 border-yellow-400 p-6 rounded-xl animate-pulse-glow-soft" style={{animation: 'pulse-glow-soft 3s infinite'}}>
                     <style>{`
                        @keyframes pulse-glow-soft {
                            0%, 100% { box-shadow: 0 0 15px rgba(250, 204, 21, 0.2); }
                            50% { box-shadow: 0 0 30px rgba(250, 204, 21, 0.4); }
                        }
                    `}</style>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">⚡️ OFERTA DE LANÇAMENTO ⚡️</h3>
                    <p className="text-white text-lg mb-2">Os 10 primeiros clientes do mês ganham <span className="font-bold">uma semana de gestão de anúncios grátis!</span></p>
                    <p className="text-xl font-black bg-white/90 gradient-text inline-block px-4 py-1 rounded">Restam apenas {vacancies} vagas!</p>
                </div>

                <ToggleButton showPlans={showPlans} setShowPlans={setShowPlans} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(showPlans ? plans : products).map((item, index) => (
                        <div key={index} className="relative h-full">
                            {item.badge && (
                                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white text-purple-700 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-10">
                                    {item.badge}
                                </span>
                            )}
                            <PricingCard item={item} />
                        </div>
                    ))}
                </div>
                
                 <div className="mt-8 text-center text-gray-400 text-sm max-w-4xl mx-auto space-y-1">
                    <p>
                        * O valor da Gestão de Ads pode variar conforme a complexidade do projeto e número de campanhas.
                    </p>
                    <p>
                        ❗️ O valor da mídia (dinheiro investido nos anúncios) é um custo separado, pago diretamente ao Meta/Facebook. Você define o valor da sua verba.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
