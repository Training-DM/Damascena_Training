
import React from 'react';

interface CtaSectionProps {
  whatsappLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ whatsappLink }) => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Pronto para começar sua <span className="text-blue-500">jornada de evolução?</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
          Chega de treinar sem direção. Vamos juntos construir a sua melhor versão no esporte. Clique no botão abaixo e me chame para uma conversa sem compromisso.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-5 px-12 rounded-lg text-xl hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300 inline-block shadow-lg shadow-blue-500/30"
        >
          AGENDAR CONVERSA INICIAL
        </a>
      </div>
    </section>
  );
};

export default CtaSection;