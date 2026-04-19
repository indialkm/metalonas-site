import React from 'react';
import { 
  WrenchScrewdriverIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ChatBubbleBottomCenterTextIcon 
} from '@heroicons/react/24/outline';

const Servico = () => {
  const features = [
    {
      title: "Manutenção Especializada",
      desc: "Nossa equipe de excelência utiliza equipamentos de ponta para garantir a durabilidade e segurança total das suas tendas.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-orange-500" />,
      color: "from-blue-50 to-white"
    },
    {
      title: "Venda & Aluguel",
      desc: "Soluções flexíveis em galpões e estruturas que se adaptam ao seu projeto, garantindo sempre o melhor custo-benefício do mercado.",
      icon: <CurrencyDollarIcon className="w-8 h-8 text-orange-500" />,
      color: "from-orange-50 to-white"
    },
    {
      title: "Equipe de Elite",
      desc: "Profissionais que se destacam pela agilidade e vasta experiência técnica, prontos para atuar com rapidez em qualquer cenário.",
      icon: <UserGroupIcon className="w-8 h-8 text-orange-500" />,
      color: "from-blue-50 to-white"
    },
    {
      title: "Suporte Consultivo",
      desc: "Mais do que fornecer estruturas, oferecemos consultoria completa para entender e viabilizar a necessidade real do seu evento.",
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-orange-500" />,
      color: "from-orange-50 to-white"
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid: 1 coluna no mobile, 2 em tablets, 4 em desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div 
              key={idx}
              className={`bg-gradient-to-br ${f.color} p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4`}
            >
              <div className="p-3 bg-white rounded-xl shadow-inner">
                {f.icon}
              </div>
              
              <h3 className="text-[#1a363a] font-black text-lg uppercase tracking-tight leading-tight">
                {f.title}
              </h3>
              
              <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servico;