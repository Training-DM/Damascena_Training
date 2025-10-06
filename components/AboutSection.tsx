
import React from 'react';
import { TrophyIcon, StarIcon, PlusCircleIcon } from './icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Conheça seu treinador, <span className="text-blue-500">Felipe Damascena</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src="https://picsum.photos/seed/coach/500/500"
              alt="Felipe Damascena"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/20"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              "Atleta apaixonado e estudioso do movimento humano, minha missão é aplicar a ciência do esporte para que você alcance seus objetivos, seja cruzar a linha de chegada pela primeira vez ou buscar um novo recorde pessoal. Com a Damascena Performance, cada treino é um passo estratégico na sua jornada."
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8">
              <div className="flex items-center gap-3">
                <PlusCircleIcon className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100">+ de 50 atletas evoluindo</h3>
                  <p className="text-slate-400">Resultados comprovados</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrophyIcon className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Especialista em Endurance</h3>
                  <p className="text-slate-400">Natação, Ciclismo e Corrida</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StarIcon className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Certificação Nível X</h3>
                  <p className="text-slate-400">Conhecimento e Ciência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;