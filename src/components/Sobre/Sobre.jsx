import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import FotoPrincipal from '../../assets/tenda11.jpeg'; 
import FotoDetalhe from '../../assets/tenda01.jpeg';

const Sobre = () => {
  return (
    <section className="w-full py-24 px-6 bg-white overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* COLUNA ESQUERDA: CONTEÚDO */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <span className="bg-orange-100 text-orange-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
              Sobre a Metalonas
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#042c66] leading-[1.1]">
              Experiência de família, <br />
              estrutura de <span className="text-orange-500">gigante</span>
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 text-base leading-relaxed">
            <p>
              A <strong className="text-[#042c66]">Metalonas</strong> é uma empresa que carrega em seu DNA o rigor técnico e a paixão pelo que faz. Sob a liderança de <strong>Rui Alkimim</strong>, que soma mais de 20 anos de expertise, unimos a tradição de quem conhece cada detalhe das estruturas metálicas com a agilidade de uma equipe familiar, moderna e equipada.
            </p>

            <p>
              Com fabricação sob medida e equipamentos próprios, transformamos sua necessidade em uma estrutura personalizada e segura, atendendo desde contrutoras, condomínios até grandes eventos.
            </p>
          </div>

          {/* Bullet points para valorizar o TCC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Fabricação Própria', 'Montagem Segura', 'Projetos sob Medida', 'Atendimento do Rui'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-bold text-[#042c66]">
                <CheckCircleIcon className="w-5 h-5 text-orange-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA: COMPOSIÇÃO DE IMAGENS */}
        <div className="relative w-full h-[550px] mt-10 lg:mt-0">
          
          {/* Imagem Principal (Fundo com Shape) */}
          <div 
            className="absolute top-0 right-0 w-[90%] h-[85%] overflow-hidden rounded-tl-[80px] rounded-br-[80px] z-10 shadow-2xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 92%)' }}
          >
            <img 
              src={FotoPrincipal} 
              alt="Equipe Metalonas montando tenda" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
            />
          </div>

          {/* Imagem Secundária (Frente) */}
          <div className="absolute bottom-12 left-0 w-[65%] h-[45%] z-20 shadow-2xl border-[10px] border-white rounded-lg overflow-hidden">
            <img 
              src={FotoDetalhe} 
              alt="Detalhe da tenda Metalonas" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Badge de Experiência */}
          <div className="absolute bottom-4 left-4 bg-orange-500 p-8 text-white z-30 flex flex-col items-center justify-center rounded-2xl rounded-bl-[60px] shadow-xl transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
            <span className="text-5xl font-black leading-none">+20</span>
            <span className="text-[10px] uppercase font-black text-center mt-2 tracking-tighter">
              Anos de<br />Experiência
            </span>
          </div>

          {/* Elemento Decorativo (Pontilhados ou Background) */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-gray-100 -z-10 rounded-full blur-3xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default Sobre;