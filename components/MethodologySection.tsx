
import React from 'react';
import { ClipboardIcon, CalendarIcon, ChartBarIcon, ChatBubbleIcon } from './icons';

const methodologySteps = [
  {
    icon: <ClipboardIcon className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Análise Inicial",
    description: "Entendemos seu histórico, seus objetivos e sua rotina para criar um plano que se encaixe perfeitamente na sua vida."
  },
  {
    icon: <CalendarIcon className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Planejamento Personalizado",
    description: "Você recebe suas planilhas de treino via TrainingPeaks, com todos os detalhes de cada sessão."
  },
  {
    icon: <ChartBarIcon className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Acompanhamento Contínuo",
    description: "Analisamos seus dados, monitoramos sua evolução e ajustamos o plano semanalmente para garantir os melhores resultados."
  },
  {
    icon: <ChatBubbleIcon className="w-12 h-12 text-blue-500 mb-4" />,
    title: "Comunicação Direta",
    description: "Tenha um canal aberto e direto via WhatsApp para tirar dúvidas, compartilhar feedbacks e manter a motivação em alta."
  }
];

const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Uma metodologia <span className="text-blue-500">focada em você</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((step, index) => (
            <div key={index} className="bg-slate-900 border border-slate-700 p-8 rounded-lg flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/20">
              {step.icon}
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;