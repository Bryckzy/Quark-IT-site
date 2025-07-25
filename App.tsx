
import React from 'react';
import Slider from "react-slick";
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import HistorySection from './components/HistorySection';
import PricingSection from './components/PricingSection';
import AdsCalculatorSection from './components/AdsCalculatorSection';
import { SiteIcon, StarIcon, WhatsAppIcon } from './components/icons';

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+agendar+minha+consultoria+gratuita.";

const testimonials = [
  {
    name: "Juliana Costa",
    company: "Dona Jô Confeitaria",
    text: "Não entendo nada de site, mas a Quark IT resolveu tudo. Agora meus clientes fazem encomendas online e meu faturamento cresceu 30% em 3 meses. Incrível!",
    avatar: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=200&h=200&fit=crop&q=80",
    stars: 5,
  },
  {
    name: "Dr. Ricardo Almeida",
    company: "Advocacia Almeida & Filhos",
    text: "Precisávamos de uma presença online séria e profissional. A Quark entregou um site impecável e nos colocou no topo do Google. A quantidade de novos casos que chegam pelo site é impressionante.",
    avatar: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&fit=crop&q=80",
    stars: 5,
  },
  {
    name: "Carla Pires",
    company: "Dropshipping Pro",
    text: "As campanhas de Meta Ads que eles criaram para meu e-commerce foram um divisor de águas. O ROI é excelente e finalmente estou vendendo em escala sem queimar caixa.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    stars: 5,
  },
  {
    name: "Marcos Andrade",
    company: "Oficina Mecânica Precision",
    text: "Eu achava que Google era só pra empresa grande. Eles me colocaram no mapa e agora o telefone não para de tocar com gente da vizinhança procurando meus serviços. Melhor investimento que fiz!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    company: "Estúdio de Pilates Corpo em Foco",
    text: "O site ficou lindo, super rápido e passa a confiança que eu precisava. As campanhas de anúncio no Instagram trouxeram mais de 20 novas alunas no primeiro mês.",
    avatar: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=200&h=200&fit=crop&q=80",
    stars: 5,
  }
];

const App: React.FC = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <AnimatedBackground />
            <div className="relative z-10">
                <Header whatsappLink={WHATSAPP_LINK} />

                <main className="container mx-auto px-6 md:px-12 pt-32">
                    {/* Hero Section */}
                    <section id="inicio" className="text-center py-20 animate-fadeInUp">
                        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                            A vitrine digital que seu negócio precisa. <br /> <span className="gradient-text">Pronta para atrair e vender.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                           Com sites de alta performance, SEO que funciona e anúncios inteligentes, colocamos você na frente de quem está pronto para comprar.
                        </p>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                            Agende sua Consultoria Gratuita
                        </a>
                    </section>
                    
                    {/* Pricing Section */}
                    <PricingSection />

                    {/* Ads Calculator Section */}
                    <AdsCalculatorSection />
                    
                    {/* Platforms Section */}
                    <section id="plataformas" className="py-20 text-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-12">Plataformas que <span className="gradient-text">Dominamos</span></h2>
                      <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
                        <div className="flex flex-col items-center gap-2 text-gray-300">
                          <SiteIcon className="w-16 h-16 text-cyan-400" />
                          <span>Sites Profissionais</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-300">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads" className="h-16 object-contain" />
                          <span>Google Ads</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-300">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta Ads" className="h-12 object-contain" />
                          <span>Meta Ads</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 text-gray-300">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/800px-Google_Maps_icon_%282015-2020%29.svg.png" alt="Google Maps" className="h-16 object-contain" />
                          <span>Google Maps</span>
                        </div>
                      </div>
                    </section>
                    
                    {/* Testimonials Section */}
                    <section id="depoimentos" className="py-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que <span className="gradient-text">Falam de Nós</span></h2>
                        <Slider {...sliderSettings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="px-4">
                                    <div className="bg-[#110f24]/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between shadow-lg">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-purple-500" />
                                                <div>
                                                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                                                    <p className="text-purple-300 text-sm">{testimonial.company}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                                        </div>
                                        <div className="flex">
                                            {Array(testimonial.stars).fill(0).map((_, i) => (
                                                <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </section>

                    {/* History Section */}
                    <HistorySection />
                </main>
                
                <Footer />

                {/* Floating WhatsApp Button */}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center animate-whatsapp-pulse">
                    <WhatsAppIcon className="h-8 w-8 text-white" />
                </a>
            </div>
        </>
    );
};

export default App;
