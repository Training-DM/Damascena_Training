
import React from 'react';

interface HeroSectionProps {
  whatsappLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ whatsappLink }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/triathlon/1920/1080"
          alt="Atleta em ação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-black/60"></div>
      </div>
      <div className="relative z-10 p-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          DM <span className="text-blue-500">Training</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-slate-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Sua evolução no esporte começa aqui. Consultoria esportiva personalizada em natação, ciclismo e corrida.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 inline-block"
        >
          QUERO TRANSFORMAR MEU TREINO
        </a>
      </div>
    </section>
  );
};

export default HeroSection;