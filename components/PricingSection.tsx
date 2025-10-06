import React, { useState } from 'react';
import { CheckIcon } from './icons';

interface PricingSectionProps {
  whatsappLink: string;
}

type BillingCycle = 'monthly' | 'quarterly' | 'semiannual' | 'annual';

interface Plan {
  name: string;
  idealFor: string;
  features: string[];
  prices: {
    [key in BillingCycle]?: { price: string; discount?: string };
  };
  buttonText: string;
  featured: boolean;
}

const WHATSAPP_PHONE_NUMBER = "5500000000000";

const generateWhatsAppLink = (planName: string, cycleLabel: string): string => {
    const message = `Olá! Tenho interesse no plano "${planName}" (pagamento ${cycleLabel}). Gostaria de mais informações.`;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_NUMBER}&text=${encodeURIComponent(message)}`;
};

const billingOptions: { id: BillingCycle; label: string }[] = [
    { id: 'monthly', label: 'Mensal' },
    { id: 'quarterly', label: 'Trimestral' },
    { id: 'semiannual', label: 'Semestral' },
    { id: 'annual', label: 'Anual' },
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
    const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('monthly');
    const currentPriceInfo = plan.prices[selectedCycle];
    
    const cycleLabel = billingOptions.find(opt => opt.id === selectedCycle)?.label ?? 'Mensal';
    const dynamicWhatsappLink = generateWhatsAppLink(plan.name, cycleLabel.toLowerCase());

    return (
        <div className={`bg-slate-800 p-8 rounded-lg w-full h-full flex flex-col border-2 ${plan.featured ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-700'}`}>
            <h3 className="text-2xl font-bold text-center text-blue-400 uppercase tracking-wider">{plan.name}</h3>
            <p className="text-center text-slate-400 mt-2 mb-6 h-12">{plan.idealFor}</p>
            
            <div className="bg-slate-700/50 p-1 rounded-full flex justify-between text-sm mb-6">
                {billingOptions.map(opt => (
                    plan.prices[opt.id] && (
                        <button
                            key={opt.id}
                            onClick={() => setSelectedCycle(opt.id)}
                            className={`w-full py-2 rounded-full font-semibold transition-colors duration-300 ${selectedCycle === opt.id ? 'bg-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                        >
                            {opt.label}
                        </button>
                    )
                ))}
            </div>

            <div className="text-center my-4">
                <span className="text-5xl font-extrabold text-white">{currentPriceInfo?.price}</span>
                <span className="text-slate-400">/mês</span>
                 {currentPriceInfo?.discount && <p className="text-blue-400 font-semibold mt-2">{currentPriceInfo.discount}</p>}
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
                {plan.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href={dynamicWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center w-full py-3 px-6 rounded-lg font-bold transition-colors duration-300 ${plan.featured ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}
            >
                {plan.buttonText}
            </a>
        </div>
    );
};


const singleSportPlansData: { [key: string]: Plan } = {
    Corrida: {
        name: "Corrida Performance",
        idealFor: "Para atletas que buscam superar seus limites no asfalto ou na trilha.",
        prices: {
            monthly: { price: 'R$ 250' },
            quarterly: { price: 'R$ 235', discount: 'Economize 6%' },
            semiannual: { price: 'R$ 220', discount: 'Economize 12%' },
            annual: { price: 'R$ 200', discount: 'Economize 20%' },
        },
        features: [
            "Planilha individualizada via TrainingPeaks",
            "Definição de zonas de treino (Ritmo e FC)",
            "Análise de métricas de performance",
            "Contato via WhatsApp para dúvidas",
            "Feedback semanal dos treinos",
        ],
        buttonText: "ESCOLHER PLANO CORRIDA",
        featured: false,
    },
    Ciclismo: {
        name: "Ciclismo Performance",
        idealFor: "Para atletas que querem mais potência, seja na estrada ou no MTB.",
        prices: {
            monthly: { price: 'R$ 250' },
            quarterly: { price: 'R$ 235', discount: 'Economize 6%' },
            semiannual: { price: 'R$ 220', discount: 'Economize 12%' },
            annual: { price: 'R$ 200', discount: 'Economize 20%' },
        },
        features: [
            "Planilha individualizada via TrainingPeaks",
            "Definição de zonas de treino (Potência e FC)",
            "Análise de dados de potência",
            "Contato via WhatsApp para dúvidas",
            "Feedback semanal dos treinos",
        ],
        buttonText: "ESCOLHER PLANO CICLISMO",
        featured: false,
    },
    Natação: {
        name: "Natação Performance",
        idealFor: "Para atletas que desejam melhorar técnica e velocidade na água.",
        prices: {
            monthly: { price: 'R$ 250' },
            quarterly: { price: 'R$ 235', discount: 'Economize 6%' },
            semiannual: { price: 'R$ 220', discount: 'Economize 12%' },
            annual: { price: 'R$ 200', discount: 'Economize 20%' },
        },
        features: [
            "Planilha individualizada via TrainingPeaks",
            "Definição de zonas de treino por pace",
            "Foco em técnica, velocidade e resistência",
            "Contato via WhatsApp para dúvidas",
            "Feedback semanal dos treinos",
        ],
        buttonText: "ESCOLHER PLANO NATAÇÃO",
        featured: false,
    },
};

const triathlonPlan: Plan = {
    name: "Triathlon Performance",
    idealFor: "A preparação completa e integrada para os desafios do triathlon.",
    prices: {
        monthly: { price: 'R$ 380' },
        quarterly: { price: 'R$ 360', discount: 'Economize 5%' },
        semiannual: { price: 'R$ 340', discount: 'Economize 10%' },
        annual: { price: 'R$ 320', discount: 'Economize 15%' },
    },
    features: [
      "Tudo dos planos de modalidade única",
      "Planejamento integrado para as 3 modalidades",
      "Estratégias de transição (T1 e T2)",
      "Planejamento nutricional para provas",
      "Análise de dados avançada e cruzada",
    ],
    buttonText: "ESCOLHER PLANO TRIATHLON",
    featured: true,
};


const SingleSportSelector: React.FC = () => {
    const tabs = Object.keys(singleSportPlansData);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedCycle, setSelectedCycle] = useState<BillingCycle>('monthly');

    const activePlan = singleSportPlansData[activeTab];
    const currentPriceInfo = activePlan.prices[selectedCycle];

    const cycleLabel = billingOptions.find(opt => opt.id === selectedCycle)?.label ?? 'Mensal';
    const dynamicWhatsappLink = generateWhatsAppLink(activePlan.name, cycleLabel.toLowerCase());

    return (
        <div className="bg-slate-800 p-8 rounded-lg w-full flex flex-col border-2 border-blue-500 shadow-lg shadow-blue-500/20 h-full">
            <div className="flex border-b border-slate-700 mb-6">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`-mb-px py-3 px-4 sm:px-6 font-bold text-lg transition-colors duration-300 ${activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-slate-400 hover:text-slate-100'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <p className="text-center text-slate-400 mt-2 mb-6 h-12">{activePlan.idealFor}</p>

            <div className="bg-slate-700/50 p-1 rounded-full flex justify-between text-sm mb-6">
                {billingOptions.map(opt => (
                    activePlan.prices[opt.id] && (
                        <button
                            key={opt.id}
                            onClick={() => setSelectedCycle(opt.id)}
                            className={`w-full py-2 rounded-full font-semibold transition-colors duration-300 ${selectedCycle === opt.id ? 'bg-blue-500 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
                        >
                            {opt.label}
                        </button>
                    )
                ))}
            </div>
            
            <div className="text-center my-4">
                <span className="text-5xl font-extrabold text-white">{currentPriceInfo?.price}</span>
                <span className="text-slate-400">/mês</span>
                 {currentPriceInfo?.discount && <p className="text-blue-400 font-semibold mt-2">{currentPriceInfo.discount}</p>}
            </div>

            <ul className="mt-6 space-y-4 flex-grow">
                {activePlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                    </li>
                ))}
            </ul>
            <a
                href={dynamicWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block text-center w-full py-3 px-6 rounded-lg font-bold bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors duration-300"
            >
                {activePlan.buttonText}
            </a>
        </div>
    );
};


const PricingSection: React.FC<PricingSectionProps> = ({ whatsappLink }) => {
  return (
    <section id="plans" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Escolha o plano que te levará ao <span className="text-blue-500">próximo nível</span></h2>
        <p className="text-blue-300 bg-blue-500/10 inline-block px-4 py-1 rounded-full mb-12">Valores promocionais de lançamento!</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-8">Modalidade Única</h3>
                <SingleSportSelector />
            </div>
            <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-8">Triathlon Completo</h3>
                <PlanCard plan={triathlonPlan} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;