
import React from 'react';

const testimonials = [
  {
    photo: "https://picsum.photos/seed/joao/100/100",
    name: "João Silva",
    title: "Corredor Amador",
    quote: "Com a ajuda do Felipe, saí do sedentarismo e completei minha primeira meia maratona. A atenção aos detalhes e a motivação foram fundamentais. Recomendo demais!"
  },
  {
    photo: "https://picsum.photos/seed/maria/100/100",
    name: "Maria Oliveira",
    title: "Triatleta",
    quote: "O planejamento integrado do Felipe foi um divisor de águas na minha preparação. Consegui evoluir nas três modalidades e me senti mais preparada e confiante do que nunca."
  },
  {
    photo: "https://picsum.photos/seed/carlos/100/100",
    name: "Carlos Souza",
    title: "Ciclista",
    quote: "A consultoria me ajudou a entender como treinar com potência e a melhorar muito meu rendimento nas subidas. Os treinos são desafiadores na medida certa!"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Resultados que <span className="text-blue-500">inspiram</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-lg shadow-sm flex flex-col transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-lg">
              <p className="text-slate-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500" />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;